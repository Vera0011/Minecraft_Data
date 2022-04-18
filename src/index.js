class Info {
    constructor(languaje) {
        this.biomes = require(`./${languaje}/biomes.js`);
        this.blocks = require(`./${languaje}/blocks.js`);
        this.effects = require(`./${languaje}/effects.js`);
        this.enchants = require(`./${languaje}/enchants.js`);
        this.items = require(`./${languaje}/items.js`);
        this.mobs = require(`./${languaje}/mobs.js`);
        this.structures = require(`./${languaje}/structures.js`);
    }

    // BIOMES
    findBiomeById(id) {
        const biomeId = Object.keys(this.biomes).find((biomeId) => biomeId === id);
        return this.biomes[biomeId] || 0;
    }

    findBiomeByName(name) {
        const biome = Object.values(this.biomes).find((biome) => biome.name === name);
        return biome || 0;
    }

    // BLOCKS
    findBlockById(id) {
        const blockId = Object.keys(this.blocks).find((blockId) => blockId === id);
        return this.blocks[blockId] || 0;
    }

    findBlockByName(name) {
        const block = Object.values(this.blocks).find((block) => block.name === name);
        return block || 0;
    }

    // EFFECTS
    findEffectById(id) {
        const effectId = Object.keys(this.effects).find((effectId) => effectId === id);
        return this.effects[effectId] || 0;
    }

    findEffectByName(name) {
        const effect = Object.values(this.effects).find((effect) => effect.name === name);
        return effect || 0;
    }

    // ENCHANTS
    findEnchantById(id) {
        const enchantId = Object.keys(this.enchants).find((enchantId) => enchantId === id);
        return this.enchants[enchantId] || 0;
    }

    findEnchantByName(name) {
        const enchant = Object.values(this.enchants).find((enchant) => enchant.name === name);
        return enchant || 0;
    }

    // ITEMS
    findItemById(id) {
        const itemId = Object.keys(this.items).find((itemId) => itemId === id);
        return this.items[itemId] || 0;
    }

    findItemByName(name) {
        const item = Object.values(this.items).find((item) => item.name === name);
        return item || 0;
    }

    // MOBS
    findMobById(id) {
        const mobId = Object.keys(this.mobs).find((mobId) => mobId === id);
        return this.mobs[mobId] || 0;
    }

    findMobByName(name) {
        const mob = Object.values(this.mobs).find((mob) => mob.name === name);
        return mob || 0;
    }

    // STRUCTURES
    findStructureById(id) {
        const structureId = Object.keys(this.structures).find((structureId) => structureId === id);
        return this.structures[structureId] || 0;
    }

    findStructureByName(name) {
        const structure = Object.values(this.structures).find((structure) => structure.name === name);
        return structure || 0;
    }
}


module.exports = Info;