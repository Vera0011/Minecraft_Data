const structuresEs = {
	// Overworld

	1: {
		dimension: 'Superficie',
		biome: 'En todos los biomas',
		name: 'mina_abandonada',
		displayname: 'Mina Abandonada',
		probability: 'Fácil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/52/Mineshaft.png/revision/latest?cb=20210710165648',
		color: '#B8955A',
		description: 'Estructuras que se generan en el subsuelo y contienen vagonetas con cofres las cuales contienen diversos tesoros; desde libros encantados hasta manzanas encantadas.'
	},

	2: {
		dimension: 'Superficie',
		biome: ['Llanura', 'Desierto', 'Sabana', 'Taiga', 'Taiga nevada'],
		name: 'puesto_de_vigilancia',
		displayname: 'Puesto de Vigilancia',
		probability: 'Difcil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8c/Pillager_outpost_watchtower.png/revision/latest/scale-to-width-down/250?cb=20200221174633',
		color: '#765400',
		description: 'Torre plagada de saqueadores. Tiene un cofre en el piso superior con botín diverso. Suelen aparecer saqueadores con estandartes lo que hace más fácil obtener el efecto de Mal Presagio.'
	},

	3: {
		dimension: 'Superficie',
		biome: ['Llanuras nevadas', 'Taigas nevadas.'],
		name: 'iglu',
		displayname: 'Iglú',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/3d/Igloo.png/revision/latest/scale-to-width-down/200?cb=20210502083314',
		color: '#FFFFFF',
		description: 'Estructura circular donde se encuentra un interior alfombrado con cama, horno y mesa de trabajo. Puede generarse con una bajada secreta bajo las alfombras que conduce a una cámara hecha de bloques de piedra que alberga un aldeano y un aldeano zombi, ambos clérigos. También hay un caldero, un soporte de pociones de debilidad y un cofre que entre otras objetos contiene una manzana de oro. Allí puedes probar a curar un aldeano.'
	},

	4: {
		dimension: 'Superficie',
		biome: ['En todos los océanos', 'En todas las playas.'],
		name: 'naufragio',
		displayname: 'Naufragio',
		probability: 'Fácil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cc/Shipwreck_Oak_%28With_Mast%29.png/revision/latest/scale-to-width-down/250?cb=20210418191213',
		color: '#B8955A',
		description: 'Esta estructura puede generarse de varias formas; puede generarse parte del naufragio o generarse por completo. Tiene 2 o 3 cofres con botín diverso destacando los mapas de tesoros enterrados y bambú.'
	},

	5: {
		dimension: 'Superficie',
		biome: ['En todos los océanos', 'En todas las playas.'],
		name: 'ruinas',
		displayname: 'Ruinas',
		probability: 'Fácil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/a2/Ruina_oceanica_fria.png/revision/latest/scale-to-width-down/275?cb=20180901132054',
		color: '#9E9E9E',
		description: 'Las ruinas oceánicas son estructuras compuestas principalmente por ladrillos de piedra, ladrillos de piedra musgosa o arenisca. Vienen en muchos tamaños diferentes que varían desde pueblos grandes hasta chozas en ruinas únicas. Vienen en variantes frías y cálidas. Contienen cofres con botín diverso, destacando cañas de pescar encantadas y mapas del tesoro enterrado.'
	},

	6: {
		dimension: 'Superficie',
		biome: ['Llanura', 'Sabana', 'Taiga', 'Taiga nevada', 'Desierto.'],
		name: 'aldea',
		displayname: 'Aldea',
		probability: 'Fácil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/3c/Casa_de_desierto.png/revision/latest/scale-to-width-down/250?cb=20200914220132',
		color: '#B8955A',
		description: 'Grupo de estructuras que se generan sobre la superficie del Overworld, donde habitan aldeanos. Existe una variante de esta estructura en la cual se generan aldeanos zombi.'
	},

	7: {
		dimension: 'Superficie',
		biome: 'En todos los biomas',
		name: 'stronghold',
		displayname: 'Stronghold',
		probability: 'Muy dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/ae/StrongholdPortalRoom.png/revision/latest?cb=20180801162611',
		color: '#9E9E9E',
		description: 'Gran estructura en la que se ubica el portal a la dimensión del End. En esta estructura se pueden encontrar cofres en los pasillos y en las bibliotecas. Pueden generarse mal, dando lugar a variantes de fortalezas.'
	},

	8: {
		dimension: 'Superficie',
		biome: 'En todos los biomas',
		name: 'mazmorra',
		displayname: 'Mazmorra',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/a/ab/Dungeon.png/revision/latest/scale-to-width-down/250?cb=20210523154757',
		color: '#9E9E9E',
		description: 'Esta estructura se genera en el subsuelo aunque también se puede generarse en la superficie. Contiene un generador de monstruos y de 0 a 4 cofres con diversos tesoros.'
	},

	9: {
		dimension: 'Superficie',
		biome: ['Desierto.'],
		name: 'pozo_del_desierto',
		displayname: 'Pozo del Desierto',
		probability: 'Extremadamente dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraftpe/images/7/7d/Pozo_desierto.png/revision/latest?cb=20140612203850&path-prefix=es',
		color: '#FFEEA8',
		description: 'Pequeñas estructuras que parecen ser pozos abandonados hechos por el hombre. No hay nada interasante sobre esta estructura, excepto que se generan en 1 de cada 1000 fragmentos de un desierto.'
	},

	10: {
		dimension: 'Superficie',
		biome: ['Desierto'],
		name: 'templo_del_desierto',
		displayname: 'Templo del Desierto',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/6/65/Templo_de_desierto.png/revision/latest/scale-to-width-down/250?cb=20140912215208',
		color: '#FFEEA8',
		description: 'Grandes estructuras con forma de pirámide en las que se sitúan 2 torreones en un lado centrando la entrada. Dentro hay un patrón en el suelo que esconde debajo un tesoro protegido por una trampa de dinamita.'
	},

	11: {
		dimension: 'Superficie',
		biome: ['Jungla'],
		name: 'templo_de_la_jungla',
		displayname: 'Templo de la Jungla',
		probability: 'Muy dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/e/ed/Templo_de_jungla.png/revision/latest?cb=20140716235904',
		color: '#19D100',
		description: 'Estructura con forma de cápsula que se oculta en las frondosas junglas. Tienen 3 pisos, el inferior tiene un puzle de 3 palancas que abrirán una puerta a un tesoro. Los demás tienen ganchos de cuerda conectados a un dispensador cargados de flechas que custodian un cofre. Tienen los mismos tesoros que un templo del desierto.'
	},

	12: {
		dimension: 'Superficie',
		biome: ['Océano profundo'],
		name: 'monumento',
		displayname: 'Monumento',
		probability: 'Muy dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d0/Monumento_oce%C3%A1nico.png/revision/latest/scale-to-width-down/200?cb=20140923164006',
		color: '#59AFA3',
		description: 'Estructura colosal sumergida en los océanos. Está construida con prismarina, la cual sueltan los guardianes que protegen el monumento. En ella hay pasillos y grandes salas en las que se encuentran cámaras que contienen esponjas u 8 bloques de oro. En la parte superior se encuentran 3 guardianes ancianos que tienen el poder de darnos el efecto de Fatiga Minera, el cual dificulta la exploración o incluso puede dejarnos atrapados dentro de la estructura.'
	},

	13: {
		dimension: 'Superficie',
		biome: ['Pantano'],
		name: 'casa_de_brujas',
		displayname: 'Casa de Brujas',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/1/1c/Cabana_de_brujas.png/revision/latest?cb=20180823213025',
		color: '#765400',
		description: 'Las chozas de brujas consisten en una pequeña choza cuadrada hecha de madera de tablones de madera de abeto, con pilares de tronco de roble que se extienden hasta el suelo. Dentro se encuentra un caldero, una maceta con una seta roja y una mesa de trabajo. El área de 7x9x7 dentro y fuera de la choza de brujas solo se pueden generar brujas. '
	},

	// Nether
	14: {
		dimension: 'Nether',
		biome: 'En todos los biomas',
		name: 'fortaleza_del_inframundo',
		displayname: 'Fortaleza del Inframundo',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cb/Nether_Fortress.png/revision/latest/scale-to-width-down/250?cb=20200415083830',
		color: '#B23D00',
		description: "Grandes estructuras que comprenden largos puentes con columnas que alcanzan la lava. Hay variantes de fortalezas en las que no se generan la preciada verruga del Nether o los generadores de 'blazes'. "
	},
	15: {
		dimension: 'Nether',
		biome: ['Ruinas del Nether', 'Bosque carmesí', 'Bosque deformado', 'Valle de arena de almas.'],
		name: 'bastion_en_ruinas',
		displayname: 'Bastion en Ruinas',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Bastion_Remnant_1.png/revision/latest/scale-to-width-down/250?cb=20200418125947',
		color: '#000000',
		description: "Grandes estructuras formadas por diferentes tipos de roca negra y protegida por 'piglins' acompañados de 'piglins' brutos. Hay 3 variantes, la más grande contiene generadores de cubos de magma, bloques de oro y cofres con tesoros como la magnetita o los lingotes de 'netherita'. Es el único lugar donde puedes hallar el fabuloso disco de 'Pigstep'. "
	},

	// END
	16: {
		dimension: 'End',
		biome: ['El Fin'],
		name: 'ciudad_del_end',
		displayname: 'Ciudad del End',
		probability: 'Muy Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d8/EndCityEntrance.png/revision/latest/scale-to-width-down/250?cb=20160418093501',
		color: '#B46FB4',
		description: "Torre individual o grupo de torres que se generan aleatoriamente en las islas externas del End. Están plagadas de 'shulkers' y cofres con valiosos tesoros. Cada torre da a un tipo de sala. Las torres están interconectadas por puentes. "
	},

	17: {
		dimension: 'End',
		biome: ['El Fin'],
		name: 'barco_del_end',
		displayname: 'Barco del End',
		probability: 'Muy Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/3/32/End_Ship.png/revision/latest/scale-to-width-down/250?cb=20180527150946',
		color: '#B46FB4',
		description: "Esta estructura puede generarse hasta 2 veces por ciudad del End. En ella se encuentran los élitros, un soporte de pociones con Vida Instantánea y por último la cabeza del dragón. Están protegidos por 'shulkers'. "
	},

	// VARIOUS DIMENSIONS

	18: {
		dimension: ['Superficie', 'Nether'],
		biome: 'En todos los biomas',
		name: 'portal_en_ruinas',
		displayname: 'Portal en Ruinas',
		probability: 'Dificil de encontrar',
		image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/70/Overworld_Giant_Ruined_Portal_1.png/revision/latest/scale-to-width-down/250?cb=20200416092241',
		color: '#B23D00',
		description: 'El portal en ruinas es un portal del Nether dañado y generado naturalmente, que aparecerá tanto en el Nether como en la superficie. Tiene decoraciones en su estructura, además de que siempre habrá un cofre de botín en sus cercanías. Puede generarse con un bloque de oro. '
	},
};
module.exports = structuresEs;
