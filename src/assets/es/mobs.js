const mobsEs = {
    1: {
        name: 'murcielago',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/BatFace.png/revision/latest/scale-to-width-down/64?cb:20200113175350',
        color: '#61110B',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '6',
        displayname: 'Murcielago',
        id: '19',
        width: '0.5',
        height: '0.9',
        category: 'Mob pasivo',
        description: 'Los murciélagos son criaturas pasivas de Minecraft, que habitan en cavernas y lugares oscuros en la Superficie.'
    },

    2: {
        name: 'abeja',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/BeeFace.png/revision/latest/scale-to-width-down/64?cb=20190822170328',
        color: '#DBB43E',
        damage: {
            easy: '2',
            normal: '2',
            hard: '3',
        },
        health: '10',
        displayname: 'Abeja',
        id: '122',
        width: '0.7',
        height: '0.6',
        category: 'Mob neutral',
        description: 'Las abejas son mobs voladores, que viven en sus nidos. Si una es atacada, atacan todas en manada, inyectando veneno.'
    },

    3: {
        name: 'blaze',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e3/BlazeFace.png/revision/latest/scale-to-width-down/64?cb=20210212015420',
        color: '#8B3402',
        damage: {
            easy: '4',
            normal: '6',
            hard: '9',
        },
        health: '20',
        displayname: 'Blaze',
        id: '43',
        width: '0.6',
        height: '1.8',
        category: 'Mob neutral',
        description: 'Los blaze son mobs voladores, que aparecen en las fortalezas del Nether. Son la unica fuente para obtener varas de blaze (para pociones)'
    },

    4: {
        name: 'gato',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a2/CatFace.png/revision/latest/scale-to-width-down/64?cb=20200223062425',
        color: '#FF9E00',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Gato',
        id: '75',
        width: '0.6',
        height: '0.7',
        category: 'Mob pasivo',
        description: 'Los gatos son mobs pacíficos domesticables que habitan en las aldeas que tengan 4 camas o más y un aldeano.'
    },

    5: {
        name: 'araña_de_cueva',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6b/CaveSpiderFace.png/revision/latest/scale-to-width-down/64?cb=20190822092547',
        color: '#153833',
        damage: {
            easy: '2',
            normal: '2',
            hard: '3',
        },
        health: '12',
        displayname: 'Araña de Cueva',
        id: '40',
        width: '0.7',
        height: '0.5',
        category: 'Mob neutral',
        description: 'Las arañas de cueva son mobs que aparecen y viven en las minas. Inyectan veneno al jugador, y suelen aparecer gracias a un spawner'
    },

    6: {
        name: 'gallina',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/ChickenFace.png/revision/latest/scale-to-width-down/64?cb=20190623021557',
        color: '#FFFFFF',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '4',
        displayname: 'Gallina',
        id: '10',
        width: '0.4',
        height: '0.7',
        category: 'Mob pasivo',
        description: 'Las gallinas (también llamadas pollos) son criaturas pasivas que suministran plumas, pollo crudo, huevos, e incluso pollo cocido (si mueren quemadas).'
    },

    7: {
        name: 'bacalao',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/CodBody.png/revision/latest/scale-to-width-down/64?cb=20180313114135',
        color: '#8C6D4D',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '3',
        displayname: 'Bacalao',
        id: '112',
        width: '0.5',
        height: '0.3',
        category: 'Mob pasivo',
        description: 'Los bacalaos son criaturas pasivas comunes que se encuentran en los océanos.'
    },

    8: {
        name: 'vaca',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/93/CowFace.png/revision/latest/scale-to-width-down/64?cb=20190804020139',
        color: '#ABABAB',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Vaca',
        id: '11',
        width: '0.9',
        height: '1.4',
        category: 'Mob pasivo',
        description: 'Las vacas son criaturas pasivas, y fueron añadidas por primera vez en Indev. Su mayor valor es como una fuente de cuero, que puede ser usado para crear la penúltima armadura más débil de los 5 tipos existentes.'
    },

    9: {
        name: 'creeper',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/CreeperFace.png/revision/latest/scale-to-width-down/64?cb=20181024160537',
        color: '#13AA0E',
        damage: {
            easy: '22.5',
            normal: '43',
            hard: '64.5',
        },
        health: '10',
        displayname: 'Creeper',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    10: {
        name: 'delfin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0d/DolphinFace.png/revision/latest/scale-to-width-down/64?cb=20180629103838',
        color: '#BDCCDE',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0',
        },
        health: '5',
        displayname: 'Delfin',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    11: {
        name: 'burro',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/DonkeyFace.png/revision/latest/scale-to-width-down/64?cb=20200222141027',
        color: '#895926',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '15',
        displayname: 'Burro',
        id: '24',
        width: '1.3965',
        height: '1.5',
        category: 'Mob pasivo',
        description: 'Los burros son criaturas pasivas que pueden ser domesticados y son un medio útil para transportar objetos.'
    },

    12: {
        name: 'ahogado',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/DrownedFace.png/revision/latest/scale-to-width-down/64?cb=20180313181623',
        color: '#4D9281',
        damage: {
            easy: '2',
            normal: '3',
            hard: '4',
        },
        health: '10',
        displayname: 'Ahogado',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    13: {
        name: 'elder_guardian',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/ElderGuardianFace.png/revision/latest/scale-to-width-down/64?cb=20200223055115',
        color: '#92939E',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '40',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    14: {
        name: 'ender_dragon',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/EnderdragonFace.png/revision/latest/scale-to-width-down/64?cb=20190419071935',
        color: '#754F75',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '100',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    15: {
        name: 'enderman',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/EndermanFace.png/revision/latest/scale-to-width-down/64?cb=20181024160517',
        color: '#7F0E8E',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '20',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    16: {
        name: 'endermite',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/83/EndermiteFace.png/revision/latest/scale-to-width-down/64?cb=20180313072404',
        color: '#3A294A',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '4',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    17: {
        name: 'evoker',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/EvokerFace.png/revision/latest/scale-to-width-down/64?cb=20190501005258',
        color: '#535959',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '12',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    18: {
        name: 'zorro',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/88/FoxFace.png/revision/latest/scale-to-width-down/64?cb=20190213180659',
        color: '#D59A09',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Zorro',
        id: '121',
        width: '0.7',
        height: '0.6',
        category: 'Mob pasivo',
        description: 'Los zorros son criaturas pasivas y nocturnas que suelen encontrarse comúnmente en los biomas de taiga, taiga de árboles gigantes, y nevados de taiga. Durante la noche, se suelen desplazar hacia alguna aldea cercana.'
    },

    19: {
        name: 'ghast',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/70/GhastFace.png/revision/latest/scale-to-width-down/64?cb=20190804023708',
        color: '#FDFDFD',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '5',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    20: {
        name: 'giant',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/ZombieFace.png/revision/latest/scale-to-width-down/64?cb=20190501015449',
        color: '#3B5F2A',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '50',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    21: {
        name: 'guardian',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e6/GuardianFace.png/revision/latest/scale-to-width-down/64?cb=20200223055028',
        color: '#507A67',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '15',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    22: {
        name: 'caballo',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/HorseFace.png/revision/latest/scale-to-width-down/64?cb=20200222163336',
        color: '#690000',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '15',
        displayname: 'Caballo',
        id: '23',
        width: '1.3965',
        height: '1.6',
        category: 'Mob pasivo',
        description: 'Los caballos son criaturas domesticables que pueden servir para la exploración, las variantes pueden aparecer en uno de varios colores de piel diferentes que exhiben manchas o rasgos diferentes.'
    },

    23: {
        name: 'pillager',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/PillagerFace.png/revision/latest/scale-to-width-down/64?cb=20181024165842',
        color: '#959C9C',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '12',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    24: {
        name: 'husk',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/HuskFace.png/revision/latest/scale-to-width-down/64?cb=20190822094814',
        color: '#797061',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    25: {
        name: 'iron_golem',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/IronGolemFace.png/revision/latest/scale-to-width-down/64?cb=20190501011517',
        color: '#D6D6D6',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '50',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    26: {
        name: 'llama',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/LlamaFace.png/revision/latest/scale-to-width-down/64?cb=20190823005427',
        color: '#645B4A',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '15',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    27: {
        name: 'magma_cube',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/69/MagmaCubeFace.png/revision/latest/scale-to-width-down/64?cb=20190501234829',
        color: '#FB352C',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '8',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    28: {
        name: 'champiñaca',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/MooshroomFace.png/revision/latest/scale-to-width-down/64?cb=20190804020954',
        color: '#FF0000',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Champiñaca',
        id: '16',
        width: '0.9',
        height: '1.4',
        category: 'Mob pasivo',
        description: 'Las Champiñacas son un tipo especial de vacas, y sólo aparecen en el Isla de champiñones o setas. Tienen la piel de color rojo con manchas blancas cubierta de champiñones rojos, como si éstos fuesen parásitos que han transformado a la vaca original. Al caerle un rayo su color cambia a un café claro'
    },

    29: {
        name: 'mula',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/MuleFace.png/revision/latest/scale-to-width-down/64?cb=20200222160008',
        color: '#61110B',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '15',
        displayname: 'Mula',
        id: '25',
        width: '1.3965',
        height: '1.6',
        category: 'Mob pasivo',
        description: 'Las mulas son criaturas domesticables que sirven para transportar elementos fácilmente.'
    },

    30: {
        name: 'ocelote',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/60/OcelotFace.png/revision/latest/scale-to-width-down/64?cb=20190822100526',
        color: '#F3A81D',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Ocelote',
        id: '22',
        width: '0.6',
        height: '0.7',
        category: 'Mob pasivo',
        description: 'Los ocelotes son criaturas pasivas que habitan en la jungla y sus variantes.'
    },

    31: {
        name: 'panda',
        image: 'https://cdn.discordapp.com/attachments/825701229983957043/867500045271695370/4270_Panda.gif',
        color: '#DDDDDD',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    32: {
        name: 'loro',
        image: 'https://media.discordapp.net/attachments/825701229983957043/867453201418944512/asd.gif',
        color: '#FF0000',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '6',
        displayname: 'Loro',
        id: '30',
        width: '0.5',
        height: '0.9',
        category: 'Mob pasivo',
        description: 'El loro es una criatura Pacífica que puede volar que puede ser domesticada. Se encuentran en el bioma de jungla.'
    },

    33: {
        name: 'phantom',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ea/PhantomFace.png/revision/latest/scale-to-width-down/64?cb=20180313180442',
        color: '#5161A5',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    34: {
        name: 'cerdo',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/03/PigFace.png/revision/latest/scale-to-width-down/64?cb=20190804021457',
        color: '#FF9696',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Cerdo',
        id: '12',
        width: '0.9',
        height: '0.9',
        category: 'Mob pasivo',
        description: 'Los cerdos son criaturas pasivas que aparecieron por primera vez en el modo Prueba de supervivencia. La principal ventaja de los cerdos es la de proporcionar chuleta cruda de cerdo al jugador, y por eso son una fuente no-renovable de alimentos'
    },

    35: {
        name: 'polar_bear',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/PolarBearFace.png/revision/latest/scale-to-width-down/64?cb=20190823095202',
        color: '#EEEEEE',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '15',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    36: {
        name: 'pufferfish',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fe/PufferfishFace.png/revision/latest/scale-to-width-down/64?cb=20180313115655',
        color: '#F2B307',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '1.5',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob pasivo',
        description: 'Undefined'
    },

    37: {
        name: 'illusioner',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a8/IllusionerFace.png/revision/latest/scale-to-width-down/64?cb=20201103102047',
        color: '#484A49',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '2.5',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    38: {
        name: 'conejo',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/71/RabbitFace.png/revision/latest/scale-to-width-down/64?cb=20190823010806',
        color: '#FFFFFF',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '3',
        displayname: 'Conejo',
        id: '18',
        width: '0.4',
        height: '0.5',
        category: 'Mob pasivo',
        description: 'Los conejos son criaturas pacíficas (exceptuando el conejo asesino que solo se puede generar con comandos).'
    },

    39: {
        name: 'ravager',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a9/RavagerFace.png/revision/latest/scale-to-width-down/64?cb=20181025103915',
        color: '#696A65',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '50',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
    },

    40: {
        name: 'salmon',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2b/SalmonBody.png/revision/latest/scale-to-width-down/64?cb=20180313114111',
        color: '#E08A7B',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '3',
        displayname: 'Salmon',
        id: '109',
        width: '0.7',
        height: '0.4',
        category: 'Mob pasivo',
        description: 'Undefined'
    },

    41: {
        name: 'oveja',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/SheepFace.png/revision/latest/scale-to-width-down/64?cb=20210114202109',
        color: '#FFFFFF',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '8',
        displayname: 'Oveja',
        id: '13',
        width: '0.9',
        height: '1.3',
        category: 'Mob pasivo',
        description: 'Las ovejas son criaturas pasivas y fueron las primeras en ser añadidas al juego, en la versión Survival Test. La principal función de las ovejas es proporcionar lana, con trigo te sigue y se reproduce igual que las vacas.'
    },

    42: {
        name: 'shulker',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/32/ShulkerFace.png/revision/latest/scale-to-width-down/64?cb=20180313080616',
        color: '#976996',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '15',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    43: {
        name: 'silverfish',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/41/SilverfishFace.png/revision/latest/scale-to-width-down/64?cb=20180313083347',
        color: '#777777',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '0.75',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    44: {
        name: 'skeleton',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/dc/SkeletonFace.png/revision/latest/scale-to-width-down/64?cb=20190822094528',
        color: '#D3D3D3',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    45: {
        name: 'caballo_esqueletico',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/SkeletonHorseFace.png/revision/latest/scale-to-width-down/64?cb=20200222123100',
        color: '#828282',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '15',
        displayname: 'Caballo esqueletico',
        id: '26',
        width: '1.4',
        height: '1.6',
        category: 'Mob pasivo',
        description: 'Los caballos esqueleticos son variantes no muertas de los caballos normales.'
    },

    46: {
        name: 'slime',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/ca/SlimeFace.png/revision/latest/scale-to-width-down/64?cb=20190501014257',
        color: '#89C67C',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '8',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    47: {
        name: 'golem_de_nieve',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/SnowGolemFace.png/revision/latest/scale-to-width-down/64?cb=20190501011859',
        color: '#EEEBEB',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '4',
        displayname: 'Golem de nieve',
        id: '21',
        width: '0.7',
        height: '1.9',
        category: 'Mob pasivo',
        description: 'El gólem de nieve es una criatura útil.'
    },

    48: {
        name: 'spider',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/SpiderFace.png/revision/latest/scale-to-width-down/64?cb=20200327100727',
        color: '#4F453D',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '8',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    49: {
        name: 'calamar',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ea/SquidFace.png/revision/latest/scale-to-width-down/64?cb=20190804025102',
        color: '#25165D',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '10',
        displayname: 'Calamar',
        id: '17',
        width: '0.95',
        height: '0.95',
        category: 'Mob pasivo',
        description: 'Los calamares son criaturas acuáticas pasivas comunes que se reproducen en ríos y océanos.'
    },

    50: {
        name: 'stray',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/StrayFace.png/revision/latest/scale-to-width-down/64?cb=20190822095109',
        color: '#475B5B',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    51: {
        name: 'trader_llama',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/LlamaFace.png/revision/latest/scale-to-width-down/64?cb=20190823005427',
        color: '#645B4A',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '15',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    52: {
        name: 'pez_tropical',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9f/TropicalFishBody.png/revision/latest/scale-to-width-down/64?cb=20180313114344',
        color: '#FF8300',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '3',
        displayname: 'Pez tropical',
        id: '11',
        width: '0.5',
        height: '0.4',
        category: 'Mob pasivo',
        description: 'Los peces tropicales son mobs pasivos comunes que se encuentran en los océanos. Hay 3584 variantes posibles.'
    },

    53: {
        name: 'tortuga',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8b/TurtleFace.png/revision/latest/scale-to-width-down/64?cb=20180313114814',
        color: '#1CFF00',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '30',
        displayname: 'Tortuga',
        id: '74',
        width: '1.2',
        height: '0.4',
        category: 'Mob pasivo',
        description: 'Las tortugas son unas criaturas pasivas que se mueven tanto en el agua como en la tierra.'
    },

    54: {
        name: 'vex',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/VexFace.png/revision/latest/scale-to-width-down/64?cb=20190823013545',
        color: '#657689',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '7',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    55: {
        name: 'aldeano',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/VillagerFace.png/revision/latest/scale-to-width-down/64?cb=20190501004814',
        color: '#622B05',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '20',
        displayname: 'Aldeano',
        id: '120',
        width: '0.6',
        height: '1.95',
        category: 'Mob pasivo',
        description: 'El aldeano es una criatura pacífica que vive en las aldeas, trabaja en su respectiva profesión, se reproduce e interactúa.'
    },

    56: {
        name: 'vindicator',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/VindicatorFace.png/revision/latest/scale-to-width-down/64?cb=20190501005647',
        color: '#8E9394',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '12',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    57: {
        name: 'vendedor_ambulante',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/83/WanderingTraderFace.png/revision/latest/scale-to-width-down/64?cb=20190208090559',
        color: '#622B05',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0'
        },
        health: '20',
        displayname: 'Vendedor ambulante',
        id: '118',
        width: '0.6',
        height: '1.95',
        category: 'Mob pasivo',
        description: 'El comerciante ambulante es una criatura similar a los aldeanos. No vive en aldeas, sino que camina libremente por el mundo con un patrón específico. El jugador puede interactuar con él para comprarle objetos a cambio de esmeraldas'
    },

    58: {
        name: 'witch',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4e/WitchFace.png/revision/latest/scale-to-width-down/64?cb=20200905232526',
        color: '#7A5F6B',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '13',
        displayname: 'Undefined',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    59: {
        name: 'wither',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/84/WitherFace.png/revision/latest/scale-to-width-down/64?cb=20190804022733',
        color: '#000000',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '150',
        displayname: 'Wither',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    60: {
        name: 'wither_skeleton',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/WitherSkeletonFace.png/revision/latest/scale-to-width-down/64?cb=20190804022955',
        color: '#323232',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Wither Skeleton',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    61: {
        name: 'wolf',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/68/WolfFace.png/revision/latest/scale-to-width-down/64?cb=20190501015035',
        color: '#DAD8D9',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '4',
        displayname: 'Wolf',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    62: {
        name: 'zombie',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/ZombieFace.png/revision/latest/scale-to-width-down/64?cb=20190501015449',
        color: '#4A682D',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Zombie',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    63: {
        name: 'zombie_horse',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/46/ZombieHorseFace.png/revision/latest/scale-to-width-down/64?cb=20200223042320',
        color: '#4A682D',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '7.5',
        displayname: 'Zombie Horse',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    64: {
        name: 'zombie_villager',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/ZombieVillagerFace.png/revision/latest/scale-to-width-down/64?cb=20190501010957',
        color: '#942E27',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Zombie Villager',
        id: 'Undefined',
        width: 'Undefined',
        height: 'Undefined',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    65: {
        name: 'piglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/PiglinFace.png/revision/latest/scale-to-width-down/80?cb=20200215152957',
        color: '#F3B986',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '8',
        displayname: 'Piglin',
        id: '123',
        width: '0.6',
        height: '1.95',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    66: {
        name: 'hoglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/10/HoglinFace.png/revision/latest/scale-to-width-down/64?cb=20200214161621',
        color: '#EBEDAA',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '20',
        displayname: 'Hoglin',
        id: '124',
        width: '0.6982',
        height: '0.7',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    67: {
        name: 'strider',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/StriderFace.png/revision/latest/scale-to-width-down/64?cb=20200326071355',
        color: '#EE5C3F',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Strider',
        id: '125',
        width: '0.9',
        height: '1.7',
        category: 'Mob pasivo',
        description: 'Undefined'
    },

    68: {
        name: 'zoglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/ZoglinFace.png/revision/latest/scale-to-width-down/64?cb=20200402165150',
        color: '#6A8D42',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '20',
        displayname: 'Zoglin',
        id: '126',
        width: '1.3965',
        height: '1.4',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    69: {
        name: 'axolotl',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/AxolotlFace.png/revision/latest/scale-to-width-down/64?cb=20201216195034',
        color: '#EE3FA1',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '14',
        displayname: 'Axolotl',
        id: '130',
        width: '1.3',
        height: '0.6',
        category: 'Mob pasivo',
        description: 'Undefined'
    },

    70: {
        name: 'glow_squid',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/GlowSquidFace.png/revision/latest/scale-to-width-down/64?cb=20200804202459',
        color: '#3EEDB3',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '5',
        displayname: 'Glow Squid',
        id: '129',
        width: '0.8',
        height: '0.8',
        category: 'Mob pasivo',
        description: 'Undefined'
    },

    71: {
        name: 'goat',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/GoatFace.png/revision/latest/scale-to-width-down/64?cb=20210118052703',
        color: '##EEEEEE',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '5',
        displayname: 'Goat',
        id: '128',
        width: '1.3',
        height: '0.9',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    72: {
        name: 'zombified_piglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9b/ZombifiedPiglinFace.png/revision/latest/scale-to-width-down/80?cb=20200217232809',
        color: '#E7918C',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '10',
        displayname: 'Zombified Piglin',
        id: '36',
        width: '0.6',
        height: '1.95',
        category: 'Mob neutral',
        description: 'Undefined'
    },

    73: {
        name: 'piglin_brute',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/74/PiglinBruteFace.png/revision/latest/scale-to-width-down/80?cb=20200626030016',
        color: '#CECD82',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: '25',
        displayname: 'Piglin Brute',
        id: '127',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'Undefined'
    },

    74: {
        name: 'warden',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/WardenFace.png/revision/latest/scale-to-width-down/108?cb=20210508080631',
        color: '#1CD1D7',
        damage: {
            easy: 'Undefined',
            normal: 'Undefined',
            hard: 'Undefined',
        },
        health: 'Indefinido',
        displayname: 'Warden',
        id: 'Indefinido',
        width: 'Indefinido',
        height: '3.5',
        category: 'Mob hostil',
        description: 'Undefined'
    },
};

module.exports = mobsEs;