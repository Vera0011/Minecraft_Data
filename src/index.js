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

    getRandomBiome() {
        const biomesLength = Object.keys(this.biomes).length - 1;
        const biomeAleatory = Math.floor(Math.random() * (biomesLength - 1)) + 1;

        return this.biomes[biomeAleatory] || 0;
    }

    // BLOCKS
    findBlockByName(name) {
        const block = Object.values(this.blocks).find((block) => block.name === name);
        return block || 0;
    }

    getRandomBlock() {
        const blocksLength = Object.keys(this.blocks).length - 1;
        const blockAleatory = Math.floor(Math.random() * (blocksLength - 1)) + 1;

        return this.blocks[blockAleatory] || 0;
    }

    // EFFECTS
    findEffectByName(name) {
        const effect = Object.values(this.effects).find((effect) => effect.name === name);
        return effect || 0;
    }

    getRandomEffect() {
        const effectsLength = Object.keys(this.effects).length - 1;
        const effectAleatory = Math.floor(Math.random() * (effectsLength - 1)) + 1;

        return this.effects[effectAleatory] || 0;
    }

    // ENCHANTS
    findEnchantByName(name) {
        const enchant = Object.values(this.enchants).find((enchant) => enchant.name === name);
        return enchant || 0;
    }

    getRandomEnchant() {
        const enchantsLength = Object.keys(this.enchants).length - 1;
        const enchantAleatory = Math.floor(Math.random() * (enchantsLength - 1)) + 1;

        return this.enchants[enchantAleatory] || 0;
    }

    // ITEMS
    findItemByName(name) {
        const item = Object.values(this.items).find((item) => item.name === name);
        return item || 0;
    }

    getRandomItem() {
        const itemsLength = Object.keys(this.items).length - 1;
        const itemAleatory = Math.floor(Math.random() * (itemsLength - 1)) + 1;

        return this.items[itemAleatory] || 0;
    }

    // MOBS
    findMobByName(name) {
        const mob = Object.values(this.mobs).find((mob) => mob.name === name);
        return mob || 0;
    }

    getRandomMob() {
        const mobsLength = Object.keys(this.mobs).length - 1;
        const mobAleatory = Math.floor(Math.random() * (mobsLength - 1)) + 1;

        return this.mobs[mobAleatory] || 0;
    }

    // STRUCTURES
    findStructureByName(name) {
        const structure = Object.values(this.structures).find((structure) => structure.name === name);
        return structure || 0;
    }

    getRandomStructure() {
        const structuresLength = Object.keys(this.structures).length - 1;
        const structureAleatory = Math.floor(Math.random() * (structuresLength - 1)) + 1;

        return this.structures[structureAleatory] || 0;
    }
}

module.exports = Info;