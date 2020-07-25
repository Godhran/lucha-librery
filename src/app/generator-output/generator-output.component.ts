import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import rough from 'roughjs/bin/rough';
import generatePoster from '../generate-poster';
import logo from '../logo';
import Palette from '../palettes';
import Figure from '../figures';
import Mask from '../masks';
import Name from '../names';
import { TimelineLite } from 'gsap';

@Component({
  selector: 'generator-output',
  templateUrl: './generator-output.component.html',
  styleUrls: ['./generator-output.component.scss']
})

export class GeneratorOutputComponent implements OnInit {
  
  loadingMaskAnimation = new TimelineLite({paused:true,repeat:0});
  posterLoading:boolean = false;

  canvas = document.getElementById('poster');
  genFirstName: string = "";
  genSurname: string = "";
  constructor() { }

  ngOnInit() {
  }

  startGenerator() {
    this.posterLoading=true;
    let windowWidth = window.innerWidth * 0.75;
    let settingsButton = <HTMLInputElement>document.getElementById('generate-button');
    let poster = document.getElementById('poster');
    let posterElement = poster as HTMLCanvasElement;
    let rc = rough.canvas(posterElement);
    var ctx = posterElement.getContext("2d");
    settingsButton.disabled = true;
    settingsButton.innerHTML = "Processing...";

    //Prepare Canvas
    ctx.clearRect(0, 0, posterElement.width, posterElement.height);
    let loadingDiv = document.getElementById('loading-div');

    let fullNameString=this.genFirstName.toLocaleLowerCase() + this.genSurname.toLocaleLowerCase();
    fullNameString=fullNameString.replace(/[^A-Za-z]/g, "");
    let fullNameValue=this.hashCode(fullNameString);
    
    //Decide mask, figure and palette for username. Consisent for each version.
    let palette = Palette[fullNameValue%Palette.length];
    let figure = Figure[fullNameValue%Figure.length];
    let mask = Mask[fullNameValue%Mask.length];

    let fontChecker = document.getElementsByClassName("navbar-brand");
    let fontCTX = getComputedStyle(fontChecker[0]).getPropertyValue('font-family');

    let posterContainer = document.getElementById("poster-container");

    //Delay to ensure "Wood Stamp" font is loaded
    this.delay(3000).then(any => {
      
      //50/50 chance to reverse the colours of the palette
      if ((fullNameValue%2 == 0)) {
        let tempPalette = palette.light;
        palette.light = palette.dark;
        palette.dark = tempPalette;
      }
      
      let exclamationArray = [
        "Behold!",
        "Witness!"
      ];
      
      let adjectiveString = "";
      let nounString = "";

      //50/50 the name has THE prefix or starts with an exclamation
      if (((fullNameValue % Name.namesEnglish.length) % 2 == 0)) {
        adjectiveString = "the";
      } else {
        adjectiveString=exclamationArray[fullNameValue%exclamationArray.length];
      }

      //Noun chosen from list
      nounString = Name.generateName(palette.name, adjectiveString, fullNameValue);

      //Catch the smart asses
      if(nounString.includes('undefined')){
        nounString="Clever Mark";
      }

      generatePoster(rc, palette, figure.Paths, mask.Large, mask.Small.find(fig => fig.Figure === figure.Name).Paths);

      ctx.font = `200px ${fontCTX}`;
      ctx.textAlign = "start";
      ctx.fillStyle = palette.light;
      ctx.fillText(adjectiveString, 40, 760, 175);

      ctx.font = `200px ${fontCTX}`;
      ctx.textAlign = "start";
      ctx.fillStyle = palette.dark;
      ctx.fillText(adjectiveString, 50, 750, 175);

      ctx.font = "180px Wood Stamp";
      ctx.textAlign = "start";
      ctx.fillStyle = palette.light;
      ctx.fillText(nounString, 40, 885, 500);

      ctx.font = "180px Wood Stamp";
      ctx.textAlign = "start";
      ctx.fillStyle = palette.dark;
      ctx.fillText(nounString, 50, 875, 500);

      //Make sure poster adjusts to the screen it's generated on
      let posterDimensions = { width: 600, height: 900 };
      if (windowWidth < 600) {
        posterDimensions.width = windowWidth;
      }

      poster.style.width = `${posterDimensions.width}px`;
      settingsButton.disabled = false;
      settingsButton.innerHTML = "Suit up";
      
      //Disable loading animation
      this.posterLoading=false;
    });
  }

  updateFirstName(event) {
    this.genFirstName = this.sanitize(event.target.value);
  }

  updateSurname(event) {
    this.genSurname = this.sanitize(event.target.value);
  }

  hashCode(string){
    var hash = 0;
    if (string.length == 0) return hash;
    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  sanitize(stringToSanitize) {
    if (stringToSanitize !== undefined) {
      const map = {
        '&': '',
        '<': '',
        '>': '',
        '"': '',
        "'": '',
        "/": '',
      };
      const reg = /[&<>"'/]/ig;
      return stringToSanitize.replace(reg, (match) => (map[match]));
    } else {
      return undefined;
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log());
  }

}
