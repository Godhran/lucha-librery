class Names {
    namesByColours = [
        { colour: "red", names: ["red", "scarlet", "bloody", "cardinal", "raging", "ruby", "cherry", "foxy"] },
        { colour: "green", names: ["green", "envious", "verdant", "natural", "vegan", "sage", "acid"] },
        { colour: "blue", names: ["blue", "lapis", "sorrowful", "azure", "seasick", "royal", "cobalt", "bawdy"] },
        { colour: "pink", names: ["pink", "flushed", "rose", "blushing", "proud", "fine", "blooming"] },
        { colour: "midnight", names: ["dark", "night", "midnight", "witching", "shadow", "hidden", "sable"] },
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
        "Brawler",
        "Hunter",
        "Tornado",
        "Tsunami",
        "Panther",
        "Blazer",
        "Python",
        "Rattlesnake",
        "Torpedo",
        "Stranger",
        "Hood",
        "Shark",
        "Spider",
        "King",
        "Conquistadore"
    ];

    generateName(palette, firstWord, nameValue) {
        let nameString = '';

        if (firstWord !== "the") {
            nameString += "the ";
        }

        let potentialNames = this.namesByColours.filter(entry => {
            return entry.colour === palette;
        })[0].names;

        nameString += `${potentialNames[Math.round(nameValue * 3) % potentialNames.length]} ${this.namesEnglish[(nameValue % this.namesEnglish.length) - 1]}`;

        return nameString;
    }
}

const nameGenerator = new Names();
export default nameGenerator;