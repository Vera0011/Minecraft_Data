const img = 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enchanted_Book.gif/revision/latest/scale-to-width-down/160?cb=20200428014446';
const enchantsEs = {
    1: {
        name: 'afinidad_acuatica',
        displayname: 'Afinidad acuática',
        image: img,
        maxLevel: '1',
        description: 'Aumenta la velocidad al minar bajo el agua',
        permitedItems: 'Casco',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    2: {
        name: 'maldicion_de_los_artropodos',
        displayname: 'Maldición de los artrópodos',
        image: img,
        maxLevel: '5',
        description: 'Aumenta el daño y aplica lentitud 4 a los mobs artrópodos (arañas, arañas de cueva, lepisma, endermites y abejas)',
        permitedItems: 'Espada',
        incompatibleWith: ['Golpeo', 'Filo'],
        color: '#976996'
    },

    3: {
        name: 'proteccion_contra_explosiones',
        displayname: 'Protección contra explosiones',
        image: img,
        maxLevel: '4',
        description: 'Reduce el daño por explosión y empuje',
        permitedItems: 'Armadura completa',
        incompatibleWith: ['Protección contra el fuego', 'Protección contra proyectiles', 'Protección'],
        color: '#976996'
    },

    4: {
        name: 'conductividad',
        displayname: 'Conductividad',
        image: img,
        maxLevel: '1',
        description: 'Crea un rayo que alcanza a la entidad atacada, funciona solamente durante tormentas y si el objetivo no está obstruido por bloques',
        permitedItems: 'Tridente',
        incompatibleWith: 'Impulso acuático',
        color: '#976996'
    },

    5: {
        name: 'maldicion_de_ligamiento',
        displayname: 'Maldición de ligamiento',
        image: img,
        maxLevel: '1',
        description: 'Los items afectados no pueden ser desequipados, a menos de estar en Creativo, al morir o al romperse el item',
        permitedItems: ['Armadura completa', 'Calabaza', 'Cabeza', 'Elitros'],
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    6: {
        name: 'maldicion_de_desaparicion',
        displayname: 'Maldición de desaparición',
        image: img,
        maxLevel: '1',
        description: 'Los items afectados desaparecen al morir',
        permitedItems: ['Armadura completa', 'Espada', 'Pico', 'Pala', 'Hacha', 'Azada', 'Caña de pescar', 'Arco', 'Tijeras', 'Mechero', 'Brujula', 'Caña con zanahoria', 'Escudo', 'Elitros', 'Calabaza', 'Cabeza', 'Tridente', 'Ballesta', 'Caña con hongo deformado'],
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    7: {
        name: 'agilidad_acuatica',
        displayname: 'Agilidad acuática',
        image: img,
        maxLevel: '3',
        description: 'Aumenta la velocidad de desplazamiento bajo el agua',
        permitedItems: 'Botas',
        incompatibleWith: 'Paso helado',
        color: '#976996'
    },

    8: {
        name: 'eficiencia',
        displayname: 'Eficiencia',
        image: img,
        maxLevel: '5',
        description: 'Aumenta la velocidad del item encantado',
        permitedItems: ['Pico', 'Pala', 'Hacha', 'Azada', 'Tijeras'],
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    9: {
        name: 'caida_de_pluma',
        displayname: 'Caída de pluma',
        image: img,
        maxLevel: '4',
        description: 'Reduce el daño por caída',
        permitedItems: 'Botas',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    10: {
        name: 'aspecto_igneo',
        displayname: 'Aspecto ígneo',
        image: img,
        maxLevel: '2',
        description: 'Incendia el objetivo al ser golpeado',
        permitedItems: 'Espada',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    11: {
        name: 'proteccion_contra_el_fuego',
        displayname: 'Protección contra el fuego',
        image: img,
        maxLevel: '4',
        description: 'Reduce el daño por quemadura y el tiempo de quemadura',
        permitedItems: 'Armadura completa',
        incompatibleWith: ['Protección contra explosiones', 'Protección contra proyectiles', 'Protección'],
        color: '#976996'
    },

    12: {
        name: 'fuego',
        displayname: 'Fuego',
        image: img,
        maxLevel: '1',
        description: 'Las flechas queman al objetivo y encienden dinamita',
        permitedItems: 'Arco',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    13: {
        name: 'fortuna',
        displayname: 'Fortuna',
        image: img,
        maxLevel: '3',
        description: 'Aumenta ciertos dropeos de bloques',
        permitedItems: ['Pico', 'Pala', 'Hacha', 'Azada'],
        incompatibleWith: 'Toque de seda',
        color: '#976996'
    },

    14: {
        name: 'paso_helado',
        displayname: 'Paso helado',
        image: img,
        maxLevel: '2',
        description: 'Convierte el agua bajo el jugador en hielo compacto y evita el daño causado por los bloques de magma',
        permitedItems: 'Botas',
        incompatibleWith: 'Agilidad acuática',
        color: '#976996'
    },

    15: {
        name: 'empalamiento',
        displayname: 'Empalamiento',
        image: img,
        maxLevel: '5',
        description: 'El tridente causa mas daño a criaturas que aparezcan naturalmente en el oceano',
        permitedItems: 'Tridente',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    16: {
        name: 'infinidad',
        displayname: 'Infinidad',
        image: img,
        maxLevel: '1',
        description: 'Al disparar con el arco, no se consumen flechas, esto no incluye fechas espectrales o con efectos',
        permitedItems: 'Arco',
        incompatibleWith: 'Reparación',
        color: '#976996'
    },

    17: {
        name: 'empuje',
        displayname: 'Empuje',
        image: img,
        maxLevel: '2',
        description: 'Aumenta el empuje de la espada al golpear',
        permitedItems: 'Espada',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    18: {
        name: 'botin',
        displayname: 'Botin',
        image: img,
        maxLevel: '3',
        description: 'Aumenta las recompensas al matar a una criatura',
        permitedItems: 'Espada',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    19: {
        name: 'lealtad',
        displayname: 'Lealtad',
        image: img,
        maxLevel: '3',
        description: 'El tridente vuelve al jugador despues de haberlo lanzado',
        permitedItems: 'Tridente',
        incompatibleWith: 'Impulso acuático',
        color: '#976996'
    },

    20: {
        name: 'suerte_marina',
        displayname: 'Suerte marina',
        image: img,
        maxLevel: '3',
        description: 'Aumenta las recompensas al pescar (libros encantados, etc)',
        permitedItems: 'Caña de pescar',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    21: {
        name: 'atraccion',
        displayname: 'Atracción',
        image: img,
        maxLevel: '3',
        description: 'Disminuye el tiempo de espera a la hora de pescar',
        permitedItems: 'Caña de pescar',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    22: {
        name: 'reparacion',
        displayname: 'Reparación',
        image: img,
        maxLevel: '1',
        description: 'La experiencia obtenida repara el objeto en vez de añadirse a la barra de experiencia',
        permitedItems: ['Armadura completa', 'Espada', 'Pico', 'Pala', 'Hacha', 'Azada', 'Caña de pescar', 'Arco', 'Tijeras', 'Mechero', 'Caña con zanahoria', 'Escudo', 'Elitros', 'Tridente', 'Ballesta', 'Caña con hongo deformado'],
        incompatibleWith: 'Infinidad',
        color: '#976996'
    },

    23: {
        name: 'disparo_multiple',
        displayname: 'Disparo múltiple',
        image: img,
        maxLevel: '1',
        description: 'Dispara 3 flechas al mismo tiempo, solo consumiendo una en el proceso. Solo una puede ser recuperada',
        permitedItems: 'Ballesta',
        incompatibleWith: 'Perforación',
        color: '#976996'
    },

    24: {
        name: 'perforacion',
        displayname: 'Perforación',
        image: img,
        maxLevel: '4',
        description: 'Las flechas atraviesan criaturas y escudos',
        permitedItems: 'Ballesta',
        incompatibleWith: 'Disparo múltiple',
        color: '#976996'
    },

    25: {
        name: 'poder',
        displayname: 'Poder',
        image: img,
        maxLevel: '5',
        description: 'Aumenta el daño de la flecha',
        permitedItems: 'Arco',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    26: {
        name: 'proteccion_contra_proyectiles',
        displayname: 'Protección contra proyectiles',
        image: img,
        maxLevel: '4',
        description: 'Reduce el daño recibido por las flechas, tridentes y proyectiles como los del ghast o los blaze',
        permitedItems: 'Armadura completa',
        incompatibleWith: ['Protección contra el fuego', 'Protección contra explosiones', 'Protección'],
        color: '#976996'
    },

    27: {
        name: 'proteccion',
        displayname: 'Protecion',
        image: img,
        maxLevel: '4',
        description: 'Reduce el daño recibido un 4% por cada nivel',
        permitedItems: 'Armadura completa',
        incompatibleWith: ['Protección contra el fuego', 'Protección contra proyectiles', 'Protección contra explosiones'],
        color: '#976996'
    },

    28: {
        name: 'retroceso',
        displayname: 'Retroceso',
        image: img,
        maxLevel: '2',
        description: 'Aumenta el retroceso de las flechas',
        permitedItems: 'Arco',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    29: {
        name: 'carga_rapida',
        displayname: 'Carga rápida',
        image: img,
        maxLevel: '3',
        description: 'Reduce el tiempo de carga de la ballesta',
        permitedItems: 'Ballesta',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    30: {
        name: 'respiracion',
        displayname: 'Respiración',
        image: img,
        maxLevel: '3',
        description: 'Aumenta el tiempo que puedes estar bajo el agua sin ahogarte',
        permitedItems: 'Casco',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    31: {
        name: 'impulso_acuatico',
        displayname: 'Impulso acuático',
        image: img,
        maxLevel: '3',
        description: 'El tridente, al ser lanzado, propulsa al jugador con el. Solo funciona cuando llueve o en el agua',
        permitedItems: 'Tridente',
        incompatibleWith: ['Conductividad', 'Lealtad'],
        color: '#976996'
    },

    32: {
        name: 'filo',
        displayname: 'Filo',
        image: img,
        maxLevel: '5',
        description: 'Aumenta el daño de las armas',
        permitedItems: 'Espada',
        incompatibleWith: ['Maldición de los Artropodos', 'Golpeo'],
        color: '#976996'
    },

    33: {
        name: 'toque_de_seda',
        displayname: 'Toque de seda',
        image: img,
        maxLevel: '1',
        description: 'Los bloques minados son soltados en su forma natural, con algunas excepciones',
        permitedItems: ['Pico', 'Pala', 'Hacha', 'Azada'],
        incompatibleWith: 'Fortuna',
        color: '#976996'
    },

    34: {
        name: 'golpeo',
        displayname: 'Golpeo',
        image: img,
        maxLevel: '5',
        description: 'Aumenta el daño creado a las criaturas no muertas',
        permitedItems: 'Espada',
        incompatibleWith: ['Baneo de los Artropodos', 'Filo'],
        color: '#976996'
    },

    35: {
        name: 'velocidad_del_alma',
        displayname: 'Velocidad del Alma',
        image: img,
        maxLevel: '3',
        description: 'Aumenta la velocidad al andar sobre arena de almas o tierra de almas. Daña el objeto con el tiempo',
        permitedItems: 'Botas',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    36: {
        name: 'filo_arrasador',
        displayname: 'Filo Arrasador',
        image: img,
        maxLevel: '3',
        description: 'Aumenta el ataque de barrido',
        permitedItems: 'Espada',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    37: {
        name: 'espinas',
        displayname: 'Espinas',
        image: img,
        maxLevel: '3',
        description: 'Retorna un valor del daño al contrincante cuando eres atacado, bajo el coste de reducción de armadura',
        permitedItems: 'Armadura completa',
        incompatibleWith: 'Sin incompatibilidad',
        color: '#976996'
    },

    38: {
        name: 'irrompibilidad',
        displayname: 'Irrompibilidad',
        image: img,
        maxLevel: '3',
        description: 'Reduce la posibilidad de que un item sea dañado',
        permitedItems: ['Armadura completa', 'Espada', 'Pico', 'Pala', 'Hacha', 'Azada', 'Caña de pescar', 'Arco', 'Tijeras', 'Mechero', 'Caña con zanahoria', 'Escudo', 'Elitros', 'Tridente', 'Ballesta', 'Caña con hongo deformado'],
        incompatibleWith: 'Sin incompatibilidad',
    }
};

module.exports = enchantsEs;

/*  1: {
	name: '',
	displayname: '',
	image: img,
	maxLevel: '',
	description: '',
	permitedItems: ['', ''],
	incompatibleWith: ['', ''],
  color: '#976996'
},*/