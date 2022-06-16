const brewingEs = {
    1: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c5/Ghast_Tear_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190501043739"],
        color: "#EDEDDB",
        tag: "ghast_tear",
        name: "lagrima_de_ghast",
        displayname: "Lágrima de ghast",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Poción vulgar", "Poción de regeneración", "Cristal del End"],
        obtained: ["Dropeo"]
    },

    2: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/85/Fermented_Spider_Eye_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191026005229"],
        color: "#EC4747",
        tag: "fermented_eye_spider",
        name: "ojo_de_araña_fermentado",
        displayname: "Ojo de araña fermentado",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Poción de debilidad", "Poción de daño", "Poción de lentitud", "Poción de invisibilidad"],
        obtained: ["Crafteo"]
    },

    3: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/Blaze_Powder_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20190403182032"],
        color: "#F5F528",
        tag: "blaze_powder",
        name: "polvo_de_blaze",
        displayname: "Polvo de blaze",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Ojo de ender", "Carga de fuego", "Crema de magma", "Poción de fuerza", "Poción vulgar"],
        obtained: ["Crafteo"]
    },

    4: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Magma_Cream_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190501035730"],
        color: "#E2BA46",
        tag: "magma_cream",
        name: "crema_de_magma",
        displayname: "Crema de magma",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Poción vulgar", "Poción de resistencia al fuego", "Bloque de magma"],
        obtained: ["Crafteo"]
    },

    5: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b3/Brewing_Stand_%28empty%29_JE10.png/revision/latest/scale-to-width-down/32?cb=20220502063418"],
        color: "#E9E916",
        tag: "brewing_stand",
        name: "mesa_de_pociones",
        displayname: "Soporte para pociones",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Creación de pociones"],
        obtained: ["Crafteo", "Generación natual"]
    },

    6: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c9/Cauldron_JE7.png/revision/latest/scale-to-width-down/32?cb=20220112083115"],
        color: "#50503F",
        tag: "cauldron",
        name: "caldera",
        displayname: "Caldero",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Almacenar líquidos"],
        obtained: ["Crafteo", "Generación natural"]
    },

    7: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Glistering_Melon_Slice_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190531032839"],
        color: "#F28D54",
        tag: "glistering_melon_slice",
        name: "rebanada_de_melon_reluciente",
        displayname: "Rodaja de sandía reluciente",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Poción vulgar", "Poción de curación"],
        obtained: ["Crafteo", "Comercio"]
    },

    8: {
        category: "brewing",
        name: "zanahoria_dorada",
        tag: "golden_carrot",
        displayname: "Zanahoria dorada",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/aa/Golden_Carrot_JE4_BE2.png/revision/latest/scale-to-width-down/160?cb=20200430031437"],
        stacksize: "64",
        obtained: ["Generación natural", "Crafteo", "Comercio"],
        usedfor: ["Poción de visión nocturna"],
        color: "#F5E333",
        rank: "Común"
    },

    9: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c0/Rabbit%27s_Foot_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20190501034244"],
        color: "#F5BF6B",
        tag: "rabbit_foot",
        name: "pata_de_conejo",
        displayname: "Pata de conejo",
        stacksize: "64",
        rank: "Común",
        usedfor: ["Poción vulgar", "Poción de salto"],
        obtained: ["Dropeo"]
    },

    10: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8a/Dragon%27s_Breath_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190621180642"],
        color: "#F56BCF",
        tag: "dragon_breath",
        name: "aliento_del_dragon",
        displayname: "Aliento del dragón",
        stacksize: "64",
        rank: "Poco común",
        usedfor: ["Alargar pociones"],
        obtained: ["Rellenar una botella con una bola del dragón"]
    },

    11: {
        category: "brewing",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/Phantom_Membrane_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20190501045423"],
        color: "#F497DB",
        tag: "phantom_membrane",
        name: "membrana_de_phantom",
        displayname: "Membrana de fantasma",
        stacksize: "64",
        rank: "Comúm",
        usedfor: ["Reparación", "Poción de caída lenta"],
        obtained: ["Dropeo"]
    }
}

module.exports = brewingEs;