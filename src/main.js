const fs = require("fs");

class Info {
    constructor(languaje) {
        this.effects = require(`${__dirname}/assets/${languaje}/effects.js`);
        this.mobs = require(`${__dirname}/assets/${languaje}/mobs.js`);
        this.structures = require(`${__dirname}/assets/${languaje}/structures.js`);
        this.brewing = require(`${__dirname}/assets/${languaje}/brewing.js`);
        this.combat = require(`${__dirname}/assets/${languaje}/combat.js`);
        this.foodstuffs = require(`${__dirname}/assets/${languaje}/foodstuffs.js`);
        this.redstone = require(`${__dirname}/assets/${languaje}/redstone.js`);
        this.tools = require(`${__dirname}/assets/${languaje}/tools.js`);
        this.transportation = require(`${__dirname}/assets/${languaje}/transportation.js`);

        this.language = languaje;
        this.array = [this.effects, this.mobs, this.structures, this.brewing, this.combat, this.foodstuffs, this.redstone, this.tools, this.transportation];
    }

    search(name) {
        for (let i = 0; i < this.array.length; i++) {
            const data = Object.values(this.array[i]).find((data) => data.name === name);

            if (data !== undefined) return data;
        }

        return 0;
    }

    getRandom() {
        const path = `${__dirname}/assets/${this.language}/`
        const dirLength = fs.readdirSync(path).length - 1;
        const searchedFileRandom = Math.floor(Math.random() * (dirLength)) + 1;

        const searchedFileLength = Object.keys(this.array[searchedFileRandom]).length;
        const randomItem = Math.floor(Math.random() * (searchedFileLength - 1)) + 1;

        return this.array[searchedFileRandom][randomItem] || 0;
    }
}

module.exports = Info;