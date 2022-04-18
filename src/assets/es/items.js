const itemsEs = {
    // HERRAMIENTAS Y ESPADAS
    // NETHERITE
    1: {
        name: 'netherite_sword',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Netherite_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200304213920',
        color: '#2A2525',
        displayname: 'Espada de Netherita',
        durability: '2032 Usos',
        enchants: ['Aspecto Igneo', 'Botin', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Empuje', 'Reparacion', 'Maldicion de Desaparicion', 'Filo Arrasador'],
        damage: '8',
    },

    2: {
        name: 'netherite_pickaxe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Netherite_Pickaxe_JE3.png/revision/latest/scale-to-width-down/160?cb=20210418192807',
        color: '#2A2525',
        durability: '2031 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Toque de Seda', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '3',
    },

    3: {
        name: 'netherite_axe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/df/Netherite_Axe_JE2.png/revision/latest/scale-to-width-down/160?cb=20200522035253',
        color: '#2A2525',
        durability: '2031 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Aspecto Igneo', 'Botin', 'Empuje', 'Filo Arrasador', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '5',
    },

    4: {
        name: 'netherite_shovel',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a1/Netherite_Shovel_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304185542',
        color: '#2A2525',
        durability: '2031 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '3.5',
    },

    5: {
        name: 'netherite_hoe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Netherite_Hoe_JE2.png/revision/latest/scale-to-width-down/160?cb=20200526212455',
        color: '#2A2525',
        durability: '2031 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Irrompibilidad', 'Toque de Seda', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '0.5',
    },

    // DIAMOND
    6: {
        name: 'diamond_sword',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Diamond_Sword_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20201017135722',
        color: '#5EF3EA',
        durability: '1561 Usos',
        enchants: ['Aspecto Igneo', 'Botin', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Empuje', 'Reparacion', 'Maldicion de Desaparicion', 'Filo Arrasador'],
        damage: '3.5',
    },

    7: {
        name: 'diamond_pickaxe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Diamond_Pickaxe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226193952',
        color: '#5EF3EA',
        durability: '1561 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Toque de Seda', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1.5',
    },

    8: {
        name: 'diamond_axe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ae/Diamond_Axe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200522035354',
        color: '#5EF3EA',
        durability: '1562 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Aspecto Igneo', 'Botin', 'Empuje', 'Filo Arrasador', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '4.5',
    },

    9: {
        name: 'diamond_shovel',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/61/Diamond_Shovel_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235341',
        color: '#5EF3EA',
        durability: '1561 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '2.75',
    },

    10: {
        name: 'diamond_hoe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Diamond_Hoe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226193929',
        color: '#5EF3EA',
        durability: '1561 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Irrompibilidad', 'Toque de Seda', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '0.5',
    },

    // GOLDEN
    11: {
        name: 'golden_sword',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Golden_Sword_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235825',
        color: '#ECEC41',
        durability: '32 Usos',
        enchants: ['Aspecto Igneo', 'Botin', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Empuje', 'Reparacion', 'Maldicion de Desaparicion', 'Filo Arrasador'],
        damage: '2',
    },

    12: {
        name: 'golden_pickaxe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a6/Golden_Pickaxe_JE4_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226194041',
        color: '#ECEC41',
        durability: '32 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Toque de Seda', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1',
    },

    13: {
        name: 'golden_axe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Golden_Axe_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234513',
        color: '#ECEC41',
        durability: '33 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Aspecto Igneo', 'Botin', 'Empuje', 'Filo Arrasador', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '2',
    },

    14: {
        name: 'golden_shovel',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c9/Golden_Shovel_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235415',
        color: '#ECEC41',
        durability: '32 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1.5',
    },

    15: {
        name: 'golden_hoe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9d/Golden_Hoe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226194031',
        color: '#ECEC41',
        durability: '32 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Irrompibilidad', 'Toque de Seda', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '0.5',
    },

    // IRON
    16: {
        name: 'iron_sword',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235910',
        color: '#C7C7BB',
        durability: '250 Usos',
        enchants: ['Aspecto Igneo', 'Botin', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Empuje', 'Reparacion', 'Maldicion de Desaparicion', 'Filo Arrasador'],
        damage: '3',
    },

    17: {
        name: 'iron_pickaxe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Iron_Pickaxe_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200105053011',
        color: '#C7C7BB',
        durability: '250 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Toque de Seda', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '2',
    },

    18: {
        name: 'iron_axe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234438',
        color: '#C7C7BB',
        durability: '251 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Aspecto Igneo', 'Botin', 'Empuje', 'Filo Arrasador', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '3',
    },

    19: {
        name: 'iron_shovel',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/aa/Iron_Shovel_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235306',
        color: '#C7C7BB',
        durability: '250 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '2.5',
    },

    20: {
        name: 'iron_hoe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Iron_Hoe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200128141346',
        color: '#C7C7BB',
        durability: '250 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Irrompibilidad', 'Toque de Seda', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '0.5',
    },

    // STONE
    21: {
        name: 'stone_sword',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/Stone_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235849',
        color: '#999988',
        durability: '131 Usos',
        enchants: ['Aspecto Igneo', 'Botin', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Empuje', 'Reparacion', 'Maldicion de Desaparicion', 'Filo Arrasador'],
        damage: '2.5',
    },

    22: {
        name: 'stone_pickaxe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Stone_Pickaxe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234007',
        color: '#999988',
        durability: '131 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Toque de Seda', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1.5',
    },

    23: {
        name: 'stone_axe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234417',
        color: '#999988',
        durability: '132 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Aspecto Igneo', 'Botin', 'Empuje', 'Filo Arrasador', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '2.5',
    },

    24: {
        name: 'stone_shovel',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Stone_Shovel_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235006',
        color: '#999988',
        durability: '131 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1.75',
    },

    25: {
        name: 'stone_hoe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Stone_Hoe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200128141332',
        color: '#999988',
        durability: '131 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Irrompibilidad', 'Toque de Seda', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '0.5',
    },

    // WOODEN
    26: {
        name: 'wooden_sword',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/Wooden_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235747',
        color: '#401208',
        durability: '59 Usos',
        enchants: ['Aspecto Igneo', 'Botin', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Empuje', 'Reparacion', 'Maldicion de Desaparicion', 'Filo Arrasador'],
        damage: '2',
    },

    27: {
        name: 'wooden_pickaxe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0b/Wooden_Pickaxe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217231203',
        color: '#401208',
        durability: '59 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Toque de Seda', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1',
    },

    28: {
        name: 'wooden_axe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234355',
        color: '#401208',
        durability: '60 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Filo', 'Golpeo', 'Maldicion de los Artropodos', 'Aspecto Igneo', 'Botin', 'Empuje', 'Filo Arrasador', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '2',
    },

    29: {
        name: 'wooden_shovel',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Wooden_Shovel_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234949',
        color: '#401208',
        durability: '59 Usos',
        enchants: ['Fortuna', 'Toque de Seda', 'Eficiencia', 'Irrompibilidad', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '1.5',
    },

    30: {
        name: 'wooden_hoe',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Wooden_Hoe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226194121',
        color: '#401208',
        durability: '59 Usos',
        enchants: ['Eficiencia', 'Fortuna', 'Irrompibilidad', 'Toque de Seda', 'Reparacion', 'Maldicion de Desaparicion'],
        damage: '0.5',
    },

    // ARMADURAS
    // NETHERITE
    31: {
        name: 'netherite_helmet',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Netherite_Helmet_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304184001',
        color: '#2A2525',
        durability: '407 Usos',
        enchants: ['Proteccion contra el fuego', 'Proteccion contra proyectiles', 'Proteccion contra explosiones', 'Proteccion', 'Irrompibilidad', 'Espinas', 'Reparacion', 'Maldicion de Desaparicion', 'Maldicion de Ligamiento', 'Afinidad acuatica', 'Respiracion'],
        id: '748',
        Proteccion: '1.5',
        displayname: 'Netherite Helmet',
        stacksize: '1',
    },

    32: {
        name: 'netherite_chestplate',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Netherite_Chestplate_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304183946',
        color: '#2A2525',
        durability: '592 Usos',
        enchants: ['Proteccion contra el fuego', 'Proteccion contra proyectiles', 'Proteccion contra explosiones', 'Proteccion', 'Irrompibilidad', 'Espinas', 'Reparacion', 'Maldicion de Desaparicion', 'Maldicion de Ligamiento'],
        id: '749',
        Proteccion: '4',
        displayname: 'Netherite Chestplate',
        stacksize: '1',
    },

    33: {
        name: 'netherite_leggings',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8d/Netherite_Leggings_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20201027181357',
        color: '#2A2525',
        durability: '555 Usos',
        enchants: ['Proteccion contra el fuego', 'Proteccion contra proyectiles', 'Proteccion contra explosiones', 'Proteccion', 'Irrompibilidad', 'Espinas', 'Reparacion', 'Maldicion de Desaparicion', 'Maldicion de Ligamiento'],
        id: '750',
        Proteccion: '3',
        displayname: 'Netherite Leggings',
        stacksize: '1',
    },

    34: {
        name: 'netherite_boots',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/Netherite_Boots_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304183926',
        color: '#2A2525',
        durability: '481 Usos',
        enchants: ['Proteccion contra el fuego', 'Proteccion contra proyectiles', 'Proteccion contra explosiones', 'Proteccion', 'Irrompibilidad', 'Espinas', 'Reparacion', 'Maldicion de Desaparicion', 'Maldicion de Ligamiento', 'Caminante Helado', 'Caida de pluma', 'Agilidad acuatica', 'Velocidad del Alma'],
        id: '751',
        Proteccion: '1.5',
        displayname: 'Netherite Boots',
        stacksize: '1',
    },

};

module.exports = itemsEs;

/*
	'' : {
		name: '',
		image: '',
		color: '',
		displayname: '',
		durability: ' Usos',
		enchants: [""],
		id : '',
		damage: '',
		displayname: '',
		stacksize: '',
		description: ''
	},
*/