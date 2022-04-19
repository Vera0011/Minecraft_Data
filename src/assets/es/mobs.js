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
        id: '33',
        width: '0.6',
        height: '1.7',
        category: 'Mob hostil',
        description: 'El creeper es una criatura hostil común que se acerca sigilosamente al jugador y explota, destruyendo y dañando tanto al jugador como a otras criaturas.'
    },

    10: {
        name: 'delfin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0d/DolphinFace.png/revision/latest/scale-to-width-down/64?cb=20180629103838',
        color: '#BDCCDE',
        damage: {
            easy: '1.25',
            normal: '1.5',
            hard: '2.25',
        },
        health: '5',
        displayname: 'Delfin',
        id: '31',
        width: '0.6',
        height: '0.9',
        category: 'Mob neutral',
        description: 'Los delfines son criaturas neutrales que viven en el océano. Otorgan el efecto "Gracia del Delfín", el cual permite al jugador nadar más rápido.'
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
        id: '110',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'Los ahogados son un "no muerto" común que aparece en los océanos, ríos, pantanos o cuando un zombi se ahoga. Puedes estar equipado con un tridente, una caña o una concha de Nautilo.'
    },

    13: {
        name: 'guardian_anciano',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/ElderGuardianFace.png/revision/latest/scale-to-width-down/64?cb=20200223055115',
        color: '#92939E',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '40',
        displayname: 'Guardián Anciano',
        id: '50',
        width: '1.99',
        height: '1.99',
        category: 'Mob hostil',
        description: 'El Guardián Anciano es una criatura hostil que sólo se genera en los monumentos oceánicos. Es una variante más fuerte del Guardián. Es considerada una criatura jefe.'
    },

    14: {
        name: 'enderdragon',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b5/EnderdragonFace.png/revision/latest/scale-to-width-down/64?cb=20190419071935',
        color: '#754F75',
        damage: {
            easy: '3',
            normal: '5',
            hard: '7.5',
        },
        health: '100',
        displayname: 'Ender Dragón',
        id: '53',
        width: '16',
        height: '8',
        category: 'Mob hostil',
        description: 'El Enderdragón es el jefe principal (y final) del juego. Aparece únicamente de forma natural en el End.'
    },

    15: {
        name: 'enderman',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2d/EndermanFace.png/revision/latest/scale-to-width-down/64?cb=20181024160517',
        color: '#7F0E8E',
        damage: {
            easy: '2',
            normal: '3',
            hard: '5',
        },
        health: '20',
        displayname: 'Enderman',
        id: '38',
        width: '0.6',
        height: '3.25',
        category: 'Mob neutral',
        description: 'El Enderman es un monstruo poco común, de complexión delgada, de color negro y alto. Es originario de la dimensión del End. Puede teletransportarse y agarrar bloques. Consejo: Odia el agua.'
    },

    16: {
        name: 'endermite',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/83/EndermiteFace.png/revision/latest/scale-to-width-down/64?cb=20180313072404',
        color: '#3A294A',
        damage: {
            easy: '1',
            normal: '1',
            hard: '1.5',
        },
        health: '4',
        displayname: 'Endermite',
        id: '55',
        width: '0.4',
        height: '0.3',
        category: 'Mob hostil',
        description: 'El Endermite es un mob hostil muy pequeño. Emite un halo de partículas que recuerdan a las soltadas por el portal del End. Aparece cuando el jugador usa una perla de ender, y es usado para hacer granjas de Endermans.'
    },

    17: {
        name: 'invocador',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b0/EvokerFace.png/revision/latest/scale-to-width-down/64?cb=20190501005258',
        color: '#535959',
        damage: {
            easy: '3',
            normal: '3',
            hard: '3',
        },
        health: '12',
        displayname: 'Invocador',
        id: '104',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'Los invocadores son criaturas hostiles, uno de los cuatro tipos de los llamados "Maldeanos". Es un mago, el cual hace aparecer pequeños mobs alados (llamados "Vex"), además de hacer emerger del suelo una fila de colmillos.'
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
            easy: '3.5',
            normal: '6',
            hard: '11.25',
        },
        health: '5',
        displayname: 'Ghast',
        id: '41',
        width: '4',
        height: '4',
        category: 'Mob hostil',
        description: 'Los ghast son criaturas hostiles, pertenecientes a la dimensión del Nether. Son seres blancos, grandes y con capacidad para volar. Al ver a un jugador o al ser herido, chillará como si una niña pequeña se cayera de un barranco. Tienen la capacidad para lanzar bolas de fuego, y al morir, sueltan una lágrima suya.'
    },

    20: {
        name: 'gigante',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/ZombieFace.png/revision/latest/scale-to-width-down/64?cb=20190501015449',
        color: '#3B5F2A',
        damage: {
            easy: '13',
            normal: '25',
            hard: '37.5',
        },
        health: '50',
        displayname: 'Gigante',
        id: 'Sin ID',
        width: '3.6',
        height: '12',
        category: 'Mob hostil',
        description: 'El gigante es una criatura hostil, con aspecto de zombi y de un tamaño enorme. No aparecen de forma natural (es decir, hay que usar un comando para que aparezca) y además, no poseen Inteligencia Artificial.'
    },

    21: {
        name: 'guardian',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e6/GuardianFace.png/revision/latest/scale-to-width-down/64?cb=20200223055028',
        color: '#507A67',
        damage: {
            easy: '2',
            normal: '3',
            hard: '4.5',
        },
        health: '15',
        displayname: 'Guardián',
        id: '49',
        width: '0.85',
        height: '0.85',
        category: 'Mob hostil',
        description: 'El Guardián aparece en el agua, en los monumentos oceánicos. Ataca mediante un rayo largo, que daña al jugador, afectando también cuando está dentro de un bote. Su homólogo es el Guardián Anciano, un "jefe" de los monumentos acuáticos.'
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
        name: 'saqueador',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/PillagerFace.png/revision/latest/scale-to-width-down/64?cb=20181024165842',
        color: '#959C9C',
        damage: {
            easy: '1 - 2',
            normal: '1.5 - 2',
            hard: '2 - 2.5',
        },
        health: '12',
        displayname: 'Saqueador',
        id: '114',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'El Saqueador es una criatura hostil, la cual aparece en los Asaltos a aldeas, puestos de Saqueadores o en patrullas, de forma aleatoria. Son liderados por un Capitán, el cual suele portar un estandarte. Están equipados con una ballesta.'
    },

    24: {
        name: 'zombi_momificado',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/HuskFace.png/revision/latest/scale-to-width-down/64?cb=20190822094814',
        color: '#797061',
        damage: {
            easy: '1.25',
            normal: '1.5',
            hard: '2.25',
        },
        health: '10',
        displayname: 'Zombi Momificado',
        id: '47',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'El Zombie Momificado es una criatura hostil, la cual se genera en los desiertos. Son una variación del Zombi normal (como los Ahogados), salvo que esta criatura, no es afectada por la luz del sol.'
    },

    25: {
        name: 'golem_de_hierro',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/IronGolemFace.png/revision/latest/scale-to-width-down/64?cb=20190501011517',
        color: '#D6D6D6',
        damage: {
            easy: '2.38 - 5.86',
            normal: '3.75 - 10.75',
            hard: '5.63 - 16.13',
        },
        health: '50',
        displayname: 'Gólem de Hierro',
        id: '20',
        width: '1.4',
        height: '2.7',
        category: 'Mob neutral',
        description: 'El Gólem de Hierro es una entidad neutral, la cual aparece en los poblados, y está encargada de defender a los aldeanos. No le toques las narices, ya que tiene la capacidad de hacerte volar (y no de la mejor manera!).'
    },

    26: {
        name: 'llama',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/LlamaFace.png/revision/latest/scale-to-width-down/64?cb=20190823005427',
        color: '#645B4A',
        damage: {
            easy: '0.5',
            normal: '0.5',
            hard: '0.5',
        },
        health: '15',
        displayname: 'Llama',
        id: '29',
        width: '0.9',
        height: '1.87',
        category: 'Mob neutral',
        description: 'Las Llamas son criaturas neutrales, las cuales pueden ser domadas para su posterior explotación como medio de transporte de objetos. Ten cuidado si le pegas, puede que te escupa en la cara (si es que te lo mereces).'
    },

    27: {
        name: 'cubo_de_magma',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/69/MagmaCubeFace.png/revision/latest/scale-to-width-down/64?cb=20190501234829',
        color: '#FB352C',
        damage: {
            easy: '2',
            normal: '3',
            hard: '4.5',
        },
        health: '8',
        displayname: 'Cubo de Magma',
        id: '42',
        width: '2.08',
        height: '2.08',
        category: 'Mob hostil',
        description: 'El Cubo de magma es una criatura hostil que habita en El Nether. Al morir, se divide en cubos de magma más pequeños. La forma de moverse es similar a la de los slimes normales, pero al saltar su cuerpo se divide en varias secciones y genera partículas de fuego. Su forma de ataque es saltando y golpeando con el cuerpo al jugador.'
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
            easy: '2',
            normal: '3',
            hard: '4.5',
        },
        health: '10',
        displayname: 'Panda',
        id: '113',
        width: '1.3',
        height: '1.25',
        category: 'Mob neutral',
        description: 'Los pandas son mobs pasivos poco comunes que se encuentran en los bosques de bambú o en la jungla.'
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
            easy: '1',
            normal: '1',
            hard: '1.5',
        },
        health: '10',
        displayname: 'Phantom',
        id: '58',
        width: '0.9',
        height: '0.5',
        category: 'Mob hostil',
        description: 'Los Fantasmas son una entidad hostil voladora común que atacará al jugador que no haya dormido en un periodo de 3 días o superior en el juego, puede dar de 0 a 1 de membrana, la cual sirve para hacer pociones de caída lenta o reparar las elytras.'
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
        name: 'oso_polar',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/07/PolarBearFace.png/revision/latest/scale-to-width-down/64?cb=20190823095202',
        color: '#EEEEEE',
        damage: {
            easy: '1.5',
            normal: '2.5',
            hard: '4',
        },
        health: '15',
        displayname: 'Oso polar',
        id: '28',
        width: '1.4',
        height: '1.4',
        category: 'Mob neutral',
        description: 'Los osos polares son criaturas neutrales que viven en biomas fríos.'
    },

    36: {
        name: 'pez_globo',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fe/PufferfishFace.png/revision/latest/scale-to-width-down/64?cb=20180313115655',
        color: '#F2B307',
        damage: {
            easy: '1',
            normal: '1',
            hard: '1.5',
        },
        health: '1.5',
        displayname: 'Pez globo',
        id: '108',
        width: '0.35',
        height: '0.35',
        category: 'Mob pasivo',
        description: 'El pez globo es una de las criaturas que se pueden encontrar en los océanos de Minecraft. Estos animales se defenderán infligiendo daño y afectando con veneno a los jugadores y a ciertas criaturas que se acerquen, pero no son criaturas hostiles.'
    },

    37: {
        name: 'ilusionista',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a8/IllusionerFace.png/revision/latest/scale-to-width-down/64?cb=20201103102047',
        color: '#484A49',
        damage: {
            easy: '2.5',
            normal: '2.5',
            hard: '2.5',
        },
        health: '16',
        displayname: 'Ilusionista',
        id: 'NAN',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'Los ilusionistas son criaturas hostiles. Es uno de los tres tipos de maldeanos, que son a su vez una variación de los aldeanos.'
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
        name: 'devastador',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a9/RavagerFace.png/revision/latest/scale-to-width-down/64?cb=20181025103915',
        color: '#696A65',
        damage: {
            easy: '3.5',
            normal: '6',
            hard: '9',
        },
        health: '50',
        displayname: 'Devastador',
        id: '59',
        width: '1.95',
        height: '2.2',
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
        displayname: 'Salmón',
        id: '109',
        width: '0.7',
        height: '0.4',
        category: 'Mob pasivo',
        description: 'Los salmones son criaturas pasivas comunes que se encuentran en los océanos y en los ríos.'
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
            easy: '2',
            normal: '2',
            hard: '2',
        },
        health: '15',
        displayname: 'Shulker',
        id: '54',
        width: '1',
        height: '1',
        category: 'Mob hostil',
        description: 'El Shulker es una criatura hostil que se encuentra en las ciudades del End.'
    },

    43: {
        name: 'lepisma',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/41/SilverfishFace.png/revision/latest/scale-to-width-down/64?cb=20180313083347',
        color: '#777777',
        damage: {
            easy: '0.5',
            normal: '0.5',
            hard: '0.75',
        },
        health: '4',
        displayname: 'Lepisma',
        id: '39',
        width: '0.4',
        height: '0.3',
        category: 'Mob hostil',
        description: 'El lepisma o pez de plata es una criatura pequeña, es como un insecto que tiene la piel plateada y ojos negros.'
    },

    44: {
        name: 'esqueleto',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/dc/SkeletonFace.png/revision/latest/scale-to-width-down/64?cb=20190822094528',
        color: '#D3D3D3',
        damage: {
            easy: '1',
            normal: '1',
            hard: '1.5',
        },
        health: '10',
        displayname: 'Esqueleto',
        id: '34',
        width: '0.6',
        height: '1.99',
        category: 'Mob hostil',
        description: 'El esqueleto es una criatura hostil común y no muerta que va equipada con un arco y flechas.'
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
        displayname: 'Caballo esquelético',
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
            easy: '1.5',
            normal: '2',
            hard: '3',
        },
        health: '8',
        displayname: 'Slime',
        id: '37',
        width: '2.0808',
        height: '2.0808',
        category: 'Mob hostil',
        description: 'El slime es una criatura hostil que aparece bajo tierra y en el bioma de pantano.'
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
        name: 'araña',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/SpiderFace.png/revision/latest/scale-to-width-down/64?cb=20200327100727',
        color: '#4F453D',
        damage: {
            easy: '1',
            normal: '1',
            hard: '1.5',
        },
        health: '8',
        displayname: 'Araña',
        id: '35',
        width: '1.4',
        height: '0.9',
        category: 'Mob neutral',
        description: 'La araña es la tercera criatura añadida al juego. Sus ojos brillan de color rojo en la oscuridad, dándoles una apariencia tétrica.'
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
        name: 'esqueleto_glacial',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/StrayFace.png/revision/latest/scale-to-width-down/64?cb=20190822095109',
        color: '#475B5B',
        damage: {
            easy: '2.5',
            normal: '2.5',
            hard: '2.5',
        },
        health: '10',
        displayname: 'Esqueleto glacial',
        id: '46',
        width: '0.6',
        height: '1.99',
        category: 'Mob hostil',
        description: 'Los esqueletos glaciares son variantes de los esqueletos que solo aparecen en biomas congelados, helados o nevados.'
    },

    51: {
        name: 'llama_del_vendedor_ambulante',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/LlamaFace.png/revision/latest/scale-to-width-down/64?cb=20190823005427',
        color: '#645B4A',
        damage: {
            easy: '0.5',
            normal: '0.5',
            hard: '0.5',
        },
        health: '15',
        displayname: 'Llama del vendedor ambulante',
        id: '29',
        width: '0.9',
        height: '1.87',
        category: 'Mob neutral',
        description: 'La Llama del vendedor ambulante es una criatura que va acompañada de otras 2 y están atadas por un aldeano ambulante.'
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
            easy: '2.75',
            normal: '4.5',
            hard: '6.75',
        },
        health: '7',
        displayname: 'Vex',
        id: '105',
        width: '0.4',
        height: '0.8',
        category: 'Mob hostil',
        description: 'El vex es una criatura hostil voladora que es invocada por el invocador, otra criatura hostil, durante el combate en pequeños grupos.'
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
            easy: '3.5',
            normal: '6.5',
            hard: '9.5',
        },
        health: '12',
        displayname: 'Vindicador',
        id: '57',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'Los vindicadores son uno de los 4 tipos de maldeanos, que son descendientes de los aldeanos, disponibles en Minecraft.'
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
        description: 'El comerciante ambulante es una criatura similar a los aldeanos. No vive en aldeas, sino que camina libremente por el mundo con un patrón específico. El jugador puede interactuar con él para comprarle objetos a cambio de esmeraldas.'
    },

    58: {
        name: 'bruja',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4e/WitchFace.png/revision/latest/scale-to-width-down/64?cb=20200905232526',
        color: '#7A5F6B',
        damage: {
            easy: '3',
            normal: '3',
            hard: '3',
        },
        health: '13',
        displayname: 'Bruja',
        id: '45',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'La bruja es una criatura agresiva. Aparecen en cualquier lugar con un nivel de iluminación inferior a 7. Llevan un sombrero negro con un cristal en el centro, una verruga en la nariz, un traje violeta y tienen la piel blanca. Extrañamente, Jeb utilizó como base la forma del aldeano para hacer a la bruja. Lanzan pociones venenosas cuando ven al jugador o algún animal pasivo y son completamente agresivas.'
    },

    59: {
        name: 'wither',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/84/WitherFace.png/revision/latest/scale-to-width-down/64?cb=20190804022733',
        color: '#000000',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '150',
        displayname: 'Wither',
        id: '52',
        width: '0.9',
        height: '3.5',
        category: 'Mob hostil',
        description: 'El wither es una criatura jefe no muerta que flota y dispara calaveras explosivas a criaturas y jugadores. Solo puede ser construido por un jugador. Es la única fuente de estrellas del Nether, las cuales sirven para fabricar faros.'
    },

    60: {
        name: 'esqueleto_wither',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/WitherSkeletonFace.png/revision/latest/scale-to-width-down/64?cb=20190804022955',
        color: '#323232',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '10',
        displayname: 'Esqueleto Wither',
        id: '48',
        width: '0.7',
        height: '2.4',
        category: 'Mob hostil',
        description: 'Los esqueletos wither son unas criaturas hostiles que se generan en las fortalezas del Nether. Cuando te ataca te da el efecto de wither, por lo que se recomienda llevar leche o miel.'
    },

    61: {
        name: 'lobo',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/68/WolfFace.png/revision/latest/scale-to-width-down/64?cb=20190501015035',
        color: '#DAD8D9',
        damage: {
            easy: '1.5',
            normal: '2',
            hard: '3',
        },
        health: '4',
        displayname: 'Lobo',
        id: '14',
        width: '0.6',
        height: '0.85',
        category: 'Mob neutral',
        description: 'Los lobos son criaturas neutrales, se cree que no cambiaron mucho desde sus inicios siendo casi un fosil viviente introducidas en la versión 1.1.1.'
    },

    62: {
        name: 'zombie',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b2/ZombieFace.png/revision/latest/scale-to-width-down/64?cb=20190501015449',
        color: '#4A682D',
        damage: {
            easy: '1.25',
            normal: '1.5',
            hard: '2.25',
        },
        health: '10',
        displayname: 'Zombie',
        id: '32',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'El zombi es una criatura hostil común y no muerta.'
    },

    63: {
        name: 'caballo_zombie',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/46/ZombieHorseFace.png/revision/latest/scale-to-width-down/64?cb=20200223042320',
        color: '#4A682D',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0',
        },
        health: '7.5',
        displayname: 'Caballo zombie',
        id: '27',
        width: '1.6',
        height: '1.3965',
        category: 'Mob hostil',
        description: 'El caballo zombi es una variante no utilizada del caballo normal.'
    },

    64: {
        name: 'aldeano_zombie',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/ZombieVillagerFace.png/revision/latest/scale-to-width-down/64?cb=20190501010957',
        color: '#942E27',
        damage: {
            easy: '1.25',
            normal: '1.5',
            hard: '2.25',
        },
        health: '10',
        displayname: 'Aldeano zombie',
        id: '116',
        width: '0.6',
        height: '1.9',
        category: 'Mob hostil',
        description: 'Los Aldeanos zombis son una variante de los zombis que pueden ser curados y convertidos en aldeanos normales usando manzanas doradas y pociones de debilidad. Conservan su profesión u oficio al ser curados, y pueden reducir sus precios de forma aleatoria. Habitan en aldeas destruidas también llamadas aldeas zombis. Tienen la probabilidad de agarrar objetos con las que puedan hacer daño al jugador. También atacaran a los saqueadores, convirtiéndolos así en aldeanos zombis.'
    },

    65: {
        name: 'piglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/be/PiglinFace.png/revision/latest/scale-to-width-down/80?cb=20200215152957',
        color: '#F3B986',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '8',
        displayname: 'Piglin',
        id: '123',
        width: '0.6',
        height: '1.95',
        category: 'Mob neutral',
        description: 'Los piglins son criaturas neutrales encontradas en las ruinas del Nether y bosques carmesíes, y dentro de bastiones en ruinas. Puedes usar lingotes de oro para hacer trueques con ellos por varios objetos.'
    },

    66: {
        name: 'hoglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/10/HoglinFace.png/revision/latest/scale-to-width-down/64?cb=20200214161621',
        color: '#EBEDAA',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '20',
        displayname: 'Hoglin',
        id: '124',
        width: '1.4',
        height: '1.3965',
        category: 'Mob hostil',
        description: 'El Hoglin o Puerquín es una criatura hostil que habita en el Nether en el bioma del Bosque Carmesí.'
    },

    67: {
        name: 'lavagante',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/StriderFace.png/revision/latest/scale-to-width-down/64?cb=20200326071355',
        color: '#EE5C3F',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0',
        },
        health: '10',
        displayname: 'Lavagante',
        id: '125',
        width: '0.9',
        height: '1.7',
        category: 'Mob pasivo',
        description: 'El lavagante es una criatura pasiva que genera en el Nether. Puede caminar sobre la lava y ser montado por el jugador. Se necesita una caña con hongo distorsionado para poder dirigirlo, algo parecido a los cerdos.'
    },

    68: {
        name: 'zoglin',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/ZoglinFace.png/revision/latest/scale-to-width-down/64?cb=20200402165150',
        color: '#6A8D42',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '20',
        displayname: 'Zoglin',
        id: '126',
        width: '1.3965',
        height: '1.4',
        category: 'Mob hostil',
        description: 'Los zoglins o zuerquines son criaturas hostiles del grupo de no-muertos, los cuales son la versión zombificada de los hoglins.'
    },

    69: {
        name: 'ajolote',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/AxolotlFace.png/revision/latest/scale-to-width-down/64?cb=20201216195034',
        color: '#EE3FA1',
        damage: {
            easy: '1',
            normal: '1',
            hard: '1',
        },
        health: '7',
        displayname: 'Ajolote',
        id: '130',
        width: '1.3',
        height: '0.6',
        category: 'Mob pasivo',
        description: 'El ajolote es una criatura pasiva poco común encontrada en la Superficie, únicamente en el bioma de cuevas frondosas. Puede ser de cinco colores diferentes, se puede transportar en cubos con agua y ataca a criaturas marinas como peces, calamares, ahogados y guardianes.'
    },

    70: {
        name: 'calamar_luminoso',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/GlowSquidFace.png/revision/latest/scale-to-width-down/64?cb=20200804202459',
        color: '#3EEDB3',
        damage: {
            easy: '0',
            normal: '0',
            hard: '0',
        },
        health: '5',
        displayname: 'Calamar luminoso',
        id: '129',
        width: '0.8',
        height: '0.8',
        category: 'Mob pasivo',
        description: 'El calamar luminoso o calamar brillante es una criatura pasiva acuática que se encuentra en áreas oscuras bajo el agua, generalmente en las profundidades del océano, grietas y acuíferos; Los calamares brillantes son una variante del calamar, con una textura luminiscente aqua.'
    },

    71: {
        name: 'cabra',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/GoatFace.png/revision/latest/scale-to-width-down/64?cb=20210118052703',
        color: '##EEEEEE',
        damage: {
            easy: '0.5',
            normal: '1',
            hard: '1.5',
        },
        health: '5',
        displayname: 'Cabra',
        id: '128',
        width: '1.3',
        height: '0.9',
        category: 'Mob neutral',
        description: 'Las cabras son criaturas neutrales que se encuentran en los biomas de montañas. Las cabras realizan saltos de altura y son una fuente de leche y cuernos de cabra.‌'
    },

    72: {
        name: 'piglin_zombificado',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9b/ZombifiedPiglinFace.png/revision/latest/scale-to-width-down/80?cb=20200217232809',
        color: '#E7918C',
        damage: {
            easy: '2.5',
            normal: '4',
            hard: '6',
        },
        health: '10',
        displayname: 'Piglin zombificado',
        id: '36',
        width: '0.6',
        height: '1.95',
        category: 'Mob neutral',
        description: 'Los piglins zombificados son variantes no muertas de piglins y piglins brutos que habitan el Nether. Un piglin zombificado se vuelve hostil cuando él u otro piglin zombificado cercano es atacado.'
    },

    73: {
        name: 'piglin_feroz',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/74/PiglinBruteFace.png/revision/latest/scale-to-width-down/80?cb=20200626030016',
        color: '#CECD82',
        damage: {
            easy: '3.5',
            normal: '6.5',
            hard: '9.5',
        },
        health: '25',
        displayname: 'Piglin Feroz',
        id: '127',
        width: '0.6',
        height: '1.95',
        category: 'Mob hostil',
        description: 'El Piglin bruto, Piglin feroz o Cerdín bruto es una criatura variante de los Piglins, completamente hostil hacia el jugador.'
    }

    // 74: {
    //     name: 'warden',
    //     image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5c/WardenFace.png/revision/latest/scale-to-width-down/108?cb=20210508080631',
    //     color: '#1CD1D7',
    //     damage: {
    //         easy: '8',
    //         normal: '15',
    //         hard: '22.5',
    //     },
    //     health: '250',
    //     displayname: 'Warden',
    //     id: '131',
    //     width: '0.8',
    //     height: '2.9',
    //     category: 'Mob hostil',
    //     description: 'El warden es una criatura hostil que es invocada por chilladores de sculk. Son criaturas completamente ciegas, y por ende utilizan las vibraciones y su sentido del olfato para identificar y ubicar jugadores y otras criaturas. Son extremadamente poderosos, y tienen la mayor cantidad de daño y salud de cualquier criatura del juego, incluso más que los jefes, y se puede distraer con proyectiles.'
    // },
};

module.exports = mobsEs;