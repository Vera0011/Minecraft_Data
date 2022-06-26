const img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enchanted_Book.gif/revision/latest/scale-to-width-down/160?cb=20200428014446";
const img2 = "https://cdn.discordapp.com/attachments/981118574154366976/981122396683644998/Enchanted_Book.gif";
const toolsEs = {
    1: {
        category: "tools",
        tag: "netherite_pickaxe",
        name: "pico_de_netherita",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Netherite_Pickaxe_JE3.png/revision/latest/scale-to-width-down/160?cb=20210418192807"],
        color: "#2A2525",
        displayname: "Pico de netherita",
        durability: "2031 usos",
        enchants: ["Eficiencia", "Fortuna", "Toque de seda", "Irrompibilidad", "Reparacion", "Maldición de desaparición"],
        description: "Un pico ignífugo creado luego de fusionar un pico de diamante con un lingote de netherita."
    },

    2: {
        category: "tools",
        tag: "netherite_axe",
        name: "hacha_de_netherita",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/df/Netherite_Axe_JE2.png/revision/latest/scale-to-width-down/160?cb=20200522035253"],
        color: "#2A2525",
        displayname: "Hacha de netherita",
        durability: "2031 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Filo", "Golpeo", "Perdición de los artrópodos", "Aspecto ígneo", "Botin", "Empuje", "Filo arrasador", "Reparación", "Maldición de desaparición"],
        description: "Un hacha ignífuga creada luego de fusionar un hacha de diamante con un lingote de netherita."
    },

    3: {
        category: "tools",
        tag: "netherite_shovel",
        name: "pala_de_netherita",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a1/Netherite_Shovel_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20200304185542"],
        color: "#2A2525",
        displayname: "Pala de netherita",
        durability: "2031 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "Una pala ignífuga creada luego de fusionar una pala de diamante con un lingote de netherita."
    },

    4: {
        category: "tools",
        tag: "netherite_hoe",
        name: "azada_de_netherita",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Netherite_Hoe_JE2.png/revision/latest/scale-to-width-down/160?cb=20200526212455"],
        color: "#2A2525",
        displayname: "Azada de netherita",
        durability: "2031 usos",
        enchants: ["Eficiencia", "Fortuna", "Irrompibilidad", "Toque de seda", "Reparación", "Maldición de desaparición"],
        description: "Una azada ignífuga creada luego de fusionar una azada de diamante con un lingote de netherita."
    },

    5: {
        category: "tools",
        tag: "diamond_pickaxe",
        name: "pico_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Diamond_Pickaxe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226193952"],
        color: "#5EF3EA",
        displayname: "Pico de diamante",
        durability: "1561 usos",
        enchants: ["Eficiencia", "Fortuna", "Toque de seda", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "El pico de diamante se utiliza para extraer bloques básicos de tipo piedra más rápido que un pico de madera"
    },

    6: {
        category: "tools",
        tag: "diamond_axe",
        name: "hacha_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ae/Diamond_Axe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200522035354"],
        color: "#5EF3EA",
        displayname: "Hacha de diamante",
        durability: "1561 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Filo", "Golpeo", "Perdición de los artrópodos", "Aspecto ígneo", "Botin", "Empuje", "Filo arrasador", "Reparación", "Maldición de desaparición"],
        description: "El hacha de diamante, al igual que otras hachas, se utilizan principalmente para obtener materiales de madera"
    },

    7: {
        category: "tools",
        tag: "diamond_shovel",
        name: "pala_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/61/Diamond_Shovel_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235341"],
        color: "#5EF3EA",
        displayname: "Pala de diamante",
        durability: "1561 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Reparacion", "Maldición de desaparición"],
        description: "La pala de diamante se utiliza para extraer tierra, grava y arena más rápidamente, para obtener bolas de nieve y para hacer caminos de tierra y apagar hogueras"
    },

    8: {
        category: "tools",
        tag: "diamond_hoe",
        name: "azada_de_diamante",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Diamond_Hoe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226193929"],
        color: "#5EF3EA",
        displayname: "Azada de diamante",
        durability: "1561 usos",
        enchants: ["Eficiencia", "Fortuna", "Irrompibilidad", "Toque de seda", "Reparación", "Maldición de desaparición"],
        description: "La azada de diamante se utilizan para labrar tierra con el fin de poder hacer cultivos. También es la herramienta adecuada para extraer hojas, esponjas, balas de heno, etc."
    },

    9: {
        category: "tools",
        tag: "golden_pickaxe",
        name: "pico_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/a6/Golden_Pickaxe_JE4_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226194041"],
        color: "#ECEC41",
        displayname: "Pico de oro",
        durability: "32 usos",
        enchants: ["Eficiencia", "Fortuna", "Toque de seda", "Irrompibilidad", "Reparacion", "Maldición de desaparición"],
        description: "El pico de oro se utiliza para extraer bloques básicos de tipo piedra más rápido que un pico de madera"
    },

    10: {
        category: "tools",
        tag: "golden_axe",
        name: "hacha_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e2/Golden_Axe_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234513"],
        color: "#ECEC41",
        displayname: "Hacha de oro",
        durability: "32 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Filo", "Golpeo", "Perdición de los artrópodos", "Aspecto ígneo", "Botin", "Empuje", "Filo arrasador", "Reparacion", "Maldición de desaparición"],
        description: "El hacha de oro, al igual que otras hachas, se utilizan principalmente para obtener materiales de madera"
    },

    11: {
        category: "tools",
        tag: "golden_shovel",
        name: "pala_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c9/Golden_Shovel_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235415"],
        color: "#ECEC41",
        displayname: "Pala de oro",
        durability: "32 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "La pala de oro se utiliza para extraer tierra, grava y arena más rápidamente, para obtener bolas de nieve y para hacer caminos de tierra y apagar hogueras"
    },

    12: {
        category: "tools",
        tag: "golden_hoe",
        name: "azada_de_oro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9d/Golden_Hoe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226194031"],
        color: "#ECEC41",
        displayname: "Azada de oro",
        durability: "32 usos",
        enchants: ["Eficiencia", "Fortuna", "Irrompibilidad", "Toque de seda", "Reparación", "Maldición de desaparición"],
        description: "La azada de oro se utilizan para labrar tierra con el fin de poder hacer cultivos. También es la herramienta adecuada para extraer hojas, esponjas, balas de heno, etc."
    },

    13: {
        category: "tools",
        tag: "iron_pickaxe",
        name: "pico_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Iron_Pickaxe_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200105053011"],
        color: "#C7C7BB",
        displayname: "Pico de hierro",
        durability: "250 usos",
        enchants: ["Eficiencia", "Fortuna", "Toque de seda", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "El pico de hierro se utiliza para extraer bloques básicos de tipo piedra más rápido que un pico de madera."
    },

    14: {
        category: "tools",
        tag: "iron_axe",
        name: "hacha_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234438"],
        color: "#C7C7BB",
        displayname: "Hacha de hierro",
        durability: "250 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Filo", "Golpeo", "Perdición de los artrópodos", "Aspecto ígneo", "Botin", "Empuje", "Filo arrasador", "Reparación", "Maldición de desaparición"],
        description: "El hacha de hierro, al igual que otras hachas, se utilizan principalmente para obtener materiales de madera."
    },

    15: {
        category: "tools",
        tag: "iron_shovel",
        name: "pala_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/aa/Iron_Shovel_JE3_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235306"],
        color: "#C7C7BB",
        displayname: "Pala de hierro",
        durability: "250 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "La pala de hierro se utiliza para extraer tierra, grava y arena más rápidamente, para obtener bolas de nieve y para hacer caminos de tierra y apagar hogueras."
    },

    16: {
        category: "tools",
        tag: "iron_hoe",
        name: "azada_de_hierro",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/ba/Iron_Hoe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200128141346"],
        color: "#C7C7BB",
        displayname: "Azada de hierro",
        durability: "250 usos",
        enchants: ["Eficiencia", "Fortuna", "Irrompibilidad", "Toque de seda", "Reparación", "Maldición de desaparición"],
        description: "La azada de hierro se utilizan para labrar tierra con el fin de poder hacer cultivos. También es la herramienta adecuada para extraer hojas, esponjas, balas de heno, etc."
    },

    17: {
        category: "tools",
        tag: "stone_pickaxe",
        name: "pico_de_piedra",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c4/Stone_Pickaxe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234007"],
        color: "#999988",
        displayname: "Pico de piedra",
        durability: "131 usos",
        enchants: ["Eficiencia", "Fortuna", "Toque de seda", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "El pico de piedra se utiliza para extraer bloques básicos de tipo piedra más rápido que un pico de madera."
    },

    18: {
        category: "tools",
        tag: "stone_axe",
        name: "hacha_de_piedra",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234417"],
        color: "#999988",
        displayname: "Hacha de piedra",
        durability: "131 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Filo", "Golpeo", "Perdición de los artrópodos", "Aspecto ígneo", "Botin", "Empuje", "Filo arrasador", "Reparacion", "Maldición de desaparición"],
        description: "El hacha de piedra, al igual que otras hachas, se utilizan principalmente para obtener materiales de madera."
    },

    19: {
        category: "tools",
        tag: "stone_shovel",
        name: "pala_de_piedra",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Stone_Shovel_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217235006"],
        color: "#999988",
        displayname: "Pala de piedra",
        durability: "131 usos",
        enchants: ["Fortuna", "Toque de Seda", "Eficiencia", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "La pala de piedra se utiliza para extraer tierra, grava y arena más rápidamente, para obtener bolas de nieve y para hacer caminos de tierra y apagar hogueras."
    },

    20: {
        category: "tools",
        tag: "stone_hoe",
        name: "azada_de_piedra",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Stone_Hoe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200128141332"],
        color: "#999988",
        displayname: "Azada de piedra",
        durability: "131 usos",
        enchants: ["Eficiencia", "Fortuna", "Irrompibilidad", "Toque de seda", "Reparación", "Maldición de desaparición"],
        description: "La azada de piedra se utilizan para labrar tierra con el fin de poder hacer cultivos. También es la herramienta adecuada para extraer hojas, esponjas, balas de heno, etc."
    },

    21: {
        category: "tools",
        tag: "wooden_pickaxe",
        name: "pico_de_madera",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0b/Wooden_Pickaxe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217231203"],
        color: "#401208",
        displayname: "Pico de madera",
        durability: "59 usos",
        enchants: ["Eficiencia", "Fortuna", "Toque de seda", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "El pico de madera se utiliza para extraer bloques básicos de tipo piedra."
    },

    22: {
        category: "tools",
        tag: "wooden_axe",
        name: "hacha_de_madera",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234355"],
        color: "#401208",
        displayname: "Hacha de madera",
        durability: "59 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Filo", "Golpeo", "Perdición de los artrópodos", "Aspecto ígneo", "Botin", "Empuje", "Filo arrasador", "Reparación", "Maldición de desaparición"],
        description: "El hacha de madera, al igual que otras hachas, se utilizan principalmente para obtener materiales de madera"
    },

    23: {
        category: "tools",
        tag: "wooden_shovel",
        name: "pala_de_madera",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Wooden_Shovel_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200217234949"],
        color: "#401208",
        displayname: "Pala de madera",
        durability: "59 usos",
        enchants: ["Fortuna", "Toque de seda", "Eficiencia", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "La pala de madera se utiliza para extraer tierra, grava y arena más rápidamente, para obtener bolas de nieve y para hacer caminos de tierra y apagar hogueras"
    },

    24: {
        category: "tools",
        tag: "wooden_hoe",
        name: "azada_de_madera",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Wooden_Hoe_JE3_BE3.png/revision/latest/scale-to-width-down/160?cb=20200226194121"],
        color: "#401208",
        displayname: "Azada de madera",
        durability: "59 usos",
        enchants: ["Eficiencia", "Fortuna", "Irrompibilidad", "Toque de seda", "Reparación", "Maldición de desaparición"],
        description: "La azada de madera se utilizan para labrar tierra con el fin de poder hacer cultivos. También es la herramienta adecuada para extraer hojas, esponjas, balas de heno, etc"
    },

    25: {
        category: "tools",
        tag: "flint_and_steel",
        name: "mechero",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/94/Flint_and_Steel_JE4_BE2.png/revision/latest/scale-to-width-down/160?cb=20200127082924"],
        color: "#827B72",
        displayname: "Mechero",
        durability: "64 usos",
        enchants: ["Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "Crea un bloque de fuego y puede encender portales al Nether al ser usado."
    },

    26: {
        category: "tools",
        tag: "efficiency",
        name: "eficiencia",
        displayname: "Eficiencia",
        image: [img2, img],
        maxLevel: "Nivel 5",
        description: "Aumenta la velocidad del objeto encantado",
        permitedItems: ["Pico", "Pala", "Hacha", "Azada", "Tijeras"],
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    27: {
        category: "tools",
        tag: "silk_touch",
        name: "toque_de_seda",
        displayname: "Toque de seda",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Los bloques minados son soltados en su forma natural, con algunas excepciones",
        permitedItems: ["Pico", "Pala", "Hacha", "Azada"],
        incompatibleWith: "Fortuna",
        color: "#CE75EA"
    },

    28: {
        category: "tools",
        tag: "unbreaking",
        name: "irrompibilidad",
        displayname: "Irrompibilidad",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Reduce la posibilidad de que un objeto sea dañado",
        permitedItems: ["Armadura completa", "Espada", "Pico", "Pala", "Hacha", "Azada", "Caña de pescar", "Arco", "Tijeras", "Mechero", "Caña con zanahoria", "Escudo", "Elitros", "Tridente", "Ballesta", "Caña con hongo distorsionado"],
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    29: {
        category: "tools",
        tag: "fortune",
        name: "fortuna",
        displayname: "Fortuna",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta la probabilidad de sacar más objetos de bloques",
        permitedItems: ["Pico", "Pala", "Hacha", "Azada"],
        incompatibleWith: "Toque de seda",
        color: "#CE75EA"
    },

    30: {
        category: "tools",
        tag: "luck_of_the_sea",
        name: "suerte_marina",
        displayname: "Suerte marina",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Aumenta la probabilidad de conseguir tesoros al pescar",
        permitedItems: "Caña de pescar",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    31: {
        category: "tools",
        tag: "lure",
        name: "atraccion",
        displayname: "Atracción",
        image: [img2, img],
        maxLevel: "Nivel 3",
        description: "Disminuye el tiempo de espera a la hora de pescar",
        permitedItems: "Caña de pescar",
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    32: {
        category: "tools",
        tag: "mending",
        name: "reparacion",
        displayname: "Reparación",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Un encantamiento que restaura la durabilidad de un objeto utilizando la experiencia.",
        permitedItems: ["Armadura completa", "Espada", "Pico", "Pala", "Hacha", "Azada", "Caña de pescar", "Arco", "Tijeras", "Mechero", "Caña con zanahoria", "Escudo", "Elitros", "Tridente", "Ballesta", "Caña con hongo distorsionado"],
        incompatibleWith: "Infinidad",
        color: "#CE75EA"
    },

    33: {
        category: "tools",
        tag: "vanishing_curse",
        name: "maldicion_de_desaparicion",
        displayname: "Maldición de desaparición",
        image: [img2, img],
        maxLevel: "Nivel 1",
        description: "Los objetos con este encantamiento desaparecen luego de que un jugador que los lleve muera",
        permitedItems: ["Armadura completa", "Espada", "Pico", "Pala", "Hacha", "Azada", "Caña de pescar", "Arco", "Tijeras", "Mechero", "Brújula", "Caña con zanahoria", "Escudo", "Elitros", "Calabaza", "Cabeza", "Tridente", "Ballesta", "Caña con hongo distorsionado"],
        incompatibleWith: "Sin incompatibilidad",
        color: "#CE75EA"
    },

    34: {
        category: "tools",
        color: "#66ECE8",
        tag: "recovery_compass",
        name: "brújula_de_recuperacion",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/33/Recovery_Compass_JE1_BE1.gif/revision/latest/scale-to-width-down/160?cb=20220406192613"],
        displayname: "Brújula de recuperación",
        enchants: ["Maldición de desaparición"],
        description: "Una brújula la cual indica el último punto de muerte del jugador."
    },

    35: {
        category: "tools",
        color: "#ECF12F",
        tag: "clock",
        name: "reloj",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Clock_JE3_BE3.gif/revision/latest/scale-to-width-down/160?cb=20201125194053"],
        displayname: "Reloj",
        description: "Un dispositivo capaz de mostrar la posición (en tiempo real) del sol y de la luna."
    },

    36: {
        category: "tools",
        color: "#7B531A",
        tag: "fishing_rod",
        name: "caña_de_pescar",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7f/Fishing_Rod_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20200201063839"],
        displayname: "Caña de pescar",
        enchants: ["Atracción", "Suerte marina", "Irrompibilidad", "Reparación", "Maldición de desaparición"],
        description: "Una caña de pescar común"
    },

    37: {
        category: "tools",
        color: "#F0D6B0",
        tag: "name_tag",
        name: "etiqueta",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/05/Name_Tag_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191229205433"],
        displayname: "Etiqueta",
        description: "Un objeto usado para poner nombre a las criaturas."
    },

    38: {
        category: "tools",
        color: "#B2874A",
        tag: "lead",
        name: "rienda",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1f/Lead_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191229205413"],
        displayname: "Rienda",
        description: "Un objeto que permite atar y llevar criaturas. Tiene la habilidad de crear una caravana de llamas."
    },

    39: {
        category: "tools",
        color: "#98948E",
        tag: "compass",
        name: "brújula",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b3/Compass_JE3_BE3.gif/revision/latest/scale-to-width-down/160?cb=20201125191224"],
        displayname: "Brújula",
        enchants: ["Maldición de desaparición"],
        description: "Una brújula que sirve para localizar el punto de aparición. Solo es posible usarla en la Superficie."
    },

    40: {
        category: "tools",
        color: "#7D9CA7",
        tag: "lodestone_compass",
        name: "brujula_imantada",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/9e/Lodestone_Compass_JE2_BE2.gif/revision/latest/scale-to-width-down/160?cb=20201204210510"],
        displayname: "Brújula imantada",
        enchants: ["Maldición de desaparición"],
        description: "Una brújula imantada en una magnetita. Se puede usar en las 3 dimensiones."
    },

    41: {
        category: "tools",
        color: "#EEEB5A",
        tag: "spyglass",
        name: "catalejo",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Spyglass_JE2_BE1.png/revision/latest/scale-to-width-down/160?cb=20210326000736"],
        displayname: "Catalejo",
        description: "Un objeto que permite hacer zoom en una localización específica."
    },

    42: {
        category: "tools",
        color: "#835924",
        tag: "shears",
        name: "tijeras",
        image: ["https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Shears_JE2_BE2.png/revision/latest/scale-to-width-down/160?cb=20191012183756"],
        displayname: "Tijeras",
        enchants: ["Eficiencia", "Irrompibilidad", "Reparación", "Maldición de desaparición", "Toque de seda"],
        description: "Las tijeras permiten esquilar a bloques y criaturas (tales como calabazas, colmenas, ovejas, mooshrooms, etc) y minar algunos bloques"
    },
};

module.exports = toolsEs;