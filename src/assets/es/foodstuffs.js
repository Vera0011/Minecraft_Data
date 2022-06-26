const foodEs = {
    1: {
        category: "foodstuffs",
        name: "manzana",
        tag: "apple",
        displayname: "Manzana",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Apple_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200519232834"],
        stacksize: "64 items",
        obtained: ["Árboles", "Comercio"],
        restore: "2 corazones",
        color: "#FD3F3F",
        rank: "Común"
    },

    2: {
        category: "foodstuffs",
        name: "patata_cocinada",
        tag: "baked_potato",
        displayname: "Patata cocida",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Baked_Potato_JE4_BE2.png/revision/latest/scale-to-width-down/160?cb=20190430222641"],
        stacksize: "64 items",
        obtained: ["Cocinar", "Mobs"],
        restore: "3 corazones",
        color: "#E6EF90",
        rank: "Común"
    },

    3: {
        category: "foodstuffs",
        name: "remolacha",
        tag: "beetroot",
        displayname: "Remolacha",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/12/Beetroot_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190503043121"],
        stacksize: "64 items",
        obtained: ["Cultivo"],
        restore: "1 corazones",
        color: "#B96464",
        rank: "Común"
    },

    4: {
        category: "foodstuffs",
        name: "sopa_de_remolacha",
        tag: "beetroot_soup",
        displayname: "Estofado de remolacha",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Beetroot_Soup_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190503043416"],
        stacksize: "1 items",
        obtained: ["Crafteo"],
        restore: "3 corazones",
        color: "#B96464",
        rank: "Común"
    },

    5: {
        category: "foodstuffs",
        name: "pan",
        tag: "bread",
        displayname: "Pan",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Bread_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20190503044317"],
        stacksize: "64 items",
        obtained: ["Crafteo"],
        restore: "2.5 corazones",
        color: "#D8C969",
        rank: "Común"
    },

    6: {
        category: "foodstuffs",
        name: "tarta",
        tag: "cake",
        displayname: "Tarta",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Cake_JE4.png/revision/latest/scale-to-width-down/150?cb=20200518185831"],
        stacksize: "1 items",
        obtained: ["Crafteo", "Comercio"],
        restore: "7 corazones",
        color: "#F1EFDF",
        rank: "Común"
    },

    7: {
        category: "foodstuffs",
        name: "zanahoria",
        tag: "carrot",
        displayname: "Zanahoria",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4e/Carrot_JE3_BE2.png/revision/latest?cb=20200510235333"],
        stacksize: "64 items",
        obtained: ["Cultivo"],
        restore: "1.5 corazones",
        color: "#E98E39",
        rank: "Común"
    },

    8: {
        category: "foodstuffs",
        name: "fruta_chorus",
        tag: "chorus_fruit",
        displayname: "Fruta chorus",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/33/Chorus_Fruit_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190505051041"],
        stacksize: "64 items",
        obtained: ["Árboles del End"],
        restore: "2 corazones",
        color: "#E570D5",
        rank: "Común"
    },

    9: {
        category: "foodstuffs",
        name: "pollo_cocinado",
        tag: "cooked_chicken",
        displayname: "Pollo asado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/Cooked_Chicken_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200430031305"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "3 corazones",
        color: "#755D1B",
        rank: "Común"
    },

    10: {
        category: "foodstuffs",
        name: "bacalao_cocinado",
        tag: "cooked_cod",
        displayname: "Bacalao cocinado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Cooked_Cod_JE4_BE3.png/revision/latest/scale-to-width-down/160?cb=20190521032615"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "2.5 corazones",
        color: "#755D1B",
        rank: "Común"
    },

    11: {
        category: "foodstuffs",
        name: "cordero_asado",
        tag: "cooked_mutton",
        displayname: "Cordero asado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7d/Cooked_Mutton_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190504060132"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "3 corazones",
        color: "#755D1B",
        rank: "Común"
    },

    12: {
        category: "foodstuffs",
        name: "chuleta_de_cerdo_asada",
        tag: "cooked_porkchop",
        displayname: "Chuleta de cerdo cocinada",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ee/Cooked_Porkchop_JE4_BE3.png/revision/latest/scale-to-width-down/160?cb=20190504061538"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "4 corazones",
        color: "#755D1B",
        rank: "Común"
    },

    13: {
        category: "foodstuffs",
        name: "conejo_asado",
        tag: "cooked_rabbit",
        displayname: "Conejo asado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1b/Cooked_Rabbit_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190505050800"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "2.5 corazones",
        color: "#755D1B",
        rank: "Común"
    },

    14: {
        category: "foodstuffs",
        name: "salmon_cocinado",
        tag: "cooked_salmon",
        displayname: "Salmón ahumado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2b/Cooked_Salmon_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190403183831"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "3 corazones",
        color: "#755D1B",
        rank: "Común"
    },

    15: {
        category: "foodstuffs",
        name: "galleta",
        tag: "cookie",
        displayname: "Galleta",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b3/Cookie_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190505051355"],
        stacksize: "64 items",
        obtained: ["Crafteo", "Comercio"],
        restore: "1 corazones",
        color: "#BB9F52",
        rank: "Común"
    },

    16: {
        category: "foodstuffs",
        name: "algas_secas",
        tag: "dried_kelp",
        displayname: "Algas secas",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/Dried_Kelp_JE1.png/revision/latest/scale-to-width-down/160?cb=20190403184613"],
        stacksize: "64 items",
        obtained: ["Cocinar", "Crafteo"],
        restore: "0.5 corazones",
        color: "#181714",
        rank: "Común"
    },

    17: {
        category: "foodstuffs",
        name: "manzana_dorada_encantada",
        tag: "enchanted_golden_apple",
        displayname: "Manzana dorada encantada",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/Enchanted_Golden_Apple_JE2_BE2.gif/revision/latest/scale-to-width-down/160?cb=20200430025309"],
        stacksize: "64 items",
        obtained: ["Generación natural"],
        restore: "2 corazones",
        color: "#F5E333",
        rank: "Épico"
    },

    18: {
        category: "foodstuffs",
        name: "manzana_dorada",
        tag: "golden_apple",
        displayname: "Manzana dorada",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/54/Golden_Apple_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200521041809"],
        stacksize: "64 items",
        obtained: ["Crafteo", "Generación natural"],
        restore: "2 corazones",
        color: "#F5E333",
        rank: "Raro"
    },

    19: {
        category: "foodstuffs",
        name: "bayas_resplandecientes",
        tag: "glow_berries",
        displayname: "Bayas luminosas",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/Glow_Berries_JE1_BE1.png/revision/latest/scale-to-width-down/32?cb=20210308034910"],
        stacksize: "64 items",
        obtained: ["Cultivo"],
        restore: "1 corazones",
        color: "#E1DF42",
        rank: "Común"
    },

    20: {
        category: "foodstuffs",
        name: "botella_de_miel",
        tag: "honey_bottle",
        displayname: "Frasco con miel",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c2/Honey_Bottle_JE1_BE2.png/revision/latest/scale-to-width-down/160?cb=20190822170711"],
        stacksize: "16 items",
        obtained: ["Crafteo", "Cosecha"],
        restore: "3 corazones",
        color: "#F5E333",
        rank: "Común"
    },

    21: {
        category: "foodstuffs",
        name: "sandia",
        tag: "melon_slice",
        displayname: "Rodaja de sandía",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Melon_Slice_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190505051737"],
        stacksize: "64 items",
        obtained: ["Cultivo"],
        restore: "1 corazones",
        color: "#EA4F4F",
        rank: "Común"
    },

    22: {
        category: "foodstuffs",
        name: "sopa_de_hongos",
        tag: "mushroom_stew",
        displayname: "Estofado de champiñones",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Mushroom_Stew_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190505052018"],
        stacksize: "1 items",
        obtained: ["Cosecha", "Crafteo"],
        restore: "3 corazones",
        color: "#AE8D3A",
        rank: "Común"
    },

    23: {
        category: "foodstuffs",
        name: "patata_envenenada",
        tag: "poisonous_potato",
        displayname: "Patata venenosa",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c0/Poisonous_Potato_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200521233152"],
        stacksize: "64 items",
        obtained: ["Generación natural"],
        restore: "1 corazones",
        color: "#30CA5C",
        rank: "Común"
    },

    24: {
        category: "foodstuffs",
        name: "patata",
        tag: "potato",
        displayname: "Patata",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Potato_JE3_BE2.png/revision/latest/scale-to-width-down/32?cb=20190430222727"],
        stacksize: "64 items",
        obtained: ["Generación natural", "Dropeo"],
        restore: "0.5 corazones",
        color: "#EEF35D",
        rank: "Común"
    },

    25: {
        category: "foodstuffs",
        name: "pez_globo",
        tag: "pufferfish",
        displayname: "Pez globo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Pufferfish_%28item%29_JE5_BE2.png/revision/latest/scale-to-width-down/160?cb=20191230044451"],
        stacksize: "64 items",
        obtained: ["Pesca", "Dropeo"],
        restore: "0.5 corazones",
        color: "#C2C729",
        rank: "Común"
    },

    26: {
        category: "foodstuffs",
        name: "pastel_de_calabaza",
        tag: "pumpkin_pie",
        displayname: "Tarta de calabaza",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Pumpkin_Pie_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190512213136"],
        stacksize: "64 items",
        obtained: ["Crafteo"],
        restore: "4 corazones",
        color: "#EAC572",
        rank: "Común"
    },

    27: {
        category: "foodstuffs",
        name: "estofado_de_conejo",
        tag: "rabbit_stew",
        displayname: "Estofado de conejo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/Rabbit_Stew_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190512214401"],
        stacksize: "1 items",
        obtained: ["Crafteo", "Aldeanos"],
        restore: "5 corazones",
        color: "#715922",
        rank: "Común"
    },

    28: {
        category: "foodstuffs",
        name: "filete_crudo",
        tag: "raw_beef",
        displayname: "Filete crudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Raw_Beef_JE4_BE3.png/revision/latest/scale-to-width-down/160?cb=20190504054851"],
        stacksize: "64 items",
        obtained: ["Dropeo"],
        restore: "1.5 corazones",
        color: "#C05151",
        rank: "Común"
    },

    29: {
        category: "foodstuffs",
        name: "pollo_crudo",
        tag: "raw_chicken",
        displayname: "Pollo crudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/51/Raw_Chicken_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200430031136"],
        stacksize: "64 items",
        obtained: ["Dropeo"],
        restore: "1 corazones",
        color: "#E9DEDE",
        rank: "Común"
    },

    30: {
        category: "foodstuffs",
        name: "bacalao_crudo",
        tag: "raw_cod",
        displayname: "Bacalao crudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ef/Raw_Cod_JE4_BE2.png/revision/latest/scale-to-width-down/160?cb=20190403183136"],
        stacksize: "64 items",
        obtained: ["Dropeo", "Pesca"],
        restore: "1 corazones",
        color: "#E7CA9B",
        rank: "Común"
    },

    31: {
        category: "foodstuffs",
        name: "cordero_crudo",
        tag: "raw_mutton",
        displayname: "Cordero crudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f3/Raw_Mutton_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190504055753"],
        stacksize: "64 items",
        obtained: ["Dropeo"],
        restore: "1 corazones",
        color: "#C05151",
        rank: "Común"
    },

    32: {
        category: "foodstuffs",
        name: "chuleta_de_cerdo_cruda",
        tag: "raw_porkchop",
        displayname: "Chultea de cerdo cruda",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Raw_Porkchop_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20190504060623"],
        stacksize: "64 items",
        obtained: ["Dropeo"],
        restore: "1.5 corazones",
        color: "#BF6868",
        rank: "Común"
    },

    33: {
        category: "foodstuffs",
        name: "conejo_crudo",
        tag: "raw_rabbit",
        displayname: "Conejo crudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Raw_Rabbit_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200108004228"],
        stacksize: "64 items",
        obtained: ["Dropeo"],
        restore: "1.5 corazones",
        color: "#E9DEDE",
        rank: "Común"
    },

    34: {
        category: "foodstuffs",
        name: "salmon_crudo",
        tag: "raw_salmon",
        displayname: "Salmón crudo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/75/Raw_Salmon_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191230044441"],
        stacksize: "64 items",
        obtained: ["Dropeo", "Pesca"],
        restore: "1 corazones",
        color: "#E07A7A",
        rank: "Común"
    },

    35: {
        category: "foodstuffs",
        name: "filete_cocinado",
        tag: "steak",
        displayname: "Filete asado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Steak_JE4_BE3.png/revision/latest/scale-to-width-down/160?cb=20190504055306"],
        stacksize: "64 items",
        obtained: ["Cocinar"],
        restore: "4 corazones",
        color: "#802A2A",
        rank: "Común"
    },

    36: {
        category: "foodstuffs",
        name: "estofado_sospechoso",
        tag: "suspicious_stew",
        displayname: "Estofado sospechoso",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/da/Suspicious_Stew_JE1_BE1.png/revision/latest/scale-to-width-down/160?cb=20190512110804"],
        stacksize: "1 item",
        obtained: ["Crafteo"],
        restore: "3 corazones",
        color: "#59D55D",
        rank: "Común"
    },

    37: {
        category: "foodstuffs",
        name: "bayas_dulces",
        tag: "sweet_berries",
        displayname: "Bayas dulces",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/12/Sweet_Berries_JE1_BE1.png/revision/latest/scale-to-width-down/32?cb=20190604204938"],
        stacksize: "64 items",
        obtained: ["Cosecha"],
        restore: "1 corazones",
        color: "#BC2424",
        rank: "Común"
    },

    38: {
        category: "foodstuffs",
        name: "pez_tropical",
        tag: "tropical_fish",
        displayname: "Pez tropical",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ad/Tropical_Fish_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191230044407"],
        stacksize: "64 items",
        obtained: ["Pesca", "Dropeo"],
        restore: "0.5 corazones",
        color: "#EC6615",
        rank: "Común"
    }
}

module.exports = foodEs;