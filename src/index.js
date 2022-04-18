class Info {
    constructor(languaje) {
        this.biomes = require(`${__dirname}/assets/${languaje}/biomes.js`);
        this.blocks = require(`${__dirname}/assets/${languaje}/blocks.js`);
        this.effects = require(`${__dirname}/assets/${languaje}/effects.js`);
        this.enchants = require(`${__dirname}/assets/${languaje}/enchants.js`);
        this.items = require(`${__dirname}/assets/${languaje}/items.js`);
        this.mobs = require(`${__dirname}/assets/${languaje}/mobs.js`);
        this.structures = require(`${__dirname}/assets/${languaje}/structures.js`);
    }

    // BIOMES
    findBiomeByName(name) {
        const biome = Object.values(this.biomes).find((biome) => biome.name === name);
        return biome || 0;
    }

    // BLOCKS
    findBlockByName(name) {
        const block = Object.values(this.blocks).find((block) => block.name === name);
        return block || 0;
    }

    // EFFECTS
    findEffectByName(name) {
        const effect = Object.values(this.effects).find((effect) => effect.name === name);
        return effect || 0;
    }

    // ENCHANTS
    findEnchantByName(name) {
        const enchant = Object.values(this.enchants).find((enchant) => enchant.name === name);
        return enchant || 0;
    }

    // ITEMS
    findItemByName(name) {
        const item = Object.values(this.items).find((item) => item.name === name);
        return item || 0;
    }

    // MOBS
    findMobByName(name) {
        const mob = Object.values(this.mobs).find((mob) => mob.name === name);
        return mob || 0;
    }

    // STRUCTURES
    findStructureByName(name) {
        const structure = Object.values(this.structures).find((structure) => structure.name === name);
        return structure || 0;
    }
}


module.exports = Info;