const redstoneEs = {
    1: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Redstone_Dust_JE2_BE2.png/revision/latest/scale-to-width-down/32?cb=20210427032319"],
        color: "#CF2E2E",
        tag: "redstone",
        name: "redstone",
        displayname: "Redstone",
        description: "La redstone es un objeto capaz de transmitir energía cuando es colocado como bloque."
    },

    2: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/On_Redstone_Torch_%28texture%29_JE2_BE2.png/revision/latest/scale-to-width-down/32?cb=20200922000833"],
        color: "#CF2E2E",
        tag: "redstone_torch",
        name: "antorcha_de_redstone",
        displayname: "Antorcha de redstone",
        description: "La antorcha de redstone se puede utilizar como una fuente de energía de redstone conmutable, así como un inversor de señal."
    },

    3: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Block_of_Redstone_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20191230030530"],
        color: "#CF2E2E",
        tag: "block_of_redstone",
        name: "bloque_de_redstone",
        displayname: "Bloque de redstone",
        description: "Es un bloque hecho de 9 de polvo de redstone. Emite una señal de redstone permanente y puede ser empujado por un pistón."
    },

    4: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Powered_Redstone_Repeater_%28S%29_JE9.png/revision/latest/scale-to-width-down/32?cb=20190703174639"],
        color: "#CF2E2E",
        tag: "redstone_repeater",
        name: "repetidor_de_redstone",
        displayname: "Repetidor de redstone",
        description: "El repetidor de redstone es usado en circuitos de redstone para 'repetir' las señales de redstone, retrasar las señales, evitar que las señales se muevan hacia atrás o para 'bloquear' las señales en un estado."
    },

    5: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Redstone_Comparator_%28S%29_JE4.png/revision/latest/scale-to-width-down/150?cb=20200923135229"],
        color: "#CF2E2E",
        tag: "redstone_comparator",
        name: "comparador_de_redstone",
        displayname: "Comparador de redstone",
        description: "El comparador es usado para mantener, comparar o diminuir la fuerza de la señal de redstone."
    },

    6: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/23/Piston_%28U%29_JE3.gif/revision/latest/scale-to-width-down/150?cb=20190825201257"],
        color: "#828C84",
        tag: "piston",
        name: "piston",
        displayname: "Pistón",
        description: "El pistón es un bloque capaz de empujar otros bloques, jugadores y criaturas, cuando recibe un pulso de redstone."
    },

    7: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/Sticky_Piston_%28U%29_JE3.gif/revision/latest/scale-to-width-down/150?cb=20190825201313"],
        color: "#51D675",
        tag: "sticky_piston",
        name: "piston_pegajoso",
        displayname: "Pistón pegajoso",
        description: "El pistón pegajoso tiene la misma función que un pistón normal, salvo que puede atraer otros bloques a sí mismo."
    },

    8: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bb/Slime_Block_JE2_BE3.png/revision/latest/scale-to-width-down/150?cb=20200317205027"],
        color: "#51D675",
        tag: "slime_block",
        name: "bloque_de_slime",
        displayname: "Bloque de slime",
        description: "El bloque de slime es un bloque translúcido que permite a las entidades rebotar. Se puede usar junto con un pistón para mover varios bloques conectados a la vez."
    },

    9: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Honey_Block_JE1_BE2.png/revision/latest/scale-to-width-down/150?cb=20200614083750"],
        color: "#E7EC42",
        tag: "honey_block",
        name: "bloque_de_miel",
        displayname: "Bloque de miel",
        description: "El bloque de miel ralentiza a las entidades, como un bloque de slime o la arena de almas."
    },

    10: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/39/Observer_JE4_BE3.png/revision/latest/scale-to-width-down/150?cb=20200317192711"],
        color: "#878774",
        tag: "observer",
        name: "observador",
        displayname: "Observador",
        description: "Un bloque que transmite una señal de redstone cuando un bloque o líquido al que apunta, experimenta un cambio."
    },

    11: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Hopper_%28D%29_JE8.png/revision/latest/scale-to-width-down/150?cb=20211129111940"],
        color: "#878774",
        tag: "hopper",
        name: "tolva",
        displayname: "Tolva",
        description: "La tolva es usada para recoger objetos y almacenarlos."
    },

    12: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/Dispenser_%28S%29_JE4.png/revision/latest/scale-to-width-down/150?cb=20210111083647"],
        color: "#878774",
        tag: "dispenser",
        name: "dispensador",
        displayname: "Dispensador",
        description: "El dispensador es un bloque usado para dispensar objetos, tras recibir una señal de redstone."
    },

    13: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/Dropper_%28S%29_JE3.png/revision/latest/scale-to-width-down/150?cb=20210114153020"],
        color: "#878774",
        tag: "dropper",
        name: "soltador",
        displayname: "Soltador",
        description: "La función del soltador es de expulsar objetos o de meterlos en otro contenedor."
    },

    14: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/17/Lectern_with_Book_%28S%29.png/revision/latest/scale-to-width-down/150?cb=20211224073803"],
        color: "#AE8B52",
        tag: "lectern",
        name: "atril",
        displayname: "Atril",
        description: "El atril es usado para convertir a aldeanos en bibliotecarios y para la señal de redstone que éste envía cuando se le pone un libro."
    },

    15: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f4/Target_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200302214440"],
        color: "#D92626",
        tag: "target",
        name: "diana",
        displayname: "Diana",
        description: "La diana es un bloque que emite una señal temporal de redstone cuando es golepado por un proyectil."
    },

    16: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/38/Wall_Lever_%28S%29_JE5_BE2.png/revision/latest/scale-to-width-down/150?cb=20220115071844"],
        color: "#878774",
        tag: "lever",
        name: "palanca",
        displayname: "Palanca",
        description: "La palanca emite una señal de redstone conmutable."
    },

    17: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6f/Lightning_Rod_%28U%29_JE3.png/revision/latest/scale-to-width-down/150?cb=20210306060050"],
        color: "#944527",
        tag: "lightning_rod",
        name: "pararrayos",
        displayname: "Pararrayos",
        description: "El pararrayos es un bloque que envía una señal de redstone al ser golpeado por un rayo."
    },

    18: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e6/Daylight_Detector_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201207025114"],
        color: "#9C732F",
        tag: "daylight_detector",
        name: "sensor_de_luz_solar",
        displayname: "Sensor de luz solar",
        description: "El sensor de luz solar emite una señal de redstone cuando es alumbrado por la luz del sol."
    },

    19: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Sculk_Sensor_JE1.gif/revision/latest/scale-to-width-down/150?cb=20210110123228"],
        color: "#2F899C",
        tag: "sculk-sensor",
        name: "sensor_de_sculk",
        displayname: "Sensor de sculk",
        description: "El sensor de sculk emite una señal de redstone cuando detecta vibraciones causadas por acciones y eventos."
    },

    20: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Powered_Tripwire_Hook_%28S%29_JE6.png/revision/latest/scale-to-width-down/150?cb=20210217025202"],
        color: "#9C732F",
        tag: "tripwire_hook",
        name: "gancho_de_cuerda",
        displayname: "Gancho de cuerda",
        description: "El gancho de cuerda emite una señal de redstone cuando una entidad pasa por encima de él."
    },

    21: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Trapped_Chest.gif/revision/latest/scale-to-width-down/150?cb=20191219163238"],
        color: "#9C732F",
        tag: "trapped_chest",
        name: "cofre_trampa",
        displayname: "Cofre trampa",
        description: "El cofre de trampa emite una señal de redstone cuando es abierto."
    },

    22: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a2/TNT_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20210110120939"],
        color: "#D62424",
        tag: "tnt",
        name: "dinamita",
        displayname: "Dinamita",
        description: "La dinamita es un bloque, el cual genera una explosión cuando es encendido."
    },

    23: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20220311024036"],
        color: "#9C732F",
        tag: "note_block",
        name: "bloque_musical",
        displayname: "Bloque musical",
        description: "El bloque musical emite sonidos cuando se usa o se alimenta con redstone."
    },

    24: {
        category: "redstone",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987373819561902090/button.gif"],
        color: "#E5BE82",
        tag: ["stone_button", "polished_blackstone_button", "oak_button", "spruce_button", "birch_button", "jungle_button", "acacia_button", "dark_oak_button", "mangrove_button", "crimson_button", "warped_button"],
        name: "boton",
        displayname: "Botón",
        description: "Un botón es un bloque no sólido que puede proporcionar potencia temporal de redstone."
    },

    25: {
        category: "redstone",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987423945315729549/pressure_plate.gif"],
        color: "#E5BE82",
        tag: ["oak_pressure_plate", "acacia_pressure_plate", "spruce_pressure_plate", "warped_pressure_plate", "birch_pressure_plate", "crimson_pressure_plate", "jungle_pressure_plate", "mangrove_pressure_plate", "stone_pressure_plate", "dark_oak_pressure_plate", "polished_blackstone_pressure_plate"],
        name: "placa_de_presion",
        displayname: "Placa de presión",
        description: "La placa de presión pueden detectar todas las entidades, emitiendo una intensidad de señal de 15 cuando uno está encima de ella."
    },

    26: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/Heavy_Weighted_Pressure_Plate_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154258"],
        color: "#BBB9B9",
        tag: "heavy_weighted_pressure_plate",
        name: "placa_de_presion_para_peso_elevado",
        displayname: "Placa de presión para peso elevado",
        description: "Placa de presión para peso elevado son similares a la placa de presión para peso ligero, pero miden grupos de 10 entidades."
    },

    27: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Light_Weighted_Pressure_Plate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154247"],
        color: "#ECEC41",
        tag: "light_weighted_pressure_plate",
        name: "placa_de_presion_para_peso_ligero",
        displayname: "Placa de presión para peso ligero",
        description: "La placa de presión para peso ligero pueden detectar todas las entidades, y la intensidad de la señal que emite aumenta a medida que se agregan más entidades."
    },


    28: {
        category: "redstone",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987426552264417360/door.gif"],
        color: "#E5BE82",
        tag: ["oak_door", "spruce_door", "birch_door", "jungle_door", "acacia_door", "dark_oak_door", "mangrove_door", "crimson_door", "warped_door"],
        name: "puerta",
        displayname: "Puerta",
        description: "La puerta es un bloque que se puede utilizar como barrera que se puede abrir a mano o con redstone."
    },

    29: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/69/Iron_Door_JE5.png/revision/latest/scale-to-width-down/150?cb=20220317054818"],
        color: "#BBB9B9",
        tag: "iron_door",
        name: "puerta_de_hierro",
        displayname: "Puerta de hierro",
        description: "La puerta de hierro es un bloque que se puede utilizar como barrera que se puede abrir con redstone."
    },

    30: {
        category: "redstone",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987460780482002944/trapdoor.gif"],
        color: "#EB9F6E",
        tag: ["oak_trapdoor", "spruce_trapdoor", "birch_trapdoor", "jungle_trapdoor", "acacia_trapdoor", "dark_oak_trapdoor", "mangrove_trapdoor", "crimson_trapdoor", "warped_trapdoor"],
        name: "trampilla",
        displayname: "Trampilla",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    31: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Iron_Trapdoor_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20201206122929"],
        color: "#BBB9B9",
        tag: "iron_trapdoor",
        name: "trampilla_de_hierro",
        displayname: "Trampilla de hierro",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    32: {
        category: "redstone",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987463697599455282/fence_gate.gif"],
        color: "#A1614F",
        tag: ["oak_fence_gate", "spruce_fence_gate", "birch_fence_gate", "jungle_fence_gate", "acacia_fence_gate", "dark_oak_fence_gate", "mangrove_fence_gate", "crimson_fence_gate", "warped_fence_gate"],
        name: "puerta_de_valla",
        displayname: "Puerta de valla",
        description: "La puerta de valla es un bloque que comparte las funciones tanto de la puerta como de la valla."
    }
};

module.exports = redstoneEs;