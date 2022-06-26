const img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enchanted_Book.gif/revision/latest/scale-to-width-down/160?cb=20200428014446";
const img2 = "https://cdn.discordapp.com/attachments/981118574154366976/981122396683644998/Enchanted_Book.gif";

const combatEs = {
    1: {
        category: "combat",
        tag: "netherite_sword",
        name: "espada_de_netherite",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Netherite_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200304213920", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/74/Enchanted_Netherite_Sword.gif/revision/latest/scale-to-width-down/120?cb=20201120003747"],
        color: "#2A2525",
        displayname: "Espada de Netherite",
        durability: "2032 usos",
        enchants: ["Aspecto Igneo", "Botin", "Irrompibilidad", "Filo", "Golpeo", "Maldicion de los Artropodos", "Empuje", "Reparacion", "Maldicion de Desaparicion", "Filo Arrasador"],
        damage: "8",
    },

    2: {
        category: "combat",
        tag: "diamond_sword",
        name: "espada_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Diamond_Sword_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20201017135722", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Enchanted_Diamond_Sword.gif/revision/latest/scale-to-width-down/120?cb=20201118111712"],
        color: "#5EF3EA",
        displayname: "Espada de Diamante",
        durability: "1561 usos",
        enchants: ["Aspecto Igneo", "Botin", "Irrompibilidad", "Filo", "Golpeo", "Maldicion de los Artropodos", "Empuje", "Reparacion", "Maldicion de Desaparicion", "Filo Arrasador"],
        damage: "3.5",
    },

    3: {
        category: "combat",
        tag: "golden_sword",
        name: "espada_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Golden_Sword_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235825", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ef/Enchanted_Golden_Sword.gif/revision/latest/scale-to-width-down/120?cb=20201118111854"],
        color: "#ECEC41",
        displayname: "Espada de Oro",
        durability: "32 usos",
        enchants: ["Aspecto Igneo", "Botin", "Irrompibilidad", "Filo", "Golpeo", "Maldicion de los Artropodos", "Empuje", "Reparacion", "Maldicion de Desaparicion", "Filo Arrasador"],
        damage: "2",
    },

    4: {
        category: "combat",
        tag: "iron_sword",
        name: "espada_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235910", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Enchanted_Iron_Sword.gif/revision/latest/scale-to-width-down/120?cb=20201118221344"],
        color: "#C7C7BB",
        displayname: "Espada de Hierro",
        durability: "250 usos",
        enchants: ["Aspecto Igneo", "Botin", "Irrompibilidad", "Filo", "Golpeo", "Maldicion de los Artropodos", "Empuje", "Reparacion", "Maldicion de Desaparicion", "Filo Arrasador"],
        damage: "3",
    },

    5: {
        category: "combat",
        tag: "stone_sword",
        name: "espada_de_piedra",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/Stone_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235849", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/Enchanted_Stone_Sword.gif/revision/latest/scale-to-width-down/120?cb=20201120003758"],
        color: "#999988",
        displayname: "Espada de Piedra",
        durability: "131 usos",
        enchants: ["Aspecto Igneo", "Botin", "Irrompibilidad", "Filo", "Golpeo", "Maldicion de los Artropodos", "Empuje", "Reparacion", "Maldicion de Desaparicion", "Filo Arrasador"],
        damage: "2.5",
    },

    6: {
        category: "combat",
        tag: "wooden_sword",
        name: "espada_de_madera",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/Wooden_Sword_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235747", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Enchanted_Wooden_Sword.gif/revision/latest/scale-to-width-down/120?cb=20201120003809"],
        color: "#401208",
        displayname: "Espada de Madera",
        durability: "59 usos",
        enchants: ["Aspecto Igneo", "Botin", "Irrompibilidad", "Filo", "Golpeo", "Maldicion de los Artropodos", "Empuje", "Reparacion", "Maldicion de Desaparicion", "Filo Arrasador"],
        damage: "2",
    },

    7: {
        category: "combat",
        tag: "arrow",
        name: "flecha",
        displayname: "Flecha",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Arrow_JE2_BE1.png/revision/latest/scale-to-width-down/150?cb=20200105214407"],
        color: "#905A28",
        stacksize: "64"
    },

    8: {
        category: "combat",
        tag: "spectral_arrow",
        name: "flecha_espectral",
        displayname: "Flecha espectral",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/92/Spectral_Arrow_JE3.png/revision/latest/scale-to-width-down/150?cb=20210317200631"],
        stacksize: "64",
        color: "#F8F54C"
    },

    9: {
        category: "combat",
        tag: "bow",
        name: "arco",
        displayname: "Arco",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200128015144", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4c/Enchanted_Bow.gif/revision/latest/scale-to-width-down/120?cb=20201117043127"],
        durability: "384 usos",
        enchants: ["Poder", "Empuje", "Fuego", "Infinidad", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        color: "#5B4015",
        damage: "3"
    },

    10: {
        category: "combat",
        tag: "trident",
        name: "tridente",
        displayname: "Tridente",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Trident_%28item%29.png/revision/latest/scale-to-width-down/32?cb=20200524232437", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Enchanted_Trident_%28item%29.gif/revision/latest/scale-to-width-down/120?cb=20201120003800"],
        durability: "250 usos",
        enchants: ["Lealtad", "Propulsión acuática", "Empalamiento", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        color: "#155B4A",
        damage: "4.5"
    },

    11: {
        category: "combat",
        tag: "crossbow",
        name: "ballesta",
        displayname: "Ballesta",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/73/Crossbow_Pull_1.png/revision/latest/scale-to-width-down/32?cb=20200512195147", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/35/Enchanted_Crossbow.gif/revision/latest/scale-to-width-down/120?cb=20201118111555"],
        durability: "465 usos",
        enchants: ["Carga rápida", "Multidisparo", "Perforación", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        color: "#5B4015",
        damage: "4.5"
    },

    12: {
        category: "combat",
        tag: "totem_of_undying",
        name: "totem_de_la_inmortalidad",
        displayname: "Tótem de inmortalidad",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Totem_of_Undying_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200522030253"],
        durability: "1 uso",
        enchants: ["Irrompibilidad", "Reparación"],
        color: "#32DD70",
        damage: "0"
    },

    13: {
        category: "combat",
        tag: "netherite_helmet",
        name: "casco_de_netherite",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2f/Netherite_Helmet_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304184001", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2b/Enchanted_Netherite_Helmet.gif/revision/latest/scale-to-width-down/120?cb=20200830085951"],
        color: "#2A2525",
        durability: "407 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "1.5",
        displayname: "Casco de netherita"
    },

    14: {
        category: "combat",
        tag: "netherite_chestplate",
        name: "peto_de_netherite",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Netherite_Chestplate_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304183946", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8b/Enchanted_Netherite_Chestplate.gif/revision/latest/scale-to-width-down/120?cb=20200830055349"],
        color: "#2A2525",
        durability: "592 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "4",
        displayname: "Peto de netherita"
    },

    15: {
        category: "combat",
        tag: "netherite_leggings",
        name: "grebas_de_netherite",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8d/Netherite_Leggings_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20201027181357", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/da/Enchanted_Netherite_Leggings.gif/revision/latest/scale-to-width-down/120?cb=20201104211005"],
        color: "#2A2525",
        durability: "555 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "3",
        displayname: "Grebas de netherita"
    },

    16: {
        category: "combat",
        tag: "netherite_boots",
        name: "botas_de_netherite",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/Netherite_Boots_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304183926", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/73/Enchanted_Netherite_Boots.gif/revision/latest/scale-to-width-down/120?cb=20200830090252"],
        color: "#2A2525",
        durability: "481 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Paso helado", "Caida de pluma", "Agilidad acuatica", "Velocidad del alma"],
        protection: "1.5",
        displayname: "Botas de netherite"
    },

    17: {
        category: "combat",
        tag: "leather_helmet",
        name: "sombrero_de_cuero",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Leather_Cap_JE4_BE2.png/revision/latest?cb=20200218001736", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/77/Enchanted_Leather_Helmet.gif/revision/latest/scale-to-width-down/120?cb=20200830101557"],
        color: "#885530",
        durability: "55 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "0.5",
        displayname: "Sombrero de cuero"
    },

    18: {
        category: "combat",
        tag: "chainmail_helmet",
        name: "casco_de_cota_de_malla",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1e/Chainmail_Helmet_JE3_BE2.png/revision/latest?cb=20200218001921", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a4/Enchanted_Chainmail_Helmet.gif/revision/latest/scale-to-width-down/120?cb=20200830085524"],
        color: "#DCDCD3",
        durability: "165 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "1",
        displayname: "Casco de cota de mallas"
    },

    19: {
        category: "combat",
        tag: "iron_helmet",
        name: "Casco de hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Iron_Helmet_JE2_BE2.png/revision/latest?cb=20200218002126", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/Enchanted_Iron_Helmet.gif/revision/latest/scale-to-width-down/120?cb=20200830085622"],
        color: "#C7C7BB",
        durability: "165 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "1",
        displayname: "Casco de hierro"
    },

    20: {
        category: "combat",
        tag: "golden_helmet",
        name: "casco_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Golden_Helmet_JE2_BE2.png/revision/latest?cb=20200218002436", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9a/Enchanted_Golden_Helmet.gif/revision/latest/scale-to-width-down/120?cb=20200830085650"],
        color: "#ECEC41",
        durability: "77 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de Desaparicion", "Maldicion de Ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "1",
        displayname: "Casco de oro"
    },

    21: {
        category: "combat",
        tag: "diamond_helmet",
        name: "casco_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/Diamond_Helmet_JE2_BE2.png/revision/latest?cb=20200218002315", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6b/Enchanted_Diamond_Helmet.gif/revision/latest/scale-to-width-down/120?cb=20200830085710"],
        color: "#5EF3EA",
        durability: "363 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "1.5",
        displayname: "Casco de diamante",
    },

    22: {
        category: "combat",
        tag: "turtle_shell",
        name: "caparazon_de_tortuga",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Turtle_Shell.png/revision/latest?cb=20200218002557", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/38/Enchanted_Turtle_Shell.gif/revision/latest/scale-to-width-down/120?cb=20200830090312"],
        color: "#3EEC63",
        durability: "275 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Afinidad acuatica", "Respiracion"],
        protection: "1",
        displayname: "Caparazón de tortuga",
    },

    23: {
        category: "combat",
        tag: "leather_chestplate",
        name: "tunica_de_cuero",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Leather_Tunic_JE4_BE2.png/revision/latest?cb=20200218001806", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/Enchanted_Leather_Chestplate.gif/revision/latest/scale-to-width-down/120?cb=20200830055118"],
        color: "#885530",
        durability: "80 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "1.5",
        displayname: "Túnica de cuero",
    },

    24: {
        category: "combat",
        tag: "chainmail_chestplate",
        name: "peto_de_cota_de_malla",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Chainmail_Chestplate_JE3_BE2.png/revision/latest?cb=20200218001956", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3f/Enchanted_Chainmail_Chestplate.gif/revision/latest/scale-to-width-down/120?cb=20200830055135"],
        color: "#DCDCD3",
        durability: "240 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "2.5",
        displayname: "Peto de cota de mallas",
    },

    25: {
        category: "combat",
        tag: "iron_chestplate",
        name: "peto_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/31/Iron_Chestplate_JE2_BE2.png/revision/latest?cb=20200218002202", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/57/Enchanted_Iron_Chestplate.gif/revision/latest/scale-to-width-down/120?cb=20200830055155"],
        color: "#C7C7BB",
        durability: "240 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "3",
        displayname: "Peto de hierro",
    },

    26: {
        category: "combat",
        tag: "golden_chestplate",
        name: "peto_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Golden_Chestplate_JE2_BE2.png/revision/latest?cb=20200218002500", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Enchanted_Golden_Chestplate.gif/revision/latest/scale-to-width-down/120?cb=20200830055214"],
        color: "#ECEC41",
        durability: "112 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "2.5",
        displayname: "Peto de oro",
    },

    27: {
        category: "combat",
        tag: "diamond_chestplate",
        name: "peto_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Diamond_Chestplate_JE3_BE2.png/revision/latest?cb=20200218002341", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/Enchanted_Diamond_Chestplate.gif/revision/latest/scale-to-width-down/120?cb=20200830055230"],
        color: "#5EF3EA",
        durability: "528 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "4",
        displayname: "Peto de diamante",
    },

    28: {
        category: "combat",
        tag: "leather_leggings",
        name: "pantalones_de_cuero",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/06/Leather_Pants_JE4_BE2.png/revision/latest?cb=20200218001832", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a0/Enchanted_Leather_Leggings.gif/revision/latest/scale-to-width-down/120?cb=20200830101710"],
        color: "#885530",
        durability: "75 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "1",
        displayname: "Pantalones de cuero",
    },

    29: {
        category: "combat",
        tag: "chainmail_leggings",
        name: "grebas_de_cota_de_malla",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Chainmail_Leggings_JE2_BE2.png/revision/latest?cb=20200218002027", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a1/Enchanted_Chainmail_Leggings.gif/revision/latest/scale-to-width-down/120?cb=20200830085738"],
        color: "#DCDCD3",
        durability: "225 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "2",
        displayname: "Grebas de cota de mallas",
    },

    30: {
        category: "combat",
        tag: "iron_leggings",
        name: "grebas_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Iron_Leggings_JE2_BE2.png/revision/latest?cb=20200218002230", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1d/Enchanted_Iron_Leggings.gif/revision/latest/scale-to-width-down/120?cb=20200830085825"],
        color: "#C7C7BB",
        durability: "225 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "2.5",
        displayname: "Grebas de hierro",
    },

    31: {
        category: "combat",
        tag: "golden_leggings",
        name: "grebas_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bf/Golden_Leggings_JE2_BE2.png/revision/latest?cb=20200218002519", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/Enchanted_Golden_Leggings.gif/revision/latest/scale-to-width-down/120?cb=20200830085845"],
        color: "#ECEC41",
        durability: "105 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "1.5",
        displayname: "Grebas de oro",
    },

    32: {
        category: "combat",
        tag: "diamond_leggings",
        name: "grebas_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Diamond_Leggings_JE2_BE2.png/revision/latest?cb=20200218002400", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e9/Enchanted_Diamond_Leggings.gif/revision/latest/scale-to-width-down/120?cb=20200830085906"],
        color: "#5EF3EA",
        durability: "495 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento"],
        protection: "3",
        displayname: "Grebas de diamante",
    },

    33: {
        category: "combat",
        tag: "leather_boots",
        name: "botas_de_cuero",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/25/Leather_Boots_JE3_BE2.png/revision/latest?cb=20200218001857", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Enchanted_Leather_Boots.gif/revision/latest/scale-to-width-down/120?cb=20200830090117"],
        color: "#885530",
        durability: "65 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Caminante Helado", "Caida de pluma", "Agilidad acuatica", "Velocidad del Alma"],
        protection: "0.5",
        displayname: "Botas de cuero",
    },

    34: {
        category: "combat",
        tag: "chainmail_boots",
        name: "botas_de_cota_de_malla",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/47/Chainmail_Boots_JE2_BE2.png/revision/latest?cb=20200218002106", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/33/Enchanted_Chainmail_Boots.gif/revision/latest/scale-to-width-down/120?cb=20200830090101"],
        color: "#DCDCD3",
        durability: "195 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Paso helado", "Caida de pluma", "Agilidad acuatica", "Velocidad del alma"],
        protection: "0.5",
        displayname: "Botas de cota de mallas",
    },

    35: {
        category: "combat",
        tag: "iron_boots",
        name: "botas_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Iron_Boots_JE2_BE2.png/revision/latest?cb=20200218002247", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/Enchanted_Iron_Boots.gif/revision/latest/scale-to-width-down/120?cb=20200830090138"],
        color: "#C7C7BB",
        durability: "195 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Paso helado", "Caida de pluma", "Agilidad acuatica", "Velocidad del alma"],
        protection: "1",
        displayname: "Botas de hierro",
    },

    36: {
        category: "combat",
        tag: "golden_boots",
        name: "botas_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/Golden_Boots_JE2_BE2.png/revision/latest?cb=20200218002539", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/da/Enchanted_Golden_Boots.gif/revision/latest/scale-to-width-down/120?cb=20200830090153"],
        color: "#ECEC41",
        durability: "91 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Caminante Helado", "Caida de pluma", "Agilidad acuatica", "Velocidad del alma"],
        protection: "0.5",
        displayname: "Botas de oro",
    },

    37: {
        category: "combat",
        tag: "diamond_boots",
        name: "botas_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Diamond_Boots_JE2_BE2.png/revision/latest?cb=20200218002418", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/75/Enchanted_Diamond_Boots.gif/revision/latest/scale-to-width-down/120?cb=20200830090209"],
        color: "#5EF3EA",
        durability: "429 usos",
        enchants: ["Proteccion contra el fuego", "Proteccion contra proyectiles", "Proteccion contra explosiones", "Proteccion", "Irrompibilidad", "Espinas", "Reparacion", "Maldicion de desaparicion", "Maldicion de ligamiento", "Paso helado", "Caida de pluma", "Agilidad acuatica", "Velocidad del alma"],
        protection: "1.5",
        displayname: "Botas de diamante",
    },

    38: {
        category: "combat",
        tag: "shield",
        name: "escudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c6/Shield_JE2_BE1.png/revision/latest/scale-to-width-down/80?cb=20190725172341", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/79/Enchanted_Shield_%28item%29.gif/revision/latest/scale-to-width-down/120?cb=20201117022846"],
        color: "#5B3C1B",
        durability: "336 usos",
        enchants: ["Irrompibilidad", "Reparación", "Maldición de desaparición"],
        protection: "1.5",
        displayname: "Escudo"
    },

    39: {
        category: "combat",
        tag: "aqua_affinity",
        name: "afinidad_acuatica",
        displayname: "Afinidad acuática",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Aumenta la velocidad al minar bajo el agua",
        permitedItems: "Casco",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    40: {
        category: "combat",
        tag: "bane_of_arthropods",
        name: "maldicion_de_los_artropodos",
        displayname: "Maldición de los artrópodos",
        image: [img2, img],
        maxLevel: "Nivel 5",
        description: "Aumenta el daño y aplica lentitud 4 a los mobs artrópodos (arañas, arañas de cueva, lepismas, endermites y abejas)",
        permitedItems: "Espada",
        incompatibleWith: ["Golpeo", "Filo"],
        color: "#CE75EA"
    },

    41: {
        category: "combat",
        tag: "blast_protection",
        name: "proteccion_contra_explosiones",
        displayname: "Protección contra explosiones",
        image: [img2, img],
        maxLevel: "Nivel 4",
        description: "Reduce el daño por explosión y empuje",
        permitedItems: "Armadura completa",
        incompatibleWith: ["Protección contra el fuego", "Protección contra proyectiles", "Protección"],
        color: "#CE75EA"
    },

    42: {
        category: "combat",
        tag: "channeling",
        name: "conductividad",
        displayname: "Conductividad",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Crea un rayo que alcanza a la entidad atacada, funciona solamente durante tormentas y si el objetivo no está obstruido por bloques",
        permitedItems: "Tridente",
        incompatibleWith: "Propulsión acuática",
        color: "#CE75EA"
    },

    43: {
        category: "combat",
        tag: "binding_curse",
        name: "maldicion_de_ligamiento",
        displayname: "Maldición de ligamiento",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Los objetos afectados no pueden ser desequipados, a menos de estar en creativo, al morir o al romperse el objeto",
        permitedItems: ["Armadura completa", "Calabaza", "Cabeza", "Elitros"],
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    44: {
        category: "combat",
        tag: "depth_strider",
        name: "agilidad_acuatica",
        displayname: "Agilidad acuática",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta la velocidad de desplazamiento bajo el agua",
        permitedItems: "Botas",
        incompatibleWith: "Paso helado",
        color: "#CE75EA"
    },

    45: {
        category: "combat",
        tag: "feather_falling",
        name: "caida_de_pluma",
        displayname: "Caída de pluma",
        image: [img2, img],
        maxLevel: "Nivel 4",
        description: "Reduce el daño por caída",
        permitedItems: "Botas",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    46: {
        category: "combat",
        tag: "fire_aspect",
        name: "aspecto_igneo",
        displayname: "Aspecto ígneo",
        image: [img2, img],
        maxLevel: "Nivel 2",
        description: "Incendia el objetivo al ser golpeado",
        permitedItems: "Espada",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    47: {
        category: "combat",
        tag: "fire_protection",
        name: "proteccion_contra_el_fuego",
        displayname: "Protección contra el fuego",
        image: [img2, img],
        maxLevel: "Nivel 4",
        description: "Reduce el daño por quemadura y el tiempo de quemadura",
        permitedItems: "Armadura completa",
        incompatibleWith: ["Protección contra explosiones", "Protección contra proyectiles", "Protección"],
        color: "#CE75EA"
    },

    48: {
        category: "combat",
        tag: "flame",
        name: "fuego",
        displayname: "Fuego",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Las flechas queman al objetivo y encienden dinamita",
        permitedItems: "Arco",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    49: {
        category: "combat",
        tag: "frost_walker",
        name: "paso_helado",
        displayname: "Paso helado",
        image: [img2, img],
        maxLevel: "Nivel 2",
        description: "Convierte el agua bajo el jugador en hielo compacto y evita el daño causado por los bloques de magma",
        permitedItems: "Botas",
        incompatibleWith: "Agilidad acuática",
        color: "#CE75EA"
    },

    50: {
        category: "combat",
        tag: "impaling",
        name: "empalamiento",
        displayname: "Empalamiento",
        image: [img2, img],
        maxLevel: "Nivel 5",
        description: "El tridente causa mas daño a criaturas que aparezcan naturalmente en el oceano",
        permitedItems: "Tridente",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    51: {
        category: "combat",
        tag: "infinity",
        name: "infinidad",
        displayname: "Infinidad",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Al disparar con el arco, no se consumen flechas, esto no incluye fechas espectrales o con efectos",
        permitedItems: "Arco",
        incompatibleWith: "Reparación",
        color: "#CE75EA"
    },

    52: {
        category: "combat",
        tag: "knockback",
        name: "empuje",
        displayname: "Empuje",
        image: [img2, img],
        maxLevel: "Nivel 2",
        description: "Aumenta el empuje de la espada al golpear",
        permitedItems: "Espada",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    53: {
        category: "combat",
        tag: "looting",
        name: "botin",
        displayname: "Botin",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta el botín al matar a una criatura",
        permitedItems: "Espada",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    54: {
        category: "combat",
        tag: "loyalty",
        name: "lealtad",
        displayname: "Lealtad",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "El tridente vuelve al jugador despues de haberlo arrojado",
        permitedItems: "Tridente",
        incompatibleWith: "Propulsión acuática",
        color: "#CE75EA"
    },

    55: {
        category: "combat",
        tag: "multishot",
        name: "disparo_multiple",
        displayname: "Disparo múltiple",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Dispara 3 flechas al mismo tiempo, solo consumiendo una en el proceso. Solo una puede ser recuperada",
        permitedItems: "Ballesta",
        incompatibleWith: "Perforación",
        color: "#CE75EA"
    },

    56: {
        category: "combat",
        tag: "piercing",
        name: "perforacion",
        displayname: "Perforación",
        image: [img2, img],
        maxLevel: "Nivel 4",
        description: "Las flechas atraviesan criaturas y escudos",
        permitedItems: "Ballesta",
        incompatibleWith: "Disparo múltiple",
        color: "#CE75EA"
    },

    57: {
        category: "combat",
        tag: "power",
        name: "poder",
        displayname: "Poder",
        image: [img2, img],
        maxLevel: "Nivel 5",
        description: "Aumenta el daño de la flecha",
        permitedItems: "Arco",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    58: {
        category: "combat",
        tag: "projectile_protection",
        name: "proteccion_contra_proyectiles",
        displayname: "Protección contra proyectiles",
        image: [img2, img],
        maxLevel: "Nivel 4",
        description: "Reduce el daño recibido por las flechas, tridentes y proyectiles como los del ghasts o blazes",
        permitedItems: "Armadura completa",
        incompatibleWith: ["Protección contra el fuego", "Protección contra explosiones", "Protección"],
        color: "#CE75EA"
    },

    59: {
        category: "combat",
        tag: "protection",
        name: "proteccion",
        displayname: "Proteccion",
        image: [img2, img],
        maxLevel: "Nivel 4",
        description: "Reduce el daño recibido un 4% por cada nivel",
        permitedItems: "Armadura completa",
        incompatibleWith: ["Protección contra el fuego", "Protección contra proyectiles", "Protección contra explosiones"],
        color: "#CE75EA"
    },

    60: {
        category: "combat",
        tag: "punch",
        name: "retroceso",
        displayname: "Retroceso",
        image: [img2, img],
        maxLevel: "Nivel 2",
        description: "Aumenta el retroceso de las flechas",
        permitedItems: "Arco",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    61: {
        category: "combat",
        tag: "quick_charge",
        name: "carga_rapida",
        displayname: "Carga rápida",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Reduce el tiempo de carga de la ballesta",
        permitedItems: "Ballesta",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    62: {
        category: "combat",
        tag: "respiration",
        name: "respiracion",
        displayname: "Respiración",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta el tiempo que puedes estar bajo el agua sin ahogarte",
        permitedItems: "Casco",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    63: {
        category: "combat",
        tag: "riptide",
        name: "impulso_acuatico",
        displayname: "Propulsión acuática",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "El tridente, al ser arrojado, propulsa al jugador con él. Solo funciona cuando llueve o en el agua",
        permitedItems: "Tridente",
        incompatibleWith: ["Conductividad", "Lealtad"],
        color: "#CE75EA"
    },

    64: {
        category: "combat",
        tag: "sharpness",
        name: "filo",
        displayname: "Filo",
        image: [img2, img],
        maxLevel: "Nivel 5",
        description: "Aumenta el daño de las armas",
        permitedItems: "Espada",
        incompatibleWith: ["Maldición de los Artropodos", "Golpeo"],
        color: "#CE75EA"
    },

    65: {
        category: "combat",
        tag: "smite",
        name: "golpeo",
        displayname: "Golpeo",
        image: [img2, img],
        maxLevel: "Nivel 5",
        description: "Aumenta el daño creado a las criaturas no muertas",
        permitedItems: "Espada",
        incompatibleWith: ["Baneo de los Artropodos", "Filo"],
        color: "#CE75EA"
    },

    66: {
        category: "combat",
        tag: "soul_speed",
        name: "velocidad_del_alma",
        displayname: "Velocidad del Alma",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta la velocidad al andar sobre arena de almas o tierra de almas. Daña el objeto con el tiempo",
        permitedItems: "Botas",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    67: {
        category: "combat",
        tag: "sweeping",
        name: "filo_arrasador",
        displayname: "Filo Arrasador",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta el ataque de barrido",
        permitedItems: "Espada",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    68: {
        category: "combat",
        tag: "thorns",
        name: "espinas",
        displayname: "Espinas",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Retorna un valor del daño al contrincante cuando eres atacado, bajo el coste de reducción de armadura",
        permitedItems: "Armadura completa",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    }
};

module.exports = combatEs;

/*
All types of arrows
 */