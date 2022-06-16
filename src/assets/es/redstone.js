const redstoneEs = {
    1: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Redstone_Dust_JE2_BE2.png/revision/latest/scale-to-width-down/32?cb=20210427032319"],
        color: "#CF2E2E",
        tag: "redstone",
        name: "redstone",
        displayname: "Redstone",
        description: "La redstone es un minecral capaz de transmitir energía cuando es colocado como bloque"
    },

    2: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/On_Redstone_Torch_%28texture%29_JE2_BE2.png/revision/latest/scale-to-width-down/32?cb=20200922000833"],
        color: "#CF2E2E",
        tag: "redstone_torch",
        name: "antorcha_de_redstone",
        displayname: "Antorcha de redstone",
        description: "La antorcha de redstone es usada para invertir las señales de redstone"
    },

    3: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Block_of_Redstone_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20191230030530"],
        color: "#CF2E2E",
        tag: "block_of_redstone",
        name: "bloque_de_redstone",
        displayname: "Bloque de redstone",
        description: "Es un bloque de mineral compuesto por redstone. Emite una señal de redstone permanente y puede ser empujado por un pistón"
    },

    4: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Powered_Redstone_Repeater_%28S%29_JE9.png/revision/latest/scale-to-width-down/32?cb=20190703174639"],
        color: "#CF2E2E",
        tag: "redstone_repeater",
        name: "repetidor_de_redstone",
        displayname: "Repetidor de redstone",
        description: "El repetidor de redstone es usado en circuitos de redstone para 'repetir' las señales de redstone"
    },

    5: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Redstone_Comparator_%28S%29_JE4.png/revision/latest/scale-to-width-down/150?cb=20200923135229"],
        color: "#CF2E2E",
        tag: "redstone_comparator",
        name: "comparador_de_redstone",
        displayname: "Comparador de redstone",
        description: "El comparador es usado para mantener, comparar o diminuir la fuerza de la señal de redstone"
    },

    6: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/23/Piston_%28U%29_JE3.gif/revision/latest/scale-to-width-down/150?cb=20190825201257"],
        color: "#828C84",
        tag: "piston",
        name: "piston",
        displayname: "Pistón",
        description: "El pistón es un bloque capaz de empujar otros bloques, jugadores y mobs, cuando recibe un pulso de redstone"
    },

    7: {
        category: "redstone",
        image: ["https: //static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/Sticky_Piston_%28U%29_JE3.gif/revision/latest/scale-to-width-down/150?cb=20190825201313"],
        color: "#51D675",
        tag: "sticky_piston",
        name: "piston_pegajoso",
        displayname: "Pistón pegajoso",
        description: "El pistón pegajoso tiene la misma función que un pistón normal, salvo que puede atraer otros bloques a si mismo"
    },

    8: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bb/Slime_Block_JE2_BE3.png/revision/latest/scale-to-width-down/150?cb=20200317205027"],
        color: "#51D675",
        tag: "slime_block",
        name: "bloque_de_slime",
        displayname: "Bloque de slime",
        description: "El bloque de slime es un bloque translúcido que permite a las entidades botar y además, las ralentiza"
    },

    9: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Honey_Block_JE1_BE2.png/revision/latest/scale-to-width-down/150?cb=20200614083750"],
        color: "#E7EC42",
        tag: "honey_block",
        name: "bloque_de_miel",
        displayname: "Bloque de miel",
        description: "El bloque de miel ralentiza a las entidades, como un bloque de slime o las arenas de alma"
    },

    10: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/39/Observer_JE4_BE3.png/revision/latest/scale-to-width-down/150?cb=20200317192711"],
        color: "#878774",
        tag: "observer",
        name: "observador",
        displayname: "Observador",
        description: "Un bloque que transmite una señal de redstone cuando un bloque o fluido al que apunta, experimenta un cambio"
    },

    11: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Hopper_%28D%29_JE8.png/revision/latest/scale-to-width-down/150?cb=20211129111940"],
        color: "#878774",
        tag: "hopper",
        name: "tolva",
        displayname: "Tolva",
        description: "La tolva es usada para recoger objetos y almacenarlos"
    },

    12: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/Dispenser_%28S%29_JE4.png/revision/latest/scale-to-width-down/150?cb=20210111083647"],
        color: "#878774",
        tag: "dispenser",
        name: "dispensador",
        displayname: "Dispensador",
        description: "El dispensador es un bloque usado para dispensar objetos, tras recibir una señal de redstone"
    },

    13: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/Dropper_%28S%29_JE3.png/revision/latest/scale-to-width-down/150?cb=20210114153020"],
        color: "#878774",
        tag: "dropper",
        name: "soltador",
        displayname: "Soltador",
        description: "La función del soltador es de expulsar objetos o de meterlos en otro contenedor"
    },

    14: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/17/Lectern_with_Book_%28S%29.png/revision/latest/scale-to-width-down/150?cb=20211224073803"],
        color: "#AE8B52",
        tag: "lectern",
        name: "atril",
        displayname: "Atril",
        description: "El atril es usado para convertir a aldeanos en libreros y para sostener libros (sólo en el multijugador)"
    },

    15: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f4/Target_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200302214440"],
        color: "#D92626",
        tag: "target",
        name: "blanco",
        displayname: "Blanco",
        description: "El blanco es un objeto que emite una señal temporal de redstone cuando es golepado por un proyectil"
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
        description: "El pararrayos es un objeto que permite desviar los rayos"
    },

    18: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e6/Daylight_Detector_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201207025114"],
        color: "#9C732F",
        tag: "daylight_detector",
        name: "sensor_de_luz_solar",
        displayname: "Sensor de luz solar",
        description: "Este sensor emite una señal de redstone cuando es alumbrado por la luz del sol"
    },

    19: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Sculk_Sensor_JE1.gif/revision/latest/scale-to-width-down/150?cb=20210110123228"],
        color: "#2F899C",
        tag: "sculk-sensor",
        name: "sensor_de_sculk",
        displayname: "Sensor de sculk",
        description: "El sensor de sculk emite una señal de redstone cuando detecta vibraciones causadas por acciones y evento"
    },

    20: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Powered_Tripwire_Hook_%28S%29_JE6.png/revision/latest/scale-to-width-down/150?cb=20210217025202"],
        color: "#9C732F",
        tag: "tripwire_hook",
        name: "cable_trampa",
        displayname: "Cable trampa",
        description: "El cable trampa emite una señal de redstone cuando una entidad pasa por encima del cable"
    },

    21: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Trapped_Chest.gif/revision/latest/scale-to-width-down/150?cb=20191219163238"],
        color: "#9C732F",
        tag: "trapped_chest",
        name: "cofre_trampa",
        displayname: "Cofre trampa",
        description: "El cofre de trampa emite una señal de redstone cuando es abierto"
    },

    22: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a2/TNT_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20210110120939"],
        color: "#D62424",
        tag: "tnt",
        name: "tnt",
        displayname: "TNT",
        description: "La TNT es un bloque, el cual genera una explosión cuando es encendido"
    },

    23: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/18/Note_Block_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20220311024036"],
        color: "#9C732F",
        tag: "note_block",
        name: "bloque_musical",
        displayname: "Bloque musical",
        description: "El bloque musical permite reproducir discord del juego"
    },

    24: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/94/Oak_Button_%28S%29_JE4.png/revision/latest/scale-to-width-down/150?cb=20191229165125"],
        color: "#E5BE82",
        tag: "oak_button",
        name: "boton_de_roble",
        displayname: "Botón de roble",
        description: "Un botón fabricado con madera de roble"
    },

    25: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/ff/Stone_Button_%28S%29_JE5_BE2.png/revision/latest/scale-to-width-down/150?cb=20200317210447"],
        color: "#999988",
        tag: "stone_button",
        name: "boton_de_piedra",
        displayname: "Botón de piedra",
        description: "Un botón fabricado con piedra"
    },

    26: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8a/Dark_Oak_Button_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200307235201"],
        color: "#6A4E23",
        tag: "dark_oak_button",
        name: "boton_de_roble_oscuro",
        displayname: "Botón de roble oscuro",
        description: "Un botón fabricado con madera de roble oscuro"
    },

    27: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4b/Birch_Button_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200224220717"],
        color: "#D7DC97",
        tag: "birch_button",
        name: "boton_de_abedul",
        displayname: "Botón de abedul",
        description: "Un botón fabricado con madera de abedul"
    },

    28: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3c/Polished_Blackstone_Button_JE1.png/revision/latest/scale-to-width-down/150?cb=20200408232446"],
        color: "#000000",
        tag: "polished_blackstone_button",
        name: "boton_de_piedra_negra_pulida",
        displayname: "Botón de piedra negra pulida",
        description: "Un botón fabricado con piedra negra pulida"
    },

    29: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e4/Mangrove_Button_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20220316184658"],
        color: "#A1614F",
        tag: "mangrove_button",
        name: "boton_de_mangle",
        displayname: "Botón de mangle",
        description: "Un botón fabricado con madera de mangle"
    },

    30: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Jungle_Button_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200315185656"],
        color: "#EB9F6E",
        tag: "jungle_button",
        name: "boton_de_jungla",
        displayname: "Botón de jungla",
        description: "Un botón fabricado con madera de jungla"
    },

    31: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/77/Crimson_Button_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200216203541"],
        color: "#8C4256",
        tag: "crimson_button",
        name: "boton_de_carmesi",
        displayname: "Botón de carmesí",
        description: "Un botón fabricado con madera de carmesí"
    },

    32: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Acacia_Button_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200224211937"],
        color: "#DB8955",
        tag: "acacia_button",
        name: "boton_de_acacia",
        displayname: "Botón de acacia",
        description: "Un botón fabricado con madera de acacia"
    },

    33: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a1/Spruce_Button_JE4_BE2.png/revision/latest/scale-to-width-down/150?cb=20200317210744"],
        color: "#A1794F",
        tag: "spruce_button",
        name: "boton_de_abeto",
        displayname: "Botón de abeto",
        description: "Un botón fabricado con madera de abeto"
    },

    34: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3a/Warped_Button_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200216203608"],
        color: "#51A2BA",
        tag: "warped_button",
        name: "boton_de_deformado",
        displayname: "Botón de deformado",
        description: "Un botón fabricado con madera deformada"
    },

    25: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Oak_Pressure_Plate_JE5_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154130"],
        color: "#E5BE82",
        tag: "oak_pressure_plate",
        name: "placa_de_presion_de_roble",
        displayname: "Placa de presión de roble",
        description: "La placa de presión de roble emite una señal de redstone al ser pisada por una entidad"
    },

    26: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d7/Crimson_Pressure_Plate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200912154312"],
        color: "#8C4256",
        tag: "crimson_pressure_plate",
        name: "placa_de_presion_de_carmesi",
        displayname: "Placa de presión de carmesí",
        description: "La placa de presión de carmesí emite una señal de redstone al ser pisada por una entidad"
    },

    27: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Dark_Oak_Pressure_Plate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154230"],
        color: "#6A4E23",
        tag: "dark_oak_pressure_plate",
        name: "placa_de_presion_de_roble_oscuro",
        displayname: "Placa de presión de roble oscuro",
        description: "La placa de presión de roble oscuro emite una señal de redstone al ser pisada por una entidad"
    },

    28: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f3/Jungle_Pressure_Plate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154520"],
        color: "#EB9F6E",
        tag: "jungle_pressure_plate",
        name: "placa_de_presion_de_jungla",
        displayname: "Placa de presión de jungla",
        description: "La placa de presión de jungla emite una señal de redstone al ser pisada por una entidad"
    },

    29: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8d/Stone_Pressure_Plate_JE5_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154721"],
        color: "#999988",
        tag: "stone_pressure_plate",
        name: "placa_de_presion_de_piedra",
        displayname: "Placa de presión de piedra",
        description: "La placa de presión de piedra emite una señal de redstone al ser pisada por una entidad"
    },

    30: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e9/Acacia_Pressure_Plate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154215"],
        color: "#DB8955",
        tag: "acacia_pressure_plate",
        name: "placa_de_presion_de_acacia",
        displayname: "Placa de presión de acacia",
        description: "La placa de presión de acacia emite una señal de redstone al ser pisada por una entidad"
    },

    31: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/64/Polished_Blackstone_Pressure_Plate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200912154328"],
        color: "#000000",
        tag: "polished_blackstone_pressure_plate",
        name: "placa_de_presion_de_piedra_negra_pulida",
        displayname: "Placa de presión de piedra negra pulida",
        description: "La placa de presión de piedra negra pulida emite una señal de redstone al ser pisada por una entidad"
    },

    32: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/Heavy_Weighted_Pressure_Plate_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154258"],
        color: "#BBB9B9",
        tag: "heavy_weighted_pressure_plate",
        name: "placa_de_presion_pesada",
        displayname: "Placa de presión pesada",
        description: "La placa de presión pesada emite una señal de redstone al ser pisada por una entidad"
    },

    33: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Light_Weighted_Pressure_Plate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154247"],
        color: "#ECEC41",
        tag: "light_weighted_pressure_plate",
        name: "placa_de_presion_ligera",
        displayname: "Placa de presión ligera",
        description: "La placa de presión ligera emite una señal de redstone al ser pisada por una entidad"
    },

    34: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/75/Mangrove_Pressure_Plate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20220316184014"],
        color: "#A1614F",
        tag: "mangrove_pressure_plate",
        name: "placa_de_presion_de_mangle",
        displayname: "Placa de presión de mangle",
        description: "La placa de presión de mangle emite una señal de redstone al ser pisada por una entidad"
    },

    35: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7d/Warped_Pressure_Plate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200912154320"],
        color: "#51A2BA",
        tag: "warped_pressure_plate",
        name: "placa_de_presion_de_deformada",
        displayname: "Placa de presión deformada",
        description: "La placa de presión deformada emite una señal de redstone al ser pisada por una entidad"
    },

    36: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/Spruce_Pressure_Plate_JE4_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154157"],
        color: "#A1794F",
        tag: "spruce_pressure_plate",
        name: "placa_de_presion_de_abeto",
        displayname: "Placa de presión de abeto",
        description: "La placa de presión de abeto emite una señal de redstone al ser pisada por una entidad"
    },

    37: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Birch_Pressure_Plate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200912154139"],
        color: "#D7DC97",
        tag: "birch_pressure_plate",
        name: "placa_de_presion_de_abedul",
        displayname: "Placa de presión de abdul",
        description: "La placa de presión de abedul emite una señal de redstone al ser pisada por una entidad"
    },

    38: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/Spruce_Door_JE4.png/revision/latest/scale-to-width-down/150?cb=20220317054846"],
        color: "#A1794F",
        tag: "spruce_door",
        name: "puerta_de_abeto",
        displayname: "Puerta de abeto",
        description: "La puerta de abeto ofrece una protección a la hora de construir bases o habitaciones"
    },

    39: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d9/Mangrove_Door_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20220321024933"],
        color: "#A1614F",
        tag: "mangrove_door",
        name: "puerta_de_mangle",
        displayname: "Puerta de mangle",
        description: "La puerta de mangle ofrece una protección a la hora de construir bases o habitaciones"
    },

    40: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/49/Birch_Door_JE4.png/revision/latest/scale-to-width-down/150?cb=20220317054838"],
        color: "#D7DC97",
        tag: "birch_door",
        name: "puerta_de_abedul",
        displayname: "Puerta de abedul",
        description: "La puerta de abedul ofrece una protección a la hora de construir bases o habitaciones"
    },

    41: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/70/Crimson_Door_JE3.png/revision/latest/scale-to-width-down/150?cb=20220317054756"],
        color: "#8C4256",
        tag: "crimson_door",
        name: "puerta_de_carmesi",
        displayname: "Puerta de carmesí",
        description: "La puerta de carmesí ofrece una protección a la hora de construir bases o habitaciones"
    },

    42: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7e/Jungle_Door_JE5.png/revision/latest/scale-to-width-down/150?cb=20220317054855"],
        color: "#EB9F6E",
        tag: "jungle_door",
        name: "puerta_de_jungla",
        displayname: "Puerta de jungla",
        description: "La puerta de jungla ofrece una protección a la hora de construir bases o habitaciones"
    },

    43: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Warped_Door_JE3.png/revision/latest/scale-to-width-down/150?cb=20220317054805"],
        color: "#51A2BA",
        tag: "warped_door",
        name: "puerta_de_deformada",
        displayname: "Puerta de deformada",
        description: "La puerta de deformada ofrece una protección a la hora de construir bases o habitaciones"
    },

    44: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/Acacia_Door_JE5.png/revision/latest/scale-to-width-down/150?cb=20220317054903"],
        color: "#DB8955",
        tag: "acacia_door",
        name: "puerta_de_acacia",
        displayname: "Puerta de acacia",
        description: "La puerta de acacia ofrece una protección a la hora de construir bases o habitaciones"
    },

    45: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Dark_Oak_Door_JE4.png/revision/latest/scale-to-width-down/150?cb=20220317054745"],
        color: "#6A4E23",
        tag: "dark_oak_door",
        name: "puerta_de_roble_oscuro",
        displayname: "Puerta de roble oscuro",
        description: "La puerta de roble oscuro ofrece una protección a la hora de construir bases o habitaciones"
    },

    46: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0e/Oak_Door_JE8.png/revision/latest/scale-to-width-down/150?cb=20220317054827"],
        color: "#E5BE82",
        tag: "oak_door",
        name: "puerta_de_roble",
        displayname: "Puerta de roble",
        description: "La puerta de roble ofrece una protección a la hora de construir bases o habitaciones"
    },

    47: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/69/Iron_Door_JE5.png/revision/latest/scale-to-width-down/150?cb=20220317054818"],
        color: "#BBB9B9",
        tag: "iron_door",
        name: "puerta_de_hierro",
        displayname: "Puerta de hierro",
        description: "La puerta de hierro ofrece una protección a la hora de construir bases o habitaciones"
    },

    48: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ae/Jungle_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201206122811"],
        color: "#EB9F6E",
        tag: "jungle_trapdoor",
        name: "trampilla_de_jungla",
        displayname: "Trampilla de jungla",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    49: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c9/Spruce_Trapdoor_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20201206122955"],
        color: "#A1794F",
        tag: "spruce_trapdoor",
        name: "trampilla_de_abeto",
        displayname: "Trampilla de abeto",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    50: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Mangrove_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20220317043521"],
        color: "#A1614F",
        tag: "mangrove_trapdoor",
        name: "trampilla_de_mangle",
        displayname: "Trampilla de mangle",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    51: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/91/Oak_Trapdoor_JE4_BE2.png/revision/latest/scale-to-width-down/150?cb=20201206122909"],
        color: "#E5BE82",
        tag: "oak_trapdoor",
        name: "trampilla_de_roble",
        displayname: "Trampilla de roble",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    52: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Dark_Oak_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201206122843"],
        color: "#6A4E23",
        tag: "dark_oak_trapdoor",
        name: "trampilla_de_roble_oscuro",
        displayname: "Trampilla de roble oscuro",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    53: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/63/Acacia_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201206122817"],
        color: "#DB8955",
        tag: "acacia_trapdoor",
        name: "trampilla_de_acacia",
        displayname: "Trampilla de acacia",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    54: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/88/Warped_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201206123016"],
        color: "#51A2BA",
        tag: "warped_trapdoor",
        name: "trampilla_de_deformada",
        displayname: "Trampilla de deformada",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    55: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/Birch_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201206122803"],
        color: "#D7DC97",
        tag: "birch_trapdoor",
        name: "trampilla_de_abedul",
        displayname: "Trampilla de abedul",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    56: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/13/Crimson_Trapdoor_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20201206123008"],
        color: "#8C4256",
        tag: "crimson_trapdoor",
        name: "trampilla_de_carmesi",
        displayname: "Trampilla de carmesí",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    57: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Iron_Trapdoor_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20201206122929"],
        color: "#BBB9B9",
        tag: "iron_trapdoor",
        name: "trampilla_de_hierro",
        displayname: "Trampilla de hierro",
        description: "La trampilla tiene un funcionamiento parecido a la puerta, salvo que ocupa 1 bloque"
    },

    58: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Mangrove_Fence_Gate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20220317044024"],
        color: "#A1614F",
        tag: "mangrove_fence_gate",
        name: "puerta_de_valla_de_mangle",
        displayname: "Puerta de valla de mangle",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    59: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/Acacia_Fence_Gate.png/revision/latest/scale-to-width-down/150?cb=20220112085716"],
        color: "#DB8955",
        tag: "acacia_fence_gate",
        name: "puerta_de_valla_de_acacia",
        displayname: "Puerta de valla de acacia",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    60: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/Warped_Fence_Gate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200208224138"],
        color: "#51A2BA",
        tag: "warped_fence_gate",
        name: "puerta_de_valla_de_deformada",
        displayname: "Puerta de valla de deformada",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    61: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/97/Birch_Fence_Gate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200224220801"],
        color: "#D7DC97",
        tag: "birch_fence_gate",
        name: "puerta_de_valla_de_abedul",
        displayname: "Puerta de valla de abedul",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    62: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Dark_Oak_Fence_Gate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200307235242"],
        color: "#6A4E23",
        tag: "dark_oak_fence_gate",
        name: "puerta_de_valla_de_roble_oscuro",
        displayname: "Puerta de valla de roble oscuro",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    63: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0b/Jungle_Fence_Gate_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20200315185717"],
        color: "#EB9F6E",
        tag: "jungle_fence_gate",
        name: "puerta_de_valla_de_jungla",
        displayname: "Puerta de valla de jungla",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    64: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Oak_Fence_Gate_JE4_BE2.png/revision/latest/scale-to-width-down/150?cb=20200317191552"],
        color: "#E5BE82",
        tag: "oak_fence_gate",
        name: "puerta_de_valla_de_roble",
        displayname: "Puerta de valla de roble",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    65: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ec/Crimson_Fence_Gate_JE1_BE1.png/revision/latest/scale-to-width-down/150?cb=20200208224051"],
        color: "#8C4256",
        tag: "crimson_fence_gate",
        name: "puerta_de_valla_de_carmesi",
        displayname: "Puerta de valla de carmesí",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    },

    66: {
        category: "redstone",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Spruce_Fence_Gate_JE4_BE2.png/revision/latest/scale-to-width-down/150?cb=20200317210723"],
        color: "#A1794F",
        tag: "spruce_fence_gate",
        name: "puerta_de_valla_de_abeto",
        displayname: "Puerta de valla de abeto",
        description: "La puerta de valla es un bloque empleado para cerrar cercados de vallas"
    }
};

module.exports = redstoneEs;