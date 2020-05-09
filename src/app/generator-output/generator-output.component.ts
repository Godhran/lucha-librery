import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import rough from 'roughjs/bin/rough';
import generatePoster from '../generate-poster';
import logo from '../logo';
import Palette from '../palettes';
import Figure from '../figures';
import Mask from '../masks';
import Name from '../names';

@Component({
  selector: 'generator-output',
  templateUrl: './generator-output.component.html',
  styleUrls: ['./generator-output.component.scss']
})
export class GeneratorOutputComponent implements OnInit {

  canvas = document.getElementById('poster');
  genFirstName:string=null;
  genSurname:string=null;
  windowWidth=window.innerWidth*0.75;
  constructor() { }
  // svg:SVGSVGElement;
  // rc = rough.svg(this.svg);
  // @ViewChild("mySVG", {static: false}) svg: SVGSVGElement;
  // @ViewChild("poster", {static: false}) posterCanvas: HTMLCanvasElement;

  // ngAfterViewInit(){
  //   let rc = rough.svg(this.svg);
  //   // this.rc.circle(50, 150, 80, {
  //   //   fill: "rgb(10,150,10)",
  //   //   fillWeight: 3 // thicker lines for hachure
  //   // });
  //   console.log("RC");
  //   console.log(rc);
  //   console.log(this.svg);
  //   // console.log(this.divView);
  //   // this.divView.nativeElement.innerHTML = this.rc;

  // }
  ngOnInit() {
    // console.log(logo);

    // let palette = Palette[Math.floor(Math.random() * Palette.length)];
    // let figure = Figure[Math.floor(Math.random() * Figure.length)];
    // let mask = Mask[Math.floor(Math.random() * Mask.length)];

    // console.log(palette);
    // console.log(figure);
    // console.log(mask);


    // // console.log(textureImage);
    // let poster = document.getElementById('poster');
    // let posterElement = poster as HTMLCanvasElement;
    // let rc = rough.canvas(posterElement);
    // var ctx = posterElement.getContext("2d");

    // let fontChecker = document.getElementsByClassName("navbar-brand");
    // let fontCTX = getComputedStyle(fontChecker[0]).getPropertyValue('font-family');

    // let posterContainer=document.getElementById("poster-container");

    // console.log(document.getElementById("poster-container").offsetHeight);
    // console.log(document.getElementById("poster-container").offsetWidth);
    // console.log("MIMI");
    // console.log(mask.Small);
    // console.log(mask.Small.find(fig => fig.Figure === figure.Name));
    // console.log(mask.Small.find(fig => fig.Figure === figure.Name).Figure);

    // this.delay(3000).then(any => {
    //   console.log(fontCTX);
    //   // let fontChecker = document.getElementById('load-font');
    //   // console.log(fontChecker.style.display);

    //   if ((Math.floor(Math.random() * 2) == 0)) {
    //     let temp = palette.light;
    //     palette.light = palette.dark;
    //     palette.dark = temp;
    //   }
    //   let line1Array = [
    //     "Behold!",
    //     "Witness!"
    //   ];

    //   let stringA = "Jesus";
    //   let stringB = "Fucking Christ"



    //   if ((Math.floor(Math.random() * 2) == 0)) {
    //     stringA = "the";
    //   } else {
    //     stringA = line1Array[Math.floor(Math.random() * line1Array.length)];
    //   }


    //   stringB = Name.generateName(palette.name,stringA);
    //   // stringB+=" Christ";

    //   // if ((Math.floor(Math.random() * 2) == 0)) {
    //   //   const result = await translate(`I'm fine.`, {
    //   //     tld: "cn",
    //   //     to: "zh-CN",
    //   //   });
    //   //   const data = result.data[0];
    //   // }

    //   generatePoster(rc, palette, figure.Paths, mask.Large, mask.Small.find(fig => fig.Figure === figure.Name).Paths);

    //   ctx.font = `200px ${fontCTX}`;
    //   ctx.textAlign = "start";
    //   ctx.fillStyle = palette.light;
    //   ctx.fillText(stringA, 40, 760, 175);

    //   ctx.font = `200px ${fontCTX}`;
    //   ctx.textAlign = "start";
    //   ctx.fillStyle = palette.dark;
    //   ctx.fillText(stringA, 50, 750, 175);

    //   ctx.font = "180px Wood Stamp";
    //   ctx.textAlign = "start";
    //   ctx.fillStyle = palette.light;
    //   ctx.fillText(stringB, 40, 885, 500);

    //   ctx.font = "180px Wood Stamp";
    //   ctx.textAlign = "start";
    //   ctx.fillStyle = palette.dark;
    //   ctx.fillText(stringB, 50, 875, 500);

    //   let textureImage = new Image();
    //   textureImage.onload = function () {
    //     // ctx.fillStyle = "#09f";
    //     // ctx.fillRect(0, 0, posterElement.width, posterElement.height);

    //     // // set composite mode
    //     // ctx.globalCompositeOperation = "destination-in";

    //     // // draw image


    //     ctx.drawImage(textureImage, 0, 0);
    //     console.log('the image is drawn');
    //   }
    //   textureImage.src = `/assets/img/${palette.light.replace('#', '')}.png`;
    //   // ctx.drawImage(textureImage, 0, 0, textureImage.width, textureImage.height);
    //   // ctx.drawImage(textureImage,0,0);
    //   // textureImage.src = "/assets/img/Texture.png";
      

    //   // let posterHeight=;
    //   let posterDimensions={width:600,height:900};
    //   if((window.innerWidth*0.55)<600){
    //       posterDimensions.width=window.innerWidth*0.55;
    //   }
    //   // if((window.innerHeight/2)<900){
    //   //     posterDimensions.height=window.height/2;
    //   // }
    //   let posterWidth=posterContainer.offsetWidth;
    //   // console.log(window.innerWidth);

    //   posterWidth;
    //   poster.style.width=`${posterDimensions.width}px`;

    // // posterContainer.style.width=`${10}px`;
    // // posterContainer.style.height=`1000px`;
    //   console.log(posterElement);
    // });
    // logo.forEach(logoElement => {
    //   if (logoElement.visible) {
    //     rc.path(logoElement.path, {
    //       stroke: 'red',
    //       strokeWidth: 1,
    //       fill: 'blue'
    //     });
    //   }
    // });
    // if (posterElement.getContext) {
    //   let ctx = posterElement.getContext('2d');

    //   ctx.fillStyle = "#D74022";
    //   ctx.fillRect(25, 25, 150, 150);

    //   ctx.fillStyle = "rgba(0,0,0,0.5)";
    //   ctx.clearRect(60, 60, 120, 120);
    //   ctx.strokeRect(90, 90, 80, 80);
    // }
  }

  startGenerator(){
    console.log(this.genFirstName + " " + this.genSurname);

    console.log(logo);

    let palette = Palette[Math.floor(Math.random() * Palette.length)];
    let figure = Figure[Math.floor(Math.random() * Figure.length)];
    let mask = Mask[Math.floor(Math.random() * Mask.length)];

    console.log(palette);
    console.log(figure);
    console.log(mask);


    // console.log(textureImage);
    let poster = document.getElementById('poster');
    let posterElement = poster as HTMLCanvasElement;
    let rc = rough.canvas(posterElement);
    var ctx = posterElement.getContext("2d");

    let fontChecker = document.getElementsByClassName("navbar-brand");
    let fontCTX = getComputedStyle(fontChecker[0]).getPropertyValue('font-family');

    let posterContainer=document.getElementById("poster-container");

    console.log(document.getElementById("poster-container").offsetHeight);
    console.log(document.getElementById("poster-container").offsetWidth);
    console.log("MIMI");
    console.log(mask.Small);
    console.log(mask.Small.find(fig => fig.Figure === figure.Name));
    console.log(mask.Small.find(fig => fig.Figure === figure.Name).Figure);

    this.delay(3000).then(any => {
      console.log(fontCTX);
      // let fontChecker = document.getElementById('load-font');
      // console.log(fontChecker.style.display);

      if ((Math.floor(Math.random() * 2) == 0)) {
        let temp = palette.light;
        palette.light = palette.dark;
        palette.dark = temp;
      }
      let line1Array = [
        "Behold!",
        "Witness!"
      ];

      let stringA = "Jesus";
      let stringB = "Fucking Christ"



      if ((Math.floor(Math.random() * 2) == 0)) {
        stringA = "the";
      } else {
        stringA = line1Array[Math.floor(Math.random() * line1Array.length)];
      }


      stringB = Name.generateName(palette.name,stringA);
      // stringB+=" Christ";

      // if ((Math.floor(Math.random() * 2) == 0)) {
      //   const result = await translate(`I'm fine.`, {
      //     tld: "cn",
      //     to: "zh-CN",
      //   });
      //   const data = result.data[0];
      // }
      console.log(this.genSurname+" "+this.genFirstName)
      if(this.genFirstName!=null && this.genSurname!=null){
        stringA = line1Array[Math.floor(Math.random() * line1Array.length)];
        stringB = `${this.genFirstName.toLocaleLowerCase()} ${this.genSurname.toLocaleLowerCase()}`;
      }
      console.log("OUTPUT");
      console.log(stringB);
      console.log(stringA+" "+stringB);

      generatePoster(rc, palette, figure.Paths, mask.Large, mask.Small.find(fig => fig.Figure === figure.Name).Paths);

      ctx.font = `200px ${fontCTX}`;
      ctx.textAlign = "start";
      ctx.fillStyle = palette.light;
      ctx.fillText(stringA, 40, 760, 175);

      ctx.font = `200px ${fontCTX}`;
      ctx.textAlign = "start";
      ctx.fillStyle = palette.dark;
      ctx.fillText(stringA, 50, 750, 175);

      ctx.font = "180px Wood Stamp";
      ctx.textAlign = "start";
      ctx.fillStyle = palette.light;
      ctx.fillText(stringB, 40, 885, 500);

      ctx.font = "180px Wood Stamp";
      ctx.textAlign = "start";
      ctx.fillStyle = palette.dark;
      ctx.fillText(stringB, 50, 875, 500);

      let textureImage = new Image();
      textureImage.onload = function () {
        // ctx.fillStyle = "#09f";
        // ctx.fillRect(0, 0, posterElement.width, posterElement.height);

        // // set composite mode
        // ctx.globalCompositeOperation = "destination-in";

        // // draw image


        ctx.drawImage(textureImage, 0, 0);
        console.log('the image is drawn');
      }
      textureImage.src = `/assets/img/${palette.light.replace('#', '')}.png`;
      // ctx.drawImage(textureImage, 0, 0, textureImage.width, textureImage.height);
      // ctx.drawImage(textureImage,0,0);
      // textureImage.src = "/assets/img/Texture.png";
      

      // let posterHeight=;
      let posterDimensions={width:600,height:900};
      if(this.windowWidth<600){
          posterDimensions.width=this.windowWidth;
      }
      // if((window.innerHeight/2)<900){
      //     posterDimensions.height=window.height/2;
      // }
      let posterWidth=posterContainer.offsetWidth;
      // console.log(window.innerWidth);

      posterWidth;
      poster.style.width=`${posterDimensions.width}px`;

    // posterContainer.style.width=`${10}px`;
    // posterContainer.style.height=`1000px`;
      console.log(posterElement);
    });
  }

  updateFirstName(event){
    this.genFirstName=event.target.value;
    // console.log(event.target.value)
  }

  updateSurname(event){
    this.genSurname=event.target.value;
    // console.log(event.target.value)
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

}
