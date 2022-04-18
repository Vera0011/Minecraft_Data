export class Info {
    constructor(languaje) {
        this.biomes = require(`./${languaje}/biomes`);
        this.blocks = require(`./${languaje}/blocks`);
        this.effects = require(`./${languaje}/effects`);
        this.enchants = require(`./${languaje}/enchants`);
        this.items = require(`./${languaje}/items`);
        this.mobs = require(`./${languaje}/mobs`);
        this.structures = require(`./${languaje}/structures`);
    }

    // BIOMES
    findBiomeById(id) {
        const biomeId = Object.keys(this.biomes).find((biomeId) => biomeId === id);
        return this.biomes[biomeId];
    }

    findBiomeByName(name) {
        const biome = Object.values(this.biomes).find((biome) => biome.name === name);
        return biome;
    }

    // BLOCKS
    findBlockById(id) {
        const blockId = Object.keys(this.blocks).find((blockId) => blockId === id);
        return this.blocks[blockId];
    }

    findBlockByName(name) {
        const block = Object.values(this.blocks).find((block) => block.name === name);
        return block;
    }

    // EFFECTS
    findEffectById(id) {
        const effectId = Object.keys(this.effects).find((effectId) => effectId === id);
        return this.effects[effectId];
    }

    findEffectByName(name) {
        const effect = Object.values(this.effects).find((effect) => effect.name === name);
        return effect;
    }

    // ENCHANTS
    findEnchantById(id) {
        const enchantId = Object.keys(this.enchants).find((enchantId) => enchantId === id);
        return this.enchants[enchantId];
    }

    findEnchantByName(name) {
        const enchant = Object.values(this.enchants).find((enchant) => enchant.name === name);
        return enchant;
    }

    // ITEMS
    findItemById(id) {
        const itemId = Object.keys(this.items).find((itemId) => itemId === id);
        return this.items[itemId];
    }

    findItemByName(name) {
        const item = Object.values(this.items).find((item) => item.name === name);
        return item;
    }

    // MOBS
    findMobById(id) {
        const mobId = Object.keys(this.mobs).find((mobId) => mobId === id);
        return this.mobs[mobId];
    }

    findMobByName(name) {
        const mob = Object.values(this.mobs).find((mob) => mob.name === name);
        return mob;
    }

    // STRUCTURES
    findStructureById(id) {
        const structureId = Object.keys(this.structures).find((structureId) => structureId === id);
        return this.structures[structureId];
    }

    findStructureByName(name) {
        const structure = Object.values(this.structures).find((structure) => structure.name === name);
        return structure;
    }
}