const fs = require("fs");

class Info {
    constructor(languaje) {
        this.biomes = require(`${__dirname}/assets/${languaje}/biomes.js`);
        this.blocks = require(`${__dirname}/assets/${languaje}/building_blocks.js`);
        this.effects = require(`${__dirname}/assets/${languaje}/effects.js`);
        this.mobs = require(`${__dirname}/assets/${languaje}/mobs.js`);
        this.structures = require(`${__dirname}/assets/${languaje}/structures.js`);
        this.brewing = require(`${__dirname}/assets/${languaje}/brewing.js`);
        this.combat = require(`${__dirname}/assets/${languaje}/combat.js`);
        this.decoration = require(`${__dirname}/assets/${languaje}/decoration.js`);
        this.foodstuffs = require(`${__dirname}/assets/${languaje}/foodstuffs.js`);
        this.miscellaneous = require(`${__dirname}/assets/${languaje}/miscellaneous.js`);
        this.redstone = require(`${__dirname}/assets/${languaje}/redstone.js`);
        this.tools = require(`${__dirname}/assets/${languaje}/tools.js`);
        this.transportation = require(`${__dirname}/assets/${languaje}/transportation.js`);
        this.language = languaje;
        this.array = [this.biomes, this.blocks, this.effects, this.mobs, this.structures, this.brewing, this.combat, this.decoration, this.foodstuffs, this.miscellaneous, this.redstone, this.tools, this.transportation];
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

const creators = require("../package.json").creators;
const colaborators = require("../package.json").colaborators;
const space1 = "                                                             ";
const space2 = "                                                                                  ";
const space3 = "                                                                                                          ";
const space4 = "                                      ";

console.log("\n\n############################################################################################################")
console.log(`# \x1b[30m\x1b[47m¡¡ Thanks for using ${require("../package.json").name} !!\x1b[0m${space1}#\n#${space3}#\n# The creator is: \x1b[30m\x1b[47m ${creators.toString().replaceAll(",", ", ")} \x1b[0m.${space2}#\n# The colaborators are: \x1b[30m\x1b[47m ${colaborators.toString().replaceAll(",", ", ")} \x1b[0m.${space4}#\n#${space3}#\n# If you encounter any problem, please, report it here: https://github.com/Vera0011/Minecraft_Data/issues  #`);

console.log("############################################################################################################\n\n")

module.exports = Info;