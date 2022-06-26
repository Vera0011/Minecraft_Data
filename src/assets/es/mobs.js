const mobsEs = {
    1: {
        category: "mobs",
        tag: "bat",
        name: "murcielago",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/BatFace.png/revision/latest/scale-to-width-down/64?cb:20200113175350"],
        color: "#61110B",
        damage: "0 corazones",
        health: "6 corazones",
        displayname: "Murciélago",
        width: "0.5 bloque(s)",
        height: "0.9 bloque(s)",
        type: "Criatura pasiva",
        description: "Los murciélagos son criaturas pasivas de Minecraft, que habitan en cuevas y lugares oscuros en la Superficie."
    },

    2: {
        category: "mobs",
        tag: "bee",
        name: "abeja",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/BeeFace.png/revision/latest/scale-to-width-down/64?cb=20190822170328"],
        color: "#DBB43E",
        damage: "2-3 corazones",
        health: "10 corazones",
        displayname: "Abeja",
        width: "0.7 bloque(s)",
        height: "0.6 bloque(s)",
        type: "Criatura neutral",
        description: "Las abejas son criaturas voladoras, que viven en sus nidos. Si una es atacada, atacan todas en manada, inyectando veneno."
    },

    3: {
        category: "mobs",
        tag: "blaze",
        name: "blaze",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e3/BlazeFace.png/revision/latest/scale-to-width-down/64?cb=20210212015420"],
        color: "#8B3402",
        damage: "4-9 corazones",
        health: "20 corazones",
        displayname: "Blaze",
        width: "0.6 bloque(s)",
        height: "1.8 bloque(s)",
        type: "Criatura neutral",
        description: "Los blazes son criaturas voladoras, que aparecen en las fortalezas del Nether. Son la unica fuente para obtener varas de blaze (para pociones)"
    },

    4: {
        category: "mobs",
        tag: "cat",
        name: "gato",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a2/CatFace.png/revision/latest/scale-to-width-down/64?cb=20200223062425"],
        color: "#FF9E00",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Gato",
        width: "0.6 bloque(s)",
        height: "0.7 bloque(s)",
        type: "Criatura pasiva",
        description: "Los gatos son criaturas pacíficas domesticables que habitan en las aldeas que tengan 4 camas o más y un aldeano."
    },

    5: {
        category: "mobs",
        tag: "cave_spider",
        name: "araña_de_cueva",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6b/CaveSpiderFace.png/revision/latest/scale-to-width-down/64?cb=20190822092547"],
        color: "#153833",
        damage: "2-3 corazones",
        health: "12 corazones",
        displayname: "Araña de cueva",
        width: "0.7 bloque(s)",
        height: "0.5 bloque(s)",
        category: "Mob neutral",
        description: "Las arañas de cueva son criaturas que aparecen y viven en las minas abandonadas. Inyectan veneno al jugador, y suelen aparecer gracias a un generador"
    },

    6: {
        category: "mobs",
        tag: "chicken",
        name: "gallina",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/ChickenFace.png/revision/latest/scale-to-width-down/64?cb=20190623021557"],
        color: "#FFFFFF",
        damage: "0 corazones",
        health: "4 corazones",
        displayname: "Pollo",
        width: "0.4 bloque(s)",
        height: "0.7 bloque(s)",
        type: "Criatura pasiva",
        description: "Los pollos son criaturas pasivas que suministran plumas, pollo crudo, huevos, e incluso pollo asado (si mueren quemadas)."
    },

    7: {
        category: "mobs",
        tag: "cod",
        name: "bacalao",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/CodBody.png/revision/latest/scale-to-width-down/64?cb=20180313114135"],
        color: "#8C6D4D",
        damage: "0 corazones",
        health: "3 corazones",
        displayname: "Bacalao",
        width: "0.5 bloque(s)",
        height: "0.3 bloque(s)",
        type: "Criatura pasiva",
        description: "Los bacalaos son criaturas pasivas comunes que se encuentran en los océanos."
    },

    8: {
        category: "mobs",
        tag: "cow",
        name: "vaca",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/CowFace.png/revision/latest/scale-to-width-down/64?cb=20190804020139"],
        color: "#ABABAB",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Vaca",
        width: "0.9 bloque(s)",
        height: "1.4 bloque(s)",
        type: "Criatura pasiva",
        description: "Las vacas son criaturas pasivas, y fueron añadidas por primera vez en Indev. Su mayor valor es como una fuente de cuero, que puede ser usado para crear la penúltima armadura más débil de los 5 niveles existentes."
    },

    9: {
        category: "mobs",
        tag: "creeper",
        name: "creeper",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/CreeperFace.png/revision/latest/scale-to-width-down/64?cb=20181024160537"],
        color: "#13AA0E",
        damage: "22.5-64.5 corazones",
        health: "10 corazones",
        displayname: "Creeper",
        width: "0.6 bloque(s)",
        height: "1.7 bloque(s)",
        type: "Criatura hostil",
        description: "El creeper es una criatura hostil común que se acerca sigilosamente al jugador y explota, destruyendo y dañando tanto al jugador como a otras criaturas."
    },

    10: {
        category: "mobs",
        tag: "dolphin",
        name: "delfin",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0d/DolphinFace.png/revision/latest/scale-to-width-down/64?cb=20180629103838"],
        color: "#BDCCDE",
        damage: "1.25-2.25 corazones",
        health: "5 corazones",
        displayname: "Delfin",
        width: "0.6 bloque(s)",
        height: "0.9 bloque(s)",
        type: "Criatura neutral",
        description: "Los delfines son criaturas neutrales que viven en el océano. Otorgan el efecto gracia de delfín, el cual permite al jugador nadar más rápido."
    },

    11: {
        category: "mobs",
        tag: "donkey",
        name: "burro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/DonkeyFace.png/revision/latest/scale-to-width-down/64?cb=20200222141027"],
        color: "#895926",
        damage: "0 corazones",
        health: "15 corazones",
        displayname: "Burro",
        width: "1.39 bloque(s)",
        height: "1.5 bloque(s)",
        type: "Criatura pasiva",
        description: "Los burros son criaturas pasivas que pueden ser domesticados y son un medio útil para transportar objetos."
    },

    12: {
        category: "mobs",
        tag: "drowned",
        name: "ahogado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/DrownedFace.png/revision/latest/scale-to-width-down/64?cb=20180313181623"],
        color: "#4D9281",
        damage: "2-4 corazones",
        health: "10 corazones",
        displayname: "Ahogado",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "Los ahogados son un 'no muerto' común que aparece en los océanos, ríos, pantanos o cuando un zombi se ahoga. Puedes estar equipado con un tridente, una caña de pescar o un caparazón de nautilo."
    },

    13: {
        category: "mobs",
        tag: "elder_guardian",
        name: "guardian_anciano",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/ElderGuardianFace.png/revision/latest/scale-to-width-down/64?cb=20200223055115"],
        color: "#92939E",
        damage: "2.5-6 corazones",
        health: "40 corazones",
        displayname: "Guardián anciano",
        width: "1.99 bloque(s)",
        height: "1.99 bloque(s)",
        type: "Criatura hostil",
        description: "El guardián anciano es una criatura hostil que solo se genera en los monumentos oceánicos. Es una variante más fuerte del guardián. Es considerada una criatura jefe."
    },

    14: {
        category: "mobs",
        tag: "ender_dragon",
        name: "enderdragon",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/EnderdragonFace.png/revision/latest/scale-to-width-down/64?cb=20190419071935"],
        color: "#754F75",
        damage: "3-7.5 corazones",
        health: "100 corazones",
        displayname: "Enderdragón",
        width: "16 bloque(s)",
        height: "8 bloque(s)",
        category: "Mob hostil",
        description: "El Enderdragón es el jefe principal (y final) del juego. Aparece únicamente de forma natural en el End."
    },

    15: {
        category: "mobs",
        tag: "enderman",
        name: "enderman",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/EndermanFace.png/revision/latest/scale-to-width-down/64?cb=20181024160517"],
        color: "#7F0E8E",
        damage: "2-5 corazones",
        health: "20 corazones",
        displayname: "Enderman",
        width: "0.6 bloque(s)",
        height: "3.25 bloque(s)",
        type: "Criatura neutral",
        description: "El Enderman es un monstruo poco común, de complexión delgada, de color negro y alto. Es originario de la dimensión del End. Puede teletransportarse y agarrar bloque(s). Consejo: Odia el agua y las miradas penetrantes."
    },

    16: {
        category: "mobs",
        tag: "endermite",
        name: "endermite",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/83/EndermiteFace.png/revision/latest/scale-to-width-down/64?cb=20180313072404"],
        color: "#3A294A",
        damage: "1-1.25 corazones",
        health: "4 corazones",
        displayname: "Endermite",
        width: "0.4 bloque(s)",
        height: "0.3 bloque(s)",
        type: "Criatura hostil",
        description: "El Endermite es una criatura hostil muy pequeña. Emite un halo de partículas que recuerdan a las soltadas por el portal del End. Aparece cuando el jugador usa una perla de ender, y es usado para hacer granjas de Endermans."
    },

    17: {
        category: "mobs",
        tag: "evoker",
        name: "invocador",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/EvokerFace.png/revision/latest/scale-to-width-down/64?cb=20190501005258"],
        color: "#535959",
        damage: "3 corazones",
        health: "12 corazones",
        displayname: "Invocador",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "Los invocadores son criaturas hostiles, uno de los cuatro tipos de los maldeanos. Es un mago, el cual hace aparecer pequeños criaturas aladas (llamadas 'Vex'), además de hacer emerger del suelo una fila de colmillos."
    },

    18: {
        category: "mobs",
        tag: "fox",
        name: "zorro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/88/FoxFace.png/revision/latest/scale-to-width-down/64?cb=20190213180659"],
        color: "#D59A09",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Zorro",
        width: "0.7 bloque(s)",
        height: "0.6 bloque(s)",
        type: "Criatura pasiva",
        description: "Los zorros son criaturas pasivas y nocturnas que suelen encontrarse comúnmente en los biomas de taiga y sus variantes. Durante la noche, se suelen desplazar hacia alguna aldea cercana."
    },

    19: {
        category: "mobs",
        tag: "ghast",
        name: "ghast",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/70/GhastFace.png/revision/latest/scale-to-width-down/64?cb=20190804023708"],
        color: "#FDFDFD",
        damage: "3.5-11.25 corazones",
        health: "5 corazones",
        displayname: "Ghast",
        width: "4 bloque(s)",
        height: "4 bloque(s)",
        type: "Criatura hostil",
        description: "Los ghast son criaturas hostiles, pertenecientes a la dimensión del Nether. Son seres blancos, grandes y con capacidad para volar. Al ver a un jugador o al ser herido, chillará como si una niña pequeña se cayera de un barranco. Tienen la capacidad para lanzar bolas de fuego, y al morir, sueltan una lágrima de ghast."
    },

    20: {
        category: "mobs",
        tag: "giant",
        name: "gigante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/ZombieFace.png/revision/latest/scale-to-width-down/64?cb=20190501015449"],
        color: "#3B5F2A",
        damage: "13-37.5 corazones",
        health: "50 corazones",
        displayname: "Gigante",
        width: "3.6 bloque(s)",
        height: "12 bloque(s)",
        type: "Criatura hostil",
        description: "El gigante es una criatura hostil, con aspecto de zombi y de un tamaño enorme. No aparecen de forma natural (es decir, hay que usar un comando para que aparezcan) y además, no poseen inteligencia artificial."
    },

    21: {
        category: "mobs",
        tag: "guardian",
        name: "guardian",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e6/GuardianFace.png/revision/latest/scale-to-width-down/64?cb=20200223055028"],
        color: "#507A67",
        damage: "2-4.5 corazones",
        health: "15 corazones",
        displayname: "Guardián",
        width: "0.85 bloque(s)",
        height: "0.85 bloque(s)",
        type: "Criatura hostil",
        description: "El guardián aparece en el agua, en los monumentos oceánicos. Ataca mediante un rayo largo, que daña al jugador, afectando también cuando está dentro de un bote. Su homólogo es el guardián anciano, un 'jefe' de los monumentos oceánicos."
    },

    22: {
        category: "mobs",
        tag: "horse",
        name: "caballo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/HorseFace.png/revision/latest/scale-to-width-down/64?cb=20200222163336"],
        color: "#690000",
        damage: "0 corazones",
        health: "15 corazones",
        displayname: "Caballo",
        width: "1.39 bloque(s)",
        height: "1.6 bloque(s)",
        type: "Criatura pasiva",
        description: "Los caballos son criaturas domesticables que pueden servir para la exploración, las variantes pueden aparecer en uno de varios colores de piel diferentes que exhiben manchas o rasgos diferentes."
    },

    23: {
        category: "mobs",
        tag: "pillager",
        name: "saqueador",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/PillagerFace.png/revision/latest/scale-to-width-down/64?cb=20181024165842"],
        color: "#959C9C",
        damage: "1-2.5 corazones",
        health: "12 corazones",
        displayname: "Saqueador",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "El saqueador es una criatura hostil, la cual aparece en las invasiones a aldeas, puestos de saqueadores o en patrullas, de forma aleatoria. Son liderados por un capitán, el cual suele portar un estandarte ominoso. Están equipados con una ballesta."
    },

    24: {
        category: "mobs",
        tag: "husk",
        name: "zombi_momificado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/HuskFace.png/revision/latest/scale-to-width-down/64?cb=20190822094814"],
        color: "#797061",
        damage: "1.25-2.25 corazones",
        health: "10 corazones",
        displayname: "Zombi momificado",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "El zombi momificado es una criatura hostil, la cual se genera en los desiertos. Son una variación del zombi normal (como los ahogados), salvo que esta criatura, no es afectada por la luz del sol."
    },

    25: {
        category: "mobs",
        tag: "iron_golem",
        name: "golem_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/IronGolemFace.png/revision/latest/scale-to-width-down/64?cb=20190501011517"],
        color: "#D6D6D6",
        damage: "2.38-16.13 corazones",
        health: "50 corazones",
        displayname: "Gólem de hierro",
        width: "1.4 bloque(s)",
        height: "2.7 bloque(s)",
        type: "Criatura neutral",
        description: "El gólem de hierro es una criatura neutral, la cual aparece en las aldeas, y está encargada de defender a los aldeanos. No le toques las narices, ya que tiene la capacidad de hacerte volar (¡y no de la mejor manera!)."
    },

    26: {
        category: "mobs",
        tag: "llama",
        name: "llama",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/LlamaFace.png/revision/latest/scale-to-width-down/64?cb=20190823005427"],
        color: "#645B4A",
        damage: "0.5 corazones",
        health: "15 corazones",
        displayname: "Llama",
        width: "0.9 bloque(s)",
        height: "1.87 bloque(s)",
        type: "Criatura neutral",
        description: "Las llamas son criaturas neutrales, las cuales pueden ser domadas para su posterior explotación como medio de transporte de objetos. Ten cuidado si le golpeas, puede que te escupa en la cara (si es que te lo mereces)."
    },

    27: {
        category: "mobs",
        tag: "magma_cube",
        name: "cubo_de_magma",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/69/MagmaCubeFace.png/revision/latest/scale-to-width-down/64?cb=20190501234829"],
        color: "#FB352C",
        damage: "2-4.5 corazones",
        health: "8 corazones",
        displayname: "Cubo de Magma",
        width: "2.08 bloque(s)",
        height: "2.08 bloque(s)",
        type: "Criatura hostil",
        description: "El cubo de magma es una criatura hostil que habita en El Nether. Al morir, se divide en cubos de magma más pequeños. La forma de moverse es similar a la de los slimes normales, pero al saltar su cuerpo se divide en varias secciones y genera partículas de fuego. Su forma de ataque es saltando y golpeando con el cuerpo al jugador."
    },

    28: {
        category: "mobs",
        tag: "mooshroom",
        name: "champiñaca",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/MooshroomFace.png/revision/latest/scale-to-width-down/64?cb=20190804020954"],
        color: "#FF0000",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Mooshroom",
        width: "0.9 bloque(s)",
        height: "1.4 bloque(s)",
        type: "Criatura pasiva",
        description: "Las mooshrooms son un tipo especial de vacas, y solo aparecen en el campo de champiñones. Tienen la piel de color rojo con manchas blancas cubierta de champiñones rojos, como si éstos fuesen parásitos que han transformado a la vaca original. Al caerle un rayo su color cambia a un café claro"
    },

    29: {
        category: "mobs",
        tag: "mule",
        name: "mula",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/MuleFace.png/revision/latest/scale-to-width-down/64?cb=20200222160008"],
        color: "#61110B",
        damage: "0 corazones",
        health: "15 corazones",
        displayname: "Mula",
        width: "1.39 bloque(s)",
        height: "1.6 bloque(s)",
        type: "Criatura pasiva",
        description: "Las mulas son criaturas domesticables que sirven para transportar objetos fácilmente."
    },

    30: {
        category: "mobs",
        tag: "ocelot",
        name: "ocelote",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/OcelotFace.png/revision/latest/scale-to-width-down/64?cb=20190822100526"],
        color: "#F3A81D",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Ocelote",
        width: "0.6 bloque(s)",
        height: "0.7 bloque(s)",
        type: "Criatura pasiva",
        description: "Los ocelotes son criaturas pasivas que habitan en la jungla y sus variantes."
    },

    31: {
        category: "mobs",
        tag: "panda",
        name: "panda",
        image: ["https://cdn.discordapp.com/attachments/825701229983957043/867500045271695370/4270_Panda.gif"],
        color: "#DDDDDD",
        damage: "2-4.5 corazones",
        health: "10 corazones",
        displayname: "Panda",
        width: "1.3 bloque(s)",
        height: "1.25 bloque(s)",
        type: "Criatura neutral",
        description: "Los pandas son criaturas pasivas poco comunes que se encuentran en las junglas y junglas de bambú."
    },

    32: {
        category: "mobs",
        tag: "parrot",
        name: "loro",
        image: ["https://media.discordapp.net/attachments/825701229983957043/867453201418944512/asd.gif"],
        color: "#FF0000",
        damage: "0 corazones",
        health: "6 corazones",
        displayname: "Loro",
        width: "0.5 bloque(s)",
        height: "0.9 bloque(s)",
        type: "Criatura pasiva",
        description: "El loro es una criatura pasiva voladora que puede ser domesticada. Se encuentran en junglas."
    },

    33: {
        category: "mobs",
        tag: "phantom",
        name: "phantom",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ea/PhantomFace.png/revision/latest/scale-to-width-down/64?cb=20180313180442"],
        color: "#5161A5",
        damage: "1-1.5 corazones",
        health: "10 corazones",
        displayname: "Fantasma",
        width: "0.9 bloque(s)",
        height: "0.5 bloque(s)",
        type: "Criatura hostil",
        description: "Los fantasmas son criatures hostiles voladoras que atacan al jugador que no haya dormido en un periodo de 3 días o superior en el juego, puede dar de 0 a 1 de membrana de fantasma, la cual sirve para hacer pociones de caída lenta o reparar los élitros."
    },

    34: {
        category: "mobs",
        tag: "pig",
        name: "cerdo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/03/PigFace.png/revision/latest/scale-to-width-down/64?cb=20190804021457"],
        color: "#FF9696",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Cerdo",
        width: "0.9 bloque(s)",
        height: "0.9 bloque(s)",
        type: "Criatura pasiva",
        description: "Los cerdos son criaturas pasivas que aparecieron por primera vez en la versión Survival Test. La principal ventaja de los cerdos es la de proporcionar chuleta de cerdo cruda al jugador, y por eso son una fuente no-renovable de alimentos"
    },

    35: {
        category: "mobs",
        tag: "polar_bear",
        name: "oso_polar",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/PolarBearFace.png/revision/latest/scale-to-width-down/64?cb=20190823095202"],
        color: "#EEEEEE",
        damage: "1.5-4 corazones",
        health: "15 corazones",
        displayname: "Oso polar",
        width: "1.4 bloque(s)",
        height: "1.4 bloque(s)",
        type: "Criatura neutral",
        description: "Los osos polares son criaturas neutrales que viven en biomas nevados."
    },

    36: {
        category: "mobs",
        tag: "puffer_fish",
        name: "pez_globo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fe/PufferfishFace.png/revision/latest/scale-to-width-down/64?cb=20180313115655"],
        color: "#F2B307",
        damage: "1-1.5 corazones",
        health: "1.5 corazones",
        displayname: "Pez globo",
        width: "0.35 bloque(s)",
        height: "0.35 bloque(s)",
        type: "Criatura pasiva",
        description: "El pez globo es una de las criaturas que se pueden encontrar en los océanos. Estos animales se defenderán infligiendo daño y afectando con veneno a los jugadores y a ciertas criaturas que se acerquen, pero no son criaturas hostiles."
    },

    37: {
        category: "mobs",
        tag: "illusioner",
        name: "ilusionista",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a8/IllusionerFace.png/revision/latest/scale-to-width-down/64?cb=20201103102047"],
        color: "#484A49",
        damage: "2.5 corazones",
        health: "16 corazones",
        displayname: "Ilusionista",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "Los ilusionistas son criaturas hostiles. Es uno de los tres tipos de maldeanos, que son a su vez una variación de los aldeanos."
    },

    38: {
        category: "mobs",
        tag: "rabbit",
        name: "conejo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/RabbitFace.png/revision/latest/scale-to-width-down/64?cb=20190823010806"],
        color: "#FFFFFF",
        damage: "0 corazones",
        health: "3 corazones",
        displayname: "Conejo",
        width: "0.4 bloque(s)",
        height: "0.5 bloque(s)",
        type: "Criatura pasiva",
        description: "Los conejos son criaturas pasivas (exceptuando el conejo asesino que solo se puede generar con comandos)."
    },

    39: {
        category: "mobs",
        tag: "ravager",
        name: "devastador",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a9/RavagerFace.png/revision/latest/scale-to-width-down/64?cb=20181025103915"],
        color: "#696A65",
        damage: "3.5-9 corazones",
        health: "50 corazones",
        displayname: "Devastador",
        width: "1.95 bloque(s)",
        height: "2.2 bloque(s)",
        type: "Criatura hostil",
    },

    40: {
        category: "mobs",
        tag: "salmon",
        name: "salmon",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2b/SalmonBody.png/revision/latest/scale-to-width-down/64?cb=20180313114111"],
        color: "#E08A7B",
        damage: "0 corazones",
        health: "3 corazones",
        displayname: "Salmón",
        width: "0.7 bloque(s)",
        height: "0.4 bloque(s)",
        type: "Criatura pasiva",
        description: "Los salmones son criaturas pasivas comunes que se encuentran en los océanos y ríos."
    },

    41: {
        category: "mobs",
        tag: "sheep",
        name: "oveja",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/SheepFace.png/revision/latest/scale-to-width-down/64?cb=20210114202109"],
        color: "#FFFFFF",
        damage: "0 corazones",
        health: "8 corazones",
        displayname: "Oveja",
        width: "0.9 bloque(s)",
        height: "1.3 bloque(s)",
        type: "Criatura pasiva",
        description: "Las ovejas son criaturas pasivas y fueron las primeras en ser añadidas al juego, en la versión Survival Test. La principal función de las ovejas es proporcionar lana. Con trigo sigue al jugador y se reproduce igual que las vacas."
    },

    42: {
        category: "mobs",
        tag: "shulker",
        name: "shulker",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/ShulkerFace.png/revision/latest/scale-to-width-down/64?cb=20180313080616"],
        color: "#976996",
        damage: "2 corazones",
        health: "15 corazones",
        displayname: "Shulker",
        width: "1 bloque(s)",
        height: "1 bloque(s)",
        type: "Criatura hostil",
        description: "El shulker es una criatura hostil que se encuentra en las ciudades del End."
    },

    43: {
        category: "mobs",
        tag: "silverfish",
        name: "lepisma",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/41/SilverfishFace.png/revision/latest/scale-to-width-down/64?cb=20180313083347"],
        color: "#777777",
        damage: "0.5-0.75 corazones",
        health: "4 corazones",
        displayname: "Lepisma",
        width: "0.4 bloque(s)",
        height: "0.3 bloque(s)",
        type: "Criatura hostil",
        description: "El lepisma es una criatura pequeña, una especie de insecto que tiene la piel plateada y ojos negros. Aparecen luego de romper cualquier bloque infestado."
    },

    44: {
        category: "mobs",
        tag: "skeleton",
        name: "esqueleto",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/dc/SkeletonFace.png/revision/latest/scale-to-width-down/64?cb=20190822094528"],
        color: "#D3D3D3",
        damage: "1-1.5 corazones",
        health: "10 corazones",
        displayname: "Esqueleto",
        width: "0.6 bloque(s)",
        height: "1.99 bloque(s)",
        type: "Criatura hostil",
        description: "El esqueleto es una criatura hostil común y no muerta que va equipada con un arco."
    },

    45: {
        category: "mobs",
        tag: "skeleton_horse",
        name: "caballo_esqueletico",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/SkeletonHorseFace.png/revision/latest/scale-to-width-down/64?cb=20200222123100"],
        color: "#828282",
        damage: "0 corazones",
        health: "15 corazones",
        displayname: "Caballo esqueleto",
        width: "1.4 bloque(s)",
        height: "1.6 bloque(s)",
        type: "Criatura pasiva",
        description: "Los caballos esqueletos son variantes no muertas de los caballos normales."
    },

    46: {
        category: "mobs",
        tag: "slime",
        name: "slime",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/ca/SlimeFace.png/revision/latest/scale-to-width-down/64?cb=20190501014257"],
        color: "#89C67C",
        damage: "1.5-3 corazones",
        health: "8 corazones",
        displayname: "Slime",
        width: "2.08 bloque(s)",
        height: "2.08 bloque(s)",
        type: "Criatura hostil",
        description: "El slime es una criatura hostil que aparece bajo tierra y en los biomas de pantano y manglar."
    },

    47: {
        category: "mobs",
        tag: "snow_golem",
        name: "golem_de_nieve",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/SnowGolemFace.png/revision/latest/scale-to-width-down/64?cb=20190501011859"],
        color: "#EEEBEB",
        damage: "0 corazones",
        health: "4 corazones",
        displayname: "Gólem de nieve",
        width: "0.7 bloque(s)",
        height: "1.9 bloque(s)",
        type: "Criatura pasiva",
        description: "El gólem de nieve es una criatura que sirve para defensa gracias a su habilidad de disparar bolas de nieve."
    },

    48: {
        category: "mobs",
        tag: "spider",
        name: "araña",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/SpiderFace.png/revision/latest/scale-to-width-down/64?cb=20200327100727"],
        color: "#4F453D",
        damage: "1-1.5 corazones",
        health: "8 corazones",
        displayname: "Araña",
        width: "1.4 bloque(s)",
        height: "0.9 bloque(s)",
        type: "Criatura neutral",
        description: "La araña es la tercera criatura añadida al juego. Sus ojos brillan de color rojo en la oscuridad, dándoles una apariencia tétrica."
    },

    49: {
        category: "mobs",
        tag: "squid",
        name: "calamar",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ea/SquidFace.png/revision/latest/scale-to-width-down/64?cb=20190804025102"],
        color: "#25165D",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Calamar",
        width: "0.95 bloque(s)",
        height: "0.95 bloque(s)",
        type: "Criatura pasiva",
        description: "Los calamares son criaturas pasivas acuáticas comunes que aparecen en océanos y ríos."
    },

    50: {
        category: "mobs",
        tag: "stray",
        name: "esqueleto_glacial",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/StrayFace.png/revision/latest/scale-to-width-down/64?cb=20190822095109"],
        color: "#475B5B",
        damage: "2.5 corazones",
        health: "10 corazones",
        displayname: "Esqueleto glacial",
        width: "0.6 bloque(s)",
        height: "1.99 bloque(s)",
        type: "Criatura hostil",
        description: "Los esqueletos glaciares son variantes de los esqueletos que solo aparecen en biomas nevados."
    },

    51: {
        category: "mobs",
        tag: "llama",
        name: "llama_del_vendedor_ambulante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/LlamaFace.png/revision/latest/scale-to-width-down/64?cb=20190823005427"],
        color: "#645B4A",
        damage: "0.5 corazones",
        health: "15 corazones",
        displayname: "Llama del vendedor ambulante",
        width: "0.9 bloque(s)",
        height: "1.87 bloque(s)",
        type: "Criatura neutral",
        description: "La llama del vendedor ambulante es una criatura que va acompañada de otra y son llevadas por vendedores ambulantes."
    },

    52: {
        category: "mobs",
        tag: "tropical_fish",
        name: "pez_tropical",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9f/TropicalFishBody.png/revision/latest/scale-to-width-down/64?cb=20180313114344"],
        color: "#FF8300",
        damage: "0 corazones",
        health: "3 corazones",
        displayname: "Pez tropical",
        width: "0.5 bloque(s)",
        height: "0.4 bloque(s)",
        type: "Criatura pasiva",
        description: "Los peces tropicales son criaturas pasivas comunes que se encuentran en los océanos. Hay 3584 variantes posibles."
    },

    53: {
        category: "mobs",
        tag: "turtle",
        name: "tortuga",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8b/TurtleFace.png/revision/latest/scale-to-width-down/64?cb=20180313114814"],
        color: "#1CFF00",
        damage: "0 corazones",
        health: "30 corazones",
        displayname: "Tortuga",
        width: "1.2 bloque(s)",
        height: "0.4 bloque(s)",
        type: "Criatura pasiva",
        description: "Las tortugas son criaturas pasivas que se mueven tanto en el agua como en la tierra."
    },

    54: {
        category: "mobs",
        tag: "vex",
        name: "vex",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/VexFace.png/revision/latest/scale-to-width-down/64?cb=20190823013545"],
        color: "#657689",
        damage: "2.75-6.75 corazones",
        health: "7 corazones",
        displayname: "Vex",
        width: "0.4 bloque(s)",
        height: "0.8 bloque(s)",
        type: "Criatura hostil",
        description: "El vex es una criatura hostil voladora que es invocada por el invocador, otra criatura hostil, durante el combate."
    },

    55: {
        category: "mobs",
        tag: "villager",
        name: "aldeano",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/VillagerFace.png/revision/latest/scale-to-width-down/64?cb=20190501004814"],
        color: "#622B05",
        damage: "0 corazones",
        health: "20 corazones",
        displayname: "Aldeano",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura pasiva",
        description: "El aldeano es una criatura pacífica que vive en las aldeas, trabaja en su respectiva profesión, se reproduce e interactúa."
    },

    56: {
        category: "mobs",
        tag: "vindicator",
        name: "vindicador",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/VindicatorFace.png/revision/latest/scale-to-width-down/64?cb=20190501005647"],
        color: "#8E9394",
        damage: "3.5-9.5 corazones",
        health: "12 corazones",
        displayname: "Vindicador",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "Los vindicadores son uno de los 4 tipos de maldeanos, que son descendientes de los aldeanos, disponibles en Minecraft."
    },

    57: {
        category: "mobs",
        tag: "wandering_trader",
        name: "vendedor_ambulante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/83/WanderingTraderFace.png/revision/latest/scale-to-width-down/64?cb=20190208090559"],
        color: "#622B05",
        damage: "0 corazones",
        health: "20 corazones",
        displayname: "Vendedor ambulante",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura pasiva",
        description: "El vendedor ambulante es una criatura similar a los aldeanos. No vive en aldeas, sino que camina libremente por el mundo. El jugador puede interactuar con él para comprarle objetos a cambio de esmeraldas."
    },

    58: {
        category: "mobs",
        tag: "witch",
        name: "bruja",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4e/WitchFace.png/revision/latest/scale-to-width-down/64?cb=20200905232526"],
        color: "#7A5F6B",
        damage: "3 corazones",
        health: "13 corazones",
        displayname: "Bruja",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "La bruja es una criatura agresiva. Llevan un sombrero negro con un cristal en el centro, una verruga en la nariz, un traje violeta y tienen la piel blanca. Extrañamente, Jeb utilizó como base la forma del aldeano para hacer a la bruja. Lanzan pociones de veneno arrojadizas cuando ven al jugador o algún animal pasivo y son completamente agresivas."
    },

    59: {
        category: "mobs",
        tag: "wither",
        name: "wither",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/84/WitherFace.png/revision/latest/scale-to-width-down/64?cb=20190804022733"],
        color: "#000000",
        damage: "2.5-6 corazones",
        health: "150 corazones",
        displayname: "Wither",
        width: "0.9 bloque(s)",
        height: "3.5 bloque(s)",
        type: "Criatura hostil",
        description: "El wither es una criatura jefe no muerta que flota y dispara calaveras explosivas a criaturas y jugadores. Solo puede ser construido por un jugador. Es la única fuente de estrellas del Nether, las cuales sirven para fabricar faros."
    },

    60: {
        category: "mobs",
        tag: "wither_skeleton",
        name: "esqueleto_wither",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/WitherSkeletonFace.png/revision/latest/scale-to-width-down/64?cb=20190804022955"],
        color: "#323232",
        damage: "2.5-6 corazones",
        health: "10 corazones",
        displayname: "Esqueleto del Wither",
        width: "0.7 bloque(s)",
        height: "2.4 bloque(s)",
        category: "Mob hostil",
        description: "Los esqueletos del Wither son criaturas hostiles que se generan en las fortalezas del Nether. Cuando ataca otorga el efecto de descomposición, por lo que se recomienda llevar cubos con leche o frascos con miel."
    },

    61: {
        category: "mobs",
        tag: "wolf",
        name: "lobo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/68/WolfFace.png/revision/latest/scale-to-width-down/64?cb=20190501015035"],
        color: "#DAD8D9",
        damage: "1.5-3 corazones",
        health: "4 corazones",
        displayname: "Lobo",
        width: "0.6 bloque(s)",
        height: "0.85 bloque(s)",
        type: "Criatura neutral",
        description: "Los lobos son criaturas neutrales, se cree que no cambiaron mucho desde sus inicios siendo casi un fósil viviente introducidas en la versión 1.1.1."
    },

    62: {
        category: "mobs",
        tag: "zombie",
        name: "zombie",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/ZombieFace.png/revision/latest/scale-to-width-down/64?cb=20190501015449"],
        color: "#4A682D",
        damage: "1.25-2.25 corazones",
        health: "10 corazones",
        displayname: "Zombi",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "El zombi es una criatura hostil común y no muerta."
    },

    63: {
        category: "mobs",
        tag: "zombie_horse",
        name: "caballo_zombie",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/46/ZombieHorseFace.png/revision/latest/scale-to-width-down/64?cb=20200223042320"],
        color: "#4A682D",
        damage: "0 corazones",
        health: "7.5 corazones",
        displayname: "Caballo zombi",
        width: "1.6 bloque(s)",
        height: "1.39 bloque(s)",
        type: "Criatura hostil",
        description: "El caballo zombi es una variante no utilizada del caballo normal."
    },

    64: {
        category: "mobs",
        tag: "zombie_villager",
        name: "aldeano_zombie",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/ZombieVillagerFace.png/revision/latest/scale-to-width-down/64?cb=20190501010957"],
        color: "#942E27",
        damage: "1.15-2.25 corazones",
        health: "10 corazones",
        displayname: "Aldeano zombi",
        width: "0.6 bloque(s)",
        height: "1.9 bloque(s)",
        type: "Criatura hostil",
        description: "Los aldeanos zombis son una variante de los zombis que pueden ser curados y convertidos en aldeanos normales usando manzanas doradas y pociones de debilidad. Conservan su profesión u oficio al ser curados, y pueden reducir sus precios de forma aleatoria. Habitan en aldeas destruidas también llamadas aldeas zombis."
    },

    65: {
        category: "mobs",
        tag: "piglin",
        name: "piglin",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/PiglinFace.png/revision/latest/scale-to-width-down/80?cb=20200215152957"],
        color: "#F3B986",
        damage: "2.5-6 corazones",
        health: "8 corazones",
        displayname: "Piglin",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura neutral",
        description: "Los piglins son criaturas neutrales encontradas en las ruinas del Nether y bosques carmesíes, y dentro de bastiones en ruinas. Puedes usar lingotes de oro para hacer trueques con ellos por varios objetos."
    },

    66: {
        category: "mobs",
        tag: "hoglin",
        name: "hoglin",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/10/HoglinFace.png/revision/latest/scale-to-width-down/64?cb=20200214161621"],
        color: "#EBEDAA",
        damage: "2.5-6 corazones",
        health: "20 corazones",
        displayname: "Hoglin",
        width: "1.4 bloque(s)",
        height: "1.39 bloque(s)",
        type: "Criatura hostil",
        description: "El hoglin es una criatura hostil que habita en el Nether en el bioma bosque carmesí."
    },

    67: {
        category: "mobs",
        tag: "strider",
        name: "lavagante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/StriderFace.png/revision/latest/scale-to-width-down/64?cb=20200326071355"],
        color: "#EE5C3F",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Lavagante",
        width: "0.9 bloque(s)",
        height: "1.7 bloque(s)",
        type: "Criatura pasiva",
        description: "El lavagante es una criatura pasiva que aparece en el Nether. Puede caminar sobre la lava y ser montado por el jugador. Se necesita una caña con hongo distorsionado para poder dirigirlo, algo parecido a los cerdos."
    },

    68: {
        category: "mobs",
        tag: "zoglin",
        name: "zoglin",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/ZoglinFace.png/revision/latest/scale-to-width-down/64?cb=20200402165150"],
        color: "#6A8D42",
        damage: "2.5-6 corazones",
        health: "20 corazones",
        displayname: "Zoglin",
        width: "1.39 bloque(s)",
        height: "1.4 bloque(s)",
        type: "Criatura hostil",
        description: "Los zoglins son criaturas hostiles del grupo de no-muertos, los cuales son la versión zombificada de los hoglins."
    },

    69: {
        category: "mobs",
        tag: "axolotl",
        name: "ajolote",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/AxolotlFace.png/revision/latest/scale-to-width-down/64?cb=20201216195034"],
        color: "#EE3FA1",
        damage: "1 corazones",
        health: "7 corazones",
        displayname: "Ajolote",
        width: "1.3 bloque(s)",
        height: "0.6 bloque(s)",
        type: "Criatura pasiva",
        description: "El ajolote es una criatura pasiva poco común encontrada en la Superficie, únicamente en el bioma de cuevas frondosas. Puede ser de cinco colores diferentes, se puede transportar en cubos con agua y ataca a criaturas marinas como peces, calamares, renacuajos, ahogados y guardianes."
    },

    70: {
        category: "mobs",
        tag: "glow_squid",
        name: "calamar_luminoso",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/GlowSquidFace.png/revision/latest/scale-to-width-down/64?cb=20200804202459"],
        color: "#3EEDB3",
        damage: "0 corazones",
        health: "5 corazones",
        displayname: "Calamar luminoso",
        width: "0.8 bloque(s)",
        height: "0.8 bloque(s)",
        type: "Criatura pasiva",
        description: "El calamar luminoso es una criatura pasiva acuática que se encuentra en áreas oscuras bajo el agua, generalmente en las profundidades del océano, grietas y acuíferos; Los calamares luminosos son una variante del calamar, con una textura luminiscente aqua."
    },

    71: {
        category: "mobs",
        tag: "goat",
        name: "cabra",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/GoatFace.png/revision/latest/scale-to-width-down/64?cb=20210118052703"],
        color: "##EEEEEE",
        damage: "0.5-1.5 corazones",
        health: "5 corazones",
        displayname: "Cabra",
        width: "1.3 bloque(s)",
        height: "0.9 bloque(s)",
        type: "Criatura neutral",
        description: "Las cabras son criaturas neutrales que se encuentran en los biomas de montañas. Las cabras realizan saltos de altura y son una fuente de cubos con leche y cuernos de cabra."
    },

    72: {
        category: "mobs",
        tag: "zombified_piglin",
        name: "piglin_zombificado",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9b/ZombifiedPiglinFace.png/revision/latest/scale-to-width-down/80?cb=20200217232809"],
        color: "#E7918C",
        damage: "2.5-6 corazones",
        health: "10 corazones",
        displayname: "Piglin zombificado",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura neutral",
        description: "Los piglins zombificados son variantes no muertas de piglins y piglins brutos que habitan el Nether. Un piglin zombificado se vuelve hostil cuando él u otro piglin zombificado cercano es atacado."
    },

    73: {
        category: "mobs",
        tag: "piglin_brute",
        name: "piglin_feroz",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/74/PiglinBruteFace.png/revision/latest/scale-to-width-down/80?cb=20200626030016"],
        color: "#CECD82",
        damage: "3.5-9.5 corazones",
        health: "25 corazones",
        displayname: "Piglin bruto",
        width: "0.6 bloque(s)",
        height: "1.95 bloque(s)",
        type: "Criatura hostil",
        description: "El piglin bruto es una criatura variante de los piglins, completamente hostil hacia el jugador."
    },

    74: {
        category: "mobs",
        tag: "warden",
        name: "warden",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/WardenFace.png/revision/latest/scale-to-width-down/108?cb=20210508080631"],
        color: "#1CD1D7",
        damage: "8-22.5 corazones",
        health: "250 corazones",
        displayname: "Warden",
        width: "0.8 bloque(s)",
        height: "2.9 bloque(s)",
        type: "Criatura hostil",
        description: "El warden es una criatura hostil que es invocada por chilladores de sculk. Son criaturas completamente ciegas, y por ende utilizan las vibraciones y su sentido del olfato para identificar y ubicar jugadores y otras criaturas. Cuando detecta una entidad fuera de su alcance usa un ataque a distancia abriendo su pecho. Son extremadamente poderosos, y tienen la mayor cantidad de daño y salud de cualquier criatura del juego, incluso más que los jefes, y se puede distraer con proyectiles."
    },

    75: {
        category: "mobs",
        tag: "frog",
        name: "rana",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/Cold_Frog_JE1.png/revision/latest/scale-to-width-down/150?cb=20220603223143"],
        color: "#52993C",
        damage: "0 corazones",
        health: "5 corazones",
        displayname: "Rana",
        width: "0.5 bloque(s)",
        height: "0.55 bloque(s)",
        type: "Criatura pasiva",
        description: "La rana es una criatura pasiva que aparece en pantanos y manglares. Cuando son apareados con bolas de slime crean huevas de ranas en el agua, los cuales luego eclosionan en renacuajos, que se convierten en ranas."
    },

    76: {
        category: "mobs",
        tag: "tapdole",
        name: "renacuajo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5b/TadpoleFace.png/revision/latest/scale-to-width-down/64?cb=20220119232846"],
        color: "#75b362",
        damage: "0 corazones",
        health: "3 corazones",
        displayname: "Renacuajo",
        width: "0.6 bloque(s)",
        height: "0.8 bloque(s)",
        type: "Criatura pasiva",
        description: "El renacuajo es una criatura pasiva que eclosionan de las huevas de rana. Son muy pequeños y pueden ser asesinados por los ajolotes."
    },

    77: {
        category: "mobs",
        tag: "allay",
        name: "allay",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/81/AllayFace.png/revision/latest/scale-to-width-down/50?cb=20220402225326"],
        color: "#00ffff",
        damage: "0 corazones",
        health: "10 corazones",
        displayname: "Allay",
        width: "0.6 bloque(s)",
        height: "0.6 bloque(s)",
        type: "Criatura pasiva",
        description: "El allay es una criatura pasiva que se encuentran en jaulas de mansiones del bosque y de puestos de saqueadores. Recoge objetos del suelo para cualquier jugador que le dé ese mismo objeto, dándoselo al jugador o a un bloque musical encendido una pila de lo que ha encontrado. Una vez que un jugador le da un objeto a un allay se convertirán en su dueño y no podrán hacerle daño. El allay regenera 2 puntos de salud por segundos si son heridos"
    },
};

module.exports = mobsEs;