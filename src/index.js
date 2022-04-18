// BIOMES
const findBiomeById = (languaje, id) => {
    const biomes = require(`./${languaje}/biomes.js`);
    const biomeId = Object.keys(biomes).find((biomeId) => biomeId === id);

    return biomes[biomeId] || 0;
}

const findBiomeByName = (languaje, name) => {
    const biomes = require(`./${languaje}/biomes`);
    const biome = Object.values(biomes).find((biome) => biome.name === name);

    return biome || 0;
}

// BLOCKS
const findBlockById = (languaje, id) => {
    const blocks = require(`./${languaje}/blocks.js`);
    const blockId = Object.keys(blocks).find((blockId) => blockId === id);

    return blocks[blockId] || 0;
}

const findBlockByName = (languaje, name) => {
    const blocks = require(`./${languaje}/blocks.js`);
    const block = Object.values(blocks).find((block) => block.name === name);

    return block || 0;
}

// EFFECTS
const findEffectById = (languaje, id) => {
    const effects = require(`./${languaje}/effects.js`);
    const effectId = Object.keys(effects).find((effectId) => effectId === id);

    return effects[effectId] || 0;
}

const findEffectByName = (languaje, name) => {
    const effects = require(`./${languaje}/effects.js`);
    const effect = Object.values(effects).find((effect) => effect.name === name);

    return effect || 0;
}

// ENCHANTS
const findEnchantById = (languaje, id) => {
    const enchants = require(`./${languaje}/enchants.js`);
    const enchantId = Object.keys(enchants).find((enchantId) => enchantId === id);

    return enchants[enchantId] || 0;
}

const findEnchantByName = (languaje, name) => {
    const enchants = require(`./${languaje}/enchants.js`);
    const enchant = Object.values(enchants).find((enchant) => enchant.name === name);

    return enchant || 0;
}

// ITEMS
const findItemById = (languaje, id) => {
    const items = require(`./${languaje}/items.js`);
    const itemId = Object.keys(items).find((itemId) => itemId === id);

    return items[itemId] || 0;
}

const findItemByName = (languaje, name) => {
    const items = require(`./${languaje}/items.js`);
    const item = Object.values(items).find((item) => item.name === name);

    return item || 0;
}

// MOBS
const findMobById = (languaje, id) => {
    const mobs = require(`./${languaje}/mobs.js`);
    const mobId = Object.keys(mobs).find((mobId) => mobId === id);

    return mobs[mobId] || 0;
}

const findMobByName = (languaje, name) => {
    const mobs = require(`./${languaje}/mobs.js`);
    const mob = Object.values(mobs).find((mob) => mob.name === name);

    return mob || 0;
}

// STRUCTURES
const findStructureById = (languaje, id) => {
    const structures = require(`./${languaje}/structures.js`);
    const structureId = Object.keys(structures).find((structureId) => structureId === id);

    return structures[structureId] || 0;
}

const findStructureByName = (languaje, name) => {
    const structures = require(`./${languaje}/structures.js`);
    const structure = Object.values(structures).find((structure) => structure.name === name);

    return structure || 0;
}

module.exports = {
    findBiomeById,
    findBiomeByName,
    findBlockById,
    findBlockByName,
    findEffectById,
    findEffectByName,
    findEnchantById,
    findEnchantByName,
    findItemById,
    findItemByName,
    findMobById,
    findMobByName,
    findStructureById,
    findStructureByName
}