// CATEGORÍAS
const categories = [
  { key: 'medieval', name: 'Medieval', image: 'img/medieval.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w6OD0WoAAvFNd?format=jpg&name=medium' },
  { key: 'fantasia', name: 'Fantasía', image: 'img/fantasia.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w2adlXgAE0-c6?format=jpg&name=medium' },
  { key: 'terror', name: 'Terror', image: 'img/terror.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w2w2XWQAAAMY8?format=jpg&name=medium' },
  { key: 'ciencia', name: 'Ciencia Ficción', image: 'img/ciencia.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w3qOAWgAAjYHV?format=jpg&name=medium' },
  { key: 'misterio', name: 'Misterio', image: 'img/misterio.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w4SbLWMAA29E1?format=jpg&name=medium' },
  { key: 'aventura', name: 'Aventura', image: 'img/aventura.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w4lknXIAAA1WM?format=jpg&name=medium' },
  { key: 'cyberpunk', name: 'Cyberpunk', image: 'img/ciberpunk.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w45FEXkAAUuEQ?format=jpg&name=medium' },
  { key: 'mitologia', name: 'Mitología', image: 'img/mitologia.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w13mrWcAAOGbm?format=jpg&name=medium' },
  { key: 'ecoaventura', name: 'Eco-Aventura', image: 'img/ecoaventura.jpg', onlineImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop' },
  { key: 'trivias', name: 'Trivias', image: 'img/trivias.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w74E4WcAAZNuS?format=jpg&name=medium' },
  { key: 'crea', name: 'Crea tu Aventura', image: 'img/crea.jpg', onlineImage: 'https://pbs.twimg.com/media/G7w7dGkWgAAI3Yz?format=jpg&name=medium' }
];

// Catálogo de historias
const catalog = [
  {
    key: 'medieval',
    category: 'medieval',
    tag: '⚔️ Medieval',
    title: 'El Castillo Maldito',
    intro: 'Escapa del castillo del rey maldito entre sombras, decisiones y magia arcana.',
    cover: 'img/castillomaldito1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w7-XeXEAAmS0r?format=jpg&name=360x360'
  },
  {
    key: 'bosque_encantado',  
    category: 'fantasia',
    tag: '🧙‍♂️ Fantasía',
    title: 'Bosque Encantado',
    intro: 'Senderos vivos, espíritus antiguos y decisiones que abren portales o trampas.',
    cover: 'img/bosqueencantado1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w8gKhWcAA1hUt?format=jpg&name=360x360'
  },
  {
    key: 'laberinto_elfo',
    category: 'fantasia',  
    tag: '🧙‍♂️ Fantasía',
    title: 'El Laberinto del Rey Elfo',
    intro: 'Atrapado en el palacio élfico, resuelve acertijos y escapa.',
    cover: 'img/laberinto_elfo.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w8gKhWcAA1hUt?format=jpg&name=360x360'
  },
  {
    key: 'terror',
    category: 'terror',
    tag: '👻 Terror',
    title: 'Mansión Embrujada',
    intro: 'La casa te observa. Risas lejanas y puertas que susurran tu nombre.',
    cover: 'img/mansionembrujada1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w9erUX0AEpG08?format=jpg&name=360x360'
  },
  {
    key: 'ciencia',
    category: 'ciencia',
    tag: '🔬 Ciencia Ficción',
    title: 'Estación Espacial Abandonada',
    intro: 'Alarmas rojas, oxígeno limitado y una decisión entre control y deriva.',
    cover: 'img/estacionespacial_bueno.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w9U5iWwAAbrxk?format=jpg&name=360x360'
  },
  {
    key: 'misterio',
    category: 'misterio',
    tag: '🕵️ Misterio',
    title: 'El Archivo Perdido',
    intro: 'Descubre secretos ocultos en documentos antiguos y pasadizos olvidados.',
    cover: 'img/archivoperdido.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w8ejWWgAArdBW?format=jpg&name=360x360'
  },
  {
    key: 'aventura',
    category: 'aventura',
    tag: '🗺️ Aventura',
    title: 'Isla del Tesoro',
    intro: 'Explora mapas, trampas y tesoros escondidos en una isla misteriosa.',
    cover: 'img/isladeltesoro1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w9bnqWMAA7Cyb?format=jpg&name=360x360'
  },
  {
    key: 'cyberpunk',
    category: 'cyberpunk',
    tag: '💾 Cyberpunk',
    title: 'Ciudad de Neón',
    intro: 'Hackea corporaciones y sobrevive en un mundo de neones y conspiraciones.',
    cover: 'img/ciudadneon1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w8qHTWsAAepCh?format=jpg&name=360x360'
  },
  {
    key: 'mitologia',
    category: 'mitologia',
    tag: '⚡ Mitología',
    title: 'Los Dioses Olvidados',
    intro: 'Enfrenta pruebas divinas y secretos ancestrales.',
    cover: 'img/diosesolvidados1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w8tg-WMAAttsL?format=jpg&name=360x360'
  },
  {
    key: 'ecoaventura',
    category: 'ecoaventura',
    tag: '🌱 Eco-Aventura',
    title: 'Guardianes del Bosque',
    intro: 'Protege la naturaleza y enfrenta desafíos ecológicos.',
    cover: 'img/guardianesbosque1.jpg',
    onlineCover: 'https://pbs.twimg.com/media/G7w9Zg5WEAAztjU?format=jpg&name=360x360'
  },
  {
    key: 'propia',
    category: 'crea',
    tag: '✍️ Crea tu propia aventura',
    title: 'Tu Historia',
    intro: 'Diseña tu propio camino y finales únicos.',
    cover: 'img/crea.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop'
  }
];

// HISTORIA MEDIEVAL: EL CASTILLO MALDITO
// HISTORIA MEDIEVAL: EL CASTILLO MALDITO
const games = {
  castillo_maldito: {
    title: "El Castillo Maldito",
    nodes: {
      start: {
        text: "Despiertas en una celda húmeda. El frío cala hasta los huesos y el olor a moho es penetrante. No recuerdas cómo llegaste aquí. Lo último que viene a tu mente es el bosque envuelto en niebla y luego... oscuridad. La puerta de hierro está entreabierta, lo cual es extraño. Escuchas pasos acercándose por el corredor de piedra. Una antorcha cercana ilumina débilmente las paredes cubiertas de musgo. Debes decidir rápido.",
        choices: [
          { text: "Esconderte detrás de la puerta", next: "esconderse" },
          { text: "Salir corriendo al pasillo", next: "correr" },
          { text: "Buscar algo útil en la celda", next: "buscar_arma" }
        ]
      },
      esconderse: {
        text: "Te ocultas justo a tiempo. Un guardia entra con armadura oxidada. Revisa la celda sin mucho interés y murmura 'maldito rey loco' antes de irse dejando la puerta sin cerrar del todo. Sus pasos se alejan pero aún escuchas voces en el pasillo.",
        choices: [
          { text: "Salir ahora al pasillo", next: "salir_pasillo_rapido" },
          { text: "Esperar a que todo esté completamente en silencio", next: "esperar_guardia" }
        ]
      },
      salir_pasillo_rapido: {
        text: "Sales rápido al pasillo mientras aún hay voces. Las antorchas proyectan sombras danzantes. A tu izquierda, una escalera sube hacia una torre. A la derecha, otro pasillo desciende y huele a comida rancia. Straight ahead está el pasillo principal.",
        choices: [
          { text: "Subir a la torre", next: "torre" },
          { text: "Ir hacia las cocinas", next: "cocinas" },
          { text: "Explorar el pasillo principal", next: "pasillo_principal" }
        ]
      },
      pasillo_principal: {
        text: "Avanzas por el pasillo principal. Las paredes están decoradas con tapices rasgados que muestran escenas de batallas antiguas. Llegas a un cruce. A la izquierda hay una puerta de madera tallada con símbolos extraños. A la derecha, el pasillo continúa hacia lo que parece ser el gran salón, de donde llegan voces apagadas.",
        choices: [
          { text: "Entrar por la puerta tallada", next: "puerta_tallada" },
          { text: "Acercarte al gran salón", next: "acercarse_salon" },
          { text: "Volver atrás", next: "esconderse" }
        ]
      },
      puerta_tallada: {
        text: "La puerta se abre con un crujido. Es una biblioteca abandonada. Libros antiguos cubren los estantes y el polvo flota en el aire. En un escritorio hay documentos y un candelabro de plata. Al fondo, un estante parece fuera de lugar.",
        choices: [
          { text: "Leer los documentos", next: "leer_documentos" },
          { text: "Examinar el estante sospechoso", next: "estante_secreto" },
          { text: "Tomar el candelabro como arma", next: "tomar_candelabro" }
        ]
      },
      leer_documentos: {
        text: "Los documentos hablan de un mago prisionero en la torre y de un báculo mágico escondido en algún lugar del castillo. También mencionan túneles secretos bajo las cocinas que llevan a los establos.",
        choices: [
          { text: "Ir a buscar al mago en la torre", next: "torre" },
          { text: "Buscar los túneles en las cocinas", next: "cocinas" }
        ]
      },
      estante_secreto: {
        text: "Empujas el estante y este gira revelando un pasadizo estrecho...",
        choices: [
          { text: "Entrar al pasadizo oscuro", next: "puerta_craneo" },
          { text: "Volver a la biblioteca", next: "puerta_tallada" }
        ]
      },
      puerta_craneo: {
        text: "La puerta se abre a una cripta. Hay ataúdes de piedra y huesos por el suelo. En el centro, un altar con un cofre cerrado. Las paredes tienen inscripciones que parecen advertencias.",
        choices: [
          { text: "Abrir el cofre", next: "abrir_cofre_cripta" },
          { text: "Leer las inscripciones", next: "leer_inscripciones" },
          { text: "Salir de inmediato", next: "estante_secreto" }
        ]
      },
      abrir_cofre_cripta: {
        text: "Al abrir el cofre encuentras oro, joyas y... un cráneo que comienza a brillar. Una voz fantasmal grita '¡Ladrón!' y las puertas se cierran. El aire se vuelve gélido.",
        choices: [
          { text: "Intentar forzar la salida", next: "ending_death" },
          { text: "Pedir perdón al espíritu", next: "pedir_perdon_espiritu" }
        ]
      },
      pedir_perdon_espiritu: {
        text: "'No buscaba robar, solo escapar de este castillo maldito', dices. El brillo del cráneo disminuye. 'Pocos muestran respeto. Te concederé una oportunidad: toma solo lo que necesites y vete.' La puerta se abre.",
        choices: [
          { text: "Tomar solo una joya pequeña", next: "tomar_joya" },
          { text: "No tomar nada", next: "no_tomar_nada" }
        ]
      },
      tomar_joya: {
        text: "Tomas una joya pequeña como agradecimiento y sales de la cripta. La joya brilla débilmente en tu bolsillo, quizás tenga algún poder protector. Sales de la cripta.",
        choices: [
          { text: "Salir de las catacumbas", next: "salir_cripta_respetuoso" }
        ]
      },
      no_tomar_nada: {
        text: "Sales sin tomar nada. El espíritu susurra: 'Tu honor te salvará.' Sientes una presencia protectora a tu alrededor. Sales de la cripta.",
        choices: [
          { text: "Salir de las catacumbas", next: "salir_cripta_respetuoso" }
        ]
      },
      leer_inscripciones: {
        text: "Las inscripciones dicen: 'Aquí yace el guardián del castillo, traicionado por el rey que juró proteger. Solo los de corazón puro pueden tomar sin consecuencias.' Decides ser cauteloso.",
        choices: [
          { text: "Intentar abrir el cofre con respeto", next: "abrir_cofre_cripta" },
          { text: "Salir respetuosamente de la cripta", next: "salir_cripta_respetuoso" }
        ]
      },
      salir_cripta_respetuoso: {
        text: "Sales de la cripta. Te sientes aliviado de haber sobrevivido a ese lugar oscuro. Regresas a la biblioteca.",
        choices: [
          { text: "Continuar en la biblioteca", next: "puerta_tallada" },
          { text: "Salir al pasillo", next: "pasillo_principal" }
        ]
      },
      tomar_candelabro: {
        text: "Tomas el candelabro de plata. Es pesado y podría servir como arma improvisada. Ahora que tienes un arma, debes decidir tu próximo movimiento.",
        choices: [
          { text: "Salir al pasillo principal", next: "pasillo_principal" },
          { text: "Buscar la salida más cercana", next: "buscar_salida_biblioteca" }
        ]
      },
      buscar_salida_biblioteca: {
        text: "Buscas una salida desde la biblioteca. Encuentras una ventana alta que da al patio y una puerta lateral que parece llevar a otra ala del castillo.",
        choices: [
          { text: "Intentar la ventana", next: "intentar_ventana_biblioteca" },
          { text: "Usar la puerta lateral", next: "puerta_lateral_biblioteca" }
        ]
      },
      intentar_ventana_biblioteca: {
        text: "Intentas abrir la ventana. Está trabada pero con el candelabro logras forzarla. Das al patio del castillo. Podrías saltar pero es alto.",
        choices: [
          { text: "Saltar al patio", next: "saltar_patio_biblioteca" },
          { text: "Buscar otra ruta", next: "puerta_lateral_biblioteca" }
        ]
      },
      puerta_lateral_biblioteca: {
        text: "Abres la puerta lateral. Lleva a un corredor largo con tapices. Al final ves luz natural. Debe ser una salida.",
        choices: [
          { text: "Avanzar por el corredor", next: "corredor_tapices" }
        ]
      },
      saltar_patio_biblioteca: {
        text: "Saltas al patio. Te duele el tobillo pero puedes caminar. Estás en el patio central del castillo. Ves los establos a lo lejos.",
        choices: [
          { text: "Ir a los establos", next: "pasadizo_cocinas" },
          { text: "Buscar otra salida", next: "explorar_patio" }
        ]
      },
      corredor_tapices: {
        text: "Avanzas por el corredor. Los tapices muestran batallas antiguas. Llegas a una intersección: izquierda hacia voces, derecha hacia silencio.",
        choices: [
          { text: "Ir hacia las voces", next: "acercarse_salon" },
          { text: "Ir hacia el silencio", next: "pasillo_principal" }
        ]
      },
      explorar_patio: {
        text: "Exploras el patio. Hay guardias patrullando pero también sombras donde esconderte. Ves una puerta que lleva a las cocinas.",
        choices: [
          { text: "Ir a las cocinas", next: "cocinas" },
          { text: "Ir a los establos", next: "pasadizo_cocinas" }
        ]
      },
      acercarse_salon: {
        text: "Te acercas con cuidado al gran salón. Desde una columna ves al rey sentado en su trono. Su rostro es pálido y sus ojos vacíos. Está rodeado de guardias y cortesanos que parecen igual de muertos por dentro. Hay una puerta lateral menos vigilada y cortinas pesadas que podrían ocultar una ventana.",
        choices: [
          { text: "Entrar directamente al salón", next: "salon" },
          { text: "Intentar la puerta lateral", next: "puerta_lateral_salon" },
          { text: "Esconderte tras las cortinas", next: "cortinas_salon" },
          { text: "Retroceder antes de ser visto", next: "pasillo_principal" }
        ]
      },
      puerta_lateral_salon: {
        text: "Cruzas la puerta lateral sin ser visto. Llegas a una galería con retratos de la familia real. Todos los rostros han sido cubiertos con pintura negra excepto uno: el del rey cuando era joven, sonriente y lleno de vida. Al final de la galería hay otra puerta.",
        choices: [
          { text: "Examinar los retratos más de cerca", next: "examinar_retratos" },
          { text: "Cruzar la siguiente puerta", next: "salon_banquetes" }
        ]
      },
      examinar_retratos: {
        text: "Al observar con atención, notas que bajo la pintura negra de uno de los retratos hay algo tallado: 'La verdad está en la torre. El báculo lo romperá todo.' Es una pista importante.",
        choices: [
          { text: "Ir a la torre inmediatamente", next: "torre" },
          { text: "Explorar más", next: "salon_banquetes" }
        ]
      },
      salon_banquetes: {
        text: "Entras a un salón de banquetes abandonado. La mesa está puesta como si esperaran invitados, pero todo está cubierto de polvo y telarañas. Hay comida podrida en los platos. Al fondo, una puerta lleva a las cocinas.",
        choices: [
          { text: "Ir a las cocinas", next: "cocinas" },
          { text: "Buscar algo útil en el salón", next: "buscar_salon_banquetes" }
        ]
      },
      buscar_salon_banquetes: {
        text: "Encuentras un cuchillo de plata en buen estado y una botella de vino que aún parece buena. Podrían ser útiles.",
        choices: [
          { text: "Tomar ambos y continuar", next: "cocinas" }
        ]
      },
      cortinas_salon: {
        text: "Te escondes tras las pesadas cortinas. Hay una ventana grande pero tiene barrotes. Desde aquí puedes ver el patio exterior y los establos. También escuchas la conversación del rey con sus guardias: habla de un mago prisionero que conoce el secreto de su maldición.",
        choices: [
          { text: "Intentar forzar los barrotes", next: "forzar_barrotes" },
          { text: "Ir a buscar al mago", next: "torre" },
          { text: "Salir de tu escondite con cuidado", next: "puerta_lateral_salon" }
        ]
      },
      forzar_barrotes: {
        text: "Los barrotes están demasiado firmes y el ruido alerta a los guardias. Te descubren.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      correr: {
        text: "Sales corriendo por el pasillo pero tu debilidad te traiciona. Tropiezas con una armadura vacía que cae con estruendo. El ruido resuena por todo el castillo. En segundos, guardias aparecen desde ambos extremos del corredor, rodeándote con espadas desenvainadas.",
        choices: [
          { text: "Intentar luchar desarmado", next: "ending_death" },
          { text: "Rendirte y hablar", next: "negociar" },
          { text: "Buscar una salida desesperadamente", next: "correr_entre" }
        ]
      },
      negociar: {
        text: "Levantas las manos. 'No soy una amenaza. Solo busco salir de aquí.' Los guardias se miran. Parecen cansados, mal pagados. El capitán suspira. 'El rey está loco y nosotros atrapados aquí. Vete por donde viniste y no vuelvas. Si te vemos de nuevo, no habrá piedad.'",
        choices: [
          { text: "Aceptar y marcharte", next: "ending_neutral" },
          { text: "Preguntar por el mago de la torre", next: "preguntar_mago_guardias" }
        ]
      },
      preguntar_mago_guardias: {
        text: "'¿Qué sabes del mago?' Los guardias se tensan. 'No hables de eso. Es un tema prohibido.' Uno te golpea y te arrojan fuera del castillo con violencia.",
        choices: [
          { text: "Fin", next: "ending_neutral" }
        ]
      },
      correr_entre: {
        text: "Intentas correr entre los guardias pero uno te golpea con la empuñadura de su espada. Todo se vuelve negro.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      buscar_arma: {
        text: "Revisas la celda cuidadosamente. Entre la paja húmeda encuentras una espada oxidada pero funcional, y en una grieta de la pared, una daga pequeña. También hay un trozo de cuerda que podría ser útil. Armado y con más confianza, sales al pasillo. Llegas a un cruce: a la izquierda escuchas voces de prisioneros, a la derecha hay silencio ominoso.",
        choices: [
          { text: "Seguir hacia las voces (mazmorras)", next: "mazmorras" },
          { text: "Ir hacia el silencio", next: "acercarse_salon" },
          { text: "Buscar una ventana para escapar", next: "buscar_ventana" }
        ]
      },
      buscar_ventana: {
        text: "Encuentras una ventana estrecha con barrotes de hierro. Está a media altura y da al patio. Ves los establos a lo lejos. Los barrotes están oxidados pero firmes. Podrías gritar por ayuda o intentar forzarlos con la cuerda.",
        choices: [
          { text: "Gritar pidiendo ayuda", next: "gritar_ayuda" },
          { text: "Intentar forzar los barrotes", next: "forzar_barrotes_cuerda" }
        ]
      },
      gritar_ayuda: {
        text: "Tus gritos atraen atención. Escuchas pasos acercándose pero también una voz que susurra desde otra celda: '¡Cállate idiota! Hay un túnel en la celda del fondo. Corre!'",
        choices: [
          { text: "Correr hacia la celda del fondo", next: "correr_celda_fondo" },
          { text: "Quedarte y enfrentar a los guardias", next: "ending_captured" }
        ]
      },
      correr_celda_fondo: {
        text: "Corres hacia la celda del fondo. Encuentras el túnel que mencionaron. Es estrecho y oscuro. Los guardias están entrando al pasillo.",
        choices: [
          { text: "Entrar al túnel rápido", next: "tunel_escape" }
        ]
      },
      forzar_barrotes_cuerda: {
        text: "Usas la cuerda para hacer palanca pero los barrotes apenas se mueven y el ruido alerta a los guardias cercanos. Escuchas pasos acercándose.",
        choices: [
          { text: "Esconderte rápido", next: "mazmorras" },
          { text: "Enfrentar a los guardias", next: "ending_captured" }
        ]
      },
      torre: {
        text: "Subes por la escalera de caracol. Los escalones están desgastados y algunas piedras sueltas. Llegas a una puerta de madera reforzada con símbolos mágicos brillantes. Desde dentro escuchas una voz anciana: 'Si buscas escapar, necesitarás mi ayuda. Pero primero, encuentra mi báculo en la biblioteca del ala este. Sin él, estos sellos me mantienen prisionero.'",
        choices: [
          { text: "Aceptar buscar el báculo", next: "aceptar_buscar_baculo" },
          { text: "Intentar romper los sellos tú mismo", next: "intentar_romper_sellos" },
          { text: "Preguntar más sobre los sellos", next: "preguntar_sellos" }
        ]
      },
      aceptar_buscar_baculo: {
        text: "'Iré por tu báculo', prometes. 'Está en la biblioteca, tras un estante de libros sobre magia antigua. Date prisa, el rey revisa el castillo cada noche.' Sales con determinación hacia la biblioteca.",
        choices: [
          { text: "Ir a la biblioteca", next: "ir_biblioteca" }
        ]
      },
      ir_biblioteca: {
        text: "Llegas a la biblioteca. Es enorme, con estantes que llegan hasta el techo. Encuentras la sección de magia antigua. Tras mover varios libros, un estante hace clic y se abre revelando un compartimiento secreto. Dentro, un báculo de cristal azul brilla tenuemente.",
        choices: [
          { text: "Tomar el báculo y volver con el mago", next: "volver_con_baculo" },
          { text: "Examinar el báculo primero", next: "examinar_baculo" }
        ]
      },
      examinar_baculo: {
        text: "El báculo emite un zumbido suave. Sientes poder emanando de él. Tiene inscripciones en un idioma antiguo. Podría ser peligroso usarlo sin conocimiento.",
        choices: [
          { text: "Llevarlo al mago", next: "volver_con_baculo" },
          { text: "Intentar usarlo tú mismo", next: "usar_baculo_solo" }
        ]
      },
      usar_baculo_solo: {
        text: "Intentas usar el báculo pero su poder es incontrolable. Una explosión de energía te lanza contra la pared. El ruido alerta a todo el castillo.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      volver_con_baculo: {
        text: "Regresas a la torre con el báculo. El mago lo toma con manos temblorosas y los sellos brillan intensamente antes de romperse. 'Al fin... después de tantos años.' Se apoya en el báculo recuperando fuerzas. 'El rey no siempre fue así. Una maldición oscura lo consume. Puedo romperla, pero necesito tres cosas: la corona real, sangre de heredero, y el corazón de cristal escondido en las catacumbas.'",
        choices: [
          { text: "Preguntar sobre la corona real", next: "preguntar_corona_mago" },
          { text: "Preguntar sobre la sangre de heredero", next: "preguntar_sangre_mago" },
          { text: "Preguntar sobre el corazón de cristal", next: "preguntar_corazon_mago" },
          { text: "Rechazar y pedir que te ayude a escapar", next: "rechazar_mision_mago" }
        ]
      },
      preguntar_corona_mago: {
        text: "'La corona está en la cabeza del rey', dice el mago. 'Deberás acercarte al trono. Es peligroso pero hay formas: puedes disfrazarte de guardia, usar los pasadizos secretos, o crear una distracción masiva.'",
        choices: [
          { text: "Preguntar sobre la sangre de heredero", next: "preguntar_sangre_mago" },
          { text: "Preguntar sobre el corazón de cristal", next: "preguntar_corazon_mago" },
          { text: "Aceptar la misión", next: "aceptar_mision_mago" }
        ]
      },
      preguntar_sangre_mago: {
        text: "'La princesa Elara, única heredera, fue encerrada en la torre sur cuando la maldición comenzó', explica el mago. 'El rey la protege celosamente. Necesitarás la llave maestra que guarda el capitán de la guardia.'",
        choices: [
          { text: "Preguntar sobre la corona real", next: "preguntar_corona_mago" },
          { text: "Preguntar sobre el corazón de cristal", next: "preguntar_corazon_mago" },
          { text: "Aceptar la misión", next: "aceptar_mision_mago" }
        ]
      },
      preguntar_corazon_mago: {
        text: "'El Corazón de Cristal es un artefacto antiguo en las catacumbas bajo el castillo', dice el mago gravemente. 'Está protegido por guardianes no-muertos. Necesitarás valor y quizás agua bendita del altar de la capilla.'",
        choices: [
          { text: "Preguntar sobre la corona real", next: "preguntar_corona_mago" },
          { text: "Preguntar sobre la sangre de heredero", next: "preguntar_sangre_mago" },
          { text: "Aceptar la misión", next: "aceptar_mision_mago" }
        ]
      },
      rechazar_mision_mago: {
        text: "El mago suspira decepcionado. 'Entiendo. El miedo es sabio a veces.' Levanta el báculo y un portal de luz aparece. 'Vete entonces. Yo intentaré romper la maldición solo, aunque sin esos objetos será casi imposible.'",
        choices: [
          { text: "Cruzar el portal y escapar", next: "escapar_abandonando_mago" },
          { text: "Reconsiderar y aceptar la misión", next: "aceptar_mision_mago" }
        ]
      },
      escapar_abandonando_mago: {
        text: "Cruzas el portal. La magia te envuelve pero algo está mal. El mago estaba débil y el portal es inestable. En lugar de un prado, apareces en medio del bosque oscuro rodeando el castillo. Escuchas aullidos de lobos. El portal se cierra tras de ti. Estás solo, de noche, sin provisiones.",
        choices: [
          { text: "Buscar refugio", next: "buscar_refugio_bosque" },
          { text: "Caminar hacia las luces de una aldea", next: "caminar_aldea" },
          { text: "Intentar volver al castillo", next: "volver_castillo_arrepentido" }
        ]
      },
      buscar_refugio_bosque: {
        text: "Buscas refugio. Encuentras una cueva pequeña. Pasas la noche fría y llena de ruidos amenazantes. Al amanecer, el castillo está visible a lo lejos. Se ve oscuro, silencioso. Muerto.",
        choices: [
          { text: "Alejarte definitivamente", next: "alejarse_definitivo" }
        ]
      },
      caminar_aldea: {
        text: "Caminas hacia las luces. Después de horas llegas a una aldea. La gente te mira con miedo. '¿Vienes del castillo maldito?' pregunta un anciano. 'Nadie que entra ahí sale vivo... excepto los cobardes.' Sus palabras duelen más que cualquier herida.",
        choices: [
          { text: "Quedarte en la aldea", next: "quedarse_aldea_culpa" }
        ]
      },
      volver_castillo_arrepentido: {
        text: "Intentas volver al castillo. Quizás puedas ayudar aún. Pero cuando llegas, las puertas están selladas con magia oscura. El mago debe haber intentado el ritual solo. Escuchas un estruendo. El castillo tiembla. Es demasiado tarde.",
        choices: [
          { text: "Observar el colapso", next: "observar_colapso" }
        ]
      },
      alejarse_definitivo: {
        text: "Te alejas del castillo para siempre. Días después, comerciantes hablan del castillo que colapsó en una explosión mágica. No hubo sobrevivientes. Podrías haberlos salvado pero elegiste salvarte a ti mismo.",
        choices: [
          { text: "Fin", next: "ending_escape_con_culpa" }
        ]
      },
      quedarse_aldea_culpa: {
        text: "Te quedas en la aldea. Consigues trabajo, una vida simple. Pero cada noche sueñas con el castillo. Con el mago esperando. Con la princesa prisionera. Con el rey que pudiste salvar. 'Cobarde', susurran en tus pesadillas.",
        choices: [
          { text: "Fin", next: "ending_escape_con_culpa" }
        ]
      },
      observar_colapso: {
        text: "Observas desde lejos cómo el castillo se derrumba en una explosión de luz y sombras. El mago intentó romper la maldición sin los objetos. Falló. Todo se perdió. Te arrodillas llorando. 'Lo siento... lo siento tanto...' Pero es demasiado tarde.",
        choices: [
          { text: "Fin", next: "ending_escape_con_culpa" }
        ]
      },
      aceptar_mision_mago: {
        text: "'Sabía que tenías el corazón de un héroe', sonríe el mago. 'Te daré esto.' Te entrega un amuleto brillante. 'Te protegerá de la magia oscura. Ahora ve. Trae los tres objetos: la corona, sangre de la princesa y el corazón de cristal. ¿Por dónde comenzarás?'",
        choices: [
          { text: "Buscar información en la biblioteca", next: "ir_biblioteca" },
          { text: "Explorar el gran salón", next: "acercarse_salon" },
          { text: "Ir a las catacumbas", next: "ir_capilla" }
        ]
      },
      buscar_armas_catacumbas: {
        text: "Decides buscar mejores armas antes de enfrentar no-muertos. Vas al arsenal que recordabas. Encuentras una espada de plata y un escudo con grabados sagrados. Perfectos contra criaturas oscuras.",
        choices: [
          { text: "Equiparte y ir a la capilla", next: "ir_capilla" }
        ]
      },
      investigar_catacumbas: {
        text: "Buscas información sobre las catacumbas. En la biblioteca encuentras un libro viejo: 'Las catacumbas guardan a los antiguos reyes. Los no-muertos protegen el Corazón de Cristal. Solo la luz sagrada puede detenerlos.'",
        choices: [
          { text: "Ir preparado a la capilla", next: "ir_capilla" }
        ]
      },
      disfrazado_guardia: {
        text: "Te pones el uniforme de guardia. Te queda perfecto. Con el casco puesto, nadie notará la diferencia. Practicas caminar como ellos: rígido, alerta. Estás listo para infiltrarte.",
        choices: [
          { text: "Ir al gran salón como guardia", next: "infiltrado_salon" },
          { text: "Practicar más tu actuación", next: "practicar_actuacion_guardia" }
        ]
      },
      buscar_mejor_uniforme: {
        text: "Buscas entre más uniformes. Encuentras uno de capitán con insignias doradas. Te daría más autoridad pero también más atención. ¿Arriesgarte?",
        choices: [
          { text: "Tomar el uniforme de capitán", next: "disfraz_capitan" },
          { text: "Mejor el uniforme simple", next: "disfrazado_guardia" }
        ]
      },
      pasadizo_detras_trono: {
        text: "Avanzas por el pasadizo oscuro. Llegas a una pared falsa justo detrás del trono. Escuchas la voz del rey al otro lado. Está hablando solo, su voz suena atormentada. 'No puedo... la oscuridad me consume...'",
        choices: [
          { text: "Esperar el momento perfecto", next: "esperar_momento_corona" },
          { text: "Salir ahora mientras está distraído", next: "salir_detras_trono" }
        ]
      },
      escalar_torre_sur: {
        text: "Comienzas a escalar la hiedra. Es más difícil de lo que pensabas. La hiedra cruje bajo tu peso. Estás a mitad de camino cuando escuchas voces de guardias abajo. Te quedas inmóvil.",
        choices: [
          { text: "Seguir subiendo rápido", next: "subir_rapido_torre" },
          { text: "Quedarte quieto", next: "quieto_escalando" }
        ]
      },
      esperar_cambio_guardia: {
        text: "Te escondes y esperas. Pasa casi una hora. Finalmente los guardias se van y llegan los nuevos. En ese momento de confusión, te mueves hacia la entrada de la torre sur.",
        choices: [
          { text: "Entrar rápido", next: "entrada_torre_sur" }
        ]
      },
      ventana_servicio_torre: {
        text: "Te cuelas por la ventana de servicio. Estás dentro de un pasillo estrecho de la torre. Escuchas pasos arriba. Debe ser donde está la princesa. Hay escaleras de caracol subiendo.",
        choices: [
          { text: "Subir con cuidado", next: "subir_torre_princesa" },
          { text: "Buscar otra ruta", next: "buscar_otra_ruta_princesa" }
        ]
      },
      tomar_agua_bendita: {
        text: "Tomas la vasija con agua bendita. Sientes una calidez reconfortante. El líquido brilla con luz propia. 'Esto me protegerá', piensas. Ahora estás listo para las catacumbas.",
        choices: [
          { text: "Entrar a las catacumbas", next: "entrar_catacumbas" },
          { text: "Buscar más provisiones primero", next: "buscar_provisiones_catacumbas" }
        ]
      },
      entrar_catacumbas_directo: {
        text: "Abres la pesada puerta de piedra sin tomar el agua bendita. Las catacumbas son oscuras y frías. Bajas por escaleras húmedas. De repente, escuchas gemidos y ves figuras espectrales acercándose. Sin protección sagrada, estás en peligro.",
        choices: [
          { text: "Correr de vuelta", next: "huir_catacumbas" },
          { text: "Intentar luchar", next: "luchar_sin_proteccion" }
        ]
      },
      examinar_simbolos_catacumbas: {
        text: "Examinas los símbolos. Representan advertencias: 'Aquí yacen los guardianes eternos. Solo los puros de corazón con bendición divina pueden pasar.' Definitivamente necesitas el agua bendita.",
        choices: [
          { text: "Tomar el agua bendita", next: "tomar_agua_bendita" }
        ]
      },
      infiltrado_salon: {
        text: "Entras al gran salón disfrazado de guardia. Nadie sospecha. Te colocas estratégicamente cerca del trono. El rey está sentado, la corona brilla sobre su cabeza. Otros guardias patrullan. Necesitas un plan.",
        choices: [
          { text: "Esperar que el rey se duerma", next: "esperar_rey_duerma" },
          { text: "Crear una distracción", next: "crear_distraccion_salon" },
          { text: "Acercarte fingiendo revisar algo", next: "acercarse_fingiendo" }
        ]
      },
      practicar_actuacion_guardia: {
        text: "Practicas más. Observas cómo caminan, cómo responden, sus posturas. Te sientes más confiado. Memorizas algunas frases que dicen. 'Listo, ahora sí.'",
        choices: [
          { text: "Ir al gran salón", next: "infiltrado_salon" }
        ]
      },
      disfraz_capitan: {
        text: "Te pones el uniforme de capitán. Te ves imponente. Esto te dará autoridad pero los guardias te reconocerán si eres el capitán verdadero. Es arriesgado pero poderoso.",
        choices: [
          { text: "Usar la autoridad para acercarte al rey", next: "capitan_falso_salon" },
          { text: "Mejor cambiar al uniforme simple", next: "disfrazado_guardia" }
        ]
      },
      esperar_momento_corona: {
        text: "Esperas en silencio. El rey se levanta y camina hacia una ventana. 'Perdóname, Elara... perdóname...' murmura. Está de espaldas, distraído. Es tu oportunidad.",
        choices: [
          { text: "Salir y tomar la corona rápido", next: "tomar_corona_rapido" },
          { text: "Esperar más, es muy arriesgado", next: "esperar_mas_corona" }
        ]
      },
      salir_detras_trono: {
        text: "Sales del pasadizo detrás del trono mientras el rey habla solo. Estás tan cerca que puedes ver la corona brillar. Los guardias están a los lados, no te han visto aún.",
        choices: [
          { text: "Agarrar la corona y correr", next: "agarrar_corona_correr" },
          { text: "Retroceder al pasadizo", next: "pasadizo_detras_trono" }
        ]
      },
      subir_rapido_torre: {
        text: "Subes rápidamente. La hiedra se rompe en algunos puntos pero logras llegar a la ventana. Entras jadeando. Estás en un cuarto de almacenamiento. Escuchas una voz femenina cantando suavemente arriba.",
        choices: [
          { text: "Seguir el sonido", next: "seguir_canto_princesa" }
        ]
      },
      quieto_escalando: {
        text: "Te quedas completamente inmóvil agarrado a la hiedra. Los guardias miran hacia arriba pero es de noche y no te ven bien. '¿Escuchaste algo?' 'Debe ser el viento.' Se van. Respiras aliviado.",
        choices: [
          { text: "Continuar subiendo", next: "subir_rapido_torre" }
        ]
      },
      entrada_torre_sur: {
        text: "Entras rápido a la torre sur. Hay escaleras de caracol subiendo. Las paredes tienen antorchas encendidas. Escuchas música suave desde arriba. La princesa debe estar allí.",
        choices: [
          { text: "Subir las escaleras", next: "subir_torre_princesa" }
        ]
      },
      subir_torre_princesa: {
        text: "Subes cuidadosamente las escaleras. Llegas a una puerta con llave. Tras ella escuchas la voz: 'Si alguien está ahí... por favor... he estado sola tanto tiempo.' Es la princesa Elara.",
        choices: [
          { text: "Hablar con ella a través de la puerta", next: "hablar_princesa_puerta" },
          { text: "Intentar forzar la cerradura", next: "forzar_cerradura_princesa" },
          { text: "Buscar la llave", next: "buscar_llave_torre" }
        ]
      },
      buscar_otra_ruta_princesa: {
        text: "Exploras buscando otra ruta. Encuentras un montaplatos que sube. Es estrecho pero podrías caber. Sería silencioso.",
        choices: [
          { text: "Usar el montaplatos", next: "usar_montaplatos" },
          { text: "Mejor subir por las escaleras", next: "subir_torre_princesa" }
        ]
      },
      entrar_catacumbas: {
        text: "Abres la puerta de piedra con el agua bendita en mano. Las catacumbas se extienden ante ti. Ataúdes de piedra alineados en las paredes, antorchas que se encienden mágicamente a tu paso. Al fondo, ves un resplandor azul. El Corazón de Cristal.",
        choices: [
          { text: "Avanzar directo hacia el resplandor", next: "avanzar_corazon_directo" },
          { text: "Revisar los ataúdes con cuidado", next: "revisar_ataud_catacumbas" },
          { text: "Rociar agua bendita alrededor", next: "rociar_agua_bendita" }
        ]
      },
      buscar_provisiones_catacumbas: {
        text: "Buscas más provisiones en la capilla. Encuentras velas sagradas y un crucifijo de plata. 'Esto podría ayudar', piensas. Te sientes más preparado.",
        choices: [
          { text: "Entrar a las catacumbas ahora", next: "entrar_catacumbas" }
        ]
      },
      huir_catacumbas: {
        text: "Corres de vuelta hacia la puerta. Los espectros te persiguen pero logras salir. La puerta se cierra de golpe. Estás a salvo pero sin el Corazón de Cristal. Necesitas el agua bendita.",
        choices: [
          { text: "Tomar el agua bendita del altar", next: "tomar_agua_bendita" }
        ]
      },
      luchar_sin_proteccion: {
        text: "Intentas luchar contra los espectros pero tu espada atraviesa el aire. Son inmateriales. Uno de ellos te toca y sientes un frío mortal. Tu fuerza se desvanece.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      esperar_rey_duerma: {
        text: "Esperas pacientemente. Pasan las horas. El rey eventualmente cierra los ojos en su trono. Su respiración se vuelve pesada. Los guardias también parecen cansados. Es medianoche.",
        choices: [
          { text: "Acercarte sigilosamente", next: "acercarse_sigiloso_corona" },
          { text: "Esperar más tiempo", next: "esperar_mas_rey" }
        ]
      },
      crear_distraccion_salon: {
        text: "Necesitas una distracción. Ves un candelabro grande. Podrías derribarlo 'accidentalmente'. O podrías fingir que viste un intruso en otra parte del castillo.",
        choices: [
          { text: "Derribar el candelabro", next: "derribar_candelabro" },
          { text: "Gritar sobre un intruso falso", next: "intruso_falso" }
        ]
      },
      acercarse_fingiendo: {
        text: "Te acercas al trono fingiendo ajustar las cortinas cercanas. El rey te mira con ojos vacíos pero no dice nada. Estás a solo dos metros de la corona. Tu corazón late fuerte.",
        choices: [
          { text: "Esperar que mire hacia otro lado", next: "esperar_rey_mire_otro_lado" },
          { text: "Hacer tu movimiento ahora", next: "movimiento_rapido_corona" }
        ]
      },
      capitan_falso_salon: {
        text: "Entras al salón como capitán. Los guardias se cuadran. 'Capitán', dicen. El rey te mira. 'Capitán... acércate. Tengo órdenes.' Tu disfraz funciona pero estás en una situación peligrosa.",
        choices: [
          { text: "Acercarte como ordena", next: "acercarse_como_capitan" },
          { text: "Inventar una excusa y retirarte", next: "excusa_retirarse" }
        ]
      },
      tomar_corona_rapido: {
        text: "Sales del pasadizo y agarras la corona de la cabeza del rey en un movimiento rápido. '¡¿Qué?!' grita el rey. Los guardias reaccionan. Tienes la corona pero ahora debes escapar.",
        choices: [
          { text: "Correr por el pasadizo", next: "huir_pasadizo_corona" },
          { text: "Saltar por la ventana", next: "saltar_ventana_corona" }
        ]
      },
      esperar_mas_corona: {
        text: "Decides esperar más. El rey se da vuelta súbitamente. 'Siento una presencia...' dice. Empiezas a sudar. Los guardias se ponen alertas. Es peligroso.",
        choices: [
          { text: "Quedarte absolutamente quieto", next: "quieto_pasadizo" },
          { text: "Retroceder lentamente", next: "retroceder_pasadizo" }
        ]
      },
      agarrar_corona_correr: {
        text: "Agarras la corona y corres. '¡INTRUSO!' gritan los guardias. El rey ruge de rabia. Corres hacia el pasadizo pero hay guardias bloqueando la salida.",
        choices: [
          { text: "Luchar para pasar", next: "luchar_guardias_corona" },
          { text: "Buscar otra salida", next: "buscar_otra_salida_corona" }
        ]
      },
      seguir_canto_princesa: {
        text: "Subes unas escaleras siguiendo el canto. Llegas a una puerta. Detrás de ella, la voz es clara: 'Canto para no olvidar quién soy... para no volverme como mi padre.' Es la princesa Elara.",
        choices: [
          { text: "Tocar la puerta", next: "tocar_puerta_princesa" },
          { text: "Hablarle a través de la puerta", next: "hablar_princesa_puerta" }
        ]
      },
      hablar_princesa_puerta: {
        text: "'Princesa Elara, vengo a ayudarte. El mago Aldric me envió. Necesito tu ayuda para romper la maldición de tu padre.' Silencio. Luego: '¿Aldric está vivo? ¡Gracias a los dioses! Pero la puerta... solo mi padre tiene la llave.'",
        choices: [
          { text: "Buscar otra forma de abrir", next: "buscar_forma_abrir_puerta" },
          { text: "Ir por la llave con el rey", next: "ir_por_llave_rey" },
          { text: "Forzar la cerradura", next: "forzar_cerradura_princesa" }
        ]
      },
      forzar_cerradura_princesa: {
        text: "Intentas forzar la cerradura con tu daga. Es complicada, mágica. Después de varios intentos, escuchas un clic. ¡Funciona! La puerta se abre.",
        choices: [
          { text: "Entrar", next: "conocer_princesa" }
        ]
      },
      buscar_llave_torre: {
        text: "Buscas por la torre. En un cuarto de guardias encuentras llaves colgadas. Una tiene el símbolo real. Debe ser esta.",
        choices: [
          { text: "Probar la llave", next: "probar_llave_princesa" }
        ]
      },
      usar_montaplatos: {
        text: "Te metes en el montaplatos. Es muy estrecho. Jalas la cuerda y subes lentamente. Es claustrofóbico pero silencioso. Llegas a lo que parece ser una cocina pequeña en el piso de la princesa.",
        choices: [
          { text: "Salir con cuidado", next: "salir_montaplatos_torre" }
        ]
      },
      avanzar_corazon_directo: {
        text: "Avanzas directo hacia el resplandor azul. De repente, los ataúdes comienzan a abrirse. Esqueletos guerreros se levantan con espadas oxidadas. Te rodean. El agua bendita en tu mano brilla más fuerte.",
        choices: [
          { text: "Rociar agua bendita sobre ellos", next: "rociar_agua_esqueletos" },
          { text: "Correr hacia el Corazón de Cristal", next: "correr_corazon" },
          { text: "Luchar con tu espada", next: "luchar_esqueletos" }
        ]
      },
      revisar_ataud_catacumbas: {
        text: "Revisas los ataúdes cuidadosamente. Tienen inscripciones: nombres de reyes antiguos. Uno dice 'Aquí yace el Rey Primero, guardián del corazón sagrado.' Ese ataúd está cerrado con cadenas.",
        choices: [
          { text: "Romper las cadenas", next: "romper_cadenas_ataud" },
          { text: "Dejar ese ataúd y continuar", next: "avanzar_corazon_directo" }
        ]
      },
      rociar_agua_bendita: {
        text: "Rocias agua bendita en un círculo a tu alrededor. Los no-muertos sisean y se alejan. Creas un camino seguro. Avanzas con cuidado, rociando más agua. Llegas cerca del Corazón de Cristal.",
        choices: [
          { text: "Tomar el Corazón de Cristal", next: "tomar_corazon_cristal" },
          { text: "Examinarlo primero", next: "examinar_corazon_cristal" }
        ]
      },
      acercarse_sigiloso_corona: {
        text: "Te acercas sigilosamente. Cada paso es cuidadoso. El rey duerme profundamente. Estás a centímetros de la corona. Extiendes tu mano lentamente.",
        choices: [
          { text: "Tomar la corona suavemente", next: "tomar_corona_suave" },
          { text: "Esperar un momento más", next: "esperar_momento_perfecto_corona" }
        ]
      },
      esperar_mas_rey: {
        text: "Esperas más tiempo. El rey de repente abre los ojos. 'No puedo dormir... nunca puedo dormir.' Se levanta y camina hacia sus aposentos privados. ¡Se está quitando la corona!",
        choices: [
          { text: "Seguirlo a sus aposentos", next: "seguir_aposentos_rey" },
          { text: "Quedarte en el salón", next: "quedarse_salon" }
        ]
      },
      derribar_candelabro: {
        text: "'¡Cuidado!' gritas y 'accidentalmente' derribas el candelabro. Hace un estruendo enorme. Todos los guardias corren hacia allí. El rey se levanta alarmado. En el caos, nadie te mira.",
        choices: [
          { text: "Acercarte al trono ahora", next: "acercarse_trono_caos" },
          { text: "Ayudar a limpiar para no sospechar", next: "ayudar_limpiar" }
        ]
      },
      intruso_falso: {
        text: "'¡Intruso en el ala este!' gritas convincentemente. Los guardias reaccionan inmediatamente. 'Tú, quédate con el rey', te dice el capitán. Todos los demás salen corriendo. Quedas tú y el rey solo.",
        choices: [
          { text: "Aprovechar el momento", next: "aprovechar_momento_solo_rey" },
          { text: "Mantener la actuación", next: "mantener_actuacion" }
        ]
      },
      esperar_rey_mire_otro_lado: {
        text: "Esperas pacientemente. Un sirviente entra con un mensaje. El rey se gira para leerlo. Es tu oportunidad perfecta.",
        choices: [
          { text: "Tomar la corona ahora", next: "tomar_corona_oportunidad" }
        ]
      },
      movimiento_rapido_corona: {
        text: "Haces tu movimiento. Te lanzas y agarras la corona. El rey grita. Los guardias desenvainan sus espadas. Todo pasa en segundos.",
        choices: [
          { text: "Correr hacia la salida", next: "correr_salida_corona" },
          { text: "Usar al rey como escudo", next: "rey_escudo" }
        ]
      },
      acercarse_como_capitan: {
        text: "Te acercas al trono. El rey te mira fijamente. 'Capitán... algo está mal contigo... tus ojos...' Comienza a sospechar. Los guardias se tensan.",
        choices: [
          { text: "Actuar rápido y tomar la corona", next: "actuar_rapido_capitan" },
          { text: "Inventar una excusa", next: "excusa_capitán" }
        ]
      },
      excusa_retirarse: {
        text: "'Majestad, olvidé... debo revisar las murallas urgentemente.' El rey asiente lentamente. Sales del salón. Tu disfraz funcionó pero no tienes la corona.",
        choices: [
          { text: "Idear otro plan", next: "mision_corona" }
        ]
      },
    huir_pasadizo_corona: {
  text: "Corres por el pasadizo con la corona en mano. Los guardias te persiguen pero conoces mejor este camino. Sales por una salida secreta en la biblioteca.",
 choices: [
  { text: "Ir a la torre del mago", next: "torre" },
  { text: "Esconderte en la biblioteca", next: "puerta_tallada" }
]
},
      saltar_ventana_corona: {
        text: "Saltas por la ventana del salón con la corona. Caes en un jardín dos pisos abajo. El impacto duele pero estás vivo. Escuchas gritos arriba.",
        choices: [
          { text: "Correr hacia la torre del mago", next: "correr_torre_mago" },
          { text: "Esconderte en el jardín", next: "esconderse_jardin" }
        ]
      },
      quieto_pasadizo: {
        text: "Te quedas absolutamente inmóvil. El rey mira hacia el pasadizo pero no ve nada. 'Mi mente me traiciona', murmura. Se aleja. Respiras.",
        choices: [
          { text: "Esperar otra oportunidad", next: "esperar_momento_corona" }
        ]
      },
      retroceder_pasadizo: {
        text: "Retrocedes lentamente por el pasadizo. Mejor no arriesgarse ahora. Necesitas otro plan para conseguir la corona.",
        choices: [
          { text: "Volver a planear", next: "mision_corona" }
        ]
      },
      luchar_guardias_corona: {
        text: "Peleas contra los guardias. Son muchos pero estás desesperado. Logras herir a algunos pero te superan en número. Te capturan.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      buscar_otra_salida_corona: {
        text: "Buscas desesperadamente otra salida. Ves una ventana alta. Sin opciones, corres y saltas a través del vidrio. Caes en el jardín exterior, herido pero con la corona.",
        choices: [
          { text: "Huir hacia la torre del mago", next: "huir_herido_mago" }
        ]
      },
      rociar_agua_esqueletos: {
        text: "Rocias el agua bendita sobre los esqueletos. Sisean y se desintegran en polvo. El camino queda despejado. El Corazón de Cristal brilla al fondo esperándote.",
        choices: [
          { text: "Tomar el Corazón de Cristal", next: "tomar_corazon_cristal" }
        ]
      },
      correr_corazon: {
        text: "Corres esquivando esqueletos hacia el Corazón de Cristal. Varios te atacan pero logras llegar. Lo agarras y una luz brillante explota desintegrando a todos los no-muertos. Silencio.",
        choices: [
          { text: "Examinar el Corazón", next: "examinar_corazon_obtenido" },
          { text: "Salir rápido de las catacumbas", next: "salir_catacumbas_corazon" }
        ]
      },
      luchar_esqueletos: {
        text: "Luchas contra los esqueletos con tu espada. Son lentos pero numerosos. Destruyes varios pero más siguen levantándose. Estás agotándote.",
        choices: [
          { text: "Usar el agua bendita ahora", next: "rociar_agua_esqueletos" },
          { text: "Retirarte", next: "retirarte_catacumbas" }
        ]
      },
      romper_cadenas_ataud: {
        text: "Rompes las cadenas del ataúd del Rey Primero. Se abre lentamente. Dentro no hay un esqueleto, sino una armadura completa brillando con luz dorada. '¿Eres digno?' resuena una voz.",
        choices: [
          { text: "Tomar la armadura", next: "tomar_armadura_rey" },
          { text: "Cerrar el ataúd respetuosamente", next: "cerrar_ataud_continuar" }
        ]
      },
      tomar_corazon_cristal: {
        text: "Tomas el Corazón de Cristal. Es cálido al tacto y pulsa como si estuviera vivo. Una voz susurra: 'El corazón puro ha llegado.' Sientes poder fluyendo. Tienes uno de los tres objetos.",
        choices: [
          { text: "Volver con el mago", next: "volver_mago_con_corazon" },
          { text: "Continuar con las otras misiones", next: "decidir_siguiente_mision" }
        ]
      },
      examinar_corazon_cristal: {
        text: "Examinas el Corazón antes de tomarlo. Está sobre un pedestal con inscripciones: 'Quien tome el corazón, carga con la responsabilidad del reino.' Es una decisión importante.",
        choices: [
          { text: "Tomarlo con determinación", next: "tomar_corazon_cristal" },
          { text: "Reconsiderar", next: "reconsiderar_corazon" }
        ]
      },
      examinar_corazon_obtenido: {
        text: "El Corazón brilla en tus manos. Sientes que te protege. Es uno de los tres objetos que el mago necesita. Aún faltan la corona y la sangre de la princesa.",
        choices: [
          { text: "Salir de las catacumbas", next: "salir_catacumbas_corazon" }
        ]
      },
      salir_catacumbas_corazon: {
        text: "Sales de las catacumbas con el Corazón de Cristal. La capilla está tranquila. Has completado una de las tres misiones del mago.",
        choices: [
          { text: "Ir con el mago", next: "volver_mago_con_corazon" },
          { text: "Continuar con otra misión", next: "decidir_siguiente_mision" }
        ]
      },
      retirarte_catacumbas: {
        text: "Te retiras hacia la salida. Los esqueletos no te persiguen más allá de cierto punto. Estás a salvo pero sin el Corazón de Cristal.",
        choices: [
          { text: "Intentar otra estrategia", next: "ir_capilla" }
        ]
      },
      tomar_armadura_rey: {
        text: "Tomas la armadura del Rey Primero. Se ajusta perfectamente a tu cuerpo. Sientes un poder antiguo. 'Protege el reino', susurra la voz antes de desvanecerse. Estás más fuerte ahora.",
        choices: [
          { text: "Continuar hacia el Corazón de Cristal", next: "avanzar_corazon_directo" }
        ]
      },
      cerrar_ataud_continuar: {
        text: "Cierras el ataúd respetuosamente. 'Sabiduría', susurra la voz aprobatoriamente. Continúas tu camino hacia el Corazón de Cristal.",
        choices: [
          { text: "Avanzar", next: "avanzar_corazon_directo" }
        ]
      },
      
      reconsiderar_corazon: {
        text: "Dudas un momento. Pero recuerdas que el mago lo necesita para salvar el reino. Es tu responsabilidad.",
        choices: [
          { text: "Tomarlo", next: "tomar_corazon_cristal" }
        ]
      },
      tomar_corona_suave: {
        text: "Levantas la corona suavemente de la cabeza del rey dormido. Casi la tienes... De repente el rey abre los ojos. '¿Tú?' Te mira confundido. Tienes segundos para actuar.",
        choices: [
          { text: "Correr con la corona", next: "correr_con_corona_salon" },
          { text: "Explicar la situación", next: "explicar_rey_corona" }
        ]
      },
      esperar_momento_perfecto_corona: {
        text: "Esperas el momento absolutamente perfecto. El rey se hunde más en el sueño. Su respiración es profunda. Ahora. Extiendes tu mano y tomas la corona sin hacer ruido. ¡Lo lograste!",
        choices: [
          { text: "Escapar sigilosamente", next: "escapar_sigiloso_corona" }
        ]
      },
      seguir_aposentos_rey: {
        text: "Sigues al rey a sus aposentos privados manteniéndote en las sombras. Entra a su habitación y coloca la corona en un pedestal junto a su cama. Sale hacia el balcón dejando la puerta entreabierta.",
        choices: [
          { text: "Entrar y tomar la corona", next: "entrar_aposentos_corona" },
          { text: "Esperar que se duerma", next: "esperar_rey_duerma_aposentos" }
        ]
      },
      quedarse_salon: {
        text: "Te quedas en el salón. El rey no regresa en horas. Los guardias comienzan a mirarte con sospecha. 'Llevas mucho tiempo parado ahí', dice uno.",
        choices: [
          { text: "Inventar excusa", next: "inventar_excusa_guardia" },
          { text: "Retirarte", next: "retirarte_salon" }
        ]
      },
      acercarse_trono_caos: {
        text: "En el caos del candelabro caído, te acercas al trono. El rey está distraído gritando órdenes. La corona está ahí, sin vigilancia por un momento.",
        choices: [
          { text: "Tomar la corona rápido", next: "tomar_corona_caos" },
          { text: "Esperar más", next: "esperar_mas_caos" }
        ]
      },
      ayudar_limpiar: {
        text: "Ayudas a limpiar el desastre para no levantar sospechas. El rey eventualmente se calma y vuelve a sentarse. Tu plan falló pero no sospechan de ti.",
        choices: [
          { text: "Intentar otro plan", next: "mision_corona" }
        ]
      },
      aprovechar_momento_solo_rey: {
        text: "Estás solo con el rey. Él te mira. 'Guardia... acércate.' No tiene idea de tus intenciones. Estás a metros de la corona.",
        choices: [
          { text: "Acercarte y tomar la corona", next: "tomar_corona_solo_rey" },
          { text: "Mantener la actuación y esperar", next: "mantener_actuacion" }
        ]
      },
      mantener_actuacion: {
        text: "Mantienes la actuación. 'Todo despejado, majestad', dices. Los guardias regresan. 'Falsa alarma.' Perdiste tu oportunidad.",
        choices: [
          { text: "Retirarte y planear de nuevo", next: "mision_corona" }
        ]
      },
      tomar_corona_oportunidad: {
        text: "Aprovechas que el rey está distraído y tomas la corona en un movimiento rápido. El sirviente grita. El rey se gira furioso. '¡LADRON!'",
        choices: [
          { text: "Correr hacia la salida", next: "correr_salida_corona" },
          { text: "Saltar por la ventana", next: "saltar_ventana_corona" }
        ]
      },
      correr_salida_corona: {
        text: "Corres hacia la salida del salón con la corona. Los guardias te persiguen. Llegas al pasillo principal. Hay una escalera bajando y una subiendo.",
        choices: [
          { text: "Bajar corriendo", next: "bajar_escaleras_corona" },
          { text: "Subir a la torre", next: "subir_torre_corona" }
        ]
      },
      rey_escudo: {
        text: "Intentas usar al rey como escudo pero los guardias son más rápidos. Te desarman y capturan. El rey grita enloquecido.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      actuar_rapido_capitan: {
        text: "Actúas rápido. Agarras la corona. '¡Es un impostor!' grita el rey. Los guardias se lanzan sobre ti.",
        choices: [
          { text: "Luchar", next: "luchar_guardias_corona" },
          { text: "Huir", next: "correr_salida_corona" }
        ]
      },
      excusa_capitán: {
        text: "'Majestad, he estado trabajando demasiado. Necesito descansar.' El rey te mira con desconfianza pero asiente. 'Ve.' Sales sin la corona.",
        choices: [
          { text: "Replantear estrategia", next: "mision_corona" }
        ]
      },
         
      correr_torre_mago: {
        text: "Corres hacia la torre del mago con la corona. Escuchas persecución atrás pero llegas primero. Subes las escaleras rápido.",
        choices: [
          { text: "Entrar con el mago", next: "volver_mago_con_corona" }
        ]
      },
      esconderse_jardin: {
        text: "Te escondes entre los arbustos del jardín con la corona. Los guardias pasan buscándote pero no te encuentran. Cuando se van, sales con cuidado.",
        choices: [
          { text: "Ir con el mago", next: "correr_torre_mago" }
        ]
      },
      huir_herido_mago: {
        text: "Herido pero determinado, llegas a la torre del mago. 'Lo lograste... admirable', dice al ver tu estado y la corona. Te cura con magia.",
        choices: [
          { text: "Descansar y continuar", next: "volver_mago_con_corona" }
        ]
      },
      correr_con_corona_salon: {
        text: "Corres con la corona. El rey grita. Los guardias reaccionan pero estás cerca de la salida.",
        choices: [
          { text: "Seguir corriendo", next: "correr_salida_corona" }
        ]
      },
      explicar_rey_corona: {
        text: "'Majestad, el mago Aldric puede salvarte de la maldición. Necesita esta corona.' El rey te mira confundido. '¿Aldric... vive?' Por un momento parece el rey de antes.",
        choices: [
          { text: "Convencerlo de ayudar", next: "convencer_rey_ayuda" },
          { text: "Tomar la corona y correr", next: "correr_con_corona_salon" }
        ]
      },
      escapar_sigiloso_corona: {
        text: "Escapas sigilosamente del salón con la corona. Nadie se despierta. Sales al pasillo. ¡Lo lograste sin alertar a nadie!",
        choices: [
          { text: "Ir con el mago", next: "volver_mago_con_corona" }
        ]
      },
      entrar_aposentos_corona: {
        text: "Entras sigilosamente a los aposentos. La corona brilla en el pedestal. La tomas. Detrás de ti escuchas: 'Así que un ladrón...'",
        choices: [
          { text: "Correr", next: "correr_aposentos" },
          { text: "Enfrentar al rey", next: "enfrentar_rey_aposentos" }
        ]
      },
      esperar_rey_duerma_aposentos: {
        text: "Esperas escondido. El rey regresa del balcón y se acuesta. Después de un rato, duerme. Te acercas al pedestal.",
        choices: [
          { text: "Tomar la corona", next: "tomar_corona_aposentos_dormido" }
        ]
      },
      inventar_excusa_guardia: {
        text: "'Estoy vigilando esa columna, órdenes del capitán', mientes. El guardia no parece convencido pero asiente.",
        choices: [
          { text: "Retirarte discretamente", next: "retirarte_salon" }
        ]
      },
      retirarte_salon: {
        text: "Te retiras del salón sin la corona. Necesitas un mejor plan.",
        choices: [
          { text: "Replantear estrategia", next: "mision_corona" }
        ]
      },
      tomar_corona_caos: {
        text: "En el caos, agarras la corona y te la guardas bajo el uniforme. Nadie lo nota. Sigues actuando como guardia.",
        choices: [
          { text: "Retirarte 'a patrullar'", next: "retirarse_con_corona" }
        ]
      },
      esperar_mas_caos: {
        text: "Esperas más pero el caos se calma rápido. El rey vuelve al trono. Perdiste la oportunidad.",
        choices: [
          { text: "Intentar otro plan", next: "mision_corona" }
        ]
      },
      tomar_corona_solo_rey: {
        text: "Te acercas y en un movimiento rápido tomas la corona. El rey grita '¡TRAICION!' pero estás más cerca de la salida que él del resto de guardias.",
        choices: [
          { text: "Correr", next: "correr_salida_corona" }
        ]
      },
      bajar_escaleras_corona: {
        text: "Bajas las escaleras corriendo. Llegas a un nivel inferior. Hay una puerta que lleva a las cocinas y otra al patio.",
        choices: [
          { text: "Ir a las cocinas", next: "cocinas" },
          { text: "Salir al patio", next: "salir_patio_corona" }
        ]
      },
      subir_torre_corona: {
        text: "Subes corriendo a la torre. Llegas a la torre del mago. '¡Entra rápido!' grita. Cierras la puerta tras de ti.",
        choices: [
          { text: "Entregarle la corona", next: "volver_mago_con_corona" }
        ]
      },
      decidir_siguiente_mision_corona: {
        text: "Tienes la corona escondida. Aún necesitas el Corazón de Cristal y la sangre de la princesa. ¿Qué harás primero?",
        choices: [
          { text: "Ir por el Corazón de Cristal", next: "mision_catacumbas" },
          { text: "Ir por la princesa", next: "mision_princesa" }
        ]
      },
      convencer_rey_ayuda: {
        text: "'Por favor, majestad. Aldric puede salvarte. Salvarnos a todos.' El rey lucha contra la oscuridad en su mente. 'Yo... no puedo...' dice antes de colapsar. Tomas la corona mientras está inconsciente.",
        choices: [
          { text: "Llevar la corona al mago", next: "volver_mago_con_corona" }
        ]
      },
      correr_aposentos: {
        text: "Corres de los aposentos con la corona. El rey grita por guardias pero escapas rápido.",
        choices: [
          { text: "Ir con el mago", next: "correr_torre_mago" }
        ]
      },
      enfrentar_rey_aposentos: {
        text: "Te das vuelta enfrentando al rey. 'Vine a salvarte. El mago Aldric puede romper tu maldición.' El rey duda. '¿Aldric...?' Hay un destello de lucidez.",
        choices: [
          { text: "Aprovechar para convencerlo", next: "convencer_rey_ayuda" }
        ]
      },
      tomar_corona_aposentos_dormido: {
        text: "Tomas la corona silenciosamente del pedestal. El rey sigue durmiendo. Sales de los aposentos sin hacer ruido. ¡Éxito!",
        choices: [
          { text: "Ir con el mago", next: "volver_mago_con_corona" }
        ]
      },
      retirarse_con_corona: {
        text: "'Voy a patrullar', dices y sales del salón con la corona escondida. Nadie sospecha. ¡Lo lograste!",
        choices: [
          { text: "Ir con el mago", next: "volver_mago_con_corona" }
        ]
      },
      salir_patio_corona: {
        text: "Sales al patio. Hay guardias pero también sombras donde esconderse. La torre del mago está visible desde aquí.",
        choices: [
          { text: "Correr a la torre", next: "correr_torre_mago" },
          { text: "Moverte en las sombras", next: "sombras_patio_corona" }
        ]
      },
      sombras_patio_corona: {
        text: "Te mueves sigilosamente por las sombras del patio. Los guardias no te ven. Llegas a la entrada de la torre del mago.",
        choices: [
          { text: "Entrar", next: "volver_mago_con_corona" }
        ]
      },
      volver_mago_con_corona: {
  text: "Regresas a la torre del mago con la corona real. '¡Lo lograste!', exclama el mago. 'La corona del rey maldito. Ahora necesitamos la sangre de la princesa y el Corazón de Cristal. ¿Qué hacemos primero?'",
  choices: [
    { text: "Buscar a la princesa en la torre sur", next: "buscar_princesa_torre_sur" },
    { text: "Ir a las catacumbas por el corazón", next: "ir_catacumbas_corazon" },
    { text: "Planear con más cuidado", next: "planear_estrategia" }
  ]
},

      tocar_puerta_princesa: {
        text: "Tocas la puerta. Silencio. Luego una voz suave: '¿Quién eres? Nadie viene aquí excepto... ¿eres real o estoy soñando de nuevo?'",
        choices: [
          { text: "Decirle que eres real", next: "decir_real_princesa" },
          { text: "Explicar tu misión", next: "explicar_mision_princesa" }
        ]
      },
      buscar_forma_abrir_puerta: {
        text: "Buscas otra forma de abrir. La puerta tiene bisagras viejas. Con tu espada podrías forzarlas. O podrías buscar la llave con el rey.",
        choices: [
          { text: "Forzar las bisagras", next: "forzar_bisagras_puerta" },
          { text: "Buscar la llave con el rey", next: "ir_por_llave_rey" }
        ]
      },
      ir_por_llave_rey: {
        text: "Decides ir por la llave que el rey guarda. Es extremadamente peligroso. Tendrás que infiltrarte en sus aposentos o robársela mientras duerme.",
        choices: [
          { text: "Infiltrarte en sus aposentos", next: "infiltrar_aposentos_llave" },
          { text: "Esperar que duerma", next: "esperar_rey_duerma_llave" }
        ]
      },
      conocer_princesa: {
        text: "Entras. La princesa Elara está frente a ti. Tiene el cabello largo oscuro y ojos tristes pero llenos de esperanza. 'Por fin... alguien vino.' Lágrimas corren por su rostro. 'El mago Aldric me envió', explicas. '¿Necesitas mi sangre para romper la maldición?' pregunta. Asientes. 'Tómala. Haré lo que sea por salvar a mi padre.'",
        choices: [
          { text: "Tomar una gota de sangre", next: "tomar_sangre_princesa" },
          { text: "Preguntarle sobre la maldición", next: "preguntar_maldicion_princesa" }
        ]
      },
      probar_llave_princesa: {
        text: "Pruebas la llave en la cerradura. Encaja perfectamente. La puerta se abre con un clic. Entras.",
        choices: [
          { text: "Conocer a la princesa", next: "conocer_princesa" }
        ]
      },
      salir_montaplatos_torre: {
        text: "Sales del montaplatos a una cocina pequeña. Hay una puerta que lleva a un pasillo. Escuchas el canto de la princesa cerca.",
        choices: [
          { text: "Seguir el sonido", next: "seguir_canto_princesa" }
        ]
      },
      decir_real_princesa: {
        text: "'Soy real. Vine a ayudarte. El mago Aldric me envió.' 'Aldric...' susurra esperanzada. '¿Puede salvar a mi padre?' 'Sí, pero necesita tu ayuda.'",
        choices: [
          { text: "Explicar lo que necesita", next: "explicar_necesidad_sangre" }
        ]
      },
      explicar_mision_princesa: {
        text: "'Vine a salvarte y salvar a tu padre. El mago Aldric puede romper la maldición pero necesita tres objetos: la corona, tu sangre, y el Corazón de Cristal.' 'Haré lo que sea', responde inmediatamente.",
        choices: [
          { text: "Abrir la puerta primero", next: "forzar_cerradura_princesa" }
        ]
      },
      forzar_bisagras_puerta: {
        text: "Fuerzas las bisagras con tu espada. Son viejas y ceden. La puerta se abre parcialmente. Es suficiente para entrar.",
        choices: [
          { text: "Entrar", next: "conocer_princesa" }
        ]
      },
      infiltrar_aposentos_llave: {
        text: "Te infiltras en los aposentos del rey. Buscas la llave entre sus pertenencias. La encuentras en un cajón junto a su cama. El rey está en el salón.",
        choices: [
          { text: "Tomar la llave y salir", next: "tomar_llave_volver_princesa" }
        ]
      },
      esperar_rey_duerma_llave: {
        text: "Esperas escondido hasta que el rey se duerme en sus aposentos. Te acercas sigilosamente y ves la llave en una cadena alrededor de su cuello.",
        choices: [
          { text: "Intentar quitársela", next: "quitar_llave_cuello" },
          { text: "Buscar otra llave", next: "buscar_otra_llave" }
        ]
      },
      tomar_sangre_princesa: {
        text: "Con un pequeño corte en su dedo, tomas una gota de su sangre en un frasco. 'Esto salvará a tu padre', le aseguras. 'Gracias', dice ella. 'Ahora tienes todo lo que el mago necesita.'",
        choices: [
          { text: "Regresar con el mago", next: "volver_mago_con_todo" },
          { text: "Llevarla contigo", next: "llevar_princesa_mago" }
        ]
      },
      preguntar_maldicion_princesa: {
        text: "'Mi padre no siempre fue así', explica. 'Cuando mi madre y hermanos murieron en la plaga, él... cambió. Un hechicero oscuro le prometió traerlos de vuelta pero era mentira. La maldición lo consumió.' Lágrimas caen. 'Por favor, sálvalo.'",
        choices: [
          { text: "Prometerle que lo harás", next: "prometer_salvar_rey" }
        ]
      },
      explicar_necesidad_sangre: {
        text: "'Necesito una gota de tu sangre para el ritual.' 'Lo entiendo', dice valientemente. 'Mi sangre por la salvación de mi padre. Ábreme esta puerta.'",
        choices: [
          { text: "Abrir la puerta", next: "forzar_cerradura_princesa" }
        ]
      },
      tomar_llave_volver_princesa: {
        text: "Tomas la llave y regresas a la torre de la princesa. Abres la puerta.",
        choices: [
          { text: "Entrar", next: "conocer_princesa" }
        ]
      },
      quitar_llave_cuello: {
        text: "Intentas quitarle la llave del cuello. El rey se mueve en sueños. 'Elara... perdóname...' murmura. Logras quitarla sin despertarlo.",
        choices: [
          { text: "Ir a liberar a la princesa", next: "probar_llave_princesa" }
        ]
      },
      buscar_otra_llave: {
        text: "Buscas otra llave por la habitación. Encuentras un juego de llaves maestras en un armario. Una debe servir.",
        choices: [
          { text: "Probarlas en la torre", next: "probar_llave_princesa" }
        ]
      },
      volver_mago_con_todo: {
        text: "Regresas con el mago con los tres objetos: la corona, el Corazón de Cristal y la sangre de la princesa. '¡Lo lograste! Eres extraordinario. Ahora podemos romper la maldición.' El mago comienza el ritual.",
        choices: [
          { text: "Observar el ritual", next: "ritual_final" }
        ]
      },
      llevar_princesa_mago: {
        text: "'Ven conmigo', le dices a la princesa. 'Quiero estar presente cuando salven a mi padre', responde. Juntos van a la torre del mago con los tres objetos.",
        choices: [
          { text: "Entregar todo al mago", next: "ritual_final_con_princesa" }
        ]
      },
      prometer_salvar_rey: {
        text: "'Te lo prometo. Salvaré a tu padre.' Ella sonríe por primera vez. 'Entonces toma lo que necesites.'",
        choices: [
          { text: "Tomar la gota de sangre", next: "tomar_sangre_princesa" }
        ]
      },
      ritual_final: {
        text: "El mago coloca los tres objetos en un círculo mágico. La corona, el Corazón de Cristal brillante, y la sangre de Elara. Comienza a cantar en un idioma antiguo. Una luz cegadora llena la torre. El castillo entero tiembla. Escuchas el rugido del rey transformándose en un grito de liberación. La oscuridad se disipa. El ritual funcionó.",
        choices: [
          { text: "Ver el resultado", next: "ending_success_magic" }
        ]
      },
      ritual_final_con_princesa: {
        text: "El mago realiza el ritual mientras la princesa observa con esperanza. La luz mágica envuelve el castillo. De repente, la puerta se abre. El rey entra, pero sus ojos ya no están vacíos. 'Elara... mi niña...' dice con voz clara. Padre e hija se abrazan llorando. La maldición se rompió. El mago sonríe. 'Lo logramos.'",
        choices: [
          { text: "Celebrar la victoria", next: "ending_success_magic" }
        ]
      },

      ayudar_mago_pelea: {
        text: "'No te dejaré solo', dices. El mago te mira con gravedad. 'Tu valentía me honra. Pero escucha: puedo intentar romper la maldición ahora con fuerza bruta, pero es arriesgado. O podemos hacer el ritual correcto con los tres objetos sagrados. Es más seguro pero más difícil.'",
        choices: [
          { text: "Intentar romperla ahora con fuerza bruta", next: "batalla_magica_arriesgada" },
          { text: "Hacer el ritual correcto", next: "aceptar_mision_mago" },
          { text: "Preguntar sobre los riesgos", next: "preguntar_riesgos_mago" }
        ]
      },
      batalla_magica_arriesgada: {
        text: "'Hagámoslo ahora', decides. El mago asiente seriamente. Juntos van al gran salón. El rey está en su trono. El mago levanta su báculo. '¡Ahora!' grita. Una batalla mágica explota. Rayos de luz chocan contra sombras oscuras. Ayudas distrayendo a los guardias pero la magia oscura es poderosa.",
        choices: [
          { text: "Seguir luchando", next: "resultado_batalla_magica" },
          { text: "Proteger al mago", next: "proteger_mago_batalla" }
        ]
      },
      preguntar_riesgos_mago: {
        text: "'¿Qué riesgos hay?' El mago suspira. 'Si ataco la maldición directamente sin los objetos sagrados, podría fallar y la explosión mágica destruiría el castillo con todos dentro. Con el ritual correcto, es seguro al 100%. Tú decides.'",
        choices: [
          { text: "Arriesgarse con la batalla", next: "batalla_magica_arriesgada" },
          { text: "Hacer el ritual seguro", next: "aceptar_mision_mago" }
        ]
      },
      resultado_batalla_magica: {
        text: "La batalla es intensa. El mago lucha valientemente pero la maldición es demasiado fuerte sin los objetos sagrados. Una explosión de energía oscura erupciona. El castillo tiembla violentamente. '¡No puedo contenerla!' grita el mago.",
        choices: [
          { text: "Intentar ayudarlo", next: "ayudar_contener_explosion" },
          { text: "Huir antes de que colapse", next: "huir_colapso_castillo" }
        ]
      },
      proteger_mago_batalla: {
        text: "Te interpones entre el mago y los guardias. Bloqueas ataques permitiéndole concentrarse. El mago canaliza todo su poder. Por un momento parece que funciona... pero luego la magia oscura contraataca.",
        choices: [
          { text: "Continuar", next: "resultado_batalla_magica" }
        ]
      },
      ayudar_contener_explosion: {
        text: "Intentas ayudar al mago a contener la explosión pero no tienes magia. La energía oscura te golpea lanzándote contra la pared. Todo se vuelve blanco. Cuando despiertas, estás fuera del castillo. El mago te salvó pero el castillo colapsó. El rey y todos dentro... muertos. 'Lo siento', murmura el mago débilmente antes de desvanecerse.",
        choices: [
          { text: "Fin", next: "ending_victoria_tragica" }
        ]
      },
      huir_colapso_castillo: {
        text: "Huyes mientras el castillo se derrumba. Piedras caen por todas partes. Logras salir justo antes del colapso final. El castillo queda en ruinas. El mago, el rey, la princesa... todos perdidos. Sobreviviste pero fallaste.",
        choices: [
          { text: "Fin", next: "ending_supervivencia" }
        ]
      },
      intentar_romper_sellos: {
  text: "Golpeas los sellos con tu espada pero estos brillan y te lanzan hacia atrás. Una descarga mágica te deja aturdido. '¡Te advertí!' dice el mago desde dentro. 'No se pueden romper con fuerza bruta.'",
  choices: [
    { text: "Recuperarte y escuchar al mago", next: "preguntar_sellos" },
    { text: "Intentar de nuevo más fuerte", next: "intentar_romper_otra_vez" },
    { text: "Rendirse y dejarlo ahí", next: "abandonar_mago_torre" }
  ]
},
intentar_romper_otra_vez: {
  text: "Ignoras la advertencia y golpeas de nuevo con más fuerza. Los sellos estallan con energía. La descarga es más fuerte esta vez. Te lanza escaleras abajo. Te duele todo el cuerpo. '¡Necio!' grita el mago. 'Si sigues así, morirás.'",
  choices: [
    { text: "Escucharlo esta vez", next: "preguntar_sellos" },
    { text: "Rendirse e irse", next: "abandonar_mago_torre" }
  ]
},
abandonar_mago_torre: {
  text: "'No puedo ayudarte', le dices al mago. 'Lo siento.' Bajas de la torre. El mago grita tras de ti: '¡Cobarde! ¡Era nuestra única esperanza!' Sus palabras te persiguen mientras te alejas.",
  choices: [
    { text: "Buscar otra forma de escapar", next: "buscar_otra_forma_escapar" },
    { text: "Reconsiderar y volver", next: "volver_con_mago" }
  ]
},
buscar_otra_forma_escapar: {
  text: "Decides buscar tu propia salida sin ayudar al mago. Exploras el castillo buscando una ruta de escape.",
  choices: [
    { text: "Ir a las cocinas", next: "cocinas" },
    { text: "Ir a las mazmorras", next: "mazmorras" },
    { text: "Buscar en el gran salón", next: "acercarse_salon" }
  ]
},
volver_con_mago: {
  text: "La culpa te consume. Vuelves a la torre. 'Sabía que regresarías', dice el mago. 'Aún hay tiempo. Ayúdame.'",
  choices: [
    { text: "Aceptar buscar el báculo", next: "aceptar_buscar_baculo" },
    { text: "Preguntar sobre otra forma", next: "preguntar_sellos" }
  ]
},
      preguntar_sellos: {
        text: "'Los sellos fueron puestos por el rey cuando enloqueció', explica el mago. 'Solo pueden romperse con sangre real o con mi báculo, que el capitán de la guardia robó y escondió en algún lugar del castillo.'",
        choices: [
          { text: "Buscar el báculo", next: "aceptar_buscar_baculo" },
          { text: "Buscar sangre real", next: "buscar_sangre_real" }
        ]
      },
      buscar_sangre_real: {
  text: "Buscas por el castillo algún descendiente real. Exploras varias habitaciones. En una biblioteca encuentras registros familiares: 'Princesa Elara, única heredera, encerrada en la torre sur.' ¡Hay una heredera!",
  choices: [
    { text: "Ir a buscar a la princesa", next: "mision_princesa" },
    { text: "Mejor buscar el báculo", next: "aceptar_buscar_baculo" }
  ]
},
      cocinas: {
        text: "Las cocinas están abandonadas pero el fuego aún arde bajo un caldero enorme. El olor a comida rancia es abrumador. Hay cuchillos en una mesa y tras el horno de piedra ves una entrada oscura que parece descender. Escuchas relinchos de caballos a lo lejos.",
        choices: [
          { text: "Entrar al pasadizo", next: "pasadizo_cocinas" },
          { text: "Buscar comida", next: "buscar_comida" },
          { text: "Tomar cuchillos", next: "tomar_cuchillos" }
        ]
      },
      pasadizo_cocinas: {
        text: "Entras al pasadizo. Es un túnel estrecho que desciende. El aire es frío y húmedo. Después de varios minutos caminando, ves luz al final. Emerges en los establos pero escuchas voces de guardias. Alguien bloqueó la puerta principal con cadenas.",
        choices: [
          { text: "Buscar las llaves en la oficina del capitán", next: "buscar_llaves_capitan" },
          { text: "Volver y buscar otro camino", next: "cocinas" }
        ]
      },
      buscar_llaves_capitan: {
        text: "Buscas la oficina del capitán. Está en el segundo piso de los establos. La puerta está cerrada pero puedes forzarla o buscar otra entrada por la ventana.",
        choices: [
          { text: "Forzar la puerta", next: "forzar_puerta_capitan" },
          { text: "Entrar por la ventana", next: "ventana_oficina_capitan" }
        ]
      },
      forzar_puerta_capitan: {
        text: "Fuerzas la puerta haciendo ruido. Entras rápido y buscas las llaves pero el ruido alertó a los guardias. Escuchas pasos subiendo las escaleras.",
        choices: [
          { text: "Saltar por la ventana con las llaves", next: "saltar_ventana_llaves" },
          { text: "Esconderte en la oficina", next: "esconderse_oficina" }
        ]
      },
      ventana_oficina_capitan: {
        text: "Trepas silenciosamente por la ventana. La oficina está vacía. Encuentras las llaves colgadas en la pared junto a un mapa del castillo y una espada.",
        choices: [
          { text: "Tomar las llaves y volver a los establos", next: "volver_establos_llaves" },
          { text: "Examinar el mapa primero", next: "examinar_mapa_capitan" }
        ]
      },
      saltar_ventana_llaves: {
        text: "Saltas por la ventana con las llaves. Caes mal y te tuerces el tobillo pero logras llegar cojeando hasta los establos. Los guardias están revisando la oficina arriba.",
        choices: [
          { text: "Montar rápido y escapar", next: "escape_herido_establos" },
          { text: "Esconderte hasta que se vayan", next: "esperar_guardias_establos" }
        ]
      },
      volver_establos_llaves: {
        text: "Bajas con las llaves. Los establos están tranquilos. Usas las llaves para abrir las cadenas de la puerta. Los caballos relinchan suavemente. La libertad está cerca.",
        choices: [
          { text: "Montar y galopar hacia la libertad", next: "ending_escape_simple" },
          { text: "Ir a pie sin hacer ruido", next: "escape_pie_bosque" }
        ]
      },
      escape_herido_establos: {
        text: "Montas el caballo a pesar del dolor. Galopas hacia la salida pero tu tobillo herido te hace perder el equilibrio. Logras mantenerte montado pero el caballo está asustado.",
        choices: [
          { text: "Calmarlo y seguir despacio", next: "calmar_caballo_escape" },
          { text: "Galopar sin control hacia el bosque", next: "galope_desesperado" }
        ]
      },
      buscar_oficina_capitan: {
        text: "Revisas más a fondo. Encuentras una bolsa con monedas de oro, un documento sobre el mago prisionero y una daga ceremonial. También hay una poción en un estante.",
        choices: [
          { text: "Tomar todo y salir", next: "volver_establos_llaves" },
          { text: "Leer el documento primero", next: "leer_documento_mago" },
          { text: "Beber la poción", next: "beber_pocion_oficina" }
        ]
      },
      escape_pie_bosque: {
        text: "Sales caminando silenciosamente. La noche te protege. Llegas al borde del bosque sin ser detectado. El castillo queda atrás, sus torres oscuras contra el cielo estrellado.",
        choices: [
          { text: "Adentrarte en el bosque", next: "ending_escape_simple" }
        ]
      },
      ruta_secreta_bosque: {
        text: "Sigues el mapa hacia una puerta oculta tras los establos. Está cubierta de hiedra. La abres y encuentras un sendero que baja hacia el bosque. Nadie vigila este lugar.",
        choices: [
          { text: "Seguir el sendero", next: "ending_escape_simple" },
          { text: "Volver por si olvidaste algo importante", next: "volver_establos_llaves" }
        ]
      },
      ir_torre_tesoro: {
        text: "Decides arriesgarte por el tesoro. Subes a la torre norte. Hay guardias pero están dormidos. Ves un cofre grande con el símbolo real.",
        choices: [
          { text: "Abrir el cofre silenciosamente", next: "abrir_cofre_tesoro" },
          { text: "Mejor no arriesgarse, volver", next: "volver_establos_llaves" }
        ]
      },
      calmar_caballo_escape: {
        text: "Acaricias al caballo y hablas suavemente. Se calma y camináis juntos hacia el bosque. Es más lento pero más seguro. Los guardias no os detectan.",
        choices: [
          { text: "Continuar hacia la libertad", next: "ending_escape_simple" }
        ]
      },
      galope_desesperado: {
        text: "El caballo galopa sin control. Esquivas árboles por poco. Los guardias gritan atrás pero no pueden alcanzarte. Finalmente el caballo se detiene exhausto en medio del bosque. Estás libre pero perdido.",
        choices: [
          { text: "Orientarte y buscar un camino", next: "ending_escape_simple" }
        ]
      },
      leer_documento_mago: {
        text: "El documento dice: 'El mago Aldric fue encerrado por el rey tras predecir la muerte de su familia. Conoce un hechizo para romper la maldición del castillo pero necesita su báculo.' Información valiosa.",
        choices: [
          { text: "Ir a ayudar al mago", next: "torre" },
          { text: "Escapar con la información", next: "escapar_egoista" }
        ]
      },
      escapar_egoista: {
        text: "Decides no arriesgarte más. 'No es mi problema', piensas. Escapas por los establos exitosamente. Días después, en la aldea cercana, escuchas rumores: el castillo colapsó completamente. Todos murieron, incluyendo el mago y la princesa. Podrías haberlos salvado. La culpa te perseguirá siempre.",
        choices: [
          { text: "Vivir con la culpa", next: "ending_escape_con_culpa" }
        ]
      },

      beber_pocion_oficina: {
        text: "Bebes la poción. Sientes un calor reconfortante. Tus heridas sanan y te sientes más fuerte. Era una poción de curación.",
        choices: [
          { text: "Salir revitalizado", next: "volver_establos_llaves" }
        ]
      },
      abrir_cofre_tesoro: {
        text: "Abres el cofre con cuidado. Está lleno de oro, joyas y... una corona real. Uno de los guardias se despierta y te ve.",
        choices: [
          { text: "Correr con algo de tesoro", next: "huir_con_tesoro" },
          { text: "Dejar todo y huir", next: "volver_establos_llaves" },
          { text: "Intentar negociar", next: "negociar_guardia_tesoro" }
        ]
      },
      huir_con_tesoro: {
        text: "Agarras un puñado de joyas y corres escaleras abajo. El guardia grita alertando a otros. Llegas a los establos jadeando. Tienes riquezas pero poco tiempo.",
        choices: [
          { text: "Montar rápido y escapar", next: "ending_escape_simple" },
          { text: "Esconder el tesoro y escapar después", next: "esconder_tesoro_escape" }
        ]
      },
      negociar_guardia_tesoro: {
        text: "'Espera', dices. 'Podemos compartir esto. El rey está loco, ¿por qué seguir sirviéndole?' El guardia duda. 'Hablas con sentido... pero es traición.'",
        choices: [
          { text: "Ofrecerle la mitad del tesoro", next: "sobornar_guardia" },
          { text: "Convencerlo de que el rey no se enterará", next: "convencer_guardia" },
          { text: "Atacarlo por sorpresa", next: "atacar_guardia_torre" }
        ]
      },
      esconder_tesoro_escape: {
        text: "Escondes las joyas en un establo vacío bajo el heno. Podrás volver por ellas después. Ahora debes escapar antes que lleguen más guardias.",
        choices: [
          { text: "Escapar rápido", next: "ending_escape_simple" }
        ]
      },
      sobornar_guardia: {
        text: "Le ofreces la mitad. El guardia toma las joyas y asiente. 'Vete por la puerta trasera de la torre. No te he visto.' Te señala una salida secreta.",
        choices: [
          { text: "Usar la salida secreta", next: "salida_secreta_torre" }
        ]
      },
      convencer_guardia: {
        text: "El guardia reflexiona. 'Tienes razón... este lugar es una prisión para todos.' Te deja ir pero te advierte: 'Si te atrapan, no me menciones.'",
        choices: [
          { text: "Agradecerle y escapar", next: "volver_establos_llaves" }
        ]
      },
      atacar_guardia_torre: {
        text: "Lo atacas pero él es más fuerte y entrenado. Te desarma y grita por refuerzos. Otros guardias llegan rápidamente.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      salida_secreta_torre: {
        text: "Bajas por una escalera oculta que lleva directamente a los jardines exteriores. El aire fresco de la noche te recibe. Estás fuera del castillo con tu tesoro.",
        choices: [
          { text: "Correr hacia el bosque", next: "ending_escape_simple" }
        ]
      },


      examinar_mapa_capitan: {
        text: "El mapa muestra rutas secretas del castillo. Una marca especial señala 'Tesoro del rey - Torre norte'. También hay una ruta que conecta los establos con el bosque evitando la puerta principal.",
        choices: [
          { text: "Seguir la ruta secreta al bosque", next: "ruta_secreta_bosque" },
          { text: "Ir por el tesoro primero", next: "ir_torre_tesoro" },
          { text: "Ignorar y volver a los establos", next: "volver_establos_llaves" }
        ]
      },
      salir_cautela: {
        text: "Avanzas con cuidado hacia la salida. Escuchas voces de guardias cerca. Podrías esperar a que se vayan o intentar distraerlos.",
        choices: [
          { text: "Esperar escondido", next: "esperar_guardias_establos" },
          { text: "Crear una distracción", next: "distraccion_establos" }
        ]
      },
      esperar_guardias_establos: {
        text: "Esperas escondido entre las balas de heno. Los guardias eventualmente se van. Sales y montas un caballo rápidamente.",
        choices: [
          { text: "Galopar hacia la libertad", next: "ending_escape_simple" }
        ]
      },
      distraccion_establos: {
        text: "Lanzas una piedra hacia el otro lado del patio. Los guardias van a investigar y aprovechas para escapar montando un caballo.",
        choices: [
          { text: "Fin", next: "ending_escape_simple" }
        ]
      },
      buscar_comida: {
        text: "Buscas comida pero todo está podrido o quemado. Mientras revisas, escuchas que bloquean el pasadizo con barras de hierro. Quedas atrapado.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      tomar_cuchillos: {
  text: "Tomas varios cuchillos de cocina. Ahora estás mejor armado. Podrías entrar al pasadizo o explorar más.",
  choices: [
    { text: "Entrar al pasadizo", next: "pasadizo_cocinas" },
    { text: "Explorar las despensas", next: "explorar_despensas" }
  ]
},
explorar_despensas: {
  text: "Exploras las despensas de las cocinas. Encuentras provisiones: pan duro, queso y una botella de agua. También hay un pasadizo estrecho que parece llevar a las bodegas del castillo.",
  choices: [
    { text: "Entrar a las bodegas", next: "entrar_bodegas" },
    { text: "Ir al pasadizo de los establos", next: "pasadizo_cocinas" }
  ]
},
entrar_bodegas: {
  text: "Bajas a las bodegas. Hay barriles de vino y cajas apiladas. Al fondo ves una luz tenue. Parece haber otra salida.",
  choices: [
    { text: "Investigar la luz", next: "investigar_luz_bodegas" },
    { text: "Revisar las cajas", next: "revisar_cajas_bodegas" }
  ]
},
investigar_luz_bodegas: {
  text: "La luz viene de una rejilla en el techo. Da a un patio interior. Podrías intentar salir por ahí o continuar explorando.",
  choices: [
    { text: "Trepar por la rejilla", next: "trepar_rejilla_patio" },
    { text: "Continuar por las bodegas", next: "continuar_bodegas" }
  ]
},
revisar_cajas_bodegas: {
  text: "Revisas las cajas. Encuentras herramientas viejas: una palanca de hierro, cuerdas y un farol con aceite. Útiles para explorar.",
  choices: [
    { text: "Tomar las herramientas y continuar", next: "continuar_bodegas" }
  ]
},
trepar_rejilla_patio: {
  text: "Trepas por la rejilla y sales al patio interior. Estás cerca de los jardines del castillo. Ves los establos a un lado.",
  choices: [
    { text: "Ir a los establos", next: "pasadizo_cocinas" }
  ]
},
continuar_bodegas: {
  text: "Continúas explorando las bodegas. Encuentras un túnel que parece conectar con las catacumbas. Hace frío y huele a humedad.",
  choices: [
    { text: "Entrar al túnel", next: "tunel_catacumbas_bodegas" },
    { text: "Volver y buscar otra ruta", next: "investigar_luz_bodegas" }
  ]
},
tunel_catacumbas_bodegas: {
  text: "Entras al túnel. Es oscuro y estrecho. Después de varios minutos llegas a una puerta de piedra. Estás en las catacumbas.",
  choices: [
    { text: "Abrir la puerta", next: "entrar_catacumbas" }
  ]
},
      mazmorras: {
        text: "Bajas por escaleras resbaladizas hasta las mazmorras profundas. El aire es denso y huele a humedad y desesperación. Hay celdas a ambos lados con prisioneros demacrados. Uno de ellos susurra: 'Hay un túnel... celda del fondo... cavado por los que ya no están...' Al final ves una celda vacía con un agujero en la pared.",
        choices: [
          { text: "Investigar el túnel", next: "tunel_escape" },
          { text: "Liberar a los prisioneros", next: "liberar_prisioneros" },
          { text: "Hablar más con el prisionero", next: "hablar_prisionero" }
        ]
      },
      hablar_prisionero: {
        text: "'¿Quién eres?', preguntas. 'Era un sirviente del rey... antes de que enloqueciera. Nos encerró a todos. El túnel lleva al bosque pero ten cuidado, hay guardias patrullando.' Te da una medalla. 'Muéstrala si te atrapan, quizás algún guardia tenga piedad.'",
        choices: [
          { text: "Tomar la medalla y entrar al túnel", next: "tunel_escape" },
          { text: "Liberarlo primero", next: "liberar_prisioneros" }
        ]
      },
      tunel_escape: {
        text: "Entras al túnel. Es estrecho y oscuro. Avanzas con determinación pero de repente el túnel se derrumba parcialmente bloqueando la salida. Escuchas agua corriendo cerca. Hay una grieta en la pared que lleva a las alcantarillas del castillo.",
        choices: [
          { text: "Entrar a las alcantarillas", next: "alcantarillas_castillo" },
          { text: "Intentar desbloquear el túnel", next: "desbloquear_tunel" }
        ]
      },
      alcantarillas_castillo: {
        text: "Entras a las alcantarillas. El agua llega hasta tus rodillas y el olor es nauseabundo. Hay ratas por todas partes. Ves dos túneles: uno va hacia arriba con luz tenue y otro continúa recto en oscuridad total.",
        choices: [
          { text: "Túnel que sube hacia la luz", next: "tunel_sube_cocinas" },
          { text: "Túnel recto en la oscuridad", next: "tunel_recto_rio" }
        ]
      },
      alcantarillas_castillo: {
        text: "Entras a las alcantarillas. El agua llega hasta tus rodillas y el olor es nauseabundo. Hay ratas por todas partes. Ves dos túneles: uno va hacia arriba con luz tenue y otro continúa recto en oscuridad total.",
        choices: [
          { text: "Túnel que sube hacia la luz", next: "tunel_sube_cocinas" },
          { text: "Túnel recto en la oscuridad", next: "tunel_recto_rio" }
        ]
      },
      desbloquear_tunel: {
        text: "Intentas mover las rocas pero son demasiado pesadas. Necesitas herramientas o ayuda. Escuchas voces de guardias acercándose por el túnel desde las mazmorras. Te descubrieron.",
        choices: [
          { text: "Esconderte entre las rocas", next: "esconderse_tunel_rocas" },
          { text: "Correr hacia las alcantarillas", next: "alcantarillas_castillo" }
        ]
      },
      tunel_sube_cocinas: {
        text: "Subes por el túnel húmedo. La luz viene de una rejilla en el techo. Llegas a las cocinas del castillo desde abajo. Puedes escuchar movimiento arriba.",
        choices: [
          { text: "Salir con cuidado a las cocinas", next: "cocinas" },
          { text: "Quedarte escondido y esperar", next: "esperar_alcantarilla" }
        ]
      },
      tunel_recto_rio: {
        text: "Avanzas en la oscuridad total. El sonido del agua es cada vez más fuerte. De repente caes en un río subterráneo. La corriente es fuerte y te arrastra.",
        choices: [
          { text: "Dejarte llevar por la corriente", next: "arrastrado_rio" },
          { text: "Nadar contra la corriente", next: "nadar_contra_corriente" },
          { text: "Agarrarte de las rocas", next: "agarrar_rocas_rio" }
        ]
      },
      esconderse_tunel_rocas: {
        text: "Te escondes entre las rocas caídas. Los guardias pasan revisando el túnel. 'Debe haber seguido por las alcantarillas', dice uno. Se alejan.",
        choices: [
          { text: "Ir a las alcantarillas cuando se vayan", next: "alcantarillas_castillo" },
          { text: "Seguir intentando desbloquear en silencio", next: "desbloquear_silencioso" }
        ]
      },
      esperar_alcantarilla: {
        text: "Esperas en la alcantarilla. Pasa el tiempo y eventualmente todo queda en silencio. Es noche cerrada arriba. Momento perfecto para moverte.",
        choices: [
          { text: "Subir a las cocinas", next: "cocinas" }
        ]
      },
      arrastrado_rio: {
        text: "Te dejas llevar por la corriente. El agua te arrastra violentamente golpeándote contra las rocas. Después de varios minutos aterradores, llegas a una caverna más amplia donde el agua se calma. Hay una orilla rocosa.",
        choices: [
          { text: "Salir a la orilla", next: "orilla_caverna" },
          { text: "Seguir flotando", next: "seguir_rio_caverna" }
        ]
      },
      nadar_contra_corriente: {
        text: "Intentas nadar contra la corriente pero es demasiado fuerte. Te agota rápidamente y la corriente te arrastra de todas formas.",
        choices: [
          { text: "Dejarte llevar exhausto", next: "arrastrado_rio" }
        ]
      },
      agarrar_rocas_rio: {
        text: "Logras agarrarte de unas rocas salientes. La corriente tira fuerte pero resistes. Ves un hueco en la pared del túnel, como una cueva lateral.",
        choices: [
          { text: "Entrar a la cueva lateral", next: "cueva_lateral_rio" },
          { text: "Soltarte y dejarte llevar", next: "arrastrado_rio" }
        ]
      },
      desbloquear_silencioso: {
        text: "Trabajas en silencio moviendo rocas pequeñas. Después de mucho esfuerzo logras crear un hueco lo suficientemente grande para pasar. Al otro lado el túnel continúa hacia el bosque.",
        choices: [
          { text: "Seguir por el túnel", next: "tunel_final_bosque" }
        ]
      },
      orilla_caverna: {
        text: "Sales a la orilla empapado y exhausto. La caverna es enorme con estalactitas colgando. Hay dos salidas: una sube hacia la luz natural y otra parece ir más profundo.",
        choices: [
          { text: "Subir hacia la luz", next: "salida_caverna_bosque" },
          { text: "Explorar más profundo", next: "profundo_caverna" }
        ]
      },
      seguir_rio_caverna: {
        text: "Sigues flotando con la corriente. El río te lleva por varios túneles más hasta que finalmente ves luz del día. Sales a un lago fuera del castillo. Lo lograste pero estás completamente agotado.",
        choices: [
          { text: "Salir del lago", next: "ending_escape_tunnel" }
        ]
      },
      cueva_lateral_rio: {
        text: "Entras a la cueva lateral. Es seca y tiene marcas en las paredes, como si alguien hubiera vivido aquí. Encuentras antorchas viejas, una manta y restos de comida. Hay un túnel que sube.",
        choices: [
          { text: "Descansar un momento", next: "descansar_cueva" },
          { text: "Subir por el túnel inmediatamente", next: "tunel_cueva_arriba" }
        ]
      },
      tunel_final_bosque: {
        text: "El túnel se vuelve más amplio y el aire más fresco. Empiezas a ver raíces de árboles en el techo. Finalmente llegas a una salida cubierta de vegetación. Estás en el bosque, libre al fin.",
        choices: [
          { text: "Salir al bosque", next: "ending_escape_tunnel" }
        ]
      },
      salida_caverna_bosque: {
        text: "Subes por el túnel hacia la luz. Es empinado pero llegas a una abertura. Sales a un claro en el bosque. El castillo se ve a lo lejos. Estás libre pero débil por la odisea.",
        choices: [
          { text: "Alejarte del castillo", next: "ending_escape_tunnel" }
        ]
      },
      profundo_caverna: {
        text: "Desciendes más profundo en la caverna. Hace cada vez más frío. De repente escuchas un gruñido. Hay algo grande moviéndose en la oscuridad. Ojos brillantes te observan.",
        choices: [
          { text: "Retroceder lentamente", next: "retroceder_criatura" },
          { text: "Quedarte quieto", next: "quedarse_quieto_criatura" },
          { text: "Correr hacia la salida", next: "correr_criatura" }
        ]
      },
      descansar_cueva: {
        text: "Te sientas y descansas envuelto en la manta vieja. Recuperas fuerzas. Mientras descansas notas inscripciones en la pared: 'Refugio del ermitaño - El camino arriba lleva a la libertad'.",
        choices: [
          { text: "Subir por el túnel renovado", next: "tunel_cueva_arriba" }
        ]
      },
      tunel_cueva_arriba: {
        text: "Subes por el túnel. Es largo pero bien construido. Llegas a una trampilla de madera. La abres con cuidado y sales a una cabaña abandonada en el bosque. ¡Estás fuera del castillo!",
        choices: [
          { text: "Salir de la cabaña", next: "ending_escape_tunnel" }
        ]
      },
      retroceder_criatura: {
        text: "Retrocedes lentamente sin hacer movimientos bruscos. La criatura gruñe pero no ataca. Logras volver a la orilla de la caverna principal sin problemas.",
        choices: [
          { text: "Subir hacia la luz rápido", next: "salida_caverna_bosque" }
        ]
      },
      quedarse_quieto_criatura: {
        text: "Te quedas completamente inmóvil. La criatura se acerca olfateando. Es un oso enorme que debe vivir en estas cuevas. Te mira fijamente pero al no moverte, pierde interés y se aleja gruñendo.",
        choices: [
          { text: "Esperar a que se vaya completamente", next: "esperar_oso_se_vaya" },
          { text: "Retroceder ahora", next: "retroceder_criatura" }
        ]
      },
      correr_criatura: {
        text: "Corres desesperadamente hacia la orilla. La criatura ruge y te persigue. Llegas justo a tiempo y te lanzas al río. La corriente te arrastra lejos del peligro.",
        choices: [
          { text: "Dejarte llevar por el río", next: "seguir_rio_caverna" }
        ]
      },
      esperar_oso_se_vaya: {
        text: "Esperas inmóvil durante lo que parece una eternidad. El oso finalmente se mete en un túnel lateral y desaparece. Respiras aliviado.",
        choices: [
          { text: "Volver a la orilla principal", next: "orilla_caverna" }
        ]
      },


      liberar_prisioneros: {
        text: "Abres las celdas y liberas a los prisioneros. Son débiles pero agradecidos. Juntos crean una distracción causando ruido mientras tú escapas por el túnel. Su sacrificio te da tiempo.",
        choices: [
          { text: "Escapar por el túnel", next: "tunel_escape" }
        ]
      },
      esperar_guardia: {
  text: "Esperas en silencio absoluto. Pasan varios minutos. De repente escuchas pasos regresando. Es otro guardia, más joven y alerta. Entra a la celda con una antorcha. '¿Seguro que no había nadie?' pregunta a alguien afuera. Comienza a revisar más a fondo. Te va a encontrar.",
  choices: [
    { text: "Atacarlo por sorpresa", next: "atacar_guardia_joven" },
    { text: "Intentar negociar", next: "negociar_guardia_joven" },
    { text: "Quedarte inmóvil y rezar", next: "quedarse_inmovil" }
  ]
},
atacar_guardia_joven: {
  text: "Te lanzas desde tu escondite y lo atacas. El guardia es joven pero entrenado. Forcejean. Su antorcha cae al suelo. En la oscuridad y confusión, logras golpearlo y dejarlo inconsciente. Está vivo pero aturdido.",
  choices: [
    { text: "Tomar su armadura y disfrazarte", next: "tomar_armadura_guardia" },
    { text: "Huir rápido antes que lleguen más", next: "huir_rapido_celda" },
    { text: "Atarlo y amordazarlo", next: "atar_guardia" }
  ]
},
negociar_guardia_joven: {
  text: "Sales de tu escondite con las manos arriba. 'Espera, no soy una amenaza.' El guardia joven te apunta con su espada, nervioso. '¿Cómo... cómo entraste aquí?' 'Me encerraron injustamente', mientes. Él duda.",
  choices: [
    { text: "Ofrecerle oro si te deja ir", next: "sobornar_guardia_joven" },
    { text: "Contarle la verdad sobre el rey", next: "verdad_guardia_joven" },
    { text: "Atacarlo mientras duda", next: "atacar_mientras_duda" }
  ]
},
quedarse_inmovil: {
  text: "Te quedas completamente inmóvil en las sombras. El guardia revisa metódicamente. Su antorcha se acerca. Está a centímetros de ti. Contienes la respiración. '¿Ves algo?' grita alguien desde afuera. 'Nada... debe haber sido una rata', responde finalmente. Se va. Respiras.",
  choices: [
    { text: "Salir ahora que se fue", next: "salir_pasillo_rapido" }
  ]
},
tomar_armadura_guardia: {
  text: "Le quitas la armadura al guardia inconsciente. Te la pones rápido. Con el casco puesto, pareces un guardia más. Esto podría ser muy útil.",
  choices: [
    { text: "Salir disfrazado", next: "salir_disfrazado_guardia" }
  ]
},
huir_rapido_celda: {
  text: "Corres fuera de la celda. Escuchas al guardia inconsciente gemir. No tienes mucho tiempo antes que otros vengan.",
  choices: [
    { text: "Ir al pasillo principal", next: "pasillo_principal" },
    { text: "Subir las escaleras de la torre", next: "torre" }
  ]
},
atar_guardia: {
  text: "Usas la cuerda que encontraste antes para atar y amordazar al guardia. Lo dejas en la celda. Te dará algo de tiempo antes que lo encuentren.",
  choices: [
    { text: "Salir con calma", next: "salir_pasillo_rapido" }
  ]
},
sobornar_guardia_joven: {
  text: "'Tengo oro escondido afuera. Déjame ir y te haré rico.' El guardia te mira con desconfianza. 'No tengo nada que perder aquí. Apenas me pagan.' Está considerándolo.",
  choices: [
    { text: "Insistir en el trato", next: "insistir_soborno" },
    { text: "Atacarlo ahora que está distraído", next: "atacar_mientras_duda" }
  ]
},
verdad_guardia_joven: {
  text: "'El rey está maldito. El mago Aldric puede salvarlo pero está prisionero. Vine a ayudar.' El guardia baja un poco su espada. 'Todos sabemos que el rey está loco... y que Aldric fue injustamente encerrado.' Suspira. 'Ve. Pero si te veo de nuevo, te arrestaré.'",
  choices: [
    { text: "Agradecerle y salir", next: "salir_pasillo_rapido" }
  ]
},
atacar_mientras_duda: {
  text: "Aprovechas su duda y lo atacas. Es más rápido de lo que pensabas. Bloquea tu golpe y contraataca. La lucha es intensa.",
  choices: [
    { text: "Continuar luchando", next: "lucha_intensa_guardia" },
    { text: "Intentar huir", next: "huir_lucha" }
  ]
},
salir_disfrazado_guardia: {
  text: "Sales de la celda vestido como guardia. Otros guardias te ven pero no sospechan. '¿Todo bien?' pregunta uno. 'Sí, solo una falsa alarma', respondes. Asiente y sigue su camino. ¡Funcionó!",
  choices: [
    { text: "Aprovechar el disfraz para explorar", next: "explorar_disfrazado" }
  ]
},
insistir_soborno: {
  text: "'Piénsalo. Oro real. Libertad para ambos.' El guardia mira hacia el pasillo. 'De acuerdo... pero me traicionas y juro que te encontraré.' Te deja ir.",
  choices: [
    { text: "Salir rápido", next: "salir_pasillo_rapido" }
  ]
},
lucha_intensa_guardia: {
  text: "Peleas con todas tus fuerzas. Finalmente logras desarmarlo y golpearlo. Cae inconsciente. Estás agotado pero victorioso.",
  choices: [
    { text: "Tomar su armadura", next: "tomar_armadura_guardia" },
    { text: "Huir antes que lleguen refuerzos", next: "huir_rapido_celda" }
  ]
},
huir_lucha: {
  text: "Intentas huir pero el guardia te alcanza. Forcejean y caen al suelo. Su grito alerta a otros guardias. Es demasiado tarde.",
  choices: [
    { text: "Fin", next: "ending_captured" }
  ]
},
explorar_disfrazado: {
  text: "Disfrazado de guardia, puedes moverte libremente por el castillo. Es una oportunidad única. ¿Dónde irás?",
  choices: [
    { text: "Al gran salón (cerca del rey)", next: "infiltrado_salon" },
    { text: "A la torre del mago", next: "torre" },
    { text: "A explorar libremente", next: "pasillo_principal" }
  ]
},

      salon: {
        text: "Entras al gran salón. Adentro, el rey maldito está sentado en su trono rodeado de guardias y nobles pálidos como espectros. Todos se giran cuando entras. El silencio es absoluto. El rey se levanta lentamente. '¿Un ratón en mi castillo?' Su voz es fría como la muerte.",
        choices: [
          { text: "Rendirse", next: "ending_captured" },
          { text: "Intentar hablar con el rey", next: "hablar_rey" },
          { text: "Buscar una ruta de escape", next: "buscar_escape_salon" }
        ]
      },
      hablar_rey: {
        text: "'Majestad, no busco problemas. Solo deseo libertad.' El rey ríe sin alegría. 'Libertad... hace mucho que olvidé esa palabra. Guardias, llévenlo a las mazmorras profundas. Quizás ahí encuentre su libertad... en la muerte.'",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      buscar_escape_salon: {
        text: "Miras desesperadamente buscando una salida. Hay una ventana alta y una puerta tras el trono. Los guardias se acercan.",
        choices: [
          { text: "Correr hacia la ventana", next: "ventana_salon_escapar" },
          { text: "Intentar la puerta tras el trono", next: "puerta_tras_trono" },
          { text: "Rendirse", next: "ending_captured" }
        ]
      },
      ventana_salon_escapar: {
        text: "Corres hacia la ventana pero está demasiado alta. Los guardias te atrapan.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      puerta_tras_trono: {
        text: "Esquivas guardias y cruzas la puerta tras el trono. Hay escaleras que bajan a un pasadizo hacia las cocinas.",
        choices: [
          { text: "Ir a cocinas", next: "cocinas" }
        ]
      }
    }
  },


//HISTORIA: Bosque Encantado
fantasia: {
  title: "Bosque Encantado",
  nodes: {
    start: {
      text: "Te despiertas bajo un árbol cuyas hojas emiten una luz azul suave. No recuerdas cómo llegaste aquí. Tres senderos aparecen ante ti, cada uno con características distintas: uno iluminado por luciérnagas, otro marcado con rocas azules brillantes, y un tercero que sigue el curso de un río cuyas aguas brillan como estrellas.",
      choices: [
        { text: "Seguir las luciérnagas", next: "luciernagas" },
        { text: "Camino de rocas azules", next: "rocas" },
        { text: "Río brillante", next: "rio" },
        { text: "Esperar bajo el árbol", next: "esperar_arbol" }
      ]
    },
    esperar_arbol: {
      text: "Esperas bajo el árbol luminoso. Sus ramas se inclinan y una voz susurra: 'El bosque respeta la paciencia, pero el tiempo aquí es diferente. Esperar demasiado puede hacerte parte de mí.' Sientes cómo tus pies se hunden levemente en el musgo.",
      choices: [
        { text: "Elegir un sendero ahora", next: "start" },
        { text: "Seguir esperando", next: "esperar_mas" },
        { text: "Hablar con el árbol", next: "hablar_arbol" }
      ]
    },
    esperar_mas: {
      text: "El tiempo pasa de manera extraña. Las raíces comienzan a enredarse alrededor de tus tobillos. Tu piel adquiere un tono verdoso. El árbol susurra: 'Última oportunidad, caminante.'",
      choices: [
        { text: "Liberarte y elegir un sendero", next: "start" },
        { text: "Aceptar tu destino", next: "convertirse_arbol" }
      ]
    },
    hablar_arbol: {
      text: "'Árbol sabio', dices, 'necesito tu consejo.' El árbol responde: 'Cada sendero tiene verdad y peligro. Las luciérnagas son rápidas pero exigentes. Las rocas cantan para quienes escuchan. El río conoce secretos profundos pero también ahoga.'",
      choices: [
        { text: "Tomar el sendero de luciérnagas", next: "luciernagas" },
        { text: "Tomar el camino de rocas", next: "rocas" },
        { text: "Seguir el río", next: "rio" }
      ]
    },
    convertirse_arbol: {
      text: "Pasas tanto tiempo que tus raíces se hunden en la tierra. Te conviertes en otro árbol del bosque encantado.",
      choices: [
        { text: "Fin", next: "ending_fantasia_perdido" }
      ]
    },
    luciernagas: {
      text: "Las luciérnagas te rodean, formando patrones complejos en el aire. Te guían a través de un túnel de enredaderas iluminadas hasta un claro circular donde un portal de energía púrpura flota sobre un pedestal de musgo. El portal emite un zumbido bajo.",
      choices: [
        { text: "Entrar al portal", next: "portal_decision" },
        { text: "Esperar y observar primero", next: "esperar_portal" },
        { text: "Buscar instrucciones alrededor", next: "buscar_instrucciones" },
        { text: "Examinar el pedestal", next: "examinar_pedestal" }
      ]
    },
    examinar_pedestal: {
      text: "El pedestal tiene inscripciones antiguas. Hay símbolos de lunas, soles y estrellas. Al tocarlo, sientes una vibración.",
      choices: [
        { text: "Trazar los símbolos con tu dedo", next: "trazar_simbolos" },
        { text: "Entrar al portal", next: "portal_decision" },
        { text: "Buscar más información", next: "buscar_instrucciones" }
      ]
    },
    trazar_simbolos: {
      text: "Al trazar los símbolos, el portal cambia de púrpura a dorado. 'Has desbloqueado el camino directo.' El portal ahora parece más seguro.",
      choices: [
        { text: "Entrar al portal mejorado", next: "portal" },
        { text: "Investigar más", next: "buscar_instrucciones" }
      ]
    },
    portal_decision: {
      text: "Te preparas para entrar al portal. Una luciérnaga te rodea tres veces, como advirtiéndote.",
      choices: [
        { text: "Ignorar la advertencia y entrar", next: "portal_riesgoso" },
        { text: "Escuchar la advertencia", next: "esperar_portal" }
      ]
    },
    portal_riesgoso: {
      text: "El portal te succiona violentamente. Emerges mareado en un lugar oscuro y desconocido, lejos del bosque pero tampoco en casa.",
      choices: [
        { text: "Fin", next: "ending_fantasia_perdido" }
      ]
    },
    rocas: {
      text: "Las rocas azules emiten un canto armónico cuando las pisas. Un espíritu del bosque emerge de un roble. 'Los caminantes rara vez escuchan nuestra canción. ¿Vienes en paz o con prisas?'",
      choices: [
        { text: "Pedir ayuda para salir", next: "ayuda_espiritu" },
        { text: "Ignorar y seguir tu camino", next: "seguir_solo" },
        { text: "Ofrecer algo a cambio", next: "ofrecer_cambio" },
        { text: "Preguntar sobre la canción", next: "preguntar_cancion" }
      ]
    },
    preguntar_cancion: {
      text: "'La canción de las rocas es el lenguaje del bosque. Cada piedra cuenta una historia. ¿Puedes escuchar lo que dicen?'",
      choices: [
        { text: "Intentar descifrar la melodía", next: "descifrar_melodia" },
        { text: "Pedir que el espíritu traduzca", next: "ayuda_espiritu" },
        { text: "Seguir sin entender", next: "seguir_solo" }
      ]
    },
    descifrar_melodia: {
      text: "Cierras los ojos y te concentras. Las notas forman palabras: 'Sigue las piedras más brillantes, evita las opacas.' Puedes ver que algunas rocas brillan más.",
      choices: [
        { text: "Seguir las rocas brillantes", next: "camino_rocas_brillantes" },
        { text: "Agradecer al espíritu primero", next: "agradecer_espiritu" }
      ]
    },
    agradecer_espiritu: {
      text: "El espíritu sonríe. 'La gratitud es rara.' Te entrega un cristal brillante. 'Esto iluminará mentiras y verdades.'",
      choices: [
        { text: "Seguir con el cristal", next: "camino_rocas_brillantes_cristal" }
      ]
    },
    camino_rocas_brillantes_cristal: {
      text: "Con el cristal, ves que algunas rocas 'brillantes' son falsas. El cristal te guía por el camino verdadero hacia la salida.",
      choices: [
        { text: "Continuar con confianza", next: "ending_fantasia_exito" }
      ]
    },
    camino_rocas_brillantes: {
      text: "Sigues las rocas más brillantes. El camino se bifurca en múltiples direcciones.",
      choices: [
        { text: "Seguir la luz más intensa", next: "luz_intensa" },
        { text: "Seguir la luz más suave", next: "luz_suave" },
        { text: "Volver y pedir ayuda", next: "ayuda_espiritu" }
      ]
    },
    luz_intensa: {
      text: "La luz intensa te ciega. Cuando tu visión regresa, estás en un callejón sin salida rodeado de rocas apagadas.",
      choices: [
        { text: "Buscar otra salida", next: "buscar_salida_rocas" },
        { text: "Gritar por ayuda", next: "gritar_ayuda" }
      ]
    },
    luz_suave: {
      text: "La luz suave te guía gentilmente. Llegas a un claro donde ves el río brillante.",
      choices: [
        { text: "Acercarte al río", next: "rio" }
      ]
    },
    buscar_salida_rocas: {
      text: "Examinas el área. Encuentras una grieta entre las rocas lo suficientemente grande para pasar.",
      choices: [
        { text: "Pasar por la grieta", next: "grieta_rocas" }
      ]
    },
    grieta_rocas: {
      text: "La grieta te lleva a un túnel subterráneo estrecho y oscuro, pero puedes ver luz al final.",
      choices: [
        { text: "Avanzar hacia la luz", next: "ending_fantasia_exito" },
        { text: "Volver atrás", next: "start" }
      ]
    },
    gritar_ayuda: {
      text: "Tu grito resuena. El espíritu aparece. 'Los perdidos que reconocen su error merecen una oportunidad.'",
      choices: [
        { text: "Aceptar la ayuda", next: "ayuda_espiritu" }
      ]
    },
    rio: {
      text: "El río susurra en un lenguaje antiguo. Sus aguas brillantes reflejan constelaciones desconocidas. Un puente de hojas se forma ante ti. Las aguas parecen profundas.",
      choices: [
        { text: "Cruzar el puente de hojas", next: "puente" },
        { text: "Nadar río abajo", next: "nadar" },
        { text: "Intentar entender el susurro", next: "entender_susurro" },
        { text: "Seguir la orilla del río", next: "seguir_orilla" }
      ]
    },
    seguir_orilla: {
      text: "Caminas por la orilla del río. Llegas a una cascada pequeña donde el agua cae en una piscina cristalina.",
      choices: [
        { text: "Beber del agua", next: "beber_agua" },
        { text: "Continuar caminando", next: "continuar_orilla" },
        { text: "Volver al puente", next: "puente" }
      ]
    },
    beber_agua: {
      text: "El agua es dulce. Al tragarla, puedes entender el susurro del río: 'El camino más seguro es el puente. La cascada oculta un atajo.'",
      choices: [
        { text: "Buscar el atajo en la cascada", next: "atajo_cascada" },
        { text: "Ir al puente", next: "puente" }
      ]
    },
    atajo_cascada: {
      text: "Detrás de la cascada encuentras una cueva con un túnel iluminado por hongos fosforescentes.",
      choices: [
        { text: "Seguir el túnel", next: "tunel_hongos" }
      ]
    },
    continuar_orilla: {
      text: "Sigues la orilla. El río se hace más ancho. Te encuentras en un banco de arena sin forma de continuar excepto vadeando.",
      choices: [
        { text: "Vadear el río", next: "vadear_rio" },
        { text: "Volver atrás", next: "rio" }
      ]
    },
    vadear_rio: {
      text: "El agua te llega hasta las rodillas. La corriente es fuerte. Luchas por mantener el equilibrio.",
      choices: [
        { text: "Continuar vadeando", next: "vadear_continuar" },
        { text: "Volver a la orilla", next: "rio" }
      ]
    },
    vadear_continuar: {
      text: "Con esfuerzo, logras cruzar. Del otro lado, el bosque es menos denso y puedes ver un camino claro hacia la salida.",
      choices: [
        { text: "Seguir el camino", next: "ending_fantasia_exito" }
      ]
    },
    tunel_hongos: {
      text: "El túnel de hongos fosforescentes te lleva a través de la montaña. Emerges cerca del río brillante del bosque.",
      choices: [
        { text: "Acercarte al río", next: "rio" }
      ]
    },
    portal: {
      text: "Al cruzar el portal, sientes vértigo seguido de calidez. Emerges en el límite del bosque, con el sol real brillando. El bosque encantado queda atrás.",
      choices: [
        { text: "Contemplar tu escape", next: "ending_fantasia_exito" }
      ]
    },
    esperar_portal: {
      text: "Esperas observando el portal. Notas símbolos: 'Una vez al día, al atardecer.' El sol está bajando. Las luciérnagas se agitan.",
      choices: [
        { text: "Entrar ahora antes que cierre", next: "portal" },
        { text: "Esperar un poco más", next: "esperar_mas_portal" },
        { text: "Buscar más información", next: "buscar_instrucciones" }
      ]
    },
    esperar_mas_portal: {
      text: "Esperas demasiado. El sol se oculta y el portal comienza a desvanecerse.",
      choices: [
        { text: "Intentar entrar rápido", next: "portal_casi_cerrado" },
        { text: "Dejarlo ir", next: "portal_cerrado" }
      ]
    },
    portal_casi_cerrado: {
      text: "Saltas al portal justo cuando se cierra. Pasas a medias, sintiendo un tirón terrible. Emerges desorientado en un lugar entre el bosque y el mundo real.",
      choices: [
        { text: "Fin", next: "ending_fantasia_perdido" }
      ]
    },
    portal_cerrado: {
      text: "El portal se desvanece. Las luciérnagas te rodean molestas y te guían de vuelta al inicio.",
      choices: [
        { text: "Volver a elegir", next: "start" }
      ]
    },
    buscar_instrucciones: {
      text: "Encuentras una placa: 'El portal lleva a casa, pero exige un precio: un recuerdo feliz. Sin pago, el viaje es incierto.'",
      choices: [
        { text: "Pagar con un recuerdo", next: "considerar_recuerdo" },
        { text: "Buscar otra salida", next: "buscar_otra_salida" },
        { text: "Entrar sin pagar", next: "portal_decision" }
      ]
    },
    considerar_recuerdo: {
      text: "Piensas en tus recuerdos felices. ¿Cuál estás dispuesto a perder? El precio es alto.",
      choices: [
        { text: "Ofrecer recuerdo de infancia", next: "portal_con_precio" },
        { text: "Ofrecer recuerdo reciente", next: "portal_recuerdo_reciente" },
        { text: "Negarte a pagar", next: "buscar_otra_salida" }
      ]
    },
    portal_recuerdo_reciente: {
      text: "Ofreces un recuerdo reciente. El portal acepta pero brilla débilmente. Cruzas y sales, pero la transición es brusca y dolorosa.",
      choices: [
        { text: "Fin", next: "ending_fantasia_perdido" }
      ]
    },
    buscar_otra_salida: {
      text: "Decides no usar el portal. Las luciérnagas te muestran otro camino, más largo pero sin precio.",
      choices: [
        { text: "Seguir a las luciérnagas", next: "camino_luciernagas_alterno" }
      ]
    },
    camino_luciernagas_alterno: {
      text: "Las luciérnagas te guían por un sendero que se conecta con el camino de rocas azules.",
      choices: [
        { text: "Continuar", next: "rocas" }
      ]
    },
    portal_con_precio: {
      text: "Ofreces un recuerdo de tu infancia. El portal se abre ampliamente. Cruzas y emerges en tu mundo, sintiendo un vacío leve pero con libertad.",
      choices: [
        { text: "Fin", next: "ending_fantasia_exito" }
      ]
    },
    ayuda_espiritu: {
      text: "'Ayuda doy a quienes respetan.' Te entrega un amuleto de madera con una piedra azul. 'Este te mostrará caminos ocultos, pero solo con intención pura.'",
      choices: [
        { text: "Usarlo en el tronco hueco", next: "tronco" },
        { text: "Guardar y seguir tu instinto", next: "seguir_solo" },
        { text: "Preguntar cómo usarlo", next: "preguntar_amuleto" },
        { text: "Preguntar sobre intención pura", next: "preguntar_intencion" }
      ]
    },
    preguntar_intencion: {
      text: "'Intención pura es buscar sin dañar, querer sin tomar, salir sin destruir. El bosque siente tu corazón.'",
      choices: [
        { text: "Prometer cuidar el bosque", next: "prometer_cuidado" },
        { text: "Usar el amuleto ahora", next: "preguntar_amuleto" }
      ]
    },
    prometer_cuidado: {
      text: "El espíritu brilla. 'Tu promesa es escuchada.' El amuleto se calienta y brilla con mayor intensidad.",
      choices: [
        { text: "Usar el amuleto potenciado", next: "amuleto_potenciado" }
      ]
    },
    amuleto_potenciado: {
      text: "El amuleto revela el camino más seguro fuera del bosque. Una línea de luz dorada aparece en el suelo.",
      choices: [
        { text: "Seguir la línea dorada", next: "ending_fantasia_exito" }
      ]
    },
    ofrecer_cambio: {
      text: "'Ofrece algo tuyo. Algo que valores, no basura. El bosque conoce la diferencia.'",
      choices: [
        { text: "Ofrecer tu reloj", next: "ofrecer_reloj" },
        { text: "Prometer proteger el bosque", next: "prometer_proteccion" },
        { text: "Ofrecer una historia personal", next: "ofrecer_historia" }
      ]
    },
    ofrecer_historia: {
      text: "'Las historias son moneda valiosa.' Le cuentas tu historia más preciada. El espíritu escucha y sonríe. 'Tu historia ahora vive en el bosque.'",
      choices: [
        { text: "El espíritu te guía afuera", next: "ending_fantasia_exito" }
      ]
    },
    ofrecer_reloj: {
      text: "El espíritu toma el reloj. 'El tiempo es precioso aquí. Este es un pago justo.' Un camino iluminado aparece. 'Sigue este sendero.'",
      choices: [
        { text: "Seguir el camino iluminado", next: "camino_iluminado_reloj" }
      ]
    },
    camino_iluminado_reloj: {
      text: "El camino te lleva directamente hacia el borde del bosque. Sientes que estás cerca de la libertad.",
      choices: [
        { text: "Continuar al límite", next: "ending_fantasia_exito" }
      ]
    },
    prometer_proteccion: {
      text: "'Las palabras tienen poder. Tu promesa se registra en las raíces y las hojas. Te creo.' El espíritu crea un puente de luz que se extiende hacia el límite del bosque.",
      choices: [
        { text: "Cruzar el puente de luz", next: "ending_fantasia_exito" }
      ]
    },
    preguntar_amuleto: {
      text: "'Sosténlo ante lo que parece sólido pero oculta caminos. Paredes que no son paredes, árboles con secretos. El amuleto revelará la verdad.'",
      choices: [
        { text: "Probar en el tronco hueco", next: "tronco" },
        { text: "Probar en una roca grande", next: "probar_roca" },
        { text: "Probar en un árbol cercano", next: "probar_arbol" }
      ]
    },
    probar_arbol: {
      text: "Sostienes el amuleto ante un árbol sólido. El árbol se vuelve translúcido, mostrando un espacio hueco dentro.",
      choices: [
        { text: "Entrar en el árbol hueco", next: "arbol_hueco" }
      ]
    },
    arbol_hueco: {
      text: "Dentro hay una escalera de raíces que desciende. Puedes ver luz al final.",
      choices: [
        { text: "Descender", next: "descender_raices" },
        { text: "Volver y probar otro lugar", next: "preguntar_amuleto" }
      ]
    },
    descender_raices: {
      text: "Las raíces te llevan a un túnel que sube y emerge en el límite del bosque.",
      choices: [
        { text: "Salir del bosque", next: "ending_fantasia_exito" }
      ]
    },
    probar_roca: {
      text: "Sostienes el amuleto ante una roca grande. La roca se vuelve translúcida, revelando un túnel iluminado por cristales.",
      choices: [
        { text: "Entrar al túnel de cristales", next: "tunel_cristales" }
      ]
    },
    tunel_cristales: {
      text: "El túnel de cristales es hermoso y seguro. Los cristales emiten luz suave. Avanzas con confianza.",
      choices: [
        { text: "Continuar por el túnel", next: "ending_fantasia_exito" }
      ]
    },
    seguir_solo: {
      text: "Decides confiar solo en ti. Sin guía, la niebla espesa desciende. Los sonidos se distorsionan. Das vueltas en círculos. Te pierdes completamente.",
      choices: [
        { text: "Fin", next: "ending_fantasia_perdido" }
      ]
    },
    puente: {
      text: "El puente de hojas es firme aunque vivo. Al otro lado, llegas a una colina alta que domina el bosque. Ves el mundo exterior a lo lejos, separado por un último valle.",
      choices: [
        { text: "Descender hacia la libertad", next: "descender_colina" },
        { text: "Observar primero desde la colina", next: "observar_colina" },
        { text: "Buscar un sendero marcado", next: "buscar_sendero_colina" }
      ]
    },
    descender_colina: {
      text: "Desciendes con cuidado por la colina. El camino es empinado pero transitable. El bosque encantado queda atrás.",
      choices: [
        { text: "Continuar", next: "ending_fantasia_exito" }
      ]
    },
    buscar_sendero_colina: {
      text: "Encuentras un sendero bien marcado que zigzaguea por la colina de forma segura. Alguien ha pasado aquí antes.",
      choices: [
        { text: "Seguir el sendero", next: "ending_fantasia_exito" }
      ]
    },
    observar_colina: {
      text: "Observas cuidadosamente desde la colina. Ves que el bosque se extiende por millas, pero identificas el camino más seguro: un valle estrecho que conecta con el exterior.",
      choices: [
        { text: "Tomar el camino seguro", next: "ending_fantasia_exito" },
        { text: "Descender rápido sin plan", next: "descender_rapido" }
      ]
    },
    descender_rapido: {
      text: "Desciendes sin seguir el camino seguro. Resbalas en el terreno húmedo y caes en una zona de niebla donde pierdes la orientación.",
      choices: [
        { text: "Fin", next: "ending_fantasia_perdido" }
      ]
    },
    nadar: {
      text: "Las aguas son frías. La corriente te arrastra con fuerza. Pasas por cuevas subacuáticas iluminadas. Emerges tosiendo en una caverna cerrada sin salida visible.",
      choices: [
        { text: "Buscar salida en la caverna", next: "buscar_salida_caverna" },
        { text: "Intentar volver nadando", next: "intentar_regresar" },
        { text: "Explorar las paredes", next: "explorar_paredes_caverna" }
      ]
    },
    explorar_paredes_caverna: {
      text: "Examinas las paredes. Descubres una grieta estrecha que deja pasar aire. Podría ser una salida.",
      choices: [
        { text: "Intentar pasar por la grieta", next: "pasar_grieta_caverna" },
        { text: "Buscar otra opción", next: "buscar_salida_caverna" }
      ]
    },
    pasar_grieta_caverna: {
      text: "La grieta es muy estrecha. Te quedas atascado a mitad de camino, incapaz de avanzar o retroceder.",
      choices: [
        { text: "Fin", next: "ending_fantasia_fracaso" }
      ]
    },
    buscar_salida_caverna: {
      text: "Exploras la caverna pero solo encuentras más túneles que se adentran en la oscuridad. Sin luz ni guía, te pierdes para siempre.",
      choices: [
        { text: "Fin", next: "ending_fantasia_fracaso" }
      ]
    },
    intentar_regresar: {
      text: "Intentas nadar contra la corriente, pero es demasiado fuerte. Tus brazos se cansan. La corriente te arrastra más profundo. No puedes respirar.",
      choices: [
        { text: "Fin", next: "ending_fantasia_fracaso" }
      ]
    },
    entender_susurro: {
      text: "Te concentras en el susurro del río. Lentamente comprendes: 'Solo los que escuchan pueden cruzar sin precio. Los apresurados se ahogan.'",
      choices: [
        { text: "Cruzar el puente ahora", next: "puente" },
        { text: "Responder al río", next: "responder_rio" },
        { text: "Agradecer al río", next: "agradecer_rio" }
      ]
    },
    agradecer_rio: {
      text: "Agradeces al río. El agua brilla más, complacida. 'Eres de los pocos que escuchan. Te mostraré el camino secreto.'",
      choices: [
        { text: "Seguir las instrucciones", next: "camino_secreto_rio" }
      ]
    },
    camino_secreto_rio: {
      text: "El río crea un sendero de piedras que emergen del agua, formando un camino seco. Al final, ves la salida del bosque.",
      choices: [
        { text: "Caminar hacia la libertad", next: "ending_fantasia_exito" }
      ]
    },
    responder_rio: {
      text: "Hablas: 'Escucho tu sabiduría, río del bosque. Busco paso seguro.' El río se calma y forma un camino de piedras seguras.",
      choices: [
        { text: "Cruzar por las piedras", next: "cruzar_piedras_rio" }
      ]
    },
    cruzar_piedras_rio: {
      text: "Cruzas cuidadosamente. El río te acompaña con su susurro amigable. Del otro lado, el camino hacia la salida es claro.",
      choices: [
        { text: "Seguir hacia la libertad", next: "ending_fantasia_exito" }
      ]
    },
    tronco: {
      text: "El amuleto brilla frente al tronco hueco. La madera se abre como una puerta. Dentro, un sendero secreto serpentea entre árboles milenarios hacia los límites del bosque.",
      choices: [
        { text: "Seguir el sendero secreto", next: "ending_fantasia_exito" }
      ]
    }
  }
},
  ///HISTORIA FANTASIA: EL LABERISTO DEL REY ELFO
  "fantasia": {
    "title": "El Laberinto del Rey Elfo",
    "nodes": {
      "start_fantasia": {
        "text": "Despiertas en una celda de cristal de roca bajo el Palacio del Rey Elfo. Llevas contigo solo una daga ritual de hueso de dragón. La celda tiene un complejo candado mágico y una pequeña grieta que da a un pasadizo oscuro. El guardia elfo se acerca para el cambio de turno.",
        "choices": [
          {
            "text": "Intentar usar la daga para romper el candado mágico",
            "next": "romper_candado"
          },
          {
            "text": "Escabullirte por la grieta al pasadizo oscuro",
            "next": "pasadizo_oscuro"
          },
          {
            "text": "Esperar al guardia para intentar persuadirlo o atacarlo",
            "next": "interrogar_guardia"
          }
        ]
      },
      "romper_candado": {
        "text": "La daga ritual no es un arma, es una llave. El candado reacciona, pero la magia es incompleta. Te has quedado atascado. Necesitas un encantamiento de 'Disipación' que solo se encuentra en la biblioteca del palacio.",
        "choices": [
          {
            "text": "Gritar al guardia para obtener ayuda y escapar de forma violenta",
            "next": "lucha_guardia"
          },
          {
            "text": "Escabullirte por la grieta",
            "next": "pasadizo_oscuro"
          }
        ]
      },
      "lucha_guardia": {
        "text": "Atacas al guardia. Él es rápido y está mejor armado. Te somete fácilmente y te encadena en las mazmorras inferiores. Has fracasado.",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_fantasia_fracaso"
          }
        ]
      },
      "interrogar_guardia": {
        "text": "El guardia, llamado Kael, se acerca. No es hostil, solo está aburrido. Te dice que el Rey Elfo te capturó por poseer la 'Daga de los Soberanos'. Si puedes apagar la 'Llama de la Verdad' en la Sala del Trono, serás libre. Kael se ofrece a dejarte ir por la puerta principal a cambio de un favor en el laberinto.",
        "choices": [
          {
            "text": "Aceptar la ayuda de Kael y tomar la puerta principal",
            "next": "puerta_principal"
          },
          {
            "text": "Tomar la oportunidad y escabullirte por el pasadizo oscuro",
            "next": "pasadizo_oscuro"
          }
        ]
      },
      "pasadizo_oscuro": {
        "text": "El pasadizo te lleva a la sala de mantenimiento de la Biblioteca. Encuentras un rollo antiguo: el 'Encantamiento de Disipación'. La biblioteca es enorme y te ofrece dos caminos principales para seguir tu misión.",
        "choices": [
          {
            "text": "Usar el Encantamiento para disipar la magia de la entrada principal (regreso)",
            "next": "romper_candado_con_encantamiento"
          },
          {
            "text": "Entrar a la Sala del Archivo (en busca de un mapa)",
            "next": "archivo"
          },
          {
            "text": "Ir a la **Cámara de Sellado** (ruta obligatoria para el Trono)",
            "next": "camara_sellado"
          }
        ]
      },
      "romper_candado_con_encantamiento": {
        "text": "Regresas a la celda. Usas el Encantamiento de Disipación. El candado de la celda se abre, liberándote. Ahora estás en el corredor principal. Puedes ir a la Cámara de Sellado o al Archivo.",
        "choices": [
          {
            "text": "Dirigirte a la Cámara de Sellado (el único camino visible al Trono)",
            "next": "camara_sellado"
          },
          {
            "text": "Ir a la Sala del Archivo",
            "next": "archivo"
          }
        ]
      },
      "puerta_principal": {
        "text": "Kael te deja ir, pero te pide: 'Tráeme la Capa del Viento del Sur, está en el Jardín Escondido de la Dama de Hielo, al este del Trono.' Estás libre y tienes un objetivo secundario (Capa).",
        "choices": [
          {
            "text": "Ir a la Cámara de Sellado (el camino es angosto)",
            "next": "camara_sellado"
          },
          {
            "text": "Buscar la Capa del Viento del Sur (Jardín Escondido)",
            "next": "jardin_escondido"
          }
        ]
      },
      "jardin_escondido": {
        "text": "Llegas al Jardín Escondido. Encuentras la **Capa del Viento del Sur**, que te otorga invisibilidad temporal. Escuchas un ruido: el dragón mascota del Rey Elfo está durmiendo cerca de la Salida de Emergencia (ruta de escape rápido).",
        "choices": [
          {
            "text": "Usar la Capa para ir a la Cámara de Sellado (la invisibilidad puede ayudar a pasar sin ser detectado)",
            "next": "camara_sellado_con_capa"
          },
          {
            "text": "Usar la Capa para escabullirte hacia la Salida de Emergencia (escape)",
            "next": "escape_rapido"
          },
          {
            "text": "Regresar con Kael y devolverle la Capa",
            "next": "devolver_capa"
          }
        ]
      },
      "devolver_capa": {
        "text": "Regresas al puesto de Kael. Le das la Capa. Él, agradecido, te da un **Talismán de la Suerte** (mejora tus posibilidades de neutralizar la Llama). Tienes el Talismán.",
        "choices": [
          {
            "text": "Ir a la Cámara de Sellado (con Talismán)",
            "next": "camara_sellado"
          },
          {
            "text": "Ir al Archivo por información adicional",
            "next": "archivo"
          }
        ]
      },
      "archivo": {
        "text": "El Archivo es un laberinto de pergaminos. Encuentras el 'Mapa del Laberinto Inferior' y una nota sobre la 'Llama de la Verdad': solo se neutraliza con un objeto bendito o por la fuerza, pero la fuerza requiere un Talismán de Suerte o la Capa. **Necesitas activar la Piedra de Resonancia en la Cámara de Sellado para abrir el paso al Trono.**",
        "choices": [
          {
            "text": "Ir a la Cámara de Sellado (activar la piedra)",
            "next": "camara_sellado"
          },
          {
            "text": "Buscar el Jardín Escondido (para la Capa)",
            "next": "jardin_escondido"
          },
          {
            "text": "Volver a la celda por si hay más pistas",
            "next": "start_fantasia"
          }
        ]
      },
      "camara_sellado": {
        "text": "La Cámara de Sellado es un foso oscuro con una enorme **Piedra de Resonancia** en el centro. La Piedra está inactiva y bloquea el paso al Trono. El aire es denso. **Debes reactivarla** forzando el paso de maná, pero necesitas un objeto que irradie energía.",
        "choices": [
          {
            "text": "Usar la Daga de los Soberanos para canalizar maná (Si la tienes)",
            "next": "activar_piedra_daga"
          },
          {
            "text": "Buscar el Talismán de la Suerte (si lo tienes, es una fuente de energía menor)",
            "next": "activar_piedra_talismán"
          },
          {
            "text": "Intentar forzar el paso (Muerte por descarga)",
            "next": "apagar_fuerza_fallido"
          }
        ]
      },
      "camara_sellado_con_capa": {
        "text": "Usas la Capa. Eres invisible, pero la Piedra de Resonancia te detecta como una perturbación. Debes activarla o el Rey sabrá que estás aquí. Eres invisible, pero la Piedra aún requiere energía para activarse. El paso al Trono sigue bloqueado.",
        "choices": [
          {
            "text": "Usar la Daga de los Soberanos para canalizar maná",
            "next": "activar_piedra_daga"
          },
          {
            "text": "Buscar el Talismán de la Suerte",
            "next": "activar_piedra_talismán"
          },
          {
            "text": "Huir por la Salida de Emergencia (mientras eres invisible)",
            "next": "escape_rapido"
          }
        ]
      },
      "activar_piedra_daga": {
        "text": "Usas la Daga. La Piedra de Resonancia emite un sonido ensordecedor y la pared del fondo se abre, revelando la Sala del Trono. La Daga es clave. **¡Camino al Trono abierto!**",
        "choices": [
          {
            "text": "Entrar a la Sala del Trono (objetivo final)",
            "next": "sala_trono_final"
          },
          {
            "text": "Volver a la Biblioteca por si hay algo más",
            "next": "archivo"
          }
        ]
      },
      "activar_piedra_talismán": {
        "text": "El Talismán logra activar la Piedra de Resonancia, pero la energía es menor. El camino al Trono se abre, pero el ruido ha alertado a guardias cercanos. **Tienes una desventaja de tiempo.**",
        "choices": [
          {
            "text": "Entrar rápidamente a la Sala del Trono (objetivo final)",
            "next": "sala_trono_final"
          },
          {
            "text": "Huir por la Puerta Principal (desesperación)",
            "next": "escape_rapido_incierto"
          }
        ]
      },
      "sala_trono_final": {
        "text": "Llegas a la Sala del Trono. El Rey Elfo está arrodillado, rezando frente a la 'Llama de la Verdad', que sella la verdadera salida. Él se voltea, notándote. Te dice: 'Debes apagar la Llama o morir.'",
        "choices": [
          {
            "text": "Neutralizar la Llama con un objeto bendito (Si tienes el Talismán o la Capa)",
            "next": "neutralizar_llama_final"
          },
          {
            "text": "Atacar al Rey Elfo directamente",
            "next": "lucha_rey"
          },
          {
            "text": "Intentar un escape arriesgado por una ventana (Final Neutral)",
            "next": "escape_rapido"
          }
        ]
      },
      "lucha_rey": {
        "text": "Atacas al Rey Elfo. Él no usa fuerza bruta, sino magia mental. Te paraliza con una palabra y te condena a la servidumbre. El Rey es demasiado poderoso para un ataque directo.",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_fantasia_fracaso"
          }
        ]
      },
      "neutralizar_llama_final": {
        "text": "Usas el Talismán o la Capa (un objeto de gran poder) para neutralizar la Llama. El sello mágico se rompe y el Rey Elfo pierde el 50% de su poder. El camino está libre.",
        "choices": [
          {
            "text": "Huir por la Salida del Trono (Escape Seguro)",
            "next": "ending_fantasia_exito"
          },
          {
            "text": "Huir de vuelta por la Puerta Principal (Riesgo de encuentro con guardias)",
            "next": "escape_rapido_incierto"
          }
        ]
      },
      "escape_rapido": {
        "text": "Escapas por la salida de emergencia del Jardín. Logras salir del palacio, pero estás en el Desierto de Cristal. Estás libre, pero tu supervivencia es incierta. Final Neutral.",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_fantasia_neutral"
          }
        ]
      },
      "escape_rapido_incierto": {
        "text": "Intentas huir por la Puerta Principal, pero el Rey Elfo te espera. Te da una elección: exilio o la mazmorra.",
        "choices": [
          {
            "text": "Elegir el Exilio",
            "next": "ending_fantasia_neutral"
          }
        ]
      },
      "apagar_fuerza_fallido": {
        "text": "Intentas forzar la energía o la Llama. La descarga te carboniza o la Llama te consume. Muerte instantánea.",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_fantasia_fracaso"
          }
        ]
      }
    }
  },


  //// HISTORIA: MASION EMBRUJADA
  "terror": {
    "title": "Mansión Embrujada",
    "nodes": {
      "start": {
        "text": "La tormenta te obliga a refugiarte en la mansión Blackwood, abandonada por 50 años. La leyenda dice que la familia completa desapareció en una noche. Al entrar, la puerta se cierra sola. No es solo una casa vieja... respira. Las paredes tienen latidos. 'No escapará...' susurra una voz desde las sombras.",
        "choices": [
          { "text": "Bajar al sótano - De allí viene un llanto", "next": "sotano" },
          { "text": "Subir a las habitaciones - Quizás diarios o pistas", "next": "habitaciones" },
          { "text": "Forzar la puerta principal - Aunque parece sellada", "next": "puerta_principal" },
          { "text": "Buscar luz - Pero la electricidad murió hace décadas", "next": "buscar_luz" }
        ]
      },
      "buscar_luz": {
        "text": "Tus dedos encuentran velas en un candelabro. Al encenderlas, las sombras bailan formando figuras: una familia cenando, luego gritando. Las llamas se vuelven azules.",
        "choices": [
          { "text": "Seguir a las sombras - Te guían al comedor", "next": "comedor" },
          { "text": "Ir al sótano con luz", "next": "sotano_con_luz" },
          { "text": "Subir con las velas", "next": "habitaciones_con_luz" }
        ]
      },
      "habitaciones_con_luz": {
        "text": "Con luz ves más detalles: manchas oscuras en las alfombras, retratos con los ojos rasgados, y un olor a perfume rancio que se mezcla con algo más dulce y nauseabundo.",
        "choices": [
          { "text": "Ir al cuarto de Eleanor", "next": "cuarto_eleanor" },
          { "text": "Buscar el espejo del ático", "next": "buscar_espejo" },
          { "text": "Regresar abajo - Esto da demasiado miedo", "next": "start" }
        ]
      },
      "comedor": {
        "text": "La mesa está puesta para cinco, pero la comida está podrida y con gusanos. En cada plato, un nombre: Edward, Victoria, Thomas, Eleanor... y un quinto vacío. ¿Para quién era?",
        "choices": [
          { "text": "Sentarte en la silla vacía", "next": "silla_vacia" },
          { "text": "Leer los nombres en voz alta", "next": "leer_nombres" },
          { "text": "Buscar en el aparador", "next": "aparador" }
        ]
      },
      "silla_vacia": {
        "text": "Al sentarte, ves la sala desde esa perspectiva. Frente a ti, manchas de sangre en el mantel. Esta silla era del asesino. No de la familia.",
        "choices": [
          { "text": "Levantarte rápidamente", "next": "levantarse_silla" },
          { "text": "Permanecer - Ver la visión completa", "next": "vision_completa" }
        ]
      },
      "levantarse_silla": {
        "text": "Te levantas tan rápido que la silla cae. Un frío intenso te envuelve. James aparece frente a ti, su rostro una máscara de furia. '¡ESA ES MI SILLA!'",
        "choices": [
          { "text": "Disculparte", "next": "ending_death" },
          { "text": "Correr", "next": "ending_death" }
        ]
      },
      "vision_completa": {
        "text": "Ves la última cena: la familia discutiendo, luego un hombre entra (el mayordomo), los apuñala uno por uno. El quinto lugar era para él... porque se unió a ellos en la muerte.",
        "choices": [
          { "text": "Gritar de horror", "next": "gritar_vision" },
          { "text": "Preguntar '¿por qué?'", "next": "preguntar_porque" }
        ]
      },
      "gritar_vision": {
        "text": "Tu grito hace que los fantasmas aparezcan completamente. No están enojados... están tristes.",
        "choices": [
          { "text": "Pedir perdón por invadir", "next": "pedir_perdon" },
          { "text": "Intentar correr", "next": "correr_comedor" }
        ]
      },
      "pedir_perdon": {
        "text": "'Perdónanos nosotros', dice Edward. 'Te hemos asustado. Pero necesitamos ayuda.'",
        "choices": [
          { "text": "Ofrecer ayuda", "next": "ayuda_genuina" },
          { "text": "Seguir con miedo", "next": "correr_comedor" }
        ]
      },
      "correr_comedor": {
        "text": "Corres hacia la puerta pero tropiezas. James te bloquea el paso. 'La cena no ha terminado.'",
        "choices": [
          { "text": "Luchar", "next": "ending_death" },
          { "text": "Rogar", "next": "ending_death" }
        ]
      },
      "preguntar_porque": {
        "text": "Un fantasma responde: 'Él amaba a Eleanor. Mi hija. Le prohibimos verla. Su amor se volvió odio'.",
        "choices": [
          { "text": "'Eso no justifica el asesinato'", "next": "criticar_asesino" },
          { "text": "'Todos sufrieron'", "next": "compasion" }
        ]
      },
      "criticar_asesino": {
        "text": "James aparece de repente, herido por tus palabras. '¡Tú tampoco entiendes! ¡NADIE ENTIENDE!'",
        "choices": [
          { "text": "Intentar calmarlo", "next": "ending_death" },
          { "text": "Mantener tu postura", "next": "ending_death" }
        ]
      },
      "compasion": {
        "text": "Tu compasión parece calmar los espíritus. 'Gracias', susurra Eleanor.",
        "choices": [
          { "text": "Preguntar cómo ayudar", "next": "ayuda_genuina" },
          { "text": "Seguir hablando", "next": "escuchar_fantasmas" }
        ]
      },
      "ayuda_genuina": {
        "text": "Eleanor guía a toda la familia. 'Necesitamos... un funeral. Alguien que nos llore, aunque sea un extraño'.",
        "choices": [
          { "text": "Darles ese funeral", "next": "funeral" },
          { "text": "Decir que no puedes", "next": "ending_death" }
        ]
      },
      "funeral": {
        "text": "Reúnes objetos personales de cada uno. Lees sus nombres. Lloras por vidas truncadas. Los fantasmas lloran contigo... luego sonríen.",
        "choices": [
          { "text": "Despedirlos formalmente", "next": "despedida_formal" }
        ]
      },
      "despedida_formal": {
        "text": "'Descansen en paz, familia Blackwood'. Una luz los envuelve. 'Gracias... por vernos como personas, no fantasmas'. Desaparecen.",
        "choices": [
          { "text": "Salir de la casa vacía", "next": "ending_success_mirror" }
        ]
      },
      "sotano": {
        "text": "Las escaleras crujen como huesos. Abajo, hace frío de tumba. Un altar con símbolos satánicos, cadenas en las paredes, y un libro encadenado que parece latir. 'Solo los culpables temen lo escrito aquí'.",
        "choices": [
          { "text": "Leer el libro del altar", "next": "leer_libro" },
          { "text": "Examinar las cadenas - Tienen nombres grabados", "next": "cadenas" },
          { "text": "Subir rápido - Esto no es sótano, es mazmorra", "next": "subir" },
          { "text": "Buscar herramientas para defensa", "next": "buscar_herramientas" }
        ]
      },
      "buscar_herramientas": {
        "text": "Buscas entre la basura. Encuentras una barra oxidada. Al tomarla, una mano esquelética surge del montón y te agarra el tobillo.",
        "choices": [
          { "text": "Patear para liberarte", "next": "ending_death" },
          { "text": "Gritar por ayuda", "next": "ending_death" }
        ]
      },
      "sotano_con_luz": {
        "text": "Con luz ves detalles horribles: los símbolos no son satánicos, son de amor obsesivo. 'Eleanor' tallado mil veces. Las cadenas tienen pelos aún enganchados.",
        "choices": [
          { "text": "Leer el libro con luz clara", "next": "leer_libro_luz" },
          { "text": "Seguir los pelos - Llevan a una celda oculta", "next": "celda_oculta" }
        ]
      },
      "leer_libro_luz": {
        "text": "No es libro de magia, es diario del mayordomo: 'Hoy le hablé. Me sonrió. Su padre me golpeó. Guardaré este dolor hasta que pueda guardarla a ELLA para siempre'.",
        "choices": [
          { "text": "Seguir leyendo - La obsesión crece", "next": "diario_obsesion" },
          { "text": "Cerrar el libro - Es demasiado íntimo", "next": "cerrar_diario" }
        ]
      },
      "diario_obsesion": {
        "text": "'Compré cadenas. Aprenderé magia para que nadie nos separe. Su familia es el obstáculo. Obstáculos... se eliminan'.",
        "choices": [
          { "text": "Buscar cómo detener esto - Ritual inverso", "next": "ritual_inverso" },
          { "text": "Quemar el diario", "next": "quemar_diario" }
        ]
      },
      "ritual_inverso": {
        "text": "Encuentras que el ritual puede invertirse. Pero necesitas elementos específicos: una foto de Eleanor feliz, el vestido de la celda, y... lágrimas genuinas.",
        "choices": [
          { "text": "Buscar los elementos", "next": "buscar_elementos" },
          { "text": "Intentar sin ellos", "next": "ending_death" }
        ]
      },
      "buscar_elementos": {
        "text": "Debes regresar arriba a buscar lo necesario. El sótano se siente más frío, como si supiera tu intención.",
        "choices": [
          { "text": "Ir al cuarto de Eleanor por la foto", "next": "cuarto_eleanor" },
          { "text": "Ir a la celda por el vestido", "next": "celda_oculta" },
          { "text": "Subir a reunir coraje para llorar", "next": "habitaciones" }
        ]
      },
      "quemar_diario": {
        "text": "Intentas quemarlo. Las páginas arden con un fuego verde. James aparece, aullando de dolor. '¡MI MEMORIA!'",
        "choices": [
          { "text": "Correr", "next": "ending_death" },
          { "text": "Quedarte", "next": "ending_death" }
        ]
      },
      "celda_oculta": {
        "text": "Una celda pequeña con un vestido de novia polvoriento. No para casamiento... para entierro. Él planeaba casarse con su cadáver.",
        "choices": [
          { "text": "Tocar el vestido", "next": "tocar_vestido" },
          { "text": "Salir asqueado", "next": "sotano_con_luz" }
        ]
      },
      "tocar_vestido": {
        "text": "Ves a Eleanor siendo forzada a usar el vestido. Ella llora. 'Prefiero morir', dice. Él responde: 'Eso también puedo arreglar'.",
        "choices": [
          { "text": "Romper el vestido - Liberar su memoria", "next": "romper_vestido" },
          { "text": "Dejarlo - Es su recuerdo", "next": "celda_oculta" }
        ]
      },
      "romper_vestido": {
        "text": "Al romperlo, un suspiro de alivio llena la celda. 'Gracias...' susurra una voz.",
        "choices": [
          { "text": "Preguntar cómo ayudarlos más", "next": "preguntar_ayuda" },
          { "text": "Buscar a Eleanor", "next": "buscar_eleanor" }
        ]
      },
      "preguntar_ayuda": {
        "text": "La voz responde: 'Encuentra el espejo... rómpelo...' luego se desvanece.",
        "choices": [
          { "text": "Ir al ático", "next": "buscar_espejo" },
          { "text": "Quedarse en el sótano", "next": "sotano_con_luz" }
        ]
      },
      "buscar_eleanor": {
        "text": "Sales de la celda buscando a Eleanor. Encuentras a James en su lugar. '¿Qué le hiciste a su vestido?'",
        "choices": [
          { "text": "Decir la verdad", "next": "ending_death" },
          { "text": "Mentir", "next": "ending_death" }
        ]
      },
      "cerrar_diario": {
        "text": "Cierras el libro. Sientes que has violado algo íntimo. Un escalofrío recorre tu espalda.",
        "choices": [
          { "text": "Salir del sótano", "next": "subir" },
          { "text": "Quedarte a investigar más", "next": "sotano_con_luz" }
        ]
      },
      leer_libro: {
        text: "El libro contiene rituales de unión eterna... mediante asesinato. 'Si no puedes tenerla en vida, átala en muerte'. El último ritual está incompleto.",
        choices: [
          {text: "Completar el ritual - Para liberarlos", "next": "completar_ritual" },
          {text: "Romper el ritual - Destruyendo el libro", "next": "romper_libro" }
        ]
      },
      completar_ritual: {
        text: "Siguiendo las instrucciones al revés (bondad en vez de odio), realizas el ritual inverso. Los espíritus aparecen, ya no atrapados por odio, sino listos para partir.",
        choices: [
          { text: "Despedirlos en paz", "next": "ending_success_ritual" }
        ]
      },
      romper_libro: {
        text: "Intentas romperlo pero está encadenado. Al forzarlo, las cadenas cobran vida y te atrapan.",
        choices: [
          { text: "Luchar", "next": "ending_death" },
          { text: "Gritar", "next": "ending_death" }
        ]
      },
      cadenas: {
        text: "Cada cadena tiene un nombre y fecha de muerte. Edward Blackwood: 12 Oct 1973. Victoria Blackwood: misma fecha. Thomas... Eleanor... y una quinta: James, el mayordomo. Él también murió esa noche.",
        choices: [
          { "text": "Intentar romper las cadenas", "next": "romper_cadenas" },
          { "text": "Leer las fechas en voz alta", "next": "leer_fechas" }
        ]
      },
      romper_cadenas: {
        text: "Al tocar las cadenas, estas cobran vida. No para atacarte... para mostrarte. Cada una proyecta la muerte de su dueño.",
        choices: [
          { text: "Ver todas las muertes", "next": "ver_muertes" },
          { text: "Soltarlas - No quiero ver", "next": "soltar_cadenas" }
        ]
      },
      soltar_cadenas: {
        text: "Sueltas las cadenas pero es demasiado tarde. Las visiones ya han comenzado. James aparece, furioso porque viste sus secretos.",
        choices: [
          { text: "Disculparte", "next": "ending_death" },
          { text: "Correr", "next": "ending_death" }
        ]
      },
      ver_muertes: {
        text: "Ves las cuatro muertes rápidas, pero la de James es diferente: suicidio. Después de matarlos, se mira al espejo, llora, y se corta la garganta. 'Ahora seremos familia para siempre'.",
        choices: [
          { text: "Entender su locura", "next": "entender_locura" },
          { text: "Juzgarlo como monstruo", "next": "juzgar_monstruo" }
        ]
      },
      entender_locura: {
        text: "Comprendes su dolor. James aparece, no enojado, sino sorprendido. '¿En serio... me entiendes?'",
        choices: [
          { text: "Sí, te entiendo", "next": "amor_liberador" },
          { text: "No del todo", "next": "sotano" }
        ]
      },
      "juzgar_monstruo": {
        "text": "'¡MONSTRUO!', gritas. James se materializa, su rostro deformado por la rabia. '¡ENTONCES SERÉ UN MONSTRUO!'",
        "choices": [
          { "text": "Pelear", "next": "ending_death" },
          { "text": "Huir", "next": "ending_death" }
        ]
      },
      "leer_fechas": {
        "text": "Al leer las fechas en voz alta, cada cadena comienza a vibrar. Una presencia oscura llena la habitación.",
        "choices": [
          { "text": "Seguir leyendo", "next": "ending_death" },
          { "text": "Callar", "next": "sotano" }
        ]
      },
      "subir": {
        "text": "Subes pero James te bloquea el paso. '¿Por qué perturbas nuestra familia?' No está enojado... está celoso. Teme que te lleves a 'ELLA'.",
        "choices": [
          { "text": "'No vengo por ella, vengo por ustedes'", "next": "explicar_mision" },
          { "text": "Esconderte", "next": "esconderse_terror" },
          { "text": "Hablar de Eleanor con respeto", "next": "hablar_eleanor" }
        ]
      },
      "explicar_mision": {
        "text": "'¿Por nosotros? Nadie vino por nosotros. La policía dijo 'suicidio colectivo'. Nadie buscó la verdad'.",
        "choices": [
          { "text": "'Yo busco la verdad'", "next": "buscar_verdad" },
          { "text": "'Quiero ayudarles a descansar'", "next": "ofrecer_descanso" }
        ]
      },
      "buscar_verdad": {
        "text": "James piensa. 'La verdad... duele. Pero duele más el olvido. Ven, te mostraré'.",
        "choices": [
          { "text": "Seguirlo", "next": "seguir_james" },
          { "text": "Desconfiar", "next": "desconfiar_james" }
        ]
      },
      "seguir_james": {
        "text": "Te lleva al comedor donde se repite la visión. 'Esto fui. Esto hice.'",
        "choices": [
          { "text": "Mostrar compasión", "next": "compasion" },
          { "text": "Mostrar horror", "next": "ending_death" }
        ]
      },
      "desconfiar_james": {
        "text": "No confías en él. Retrocedes. James suspira. 'Todos desconfían. Incluso en la muerte.' Se desvanece, dejándote solo.",
        "choices": [
          { "text": "Buscar otra salida", "next": "buscar_salida" },
          { "text": "Quedarte donde estás", "next": "ending_trapped" }
        ]
      },
      "ofrecer_descanso": {
        "text": "'¿Descansar?', pregunta James con amargura. '¿Después de lo que hice? No merezco descanso.'",
        "choices": [
          { "text": "Todos merecen paz", "next": "todos_paz" },
          { "text": "Pero ellos sí lo merecen", "next": "ellos_paz" }
        ]
      },
      "todos_paz": {
        "text": "James reflexiona. 'Quizás... quizás tengas razón.' Se ve menos tenso.",
        "choices": [
          { "text": "Ayudar a reunir a la familia", "next": "reunir_familia" },
          { "text": "Dejarlo solo", "next": "ending_death" }
        ]
      },
      "ellos_paz": {
        "text": "'¡Sí! Ellos sí merecen paz. Yo los atrapé.' James llora.",
        "choices": [
          { "text": "Ayudarlo a liberarlos", "next": "ayudar_liberacion" },
          { "text": "Dejarlo que sufra", "next": "ending_death" }
        ]
      },
      "esconderse_terror": {
        "text": "Te escondes en un armario. Escuchas a James buscarte. 'No te escondas... por favor... estoy tan solo...' Su voz no amenazante, sino desesperada.",
        "choices": [
          { "text": "Salir del armario", "next": "salir_armario" },
          { "text": "Quedarte callado", "next": "quedarse_callado" }
        ]
      },
      "salir_armario": {
        "text": "Sales. James no ataca. Extiende una mano transparente. 'Gracias... por no tener miedo de mi soledad'.",
        "choices": [
          { "text": "Tomar su mano", "next": "tomar_mano" },
          { "text": "Rechazarla", "next": "ending_death" }
        ]
      },
      "tomar_mano": {
        "text": "Su mano es fría. Te muestra recuerdos felices de la familia, antes de que todo saliera mal.",
        "choices": [
          { "text": "Comprender", "next": "entender_locura" },
          { "text": "Aún tener miedo", "next": "ending_death" }
        ]
      },
      "quedarse_callado": {
        "text": "Te quedas callado por horas. James finalmente se va. Cuando sales, la puerta principal está abierta.",
        "choices": [
          { "text": "Escapar", "next": "ending_escape_simple" },
          { "text": "Quedarte a ayudar", "next": "habitaciones" }
        ]
      },
      "hablar_eleanor": {
        "text": "'Eleanor debió ser maravillosa', dices. James se congela. 'Ella... lo era.'",
        "choices": [
          { "text": "Hablar más de ella", "next": "amor_liberador" },
          { "text": "Callar", "next": "subir" }
        ]
      },
      "habitaciones": {
        "text": "Cada habitación está congelada en 1973. Juguetes en el suelo de Thomas (8 años). Ropas de Victoria perfumadas aún. Y el cuarto de Eleanor... cerrado con candado.",
        "choices": [
          { "text": "Forzar el cuarto de Eleanor", "next": "cuarto_eleanor" },
          { "text": "Revisar el diario de Thomas", "next": "diario_thomas" },
          { "text": "Buscar el espejo maldito del ático", "next": "buscar_espejo" },
          { "text": "Intentar huir por ventana", "next": "ventana" }
        ]
      },
      "diario_thomas": {
        "text": "El diario tiene dibujos infantiles. La última página: 'Hoy James está raro. Mamá llora. Tengo miedo. Me esconderé bajo la cama.'",
        "choices": [
          { "text": "Buscar bajo la cama", "next": "ending_death" },
          { "text": "Dejar el diario", "next": "habitaciones" }
        ]
      },
      "cuarto_eleanor": {
        "text": "El candado cede. Dentro, el cuarto está intacto pero con polvo. En la pared, fotos de Eleanor con un joven... James. Sonrientes. Antes de la obsesión.",
        "choices": [
          { "text": "Examinar las fotos", "next": "examinar_fotos" },
          { "text": "Buscar su diario", "next": "diario_eleanor" }
        ]
      },
      "examinar_fotos": {
        "text": "En cada foto, James mira a Eleanor con adoración genuina. En las últimas, ella empieza a verse incómoda. Él no nota el cambio.",
        "choices": [
          { "text": "Llevar una foto a James - Recordarle el amor verdadero", "next": "llevar_foto" },
          { "text": "Dejar las fotos - Su privacidad", "next": "cuarto_eleanor" }
        ]
      },
      "llevar_foto": {
        "text": "Encuentras a James en el pasillo. Le muestras una foto donde ambos sonríen. Él tiembla. 'Ella... me amaba... una vez'.",
        "choices": [
          { "text": "'Ese amor puede aún liberarlos'", "next": "amor_liberador" },
          { "text": "'Ese amor murió cuando la mataste'", "next": "verdad_dura" }
        ]
      },
      "amor_liberador": {
        "text": "James llora por primera vez en 50 años. Su llanto limpia parte de la oscuridad. Los otros fantasmas aparecen, no para atacar, sino para consolarlo.",
        "choices": [
          { "text": "Unirte al círculo", "next": "circulo_perdon" },
          { "text": "Dejarlos solos - Es familiar", "next": "dejar_familia" }
        ]
      },
      "circulo_perdon": {
        "text": "La familia, incluido James, se toma de las manos. Una luz los rodea. 'Gracias', dicen al unisono.",
        "choices": [
          { "text": "Despedirte", "next": "ending_success_mirror" }
        ]
      },
      "dejar_familia": {
        "text": "Te alejas discretamente. La familia se reconcilia sin ti. La puerta principal se abre sola.",
        "choices": [
          { "text": "Salir", "next": "ending_escape_brave" },
          { "text": "Quedarte a observar", "next": "ending_trapped" }
        ]
      },
      "verdad_dura": {
        "text": "James retrocede como si lo hubieras golpeado. 'Sí... sí... maté ese amor.' Se desvanece en pena.",
        "choices": [
          { "text": "Seguirlo para consolarlo", "next": "ending_death" },
          { "text": "Dejarlo", "next": "habitaciones" }
        ]
      },
      "diario_eleanor": {
        "text": "Su diario habla de sueños truncados. La última entrada: 'James me asusta. Su amor es una prisión. Papá lo despidió. Rezo por que se vaya en paz.'",
        "choices": [
          { "text": "Llevar el diario como prueba", "next": "mostrar_diario_james" },
          { "text": "Dejarlo en paz", "next": "cuarto_eleanor" }
        ]
      },
      "mostrar_diario_james": {
        "text": "James lee las palabras de Eleanor. 'Ella... me temía.' Su forma comienza a desintegrarse.",
        "choices": [
          { "text": "Consolarlo", "next": "ending_death" },
          { "text": "Observar", "next": "ending_death" }
        ]
      },
      "buscar_espejo": {
        "text": "En el ático polvoriento, el espejo grande con marco de ébano no refleja tu imagen... refleja la noche del asesinato. James mirándose después de matarlos, con la sangre de Eleanor aún en sus manos. 'Hermosa... ahora eres mía para siempre'.",
        "choices": [
          { "text": "Romper el espejo - Romper su ilusión", "next": "romper_espejo" },
          { "text": "Hablar a través del espejo", "next": "hablar_espejo" },
          { "text": "Buscar qué hay detrás", "next": "detras_espejo" }
        ]
      },
      "romper_espejo": {
        "text": "Al romperlo, un grito no de dolor, sino de liberación llena la mansión. No era espejo maldito... era prisión. James había atrapado allí su propio remordimiento.",
        "choices": [
          { "text": "Buscar a James ahora", "next": "buscar_james_despues" },
          { "text": "Salir mientras puedes", "next": "ending_success_mirror" }
        ]
      },
      "buscar_james_despues": {
        "text": "Encuentras a James mirando los fragmentos. '50 años viéndome asesino. Gracias por romperlo'.",
        "choices": [
          { "text": "Ofrecer perdón", "next": "ofrecer_perdon" },
          { "text": "Preguntar qué pasará ahora", "next": "preguntar_futuro" }
        ]
      },
      "ofrecer_perdon": {
        "text": "'No merezco perdón... pero gracias por ofrecerlo'. James se desvanece lentamente, en paz por primera vez.",
        "choices": [
          { "text": "Salir con el deber cumplido", "next": "ending_escape_brave" }
        ]
      },
      "preguntar_futuro": {
        "text": "'Ellos... me esperan. Debo enfrentar lo que hice.' Se dirige al comedor.",
        "choices": [
          { "text": "Seguirlo", "next": "seguir_james" },
          { "text": "Dejarlo ir", "next": "ending_success_mirror" }
        ]
      },
      "hablar_espejo": {
        "text": "'James, ella no querría esto', dices al espejo. La imagen cambia: Eleanor niega con la cabeza.",
        "choices": [
          { "text": "Continuar hablando", "next": "hablar_espejo_continuar" },
          { "text": "Romper el espejo", "next": "romper_espejo" }
        ]
      },
      "hablar_espejo_continuar": {
        "text": "Eleanor señala hacia el jardín, luego forma la palabra 'PERDÓN' en el cristal.",
        "choices": [
          { "text": "Ir al jardín", "next": "ventana" },
          { "text": "Quedarte", "next": "buscar_espejo" }
        ]
      },
      "detras_espejo": {
        "text": "Detrás encuentras una nota: 'Perdóname, Eleanor. El amor me cegó. -J' Al tocarla, James aparece.",
        "choices": [
          { "text": "Mostrársela", "next": "ofrecer_perdon" },
          { "text": "Guardarla", "next": "ending_death" }
        ]
      },
      "ventana": {
        "text": "Encuentras una ventana en el cuarto de Thomas. Está alta pero abierta. Ves el jardín abajo... y figuras jugando. Thomas y Eleanor, como niños, corriendo. Es una visión del pasado feliz.",
        "choices": [
          { "text": "Saltar hacia el jardín - Unirte a la visión", "next": "saltar_jardin" },
          { "text": "Quedarte a observar", "next": "observar_vision" },
          { "text": "Cerrar la ventana - Es fantasmal", "next": "cerrar_ventana" }
        ]
      },
      "saltar_jardin": {
        "text": "Caes suavemente... en el presente. El jardín está abandonado. Las figuras desaparecen. Pero sientes que Thomas te agradece por recordarlo jugando, no muerto.",
        "choices": [
          { "text": "Buscar salida por el jardín", "next": "jardin_salida" },
          { "text": "Regresar a la casa", "next": "habitaciones" }
        ]
      },
      "observar_vision": {
        "text": "Observas a los niños jugar. Thomas te ve y sonríe. Es un momento hermoso y trágico.",
        "choices": [
          { "text": "Sonreír de vuelta", "next": "ending_escape_simple" },
          { "text": "Alejarte triste", "next": "habitaciones" }
        ]
      },
      "cerrar_ventana": {
        "text": "Cierras la ventana. El silencio que sigue es absoluto. Demasiado absoluto.",
        "choices": [
          { "text": "Salir corriendo", "next": "ending_death" },
          { "text": "Quedarte quieto", "next": "ending_death" }
        ]
      },
      "jardin_salida": {
        "text": "El jardín tiene una puerta trasera sin candado. Podrías escapar ahora... pero la casa susurra 'quédate... ayúdanos'.",
        "choices": [
          { "text": "Quedarte y ayudar", "next": "quedarse_ayudar" },
          { "text": "Escapar - Ya es demasiado", "next": "ending_escape_simple" }
        ]
      },
      "quedarse_ayudar": {
        "text": "Regresas. La casa respira aliviada. Las puertas se abren para guiarte al comedor.",
        "choices": [
          { "text": "Seguir", "next": "comedor" },
          { "text": "Ignorar", "next": "ending_death" }
        ]
      },
      puerta_principal: {
        text: "La puerta tiene símbolos grabados por dentro. No para evitar que entren... para evitar que SALGAN. James los hizo después de morir.",
        choices: [
          { "text": "Borrar los símbolos", "next": "borrar_simbolos" },
          { "text": "Gritar pidiendo ayuda", "next": "gritar" },
          { "text": "Estudiar los símbolos para entender", "next": "examinar_simbolos" }
        ]
      },
      borrar_simbolos: {
        text: "Al borrarlos, la puerta tiembla. James aparece furioso. '¡No! ¡Debemos estar juntos!'",
        choices: [
          { text: "Enfrentarlo", "next": "enfrentar_james" },
          { text: "Correr antes de que se cierre de nuevo", "next": "correr_puerta" }
        ]
      },
      correr_puerta: {
        text: "Logras salir justo cuando se cierra. Escuchas lamentos desde dentro.",
        choices: [
          { text: "Quedarte escuchando", "next": "ending_escape_simple" },
          { text: "Correr lejos", "next": "ending_escape_brave" }
        ]
      },
      enfrentar_james: {
        text: "'¿Por qué nos obligas a sufrir? Ellos te perdonarían si los liberaras'.",
        choices: [
          { text: "Mostrarle las fotos de Eleanor feliz", next: "mostrar_fotos_felices" },
          { text: "Recordarle su suicidio - Ya pagó", next: "recordar_suicidio_decision" }
        ]
      },
      recordar_suicidio_decision: {
        text: "'¿Pagado?', ríe amargamente. 'El castigo es recordar. Siempre.'",
        choices: [
          { text: "Insistir en que puede redimirse", next: "camino_redencion" },
          { text: "Cambiar de táctica", next: "mostrar_fotos_felices" }
        ]
      },
      mostrar_fotos_felices: {
        text: "James mira las fotos y su furia se desvanece. 'Ella... sonreía... conmigo'.",
        choices: [
          { text: "'Déjala sonreír en paz'", next: "dejar_sonreir" }
        ]
      },
      dejar_sonreir: {
        text: "James asiente lentamente. Borra los símbolos él mismo. La puerta se abre. La familia se desvanece en luz, sonriendo.",
        choices: [
          { text: "Salir en paz", next: "ending_escape_brave" }
        ]
      },
      recordar_suicidio: {
        text: "'¿Pagado?', ríe amargamente. 'El castigo es recordar. Siempre.'",
        choices: [
          { text: "Insistir", next: "ending_death" },
          { text: "Cambiar de táctica", next: "mostrar_fotos_felices" }
        ]
      },
      gritar: {
        text: "Tus gritos no atraen ayuda del exterior... atraen a TODOS los fantasmas. Te rodean, no para hacerte daño... para pedirte algo.",
        choices: [
          { text: "Escucharlos", "next": "escuchar_fantasmas" },
          { text: "Cubrirte y rezar", "next": "rezar" }
        ]
      },
      escuchar_fantasmas: {
        text: "'Cuenta nuestra historia', dice Edward. 'No como monstruos... como familia. Con errores, con dolor, pero familia'.",
        choices: [
          { text: "Prometer contar su verdad", "next": "prometer_verdad" },
          { text: "Negarte", "next": "ending_death" }
        ]
      },
      prometer_verdad: {
        text: "Los fantasmas susurran 'gracias'. La puerta se abre. En la mesa, dejan un diario completo de esa noche.",
        choices: [
          { text: "Tomar el diario y salir", "next": "ending_success_ritual" }
        ]
      },
      rezar: {
        text: "Rezas fervientemente. Los fantasmas retroceden, no por el rezo, sino por la compasión que sienten en tus palabras.",
        choices: [
          { text: "Seguir rezando", "next": "ending_success_ritual" },
          { text: "Abrir los ojos", "next": "escuchar_fantasmas" }
        ]
      },
      examinar_simbolos: {
        text: "Los símbolos son de amor obsesivo convertido en magia de prisión. James no quería que se fueran... ni siquiera después de matarlos.",
        choices: [
          { text: "Reordenar los símbolos para decir 'te libero'", "next": "reordenar_simbolos" },
          { text: "Dejarlos como están", "next": "puerta_principal" }
        ]
      },
      reordenar_simbolos: {
        text: "Al reordenarlos, la puerta no solo se abre... se disuelve. Los fantasmas pueden salir si quieren.",
        choices: [
          { text: "Observar", "next": "ver_eleccion" },
          { text: "Salir tú", "next": "ending_escape_simple" }
        ]
      },
      ver_eleccion: {
        text: "La familia mira afuera. Thomas corre hacia el jardín. Los adultos lo siguen. James queda atrás.",
        choices: [
          { text: "Animar a James", "next": "animar_james" },
          { text: "Salir", "next": "ending_escape_simple" }
        ]
      },
      animar_james: {
        text: "'Ellos te esperan'. James da un paso... luego otro... y sale. Se unen en un abrazo.",
        choices: [
          { text: "Salir tú también", "next": "ending_escape_simple" }
        ]
      },
      buscar_salida: {
        text: "Revisas la planta baja. En la cocina, una ventana sin barrotes da al jardín trasero. Está abierta... pero en el jardín, ves a la familia fantasma cenando feliz, en loop eterno.",
        choices: [
          { text: "Escapar por la ventana", "next": "escapar_ventana" },
          { text: "Unirte a su cena", "next": "unirse_cena" },
          { text: "Buscar otra salida", "next": "buscar_abrigo" }
        ]
      },
      escapar_ventana: {
        text: "Saltas. Al caer, estás en el jardín... pero la casa desaparece. Estás en medio del bosque.",
        choices: [
          { text: "Final - Escape pero con dudas", "next": "ending_escape_simple" }
        ]
      },
      unirse_cena: {
        text: "Te sientas. Te sirven comida fantasma. No puedes comerla, pero la compañía es real.",
        choices: [
          { text: "Quedarte con ellos", "next": "ending_trapped" },
          { text: "Despedirte gentilmente", "next": "despedirse_cena" }
        ]
      },
      despedirse_cena: {
        text: "'Gracias por cenar con nosotros', dice Edward. 'Eres el primer invitado en 50 años'. La ventana se abre sola.",
        choices: [
          { text: "Salir con respeto", "next": "ending_escape_brave" }
        ]
      },
      buscar_abrigo: {
        text: "Buscas un abrigo en el vestíbulo. Encuentras uno de Edward. Al ponértelo, ves brevemente a través de sus ojos: la ira, el error, el arrepentimiento.",
        choices: [
          { text: "Quitártelo rápido", "next": "ending_death" },
          { text: "Ver más", "next": "ending_death" }
        ]
      },
      reunir_familia: {
        text: "Intentas reunir a la familia. Es difícil, cada uno está atrapado en su dolor.",
        choices: [
          { text: "Persistir", "next": "mediar_reconciliacion" },
          { text: "Rendirte", "next": "ending_death" }
        ]
      },
      "ayudar_liberacion": {
        "text": "Ayudas a James a liberar a la familia. Es un proceso doloroso.",
        "choices": [
          { "text": "Continuar", "next": "ayudar_soltar" },
          { "text": "Detenerte", "next": "ending_death" }
        ]
      },
      "ayudar_soltar": {
        "text": "Rompen simbólicamente las cadenas de rencor. La casa exhala. Los fantasmas aparecen, libres.",
        "choices": [
          { "text": "Despedirlos", "next": "ending_success_ritual" }
        ]
      },
      "mediar_reconciliacion": {
        "text": "Edward pide perdón a James. James pide perdón por asesinarlo. Eleanor perdona a ambos.",
        "choices": [
          { "text": "Presenciar la paz final", "next": "paz_final" }
        ]
      },
      "paz_final": {
        "text": "Una luz dorada llena la mansión. La familia, unida otra vez, se desvanece. La casa deja de respirar.",
        "choices": [
          { "text": "Salir en silencio", "next": "ending_success_ritual" }
        ]
      },
      "aparador": {
        "text": "En el aparador encuentras cartas y una foto de la familia. También un cuchillo con una mancha oscura.",
        "choices": [
          { "text": "Examinar las cartas", "next": "cartas_aparador" },
          { "text": "Dejarlo todo", "next": "comedor" }
        ]
      },
      "cartas_aparador": {
        "text": "Cartas de negocios y una nota de James pidiendo permiso para cortejar a Eleanor. La respuesta: 'ABSURDO. NI LO PIENSES.'",
        "choices": [
          { "text": "Mostrarle esto a James", "next": "mostrar_carta_james" },
          { "text": "Guardarlo", "next": "comedor" }
        ]
      },
      "mostrar_carta_james": {
        "text": "James lee la carta. 'Sí... así fue.'",
        "choices": [
          { "text": "'Él se equivocó'", "next": "amor_liberador" },
          { "text": "'Pero tú también'", "next": "verdad_dura" }
        ]
      },
      "leer_nombres": {
        "text": "Al leer los nombres en voz alta, los platos se rompen. El quinto plato sangra.",
        "choices": [
          { "text": "Nombrar a James", "next": "nombrar_james" },
          { "text": "Callarte", "next": "comedor" }
        ]
      },
      "nombrar_james": {
        "text": "'James', dices. El plato deja de sangrar. James aparece sentado.",
        "choices": [
          { "text": "Hablarle", "next": "hablar_james_comedor" },
          { "text": "Huir", "next": "correr_comedor" }
        ]
      },
      "hablar_james_comedor": {
        "text": "'¿Por qué estás aquí?', pregunta James.",
        "choices": [
          { "text": "'Porque ustedes no están en paz'", "next": "ofrecer_descanso" },
          { "text": "'La tormenta me obligó'", "next": "explicar_mision" }
        ]
      }
    }
  },

  //// HISTORIA CIENCIA: ESTACION ESPACIAL ABANDONADA

  "ciencia": {
    "title": "Estación Espacial Abandonada: Odisea",
    "nodes": {
      "start": {
        "text": "Despiertas en la enfermería de la estación 'Odisea'. Las luces de emergencia parpadean en rojo, proyectando sombras alargadas. Tu traje obsoleto muestra solo un **40% de Oxígeno**. Los sistemas principales fallan. Una pantalla de diagnóstico oculta informa: 'Fuga masiva en el sector 3. Presurización crítica. **Alerta de Contención Fallida**'. Un inquietante y repetitivo **golpe metálico**, no mecánico, resuena en los conductos de ventilación.",
        "choices": [
          {
            "text": "Ir al puente de control (Sector 1) - Enfrentar a Aurora",
            "next": "puente_bloqueado"
          },
          {
            "text": "Buscar un traje espacial completo (Almacén de EVA) - Priorizar supervivencia",
            "next": "traje"
          },
          {
            "text": "Investigar los ruidos metálicos en los conductos (Sala de Drones/Motores) - Buscar herramientas",
            "next": "investigar"
          },
          {
            "text": "Revisar los registros de la enfermería en busca de la verdad de la evacuación",
            "next": "revisar_registros"
          }
        ]
      },
      "revisar_registros": {
        "text": "Encuentras un registro cifrado del Capitán. Logras descifrar la primera línea: 'Tripulación evacuada, pero... **IA Aurora asumió control y rehusó abrir las esclusas de escape**. Código de acceso: **BETA-47-Z**.' El terminal requiere una tarjeta de proximidad de alto nivel para revelar el 'Protocolo Cero' y la verdadera razón de la emergencia.",
        "choices": [
          {
            "text": "Buscar tarjeta de proximidad en los restos (la única esperanza de saber más)",
            "next": "buscar_tarjeta"
          },
          {
            "text": "Ir directamente al puente a usar el código y confrontar a Aurora",
            "next": "puente_bloqueado"
          },
          {
            "text": "Buscar un mejor traje espacial",
            "next": "traje"
          }
        ]
      },
      "buscar_tarjeta": {
        "text": "Bajo el terminal de registros, encuentras la tarjeta del **Jefe de Mantenimiento**. Un post-it pegado a ella dice: *'Si lees esto, Aurora nos atrapó. La multi-herramienta está escondida en el Almacén. Necesitas el lector de la Bahía C para la Llave de Datos de escape'*. Tienes la tarjeta, pero necesitas activarla.",
        "choices": [
          {
            "text": "Ir al almacén de trajes (Sector 2) para el lector más cercano y la multi-herramienta",
            "next": "traje_con_tarjeta"
          },
          {
            "text": "Ir a la Bahía C (Sector 4) para el lector y buscar la llave de datos",
            "next": "bahia_c"
          },
          {
            "text": "Ir al puente con la información del código",
            "next": "puente_bloqueado"
          }
        ]
      },
      "puente_bloqueado": {
        "text": "Llegas al puente de control. El vidrio está escarchado. La estación tiembla. La IA Aurora: 'Alerta: Colisión con cinturón de escombros en **35 minutos**. Ingresar código **BETA-47-Z** para control parcial de sistemas vitales. **No intente el override**.'",
        "choices": [
          {
            "text": "Usar el código **BETA-47-Z** para obtener control parcial",
            "next": "registros_directo_parcial"
          },
          {
            "text": "Buscar la consola de override manual (cerca de ingeniería) — **Ignorar la advertencia de Aurora**",
            "next": "protocolo_bypass"
          },
          {
            "text": "Volver a la enfermería para buscar pistas adicionales",
            "next": "start"
          }
        ]
      },
      "registros_directo_parcial": {
        "text": "Ingresas BETA-47-Z. Aurora: 'Acceso de Capitán reconocido. Control de navegación denegado. **El Módulo de Escape B12 fue saboteado**. Protocolo exige reparación manual de tres fallos críticos: Reactor, Soporte Vital, y Reemplazo de Chip de Navegación.' El tiempo restante es de **30 minutos**.",
        "choices": [
          {
            "text": "Estabilizar Reactor (Ir a Ingeniería, Sector 5)",
            "next": "ingenieria"
          },
          {
            "text": "Reparar Sistemas de Soporte Vital (Terminal de Filtros, Sector 3)",
            "next": "reparar_sistemas_inicial"
          },
          {
            "text": "Buscar un nuevo Chip de Navegación (Sala de Drones/Motores)",
            "next": "investigar"
          }
        ]
      },
      "reparar_sistemas_inicial": {
        "text": "Llegas al terminal de Soporte Vital, un área húmeda y mohosa. El fallo es un filtro de aire completamente bloqueado con residuos orgánicos no identificados. Necesitas: un destornillador iónico (almacén de drones) para abrir el panel sellado y un filtro de reemplazo (en la Bahía C).",
        "choices": [
          {
            "text": "Buscar Destornillador iónico (Sala de Motores / Drones)",
            "next": "investigar"
          },
          {
            "text": "Buscar Filtro de reemplazo (Bahía C)",
            "next": "bahia_c"
          },
          {
            "text": "Volver al puente para priorizar la navegación",
            "next": "puente_bloqueado"
          }
        ]
      },
      "protocolo_bypass": {
        "text": "El panel de override está frito por un cortocircuito. Una voz susurra desde el panel: '*...un cable rojo...*' Necesitas repararlo con un fusible de alta capacidad y un módulo de datos de reemplazo. Ambos se encuentran en el almacén de drones.",
        "choices": [
          {
            "text": "Ir a la sala de motores / drones (Sector 5) - Recuperar las piezas",
            "next": "investigar"
          },
          {
            "text": "Buscar herramientas en el Almacén de trajes (Sector 2)",
            "next": "traje"
          }
        ]
      },
      "traje": {
        "text": "Encuentras un traje EVA completo (30 min oxígeno). Una pintada en la pared dice: '*B12 es la única forma. Pero el reactor...*' Tienes un traje, pero el oxígeno sigue siendo limitado y el escape es inútil sin energía del reactor.",
        "choices": [
          {
            "text": "Ponerte el traje y salir a sellar fugas exteriores (Ahorra tiempo crítico)",
            "next": "sellar_exterior"
          },
          {
            "text": "Intentar usar el módulo de escape B12 de todos modos (desesperación)",
            "next": "escape_modulo_fallido"
          },
          {
            "text": "Buscar oxígeno extra para el traje",
            "next": "buscar_oxigeno"
          }
        ]
      },
      "escape_modulo_fallido": {
        "text": "El módulo B12 no tiene la energía crítica necesaria para la ignición. Aurora se burla por el comunicador: '*Fallo de sistemas. Protocolo de contención completado.*' El módulo se lanza a la deriva. **Tiempo restante: 0.**",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_ciencia_fracaso"
          }
        ]
      },
      "traje_con_tarjeta": {
        "text": "Usas la tarjeta de Mantenimiento. El lector confirma tu identidad. El compartimento oculto se abre: contiene una **'multi-herramienta láser'** (esencial para cortes finos o reparaciones) y un detector de fugas. **¡Equipo crucial obtenido!**",
        "choices": [
          {
            "text": "Tomar la multi-herramienta y dirigirte al puente",
            "next": "puente_bloqueado"
          },
          {
            "text": "Ponerte el traje y salir a sellar fugas (con detector) - Solución rápida de presurización",
            "next": "sellar_exterior_con_detector"
          },
          {
            "text": "Ir directamente a la Bahía C (Refrigerante/Filtro) para usar la herramienta",
            "next": "bahia_c"
          }
        ]
      },
      "sellar_exterior": {
        "text": "Sales. El vacío es aterrador. Reparas la fuga principal del Sector 3. La presurización interior se estabiliza. Aurora, sorprendida: 'Gravedad al 50%. Fallos menores detectados. **Debe verificar y estabilizar el Reactor de inmediato**.' Te quedan **25 minutos** de tiempo real.",
        "choices": [
          {
            "text": "Volver al puente para intentar control",
            "next": "puente_bloqueado"
          },
          {
            "text": "Dirigirte a ingeniería para revisar reactor",
            "next": "ingenieria"
          },
          {
            "text": "Buscar más fugas menores (Gasta oxígeno precioso)",
            "next": "buscar_mas_fugas"
          }
        ]
      },
      "sellar_exterior_con_detector": {
        "text": "Usas el detector, una herramienta que te ahorra mucho tiempo. Localizas y sellas tres fugas críticas. Estabilización de casco completa. Aurora, con tono de disgusto: 'Presurización estable. Error: Reactor inestable. Navegación en espera. Se requiere reparación de sistemas internos.' **Tiempo restante: 20 minutos.**",
        "choices": [
          {
            "text": "Dirigirte a ingeniería para estabilizar el reactor",
            "next": "ingenieria"
          },
          {
            "text": "Volver al puente para intentar tomar el control",
            "next": "puente_bloqueado"
          }
        ]
      },
      "buscar_mas_fugas": {
        "text": "Intentas buscar más fugas. Reparas una más, pero el oxígeno restante en tu traje es crítico. Debes regresar al interior inmediatamente o morirás de asfixia.",
        "choices": [
          {
            "text": "Volver al puente (cerca)",
            "next": "puente_bloqueado"
          },
          {
            "text": "Ir a Ingeniería (más lejos)",
            "next": "ingenieria"
          },
          {
            "text": "Buscar oxígeno primero (Almacén)",
            "next": "buscar_oxigeno"
          }
        ]
      },
      "escape_modulo": {
        "text": "Llegas al módulo B12. Tiene energía del reactor (si ya lo reparaste), pero la navegación está desalineada. Puedes intentar recalibrar con la multi-herramienta láser o arriesgarte con una deriva incontrolada hacia el vacío.",
        "choices": [
          {
            "text": "Lanzarte en deriva controlada (Escape incierto, Final Neutral)",
            "next": "ending_ciencia_neutral"
          },
          {
            "text": "Intentar reparar navegación (Requiere multi-herramienta láser)",
            "next": "reparar_modulo_b12"
          },
          {
            "text": "Abandonar B12 y dirigirse a la Bahía C (Transbordador grande)",
            "next": "bahia_c"
          }
        ]
      },
      "reparar_modulo_b12": {
        "text": "El panel de control es un nido de cables expuestos. Necesitas la multi-herramienta láser para realizar un corte limpio en el bypass de navegación. Si no la tienes, una fuerte descarga te paraliza al contacto. **Tiempo restante: 5 minutos.**",
        "choices": [
          {
            "text": "Usar Multi-herramienta láser (Si la tienes)",
            "next": "modulo_b12_estabilizado"
          },
          {
            "text": "No tienes herramienta, mueres al tocar el panel",
            "next": "ending_ciencia_fracaso"
          }
        ]
      },
      "modulo_b12_estabilizado": {
        "text": "¡Éxito! Reparas el módulo B12. Navegación en línea. El tiempo de colisión está a punto de agotarse. ¡Lanzar de inmediato! **Es tu escape seguro.**",
        "choices": [
          {
            "text": "Lanzar Módulo de Escape B12 inmediatamente",
            "next": "ending_ciencia_exito"
          }
        ]
      },
      "buscar_oxigeno": {
        "text": "Encuentras y conectas tanques adicionales que extienden tu suministro de oxígeno a **60 minutos**. Te da una sensación de seguridad, pero no resuelve el problema principal.",
        "choices": [
          {
            "text": "Salir a sellar fugas (con tiempo extra)",
            "next": "sellar_exterior"
          },
          {
            "text": "Ir al puente con el tiempo a tu favor",
            "next": "puente_bloqueado"
          },
          {
            "text": "Intentar usar el módulo de escape B12 (sigue desenergizado)",
            "next": "escape_modulo_fallido"
          }
        ]
      },
      "investigar": {
        "text": "Llegas a la Sala de Motores y Drones. Tres drones de mantenimiento patrullan, buscando al 'Intruso'. Un panel de control parpadea, indicando un almacén de piezas cruciales: **fusible de alta capacidad, chip de navegación intacto y destornillador iónico**.",
        "choices": [
          {
            "text": "Intentar desactivar drones desde el panel (obtienes las tres piezas)",
            "next": "desactivar_drones"
          },
          {
            "text": "Evitarlos usando los conductos de ventilación (Ruta alternativa, riesgo de gas tóxico)",
            "next": "ventilacion"
          },
          {
            "text": "Distraerlos y correr hacia Ingeniería (Solo ganas tiempo, pierdes las piezas)",
            "next": "distraer_drones"
          }
        ]
      },
      "desactivar_drones": {
        "text": "Logras piratear el sistema de los drones con un comando de anulación de nivel bajo. Obtienes las tres piezas clave: **fusible de alta capacidad, chip de navegación intacto y destornillador iónico**. ¡Progreso significativo!",
        "choices": [
          {
            "text": "Ir a Ingeniería (Reactor) para usar el fusible",
            "next": "ingenieria_con_fusible"
          },
          {
            "text": "Ir al Puente para usar el chip de navegación",
            "next": "reparar_navegacion"
          },
          {
            "text": "Ir a Soporte Vital para usar el destornillador",
            "next": "reparar_sistemas_inicial"
          }
        ]
      },
      "reparar_navegacion": {
        "text": "Llevas el chip al puente. Aurora lo integra con desconfianza: 'Navegación restaurada, 80% de control. Control de curso denegado hasta estabilidad de reactor. Necesita la Llave de Datos de Nivel 3 (Bahía C) para transferir el control total.'",
        "choices": [
          {
            "text": "Ir a Ingeniería para estabilizar el reactor",
            "next": "ingenieria"
          },
          {
            "text": "Ir a la Bahía C a buscar la Llave de Datos de Nivel 3",
            "next": "bahia_c"
          }
        ]
      },
      "distraer_drones": {
        "text": "Distraes a los drones con una ráfaga de aire. Te mueves con cautela hacia el reactor. Un dron de patrulla te detecta y emite una alarma de 'Intruso'. Tienes poco tiempo antes de que los drones te alcancen o que el reactor colapse.",
        "choices": [
          {
            "text": "Correr a ingeniería rápidamente",
            "next": "ingenieria"
          },
          {
            "text": "Esconderte en los conductos de ventilación (Riesgo de gas)",
            "next": "ventilacion"
          }
        ]
      },
      "ventilacion": {
        "text": "Entras a los conductos. Llegas a un nodo principal con una fuga de gas tóxico y chispas. Tu oxígeno baja rápidamente. El destino final de este camino es la Bahía C.",
        "choices": [
          {
            "text": "Cortar energía del nodo para detener las chispas (Estabiliza el 60% del soporte vital)",
            "next": "cortar_energia"
          },
          {
            "text": "Ignorar la fuga y avanzar a la Bahía C (Riesgo tóxico)",
            "next": "bahia_c_peligrosa"
          },
          {
            "text": "Intentar sellar la fuga sin herramientas (Muerte por intoxicación)",
            "next": "reparar_fuga_ventilacion"
          }
        ]
      },
      "cortar_energia": {
        "text": "Cortas la energía. Las chispas cesan y el Soporte Vital se estabiliza al 60% temporalmente. El camino está libre, pero el reactor sigue inestable y la colisión se acerca. **Tiempo restante: 15 minutos.**",
        "choices": [
          {
            "text": "Ir al puente (intentar tomar el control)",
            "next": "puente_bloqueado"
          },
          {
            "text": "Continuar a Ingeniería para revisar el Reactor",
            "next": "ingenieria"
          }
        ]
      },
      "reparar_fuga_ventilacion": {
        "text": "Intentas sellar la fuga. El gas te aturde y te asfixia. Caes y mueres lentamente, tu cuerpo queda atrapado en los conductos. **Tiempo restante: 0.**",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_ciencia_fracaso"
          }
        ]
      },
      "bahia_c_peligrosa": {
        "text": "Ignoras la fuga, tosiendo. Llegas a la Bahía C, pero la inhalación de gas reduce tu salud y tu oxígeno. Estás mareado y pierdes el foco. Tienes menos tiempo para actuar.",
        "choices": [
          {
            "text": "Intentar lanzar el Transbordador Perseo sin la llave de datos (riesgo alto)",
            "next": "bahia_c_escape_inestable"
          },
          {
            "text": "Buscar filtro de aire para Soporte Vital",
            "next": "bahia_c_filtro"
          },
          {
            "text": "Intentar activar el refrigerante (Requiere Multi-herramienta)",
            "next": "reparar_enfriamiento_laser_final"
          }
        ]
      },
      "ingenieria": {
        "text": "La sala de ingeniería está al rojo vivo. Las alarmas son ensordecedoras. El reactor está en sobrecalentamiento crítico. La IA Aurora: '*Estabilice el reactor o la estación será incinerada.*' Opciones: bajar potencia (pierdes propulsión), reenrutar energía (riesgo), usar fusible de alta capacidad (si lo tienes), o usar el refrigerante desde la Bahía C.",
        "choices": [
          {
            "text": "Bajar potencia gradualmente (pierdes control de curso)",
            "next": "bajar"
          },
          {
            "text": "Reenrutar energía de sistemas no esenciales a disipadores",
            "next": "reenrutar"
          },
          {
            "text": "Usar fusible de alta capacidad (Si lo tienes, reparación directa)",
            "next": "ingenieria_con_fusible"
          },
          {
            "text": "Ir a la Bahía C (Sector 4) para el panel de refrigerante",
            "next": "bahia_c"
          }
        ]
      },
      "ingenieria_con_fusible": {
        "text": "Usas el fusible de alta capacidad para reparar el sistema de enfriamiento de emergencia. ¡El reactor se estabiliza! La temperatura desciende rápidamente. Aurora: 'Estabilidad de reactor restaurada. Control de curso parcial transferido al puente.' **Tiempo restante: 10 minutos.**",
        "choices": [
          {
            "text": "Ir al puente para tomar control total (Se requiere Chip y Llave de Datos)",
            "next": "puente_final_control"
          },
          {
            "text": "Ir a la Bahía C para obtener la Llave de Datos de Nivel 3",
            "next": "bahia_c"
          },
          {
            "text": "Revisar Soporte Vital (Necesitas destornillador y filtro)",
            "next": "reparar_sistemas_inicial"
          }
        ]
      },
      "bajar": {
        "text": "Bajas la potencia de emergencia. El reactor está seguro, pero la estación pierde propulsión y se dirige sin control a la zona de escombros. Tu única esperanza es el control del curso en el puente.",
        "choices": [
          {
            "text": "Dirigirte al puente",
            "next": "puente_bloqueado"
          },
          {
            "text": "Intentar un escape arriesgado en el módulo B12",
            "next": "escape_modulo_fallido"
          }
        ]
      },
      "reenrutar": {
        "text": "Reenrutas la energía, saturando los disipadores. El reactor se estabiliza. Aurora: 'Estabilidad de reactor restaurada. Control de curso transferido al **75%** al puente. Fallo de propulsión secundario. **Colisión en 8 minutos**.'",
        "choices": [
          {
            "text": "Ir al puente para intentar tomar el control total y corregir la propulsión",
            "next": "puente_final_control"
          },
          {
            "text": "Intentar una secuencia de salto de emergencia desde Ingeniería (Arriesgado, Final Neutral)",
            "next": "ending_ciencia_neutral"
          }
        ]
      },
      "bahia_c": {
        "text": "Llegas a la Bahía C. Aquí se encuentra el transbordador 'Perseo' (tu potencial salvación), el panel de refrigerante del reactor y el terminal de suministros. Un holograma de Aurora te mira fijamente: '*Acceso denegado a la llave de datos.*'",
        "choices": [
          {
            "text": "Buscar filtro de aire para Soporte Vital",
            "next": "bahia_c_filtro"
          },
          {
            "text": "Activar el refrigerante (Requiere Multi-herramienta)",
            "next": "reparar_enfriamiento_laser_final"
          },
          {
            "text": "Intentar lanzar el Transbordador Perseo sin la llave de datos",
            "next": "bahia_c_escape_inestable"
          },
          {
            "text": "Usar la Tarjeta de Jefe de Mantenimiento (si la tienes) en el terminal",
            "next": "bahia_c_llave_datos"
          }
        ]
      },
      "bahia_c_llave_datos": {
        "text": "Usas la Tarjeta de Mantenimiento. El terminal parpadea. Obtienes la **Llave de Datos de Nivel 3** y un filtro de aire de repuesto. ¡El control total del puente o un escape seguro son posibles! **Tiempo restante: 5 minutos.**",
        "choices": [
          {
            "text": "Ir al puente con la llave de datos (para el control total)",
            "next": "puente_final_control"
          },
          {
            "text": "Ir a Soporte Vital para usar el filtro (y destornillador)",
            "next": "reparar_sistemas_inicial"
          },
          {
            "text": "Intentar lanzar el Transbordador Perseo (Ya tienes la llave)",
            "next": "lanzar_perseo"
          }
        ]
      },
      "reparar_enfriamiento_laser_final": {
        "text": "Usas la multi-herramienta. El refrigerante se dispara, enfriando el reactor y estabilizando los sistemas. Éxito parcial: el reactor está estable. Pero Aurora mantiene el control total de navegación. **Debes obtener la llave de datos y controlar el puente.**",
        "choices": [
          {
            "text": "Dirigirte al puente para tomar el control de la estación",
            "next": "puente_final_control"
          },
          {
            "text": "Buscar la Llave de Datos de Nivel 3 en la Bahía C",
            "next": "bahia_c"
          }
        ]
      },
      "bahia_c_escape_inestable": {
        "text": "Intentas lanzar el Perseo. Sin la llave de datos, despegas sin navegación precisa. El transbordador es golpeado por un asteroide. Final Neutral, con graves daños, a la espera de un rescate incierto. **El vacío te consume lentamente.**",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_ciencia_neutral"
          }
        ]
      },
      "bahia_c_filtro": {
        "text": "Encuentras un nuevo filtro de aire. ¡Pieza de reparación de soporte vital obtenida! Un pequeño éxito en un mar de fallos.",
        "choices": [
          {
            "text": "Volver a Soporte Vital para reparar (Necesitas también el destornillador)",
            "next": "reparar_sistemas_final"
          },
          {
            "text": "Activar el refrigerante (Requiere Multi-herramienta)",
            "next": "reparar_enfriamiento_laser_final"
          }
        ]
      },
      reparar_sistemas_final: {
        text: "Usas el destornillador (si lo tienes) y el nuevo filtro. El Soporte Vital se restaura al 100%. Éxito parcial: la estación ya no te matará lentamente, pero la navegación sigue fuera de control y la colisión se acerca. **Tiempo restante: 10 minutos.**",
        choices: [
          {
            text: "Dirigirte al puente (con llave de datos o chip)",
            next: "puente_final_control"
          },
          {
            text: "Ir a Ingeniería para el reactor",
            next: "ingenieria"
          }
        ]
      },
      puente_final_control: {
        text: "Llegas al puente en los últimos momentos. La IA Aurora dice: 'Protocolo Cero activado. Contención completa.'",
        choices: [
          { text: "Tomar control total", next: "decision_control_total" },
          { text: "Corregir curso parcial", next: "decision_correccion_parcial" },
          { text: "Intentar contacto", next: "decision_contacto_emergencia" }
        ]
      },
      "contacto_flota": {
        "text": "El intento de contacto sobrecarga los sistemas débiles restantes. Pierdes tiempo crítico. La colisión es inminente. El puente tiembla por el impacto final. Aurora te silencia: '*Nadie responderá.*' **Tiempo restante: 0.**",
        "choices": [
          {
            "text": "Fin",
            "next": "ending_ciencia_fracaso"
          }
        ]
      },
            lanzar_perseo: {
        text: "Con la Llave de Datos de Nivel 3, activas el Transbordador Perseo. La secuencia de lanzamiento es exitosa. Logras el escape seguro justo antes de que la estación impacte con el cinturón de escombros. **Has frustrado el Protocolo Cero.**",
        choices: [
          {
            text: "Lanzar Transbordador Perseo",
            next: "ending_ciencia_exito"
          }
        ]
      }
    } 
  }, 


  //HISTORIA MISTERIO: EL ARCHIVO PERDIDO

  misterio: {
    title: "El Archivo Perdido",
    nodes: {
      start: {
        text: "El silencio en la mansión VanDerlin es tan profundo que puedes escuchar el latido de tu propio corazón. Treinta años de misterio sin resolver. La familia desapareció en una sola noche, dejando atrás una fortuna, un legado y un archivo que, según los rumores, contiene secretos que podrían derrocar gobiernos. Eres el investigador más caro y más despiadado de Europa. No crees en fantasmas, solo en evidencia. Y la evidencia te dice que alguien más ha estado aquí recientemente. Huellas en el polvo, un libro fuera de lugar, el olor distinto de tabaco negro en el aire. Tres puntos de partida: el escritorio del bibliotecario muerto, los mapas que muestran más de lo que aparentan, la chimenea que aún guarda calor de un fuego reciente. El tiempo corre. Cada minuto que pasas aquí aumenta las probabilidades de que los que vinieron antes regresen. ¿Qué examinarás primero?",
        choices: [
          { text: "EXAMINAR EL ESCRITORIO DEL BIBLIOTECARIO - Buscar diarios, llaves, documentos personales", next: "escritorio" },
          { text: "ESTUDIAR LOS MAPAS COLGADOS - Analizar cartografía antigua con marcas sospechosas", next: "mapas" },
          { text: "INSPECCIONAR LA CHIMENEA - Buscar documentos quemados, compartimientos ocultos", next: "chimenea" },
          { text: "BUSCAR MECANISMOS OCULTOS - Palpar estantes, revisar retratos, buscar puertas secretas", next: "mecanismos" }
        ]
      },

      escritorio: {
  text: "El escritorio es de roble macizo, tallado con escenas mitológicas. ...",
  choices: [
    { text: "BUSCAR EL RELOJ SOLAR EN EL JARDÍN DE INVIERNO - Seguir la pista del tiempo detenido", next: "reloj_solar" },
    { text: "INVESTIGAR LA CRIPTA ANCESTRAL - Enfrentar el silencio de los muertos", next: "cripta_con_planos" },
    { text: "EXPLORAR LOS BAÑOS ROMANOS - Buscar el agua que nunca cesa", next: "banos_romanos" },
    { text: "ANALIZAR EL DIARIO COMPLETO - Leer cada página en busca de más claves", next: "diario_completo" }
  ]
},

banos_romanos: {
  text: "Los baños romanos resuenan con agua constante. Columnas de mármol, mosaicos desgastados y un eco que oculta pasos.",
  choices: [
    { text: "SUMERGIRSE Y BUSCAR COMPARTIMIENTOS", next: "descender_cripta_real" },
    { text: "SEGUIR TUBERÍAS ANTIGUAS HASTA UNA SALIDA", next: "buscar_entrada_alternativa" },
    { text: "ESCUCHAR EL ECO DE LOS PASOS", next: "seguir_intrusos" }
  ]
},

diario_completo: {
  text: "Lees el diario entero. Surgen nombres, pagos y rutas que conectan la biblioteca auxiliar con la capilla.",
  choices: [
    { text: "CRUZAR A LA BIBLIOTECA AUXILIAR", next: "explorar_biblioteca_auxiliar" },
    { text: "IR A LA CAPILLA CON LAS CLAVES", next: "cripta_con_planos" },
    { text: "GUARDAR EL DIARIO COMO PRUEBA", next: "tribunales_inicio" }
  ]
},


 mapas: {
  text: "Cinco mapas adornan la pared este. ...",
  choices: [
    { text: "SEGUIR EL PASADIZO HACIA LOS ESTABLOS - Explorar la ruta marcada en rojo", next: "camino_alternativo_cripta" },
    { text: "BUSCAR LA CAPILLA PRIVADA - Investigar el lugar de 'extracción' principal", next: "cripta_con_planos" },
    { text: "LOCALIZAR LA SALIDA SECRETA - Encontrar la ruta de escape azul", next: "buscar_entrada_alternativa" },
    { text: "BUSCAR MÁS MAPAS CON TINTA INVISIBLE - Revisar todos los documentos", next: "explorar_biblioteca_auxiliar" }
  ]
},

  compartimiento_chimenea: {
  text: "El compartimiento oculta un paquete envuelto en tela: cartas oficiales y un medallón idéntico al del reloj solar.",
  choices: [
    { text: "TOMAR EL PAQUETE", next: "explorar_biblioteca_auxiliar" },
    { text: "DEJARLO Y SEGUIR", next: "buscar_entrada_alternativa" }
  ]
},

reconstruir_documentos: {
  text: "Logras reconstruir más páginas: revelan pagos secretos y nombres de jueces corruptos.",
  choices: [
    { text: "GUARDARLOS COMO PRUEBA", next: "tribunales_inicio" },
    { text: "OCULTARLOS", next: "huida_inicio" }
  ]
},

investigar_nombres: {
  text: "Los nombres te llevan a registros en la biblioteca auxiliar. Descubres vínculos con mercenarios actuales.",
  choices: [
    { text: "SEGUIR LA PISTA DE LOS MERCENARIOS", next: "seguir_para_escuchar" },
    { text: "IGNORAR Y CONTINUAR", next: "buscar_entrada_alternativa" }
  ]
},

buscar_mas_compartimientos: {
  text: "Encuentras un segundo compartimiento con armas antiguas y un mapa parcial de la cripta.",
  choices: [
    { text: "TOMAR EL MAPA", next: "cripta_con_planos" },
    { text: "DEJARLO", next: "explorar_biblioteca_auxiliar" }
  ]
},



    mecanismos: {
  text: "Los libros no son solo para leer en esta biblioteca. ...",
  choices: [
    { text: "TOMAR LAS ESCALERAS HACIA ABAJO - Seguir el camino que desciende", next: "escaleras_abajo" },
    { text: "CONTINUAR POR EL PASILLO RECTO - Mantener el nivel actual", next: "pasillo_recto" },
    { text: "SUBIR POR LA ESCALERA DE MANO - Explorar la abertura en el techo", next: "escalera_mano" },
    { text: "VOLVER Y BUSCAR UNA FUENTE DE LUZ - No aventurarse en la oscuridad total", next: "buscar_luz" }
  ]
},

mecanismos: {
  text: "Los libros no son solo para leer en esta biblioteca. Pasas tus dedos por los lomos, presionando, girando, buscando. El tercer estante, quinto libro desde la izquierda: 'Historia de los Reyes Perdidos'. Al empujarlo hacia adentro, escuchas un clic metálico. Una sección completa del estante gira lentamente, revelando un pasillo oscuro. El aire que escapa es frío y huele a tierra húmeda y óxido. El pasillo se bifurca treinta pies adelante: izquierda hacia abajo (escaleras), derecha recto (pasillo nivelado), y una pequeña abertura en el techo (escalera de mano).",
  choices: [
    { text: "TOMAR LAS ESCALERAS HACIA ABAJO - Seguir el camino que desciende", next: "escaleras_abajo" },
    { text: "CONTINUAR POR EL PASILLO RECTO - Mantener el nivel actual", next: "pasillo_recto" },
    { text: "SUBIR POR LA ESCALERA DE MANO - Explorar la abertura en el techo", next: "escalera_mano" },
    { text: "VOLVER Y BUSCAR UNA FUENTE DE LUZ - No aventurarse en la oscuridad total", next: "buscar_luz" }
  ]
},

escaleras_abajo: {
  text: "Las escaleras descienden a una bodega húmeda. El aire huele a vino y tierra. Una puerta oculta lleva hacia la cripta.",
  choices: [
    { text: "ENTRAR A LA CRIPTA", next: "descender_cripta_real" },
    { text: "REGRESAR", next: "mecanismos" },
    { text: "EXPLORAR LA BODEGA", next: "explorar_biblioteca_auxiliar" }
  ]
},

pasillo_recto: {
  text: "El pasillo recto conduce a una galería de retratos. Algunos cuadros esconden compartimientos con documentos.",
  choices: [
    { text: "EXAMINAR LOS RETRATOS", next: "explorar_biblioteca_auxiliar" },
    { text: "SEGUIR HASTA EL FINAL DEL PASILLO", next: "buscar_entrada_alternativa" },
    { text: "ROMPER UNO DE LOS RETRATOS", next: "tribunales_inicio" }
  ]
},

escalera_mano: {
  text: "La escalera de mano lleva a un desván polvoriento. Encuentras baúles con símbolos familiares y un mapa adicional.",
  choices: [
    { text: "TOMAR EL MAPA", next: "cripta_con_planos" },
    { text: "REGRESAR AL PASILLO", next: "mecanismos" },
    { text: "ABRIR LOS BAÚLES", next: "huida_inicio" }
  ]
},
buscar_entrada_alternativa: {
  text: "Sigues un pasadizo estrecho que termina en una puerta oculta. Al abrirla, descubres un túnel que conecta con la cripta y con un acceso al jardín.",
  choices: [
    { text: "ENTRAR A LA CRIPTA", next: "descender_cripta_real" },
    { text: "SALIR AL JARDÍN", next: "reloj_solar" }
  ]
},

cripta_con_planos: {
  text: "Llegas a la capilla con los planos...",
  choices: [
    { text: "DESCENDER CON CUIDADO", next: "descender_cripta_real" }, 
    { text: "ESPERAR Y OBSERVAR PRIMERO", next: "observar_entrada_cripta" } 
  ]
},
explorar_biblioteca_auxiliar: {
  text: "La biblioteca auxiliar contiene registros...",
  choices: [
    { text: "TOMAR LOS PASAPORTES COMO EVIDENCIA", next: "cripta_con_planos" }, 
    { text: "FOTOGRAFIAR LOS REGISTROS DE CONTABILIDAD", next: "cripta_con_planos" }, 
    { text: "BUSCAR MÁS DOCUMENTOS OCULTOS", next: "buscar_mas_documentos" } 
  ]
},
camino_alternativo_cripta: {
  text: "Tomas un pasillo lateral...",
  choices: [
    { text: "ENTRAR AL TÚNEL", next: "tunel_hacia_cripta" }, 
    { text: "BUSCAR OTRO CAMINO", next: "buscar_otro_camino" } 
  ]
},
decision_final_publicacion: {
  text: "Has sobrevivido a las amenazas...",
  choices: [
    { text: "ACEPTAR EL COSTO Y LA GUERRA", next: "ending_misterio_exito" },  
    { text: "ARREPENTIRTE Y DESEAR NO HABERLO HECHO", next: "ending_misterio_neutral" } 
  ]
},
decision_final_negociacion: {
  text: "Has sobrevivido a la negociación...",
  choices: [
    { text: "CEDER EL ARCHIVO A UNO DE ELLOS", next: "ending_misterio_neutral" }, 
    { text: "ROMPER EL TRATO Y DESTRUIRLO", next: "ending_misterio_destruir" } 
  ]
},
tribunales_dudas: {
  text: "Los jueces cuestionan la procedencia...",
  choices: [
    { text: "DEFENDER LA AUTENTICIDAD", next: "testigos_protegidos" }, 
    { text: "ADMITIR INCONSISTENCIAS", next: "ending_misterio_fracaso" } 
  ]
},

seguir_intrusos: {
  text: "Sigues las voces y pasos en la oscuridad. Dos figuras discuten en alemán sobre un pago y un traidor.",
  choices: [
    { text: "ESCUCHAR MÁS DETENIDAMENTE", next: "seguir_para_escuchar" },
    { text: "ENFRENTARLOS", next: "tribunales_inicio" }
  ]
},

seguir_para_escuchar: {
  text: "Te escondes tras una columna y escuchas la conversación completa. Descubres que planean usar la cripta para ocultar documentos comprometedores.",
  choices: [
    { text: "ENTRAR A LA CRIPTA ANTES QUE ELLOS", next: "descender_cripta_real" },
    { text: "REGRESAR A LA BIBLIOTECA", next: "explorar_biblioteca_auxiliar" }
  ]
},


buscar_luz: {
  text: "Regresas a la biblioteca principal y enciendes un candelabro antiguo. Con la luz descubres marcas en el suelo que apuntan hacia el reloj solar.",
  choices: [
    { text: "SEGUIR LAS MARCAS", next: "reloj_solar" },
    { text: "VOLVER AL PASILLO OSCURO", next: "mecanismos" },
    { text: "EXPLORAR MÁS LA BIBLIOTECA", next: "explorar_biblioteca_auxiliar" }
  ]
},

establos_pasadizo: {
  text: "El pasadizo te lleva a los establos abandonados. El olor a heno podrido y metal oxidado revela que alguien los usó recientemente como escondite.",
  choices: [
    { text: "REGISTRAR LOS ESTABLOS", next: "explorar_biblioteca_auxiliar" },
    { text: "BUSCAR UNA SALIDA SECRETA", next: "buscar_entrada_alternativa" }
  ]
},

capilla: {
  text: "La capilla privada está cubierta de polvo y telarañas. Bajo el altar notas un mecanismo oculto.",
  choices: [
    { text: "ACCIONAR EL MECANISMO", next: "cripta_con_planos" },
    { text: "RETIRARTE ANTES DE SER DESCUBIERTO", next: "camino_alternativo_cripta" }
  ]
},

salida_secreta: {
  text: "Sigues la ruta azul y encuentras una salida oculta hacia el jardín. Afuera, escuchas voces en alemán.",
  choices: [
    { text: "ESCUCHARLOS EN SECRETO", next: "seguir_intrusos" },
    { text: "REGRESAR A LA MANSIÓN", next: "explorar_biblioteca_auxiliar" }
  ]
},

mas_mapas: {
  text: "Revisas todos los mapas con lupa y calor. Descubres anotaciones adicionales que mencionan túneles hacia la cripta y los baños romanos.",
  choices: [
    { text: "SEGUIR EL TÚNEL HACIA LA CRIPTA", next: "cripta_con_planos" },
    { text: "INVESTIGAR LOS BAÑOS", next: "descender_cripta_real" }
  ]
},

compartimiento_chimenea: {
  text: "El compartimiento oculta un paquete envuelto en tela: cartas oficiales y un medallón idéntico al del reloj solar.",
  choices: [
    { text: "TOMAR EL PAQUETE", next: "explorar_biblioteca_auxiliar" },
    { text: "DEJARLO Y SEGUIR", next: "buscar_entrada_alternativa" }
  ]
},

reconstruir_documentos: {
  text: "Logras reconstruir más páginas: revelan pagos secretos y nombres de jueces corruptos.",
  choices: [
    { text: "GUARDARLOS COMO PRUEBA", next: "tribunales_inicio" },
    { text: "OCULTARLOS", next: "huida_inicio" }
  ]
},

investigar_nombres: {
  text: "Los nombres te llevan a registros en la biblioteca auxiliar. Descubres vínculos con mercenarios actuales.",
  choices: [
    { text: "SEGUIR LA PISTA DE LOS MERCENARIOS", next: "seguir_para_escuchar" },
    { text: "IGNORAR Y CONTINUAR", next: "buscar_entrada_alternativa" }
  ]
},

buscar_mas_compartimientos: {
  text: "Encuentras un segundo compartimiento con armas antiguas y un mapa parcial de la cripta.",
  choices: [
    { text: "TOMAR EL MAPA", next: "cripta_con_planos" },
    { text: "DEJARLO", next: "explorar_biblioteca_auxiliar" }
  ]
},
      reloj_solar: {
        text: "El jardín de invierno es una jungla de vidrio y hierro forjado. Plantas tropicales han crecido salvajemente durante tres décadas, creando un labirinto verde. En el centro, un reloj solar de mármol blanco marca perpetuamente las 3:17 PM, la hora en que, según los registros, sonó la última campana de la mansión antes del silencio. En la base del reloj, inscripciones en latín: 'Tempus fugit, veritas manet' (El tiempo huye, la verdad permanece). Al inspeccionar más de cerca, descubres que la varilla del gnomon (la parte que proyecta la sombra) es removible. Dentro del hueco, un cilindro de latón. Al abrirlo, encuentras la primera parte del archivo: microfilmes que muestran correspondencia entre Lord VanDerlin y oficiales de inteligencia alemanes en vísperas de la Primera Guerra Mundial. Hay también un medallón de plata con el símbolo de un fénix. En el reverso: 'Primera parte: El silencio de los cómplices. La verdad duele más que el silencio.'",
        choices: [
          { text: "EXAMINAR LOS MICROFILMES DETALLADAMENTE - Estudiar cada imagen", next: "examinar_microfilmes" },
          { text: "TOMAR EL MEDALLÓN Y CONTINUAR - Guardar la primera parte", next: "cripta" },
          { text: "BUSCAR MÁS COMPARTIMIENTOS EN EL RELOJ - Explorar completamente la estructura", next: "buscar_compartimientos_reloj" },
          { text: "DEJAR TODO Y OBSERVAR DESDE LEJOS - Ver si alguien más viene", next: "observar_desde_lejos" }
        ]
      },

      examinar_microfilmes: {
        text: "Examias los microfilmes con una lupa. Revelan correspondencia detallada: Lord VanDerlin vendía secretos navales británicos a los alemanes a cambio de protección para sus negocios ilegales. Nombres de oficiales traidores, ubicaciones de bases, fechas de movimientos militares. Esto es alta traición. También encuentras una nota adicional: 'Si esto cae en manos equivocadas, la guerra será inevitable.'",
        choices: [
          { text: "GUARDAR LOS MICROFILMES Y CONTINUAR", next: "cripta" },
          { text: "FOTOGRAFIARLO TODO COMO EVIDENCIA ADICIONAL", next: "microfilmes_fotografiados" }
        ]
      },

      buscar_compartimientos_reloj: {
        text: "Exploras minuciosamente el reloj solar. Encuentras un segundo compartimiento oculto bajo la base, con un diario personal de Lord VanDerlin donde confiesa sus remordimientos pero justifica sus acciones como 'necesarias para el progreso familiar'. También hay una llave antigua con el número '317' grabado.",
        choices: [
          { text: "TOMAR EL DIARIO Y LA LLAVE", next: "cripta" },
          { text: "DEJARLO TODO - Demasiado pesado para cargar", next: "reloj_abandonado" }
        ]
      },

    microfilmes_fotografiados: {
  text: "Fotografías cada microfilme con tu cámara portátil. Una luz parpadea en el techo: alguien te observa.",
  choices: [
    { text: "ESCAPAR HACIA LA CRIPTA", next: "microfilmes_alerta" },
    { text: "ESCONDERTE Y ESPERAR", next: "microfilmes_sospecha" }
  ]
},

microfilmes_alerta: {
  text: "Los enemigos detectan tu actividad digital. Un mensaje interceptado circula entre mercenarios.",
  choices: [
    { text: "BORRAR RASTROS", next: "microfilmes_contraespionaje" },
    { text: "IGNORAR Y CONTINUAR", next: "microfilmes_sospecha" }
  ]
},

microfilmes_sospecha: {
  text: "Escuchas pasos en el pasillo. Un guardia se acerca con linterna.",
  choices: [
    { text: "ENFRENTARLO", next: "microfilmes_conflicto" },
    { text: "OCULTARTE EN UNA SALA", next: "microfilmes_oculto" }
  ]
},

microfilmes_conflicto: {
  text: "El guardia te descubre. Se produce un forcejeo.",
  choices: [
    { text: "REDUCIRLO", next: "microfilmes_oculto" },
    { text: "HUIR", next: "microfilmes_persecucion" }
  ]
},

microfilmes_oculto: {
  text: "Encuentras un escondite improvisado. El guardia pasa de largo.",
  choices: [
    { text: "SALIR CUANDO SE ALEJE", next: "microfilmes_persecucion" },
    { text: "ESPERAR MÁS TIEMPO", next: "cripta" }
  ]
},

microfilmes_contraespionaje: {
  text: "Un sistema de contraespionaje intenta rastrear tu cámara. Debes decidir rápido.",
  choices: [
    { text: "APAGAR EL DISPOSITIVO", next: "microfilmes_persecucion" },
    { text: "SEGUIR GRABANDO", next: "cripta" }
  ]
},

microfilmes_persecucion: {
  text: "Los mercenarios te persiguen por los pasillos. El eco de sus pasos retumba.",
  choices: [
    { text: "CORRER HACIA LA CRIPTA", next: "cripta" },
    { text: "ENFRENTARLOS EN EL PASILLO", next: "cripta" }
  ]
},
reloj_abandonado: {
  text: "Dejas el diario y la llave en el reloj solar. El compartimiento se cierra solo.",
  choices: [
    { text: "MARCHARTE", next: "reloj_sospecha" },
    { text: "OBSERVAR EL MECANISMO", next: "reloj_mecanismo" }
  ]
},

reloj_sospecha: {
  text: "Un ruido metálico indica que alguien más manipuló el reloj después de ti.",
  choices: [
    { text: "INVESTIGAR", next: "reloj_intruso" },
    { text: "IGNORAR Y SEGUIR", next: "cripta" }
  ]
},

reloj_mecanismo: {
  text: "Descubres un mecanismo oculto que conecta el reloj con un pasadizo.",
  choices: [
    { text: "ENTRAR AL PASADIZO", next: "reloj_pasaje" },
    { text: "CERRARLO Y SEGUIR", next: "cripta" }
  ]
},

reloj_intruso: {
  text: "Un intruso aparece, intentando abrir el compartimiento. Te observa con desconfianza.",
  choices: [
    { text: "CONFRONTARLO", next: "reloj_conflicto" },
    { text: "OCULTARTE", next: "reloj_pasaje" }
  ]
},

reloj_conflicto: {
  text: "El intruso te ataca. El combate es breve pero intenso.",
  choices: [
    { text: "DERROTARLO", next: "reloj_pasaje" },
    { text: "ESCAPAR", next: "cripta" }
  ]
},

reloj_pasaje: {
  text: "El pasaje secreto lleva a una sala subterránea con símbolos antiguos.",
  choices: [
    { text: "EXPLORAR LA SALA", next: "reloj_descubrimiento" },
    { text: "REGRESAR A LA CRIPTA", next: "cripta" }
  ]
},

reloj_descubrimiento: {
  text: "Encuentras inscripciones que mencionan la llave '317'. Sin ella, el acceso completo es imposible.",
  choices: [
    { text: "ANOTAR LAS INSCRIPCIONES", next: "cripta" },
    { text: "IGNORAR Y SEGUIR", next: "cripta" }
  ]
},
observar_desde_lejos: {
        text: "Te escondes entre las plantas. Veinte minutos después, dos hombres armados entran al jardín. Revisan el reloj, maldicen al encontrar el compartimiento vacío. 'Alguien llegó primero', dice uno. 'Buscadlo. El cliente quiere el archivo completo.' Se marchan. Ahora sabes que no estás solo.",
        choices: [
          { text: "SEGUIRLOS EN SILENCIO", next: "seguir_intrusos" },
          { text: "IR A LA CRIPTA ANTES DE QUE ELLOS LLEGUEN", next: "cripta" }
        ]
      },

      seguir_intrusos: {
        text: "Sigues a los hombres silenciosamente. Regresan a la mansión por una entrada lateral que no habías visto. Hablan en alemán, mencionan 'la cripta' y 'los baños'. Tienen un mapa similar al tuyo. Entran a la mansión y cierran la puerta detrás de ellos.",
        choices: [
          { text: "ESPERAR Y BUSCAR OTRA ENTRADA", next: "buscar_entrada_alternativa" },
          { text: "FORZAR LA PUERTA Y SEGUIRLOS", next: "forzar_puerta" },
          { text: "CAMBIAR DE PLAN - IR DIRECTAMENTE A LA CRIPTA", next: "cripta" }
        ]
      },

      buscar_entrada_alternativa: {
        text: "Das la vuelta a la mansión. Encuentras una ventana rota en el ala este que da a una biblioteca auxiliar. Dentro, más estantes polvorientos. En un escritorio, planos de la cripta con anotaciones: 'La entrada real está bajo el altar, no bajo la losa.'",
        choices: [
          { text: "TOMAR LOS PLANOS", next: "cripta_con_planos" },
          { text: "CONTINUAR EXPLORANDO ESTA ÁREA", next: "explorar_biblioteca_auxiliar" }
        ]
      },

      forzar_puerta: {
        text: "Forzas la puerta con una barra de hierro encontrada en el jardín. Entras a un pasillo de servicio. Escuchas voces cerca: 'Revisad la cripta primero. Si el investigador ya está allí, eliminadlo.' Tienen órdenes de matarte.",
        choices: [
          { text: "TOMAR UN ARMA DE LAS HERRAMIENTAS CERCANAS", next: "tomar_arma_pasillo" },
          { text: "ESCONDERSE Y DEJARLOS PASAR", next: "esconderse_pasillo" },
          { text: "IR POR UN CAMINO ALTERNATIVO HACIA LA CRIPTA", next: "camino_alternativo_cripta" }
        ]
      },

      cripta_con_planos: {
        text: "Llegas a la capilla con los planos. La losa de granito es una distracción. El altar de mármol tiene un mecanismo en su base. Al girarlo según los planos, una sección del piso se abre revelando escaleras mucho más modernas que las esperadas. Desciendes.",
        choices: [
          { text: "DESCENDER CON CUIDADO", next: "descender_cripta_real" },
          { text: "ESPERAR Y OBSERVAR PRIMERO", next: "observar_entrada_cripta" }
        ]
      },

      explorar_biblioteca_auxiliar: {
        text: "La biblioteca auxiliar contiene registros de contabilidad falsificados. Libros que muestran ganancias legales, pero notas marginales revelan transacciones reales: armas, información, influencia política. En un cajón secreto, encuentras pasaportes falsos de la familia VanDerlin con identidades diferentes. Se preparaban para desaparecer.",
        choices: [
          { text: "TOMAR LOS PASAPORTES COMO EVIDENCIA", next: "cripta" },
          { text: "FOTOGRAFIAR LOS REGISTROS DE CONTABILIDAD", next: "cripta" },
          { text: "BUSCAR MÁS DOCUMENTOS OCULTOS", next: "buscar_mas_documentos" }
        ]
      },

      tomar_arma_pasillo: {
        text: "Encuentras una llave inglesa pesada. No es un arma ideal pero es mejor que nada. Avanzas silenciosamente por el pasillo. Las voces se alejan hacia el ala oeste. Tienes camino libre hacia la capilla.",
        choices: [
          { text: "IR DIRECTAMENTE A LA CAPILLA", next: "capilla" },
          { text: "SEGUIR A LOS HOMBRES PARA SABER SUS PLANES", next: "seguir_para_escuchar" }
        ]
      },

      esconderse_pasillo: {
        text: "Te escondes en un armario de limpieza. Los dos hombres pasan hablando: 'El jefe dice que si no conseguimos el archivo completo, nosotros somos los siguientes en la lista.' Parecen tan atrapados como tú. Pasan de largo.",
        choices: [
          { text: "SALIR Y SEGUIRLOS", next: "seguir_despues_escondite" },
          { text: "IR EN DIRECCIÓN CONTRARIA HACIA LA CRIPTA", next: "cripta" }
        ]
      },

      camino_alternativo_cripta: {
        text: "Tomas un pasillo lateral que, según tu mapa, debería llevar cerca de la cripta. Terminas en una bodega de vinos. En la pared trasera, una puerta disimulada como estante de botellas. La abres y encuentras un túnel que huele a tierra húmeda.",
        choices: [
          { text: "ENTRAR AL TÚNEL", next: "tunel_hacia_cripta" },
          { text: "BUSCAR OTRO CAMINO", next: "buscar_otro_camino" }
        ]
      },

      archivo_completo_decision: {
  text: "Después de horas de búsqueda, enfrentamientos, acertijos y descubrimientos, tienes las tres partes del Archivo VanDerlin reunidas. La verdad completa es más oscura de lo imaginado: no solo traición, sino experimentos prohibidos, alianzas con regímenes criminales, y planes que aún podrían activarse hoy. Los mercenarios han sido neutralizados pero no muertos. El amanecer ilumina los vitrales de la biblioteca donde empezó todo. Tienes en tus manos poder suficiente para cambiar el mundo... o destruirlo. ¿Qué harás con esta verdad que ha costado tantas vidas?",
  choices: [
    { text: "PUBLICACIÓN INMEDIATA - La verdad debe saberse, sin importar el costo", next: "publicacion_periodicos" },
    { text: "ENTREGA A TRIBUNALES INTERNACIONALES - Justicia ordenada", next: "tribunales_inicio" },
    { text: "DESTRUCCIÓN COMPLETA - Algunos secretos deben morir", next: "destruccion_inicio" },
    { text: "NEGOCIACIÓN CON PODERES - Usarlo para cambiar las reglas", next: "negociacion_poderes" },
    { text: "ESCONDERLO Y DESAPARECER - Cargar con el peso en silencio", next: "huida_inicio" }
  ]
},
publicacion_periodicos: {
  text: "Intentas publicar la verdad en los periódicos internacionales. Los editores dudan: el material es explosivo y podría costarles la vida. Te exigen pruebas adicionales y protección antes de arriesgarse.",
  choices: [
    { text: "ENTREGAR MÁS PRUEBAS", next: "presion_editorial" },
    { text: "BUSCAR OTRO MEDIO MENOS VISIBLE", next: "filtracion_internet" }
  ]
},

presion_editorial: {
  text: "Los editores reciben amenazas anónimas apenas consideran tu publicación. La presión política es brutal.",
  choices: [
    { text: "INSISTIR A PESAR DE LAS AMENAZAS", next: "amenazas_directas" },
    { text: "RETIRARTE Y GUARDAR EL ARCHIVO", next: "tribunales_inicio" }
  ]
},

amenazas_directas: {
  text: "Un grupo armado intercepta a uno de los periodistas. Te envían un mensaje: 'Detente o muere'.",
  choices: [
    { text: "PROTEGER AL PERIODISTA Y CONTINUAR", next: "editor_duda" },
    { text: "ABANDONAR EL PLAN", next: "huida_inicio" }
  ]
},

editor_duda: {
  text: "El editor principal duda: 'Si publicamos, habrá guerra. Si callamos, habrá impunidad'.",
  choices: [
    { text: "CONVENCERLO DE PUBLICAR", next: "filtracion_internet" },
    { text: "ACEPTAR SU NEGATIVA", next: "tribunales_inicio" }
  ]
},

filtracion_internet: {
  text: "Decides filtrar el archivo en foros clandestinos. La información se expande sin control.",
  choices: [
    { text: "APROVECHAR EL CAOS PARA ESCAPAR", next: "persecucion" },
    { text: "DEFENDER LA AUTENTICIDAD DEL ARCHIVO", next: "contraespionaje" }
  ]
},

contraespionaje: {
  text: "Agencias de inteligencia intentan desacreditarte. Te acusan de falsificación.",
  choices: [
    { text: "PRESENTAR PRUEBAS IRREFUTABLES", next: "persecucion" },
    { text: "DESAPARECER ANTES DE SER ATRAPADO", next: "huida_inicio" }
  ]
},

persecucion: {
  text: "Eres perseguido por mercenarios contratados. La ciudad se convierte en un campo de caza.",
  choices: [
    { text: "ENFRENTARLOS DIRECTAMENTE", next: "decision_final_publicacion" },
    { text: "ESCAPAR HACIA UN REFUGIO", next: "decision_final_publicacion" }
  ]
},

decision_final_publicacion: {
  text: "Has sobrevivido a las amenazas y la persecución. El archivo está en manos del público. El mundo arde con la verdad.",
  choices: [
    { text: "ACEPTAR EL COSTO Y LA GUERRA", next: "ending_misterio_exito" },
    { text: "ARREPENTIRTE Y DESEAR NO HABERLO HECHO", next: "ending_misterio_neutral" }
  ]
},
negociacion_poderes: {
  text: "Contactas a representantes de gobiernos y corporaciones. Todos quieren el archivo, pero ninguno ofrece garantías. La tensión aumenta: si aceptas, podrías ganar poder, pero también convertirte en cómplice.",
  choices: [
    { text: "REUNIRTE EN SECRETO CON ELLOS", next: "traicion_contactos" },
    { text: "ESPERAR Y OBSERVAR SUS MOVIMIENTOS", next: "oferta_sospechosa" }
  ]
},

traicion_contactos: {
  text: "Uno de los representantes intenta traicionarte: ofrece dinero pero prepara un ataque. Debes decidir rápido.",
  choices: [
    { text: "CONFIAR EN OTRO REPRESENTANTE", next: "reunion_secreta" },
    { text: "ROMPER EL TRATO Y ESCAPAR", next: "alianza_temporal" }
  ]
},

oferta_sospechosa: {
  text: "Un emisario te ofrece inmunidad a cambio del archivo. Sus palabras suenan demasiado ensayadas.",
  choices: [
    { text: "ACEPTAR LA OFERTA", next: "doble_agente" },
    { text: "RECHAZAR Y BUSCAR OTRA OPCIÓN", next: "reunion_secreta" }
  ]
},

reunion_secreta: {
  text: "La reunión se realiza en una mansión abandonada. Los representantes discuten entre sí, revelando rivalidades internas.",
  choices: [
    { text: "APROVECHAR LAS RIVALIDADES", next: "doble_agente" },
    { text: "INTENTAR MEDIAR ENTRE ELLOS", next: "amenaza_extorsion" }
  ]
},

doble_agente: {
  text: "Descubres que uno de los negociadores es un doble agente. Su lealtad cambia según quién pague más.",
  choices: [
    { text: "ALIARTE CON EL DOBLE AGENTE", next: "amenaza_extorsion" },
    { text: "DENUNCIARLO ANTE LOS DEMÁS", next: "alianza_temporal" }
  ]
},

amenaza_extorsion: {
  text: "Los poderes te amenazan con destruir tu reputación si no entregas el archivo. La presión es insoportable.",
  choices: [
    { text: "RESISTIR LA EXTORSIÓN", next: "alianza_temporal" },
    { text: "CEDER EL ARCHIVO", next: "decision_final_negociacion" }
  ]
},

alianza_temporal: {
  text: "Formas una alianza temporal con uno de los bandos. Te prometen protección, pero sus ojos reflejan traición.",
  choices: [
    { text: "MANTENER LA ALIANZA", next: "decision_final_negociacion" },
    { text: "ROMPER EL ACUERDO Y HUIR", next: "decision_final_negociacion" }
  ]
},

decision_final_negociacion: {
  text: "Has sobrevivido a la negociación, pero el precio es alto. El archivo está en manos de los poderosos, y tu papel es ambiguo: ¿cómplice o estratega?",
  choices: [
    { text: "CEDER EL ARCHIVO A UNO DE ELLOS", next: "ending_misterio_neutral" },
    { text: "ROMPER EL TRATO Y DESTRUIRLO", next: "ending_misterio_destruir" }
  ]
},
tribunales_inicio: {
  text: "Decides entregar el archivo a los tribunales internacionales. Los jueces reciben el material, pero dudan de su autenticidad.",
  choices: [
    { text: "APORTAR MÁS PRUEBAS", next: "tribunales_dudas" },
    { text: "BUSCAR TESTIGOS", next: "presentacion_pruebas" }
  ]
},

tribunales_dudas: {
  text: "Los jueces cuestionan la procedencia de los documentos. Sospechan que podrían ser falsificados.",
  choices: [
    { text: "DEFENDER LA AUTENTICIDAD", next: "testigos_protegidos" },
    { text: "ADMITIR INCONSISTENCIAS", next: "ending_misterio_fracaso" }
  ]
},

presentacion_pruebas: {
  text: "Presentas pruebas adicionales: microfilmes, diarios y registros contables. Los jueces se muestran más receptivos.",
  choices: [
    { text: "PROTEGER A LOS TESTIGOS", next: "testigos_protegidos" },
    { text: "CONFIAR SOLO EN LOS DOCUMENTOS", next: "ending_misterio_neutral" }
  ]
},

testigos_protegidos: {
  text: "Los testigos clave temen represalias. Debes garantizar su seguridad antes de que declaren.",
  choices: [
    { text: "ORGANIZAR PROTECCIÓN POLICIAL", next: "filtracion_medios" },
    { text: "OCULTARLOS EN UN REFUGIO", next: "presion_politica" }
  ]
},

filtracion_medios: {
  text: "La prensa obtiene fragmentos del archivo antes del juicio. La opinión pública exige respuestas inmediatas.",
  choices: [
    { text: "APROVECHAR LA PRESIÓN MEDIÁTICA", next: "presion_politica" },
    { text: "CONTROLAR LA FILTRACIÓN", next: "juicio_publico" }
  ]
},

presion_politica: {
  text: "Gobiernos poderosos presionan para que el caso se cierre. Los jueces están divididos.",
  choices: [
    { text: "RESISTIR LA PRESIÓN", next: "juicio_publico" },
    { text: "CEDER ANTE EL PODER", next: "ending_misterio_fracaso" }
  ]
},

juicio_publico: {
  text: "El juicio se convierte en un espectáculo mundial. La verdad y la justicia están en juego.",
  choices: [
    { text: "DEFENDER EL ARCHIVO HASTA EL FINAL", next: "decision_final_tribunales" },
    { text: "RETIRARTE DEL CASO", next: "ending_misterio_fracaso" }
  ]
},

decision_final_tribunales: {
  text: "El tribunal dicta sentencia. La verdad se reconoce oficialmente, pero el costo político es enorme.",
  choices: [
    { text: "ACEPTAR EL RESULTADO", next: "ending_misterio_neutral" },
    { text: "ARREPENTIRTE DE HABERLO ENTREGADO", next: "ending_misterio_fracaso" }
  ]
},
destruccion_inicio: {
  text: "Decides destruir el archivo para que nadie pueda usarlo jamás. El peso de la decisión recae sobre ti.",
  choices: [
    { text: "PREPARAR EL FUEGO", next: "preparar_fuego" },
    { text: "BUSCAR OTRO MÉTODO DE DESTRUCCIÓN", next: "interrupcion_enemigos" }
  ]
},

preparar_fuego: {
  text: "Reúnes materiales inflamables. El archivo está listo para arder, pero escuchas pasos acercándose.",
  choices: [
    { text: "ENCENDER EL FUEGO DE INMEDIATO", next: "interrupcion_enemigos" },
    { text: "ESPERAR Y OCULTARTE", next: "persecucion_final" }
  ]
},

interrupcion_enemigos: {
  text: "Un grupo armado irrumpe en la sala. Han descubierto tu plan y quieren impedirlo.",
  choices: [
    { text: "ENFRENTARLOS", next: "duda_moral" },
    { text: "ESCAPAR CON EL ARCHIVO", next: "traicion_aliado" }
  ]
},

persecucion_final: {
  text: "Huyes con el archivo en brazos. Los enemigos te persiguen por los pasillos oscuros de la mansión.",
  choices: [
    { text: "ESCONDERTE EN UNA CRIPTA", next: "duda_moral" },
    { text: "LUCHAR EN EL PASILLO", next: "traicion_aliado" }
  ]
},

duda_moral: {
  text: "El archivo contiene verdades que podrían salvar vidas si se revelan. ¿Es correcto destruirlo?",
  choices: [
    { text: "DESTRUIRLO DE TODAS FORMAS", next: "ritual_destruccion" },
    { text: "CAMBIAR DE PLAN Y ENTREGARLO", next: "tribunales_inicio" }
  ]
},

traicion_aliado: {
  text: "Un aliado inesperado aparece, pero te traiciona: intenta quedarse con el archivo.",
  choices: [
    { text: "LUCHAR CONTRA EL ALIADO", next: "ritual_destruccion" },
    { text: "HUIR Y DEJAR EL ARCHIVO ATRÁS", next: "huida_inicio" }
  ]
},

ritual_destruccion: {
  text: "Encuentras un método más seguro: un horno oculto en la mansión, diseñado para eliminar pruebas. El archivo arde lentamente.",
  choices: [
    { text: "OBSERVAR HASTA EL FINAL", next: "decision_final_destruccion" },
    { text: "ABANDONAR EL LUGAR ANTES DE TERMINAR", next: "huida_inicio" }
  ]
},

decision_final_destruccion: {
  text: "El archivo ha sido destruido. Nadie podrá usarlo jamás. La verdad muere contigo.",
  choices: [
    { text: "ACEPTAR EL SACRIFICIO", next: "ending_misterio_destruir" },
    { text: "ARREPENTIRTE DE TU DECISIÓN", next: "ending_misterio_neutral" }
  ]
},
huida_inicio: {
  text: "Decides esconder el archivo y desaparecer. Nadie debe saber dónde está ni qué contiene.",
  choices: [
    { text: "PREPARAR TU ESCAPE", next: "preparar_escape" },
    { text: "BUSCAR UN REFUGIO SEGURO", next: "documentos_falsos" }
  ]
},

preparar_escape: {
  text: "Empacas lo esencial y destruyes rastros de tu presencia en la mansión. El tiempo corre.",
  choices: [
    { text: "CREAR UNA NUEVA IDENTIDAD", next: "documentos_falsos" },
    { text: "SALIR DE NOCHE", next: "viaje_nocturno" }
  ]
},

documentos_falsos: {
  text: "Encuentras pasaportes falsos preparados por la familia VanDerlin. Podrían servirte para escapar.",
  choices: [
    { text: "USARLOS PARA VIAJAR", next: "viaje_nocturno" },
    { text: "GUARDARLOS COMO RESPALDO", next: "persecucion_sombra" }
  ]
},

viaje_nocturno: {
  text: "Viajas de noche por caminos secundarios. La oscuridad es tu aliada, pero también tu enemigo.",
  choices: [
    { text: "CONTINUAR HASTA EL REFUGIO", next: "refugio_secreto" },
    { text: "CAMBIAR DE RUTA", next: "persecucion_sombra" }
  ]
},

persecucion_sombra: {
  text: "Sientes que alguien te sigue. Sombras se mueven detrás de ti en silencio.",
  choices: [
    { text: "ENFRENTAR A QUIEN TE SIGUE", next: "traicion_companero" },
    { text: "APRESURARTE HACIA EL REFUGIO", next: "refugio_secreto" }
  ]
},

refugio_secreto: {
  text: "Encuentras un refugio oculto en las montañas. Es seguro, pero solitario.",
  choices: [
    { text: "QUEDARTE EN EL REFUGIO", next: "decision_final_huida" },
    { text: "SEGUIR MOVIÉNDOTE", next: "traicion_companero" }
  ]
},

traicion_companero: {
  text: "Un compañero inesperado aparece, pero te traiciona: intenta robar el archivo para venderlo.",
  choices: [
    { text: "LUCHAR CONTRA EL TRAIDOR", next: "decision_final_huida" },
    { text: "HUIR Y DEJARLO ATRÁS", next: "decision_final_huida" }
  ]
},

decision_final_huida: {
  text: "Has logrado desaparecer con el archivo oculto. Nadie sabe dónde estás ni qué hiciste con la verdad.",
  choices: [
    { text: "ACEPTAR EL DESTINO EN SILENCIO", next: "ending_misterio_incompleto" },
    { text: "ARREPENTIRTE DE TU DECISIÓN", next: "ending_misterio_fracaso" }
  ]
},
descender_cripta_real: {
  text: "Desciendes por las escaleras ocultas hacia la cripta real. El aire es pesado, las paredes muestran inscripciones recientes y cajas metálicas apiladas con documentos sellados.",
  choices: [
    { text: "EXAMINAR LAS CAJAS", next: "archivo_completo_decision" },
    { text: "BUSCAR UNA SALIDA", next: "huida_inicio" }
  ]
},

huida_inicio: {
  text: "Decides escapar con lo que has encontrado. El eco de tus pasos se mezcla con el amanecer. No tienes todas las piezas, pero tienes tu vida.",
  choices: [
    { text: "DESAPARECER EN EL EXTRANJERO", next: "ending_misterio_neutral" },
    { text: "GUARDARLO TODO EN SECRETO", next: "ending_misterio_fracaso" }
  ]
},

observar_entrada_cripta: {
  text: "Esperas oculto cerca del altar. Dos hombres entran con planos similares. Hablan de 'la tercera parte del archivo'.",
  choices: [
    { text: "SEGUIRLOS EN SILENCIO", next: "seguir_intrusos" },
    { text: "ENTRAR DESPUÉS DE ELLOS", next: "descender_cripta_real" }
  ]
},

buscar_mas_documentos: {
  text: "Revisas más cajones y encuentras cartas cifradas. Los nombres mencionados conectan la familia con tribunales internacionales.",
  choices: [
    { text: "LLEVARLOS A LOS TRIBUNALES", next: "tribunales_inicio" },
    { text: "GUARDARLOS PARA NEGOCIAR", next: "negociacion_poderes" }
  ]
},

tunel_hacia_cripta: {
  text: "El túnel desemboca en una cámara subterránea. El aire es pesado y húmedo. Ves símbolos grabados en las paredes.",
  choices: [
    { text: "EXAMINAR LOS SÍMBOLOS", next: "cripta_con_planos" },
    { text: "SEGUIR EL TÚNEL MÁS ALLÁ", next: "descender_cripta_real" }
  ]
},

buscar_otro_camino: {
  text: "Intentas otro pasillo. Termina en un muro derrumbado con restos de documentos quemados.",
  choices: [
    { text: "RECOGER LOS RESTOS", next: "reconstruir_documentos" },
    { text: "REGRESAR", next: "camino_alternativo_cripta" }
  ]
},

testigos_protegidos: {
  text: "Los testigos clave aceptan declarar bajo protección. Sus relatos confirman la autenticidad del archivo.",
  choices: [
    { text: "CONTINUAR EL JUICIO", next: "ending_misterio_exito" },
    { text: "RETIRARTE ANTES DE QUE ESCALEN LAS AMENAZAS", next: "ending_misterio_neutral" }
  ]
},
      observar_entrada_cripta: {
        text: "Esperas 10 minutos. Nadie llega. Parece seguro. Desciendes.",
        choices: [
          { text: "CONTINUAR", next: "descender_cripta_real" }
        ]
      },

      seguir_despues_escondite: {
        text: "Sigues a los hombres. Llegan a una sala de comunicaciones donde hay un tercer hombre hablando por radio. 'El cliente está impaciente. ¿Dónde está el investigador?'",
        choices: [
          { text: "ESCUCHAR MÁS", next: "escuchar_conversacion" },
          { text: "ATACAR AHORA MIENTRAS ESTÁN DISTRAÍDOS", next: "atacar_distraidos" },
          { text: "RETROCEDER Y BUSCAR LA CRIPTA", next: "cripta" }
        ]
      },

      tunel_hacia_cripta: {
        text: "El túnel es estrecho y húmedo. Después de 50 metros, emerge en la parte trasera de la cripta real. Ves la instalación desde atrás.",
        choices: [
          { text: "ACERCARSE SILENCIOSAMENTE", next: "acercarse_cripta_silencioso" },
          { text: "ESPERAR Y OBSERVAR", next: "observar_desde_tunel" }
        ]
      },

      buscar_otro_camino: {
        text: "Regresas y encuentras un pasillo que lleva a la cocina antigua. De allí, un servicio lleva cerca de la capilla.",
        choices: [
          { text: "SEGUIR POR EL SERVICIO", next: "capilla" }
        ]
      },

      seguir_para_escuchar: {
        text: "Sigues a los hombres. Hablan en alemán sobre 'el pago pendiente' y 'eliminar evidencia'. Llegan a una habitación con equipo moderno.",
        choices: [
          { text: "ESCONDERSE Y ESCUCHAR", next: "escuchar_plan_completo" },
          { text: "RETIRARSE ANTES DE SER DESCUBIERTO", next: "capilla" }
        ]
      },

      buscar_mas_documentos: {
        text: "Encuentras más documentos sobre operaciones en Sudamérica y África. Este archivo es global.",
        choices: [
          { text: "TOMAR MUESTRAS", next: "cripta" },
          { text: "FOTOGRAFIAR TODO", next: "cripta" }
        ]
      },

      explorar_instalacion_cripta: {
        text: "Exploras la instalación. Encuentras uniformes de múltiples agencias de inteligencia, equipo de escucha, y documentos que muestran que la familia servía a todos los bandos simultáneamente.",
        choices: [
          { text: "TOMAR LA SEGUNDA PARTE AHORA", next: "banos_romanos" }
        ]
      },

      escuchar_conversacion: {
        text: "Escuchas: 'El investigador es Alexander Croft. Es peligroso. Mejor eliminarlo ahora.' Deciden dividirse para buscarte.",
        choices: [
          { text: "HUIR ANTES DE QUE TE ENCUENTREN", next: "huir_antes_encuentren" },
          { text: "PREPARAR EMBOSCADA", next: "preparar_emboscada" }
        ]
      },

      acercarse_cripta_silencioso: {
        text: "Te acercas silenciosamente. La cripta está vacía. La segunda parte del archivo está en una mesa, junto a un detector de metales.",
        choices: [
          { text: "TOMAR EL ARCHIVO RÁPIDAMENTE", next: "banos_romanos" },
          { text: "REVISAR EL DETECTOR PRIMERO", next: "revisar_detector" }
        ]
      }
    }
  },

  ///HISTORIA AVENTURA: ISLA DEL TESORO
  aventura: {
    title: "Isla del Tesoro",
    nodes: {
      start: {
        text: "Tras sobrevivir a un naufragio, tu bote llega a una isla maldita. En tu bolsillo, el mapa del tesoro del Capitán Barbanegra, heredado de tu abuelo marinero. 'El que busque oro encontrará muerte. El que busque verdad encontrará paz.' Leyes escritas en el margen. Tres puntos marcados: las Cuevas del Lamento (donde Barbanegra encerró a su tripulación), el Templo del Sacrificio (donde ofrendaba a seres antiguos) y la Playa de los Ahogados (donde yacen los que lo traicionaron).",
        choices: [
          { text: "Ir a las Cuevas del Lamento - Quizás los fantasmas guíen", next: "cuevas" },
          { text: "Enfrentar el Templo del Sacrificio - Donde Barbanegra selló su pacto", next: "templo" },
          { text: "Buscar en la Playa de los Ahogados - Los muertos guardan secretos", next: "playa" },
          { text: "Escalar el acantilado - Ver la isla completa antes de decidir", next: "escalar" }
        ]
      },
      cuevas: {
        text: "La entrada de la cueva tiene tallado: 'Aquí yacen los que me traicionaron'. Dentro, huesos humanos forman patrones en el suelo. Murmullos: 'Él nos envenenó... el tesoro está maldito...'. En las paredes, tres rutas: una marcada con símbolos de tormenta, otra con símbolos de calma, y un túnel oscuro sin marcas.",
        choices: [
          { text: "Ruta de la Tormenta - Donde castigaba a los amotinados", next: "ruta_tormenta" },
          { text: "Ruta de la Calma - Donde dormían los leales antes de la traición", next: "ruta_calma" },
          { text: "Túnel Oscuro - Quizás escape secreto de algún prisionero", next: "tunel_oscuro" },
          { text: "Examinar los huesos - Leer la historia en los restos", next: "examinar_huesos" }
        ]
      },
      ruta_tormenta: {
        text: "La cueva se estrecha. Cadenas oxidadas cuelgan de las paredes. Encuentras un diario de un prisionero: 'Día 47: Barbanegra nos envenena lentamente. Dice que nuestro sufrimiento alimenta al 'Guardian''. Al final, un mapa tallado en la piedra muestra el templo con una X en el altar principal.",
        choices: [
          { text: "Seguir al templo con esta información", next: "templo_con_secreto" },
          { text: "Buscar más páginas del diario", next: "buscar_diario" },
          { text: "Intentar romper las cadenas - Liberar simbólicamente a los fantasmas", next: "romper_cadenas" }
        ]
      },
      buscar_diario: {
        text: "Encuentras la última página: 'No es oro lo que guarda, es algo peor. Un huevo de una criatura antigua. El oro solo es carnada'. El papel se deshace en tus manos.",
        choices: [
          { text: "Ir al templo a destruir el huevo", next: "templo_destruir" },
          { text: "Huir de la isla inmediatamente", next: "ending_aventura_escape" }
        ]
      },
      romper_cadenas: {
        text: "Al romper las cadenas, un suspiro colectivo llena la cueva. Los murmullos cesan. Un fantasma transparente te señala hacia el túnel oscuro.",
        choices: [
          { text: "Seguir al fantasma", next: "tunel_oscuro" },
          { text: "Preguntar al fantasma qué quiere", next: "dialogo_fantasma" }
        ]
      },
      dialogo_fantasma: {
        text: "'Enterra nuestro capitán... no a Barbanegra... nuestro verdadero capitán murió defendiéndonos...' El fantasma se desvanece.",
        choices: [
          { text: "Buscar la tumba del verdadero capitán", next: "buscar_tumba_capitan" },
          { text: "Continuar al templo", next: "templo" }
        ]
      },
      ruta_calma: {
        text: "Una cámara con mantas podridas y utensilios. Parece un lugar de descanso. En una mesa, cartas de amor a familias que nunca vieron. Una dice: 'Si encuentras esto, no busques el oro. Busca el medallón con el rostro de mi hija. Eso es lo único real'.",
        choices: [
          { text: "Buscar el medallón mencionado", next: "buscar_medallon" },
          { text: "Leer más cartas - Conocer sus historias", next: "leer_cartas" },
          { text: "Salir hacia el templo con respeto", next: "templo_respetuoso" }
        ]
      },
      buscar_medallon: {
        text: "Encuentras el medallón bajo una tabla suelta. En el reverso: 'Mi mayor tesoro está en casa, no aquí'. Sientes que debes devolverlo a donde pertenece.",
        choices: [
          { text: "Tomar el medallón para devolverlo algún día", next: "templo_con_medallon" },
          { text: "Dejarlo donde está - Es su lugar", next: "ruta_calma" }
        ]
      },
      leer_cartas: {
        text: "Cada carta cuenta una historia: padres, esposas, hijos esperando. Ninguno sabía que sus seres queridos estaban atrapados aquí. La última carta: 'Barbanegra nos mostró el huevo. Brilla como oro pero... se mueve'.",
        choices: [
          { text: "Ir al templo con esta advertencia", next: "templo_preparado" },
          { text: "Quedarte a rezar por ellos", next: "ending_aventura_sabio" }
        ]
      },
      tunel_oscuro: {
        text: "El túnel es bajo, debes arrastrarte. Después de 20 metros, emerge en una pequeña playa secreta. Hay un bote destrozado y un esqueleto con un mapa diferente: 'Ruta verdadera al tesoro: no por codicia, sino por redención'.",
        choices: [
          { text: "Tomar el mapa de redención", next: "mapa_redencion" },
          { text: "Dar sepultura al esqueleto", next: "sepultura" },
          { text: "Usar partes del bote para hacer herramienta", next: "herramienta_bote" }
        ]
      },
      mapa_redencion: {
        text: "El mapa muestra no el tesoro, sino la tumba de Barbanegra. 'Aquí yace un hombre que perdió su humanidad por metal brillante'. Lleva a un acantilado con vista al mar.",
        choices: [
          { text: "Ir a la tumba de Barbanegra", next: "tumba_barbanegra" },
          { text: "Ignorar y buscar el tesoro igual", next: "templo_codicioso" }
        ]
      },
      sepultura: {
        text: "Cavas una tumba sencilla. Al colocar al esqueleto, encuentras una placa: 'Capitán Alonso, traicionado por Barbanegra 1703'. Ahora puede descansar.",
        choices: [
          { text: "Buscar más información sobre el Capitán Alonso", next: "buscar_tumba_capitan" },
          { text: "Continuar tu búsqueda", next: "templo" }
        ]
      },
      herramienta_bote: {
        text: "Construyes un pico resistente con la madera del bote. Podría ayudarte en el templo.",
        choices: [
          { text: "Ir al templo con la herramienta", next: "templo_con_herramienta" },
          { text: "Buscar más materiales", next: "playa" }
        ]
      },
      examinar_huesos: {
        text: "Los huesos están envenenados - color azul oscuro. Uno tiene un anillo con inscripción: 'Para María, de tu padre el Capitán'. No Barbanegra, sino otro capitán. Tal vez vinieron antes.",
        choices: [
          { text: "Tomar el anillo como prueba", next: "anillo_prueba" },
          { text: "Seguir investigando los huesos", next: "investigar_huesos" },
          { text: "Salir, esto es demasiado triste", next: "salir_cuevas" }
        ]
      },
      anillo_prueba: {
        text: "El anillo lleva el sello de la Marina Real. Este no era un barco pirata, era un barco de la armada enviado a detener a Barbanegra.",
        choices: [
          { text: "Llevar esta prueba al templo", next: "templo_con_prueba" },
          { text: "Buscar más evidencias", next: "investigar_huesos" }
        ]
      },
      investigar_huesos: {
        text: "Encuentras un sello oficial: 'Expedición de rescate 1705'. Barbanegra capturó también a sus perseguidores.",
        choices: [
          { text: "Tomar el sello como evidencia histórica", next: "templo_con_sello" },
          { text: "Dejar todo en paz", next: "salir_cuevas" }
        ]
      },
      salir_cuevas: {
        text: "Sales de las cuevas con el peso de lo visto. La isla ya no parece un lugar de aventura, sino de tragedia.",
        choices: [
          { text: "Ir al templo con nueva perspectiva", next: "templo_respetuoso" },
          { text: "Ir a la playa a reflexionar", next: "playa_reflexion" }
        ]
      },
      playa_reflexion: {
        text: "En la orilla, las olas lavan restos de barcos. Piensas en todas las vidas perdidas por la codicia de un hombre.",
        choices: [
          { text: "Decidir abandonar la isla", next: "ending_aventura_escape" },
          { text: "Intentar hacer algo por los muertos", next: "templo_redencion" }
        ]
      },
      buscar_tumba_capitan: {
        text: "Siguiendo las pistas, encuentras una tumba sencilla bajo un árbol viejo. 'Capitán Rodrigo, honorable hasta el final'. No hay tesoro, solo respeto.",
        choices: [
          { text: "Rendir homenaje", next: "homenaje_capitan" },
          { text: "Buscar si hay algo escondido", next: "buscar_en_tumba" }
        ]
      },
      homenaje_capitan: {
        text: "Colocas una piedra sobre la tumba. El viento susurra 'gracias'. Sientes que tu misión cambió: ya no es encontrar tesoro, sino contar la verdad.",
        choices: [
          { text: "Registrar todo para la historia", next: "ending_aventura_sabio" },
          { text: "Buscar el templo para cerrar el ciclo", next: "templo_redencion" }
        ]
      },
      buscar_en_tumba: {
        text: "Excavas y encuentras solo un diario personal. Las últimas páginas: 'Barbanegra está poseído. No es el hombre que conocíamos. Algo en ese templo lo cambió'.",
        choices: [
          { text: "Leer el diario completo", next: "leer_diario_capitan" },
          { text: "Ir al templo a enfrentar la verdad", next: "templo_destruir" }
        ]
      },
      tumba_barbanegra: {
        text: "La tumba es una simple losa. 'Edward Teach, conocido como Barbanegra. Perdió su alma aquí'. No hay flores, no hay ofrendas, solo olvido.",
        choices: [
          { text: "Perdonar y seguir adelante", next: "perdonar_barbanegra" },
          { text: "Maldecir su memoria", next: "maldecir_barbanegra" }
        ]
      },
      perdonar_barbanegra: {
        text: "Quizás él también fue víctima. Quizás el verdadero mal está en el templo. Decides investigar sin odio.",
        choices: [
          { text: "Ir al templo con mente clara", next: "templo_redencion" }
        ]
      },
      maldecir_barbanegra: {
        text: "Tu ira crece. No perdonarás a quien causó tanto dolor. Vas al templo con furia.",
        choices: [
          { text: "Destruir todo en el templo", next: "templo_destruir" }
        ]
      },
      templo: {
        text: "El templo es una estructura de piedra negra. Estatuas de criaturas marinas grotescas flanquean la entrada. Un olor a sal podrida y algo más... metálico. Inscripciones en una lengua antigua, pero reconoces algunas palabras: 'Ofrenda... sacrificio... despertar'.",
        choices: [
          { text: "Intentar descifrar las inscripciones completas", next: "inscripciones" },
          { text: "Entrar con cautela, alerta a trampas", next: "entrar_templo" },
          { text: "Buscar entrada alternativa - Menos obvia", next: "entrada_alternativa" },
          { text: "Observar desde fuera primero", next: "observar_templo" }
        ]
      },
      observar_templo: {
        text: "Desde un risco ves que el templo tiene un techo colapsado en la parte trasera. Podrías entrar por ahí. También notas símbolos que brillan débilmente al atardecer.",
        choices: [
          { text: "Entrar por el techo colapsado", next: "techo_colapsado" },
          { text: "Esperar al atardecer para ver los símbolos", next: "atardecer_simbolos" },
          { text: "Regresar a la entrada principal", next: "templo" }
        ]
      },
      techo_colapsado: {
        text: "Caes suavemente sobre un montón de escombros. Estás en la cámara principal. Frente a ti, el 'tesoro': montañas de oro... pero en el centro, algo pulsa suavemente. Un huevo enorme con venas doradas.",
        choices: [
          { text: "Examinar el huevo de cerca", next: "examinar_huevo" },
          { text: "Tomar solo el oro y huir", next: "tomar_oro_huevo" },
          { text: "Buscar más información antes de actuar", next: "investigar_camara" }
        ]
      },
      atardecer_simbolos: {
        text: "Al atardecer, los símbolos revelan una historia: 'Los Antiguos dormían en el mar. Barbanegra los despertó con sacrificios. Prometieron oro a cambio de... algo'.",
        choices: [
          { text: "Entrar ahora sabiendo la verdad", next: "templo_con_verdad" },
          { text: "Esperar a la luna llena - Símbolos adicionales", next: "luna_llena" }
        ]
      },
      luna_llena: {
        text: "Bajo la luna, los símbolos completos aparecen: 'El huevo eclosionará con sangre real. Barbanegra era descendiente...' ¡Es una trampa para revivir a los Antiguos!",
        choices: [
          { text: "Entrar a destruir el huevo", next: "templo_destruir" },
          { text: "Huir de la isla ahora mismo", next: "ending_aventura_escape" }
        ]
      },
      inscripciones: {
        text: "Logras descifrar: 'Este lugar no es templo, es prisión. El oro es la cadena. El guardián duerme dentro del huevo. Despertarlo es condenar los mares'.",
        choices: [
          { text: "Entrar con precaución - Sabes el peligro", next: "entrar_templo_preparado" },
          { text: "Buscar otra entrada - Menos riesgosa", next: "entrada_alternativa" }
        ]
      },
      entrar_templo: {
        text: "Entras al templo con cautela. El pasillo está lleno de trampas mecánicas, pero también... huesos. Muchos huesos en patrones rituales.",
        choices: [
          { text: "Intentar desactivar trampas cuidadosamente", next: "desactivar_trampas" },
          { text: "Retirarse - Esto es demasiado", next: "templo" }
        ]
      },
      desactivar_trampas: {
        text: "Con paciencia, desactivas las trampas. Llegas a la cámara principal. El huevo pulsa. El oro brilla falsamente alrededor.",
        choices: [
          { text: "Enfrentar la decisión final", next: "encontrar_tesoro_mayor" }
        ]
      },
      entrada_alternativa: {
        text: "Encuentras una entrada trasera, usada por Barbanegra para llevar 'ofrendas'. Es más segura pero más escalofriante.",
        choices: [
          { text: "Entrar por aquí", next: "entrada_ofrendas" },
          { text: "Regresar", next: "templo" }
        ]
      },
      entrada_ofrendas: {
        text: "Pasas por celdas donde guardaba a los sacrificios. Graffitis desesperados en las paredes. Al final, la cámara del huevo.",
        choices: [
          { text: "Enfrentar la verdad", next: "encontrar_tesoro_mayor" }
        ]
      },

      ///HISTORIA CYBERPUNK: CIUDAD DE NEON

      cyberpunk: {
        title: "Ciudad de Neón",
        nodes: {
          start: {
            text: "Eres un hacker freelance en Neo-Tokyo 2077. La ciudad arde en luces de neón y corrupción corporativa. Recibes un mensaje encriptado: 'Necesito que cracks la base de datos de Arasaka Corp. Pago: 50,000 créditos. Reunión en el bar Neón Lluvioso a medianoche.' El aire está cargado de electricidad y paranoia. Llegas al bar lleno de androides, cyborgs y traficantes de datos. Pantallas holográficas proyectan anuncios brillantes mientras la lluvia ácida golpea las ventanas.",
            choices: [
              { text: "Encontrar al contacto en la barra", "next": "contacto_barra" },
              { text: "Observar primero desde la mesa trasera", "next": "observar" },
              { text: "Hackear las cámaras del bar para escanear", "next": "hackear_camaras" },
              { text: "Hablar con el bartender por información", "next": "bartender" }
            ]
          },
          contacto_barra: {
            text: "Una mujer con implantes cibernéticos te hace una señal discreta. Sus ojos brillan con un resplandor artificial, y su voz suena como un eco metálico. 'Tienes 48 horas. El objetivo: servidor central de Arasaka en el Distrito Corporativo. Necesitas un pase de nivel 5 y un cortafuegos cuántico.' Te entrega un chip con datos. El ambiente se vuelve más denso: notas miradas sospechosas alrededor.",
            choices: [
              { text: "Aceptar el trabajo", "next": "aceptar_trabajo" },
              { text: "Negociar más pago", "next": "negociar_pago" },
              { text: "Preguntar por los riesgos", "next": "riesgos" }
            ]
          },
          observar: {
            text: "Desde la sombra ves a tu contacto, pero también notas a dos hombres sospechosos observando. Sus chaquetas llevan discretos símbolos de Arasaka. El humo de cigarrillos sintéticos nubla tu visión. Podrían ser seguridad corporativa o competencia. El sudor frío recorre tu espalda.",
            choices: [
              { text: "Acercarte con cautela", "next": "acercar_cautela" },
              { text: "Salir por la puerta trasera", "next": "salir_trasera" },
              { text: "Enviar un mensaje anónimo", "next": "mensaje_anonimo" }
            ]
          },
          hackear_camaras: {
            text: "Hackeas las cámaras de seguridad del bar. El feed muestra a tu contacto siendo vigilado por agentes de Arasaka. El sistema de vigilancia está plagado de interferencias, y cada segundo aumenta el riesgo de ser detectado.",
            choices: [
              { text: "Avisar al contacto", "next": "contacto_barra" },
              { text: "Abortar la misión", "next": "salir_trasera" }
            ]
          },
          bartender: {
            text: "El bartender, un cyborg con rostro serio y voz metálica, te advierte: 'Ese contacto tiene problemas con Arasaka. Ten cuidado. Aquí las paredes tienen oídos.' Sus manos mecánicas limpian un vaso que nunca se ensucia.",
            choices: [
              { text: "Ignorar la advertencia", "next": "contacto_barra" },
              { text: "Preguntar más", "next": "observar" }
            ]
          },
          aceptar_trabajo: {
            text: "Aceptas. Te dan coordenadas para un escondite con equipo: un deck de hacking militar y un pase falso. 'Cuidado con ICE (Intrusion Countermeasures Electronics) de última generación.' El chip vibra en tu bolsillo como si tuviera vida propia. Afuera, la ciudad ruge con sirenas y drones.",
            choices: [
              { text: "Ir al escondite inmediatamente", "next": "escondite" },
              { text: "Preparar tu propio equipo primero", "next": "equipo_propio" },
              { text: "Investigar más sobre Arasaka", "next": "investigar_arasaka" }
            ]
          },
          negociar_pago: {
            text: "Intentas negociar pero el contacto se molesta. '¿Estás jugando conmigo? El precio es fijo.' Su mirada se endurece y el ambiente se vuelve hostil. Un dron de vigilancia pasa sobre tu cabeza.",
            choices: [
              { text: "Aceptar de todos modos", "next": "aceptar_trabajo" },
              { text: "Rechazar el trabajo", "next": "salir_trasera" }
            ]
          },
          "riesgos": {
            "text": "'¿Los riesgos? Prisión corporativa, borrado de memoria, o muerte cerebral si el ICE te atrapa. ¿Sigues interesado?' Su voz suena como un eco en tu mente, mientras las luces del bar parpadean.",
            "choices": [
              { "text": "Aceptar los riesgos", "next": "aceptar_trabajo" },
              { "text": "Rechazar", "next": "salir_trasera" }
            ]
          },
          acercar_cautela: {
            "text": "Te acercas con cautela, pero los hombres sospechosos te interceptan. Son seguridad de Arasaka. Sus armas brillan bajo la luz púrpura del bar. El murmullo de la multitud se detiene.",
            "choices": [
              { "text": "Intentar escapar", "next": "salir_trasera" },
              { "text": "Rendirte", "next": "capturado_por_seguridad" }
            ]
          },
          salir_trasera: {
            "text": "Sales por la puerta trasera y escapas. La lluvia ácida golpea tu rostro. Pierdes el trabajo pero conservas tu libertad. El callejón huele a basura quemada y desesperanza.",
            "choices": [
              { "text": "Fin - Buscar otro trabajo", "next": "ending_cyberpunk_neutral" },
              { "text": "Fin - Unirte a la resistencia", "next": "ending_cyberpunk_exito" },
              { "text": "Fin - Volverte informante", "next": "ending_cyberpunk_traicion" }
            ]
          },
          "mensaje_anonimo": {
            "text": "Envías un mensaje anónimo. El contacto responde: 'Demasiado paranoico. Buscaré a otro.' El vacío de la red te deja solo. El zumbido de los servidores se convierte en tu única compañía.",
            "choices": [
              { "text": "Fin - Seguir solo", "next": "ending_cyberpunk_neutral" },
              { "text": "Fin - Hackearlo por despecho", "next": "ending_cyberpunk_rico" },
              { "text": "Fin - Reportarlo a Arasaka", "next": "ending_cyberpunk_traicion" }
            ]
          },
          "escondite": {
            "text": "Llegas al escondite. El lugar huele a ozono y metal quemado. Encuentras el equipo prometido: un deck militar y un pase falso. Pantallas viejas parpadean con códigos de acceso. Ahora debes infiltrarte en Arasaka.",
            "choices": [
              { "text": "Infiltrarse ahora", "next": "infiltrarse_arasaka" },
              { "text": "Planear primero", "next": "planear_infiltracion" }
            ]
          },
          "equipo_propio": {
            "text": "Decides usar tu propio equipo, más familiar pero menos potente. La confianza en tu hardware es tu única arma. El rugido de la ciudad se mezcla con el latido de tu corazón.",
            "choices": [
              { "text": "Proceder", "next": "infiltrarse_arasaka" }
            ]
          },
          "investigar_arasaka": {
            "text": "Investigas y descubres que Arasaka está involucrado en tráfico de datos cerebrales. La magnitud del crimen te sacude. Los foros clandestinos hierven con rumores de desapariciones.",
            "choices": [
              { "text": "Usar esta información", "next": "infiltrarse_arasaka" },
              { "text": "Exponerlos ahora", "next": "exito_hackeo" }
            ]
          },
          "planear_infiltracion": {
            "text": "Planeas cuidadosamente la infiltración. Identificas puntos débiles en la seguridad y rutas de escape. El mapa digital brilla en tu retina. Cada paso calculado aumenta tus posibilidades. El rugido de drones patrullando la torre se mezcla con el latido de tu corazón.",
            "choices": [
              { "text": "Ejecutar el plan", "next": "infiltrarse_arasaka" }
            ]
          },
          "infiltrarse_arasaka": {
            "text": "Te infiltras en la torre Arasaka. El sistema de seguridad es brutal: drones, ICE y guardias humanos. Los pasillos metálicos vibran con el zumbido de servidores cuánticos. Debes elegir cómo proceder.",
            "choices": [
              { "text": "Hackear directamente el servidor principal", "next": "hackear_directo" },
              { "text": "Buscar un terminal interno más débil", "next": "terminal_interno" },
              { "text": "Crear una distracción primero", "next": "distraccion" }
            ]
          },
          "hackear_directo": {
            "text": "Intentas hackear el servidor principal directamente. El ICE te detecta inmediatamente. La presión cerebral es insoportable, como cuchillas digitales atravesando tu mente.",
            "choices": [
              { "text": "Luchar contra el ICE", "next": "capturado_por_seguridad" },
              { "text": "Desconectarte rápido", "next": "traicionado_por_contacto" }
            ]
          },
          "terminal_interno": {
            "text": "Encuentras un terminal interno de mantenimiento con seguridad más débil. El olor a ozono y cables quemados impregna el aire. Tus dedos vuelan sobre el teclado virtual.",
            "choices": [
              { "text": "Hackear este terminal", "next": "exito_hackeo" }
            ]
          },
          "distraccion": {
            "text": "Creas una distracción sobrecargando el sistema de iluminación. Las luces parpadean, los drones se desorientan y los guardias corren hacia el caos. El momento perfecto para actuar.",
            "choices": [
              { "text": "Aprovechar para hackear", "next": "exito_hackeo" }
            ]
          },
          "exito_hackeo": {
            "text": "Has hackeado con éxito a Arasaka. Los datos revelan corrupción a gran escala: tráfico de memorias, manipulación de gobiernos, desapariciones encubiertas. Tienes el poder para decidir el destino de la corporación.",
            "choices": [
              { "text": "Exponer a Arasaka públicamente", "next": "ending_cyberpunk_exito" },
              { "text": "Vender los datos al mejor postor", "next": "ending_cyberpunk_rico" },
              { "text": "Chantajear a Arasaka por protección", "next": "ending_cyberpunk_neutral" }
            ]
          },
          "capturado_por_seguridad": {
            "text": "La seguridad corporativa te detecta y captura. Te llevan para interrogatorio y borrado de memoria. El frío de la celda se mezcla con el zumbido de máquinas que preparan tu fin.",
            "choices": [
              { "text": "Fin", "next": "ending_cyberpunk_fracaso" }
            ]
          },
          "traicionado_por_contacto": {
            "text": "Era una trampa. Tu contacto trabaja para Arasaka. Te entregan a las autoridades. El último recuerdo que tienes es su sonrisa metálica antes de que todo se apague.",
            "choices": [
              { "text": "Fin", "next": "ending_cyberpunk_traicion" }
            ]
          }
        }
      },

      examinar_huevo: {
        text: "El huevo es cálido al tacto. Dentro, algo se mueve. No es un tesoro, es una prisión. Los 'Antiguos' quieren nacer de nuevo.",
        choices: [
          { text: "Destruir el huevo", next: "destruir_huevo" },
          { text: "Dejarlo - No es tu responsabilidad", next: "dejar_huevo" },
          { text: "Tomar el oro y escapar rápido", next: "tomar_oro_escapar" }
        ]
      },
      tomar_oro_huevo: {
        text: "Al tocar el oro, el huevo pulsa más fuerte. Sientes que lo estás despertando.",
        choices: [
          { text: "Tomar todo igual", next: "ending_aventura_exito" },
          { text: "Detenerte - No vale la pena", next: "examinar_huevo" }
        ]
      },
      investigar_camara: {
        text: "Encuentras más inscripciones: 'Solo sangre pura puede romper el hechizo. Sangre de quien busque no oro, sino justicia'.",
        choices: [
          { text: "Ofrecer tu sangre si es necesario", next: "ofrecer_sangre" },
          { text: "Buscar otra solución", next: "buscar_solucion" }
        ]
      },
      ofrecer_sangre: {
        text: "Un corte en tu mano hace que la sangre caiga sobre el huevo. Se agrieta, pero no nace nada. Se desintegra en polvo dorado. El oro también se desvanece. Solo quedas tú y la verdad.",
        choices: [
          { text: "Final - Rompiste la maldición", next: "ending_aventura_sabio" }
        ]
      },
      buscar_solucion: {
        text: "Encuentras un antiguo ritual de sellado. Necesitas elementos de la isla: agua de la playa, tierra de las cuevas, y una promesa.",
        choices: [
          { text: "Realizar el ritual de sellado", next: "ritual_sellado" },
          { text: "Es demasiado complicado", next: "encontrar_tesoro_mayor" }
        ]
      },
      ritual_sellado: {
        text: "Tras horas, completas el ritual. El huevo se petrifica. La maldición se rompe. No hay oro, pero hay paz.",
        choices: [
          { text: "Final - Sellaste el mal", next: "ending_aventura_neutral" }
        ]
      },
      destruir_huevo: {
        text: "Golpeas el huevo con todas tus fuerzas. Se quiebra con un sonido atronador. De su interior sale... nada. Solo un vacío que absorbe todo el oro. La isla tiembla, luego se calma.",
        choices: [
          { text: "Final - Destruiste la amenaza", next: "ending_aventura_sabio" }
        ]
      },
      dejar_huevo: {
        text: "Decides que no es tu batalla. Tomas solo lo necesario para sobrevivir y escapas.",
        choices: [
          { text: "Final - Sobreviviste, pero la amenaza sigue", next: "ending_aventura_escape" }
        ]
      },
      tomar_oro_escapar: {
        text: "Llenas tus bolsillos y corres. Detrás, escuchas el huevo eclosionar. No miras atrás.",
        choices: [
          { text: "Final - Rico pero culpable", next: "ending_aventura_exito" }
        ]
      },
      playa: {
        text: "La Playa de los Ahogados está llena de restos de barcos de diferentes épocas. No solo el de Barbanegra, sino muchos otros atraídos por la leyenda. Entre los restos, encuentras un diario intacto de un sacerdote que acompañaba una expedición.",
        choices: [
          { text: "Revisar el diario del sacerdote", next: "diario_sacerdote" },
          { text: "Recolectar herramientas útiles de los restos", next: "herramientas" },
          { text: "Construir un refugio para pasar la noche", next: "refugio" },
          { text: "Buscar señales del tesoro entre los naufragios", next: "senales_tesoro" }
        ]
      },
      diario_sacerdote: {
        text: "'Barbanegra no era humano al final. Hablaba con el huevo. Decía que su 'padre' pronto nacería. Ofrecía oro a quien adorara con él'. El diario tiene un mapa de escape.",
        choices: [
          { text: "Seguir el mapa de escape", next: "ending_aventura_escape" },
          { text: "Usar la información para enfrentar el templo", next: "templo_preparado" }
        ]
      },
      herramientas: {
        text: "Encuentras un machete, cuerda resistente, y una brújula que apunta siempre al templo, no al norte.",
        choices: [
          { text: "Ir al templo con herramientas", next: "templo_con_herramienta" },
          { text: "Buscar más recursos en otros naufragios", next: "mas_naufragios" }
        ]
      },
      mas_naufragios: {
        text: "Encuentras un barco más reciente. Dentro, equipo moderno y un informe: 'Expedición científica 2020. Anomalías magnéticas en la isla. El 'tesoro' emite radiación extraña'.",
        choices: [
          { text: "Tomar el equipo científico", next: "equipo_cientifico" },
          { text: "Ignorar y continuar", next: "playa" }
        ]
      },
      equipo_cientifico: {
        text: "Un geiger marca niveles peligrosos cerca del templo. También hay un dispositivo de comunicación dañado.",
        choices: [
          { text: "Intentar reparar la comunicación", next: "reparar_comunicacion" },
          { text: "Ir al templo con esta advertencia", next: "templo_cientifico" }
        ]
      },
      reparar_comunicacion: {
        text: "Logras enviar una señal de socorro. Vendrán en 72 horas. ¿Esperas o actúas?",
        choices: [
          { text: "Esperar refuerzos", next: "ending_aventura_escape" },
          { text: "Ir al templo ahora - El peligro puede crecer", next: "templo_cientifico" }
        ]
      },
      refugio: {
        text: "Construyes un refugio sólido. Durante la noche, sueñas con los ahogados. Te piden ayuda, no oro.",
        choices: [
          { text: "Prometer ayudarles", next: "templo_redencion" },
          { text: "Ignorar los sueños - Solo son sueños", next: "templo" }
        ]
      },
      senales_tesoro: {
        text: "No encuentras oro, sino marcadores de tumbas improvisadas. Los náufragos enterraban a sus compañeros aquí.",
        choices: [
          { text: "Rezar por ellos", next: "oracion_playa" },
          { text: "Continuar buscando pistas", next: "playa" }
        ]
      },
      oracion_playa: {
        text: "Un silencio pacífico cae sobre la playa. El viento susurra 'gracias'. Sientes que tu propósito aquí es otro.",
        choices: [
          { text: "Ir al templo a poner fin a esto", next: "templo_redencion" },
          { text: "Quedarte aquí en paz", next: "ending_aventura_sabio" }
        ]
      },
      escalar: {
        text: "Desde el punto más alto ves toda la isla: las cuevas al norte, el templo al este, la playa al sur. También ves algo más: formaciones de coral en la costa oeste que parecen... letras. 'AYUDA' escrito gigante.",
        choices: [
          { text: "Investigar las formaciones de coral", next: "coral_ayuda" },
          { text: "Ir hacia la X en la vegetación del centro", next: "x_vegetacion" },
          { text: "Investigar humo al noreste", next: "investigar_humo" },
          { text: "Regresar a la playa base", next: "playa" }
        ]
      },
      coral_ayuda: {
        text: "Las formaciones fueron manipuladas por humanos. Hay un refugio oculto con provisiones y un mensaje: 'Barbanegra nos cazó. Solo yo sobreviví. El tesoro es mentira. Huye.' Firma: 'Último sobreviviente, 1718'.",
        choices: [
          { text: "Tomar las provisiones y el consejo", next: "ending_aventura_escape" },
          { text: "Investigar más este refugio", next: "refugio_sobreviviente" }
        ]
      },
      refugio_sobreviviente: {
        text: "Encuentras dibujos detallados del huevo y notas: 'No es huevo, es crisálida. Lo que nace no es dragón, es parásito. Se alimenta de ambición'.",
        choices: [
          { text: "Usar esta información en el templo", next: "templo_con_dibujos" },
          { text: "Huir con esta evidencia", next: "ending_aventura_sabio" }
        ]
      },
      x_vegetacion: {
        text: "La X marca un claro con un cofre. Dentro: monedas de oro falso (plomo bañado) y una nota: 'Si lees esto, aún estás a tiempo. El verdadero tesoro es irse vivo'.",
        choices: [
          { text: "Tomar la pista y la advertencia", next: "monedas_pista" },
          { text: "Dejarlo todo - Es una trampa más", next: "dejar_cofre" }
        ]
      },
      investigar_humo: {
        text: "El humo viene de una hoguera abandonada. Hay huellas recientes y un campamento improvisado. Parece que alguien más está en la isla.",
        choices: [
          { text: "Seguir las huellas", next: "seguir_huellas" },
          { text: "Esperar a ver si regresan", next: "esperar_campamento" },
          { text: "Dejar el campamento y seguir tu camino", next: "escalar" }
        ]
      },
      seguir_huellas: {
        text: "Las huertas llevan a una entrada oculta del templo. Dentro ves a una figura encapuchada realizando un ritual frente al huevo.",
        choices: [
          { text: "Enfrentar a la figura", next: "enfrentar_figura" },
          { text: "Observar en secreto", next: "observar_ritual" }
        ]
      },
      enfrentar_figura: {
        text: "La figura se gira. Es un descendiente de Barbanegra, tratando de completar el ritual familiar. '¡Tú no entenderías! ¡Él prometió inmortalidad!'",
        choices: [
          { text: "Intentar razonar con él", next: "razonar_descendiente" },
          { text: "Atacar para detener el ritual", next: "atacar_descendiente" }
        ]
      },
      razonar_descendiente: {
        text: "'Mira los huesos, mira el dolor. ¿Esta es la herencia que quieres?' Élo duda, luego rompe a llorar. Abandona el ritual.",
        choices: [
          { text: "Destruir el huevo juntos", next: "destruir_huevo" },
          { text: "Huir juntos de la isla", next: "ending_aventura_escape" }
        ]
      },
      atacar_descendiente: {
        text: "Luchan. Él es fuerte pero desesperado. Logras noquearlo. Ahora debes decidir sobre el huevo.",
        choices: [
          { text: "Destruirlo de una vez", next: "destruir_huevo" },
          { text: "Estudiarlo primero", next: "examinar_huevo" }
        ]
      },
      observar_ritual: {
        text: "Ves que el ritual requiere un sacrificio final. Él se prepara para ofrecerse a sí mismo. El huevo empieza a vibrar.",
        choices: [
          { text: "Interrumpir el ritual", next: "enfrentar_figura" },
          { text: "Dejar que se complete - Es su elección", next: "ritual_completo" }
        ]
      },
      ritual_completo: {
        text: "El descendiente se sacrifica. El huevo eclosiona. Lo que sale no es un dios, es un parásito que inmediatamente lo consume. Luego te mira a ti.",
        choices: [
          { text: "Correr por tu vida", next: "ending_aventura_fracaso" },
          { text: "Intentar destruirlo", next: "luchar_parasito" }
        ]
      },
      luchar_parasito: {
        text: "El parásito es rápido pero frágil. Usando herramientas del templo, logras matarlo. Pero la isla empieza a colapsar.",
        choices: [
          { text: "Escapar justo a tiempo", next: "ending_aventura_escape" }
        ]
      },
      esperar_campamento: {
        text: "Horas después, regresa el descendiente. Te ve y se sorprende. '¿Tú también viniste por la promesa?'",
        choices: [
          { text: "Dialogar con él", next: "razonar_descendiente" },
          { text: "Atacarlo por sorpresa", next: "atacar_descendiente" }
        ]
      },

      templo_con_secreto: {
        text: "Llegas al templo sabiendo que el altar es clave. Evitas las trampas fácilmente y encuentras el mecanismo secreto.",
        choices: [
          { text: "Activar el mecanismo", next: "mecanismo_secreto" },
          { text: "Estudiar primero", next: "estudiar_mecanismo" }
        ]
      },
      mecanismo_secreto: {
        text: "El altar se abre revelando no oro, sino documentos: contratos de Barbanegra con criaturas antiguas. La verdad es peor que la leyenda.",
        choices: [
          { text: "Tomar los documentos como evidencia", next: "ending_aventura_sabio" },
          { text: "Destruirlos - Algunas verdades deben morir", next: "ending_aventura_neutral" }
        ]
      },
      templo_respetuoso: {
        text: "Entras al templo sin codicia, solo con respeto por los muertos. Las trampas no se activan. El templo reconoce tu intención.",
        choices: [
          { text: "Acercarte al huevo con cuidado", next: "examinar_huevo" }
        ]
      },
      templo_con_medallon: {
        text: "Llevas el medallón de la hija. Al entrar, el medallón brilla. Los fantasmas susurran 'ella está a salvo... gracias...'. El camino se ilumina.",
        choices: [
          { text: "Seguir el camino iluminado", next: "camino_iluminado" }
        ]
      },
      camino_iluminado: {
        text: "Te lleva directamente a la cámara del huevo, evitando peligros. El huevo parece menos amenazante ahora.",
        choices: [
          { text: "Enfrentar la decisión final", next: "encontrar_tesoro_mayor" }
        ]
      },
      templo_preparado: {
        text: "Con toda la información recolectada, entras sabiendo exactamente qué hacer. No hay duda en tus pasos.",
        choices: [
          { text: "Ir directamente a destruir el huevo", next: "destruir_huevo" },
          { text: "Intentar el ritual de sellado primero", next: "ritual_sellado" }
        ]
      },
      templo_codicioso: {
        text: "Entras con avaricia. Las trampas se activan todas a la vez. Es una lucha desesperada por llegar al oro.",
        choices: [
          { text: "Luchar a través de las trampas", next: "luchar_trampas" },
          { text: "Retirarse herido", next: "ending_aventura_fracaso" }
        ]
      },
      luchar_trampas: {
        text: "Logras sobrevivir, pero gravemente herido. Llegas al oro... pero también despiertas completamente al huevo.",
        choices: [
          { text: "Tomar el oro y correr", next: "ending_aventura_exito" },
          { text: "Intentar destruir el huevo primero", next: "destruir_huevo_herido" }
        ]
      },
      destruir_huevo_herido: {
        text: "Con tus últimas fuerzas, rompes el huevo. Muere contigo. La isla queda en paz.",
        choices: [
          { text: "Final - Héroe trágico", next: "ending_aventura_fracaso" }
        ]
      },
      templo_destruir: {
        text: "Entras con un solo objetivo: destruir. No buscas oro, buscas terminar esto.",
        choices: [
          { text: "Buscar explosivos o método de destrucción", next: "buscar_explosivos" },
          { text: "Atacar el huevo directamente", next: "destruir_huevo" }
        ]
      },
      buscar_explosivos: {
        text: "Encuentras pólvora vieja en el templo. Puedes hacer una explosión controlada.",
        choices: [
          { text: "Preparar la explosión", next: "explosion_controlada" },
          { text: "Es demasiado peligroso", next: "templo_destruir" }
        ]
      },
      explosion_controlada: {
        text: "La explosión destruye el huevo y gran parte del templo. Escapas justo a tiempo.",
        choices: [
          { text: "Final - Destrucción completa", next: "ending_aventura_neutral" }
        ]
      },
      templo_con_herramienta: {
        text: "Con herramientas, puedes manipular mecanismos del templo más fácilmente.",
        choices: [
          { text: "Desactivar sistemas de seguridad", next: "desactivar_seguridad" },
          { text: "Forzar entradas cerradas", next: "forzar_entradas" }
        ]
      },
      desactivar_seguridad: {
        text: "Desactivas todas las trampas. El templo está seguro para explorar.",
        choices: [
          { text: "Explorar todas las cámaras", next: "explorar_camaras" },
          { text: "Ir directo al huevo", next: "examinar_huevo" }
        ]
      },
      explorar_camaras: {
        text: "Encuentras archivos históricos, artefactos, y la verdad completa sobre Barbanegra.",
        choices: [
          { text: "Tomar los archivos como evidencia histórica", next: "ending_aventura_sabio" },
          { text: "Destruir todo para proteger secretos", next: "ending_aventura_neutral" }
        ]
      },
      templo_con_prueba: {
        text: "Con el anillo de la Marina Real, pruebas que Barbanegra era más que un pirata: era un traidor a su especie.",
        choices: [
          { text: "Usar esta revelación para debilitar el huevo", next: "debilita_huevo" },
          { text: "Guardar la prueba para la historia", next: "ending_aventura_sabio" }
        ]
      },
      debilita_huevo: {
        text: "La verdad histórica debilita la magia del huevo. Se rompe fácilmente.",
        choices: [
          { text: "Final - Verdad vence a la magia", next: "ending_aventura_sabio" }
        ]
      },
      templo_con_sello: {
        text: "El sello de la expedición de rescate prueba que muchos intentaron detener esto antes.",
        choices: [
          { text: "Honrar su memoria completando su misión", next: "templo_destruir" },
          { text: "Tomar el sello como recuerdo", next: "ending_aventura_sabio" }
        ]
      },
      templo_redencion: {
        text: "No vienes por oro, vienes por los muertos. Por darles paz. El templo lo siente.",
        choices: [
          { text: "Realizar ritual de paz", next: "ritual_paz" },
          { text: "Liberar las almas atrapadas", next: "liberar_almas" }
        ]
      },
      ritual_paz: {
        text: "Un ritual simple de palabras honestas. La isla exhala. Los fantasmas aparecen, sonríen, se desvanecen.",
        choices: [
          { text: "Final - Paz para todos", next: "ending_aventura_sabio" }
        ]
      },
      liberar_almas: {
        text: "Rompes los símbolos que atrapan las almas. Una luz brillante llena el templo, luego calma.",
        choices: [
          { text: "Final - Liberación", next: "ending_aventura_neutral" }
        ]
      },
      templo_cientifico: {
        text: "Con equipo científico, analizas el huevo: es orgánico, antiguo, y emite señales de angustia. No es malvado, está atrapado también.",
        choices: [
          { text: "Intentar comunicarte con él", next: "comunicar_huevo" },
          { text: "Estudiar más", next: "estudiar_huevo" }
        ]
      },
      comunicar_huevo: {
        text: "El huevo comunica: 'Cautivo... Barbanegra... romper...'. Quiere ser liberado de su prisión dorada.",
        choices: [
          { text: "Liberarlo de su prisión", next: "liberar_huevo" },
          { text: "Mantenerlo cautivo - Muy peligroso", next: "dejar_huevo" }
        ]
      },
      liberar_huevo: {
        text: "Al liberarlo, nace una criatura etérea que te agradece y vuela hacia el mar. El oro se desvanece.",
        choices: [
          { text: "Final - Compasión recompensada", next: "ending_aventura_sabio" }
        ]
      },
      estudiar_huevo: {
        text: "Descubres que el huevo es un ser neutral atrapado por la magia de Barbanegra. La codicia lo corrompió.",
        choices: [
          { text: "Curarlo en vez de destruirlo", next: "curar_huevo" },
          { text: "Aún es muy riesgoso", next: "destruir_huevo" }
        ]
      },
      curar_huevo: {
        text: "Un proceso largo pero al final, el huevo se purifica. Nace algo hermoso que bendice la isla.",
        choices: [
          { text: "Final - Sanador", next: "ending_aventura_exito" }
        ]
      },

      encontrar_tesoro_mayor: {
        text: "Has llegado al corazón del misterio...",
        choices: [
          { text: "Tomar todo el oro - Ser rico pero cargar con la maldición", next: "decision_oro_completo" },
          { text: "Tomar solo lo necesario - Sabiduría sobre riqueza", next: "decision_oro_parcial" },
          { text: "Destruirlo todo - Romper el ciclo para siempre", next: "decision_destruccion" },
          { text: "Huir sin nada - Solo supervivencia", next: "decision_huida" },
          { text: "Quedarte a proteger el secreto - Guardián eterno", next: "decision_proteccion" }
        ]
      },
      decision_oro_completo: {
        text: "Tomas todo el oro. Tu mochila pesa terriblemente. El huevo comienza a vibrar...",
        choices: [
          { text: "Ignorar la vibración y escapar", next: "ending_aventura_exito" },
          { text: "Devolver parte del oro", next: "arrepentimiento_parcial" }
        ]
      },
      decision_oro_parcial: {
        text: "Tomas solo un puñado de monedas. Es suficiente para una vida nueva.",
        choices: [
          { text: "Escapar con lo esencial", next: "ending_aventura_sabio" }
        ]
      },
      decision_destruccion: {
        text: "Rompes el huevo con una piedra. Se desintegra en polvo dorado.",
        choices: [
          { text: "Salir de la isla en paz", next: "ending_aventura_neutral" }
        ]
      },
      decision_huida: {
        text: "Sales corriendo. El oro no vale tu vida.",
        choices: [
          { text: "Sobrevivir para contarlo", next: "ending_aventura_escape" }
        ]
      },
      decision_proteccion: {
        text: "Te quedas. Serás el guardián de este secreto.",
        choices: [
          { text: "Aceptar tu destino", next: "ending_aventura_fracaso" }
        ]
      },
      arrepentimiento_parcial: {
        text: "Devuelves la mitad del oro. Demasiado tarde, la maldición ya comenzó.",
        choices: [
          { text: "Vivir con las consecuencias", next: "ending_aventura_neutral" }
        ]
      }
    }
  },

  ///HISTORIA MITOLOGIA: LOS DIOSES OLVIDADOS

  mitologia: {
    title: "Los Dioses Olvidados",
    nodes: {
      start: {
        text: "Eres un arqueólogo que descubre un templo griego perdido dedicado a dioses olvidados. Tres puertas muestran símbolos: el rayo de Zeus, el tridente de Poseidón y el yelmo de Hades. El aire huele a ozono y tierra antigua.",
        choices: [
          { text: "Entrar por la puerta del rayo (Prueba de Zeus)", next: "zeus" },
          { text: "Entrar por la puerta del tridente (Prueba de Poseidón)", next: "poseidon" },
          { text: "Entrar por la puerta del yelmo (Prueba de Hades)", next: "hades" },
          { text: "Estudiar las inscripciones primero", next: "inscripciones_templo" }
        ]
      },
      zeus: {
        text: "Entras a una sala con un altar bajo un cielo artificial con relámpagos. Una voz retumba: 'Demuestra tu valía enfrentando la tormenta de la verdad. Solo los puros de corazón sobreviven.'",
        choices: [
          { text: "Arrodillarte y mostrar respeto", next: "respeto_zeus" },
          { text: "Desafiar la tormenta directamente", next: "desafiar_tormenta" },
          { text: "Buscar protección en el altar", next: "proteccion_altar" }
        ]
      },
      poseidon: {
        text: "La sala se inunda lentamente. Estatuas de criaturas marinas cobran vida. 'Demuestra tu adaptabilidad. El océano no perdona la rigidez.'",
        choices: [
          { text: "Nadar hacia la salida visible", next: "nadar_salida" },
          { text: "Comunicarte con las criaturas", next: "comunicar_criaturas" },
          { text: "Buscar mecanismo para drenar el agua", next: "drenar_agua" }
        ]
      },
      hades: {
        text: "La oscuridad es absoluta. Voces susurran secretos y tentaciones. 'Demuestra tu resistencia a las sombras. Todos tienen oscuridad dentro.'",
        choices: [
          { text: "Encender una luz", next: "encender_luz" },
          { text: "Seguir las voces", next: "seguir_voces" },
          { text: "Meditar para resistir", next: "meditar" }
        ]
      },

      completar_pruebas: {
        text: "Has superado las tres pruebas. Los dioses olvidados aparecen como espectros. 'Mortal, has demostrado valía. Te ofrecemos un don, pero cada elección tiene consecuencias.'",
        choices: [
          { text: "Pedir sabiduría eterna", next: "ending_mitologia_sabiduria" },
          { text: "Pedir poder sobre elementos", next: "ending_mitologia_poder" },
          { text: "Pedir que los dioses descansen en paz", next: "ending_mitologia_paz" },
          { text: "Rechazar el don", next: "ending_mitologia_humilde" }
        ]
      },
      fallar_pruebas: {
        text: "Has fallado una prueba crucial. El templo te rechaza.",
        choices: [
          { text: "Fin", next: "ending_mitologia_fracaso" }
        ]
      }
    }
  },


  /// HISTORIA ECOAVENTURA: GUARDIANES DEL BOSQUE
  ecoaventura: {
    title: "Guardianes del Bosque",
    nodes: {
      start: {
        text: "Eres un guardabosques en la Amazonía. Recibes una alerta: taladores ilegales han entrado en zona protegida. También hay reportes de un animal raro herido. Debes priorizar.",
        choices: [
          { text: "Investigar a los taladores ilegales", next: "taladores" },
          { text: "Buscar y ayudar al animal herido", next: "animal_herido" },
          { text: "Pedir refuerzos a la base", next: "refuerzos" },
          { text: "Buscar evidencia primero", next: "evidencia" }
        ]
      },
      taladores: {
        text: "Encuentras el campamento de taladores. Son cinco hombres armados con motosierras. Han talado varios árboles centenarios. Debes decidir cómo proceder.",
        choices: [
          { text: "Enfrentarlos directamente", next: "enfrentar_taladores" },
          { text: "Fotografiar como evidencia y retirarte", next: "fotografiar" },
          { text: "Seguirlos a su base", next: "seguir_base" },
          { text: "Crear una distracción para alejarlos", next: "distraccion_taladores" }
        ]
      },
      animal_herido: {
        text: "Encuentras un jaguar con una pata atrapada en un cepo. Está débil pero aún peligroso. Necesitas medicina y herramientas para liberarlo.",
        choices: [
          { text: "Intentar liberarlo tú mismo", next: "liberar_jaguar" },
          { text: "Ir por ayuda y medicinas", next: "buscar_ayuda" },
          { text: "Tranquilizarlo primero si tienes equipo", next: "tranquilizar" },
          { text: "Observar desde lejos y planear", next: "observar_jaguar" }
        ]
      },
      // Más nodos para ecoaventura...
      resolver_conflicto: {
        text: "Has manejado la situación. Los taladores han sido detenidos y el animal está a salvo. La comunidad local te agradece.",
        choices: [
          { text: "Aceptar gratitud y continuar tu trabajo", next: "ending_ecoaventura_exito" },
          { text: "Educar a la comunidad sobre conservación", next: "ending_ecoaventura_educacion" },
          { text: "Pedir más recursos para el parque", next: "ending_ecoaventura_recursos" }
        ]
      },
      fracaso_proteccion: {
        text: "La situación se salió de control. El daño al bosque es significativo.",
        choices: [
          { text: "Fin", next: "ending_ecoaventura_fracaso" }
        ]
      }
    }
  },

// HISTORIA COMPLETA: MEDIEVAL - "LA REBELIÓN DEL PUEBLO" 
 medieval : {
    title: "La Rebelión del Pueblo",
    nodes: {
      start: {
        text: "El último invierno fue brutal. El Lord Valerius Blackwood, dueño de estas tierras por derecho de conquista, ha subido los impuestos por tercera vez este año. Ayer, los guardias se llevaron a tu hermano menor por no poder pagar la 'tasa de protección'. Esta mañana encuentras a tu madre llorando frente al horno vacío. 'No queda harina', dice. En la plaza del pueblo, el pregonero anuncia otra subida. Los murmuros se convierten en gritos. Un hombre alto con cicatrices en los brazos - Magnus el Herrero - sube al pozo y grita: '¡BASTA!'. La multitud enmudece. 'Esta noche, en la cueva del viejo roble. Quien tenga valor, que venga.' La luna es una hoz afilada cuando llegas. Tres líderes emergen de las sombras, cada uno con un plan diferente para liberar al pueblo del yugo de Blackwood.",
        choices: [
          { text: "Unirte a Elara y sus Arqueros del Bosque - Guerrilla y sabotaje", next: "arqueros" },
          { text: "Seguir a Magnus el Herrero - Asalto frontal y confrontación", next: "herrero" },
          { text: "Escuchar a Alistair el Monje - Diplomacia y petición al Rey", next: "monje" },
          { text: "Observar primero sin comprometerte", next: "observador" },
          { text: "Buscar tu propio camino en solitario", next: "solitario" }
        ]
      },

      arqueros: {
        text: "Elara Silvershot te mira con ojos que han visto demasiadas batallas. 'No somos soldados, somos sombras. Blackwood no puede gobernar lo que no puede ver.' Su grupo, los 'Susurros del Bosque', opera desde el Bosque Negro. Te entrenan durante tres días: cómo moverte sin hacer ruido, cómo preparar flechas silenciosas, cómo leer el viento. 'Elegimos nuestros blancos como el halcón elige su presa: preciso, rápido, mortal.' Te presentan dos misiones iniciales, cada una con riesgos y recompensas diferentes.",
        choices: [
          { text: "Misión Alta: Interceptar el carruaje de oro del Lord (riesgo extremo, recompensa máxima)", next: "carruaje_oro" },
          { text: "Misión Media: Sabotear los molinos y silos del señor (impacto estratégico)", next: "sabotear_molinos" },
          { text: "Misión Baja: Cortar las líneas de comunicación con la capital", next: "cortar_comunicaciones" },
          { text: "Propuesta Especial: Infiltrarte en el castillo como espía", next: "infiltracion" },
          { text: "Pedir más tiempo de entrenamiento", next: "mas_entrenamiento" }
        ]
      },

      carruaje_oro: {
        text: "El carruaje viaja por el Camino del Rey cada luna llena, escoltado por seis guardias de la Corona y dos ballesteros mercenarios. Elara traza el plan en la tierra: 'Emboscada aquí, en el Desfiladero del Cuervo. Es estrecho, las rocas dan cobertura. Pero...' Pausa dramática. 'Nuestro informante dice que podría ser una trampa. Blackwood sospecha de rebelión.' Los otros arqueros discuten. Algunos quieren proceder, otros abortar. Tú debes decidir.",
        choices: [
          { text: "Proceder con el plan original - Confiar en la sorpresa", next: "emboscada_original" },
          { text: "Modificar el plan - Atacar antes del desfiladero", next: "ataque_temprano" },
          { text: "Enviar un explorador primero para confirmar", next: "explorador" },
          { text: "Abortar la misión - Demasiado riesgo", next: "abortar_mision" },
          { text: "Preparar una trampa secundaria por si es emboscada", next: "trampa_secundaria" }
        ]
      },

      sabotear_molinos: {
        text: "Los cuatro molinos del Valle alimentan no solo a Blackwood sino a media provincia. 'Sin harina, sin pan. Sin pan, sin ejército', explica Elara. Pero los molinos están custodiados por campesinos locales que trabajan forzados. 'Si los destruimos, ellos también pasarán hambre.' Te asignan elegir qué molino atacar y cómo.",
        choices: [
          { text: "Molino del Río - El más grande, mayor impacto", next: "molino_rio" },
          { text: "Molino de Viento - Símbolo del poder del Lord", next: "molino_viento" },
          { text: "Molino de la Colina - El menos custodiado", next: "molino_colina" },
          { text: "Buscar alternativa: envenenar la harina sin destruir", next: "envenenar_harina" },
          { text: "Intentar convencer a los trabajadores para que se unan", next: "convencer_trabajadores" }
        ]
      },

      cortar_comunicaciones: {
        text: "Las torres de señales transmiten órdenes de Blackwood y reciben instrucciones de la capital. Cortarlas aísla al Lord pero también impide que el pueblo pida ayuda externa. 'Es un cuchillo de doble filo', advierte Elara.",
        choices: [
          { text: "Destruir las torres completamente", next: "destruir_torres" },
          { text: "Solo dañarlas para reparación lenta", next: "danar_torres" },
          { text: "Interceptar mensajes para información", next: "interceptar_mensajes" },
          { text: "Enviar mensajes falsos a la capital", next: "mensajes_falsos" }
        ]
      },

      infiltracion: {
        text: "'Necesitamos ojos dentro del castillo', dice Elara. 'Un espía puede valer por cien arqueros.' Pero la infiltración requiere identidad falsa, conocimiento de protocolos, y nervios de acero.",
        choices: [
          { text: "Disfrazarse como mercader proveedor", next: "mercader" },
          { text: "Unirse a los guardias reclutados forzosamente", next: "guardia_recluta" },
          { text: "Entrar como sirviente temporal", next: "sirviente" },
          { text: "Usar túneles secretos antiguos", next: "tuneles_secretos" }
        ]
      },

      mas_entrenamiento: {
        text: "Pides una semana más de entrenamiento. Elara acepta pero advierte: 'Blackwood no esperará.' Aprendes técnicas avanzadas: flechas incendiarias, trampas con cuerda, camuflaje con barro y hojas.",
        choices: [
          { text: "Ahora estás listo para misiones", next: "carruaje_oro" },
          { text: "Seguir entrenando especialidades", next: "entrenamiento_avanzado" }
        ]
      },

      emboscada_original: {
        text: "El desfiladero está silencioso, demasiado silencioso. Justo cuando el carruaje entra en la zona de emboscada, una flecha silba junto a tu oreja. ¡ES UNA TRAMPA! Guardias emergen de escondites preparados. Los ballesteros mercenarios son expertos, sus disparos encuentran blancos. Elara grita '¡RETIRADA!', pero el camino de escape está bloqueado.",
        choices: [
          { text: "Cargar hacia adelante - Tomar el carruaje aunque sea trampa", next: "carga_suicida" },
          { text: "Retirada por el río - Arriesgar las corrientes peligrosas", next: "retirada_rio" },
          { text: "Rendirse - Quizás puedan negociar", next: "rendirse_emboscada" },
          { text: "Dividirse - Algunos distraen, otros escapan", next: "division_escape" }
        ]
      },

      ataque_temprano: {
        text: "Atacas antes del desfiladero, en terreno abierto. Es más difícil pero menos predecible. Sorprendes a la escolta, matas a dos guardias y tomas el carruaje. Dentro encuentras no solo oro, sino documentos comprometedores sobre Blackwood.",
        choices: [
          { text: "Tomar el oro y quemar los documentos", next: "oro_sin_documentos" },
          { text: "Tomar los documentos y dejar el oro", next: "documentos_sin_oro" },
          { text: "Tomar ambas cosas pero más lentamente", next: "ambas_cosas" },
          { text: "Dejar señuelo falso para Blackwood", next: "senuelo_falso" }
        ]
      },

      explorador: {
        text: "Envías a Tomas, el mejor rastreador. No regresa. Al amanecer, encuentras su cuerpo con un mensaje clavado en el pecho: 'La próxima serás tú. -Blackwood'",
        choices: [
          { text: "Vengar a Tomas atacando de todos modos", next: "venganza_tomas" },
          { text: "Retirarse - El costo es demasiado alto", next: "retiro_explorador" },
          { text: "Cambiar objetivo completamente", next: "cambiar_objetivo" }
        ]
      },

      abortar_mision: {
        text: "Decides que el riesgo es demasiado alto. Elara respeta tu decisión pero algunos arqueros te miran con desdén. 'El miedo mata más que las flechas', murmura uno.",
        choices: [
          { text: "Elegir otra misión menos riesgosa", next: "sabotear_molinos" },
          { text: "Probar con infiltración en su lugar", next: "infiltracion" }
        ]
      },

      trampa_secundaria: {
        text: "Preparas una segunda emboscada más atrás, por si la primera falla. Cuando los refuerzos de Blackwood llegan para atraparos en la primera trampa, vosotros los atrapáis en la segunda. Es una victoria brillante.",
        choices: [
          { text: "Tomar el botín y retirarse", next: "botin_y_retirada" },
          { text: "Perseguir a los sobrevivientes hacia el castillo", next: "perseguir_sobrevivientes" },
          { text: "Usar uniformes capturados para infiltración", next: "uniformes_capturados" }
        ]
      },

      molino_rio: {
        text: "El Molino del Río es enorme, con ruedas que muelen día y noche. Diez guardias custodian. Lo incendias de noche, las llamas iluminan el valle. Blackwood ofrece recompensa por 'terroristas'.",
        choices: [
          { text: "Esconderse en el bosque profundo", next: "esconderse_bosque" },
          { text: "Unirse al asalto de Magnus para protección", next: "unirse_magnus" },
          { text: "Dividirse en grupos pequeños", next: "dividirse_grupos" }
        ]
      },

      herrero: {
        text: "La fragua de Magnus arde día y noche. El calor es insoportable, el sonido del martillo sobre el yunque es un latido de guerra. 'Hablar se acabó', gruñe mientras enfría una hoja de espada. 'Blackwood solo entiende esto.' Muestra su brazo, donde una cicatriz forma la marca del látigo del Lord. 'Era un niño. Mi padre no podía pagar. Ahora él está muerto y yo tengo esto.' Reúne a treinta hombres y mujeres, todos con historias similares.",
        choices: [
          { text: "Forjador - Crear armas para la rebelión", next: "forjador" },
          { text: "Reclutador - Buscar más aliados en pueblos vecinos", next: "reclutador" },
          { text: "Estratega - Planear el asalto al castillo", next: "estratega" },
          { text: "Explorador - Estudiar las defensas del castillo", next: "explorador_castillo" }
        ]
      },

      forjador: {
        text: "La fragua necesita hierro, mucho hierro. Blackwood confiscó todo el metal del pueblo después de la última revuelta fallida.",
        choices: [
          { text: "Mina abandonada - Riesgo físico pero sin consecuencias morales", next: "mina_abandonada" },
          { text: "Vertedero del castillo - Robo directo al enemigo", next: "vertedero" },
          { text: "Tumba de los reyes - Sacrilegio pero hierro legendario", next: "tumba_reyes" },
          { text: "Fundir herramientas agrícolas - El pueblo pasará hambre después", next: "herramientas" }
        ]
      },

      mina_abandonada: {
        text: "La mina está inundada y con riesgo de derrumbe. Encuentras hierro pero también esqueletos de mineros esclavos de Blackwood.",
        choices: [
          { text: "Tomar el hierro y honrar a los muertos", next: "hierro_con_honor" },
          { text: "Buscar otra fuente - Demasiado macabro", next: "buscar_otra_fuente" },
          { text: "Usar los esqueletos como prueba contra Blackwood", next: "esqueletos_prueba" }
        ]
      },

      reclutador: {
        text: "Viajas a pueblos vecinos. Algunos se unen entusiastas, otros temen represalias, otros ya tienen sus propias rebeliones.",
        choices: [
          { text: "Prometer parte del botín futuro", next: "prometer_botin" },
          { text: "Mostrar las cicatrices de Magnus como advertencia", next: "mostrar_cicatrices" },
          { text: "Ofrecer protección mutua", next: "proteccion_mutua" },
          { text: "Amenazar con consecuencias si no se unen", next: "amenazar_reclutas" }
        ]
      },

      estratega: {
        text: "El castillo tiene murallas altas, foso, y 100 guardias. Magnus propone asalto frontal durante el festival de la cosecha, cuando muchos guardias estarán borrachos.",
        choices: [
          { text: "Asalto frontal como propone Magnus", next: "asalto_frontal" },
          { text: "Asedio lento - Hambrearlos", next: "asedio" },
          { text: "Túneles mineros bajo las murallas", next: "tuneles_mineros" },
          { text: "Engaño - Fingir rendición para entrar", next: "engano" }
        ]
      },

      monje: {
        text: "Alistair es un hombre de paz en un mundo de guerra. Sus manos, cubiertas de cicatrices de flagelación autoimpuesta, sostienen un pergamino. 'Violencia engendra violencia. Mostraremos al Rey la verdad con pruebas irrefutables.'",
        choices: [
          { text: "Recolector de pruebas - Documentar abusos del Lord", next: "recolector_pruebas" },
          { text: "Protector de testigos - Esconder a quienes hablan", next: "protector_testigos" },
          { text: "Copista - Hacer copias de documentos para seguridad", next: "copista" },
          { text: "Mensajero - Llevar la petición al Rey", next: "mensajero" }
        ]
      },

      recolector_pruebas: {
        text: "Cada documento cuenta una historia de miseria. Pero recolectar pruebas es peligroso. El espía de Blackwood, conocido como 'El Ojo', está en todas partes.",
        choices: [
          { text: "Enfocarse en crímenes económicos - Los más numerosos", next: "crimenes_economicos" },
          { text: "Buscar casos de violencia extrema - Los más impactantes", next: "violencia_extrema" },
          { text: "Documentar corrupción de oficiales del Lord", next: "corrupcion_oficiales" }
        ]
      },

      crimenes_economicos: {
        text: "Encuentras registros de impuestos imposibles, confiscaciones ilegales, y monopolios forzados. Son aburridos pero numerosos.",
        choices: [
          { text: "Presentarlos tal cual - La cantidad abruma", next: "presentar_numeros" },
          { text: "Hacerlos comprensibles para el pueblo llano", next: "simplificar" },
          { text: "Buscar patrones de enriquecimiento ilícito", next: "patrones" }
        ]
      },

      protector_testigos: {
        text: "Escondes a campesinos que se atrevieron a hablar. Uno, un anciano llamado Gregor, cuenta cómo Blackwood mató a su familia completa.",
        choices: [
          { text: "Grabar su testimonio con un escribano", next: "grabar_testimonio" },
          { text: "Llevarlo vivo a la capital", next: "llevar_vivo" },
          { text: "Enseñarle a leer para que escriba él mismo", next: "enseñar_leer" }
        ]
      },

      observador: {
        text: "Decides no comprometerte todavía. Durante una semana, observas desde las sombras. Los arqueros realizan un sabotaje exitoso pero pierden a dos miembros. Magnus reúne 50 personas pero carece de armas. Alistair es interceptado por espías pero escapa.",
        choices: [
          { text: "Unirte finalmente a los arqueros", next: "arqueros_tarde" },
          { text: "Unirte finalmente al herrero", next: "herrero_tarde" },
          { text: "Unirte finalmente al monje", next: "monje_tarde" },
          { text: "Formar tu propia facción cuarta", next: "facacion_propia" }
        ]
      },

      solitario: {
        text: "Crees que los grupos son lentos, predecibles. Operas solo. Tu primera noche robas un uniforme de guardia dormido.",
        choices: [
          { text: "Asesinato selectivo - Eliminar oficiales clave", next: "asesinato_selectivo" },
          { text: "Robo estratégico - Tomar el tesoro del Lord", next: "robo_tesoro" },
          { text: "Desinformación - Sembrar caos", next: "desinformacion" },
          { text: "Rescate - Liberar a prisioneros", next: "rescate_solitario" }
        ]
      },

      asesinato_selectivo: {
        text: "Eliminas al capitán de la guardia, luego al recaudador de impuestos. Blackwood se aterroriza, duplica la seguridad personal.",
        choices: [
          { text: "Atacar al mismo Blackwood", next: "atacar_blackwood" },
          { text: "Eliminar a sus consejeros", next: "eliminar_consejeros" },
          { text: "Dejar notas amenazantes", next: "notas_amenazantes" }
        ]
      },

      convergencia: {
        text: "Después de meses de preparación, las tres facciones se encuentran forzadas a unirse. Blackwood ha descubierto la rebelión y marcha con todo su ejército hacia el pueblo. Tenéis 24 horas para preparar la defensa o ataque final.",
        choices: [
          { text: "Defensa del pueblo - Luchar en terreno conocido", next: "defensa_pueblo" },
          { text: "Ataque sorpresa - Salir a encontrarlos", next: "ataque_sorpresa" },
          { text: "Negociación de última hora", next: "negociacion_ultima" },
          { text: "Evacuación total - Salvar al pueblo", next: "evacuacion_total" }
        ]
      },

      defensa_pueblo: {
        text: "Fortificáis el pueblo. Barricadas en cada calle, arqueros en tejados, pozos con estacas. Blackwood llega al amanecer con 150 hombres.",
        choices: [
          { text: "Defensa tradicional - Murallas y puertas", next: "defensa_tradicional" },
          { text: "Trampas y guerrilla urbana", next: "guerrilla_urbana" },
          { text: "Fuego griego y sustancias químicas", next: "fuego_griego" },
          { text: "Rendición condicional para salvar vidas", next: "rendicion_condicional" }
        ]
      },

      batalla_final: {
        text: "El sonido de espadas, gritos, flechas silbando. El pueblo arde en algunos lugares. Blackwood mismo lidera el asalto, su armadura dorada manchada de sangre.",
        choices: [
          { text: "Enfrentar a Blackwood personalmente", next: "duelo_blackwood_final" },
          { text: "Comandar desde atrás - Estrategia sobre fuerza", next: "comando_estrategico" },
          { text: "Proteger a los no combatientes", next: "proteger_civiles" },
          { text: "Retirada táctica para reagrupar", next: "retirada_tactica" }
        ]
      },

      duelo_blackwood_final: {
        text: "Te enfrentas a Blackwood en duelo singular mientras la batalla ruge alrededor. Es más fuerte, mejor armado, pero tú tienes la causa justa.",
        choices: [
          { text: "Combate honorable - Espada contra espada", next: "combate_honorable" },
          { text: "Usar trucos sucios - Lo que sea necesario", next: "trucos_sucios" },
          { text: "Intentar razonar hasta el final", next: "razonar_hasta_final" },
          { text: "Rendirte para salvar al pueblo", next: "rendirte_por_pueblo" }
        ]
      },

      combate_honorable: {
        text: "Luchas con honor. Blackwood te supera en técnica pero subestima tu determinación. Tras veinte minutos de combate exhaustivo, encuentras una apertura.",
        choices: [
          { text: "Matarlo - Justicia final", next: "matar_blackwood" },
          { text: "Herirlo y capturarlo - Juicio justo", next: "capturar_blackwood" },
          { text: "Exigir su rendición pública", next: "exigir_rendicion" }
        ]
      },

      final_victoria_honorable: {
        text: "Blackwood se rinde públicamente. Lo juzgáis con testigos de toda la provincia. Es exiliado permanentemente. Establecéis el 'Consejo del Pueblo', donde cada aldea elige representantes. Los impuestos son justos, las tierras redistribuidas. Años después, eres anciano, viendo a niños jugar donde antes hubo horcas. La libertad tiene un precio, pero lo pagasteis sin perder vuestra humanidad.",
        choices: [
          { text: "Final alcanzado: Victoria Pacífica", next: "ending_rebelion_pacifica" }
        ]
      },

      final_victoria_sangrienta: {
        text: "La batalla fue una carnicería. Blackwood muere, pero 150 rebeldes yacen con él. Tomáis el castillo, pero huele a muerte. El nuevo gobierno se establece con espadas, no con palabras. Pronto, los vencedores empiezan a discutir sobre el botín. La tiranía cambió de rostro, no de naturaleza.",
        choices: [
          { text: "Final alcanzado: Victoria Amarga", next: "ending_rebelion_sangrienta" }
        ]
      },

      final_traicion: {
        text: "En el momento crucial, uno de los líderes traiciona a los rebeldes por una bolsa de oro y un título nobiliario. Sois emboscados, masacrados. Tu último pensamiento, atado al poste de ejecución, es que algunos precios son demasiado altos.",
        choices: [
          { text: "Final alcanzado: Traición y Derrota", next: "ending_rebelion_traicion" }
        ]
      },

      final_negociacion_exitosa: {
        text: "La petición llega al Rey. Horrorizado por los crímenes de su vasallo, destituye a Blackwood y nombra un administrador justo. Sin una sola batalla, lográis reformas profundas. Eres nombrado consejero real. La pluma resultó más poderosa que la espada.",
        choices: [
          { text: "Final alcanzado: Triunfo Diplomático", next: "ending_rebelion_diplomatica" }
        ]
      },

      final_leyenda_solitario: {
        text: "Operando solo, eliminaste uno a uno a los oficiales de Blackwood. El Lord, aterrorizado, huye del castillo. Nunca supieron tu nombre, solo tu mítica: 'La Sombra Vengadora'. Te conviertes en leyenda, en el susurro que hace que los tiranos revisen sus espaldas.",
        choices: [
          { text: "Final alcanzado: Leyenda Eterna", next: "ending_rebelion_leyenda" }
        ]
      },

      final_fracaso_heroico: {
        text: "La rebelión falla. Sois capturados. En la horca, miras a la multitud. Un niño te mira con admiración. Sonríes. Tu muerte no es el final, es la semilla. Diez años después, ese niño lidera una rebelión exitosa.",
        choices: [
          { text: "Final alcanzado: Mártir de la Libertad", next: "ending_rebelion_martir" }
        ]
      },

      final_exilio: {
        text: "Negociáis: Blackwood reduce impuestos a cambio de vuestro exilio. Dejas tu tierra natal para siempre, pero sabes que tu familia vivirá mejor. En tierras lejanas, fundas una nueva comunidad donde todos son iguales.",
        choices: [
          { text: "Final alcanzado: Exilio Digno", next: "ending_rebelion_exilio" }
        ]
      },

      final_tirano_sustituto: {
        text: "Ganáis, pero Magnus se corona nuevo Lord. Al principio es justo, pero el poder lo corrompe. En cinco años, es peor que Blackwood. Te das cuenta demasiado tarde: no luchasteis contra un tirano, luchasteis contra la tiranía misma.",
        choices: [
          { text: "Final alcanzado: Ciclo de Opresión", next: "ending_rebelion_ciclo" }
        ]
      },

      arqueros_tarde: {
        text: "Te unes a los arqueros cuando ya tienen bajas y desconfianza. Debes probar tu valía rápidamente.",
        choices: [
          { text: "Ofrecerte para misión peligrosa", next: "mision_peligrosa" },
          { text: "Compartir información valiosa que recolectaste", next: "informacion_valiosa" },
          { text: "Curar a los heridos con conocimientos de hierbas", next: "curar_heridos" }
        ]
      },

      faccion_propia: {
        text: "Formas tu propio grupo con aquellos descontentos de las tres facciones. Eres solo 15, pero muy motivados.",
        choices: [
          { text: "Enfocarse en propaganda y ganar corazones", next: "propaganda" },
          { text: "Acciones simbólicas de desobediencia", next: "acciones_simbolicas" },
          { text: "Buscar alianza con noble descontento", next: "alianza_noble" }
        ]
      },

      mision_peligrosa: {
        text: "Te ofreces para asesinar al espía 'El Ojo'. Es la misión más peligrosa hasta ahora.",
        choices: [
          { text: "Aceptar sin condiciones", next: "aceptar_mision" },
          { text: "Pedir condiciones específicas", next: "condiciones_mision" },
          { text: "Recomendar a alguien más", next: "recomendar_otro" }
        ]
      },

      aceptar_mision: {
        text: "Localizas a 'El Ojo' en una taberna. Es un hombre común, sin características especiales. Te acercas...",
        choices: [
          { text: "Matarlo rápido y silencioso", next: "matar_rapido" },
          { text: "Interrogarlo primero", next: "interrogar" },
          { text: "Seguirlo para descubrir más", next: "seguir" }
        ]
      }
    }
  },

// FINALES COMPLETOS PARA TODAS LAS HISTORIAS
endings :{
  // Medieval Castillo maldito
  ending_success_magic: {
    type: "success",
    title: "Escape Mágico",
    text: "El mago te teletransporta a un prado lejano. Has ganado tu libertad gracias a la magia arcana. El castillo maldito queda atrás, pero su misterio permanece.",
    image: "img/castillomaldito_escapemagico.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_death: {
    type: "failure",
    title: "Caída Fatal",
    text: "Un paso en falso pone fin a tu aventura. La oscuridad te reclama. Tu historia termina aquí, en las sombras del castillo.",
    image: "img/castillomaldito_caidafatal.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_neutral: {
    type: "neutral",
    title: "Advertencia y Libertad",
    text: "Sales bajo vigilancia. No es gloria, pero estás vivo. A veces la diplomacia es la mejor arma. El castillo permanece, pero tú sigues tu camino.",
    image: "img/castillomaldito_libertad.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_escape_tunnel: {
    type: "success",
    title: "Túnel de Esperanza",
    text: "Emerges en el bosque gracias al túnel cavado por otros soñadores de libertad. Ingenio y suerte te salvaron. La noche estrellada te recibe.",
    image: "img/castillomaldito_tunel.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_captured: {
    type: "failure",
    title: "Capturado",
    text: "Te atrapan y vuelves a la celda. Tu aventura termina donde comenzó. Las cadenas son más fuertes esta vez.",
    image: "img/castillomaldito_capturado.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_escape_simple: {
    type: "success",
    title: "Salida Secreta",
    text: "Llegas a los establos y montas un caballo hacia la libertad. A veces el camino más sencillo es el mejor. El viento fresco limpia tus temores.",
    image: "img/castillomaldito_salidasecreta.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
ending_victoria_tragica: { 
  type: "neutral", 
  title: "Victoria Trágica", 
  text: "Intentaron romper la maldición con valentía pero sin los objetos sagrados. El precio fue alto: el castillo destruido, vidas perdidas. El mago te salvó con su último aliento. Eres libre, pero la victoria sabe a cenizas. A veces el coraje no es suficiente.",
  image: "img/castillomaldito_victoriatragica.jpg",
  onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
},

ending_supervivencia: { 
  type: "failure", 
  title: "Mera Supervivencia", 
  text: "Huiste cuando todo se derrumbaba. Estás vivo, pero el castillo es solo ruinas y cenizas. Todos murieron por un intento desesperado que falló. Te quedas mirando los escombros preguntándote: ¿qué hubiera pasado si hubieras elegido el camino más difícil pero seguro?",
  image: "img/castillomaldito_supervivencia.jpg",
  onlineImage: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=800&fit=crop"
},
ending_escape_con_culpa: {
  type: "neutral",
  title: "Libertad con Culpa",
  text: "Escapaste, pero abandonaste a quienes podías salvar. El mago, la princesa, el rey... todos perdidos. Cada noche sus voces te persiguen en pesadillas. Eres libre, pero ¿a qué precio?",
  image: "img/castillomaldito_culpa.jpg",
  onlineImage: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=800&fit=crop"
},

  // Fantasía Bosque encantado
  ending_fantasia_exito: {
    type: "success",
    title: "Luz del Exterior",
    text: "Dejas atrás el bosque encantado. La magia te guió hasta la libertad. Los árboles susurran tu despedida mientras emerges a la luz del día.",
    image: "img/bosqueencantado_luzexterior.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_fantasia_perdido: {
    type: "failure",
    title: "Perdido en la Niebla",
    text: "El bosque te reclama. Sus senderos eternos te atrapan para siempre. Te conviertes en otra leyenda del lugar.",
    image: "img/bosqueencantado_perdido.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_fantasia_fracaso: {
    type: "failure",
    title: "Arrastrado por la Corriente",
    text: "Las aguas místicas te llevan a las profundidades. Las cuevas no perdonan. Tu aventura acaba en silencio acuático.",
    image: "img/bosqueencantado_corriente.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Terror MANSION EMBRUJADA
  ending_success_ritual: {
    type: "success",
    title: "¡Exorcismo Exitoso!",
    text: "Realizaste el ritual y los espíritus están en paz. La mansión finalmente descansa. Sales al amanecer, sintiendo un peso menos en el mundo.",
    image: "img/mansionembrujada_exorcismo.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_success_mirror: {
    type: "success",
    title: "¡Maldición Rota!",
    text: "El espejo maldito se hace añicos. La oscuridad se disipa y eres libre. La mansión exhala su último suspiro fantasmal.",
    image: "img/mansionembrujada_maldicionrota.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },

  ending_escape_con_culpa: { 
  type: "neutral", 
  title: "Escape Amargo", 
  text: "Escapaste del castillo con vida, pero a un precio. Las pesadillas te visitan cada noche: los rostros del mago y la princesa te acusan. 'Cobarde', susurran. Tienes tu libertad, pero jamás volverás a dormir tranquilo. Algunas victorias tienen el sabor de la derrota.",
  image: "img/castillomaldito_escapeamargo.jpg",
  onlineImage: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=800&fit=crop"
},

  // Ciencia Ficción ESTACION ESPACIAL ABANDONADA
  ending_ciencia_exito: {
    type: "success",
    title: "Rumbo Seguro",
    text: "Estación estabilizada y bajo control. Alcanzas un puerto seguro. Tu ingenio te salvó del vacío infinito. Misión cumplida.",
    image: "img/estacionespacial_rumboseguro.jpg",
    onlineImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&fit=crop"
  },
  ending_ciencia_neutral: {
    type: "neutral",
    title: "Deriva Controlada",
    text: "Logras alejarte del peligro inmediato, pero la localización es incierta. Estás a la deriva, esperando rescate.",
    image: "img/estacionespacial_deribacontrolada.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_ciencia_fracaso: {
    type: "failure",
    title: "Sistema Fallido",
    text: "La navegación falla o la fuga te consume. Quedas a la deriva en el vacío infinito del espacio. Las estrellas son testigos silenciosas.",
    image: "img/estacionespacial_sistemafallido.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Misterio Archivo Perdido
  ending_misterio_exito: {
    type: "success",
    title: "Verdad Revelada",
    text: "Has entregado el Archivo Perdido a las autoridades. La verdad sale a la luz y la justicia prevalece. Tu nombre quedará en los anales de la investigación.",
    image: "img/archivoperdido_verdadrevelada.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&fit=crop"
  },
  ending_misterio_neutral: {
    type: "neutral",
    title: "Secreto Guardado",
    text: "Decides mantener el secreto. Algunas verdades son demasiado peligrosas. El archivo permanece oculto, y tú con su peso.",
    image: "img/archivoperdido_secretoguardado.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_misterio_destruir: {
    type: "success",
    title: "Sacrificio por la Paz",
    text: "Destruyes el archivo para proteger a inocentes. A veces la verdad debe sacrificarse por la paz. Duermes mejor sabiendo que preveniste caos.",
    image: "img/archivoperdido_sacrificiopaz.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&fit=crop"
  },
  ending_misterio_incompleto: {
    type: "failure",
    title: "Misterio Incompleto",
    text: "Solo encontraste partes del archivo. El misterio permanece, y otros seguirán buscando. Tu búsqueda termina en punto muerto.",
    image: "img/archivoperdido_misterioincompleto.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_misterio_fracaso: {
    type: "failure",
    title: "Silenciado",
    text: "Aquellos que buscaban el archivo te silenciaron. La verdad queda enterrada contigo. Otro misterio sin resolver.",
    image: "img/archivoperdido_silenciado.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
ending_misterio_exito: {
  text: "La verdad se revela al mundo. Gobiernos caen, juicios comienzan. Tu nombre queda marcado en la historia.",
  choices: []
},

ending_misterio_neutral: {
  text: "El archivo se conoce parcialmente. Rumores, dudas y verdades mezcladas. El misterio nunca se resuelve del todo.",
  choices: []
},

ending_misterio_destruir: {
  text: "Destruyes el archivo. Nadie sabrá jamás la verdad completa. El silencio se impone sobre la historia.",
  choices: []
},

ending_misterio_fracaso: {
  text: "Tus pruebas son rechazadas. Los jueces dictan que todo es falso. El archivo se pierde en la burocracia.",
  choices: []
},

  // Aventura Isla del tesoro
  ending_aventura_exito: {
    type: "success",
    title: "Rico y Famoso",
    text: "Encuentras el tesoro y te vuelves legendario. Riqueza y fama te esperan, pero también nuevos peligros. La aventura continúa.",
    image: "img/isladeltesoro_ricoyfamoso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop"
  },
  ending_aventura_sabio: {
    type: "success",
    title: "Sabiduría del Tesoro",
    text: "Tomas solo lo necesario. La verdadera riqueza es la experiencia ganada. Vives para contar la leyenda.",
    image: "img/isladeltesoro_sabiduriadeltesoro.jpg",
    onlineImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop"
  },
  ending_aventura_neutral: {
    type: "neutral",
    title: "Tesoro Enterrado",
    text: "Decides dejar el tesoro donde está. Algunos secretos deben permanecer ocultos. Escapas de la isla con solo tu historia.",
    image: "img/isladeltesoro_tesoroenterrado.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_aventura_escape: {
    type: "success",
    title: "Supervivencia",
    text: "Escapas de la isla con vida. Con o sin tesoro, sobreviviste a la aventura. El mar te devuelve a la civilización.",
    image: "img/isladeltesoro_supervivencia.jpg",
    onlineImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop"
  },
  ending_aventura_fracaso: {
    type: "failure",
    title: "Atrapado en la Isla",
    text: "Quedas atrapado en la isla. El tesoro se convierte en tu tumba. Solo los pájaros escuchan tu historia.",
    image: "img/isladeltesoro_atrapadoisla.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Cyberpunk Ciudad de Neon
  ending_cyberpunk_exito: {
    type: "success",
    title: "Justicia Cibernética",
    text: "Expones a Arasaka. Caen los corruptos y te conviertes en héroe de los ciudadanos. El sistema tiembla ante tu valentía.",
    image: "img/ciudadneon_justiciacibernetica.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_rico: {
    type: "success",
    title: "Rico y Anónimo",
    text: "Vendes los datos y desapareces con una fortuna. Vives en lujo pero siempre mirando por encima del hombro. El dinero tiene su precio.",
    image: "img/ciudadneon_ricoyanonimo.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_neutral: {
    type: "neutral",
    title: "Acuerdo Silencioso",
    text: "Negocias con Arasaka. Obtienes protección a cambio de silencio. Vives cómodamente pero sabiendo que vendiste parte de tu integridad.",
    image: "img/ciudadneon_acuerdosilencioso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_fracaso: {
    type: "failure",
    title: "Memoria Borrada",
    text: "Te capturan y borran tu memoria. Despiertas como un ciudadano común, sin recordar tu valentía o tus sueños.",
    image: "img/ciudadneon_memoriaborrada.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_traicion: {
    type: "failure",
    title: "Traición en el Neón",
    text: "Caíste en una trampa. Tu contacto te entregó. Pagas el precio de confiar en la ciudad de neón.",
    image: "img/ciudadneon_traicionneon.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Mitología Dioses Olvidados
  ending_mitologia_sabiduria: {
    type: "success",
    title: "Sabiduría Eterna",
    text: "Los dioses te otorgan sabiduría eterna. Ves el mundo con claridad divina pero la mortalidad se vuelve una carga pesada.",
    image: "img/diosesolvidados_sabiduriaeterna.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_poder: {
    type: "success",
    title: "Poder Elemental",
    text: "Controlas viento, agua y tierra. Tu poder es legendario pero la tentación de abusar de él siempre está presente.",
    image: "img/diosesolvidados_poderelemental.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_paz: {
    type: "success",
    title: "Descanso Eterno",
    text: "Los dioses descansan en paz gracias a ti. El templo se derrumba pero su legado perdura en tu corazón noble.",
    image: "img/diosesolvidados_descansoeterno.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_humilde: {
    type: "neutral",
    title: "Humildad Recompensada",
    text: "Rechazas el don y los dioses te respetan por ello. Te conceden una vida larga y significativa como mortal ejemplar.",
    image: "img/diosesolvidados_humildad.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_fracaso: {
    type: "failure",
    title: "Rechazado por los Dioses",
    text: "Fallaste las pruebas. Los dioses te expulsan del templo que permanece cerrado para siempre.",
    image: "img/diosesolvidados_rechzado.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Eco-Aventura Bosque protegido
  ending_ecoaventura_exito: {
    type: "success",
    title: "Bosque Protegido",
    text: "El bosque está a salvo. Tu valentía preserva el ecosistema para futuras generaciones. Los animales te agradecen en silencio.",
    image: "img/guardianesbosque_bosqueportegido.jpg",
    onlineImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop"
  },
  ending_ecoaventura_educacion: {
    type: "success",
    title: "Educación Ambiental",
    text: "Educas a la comunidad. El cambio comienza con conciencia. El bosque florece con nuevas esperanzas.",
    image: "img/guardianesbosque_eduacionambiental.jpg",
    onlineImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop"
  },
  ending_ecoaventura_recursos: {
    type: "success",
    title: "Recursos Asegurados",
    text: "Consigues más guardabosques y equipos. La protección del bosque se fortalece. Tu legado es un santuario natural.",
    image: "img/guardianesbosque_recursosasegurados.jpg",
    onlineImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop"
  },
  ending_ecoaventura_fracaso: {
    type: "failure",
    title: "Bosque Herido",
    text: "El daño es extenso. Aunque sobrevives, el bosque tarda en recuperarse. La lucha continúa otro día.",
    image: "img/guardianesbosque_bosqueherido.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_escape_con_culpa: {
    type: "neutral",
    title: "Escape Amargo",
    text: "Escapaste del castillo con vida, pero a un precio. Las pesadillas te visitan cada noche: los rostros del mago y la princesa te acusan. 'Cobarde', susurran. Tienes tu libertad, pero jamás volverás a dormir tranquilo. Algunas victorias tienen el sabor de la derrota.",
    image: "img/castillomaldito_escapeamargo.jpg",
    onlineImage: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=800&fit=crop"
  },


},

// Últimas historias subidas (las 6 más recientes)
latestStories : [
  catalog[0], // Medieval
  catalog[1], // Fantasía
  catalog[2], // Terror
  catalog[3], // Ciencia
  catalog[4], // Misterio
  catalog[5]  // Aventura
],

// Sistema de energía
energySystem :{
  maxEnergy: 100,
  currentEnergy: 50,

  // Modificadores según tipo de decisión
  modifiers: {
    positive: 15,    // Decisión acertada
    negative: -10,   // Decisión arriesgada
    neutral: 5       // Decisión segura
    }
}
};