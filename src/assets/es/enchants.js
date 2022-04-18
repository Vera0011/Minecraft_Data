const img = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enchanted_Book.gif/revision/latest/scale-to-width-down/160?cb=20200428014446';
const enchantsEs = {
	1: {
		name: 'afinidad_acuatica',
		displayname: 'Afinidad Acuatica',
		image: img,
		maxlevel: '1',
		description: 'Aumenta la velocidad de minado bajo el agua',
		permiteditems: 'Casco',
		incompatiblewith: 'Sin incompatibilidad',
	},

	2: {
		name: 'maldicion_de_los_artropodos',
		displayname: 'Maldicion de los Artropodos',
		image: img,
		maxlevel: '5',
		description: 'Aumenta el daño y aplica Lentitud 4 a los mobs artropodos',
		permiteditems: 'Espada',
		incompatiblewith: ['Golpeo', 'Filo'],
	},

	3: {
		name: 'proteccion_contra_explosiones',
		displayname: 'Proteccion contra explosiones',
		image: img,
		maxlevel: '4',
		description: 'Reduce el daño por explosion y empuje',
		permiteditems: 'Armadura completa',
		incompatiblewith: ['Proteccion contra el fuego', 'Proteccion contra proyectiles', 'Proteccion'],
	},

	4: {
		name: 'conductividad',
		displayname: 'Conductividad',
		image: img,
		maxlevel: '1',
		description: 'Crea un rayo que alcanza a la entidad atacada, funciona solamente durante tormentas y si el objetivo no está obstruido por bloques',
		permiteditems: 'Tridente',
		incompatiblewith: 'Impulso acuatico',
	},

	5: {
		name: 'maldicion_de_ligamiento',
		displayname: 'Maldicion de Ligamiento',
		image: img,
		maxlevel: '1',
		description: 'Los items afectados no pueden ser desequipados, a menos de estar en Creativo, al morir o al romperse el item',
		permiteditems: ['Armadura completa', 'Calabaza', 'Cabeza', 'Elitros'],
		incompatiblewith: 'Sin incompatibilidad',
	},

	6: {
		name: 'maldicion_de_desaparicion',
		displayname: 'Maldicion de Desaparicion',
		image: img,
		maxlevel: '1',
		description: 'Los items afectados desaparecen al morir',
		permiteditems: ['Armadura completa', 'Espada', 'Pico', 'Pala', 'Hacha', 'Azada', 'Caña de pescar', 'Arco', 'Tijeras', 'Mechero', 'Brujula', 'Caña con zanahoria', 'Escudo', 'Elitros', 'Calabaza', 'Cabeza', 'Tridente', 'Ballesta', 'Caña con hongo deformado'],
		incompatiblewith: 'Sin incompatibilidad',
	},

	7: {
		name: 'agilidad_acuatica',
		displayname: 'Agilidad Acuatica',
		image: img,
		maxlevel: '3',
		description: 'Aumenta la velocidad de desplazamiento bajo el agua',
		permiteditems: 'Botas',
		incompatiblewith: 'Paso Helado',
	},

	8: {
		name: 'eficiencia',
		displayname: 'Eficiencia',
		image: img,
		maxlevel: '5',
		description: 'Aumenta la velocidad del item encantado',
		permiteditems: ['Pico', 'Pala', 'Hacha', 'Azada', 'Tijeras'],
		incompatiblewith: 'Sin incompatibilidad',
	},

	9: {
		name: 'caida_de_pluma',
		displayname: 'Caida de Pluma',
		image: img,
		maxlevel: '4',
		description: 'Reduce el daño por caída',
		permiteditems: 'Botas',
		incompatiblewith: 'Sin incompatibilidad',
	},

	10: {
		name: 'aspecto_igneo',
		displayname: 'Aspecto Igneo',
		image: img,
		maxlevel: '2',
		description: 'Incendia el objetivo',
		permiteditems: 'Espada',
		incompatiblewith: 'Sin incompatibilidad',
	},

	11: {
		name: 'proteccion_contra_el_fuego',
		displayname: 'Proteccion contra el fuego',
		image: img,
		maxlevel: '4',
		description: 'Reduce el daño por quemadura y el tiempo de quemadura',
		permiteditems: 'Armadura completa',
		incompatiblewith: ['Proteccion contra explosiones', 'Proteccion contra proyectiles', 'Proteccion'],
	},

	12: {
		name: 'fuego',
		displayname: 'Fuego',
		image: img,
		maxlevel: '1',
		description: 'Las flechas queman al objetivo y encienden dinamita',
		permiteditems: 'Arco',
		incompatiblewith: 'Sin incompatibilidad',
	},

	13: {
		name: 'fortuna',
		displayname: 'Fortuna',
		image: img,
		maxlevel: '3',
		description: 'Aumenta ciertos dropeos de bloques',
		permiteditems: ['Pico', 'Pala', 'Hacha', 'Azada'],
		incompatiblewith: 'Toque de Seda',
	},

	14: {
		name: 'paso_helado',
		displayname: 'Paso Helado',
		image: img,
		maxlevel: '2',
		description: 'Convierte el agua bajo el jugador en hielo compacto y evita el daño causado por los bloques de magma',
		permiteditems: 'Botas',
		incompatiblewith: 'Agilidad Acuatica',
	},

	15: {
		name: 'empalamiento',
		displayname: 'Empalamiento',
		image: img,
		maxlevel: '5',
		description: 'El tridente causa mas daño a criaturas que aparezcan naturalmente en el oceano',
		permiteditems: 'Tridente',
		incompatiblewith: 'Sin incompatibilidad',
	},

	16: {
		name: 'infinidad',
		displayname: 'Infinidad',
		image: img,
		maxlevel: '1',
		description: 'Al disparar con el arco, no se consumen flechas normales',
		permiteditems: 'Arco',
		incompatiblewith: 'Reparacion',
	},

	17: {
		name: 'empuje',
		displayname: 'Empuje',
		image: img,
		maxlevel: '2',
		description: 'Aumenta el empuje de la espada',
		permiteditems: 'Espada',
		incompatiblewith: 'Sin incompatibilidad',
	},

	18: {
		name: 'botin',
		displayname: 'Botin',
		image: img,
		maxlevel: '3',
		description: 'Aumenta las recompensas al matar a una criatura',
		permiteditems: 'Espada',
		incompatiblewith: 'Sin incompatibilidad',
	},

	19: {
		name: 'lealtad',
		displayname: 'Lealtad',
		image: img,
		maxlevel: '3',
		description: 'El tridente vuelve al jugador despues de haberlo lanzado',
		permiteditems: 'Tridente',
		incompatiblewith: 'Impulso acuatico',
	},

	20: {
		name: 'suerte_marina',
		displayname: 'Suerte Marina',
		image: img,
		maxlevel: '3',
		description: 'Aumenta las recompensas al pescar (libros encantados, etc)',
		permiteditems: 'Caña de pescar',
		incompatiblewith: 'Sin incompatibilidad',
	},

	21: {
		name: 'atraccion',
		displayname: 'Atraccion',
		image: img,
		maxlevel: '3',
		description: 'Disminuye el tiempo de espera a la hora de pescar',
		permiteditems: 'Caña de pescar',
		incompatiblewith: 'Sin incompatibilidad',
	},

	22: {
		name: 'reparacion',
		displayname: 'Reparacion',
		image: img,
		maxlevel: '1',
		description: 'La experiencia obtenida repara el objeto en vez de añadirse a la barra de experiencia',
		permiteditems: ['Armadura completa', 'Espada', 'Pico', 'Pala', 'Hacha', 'Azada', 'Caña de pescar', 'Arco', 'Tijeras', 'Mechero', 'Caña con zanahoria', 'Escudo', 'Elitros', 'Tridente', 'Ballesta', 'Caña con hongo deformado'],
		incompatiblewith: 'Infinidad',
	},

	23: {
		name: 'disparo_multiple',
		displayname: 'Disparo Multiple',
		image: img,
		maxlevel: '1',
		description: 'Dispara 3 flechas por el precio de una. Solo una puede ser recuperada',
		permiteditems: 'Ballesta',
		incompatiblewith: 'Perforacion',
	},

	24: {
		name: 'perforacion',
		displayname: 'Perforacion',
		image: img,
		maxlevel: '4',
		description: 'Las flechas atraviesan criaturas y escudos',
		permiteditems: 'Ballesta',
		incompatiblewith: 'Disparo Multiple',
	},

	25: {
		name: 'poder',
		displayname: 'Poder',
		image: img,
		maxlevel: '5',
		description: 'Aumenta el daño de la flecha',
		permiteditems: 'Arco',
		incompatiblewith: 'Sin incompatibilidad',
	},

	26: {
		name: 'proteccion contra proyectiles',
		displayname: 'Proteccion contra proyectiles',
		image: img,
		maxlevel: '4',
		description: 'Reduce el daño recibido por las flechas, tridentes y proyectiles como los del ghast o los blaze',
		permiteditems: 'Armadura completa',
		incompatiblewith: ['Proteccion contra el fuego', 'Proteccion contra explosiones', 'Proteccion'],
	},

	27: {
		name: 'proteccion',
		displayname: 'Protecion',
		image: img,
		maxlevel: '4',
		description: 'Reduce el daño recibido un 5% por cada nivel',
		permiteditems: 'Armadura completa',
		incompatiblewith: ['Proteccion contra el fuego', 'Proteccion contra proyectiles', 'Proteccion contra explosiones'],
	},

	28: {
		name: 'retroceso',
		displayname: 'Retroceso',
		image: img,
		maxlevel: '2',
		description: 'Aumenta el retroceso de las flechas',
		permiteditems: 'Arco',
		incompatiblewith: 'Sin incompatibilidad',
	},

	29: {
		name: 'carga_rapida',
		displayname: 'Carga Rapida',
		image: img,
		maxlevel: '3',
		description: 'Reduce el tiempo de carga de la ballesta',
		permiteditems: 'Ballesta',
		incompatiblewith: 'Sin incompatibilidad',
	},

	30: {
		name: 'respiracion',
		displayname: 'Respiracion',
		image: img,
		maxlevel: '3',
		description: 'Aumenta el tiempo que puedes estar bajo el agua',
		permiteditems: 'Casco',
		incompatiblewith: 'Sin incompatibilidad',
	},

	31: {
		name: 'impulso_acuatico',
		displayname: 'Impulso Acuatico',
		image: img,
		maxlevel: '3',
		description: 'El tridente, al ser lanzado, propulsa al jugador con el. Solo funciona cuando llueve o en el agua',
		permiteditems: 'Trident',
		incompatiblewith: ['Conductividad', 'Lealtad'],
	},

	32: {
		name: 'filo',
		displayname: 'Filo',
		image: img,
		maxlevel: '5',
		description: 'Aumenta el daño de las armas',
		permiteditems: 'Espada',
		incompatiblewith: ['Maldicion de los Artropodos', 'Golpeo'],
	},

	33: {
		name: 'toque_de_seda',
		displayname: 'Toque de Seda',
		image: img,
		maxlevel: '1',
		description: 'Los bloques minados son soltadps en su forma natural, con algunas excepciones',
		permiteditems: ['Pico', 'Pala', 'Hacha', 'Azada'],
		incompatiblewith: 'Fortuna',
	},

	34: {
		name: 'golpeo',
		displayname: 'Golpeo',
		image: img,
		maxlevel: '5',
		description: 'Aumenta el daño creado a las criaturas no muertas',
		permiteditems: 'Espada',
		incompatiblewith: ['Baneo de los Artropodos', 'Filo'],
	},

	35: {
		name: 'velocidad_del_alma',
		displayname: 'Velocidad del Alma',
		image: img,
		maxlevel: '3',
		description: 'Aumenta la velocidad al andar sobre arena de almas o tierra de almas. Daña el objeto con el tiempo',
		permiteditems: 'Botas',
		incompatiblewith: 'Sin incompatibilidad',
	},

	36: {
		name: 'filo_arrasador',
		displayname: 'Filo Arrasador',
		image: img,
		maxlevel: '3',
		description: 'Aumenta el ataque de barrido',
		permiteditems: 'Espada',
		incompatiblewith: 'Sin incompatibilidad',
	},

	37: {
		name: 'espinas',
		displayname: 'Espinas',
		image: img,
		maxlevel: '3',
		description: 'Retorna un valor del daño al contrincante cuando eres atacado, bajo el coste de reducción de armadura',
		permiteditems: 'Armadura completa',
		incompatiblewith: 'Sin incompatibilidad',
	},

	38: {
		name: 'irrompibilidad',
		displayname: 'Irrompibilidad',
		image: img,
		maxlevel: '3',
		description: 'Reduce la posibilidad de que un item sea dañado',
		permiteditems: ['Armadura completa', 'Espada', 'Pico', 'Pala', 'Hacha', 'Azada', 'Caña de pescar', 'Arco', 'Tijeras', 'Mechero', 'Caña con zanahoria', 'Escudo', 'Elitros', 'Tridente', 'Ballesta', 'Caña con hongo deformado'],
		incompatiblewith: 'Sin incompatibilidad',
	}
};

module.exports = enchantsEs;

/*  1: {
	name: '',
	displayname: '',
	image: img,
	maxlevel: '',
	description: '',
	permiteditems: ['', ''],
	incompatiblewith: ['', ''],
  },*/