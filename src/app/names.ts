class Names {
    namesByColours = [
        { colour: "red", names: ["red", "scarlet", "bloody", "cardinal", "raging"] },
        { colour: "green", names: ["green", "envious", "verdant", "eco", "vegan"] },
        { colour: "blue", names: ["blue", "lapis", "sorrowful", "azure", "seasick"] },
        { colour: "pink", names: ["pink", "flushed", "rose", "blushing", "proud"] },
    ];

    namesEnglish = [
        "Tiger",
        "Lion",
        "Warrior",
        "Bullet",
        "Demon",
        "Angel",
        "Kid",
        "Secret",
        "Man",
        "Cobra",
        "Cat",
        "Hood",
        "Hurricane",
        "Avenger",
        "Crusader",
        "Marvel",
        "Rider",
        "Assassin",
        "Punisher",
        "Boy",
        "Scorpion",
        "Shocker",
        "Sultan",
        "Aztec",
        "Warrior",
        "Brawler"
    ];

    generateName(palette,firstWord) {
        let nameString = '';
        if(firstWord!=="the"){
            nameString+="the ";
        }
        let potentialNames = this.namesByColours.filter(entry => {
            return entry.colour === palette;
        })[0].names;
       
        nameString+=`${potentialNames[Math.floor(Math.random() * potentialNames.length)]} ${this.namesEnglish[Math.floor(Math.random() * this.namesEnglish.length)]}`;
    
        // console.log(palette);
        // console.log(potentialNames);
        // return `${potentialNames[Math.floor(Math.random() * potentialNames.length)]} ${this.namesEnglish[Math.floor(Math.random() * this.namesEnglish.length)]}`;
        return nameString;
    }
}

const nameGenerator = new Names();
export default nameGenerator;