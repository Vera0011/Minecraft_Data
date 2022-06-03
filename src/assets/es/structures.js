const structuresEs = {

    //Estructuras subterráneas

    1: {
        dimension: 'Superficie',
        biome: 'Oscuridad profunda',
        name: 'ciudad_antigua',
        displayname: 'Ciudad antígua',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Ancient_City.png/revision/latest?cb=20220401110153',
        color: '#006652',
        description: 'Construida con largos pasillos hechos de pizarra profunda y lana, tiene una construcción central con una especie de portal hecho de pizarra profunda reforzada, las ruinas pequeñas pueden contener 1 o 2 cofres con botín dentro.'
    },

    2: {
        dimension: 'Superficie',
        biome: 'Todos',
        name: 'minas_abandonadas',
        displayname: 'Minas abandonadas',
        probability: 'Común',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d9/21w07a_Mineshaft.png/revision/latest?cb=20210218143545',
        color: '#efad4d',
        description: 'Un laberinto de pasillos soportado por pilares de madera, con sistemas de raíles incompletos, los cuales pueden contener vagonetas con cofres, también pueden aparecer generadores de arañas de cuevas rodeados por telarañas. Son más frecuentes en el bioma de mesa.'
    },

    3: {
        dimension: 'Superficie',
        biome: 'Todos',
        name: 'fortaleza',
        displayname: 'Fortaleza',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/78/EndPortalRoom.png/revision/latest?cb=20190720052535',
        color: '#006333',
        description: 'Un laberinto hecho de ladrillos de piedra, la cual incluye varias recámaras, entre ellas un portal del end desactivado o librerías. Pueden generarse hasta 128 en un mundo.'
    },

    4: {
        dimension: 'Superficie',
        biome: ['Playa', 'Playa nevada', 'Playa de piedra'],
        name: 'tesoro_enterrado',
        displayname: 'Tesoro enterrado',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Buriedtreasure.jpg/revision/latest?cb=20201206003138',
        color: '#ccc000',
        description: 'Un tesoro que contiene botón valioso, son fáciles de encontrar usando un mapa del tesoro, encontrados en naufragios y ocasionalmente en ruinas océanicas.'
    },

    //Estructuras superficie

    5: {
        dimension: 'Superficie',
        biome: 'Desierto',
        name: 'piramide',
        displayname: 'Pirámide del desierto',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d2/Desert_pyramid_JE3_BE3.png/revision/latest?cb=20210711034046',
        color: '#ddd4a9',
        description: 'Es una estructura hecha de sandstone generada en desiertos, donde se oculta una fosa que contiene materiales, siendo esta protegida por una trampa de dinamita.'
    },

    6: {
        dimension: 'Superficie',
        biome: ['Llanuras nevadas', 'Taiga nevada'],
        name: 'iglu',
        displayname: 'Iglú',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Igloo_top.png/revision/latest?cb=20190828074834',
        color: '#f4f8f9',
        description: 'Una estructura principalmente conformada de bloques de nieve, en la mitad de estos iglús, se puede encontrar una trampilla debajo de las alfombras, encontrando unas escaleras y un sótano construido por ladrillos de piedra donde se puede encontrar un destilador con una poción de debilidad y un cofre, a parte de un aldeano normal y uno zombificado el cual tiene como objetivo enseñar a convertir y revertir la zombificación en aldeanos.'
    },

    7: {
        dimension: 'Superficie',
        biome: ['Jungla', 'Jungla de bambú'],
        name: 'templo_jungla',
        displayname: 'Templo de la jungla',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8b/Jungle_pyramid_JE2_BE2.png/revision/latest?cb=20200202121947',
        color: '#414633',
        description: 'Construido principalmente de piedra labrada, piedra musgosa y lianas, teniendo esta 3 pisos, hay 2 trampas en el piso inferior y un puzzle de palancas para obtener objetos valiosos.'
    },

    8: {
        dimension: 'Superficie',
        biome: ['Llanura', 'Desierto', 'Sabana', 'Taiga', 'Taiga nevada'],
        name: 'puesto_de_vigilancia',
        displayname: 'Puesto de Vigilancia',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8c/Pillager_outpost_watchtower.png/revision/latest/scale-to-width-down/250?cb=20200221174633',
        color: '#765400',
        description: 'Torre plagada de saqueadores. Tiene un cofre en el piso superior con botín diverso. Suelen aparecer saqueadores con estandartes lo que hace más fácil obtener el efecto de Mal Presagio.'
    },

    9: {
        dimension: 'Superficie',
        biome: 'Pantano',
        name: 'casa_de_brujas',
        displayname: 'Casa de Brujas',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/1/1c/Cabana_de_brujas.png/revision/latest?cb=20180823213025',
        color: '#765400',
        description: 'Las chozas de brujas consisten en una pequeña choza cuadrada hecha de madera de tablones de madera de abeto, con pilares de tronco de roble que se extienden hasta el suelo. Dentro se encuentra un caldero, una maceta con una seta roja y una mesa de trabajo. El área de 7x9x7 dentro y fuera de la choza de brujas solo se pueden generar brujas. '
    },

    10: {
        dimension: 'Superficie',
        biome: ['Llanura', 'Sabana', 'Taiga', 'Taiga nevada', 'Desierto.'],
        name: 'aldea',
        displayname: 'Aldea',
        probability: 'Común',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/3c/Casa_de_desierto.png/revision/latest/scale-to-width-down/250?cb=20200914220132',
        color: '#B8955A',
        description: 'Grupo de estructuras que se generan sobre la superficie del Superficie, donde habitan aldeanos. Existe una variante de esta estructura en la cual se generan aldeanos zombi.'
    },

    11: {
        dimension: 'Superficie',
        biome: 'Bosque oscuro',
        name: 'mansion',
        displayname: 'Mansión',
        probability: 'Extremadamente rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5d/Woodland_Mansion.png/revision/latest?cb=20200226143945',
        color: '#432b13',
        description: 'Una mansión gigante muy lejos del punto de spawn del mundo, siendo esta invadida por saqueadores, donde se pueden encontrar vindicadores, los cuales dejan soltar el tótem de inmortalidad.'
    },

    //Estructuras bajo agua

    12: {
        dimension: 'Superficie',
        biome: ['En todos los océanos', 'En todas las playas.'],
        name: 'ruinas',
        displayname: 'Ruinas',
        probability: 'Común',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/a2/Ruina_oceanica_fria.png/revision/latest/scale-to-width-down/275?cb=20180901132054',
        color: '#9E9E9E',
        description: 'Las ruinas oceánicas son estructuras compuestas principalmente por ladrillos de piedra, ladrillos de piedra musgosa o arenisca. Vienen en muchos tamaños diferentes que varían desde pueblos grandes hasta chozas en ruinas únicas. Vienen en variantes frías y cálidas. Contienen cofres con botín diverso, destacando cañas de pescar encantadas y mapas del tesoro enterrado.'
    },

    13: {
        dimension: 'Superficie',
        biome: ['En todos los océanos', 'En todas las playas.'],
        name: 'naufragio',
        displayname: 'Naufragio',
        probability: 'Común',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cc/Shipwreck_Oak_%28With_Mast%29.png/revision/latest/scale-to-width-down/250?cb=20210418191213',
        color: '#B8955A',
        description: 'Esta estructura puede generarse de varias formas; puede generarse parte del naufragio o generarse por completo. Tiene 2 o 3 cofres con botín diverso destacando los mapas de tesoros enterrados y bambú.'
    },

    14: {
        dimension: 'Superficie',
        biome: 'Océano profundo',
        name: 'monumento',
        displayname: 'Monumento',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d0/Monumento_oce%C3%A1nico.png/revision/latest/scale-to-width-down/200?cb=20140923164006',
        color: '#59AFA3',
        description: 'Estructura colosal sumergida en los océanos. Está construida con prismarina, la cual sueltan los guardianes que protegen el monumento. En ella hay pasillos y grandes salas en las que se encuentran cámaras que contienen esponjas u 8 bloques de oro. En la parte superior se encuentran 3 guardianes ancianos que tienen el poder de darnos el efecto de Fatiga Minera, el cual dificulta la exploración o incluso puede dejarnos atrapados dentro de la estructura.'
    },

    //Estructuras nether

    15: {
        dimension: 'Nether',
        biome: 'En todos los biomas',
        name: 'fortaleza_del_inframundo',
        displayname: 'Fortaleza del Inframundo',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cb/Nether_Fortress.png/revision/latest/scale-to-width-down/250?cb=20200415083830',
        color: '#B23D00',
        description: "Grandes estructuras que comprenden largos puentes con columnas que alcanzan la lava. Hay variantes de fortalezas en las que no se generan la preciada verruga del Nether o los generadores de 'blazes'. "
    },

    16: {
        dimension: 'Nether',
        biome: ['Ruinas del Nether', 'Bosque carmesí', 'Bosque deformado', 'Valle de arena de almas.'],
        name: 'bastion_en_ruinas',
        displayname: 'Bastion en Ruinas',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Bastion_Remnant_1.png/revision/latest/scale-to-width-down/250?cb=20200418125947',
        color: '#000000',
        description: "Grandes estructuras formadas por diferentes tipos de roca negra y protegida por 'piglins' acompañados de 'piglins' brutos. Hay 3 variantes, la más grande contiene generadores de cubos de magma, bloques de oro y cofres con tesoros como la magnetita o los lingotes de 'netherita'. Es el único lugar donde puedes hallar el fabuloso disco de 'Pigstep'. "
    },

    17: {
        dimension: 'Nether',
        biome: 'Valle de arena de almas.',
        name: 'fosil_nether',
        displayname: 'Fosil del nether',
        probability: 'Común',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/df/Nether_fossil_1.png/revision/latest/scale-to-width-down/171?cb=20210422003557',
        color: '#b5b095',
        description: 'Una variante del fosil más incompleta y compuesta en su mayoría por bloques de hueso.'
    },

    18: {
        dimension: ['Superficie', 'Nether'],
        biome: 'En todos los biomas',
        name: 'portal_en_ruinas',
        displayname: 'Portal en Ruinas',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/70/Superficie_Giant_Ruined_Portal_1.png/revision/latest/scale-to-width-down/250?cb=20200416092241',
        color: '#B23D00',
        description: 'El portal en ruinas es un portal del Nether dañado y generado naturalmente, que aparecerá tanto en el Nether como en la superficie. Tiene decoraciones en su estructura, además de que siempre habrá un cofre de botín en sus cercanías. Puede generarse con un bloque de oro. '
    },

    //Estructuras end

    19: {
        dimension: 'End',
        biome: 'El Fin',
        name: 'ciudad_del_end',
        displayname: 'Ciudad del End',
        probability: 'Extremadamente rara',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d8/EndCityEntrance.png/revision/latest/scale-to-width-down/250?cb=20160418093501',
        color: '#B46FB4',
        description: "Torre individual o grupo de torres que se generan aleatoriamente en las islas externas del End. Están plagadas de 'shulkers' y cofres con valiosos tesoros. Cada torre da a un tipo de sala. Las torres están interconectadas por puentes. "
    },

    20: {
        dimension: 'End',
        biome: 'El Fin',
        name: 'barco_del_end',
        displayname: 'Barco del End',
        probability: 'Extremadamente rara',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/32/End_Ship.png/revision/latest/scale-to-width-down/250?cb=20180527150946',
        color: '#B46FB4',
        description: "Esta estructura puede generarse hasta 2 veces por ciudad del End. En ella se encuentran los élitros, un soporte de pociones con Vida Instantánea y por último la cabeza del dragón. Están protegidos por 'shulkers'. "
    },

    //Estructuras generadas como terreno

    21: {
        dimension: 'Superficie',
        biome: 'En todos los biomas',
        name: 'mazmorra',
        displayname: 'Mazmorra',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/ab/Dungeon.png/revision/latest/scale-to-width-down/250?cb=20210523154757',
        color: '#9E9E9E',
        description: 'Esta estructura se genera en el subsuelo aunque también se puede generarse en la superficie. Contiene un generador de monstruos y de 0 a 4 cofres con diversos tesoros.'
    },

    22: {
        dimension: 'Superficie',
        biome: 'Desierto.',
        name: 'pozo_del_desierto',
        displayname: 'Pozo del Desierto',
        probability: 'Extremadamente rara',
        image: 'https://static.wikia.nocookie.net/minecraftpe/images/7/7d/Pozo_desierto.png/revision/latest?cb=20140612203850&path-prefix=es',
        color: '#FFEEA8',
        description: 'Pequeñas estructuras que parecen ser pozos abandonados hechos por el hombre. No hay nada interasante sobre esta estructura, excepto que se generan en 1 de cada 1000 fragmentos de un desierto.'
    },

    23: {
        dimension: 'Superficie',
        biome: 'Taiga antígua',
        name: 'roca_bosque',
        displayname: 'Roca de bosque',
        probability: 'Común',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/97/Forest_rock.png/revision/latest/scale-to-width-down/250?cb=20190818060615',
        color: '#707c59',
        description: 'Es una roca gigante compuesta por piedra musgosa.'
    },

    24: {
        dimension: 'Superficie',
        biome: 'Todos los biomas',
        name: 'geoda',
        displayname: 'Geoda',
        probability: 'Rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8f/Amethyst_Geode_JE4_BE1.png/revision/latest/scale-to-width-down/250?cb=20210224232053',
        color: '#644891',
        description: 'Una estructura esférica compuesta por basalto liso, calcita, bloques de amatista y bloques que regeneran amatistas pequeñas.'
    },

    25: {
        dimension: 'Superficie',
        biome: ['Desierto', 'Pantano'],
        name: 'fosil',
        displayname: 'Fosil',
        probability: 'Extremadamente rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Fossil_Skull_1.png/revision/latest/scale-to-width-down/155?cb=20200523223044',
        color: '#b5b095',
        description: 'Una forma esquelética conformada principalmente por bloque de huesos, mineral de carbón y mineral de diamante.'
    },

    26: {
        dimension: 'Superficie',
        biome: 'Océano congelado',
        name: 'iceberg',
        displayname: 'Iceberg',
        probability: 'Muy rara',
        image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/Iceberg.png/revision/latest/scale-to-width-down/250?cb=20190817202802',
        color: '#5b81bf',
        description: 'Una estructura puntiaguda conformada principalmente por bloques de hielo comprimido, hielo azul y nieve en la parte superior.'
    }

}
module.exports = structuresEs;