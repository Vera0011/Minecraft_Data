const transportationEs = {
    1: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d0/Powered_Rail_%28NS%29_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20210403071201", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6f/Powered_Powered_Rail_%28NS%29_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20210403072605"],
        color: "#8A7F7D",
        tag: "powered_rail",
        name: "rail_propulsor",
        displayname: "Raíl propulsor",
        description: "Un raíl propulsor es un tipo de raíl que se utiliza para aumentar o disminuir la velocidad de las vagonetas en movimiento con redstone."
    },

    2: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Detector_Rail_%28NS%29_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20210403083200", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Powered_Detector_Rail_%28NS%29_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20210403083245"],
        color: "#8A7F7D",
        tag: "detector_rail",
        name: "rail_detector",
        displayname: "Raíl detector",
        description: "Un raíl detector es un bloque que puede transportar vagonetas y puede utilizarse como fuente de energía de redstone conmutable."
    },

    3: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/45/Rail_%28NS%29_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20220112083428"],
        color: "#8A7F7D",
        tag: "rail",
        name: "rail",
        displayname: "Raíl",
        description: "Los raíles son bloques no sólidos que proporcionan un camino a lo largo del cual las vagonetas pueden viajar."
    },

    4: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a9/Activator_Rail_%28NS%29_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20210403082948", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8f/Powered_Activator_Rail_%28NS%29_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20210403083058"],
        color: "#8A7F7D",
        tag: "activator_rail",
        name: "rail_activador",
        displayname: "Raíl activador",
        description: "Un raíl activador es un tipo de raíl que puede 'activar' ciertas vagonetas. Puede utilizarse como raíl y como componente de redstone."
    },

    5: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Saddle_JE2_BE2.png/revision/latest/scale-to-width-down/32?cb=20190531030308"],
        color: "#EAA674",
        tag: "saddle",
        name: "montura",
        displayname: "Montura",
        description: "Una montura es un objeto que se puede colocar en criaturas montables (lavagantes, caballos, mulas, burros, cerdos, etc)."
    },

    6: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/98/Minecart_JE3_BE2.png/revision/latest/scale-to-width-down/150?cb=20220306052010"],
        color: "#8A7F7D",
        tag: "minecart",
        name: "vagoneta",
        displayname: "Vagoneta",
        description: "Una vagoneta es una entidad vehicular similar a un tren que se coloca sobre raíles."
    },

    7: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f3/Minecart_with_Chest_JE4_BE2.png/revision/latest/scale-to-width-down/150?cb=20191220092923"],
        color: "#8A7F7D",
        tag: "chest_minecart",
        name: "vagoneta_con_cofre",
        displayname: "Vagoneta con cofre",
        description: "Una vagoneta con cofre es una vagoneta con un cofre en su interior. Se puede encontrar naturalmente en minas abandonadas con botín dentro de ella."
    },

    8: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Minecart_with_Furnace_JE3.png/revision/latest/scale-to-width-down/150?cb=20191220092755"],
        color: "#8A7F7D",
        tag: "furnace_minecart",
        name: "vagoneta_con_horno",
        displayname: "Vagoneta con horno",
        description: "Una vagoneta con horno es una vagoneta autopropulsada con un horno en su interior exclusiva de Java Edition. Pueden utilizarse para mover otros raíles."
    },

    9: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/74/Minecart_with_TNT_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20191220092620"],
        color: "#8A7F7D",
        tag: "tnt_minecart",
        name: "vagoneta_con_dinamita",
        displayname: "Vagoneta con dinamita",
        description: "Una vagoneta con dinamita es un bloque de dinamita dentro de una vagoneta."
    },

    10: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fb/Minecart_with_Hopper_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20191220092549"],
        color: "#8A7F7D",
        tag: "hopper_minecart",
        name: "vagoneta_con_tolva",
        displayname: "Vagoneta con tolva",
        description: "Una vagoneta con tolva es una tolva dentro de una vagoneta. Extrae los objetos que se encuentran cerca (dentro de un rango ligeramente mayor que la propia vagoneta), o dentro de un contenedor situado directamente encima de la vagoneta, a una velocidad de hasta 20 objetos por segundo, ocho veces más rápido que una tolva normal."
    },

    11: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/12/Carrot_on_a_Stick_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191012181339"],
        color: "#F8BE2E",
        tag: "carrot_on_a_stick",
        name: "caña_con_zanahoria",
        displayname: "Caña con zanahoria",
        description: "Una caña con zanahoria es un objeto que puede utilizarse para controlar a los cerdos con montura. El cerdo se mueve entonces en dirección a la zanahoria. Además, si el jugador sostiene una caña con zanahoria, todos los cerdos cercanos lo siguen."
    },

    12: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/16/Warped_Fungus_on_a_Stick_JE1_BE1.png/revision/latest/scale-to-width-down/160?cb=20200325192906"],
        color: "#45ECC8",
        tag: "warped_fungus_on_a_stick",
        name: "caña_con_hongo_distorsionado",
        displayname: "Caña con hongo distorsionado",
        description: "Una caña con hongo distorsionado es un objeto que puede utilizarse para controlar a los lavagantes con montura. El lavagante se mueve entonces en dirección al hongo distorsionado. Además, si el jugador sostiene una caña con hongo distorsionado, todos los lavagantes cercanos lo siguen."
    },

    13: {
        category: "transportation",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6f/Elytra_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200429210721", "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/98/Elytra_%28item%29_JE2_BE2.png/revision/latest/scale-to-width-down/32?cb=20190406130540"],
        color: "#9B9892",
        tag: "elytra",
        name: "elitros",
        displayname: "Élitros",
        description: "Las élitros son unas raras alas que se encuentran en los barcos del End y que son la única fuente de vuelo en el modo supervivencia."
    },

    14: {
        category: "transportation",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987747125884502066/boat.gif"],
        color: "#CAA25D",
        tag: ["oak_boat", "spruce_boat", "birch_boat", "jungle_boat", "acacia_boat", "dark_oak_boat", "mangrove_boat"],
        name: "barca",
        displayname: "Barca",
        description: "Una barca es tanto un objeto como una entidad vehicular utilizada principalmente para el transporte rápido de jugadores y criaturas de pasajeros sobre masas de agua."
    },

    15: {
        category: "transportation",
        image: ["https://cdn.discordapp.com/attachments/983333392378634260/987747263910674473/chest_boat.gif"],
        color: "#CAA25D",
        tag: ["oak_chest_boat", "spruce_chest_boat", "birch_chest_boat", "jungle_chest_boat", "acacia_chest_boat", "dark_oak_chest_boat", "mangrove_chest_boat"],
        name: "barca_con_cofre",
        displayname: "Barca con cofre",
        description: "Una barca con cofre es un tipo de barca que puede utilizarse para el transporte rápido de jugadores, criaturas y objetos sobre masas de agua."
    }
};

module.exports = transportationEs;