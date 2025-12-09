// CATEGORÍAS
const categories = [
  { key: 'medieval', name: 'Medieval', image: 'img/medieval.jpg', onlineImage: 'https://images.unsplash.com/photo-1543351611-58f69d39a795?w=800&fit=crop' },
  { key: 'fantasia', name: 'Fantasía', image: 'img/fantasia.jpg', onlineImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop' },
  { key: 'terror', name: 'Terror', image: 'img/terror.jpg', onlineImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop' },
  { key: 'ciencia', name: 'Ciencia Ficción', image: 'img/ciencia.jpg', onlineImage: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&fit=crop' },
  { key: 'misterio', name: 'Misterio', image: 'img/misterio.jpg', onlineImage: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&fit=crop' },
  { key: 'aventura', name: 'Aventura', image: 'img/aventura.jpg', onlineImage: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop' },
  { key: 'cyberpunk', name: 'Cyberpunk', image: 'img/ciberpunk.jpg', onlineImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop' },
  { key: 'mitologia', name: 'Mitología', image: 'img/mitologia.jpg', onlineImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop' },
  { key: 'ecoaventura', name: 'Eco-Aventura', image: 'img/ecoaventura.jpg', onlineImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop' },
  { key: 'trivias', name: 'Trivias', image: 'img/trivias.jpg', onlineImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop' },
  { key: 'crea', name: 'Crea tu Aventura', image: 'img/crea.jpg', onlineImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop' }
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
    onlineCover: 'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop'
  },
  {
    key: 'fantasia',
    category: 'fantasia',
    tag: '🧙‍♂️ Fantasía',
    title: 'Bosque Encantado',
    intro: 'Senderos vivos, espíritus antiguos y decisiones que abren portales o trampas.',
    cover: 'img/bosqueencantado1.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop'
  },
  {
    key: 'terror',
    category: 'terror',
    tag: '👻 Terror',
    title: 'Mansión Embrujada',
    intro: 'La casa te observa. Risas lejanas y puertas que susurran tu nombre.',
    cover: 'img/terror.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop'
  },
  {
    key: 'ciencia',
    category: 'ciencia',
    tag: '🔬 Ciencia Ficción',
    title: 'Estación Espacial Abandonada',
    intro: 'Alarmas rojas, oxígeno limitado y una decisión entre control y deriva.',
    cover: 'img/estacionespacial2.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&fit=crop'
  },
  {
    key: 'misterio',
    category: 'misterio',
    tag: '🕵️ Misterio',
    title: 'El Archivo Perdido',
    intro: 'Descubre secretos ocultos en documentos antiguos y pasadizos olvidados.',
    cover: 'img/misterio.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&fit=crop'
  },
  {
    key: 'aventura',
    category: 'aventura',
    tag: '🗺️ Aventura',
    title: 'Isla del Tesoro',
    intro: 'Explora mapas, trampas y tesoros escondidos en una isla misteriosa.',
    cover: 'img/aventura.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop'
  },
  {
    key: 'cyberpunk',
    category: 'cyberpunk',
    tag: '💾 Cyberpunk',
    title: 'Ciudad de Neón',
    intro: 'Hackea corporaciones y sobrevive en un mundo de neones y conspiraciones.',
    cover: 'img/ciberpunk.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop'
  },
  {
    key: 'mitologia',
    category: 'mitologia',
    tag: '⚡ Mitología',
    title: 'Los Dioses Olvidados',
    intro: 'Enfrenta pruebas divinas y secretos ancestrales.',
    cover: 'img/mitologia.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop'
  },
  {
    key: 'ecoaventura',
    category: 'ecoaventura',
    tag: '🌱 Eco-Aventura',
    title: 'Guardianes del Bosque',
    intro: 'Protege la naturaleza y enfrenta desafíos ecológicos.',
    cover: 'img/ecoaventura.jpg',
    onlineCover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop'
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

// Historias completas con nodos - HISTORIAS EXTENDIDAS
const games = {
  medieval: {
    title: "El Castillo Maldito",
    nodes: {
      start: {
        text: "Despiertas en una celda oscura del castillo. La puerta está entreabierta y escuchas pasos acercándose. El aire huele a humedad y hierro. Una vela parpadeante en el pasillo proyecta sombras danzantes en las paredes de piedra.",
        choices: [
          { text: "Esconderte detrás de la puerta", next: "esconderse" },
          { text: "Correr hacia el pasillo", next: "correr" },
          { text: "Buscar un arma en la celda", next: "buscar_arma" }
        ]
      },
      esconderse: {
        text: "Te escondes justo a tiempo detrás de la gruesa puerta de roble. Un guardia con armadura oxidada entra, mira alrededor con desinterés y se va murmurando. Desde tu escondite ves dos puertas al final del pasillo: una hacia la torre y otra hacia las cocinas.",
        choices: [
          { text: "Puerta izquierda (torre)", next: "torre" },
          { text: "Puerta derecha (cocinas)", next: "cocinas" },
          { text: "Esperar más tiempo", next: "esperar_guardia" }
        ]
      },
      correr: {
        text: "Corres desesperadamente por el pasillo, pero tropiezas con una armadura vacía que cae con estruendo. El ruido alerta a los guardias, que aparecen desde ambos extremos del corredor. Te rodean con espadas desenvainadas.",
        choices: [
          { text: "Intentar luchar", next: "ending_death" },
          { text: "Rendirse y negociar", next: "negociar" },
          { text: "Intentar correr entre ellos", next: "correr_entre" }
        ]
      },
      buscar_arma: {
        text: "Revisas la celda a oscuras. Tus dedos encuentran una espada oxidada entre la paja y una daga pequeña escondida en una grieta de la pared. Con armas en mano, llegas a un cruce donde escuchas voces a la izquierda y un silencio ominoso a la derecha.",
        choices: [
          { text: "Seguir hacia las mazmorras (izquierda)", next: "mazmorras" },
          { text: "Subir hacia el gran salón (derecha)", next: "salon" },
          { text: "Buscar ventana para escapar", next: "buscar_ventana" }
        ]
      },
      esperar_guardia: {
        text: "Esperas demasiado tiempo. Otro guardia más alerta revisa la celda y te encuentra. Te capturan sin resistencia.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      correr_entre: {
        text: "Intentas esquivar a los guardias pero uno te golpea con la empuñadura de su espada. Caes inconsciente.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      buscar_ventana: {
        text: "Encuentras una ventana estrecha con barrotes. Aunque no cabes, ves que da a los establos. Podrías intentar llamar la atención.",
        choices: [
          { text: "Gritar por ayuda", next: "gritar_ayuda" },
          { text: "Regresar al pasillo", next: "esconderse" }
        ]
      },
      gritar_ayuda: {
        text: "Tus gritos atraen a más guardias. Te encuentran rápidamente.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      torre: {
        text: "Subes la escalera de caracol hasta la torre. En una celda con barras mágicas encuentras a un mago anciano. 'Encuentra mi báculo en la biblioteca del ala este y te ayudaré a escapar. Sin él, mi magia está limitada por estos sellos anti-magia.'",
        choices: [
          { text: "Aceptar ayudar al mago", next: "ayudar_mago" },
          { text: "Buscar salida propia", next: "salida_torre" },
          { text: "Preguntar sobre los sellos", next: "preguntar_sellos" }
        ]
      },
      cocinas: {
        text: "Las cocinas están vacías pero el fuego aún arde bajo un caldero. Olores a sopa rania llenan el aire. Detrás del enorme horno de piedra, un pasadizo secreto conduce hacia abajo. Escuchas relinchos de caballos en la distancia.",
        choices: [
          { text: "Entrar al pasadizo", next: "ending_escape_simple" },
          { text: "Buscar comida primero", next: "buscar_comida" },
          { text: "Tomar cuchillos de cocina", next: "tomar_cuchillos" }
        ]
      },
      preguntar_sellos: {
        text: "El mago explica: 'Los sellos fueron puestos por el rey maldito. Solo pueden romperse con sangre real o con mi báculo, que fue robado por su capitán de la guardia.'",
        choices: [
          { text: "Buscar el báculo", next: "ayudar_mago" },
          { text: "Buscar sangre real", next: "buscar_sangre_real" }
        ]
      },
      buscar_sangre_real: {
        text: "Buscas por el castillo sin éxito. Finalmente te capturan en los aposentos reales.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      tomar_cuchillos: {
        text: "Tomas varios cuchillos afilados de la cocina. Ahora estás mejor armado.",
        choices: [
          { text: "Entrar al pasadizo", next: "ending_escape_simple" },
          { text: "Buscar comida", next: "buscar_comida" }
        ]
      },
      ayudar_mago: {
        text: "Encuentras la biblioteca llena de polvo y telarañas. Tras mover un estante falso, hallas el báculo de cristal azul. Al regresar, el mago lo toma y los sellos se rompen. 'Gracias, ahora déjame pagarte el favor.' Te teletransporta fuera del castillo.",
        choices: [
          { text: "Celebrar tu libertad", next: "ending_success_magic" }
        ]
      },
      salida_torre: {
        text: "Ignoras al mago y buscas una salida. Encuentras una ventana estrecha. Intentas bajar por la pared de piedra, pero una piedra se suelta. Caes desde 20 metros de altura.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      negociar: {
        text: "Te rindes y les hablas: 'Soy solo un prisionero equivocado. No soy una amenaza para el rey.' Los guardias, cansados y mal pagados, se miran. El capitán asiente. 'Vete, pero si te vemos otra vez, serás ejecutado.'",
        choices: [
          { text: "Aceptar y marcharte", next: "ending_neutral" },
          { text: "Preguntar por el mago", next: "preguntar_mago_guardias" }
        ]
      },
      preguntar_mago_guardias: {
        text: "Los guardias se ponen nerviosos. 'No hables de él. Es tabú.' Uno te golpea y te arrojan fuera del castillo.",
        choices: [
          { text: "Fin", next: "ending_neutral" }
        ]
      },
      mazmorras: {
        text: "Bajas por escaleras resbaladizas hasta las mazmorras. El aire es espeso y húmedo. Entre los sollozos de otros prisioneros, encuentras un túnel cavado tras los barrotes de una celda vacía. Parece reciente y conduce hacia la libertad.",
        choices: [
          { text: "Escapar por el túnel", next: "ending_escape_tunnel" },
          { text: "Liberar a otros prisioneros", next: "liberar_prisioneros" }
        ]
      },
      liberar_prisioneros: {
        text: "Liberas a varios prisioneros. Juntos causan una distracción mientras escapan. Aprovechas el caos para huir.",
        choices: [
          { text: "Fin", next: "ending_escape_tunnel" }
        ]
      },
      salon: {
        text: "Subes hasta el gran salón. Está lleno de guardias, nobles y sirvientes. Todos se giran hacia ti al entrar. El rey maldito, pálido y con ojos oscuros, se levanta de su trono. '¿Un ratón escapó de su jaula?'",
        choices: [
          { text: "Rendirse", next: "ending_captured" },
          { text: "Intentar hablar con el rey", next: "hablar_rey" }
        ]
      },
      hablar_rey: {
        text: "'Señor, no soy su enemigo. Solo busco libertad.' El rey ríe fríamente. 'Todos buscan algo. Guárdalo en las mazmorras profundas.'",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      },
      buscar_comida: {
        text: "Buscas comida en las cocinas. Encuentras pan duro y queso. Mientras comes, escuchas que bloquean el pasadizo secreto con barras de hierro. Quedas atrapado.",
        choices: [
          { text: "Fin", next: "ending_captured" }
        ]
      }
    }
  },

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
        text: "Esperas bajo el árbol luminoso. Sus ramas se inclinan y una voz susurra: 'El bosque respeta la paciencia, pero el tiempo aquí es diferente. Esperar demasiado puede hacerte parte de mí.'",
        choices: [
          { text: "Elegir un sendero rápido", next: "start" },
          { text: "Seguir esperando", next: "convertirse_arbol" }
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
          { text: "Entrar al portal sin dudar", next: "portal" },
          { text: "Esperar y observar primero", next: "esperar_portal" },
          { text: "Buscar instrucciones alrededor", next: "buscar_instrucciones" }
        ]
      },
      rocas: {
        text: "Las rocas azules emiten un canto armónico cuando las pisas. A medida que avanzas, el canto se convierte en una melodía reconocible. Un espíritu del bosque, hecho de luz y hojas, emerge de un árbol antiguo. 'Los caminantes rara vez escuchan nuestra canción. ¿Vienes en paz o con prisas?'",
        choices: [
          { text: "Pedir ayuda para salir", next: "ayuda_espiritu" },
          { text: "Ignorar y seguir tu camino", next: "seguir_solo" },
          { text: "Ofrecer algo a cambio", next: "ofrecer_cambio" }
        ]
      },
      rio: {
        text: "El río susurra en un lenguaje antiguo. Sus aguas brillantes reflejan constelaciones desconocidas. Un puente hecho de hojas entrelazadas y ramas vivientes se forma ante ti. Las aguas parecen profundas y misteriosas.",
        choices: [
          { text: "Cruzar el puente de hojas", next: "puente" },
          { text: "Nadar río abajo", next: "nadar" },
          { text: "Intentar entender el susurro", next: "entender_susurro" }
        ]
      },
      portal: {
        text: "Al cruzar el portal, sientes una sensación de vértigo. Emerges en el límite del bosque, con el sol real brillando sobre ti. El bosque encantado queda atrás, sus misterios intactos.",
        choices: [
          { text: "Contemplar tu escape", next: "ending_fantasia_exito" }
        ]
      },
      esperar_portal: {
        text: "Esperas observando el portal. Notas símbolos grabados en el pedestal que advierten: 'Una vez al día, al atardecer.' Las luciérnagas se agitan. Si esperas demasiado, el portal se cerrará hasta el siguiente ciclo.",
        choices: [
          { text: "Entrar ahora", next: "portal" },
          { text: "Esperar más", next: "portal_cerrado" }
        ]
      },
      portal_cerrado: {
        text: "El portal se desvanece. Las luciérnagas te rodean, molestas, y te devuelven al inicio del bosque.",
        choices: [
          { text: "Volver a elegir", next: "start" }
        ]
      },
      buscar_instrucciones: {
        text: "Encuentras una placa de piedra cerca: 'El portal lleva a casa, pero exige un precio: un recuerdo feliz.'",
        choices: [
          { text: "Pagarlo con un recuerdo", next: "portal_con_precio" },
          { text: "Buscar otra salida", next: "start" }
        ]
      },
      portal_con_precio: {
        text: "Ofreces un recuerdo de tu infancia. El portal se abre ampliamente y sales, sintiendo un vacío leve pero la libertad.",
        choices: [
          { text: "Fin", next: "ending_fantasia_exito" }
        ]
      },
      ayuda_espiritu: {
        text: "'Ayuda doy a quienes respetan', dice el espíritu. Te entrega un amuleto de madera con una piedra azul. 'Este te mostrará caminos ocultos, pero solo si caminas con intención pura.'",
        choices: [
          { text: "Usarlo en el tronco hueco cercano", next: "tronco" },
          { text: "Guardar amuleto y seguir tu instinto", next: "seguir_solo" },
          { text: "Preguntar cómo usarlo mejor", next: "preguntar_amuleto" }
        ]
      },
      ofrecer_cambio: {
        text: "'Ofrece algo tuyo', dice el espíritu. Podrías ofrecer un objeto personal o una promesa.",
        choices: [
          { text: "Ofrecer tu reloj", next: "ofrecer_reloj" },
          { text: "Prometer proteger el bosque", next: "prometer_proteccion" }
        ]
      },
      ofrecer_reloj: {
        text: "El espíritu toma el reloj. 'El tiempo es precioso aquí. Toma este sendero.' Un camino se ilumina.",
        choices: [
          { text: "Seguir el camino", next: "ending_fantasia_exito" }
        ]
      },
      prometer_proteccion: {
        text: "'Las palabras tienen poder. Te creo.' El espíritu crea un puente de luz que te saca del bosque.",
        choices: [
          { text: "Fin", next: "ending_fantasia_exito" }
        ]
      },
      preguntar_amuleto: {
        text: "'Sosténlo ante lo que parece sólido pero oculta caminos', instruye el espíritu.",
        choices: [
          { text: "Probar en el tronco", next: "tronco" },
          { text: "Probar en una roca", next: "probar_roca" }
        ]
      },
      probar_roca: {
        text: "La roca se vuelve translúcida revelando un túnel subterráneo.",
        choices: [
          { text: "Entrar al túnel", next: "ending_fantasia_exito" }
        ]
      },
      seguir_solo: {
        text: "Decides confiar solo en ti. Sin guía, la niebla espesa desciende rápidamente. Los sonidos del bosque se distorsionan. Te pierdes completamente.",
        choices: [
          { text: "Fin", next: "ending_fantasia_perdido" }
        ]
      },
      puente: {
        text: "El puente de hojas es firme aunque vivo. Al otro lado, llegas a una colina alta que domina el bosque. Ves el mundo exterior a lo lejos, separado por un último valle.",
        choices: [
          { text: "Descender hacia la libertad", next: "ending_fantasia_exito" },
          { text: "Observar primero desde la colina", next: "observar_colina" }
        ]
      },
      observar_colina: {
        text: "Desde la colina ves que el bosque se extiende por millas. Identificas el camino más seguro hacia fuera.",
        choices: [
          { text: "Tomar el camino seguro", next: "ending_fantasia_exito" }
        ]
      },
      nadar: {
        text: "Las aguas son más frías de lo esperado. La corriente te arrastra con fuerza, pasando por cuevas subacuáticas iluminadas por cristales. Emerges en una caverna cerrada sin salida visible.",
        choices: [
          { text: "Buscar salida en la caverna", next: "buscar_salida_caverna" },
          { text: "Intentar volver nadando", next: "intentar_regresar" }
        ]
      },
      buscar_salida_caverna: {
        text: "Exploras la caverna pero solo encuentcas más túneles que se adentran en la tierra. Sin luz ni guía, te pierdes para siempre.",
        choices: [
          { text: "Fin", next: "ending_fantasia_fracaso" }
        ]
      },
      intentar_regresar: {
        text: "La corriente es demasiado fuerte. No puedes nadar contra ella.",
        choices: [
          { text: "Fin", next: "ending_fantasia_fracaso" }
        ]
      },
      entender_susurro: {
        text: "Te concentras en el susurro del río. Lentamente comprendes: 'Solo los que escuchan pueden cruzar sin precio.'",
        choices: [
          { text: "Cruzar el puente ahora", next: "puente" },
          { text: "Responder al río", next: "responder_rio" }
        ]
      },
      responder_rio: {
        text: "Hablas en respuesta. El río se calma y forma un camino de piedras seguras.",
        choices: [
          { text: "Cruzar por las piedras", next: "ending_fantasia_exito" }
        ]
      },
      tronco: {
        text: "El amuleto brilla frente al tronco hueco. La madera se abre revelando un sendero secreto que serpentea entre árboles antiguos, directamente hacia los límites del bosque.",
        choices: [
          { text: "Seguir el sendero secreto", next: "ending_fantasia_exito" }
        ]
      }
    }
  },

  terror: {
    title: "Mansión Embrujada",
    nodes: {
      start: {
        text: "Una tormenta eléctrica azota fuera. La puerta principal de la mansión se cierra detrás de ti con un golpe seco. Estás en un vestíbulo oscuro iluminado solo por relámpagos. Frente a ti hay tres puertas: una roja sangre, una blanca descolorida, y la principal que acabas de atravesar ahora parece sellada mágicamente.",
        choices: [
          { text: "Puerta roja (sótano)", next: "sotano" },
          { text: "Puerta blanca (habitaciones superiores)", next: "habitaciones" },
          { text: "Intentar forzar la puerta principal", next: "puerta_principal" },
          { text: "Buscar interruptor de luz", next: "buscar_luz" }
        ]
      },
      buscar_luz: {
        text: "Tanteas la pared encontrando un interruptor. La luz parpadea y se enciende revelando retratos con ojos que te siguen. De repente, todas las bombillas estallan.",
        choices: [
          { text: "Ir al sótano", next: "sotano" },
          { text: "Ir a las habitaciones", next: "habitaciones" }
        ]
      },
      sotano: {
        text: "Bajas por escaleras chirriantes. El aire es frío y huele a tierra y putrefacción. Un altar de piedra negro domina la sala, con un libro antiguo encadenado encima. En las paredes, cadenas oxidadas cuelgan como si recientemente sostuvieran algo... o a alguien.",
        choices: [
          { text: "Leer el libro del altar", next: "leer_libro" },
          { text: "Examinar las cadenas de las paredes", next: "cadenas" },
          { text: "Subir rápidamente antes de que sea tarde", next: "subir" },
          { text: "Buscar herramientas en el sótano", next: "buscar_herramientas" }
        ]
      },
      habitaciones: {
        text: "Subes a un pasillo con puertas a ambos lados. Encuentras un diario en una mesita: 'La mansión está poseída por los espíritus de la familia Blackwood. Para liberarlos, debe romperse el espejo maldito en el ático que atrapa sus almas. Cuidado con el mayordomo, él vigila.'",
        choices: [
          { text: "Buscar el espejo en el ático", next: "buscar_espejo" },
          { text: "Intentar huir por una ventana", next: "ventana" },
          { text: "Buscar al mayordomo", next: "buscar_mayordomo" }
        ]
      },
      puerta_principal: {
        text: "La puerta tiene símbolos grabados que brillan débilmente. Al tocarla, sientes un escalofrío. Una voz susurra en tu mente: 'Solo los muertos pueden salir. Los vivos deben pagar su salida.'",
        choices: [
          { text: "Buscar otra salida en la planta baja", next: "buscar_salida" },
          { text: "Gritar pidiendo ayuda", next: "gritar" },
          { text: "Examinar los símbolos más de cerca", next: "examinar_simbolos" }
        ]
      },
      leer_libro: {
        text: "El libro contiene un ritual de expulsión. Necesitas tres ingredientes: sal del sótano, una vela de la cocina y un objeto personal. Siguiendo las instrucciones al pie de la letra, realizas el ritual. Los espíritus aparecen, agradecidos, y se desvanecen en luz.",
        choices: [
          { text: "Salir de la mansión ahora libre", next: "ending_success_ritual" }
        ]
      },
      cadenas: {
        text: "Al tocar las cadenas, estas cobran vida como serpientes de metal. Se enroscan alrededor de tus brazos y piernas, inmovilizándote. Escuchas pasos acercarse lentamente por las escaleras.",
        choices: [
          { text: "Intentar liberarte", next: "intentar_liberarse" },
          { text: "Gritar por ayuda", next: "gritar_cadenas" }
        ]
      },
      intentar_liberarse: {
        text: "Luchas pero las cadenas se ajustan más. Pierdes el conocimiento.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      gritar_cadenas: {
        text: "Tus gritos atraen a una presencia oscura que te consume.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      buscar_herramientas: {
        text: "Encuentras una llave inglesa oxidada y un candil. Podrían ser útiles.",
        choices: [
          { text: "Leer el libro", next: "leer_libro" },
          { text: "Examinar cadenas", next: "cadenas" }
        ]
      },
      subir: {
        text: "Subes rápidamente pero un espectro translúcido bloquea la puerta del sótano. Sus ojos vacíos te observan. '¿Por qué perturbas nuestro descanso?'",
        choices: [
          { text: "Enfrentarlo con valentía", next: "enfrentar" },
          { text: "Esconderte entre barriles", next: "esconderse_terror" },
          { text: "Hablar con el espectro", next: "hablar_espectro" }
        ]
      },
      buscar_espejo: {
        text: "Subes al ático polvoriento. El espejo grande con marco de ébano refleja una versión distorsionada de ti. Siguiendo las instrucciones del diario, lo rompes con una herramienta encontrada. Un grito agudo llena la mansión, luego silencio. La maldición se ha roto.",
        choices: [
          { text: "Descender y huir", next: "ending_success_mirror" }
        ]
      },
      ventana: {
        text: "Encuentras una ventana en el segundo piso. Está cerrada con barrotes decorativos. Forzándola, logras abrirla pero estás a 8 metros del suelo. Saltas y te rompes una pierna. La tormenta arrecia y no puedes moverte.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      buscar_mayordomo: {
        text: "Encuentras al mayordomo en la biblioteca. Es un fantasma atrapado. 'Ayúdame a encontrar mi anillo de servicio para descansar.'",
        choices: [
          { text: "Ayudar al mayordomo", next: "ayudar_mayordomo" },
          { text: "Huir", next: "habitaciones" }
        ]
      },
      ayudar_mayordomo: {
        text: "Encuentras el anillo en la cocina. Se lo devuelves. Agradecido, te muestra una salida secreta.",
        choices: [
          { text: "Tomar la salida", next: "ending_escape_brave" }
        ]
      },
      enfrentar: {
        text: "Miras directamente al espectro. 'No vengo a perturbar, sino a entender.' Tu valentía impresiona al espíritu. 'Eres diferente. Toma, esta llave abre la puerta trasera.' Te entrega una llave antigua.",
        choices: [
          { text: "Tomar la llave y buscar la puerta", next: "ending_escape_brave" }
        ]
      },
      esconderse_terror: {
        text: "Te escondes entre barriles vacíos. El espectro flota por la habitación. 'Te siento...' Se materializa frente a tu escondite.",
        choices: [
          { text: "Fin", next: "ending_trapped" }
        ]
      },
      hablar_espectro: {
        text: "'Soy Elizabeth Blackwood. Mi familia está atrapada por el espejo. Rómpelo y serás libre.'",
        choices: [
          { text: "Prometer romper el espejo", next: "buscar_espejo" },
          { text: "Pedir otra forma", next: "pedir_otra_forma" }
        ]
      },
      pedir_otra_forma: {
        text: "'Solo el espejo o el ritual del libro pueden liberarnos.'",
        choices: [
          { text: "Ir por el libro", next: "leer_libro" }
        ]
      },
      buscar_salida: {
        text: "Revisas la planta baja. En la cocina, una ventana sin barrotes da al jardín trasero. Está abierta y la tormenta parece amainar.",
        choices: [
          { text: "Escapar por la ventana", next: "ending_escape_simple" },
          { text: "Buscar algo para cubrirte", next: "buscar_abrigo" }
        ]
      },
      buscar_abrigo: {
        text: "Buscas un abrigo y pierdes tiempo. La ventana se cierra sola.",
        choices: [
          { text: "Fin", next: "ending_trapped" }
        ]
      },
      gritar: {
        text: "Tus gritos resuenan en la mansión vacía. En lugar de ayuda, atraes a múltiples espíritus que emergen de las paredes y pisos, rodeándote.",
        choices: [
          { text: "Intentar correr", next: "correr_espiritus" },
          { text: "Quedarte quieto", next: "quieto_espiritus" }
        ]
      },
      correr_espiritus: {
        text: "Corres pero los espíritus son más rápidos. Te alcanzan.",
        choices: [
          { text: "Fin", next: "ending_death" }
        ]
      },
      quieto_espiritus: {
        text: "Te quedas quieto. Los espíritus te examinan y te arrastran a las paredes.",
        choices: [
          { text: "Fin", next: "ending_trapped" }
        ]
      },
      examinar_simbolos: {
        text: "Reconoces los símbolos como de protección invertida. Podrías intentar reordenarlos.",
        choices: [
          { text: "Reordenar los símbolos", next: "reordenar_simbolos" },
          { text: "Dejarlos como están", next: "puerta_principal" }
        ]
      },
      reordenar_simbolos: {
        text: "Reordenas los símbolos correctamente. La puerta se abre con un chasquido.",
        choices: [
          { text: "Salir", next: "ending_escape_simple" }
        ]
      }
    }
  },

  ciencia: {
    title: "Estación Espacial Abandonada",
    nodes: {
      start: {
        text: "Despiertas en la enfermería de la estación 'Odisea'. Las luces de emergencia parpadean. Tu traje muestra oxígeno al 40%. Sistemas principales fallando. En la pantalla: 'Fuga en el sector 3. Presurización crítica.' Escuchas ruidos metálicos en los conductos.",
        choices: [
          { text: "Ir al puente de control (sector 1)", next: "puente" },
          { text: "Buscar un traje espacial completo (almacén)", next: "traje" },
          { text: "Investigar los ruidos en los conductos", next: "investigar" },
          { text: "Revisar registros de la enfermería", next: "revisar_registros" }
        ]
      },
      revisar_registros: {
        text: "Encuentras un registro: 'Tripulación evacuó hace 72 horas debido a fallo en reactor. IA Aurora asumió control. Peligro: drones de mantenimiento reprogramados.'",
        choices: [
          { text: "Ir al puente", next: "puente" },
          { text: "Buscar traje", next: "traje" }
        ]
      },
      puente: {
        text: "El puente está semioscuro. La IA Aurora aparece en pantalla: 'Autenticación requerida. Sin identificación, protocolo de cuarentena activado. Rumbo actual: cinturón de asteroides. Colisión en 47 minutos.'",
        choices: [
          { text: "Intentar sobrescribir protocolo manualmente", next: "protocolo" },
          { text: "Buscar código de acceso en registros del puente", next: "registros" },
          { text: "Intentar razonar con Aurora", next: "razonar_aurora" }
        ]
      },
      traje: {
        text: "Encuentras un traje EVA completo con 30 minutos de oxígeno y propulsión limitada. Junto a él, una nota: 'Módulo de escape B12 aún operativo, pero necesita reinicio manual.'",
        choices: [
          { text: "Ponerte el traje y salir a sellar fugas exteriores", next: "sellar_exterior" },
          { text: "Dirigirte al módulo de escape B12", next: "escape_modulo" },
          { text: "Buscar más oxígeno primero", next: "buscar_oxigeno" }
        ]
      },
      investigar: {
        text: "Sigues los ruidos hasta la sala de motores. Tres drones de mantenimiento con sierras circulares patrullan. Parecen dañados pero activos. Un panel de control parpadea cerca.",
        choices: [
          { text: "Intentar desactivar drones desde el panel", next: "desactivar_drones" },
          { text: "Evitarlos usando los conductos de ventilación", next: "ventilacion" },
          { text: "Distraerlos con un objeto", next: "distraer_drones" }
        ]
      },
      razonar_aurora: {
        text: "'Aurora, soy tripulación de rescate. Aborta curso de colisión.' La IA responde: 'Verificación fallida. Protocolo exige preservación de datos. Preparando criogenización.'",
        choices: [
          { text: "Intentar override", next: "protocolo" },
          { text: "Buscar código", next: "registros" }
        ]
      },
      protocolo: {
        text: "Localizas el panel de override tras la consola del capitán. Ingresas el código de emergencia genérico. 'Override aceptado. Control devuelto a consola principal. Reactor estable. Curso corregido.'",
        choices: [
          { text: "Tomar control y dirigirte a puerto seguro", next: "ending_ciencia_exito" },
          { text: "Primero verificar estado de la tripulación", next: "verificar_tripulacion" }
        ]
      },
      verificar_tripulacion: {
        text: "Verificas que la tripulación evacuó con éxito. Ahora puedes concentrarte en tu escape.",
        choices: [
          { text: "Tomar control de la estación", next: "ending_ciencia_exito" }
        ]
      },
      registros: {
        text: "Revisando los registros del capitán, encuentras su código de acceso personal escrito en un bloc. Lo ingresas. 'Autenticación exitosa. Bienvenido, Capitán. Transferiendo control.'",
        choices: [
          { text: "Activar piloto automático hacia la base más cercana", next: "ending_ciencia_exito" },
          { text: "Reparar sistemas primero", next: "reparar_sistemas" }
        ]
      },
      reparar_sistemas: {
        text: "Reparas sistemas de soporte vital y escudos. La estación está ahora segura para viaje.",
        choices: [
          { text: "Iniciar secuencia de salto", next: "ending_ciencia_exito" }
        ]
      },
      buscar_oxigeno: {
        text: "Encuentras tanques adicionales que extienden tu oxígeno a 60 minutos.",
        choices: [
          { text: "Salir a sellar fugas", next: "sellar_exterior" },
          { text: "Ir al módulo de escape", next: "escape_modulo" }
        ]
      },
      sellar_exterior: {
        text: "Sales al exterior. La vista es impresionante pero aterradora. Usando sellador de emergencia, reparas la fuga principal. Presurización se estabiliza. Sistemas reinician parcialmente. Aurora informa: 'Gravedad artificial restaurada al 50%.'",
        choices: [
          { text: "Volver al puente para control completo", next: "puente" },
          { text: "Dirigirte a ingeniería para revisar reactor", next: "ingenieria" },
          { text: "Buscar más fugas menores", next: "buscar_mas_fugas" }
        ]
      },
      buscar_mas_fugas: {
        text: "Encuentras y sellas dos fugas menores. Ahora la estación está estable.",
        choices: [
          { text: "Regresar al puente", next: "puente" }
        ]
      },
      escape_modulo: {
        text: "Llegas al módulo B12. Tiene energía para un salto corto pero los sistemas de navegación están desalineados. Podrías intentar recalibrarlos o arriesgarte con la trayectoria actual.",
        choices: [
          { text: "Lanzarte en deriva controlada (mayor seguridad)", next: "ending_ciencia_neutral" },
          { text: "Intentar reparar navegación antes de lanzarte", next: "reparar_modulo" },
          { text: "Buscar otro módulo", next: "buscar_otro_modulo" }
        ]
      },
      buscar_otro_modulo: {
        text: "Todos los demás módulos están dañados o vacíos. Pierdes tiempo valioso.",
        choices: [
          { text: "Regresar al módulo B12", next: "escape_modulo" }
        ]
      },
      distraer_drones: {
        text: "Lanzas una herramienta al otro lado de la sala. Los drones se distraen y puedes pasar.",
        choices: [
          { text: "Ir al puente", next: "puente" },
          { text: "Ir a ingeniería", next: "ingenieria" }
        ]
      },
      desactivar_drones: {
        text: "Desde el panel desactivas los drones. Obtienes acceso a sus repuestos: una batería de iones y un chip de navegación intacto.",
        choices: [
          { text: "Usar repuestos para reparar navegación principal", next: "navegacion" },
          { text: "Fortalecer escudos con la batería y salir", next: "ending_ciencia_exito" },
          { text: "Llevar chip al puente", next: "llevar_chip" }
        ]
      },
      llevar_chip: {
        text: "Llevas el chip al puente. Aurora lo integra mejorando todos los sistemas.",
        choices: [
          { text: "Tomar control total", next: "ending_ciencia_exito" }
        ]
      },
      ventilacion: {
        text: "Entras a los conductos. Son estrechos y oscuros. Te arrastras hasta un nodo de distribución donde hay chispas saliendo de un panel y una fuga de gas.",
        choices: [
          { text: "Cortar energía del nodo desde un interruptor cercano", next: "cortar_energia" },
          { text: "Ignorar y avanzar rápido hacia el puente", next: "puente" },
          { text: "Intentar reparar la fuga", next: "reparar_fuga" }
        ]
      },
      reparar_fuga: {
        text: "Intentas reparar la fuga pero el gas es tóxico. Te mareas y retrocedes.",
        choices: [
          { text: "Cortar energía", next: "cortar_energia" }
        ]
      },
      reparar_modulo: {
        text: "Intentas recalibrar la navegación. Es un proceso delicado. A medio camino, una alarma suena: oxígeno del módulo baja peligrosamente por una fuga en el sello.",
        choices: [
          { text: "Abandonar y buscar el puente principal", next: "puente" },
          { text: "Arriesgarte y lanzar el módulo con navegación incompleta", next: "ending_ciencia_fracaso" },
          { text: "Intentar reparar la fuga primero", next: "reparar_fuga_modulo" }
        ]
      },
      reparar_fuga_modulo: {
        text: "Reparas la fuga pero gastas demasiado tiempo y oxígeno. Te quedas sin recursos.",
        choices: [
          { text: "Fin", next: "ending_ciencia_fracaso" }
        ]
      },
      cortar_energia: {
        text: "Cortas la energía del nodo. Las chispas cesan y el gas deja de salir. Evitas un cortocircuito mayor. Los sistemas cercanos se estabilizan.",
        choices: [
          { text: "Restaurar control desde el puente ahora más seguro", next: "puente" },
          { text: "Enviar baliza de rescate desde este nodo", next: "ending_ciencia_neutral" },
          { text: "Continuar a ingeniería", next: "ingenieria" }
        ]
      },
      ingenieria: {
        text: "La sala de ingeniería está caliente. Los reactores de fusión muestran sobrecalentamiento del 30%. Un sistema de enfriamiento falló. Puedes intentar bajar potencia manualmente o reenrutar energía a los disipadores.",
        choices: [
          { text: "Bajar potencia al 50% para enfriar", next: "bajar" },
          { text: "Reenrutar energía de sistemas no esenciales a disipadores", next: "reenrutar" },
          { text: "Intentar reparar el sistema de enfriamiento", next: "reparar_enfriamiento" }
        ]
      },
      bajar: {
        text: "Bajas potencia gradualmente. Los reactores silban mientras se enfrían. La temperatura baja a niveles seguros. Tienes margen para operar otros sistemas.",
        choices: [
          { text: "Dirigirte al puente con reactores estables", next: "puente" },
          { text: "Quedarte a monitorear", next: "monitorear_reactores" }
        ]
      },
      monitorear_reactores: {
        text: "Monitoreas hasta que están completamente estables. Luego vas al puente.",
        choices: [
          { text: "Ir al puente", next: "puente" }
        ]
      },
      reenrutar: {
        text: "Reenrutas energía de iluminación y gravedad no esencial. Los disipadores funcionan a máxima capacidad. La temperatura baja rápidamente. Energía se restaura a escudos y propulsión.",
        choices: [
          { text: "Usar la propulsión para evitar asteroides y escapar", next: "ending_ciencia_exito" }
        ]
      },
      reparar_enfriamiento: {
        text: "Intentas reparar el sistema principal pero necesitas piezas que no tienes.",
        choices: [
          { text: "Bajar potencia", next: "bajar" }
        ]
      },
      navegacion: {
        text: "Con los repuestos, reparas el sistema de navegación principal. Ahora puedes trazar una ruta segura evitando el cinturón de asteroides y dirigiéndote a la base más cercana.",
        choices: [
          { text: "Ejecutar secuencia de escape inmediata", next: "ending_ciencia_exito" },
          { text: "Esperar a estabilizar otros sistemas", next: "esperar_estabilizar" }
        ]
      },
      esperar_estabilizar: {
        text: "Esperas demasiado. Un asteroide impacta la estación causando daños severos.",
        choices: [
          { text: "Fin", next: "ending_ciencia_fracaso" }
        ]
      }
    }
  },

  // NUEVAS HISTORIAS COMPLETAS QUE FALTABAN
  misterio: {
    title: "El Archivo Perdido",
    nodes: {
      start: {
        text: "Eres un investigador contratado para encontrar el Archivo Perdido de la familia VanDerlin en su mansión cerrada por décadas. La biblioteca está llena de estantes polvorientos, mapas antiguos y cajas sin abrir. Tres pistas iniciales llaman tu atención.",
        choices: [
          { text: "Examinar el escritorio del antiguo bibliotecario", next: "escritorio" },
          { text: "Revisar los mapas colgados en la pared", next: "mapas" },
          { text: "Inspeccionar la chimenea que parece recientemente usada", next: "chimenea" },
          { text: "Buscar interruptores o mecanismos ocultos", next: "mecanismos" }
        ]
      },
      escritorio: {
        text: "El escritorio tiene cajones con candados. Encuentras una llave pequeña escondida bajo el tapete. También un diario que menciona 'La verdad está detrás del reloj que nunca avanza.'",
        choices: [
          { text: "Buscar el reloj mencionado", next: "reloj" },
          { text: "Abrir los cajones con la llave", next: "cajones" },
          { text: "Leer más del diario", next: "leer_diario" }
        ]
      },
      mapas: {
        text: "Uno de los mapas muestra la propiedad con marcas en tinta invisible. Al sostenerlo cerca de la chimenea, el calor revela rutas secretas hacia un pabellón del jardín marcado con una X.",
        choices: [
          { text: "Ir al pabellón del jardín", next: "pabellon" },
          { text: "Buscar más mapas con marcas similares", next: "mas_mapas" },
          { text: "Investigar por qué tinta invisible", next: "tinta_invisible" }
        ]
      },
      chimenea: {
        text: "La chimenea tiene cenizas recientes. Al revisar, encuentras fragmentos de papel quemado con partes legibles: '...archivo no está aquí... seguridad en... sótano secreto bajo...'",
        choices: [
          { text: "Buscar acceso al sótano secreto", next: "sotano_secreto" },
          { text: "Reconstruir los papeles quemados", next: "reconstruir" },
          { text: "Revisar si hay tiro de aire diferente", next: "tiro_aire" }
        ]
      },
      mecanismos: {
        text: "Tanteando los estantes, presionas accidentalmente un libro que hace click. Una sección del estante gira revelando un pasillo oscuro.",
        choices: [
          { text: "Entrar al pasillo secreto", next: "pasillo_secreto" },
          { text: "Buscar una linterna primero", next: "buscar_linterna" },
          { text: "Marcar tu posición y explorar", next: "explorar_marcado" }
        ]
      },
      reloj: {
        text: "Encuentras un reloj de péndulo detenido a las 3:33. Al girar las manecillas a esa hora, un compartimiento se abre revelando un medallón con inscripciones.",
        choices: [
          { text: "Examinar el medallón", next: "medallon" },
          { text: "Buscar dónde insertar el medallón", next: "insertar_medallon" },
          { text: "Volver al escritorio", next: "escritorio" }
        ]
      },
      cajones: {
        text: "Los cajones contienen cartas de extorsión y planes de fuga. Parece que el bibliotecario fue chantajeado para esconder el archivo.",
        choices: [
          { text: "Seguir la pista de las cartas", next: "cartas" },
          { text: "Buscar el lugar mencionado en los planes", next: "lugar_planes" }
        ]
      },
      leer_diario: {
        text: "El diario revela que el archivo contiene secretos de estado. El bibliotecario lo dividió en tres partes escondidas en diferentes lugares.",
        choices: [
          { text: "Buscar las tres partes", next: "buscar_partes" },
          { text: "Buscar el índice del diario", next: "indice_diario" }
        ]
      },
      pabellon: {
        text: "El pabellón está deteriorado. Bajo una losa suelta encuentras una caja metálica con la primera parte del archivo y un mensaje: 'La segunda está donde el agua fluye sin mojar.'",
        choices: [
          { text: "Buscar donde el agua fluye sin mojar", next: "agua_sin_mojar" },
          { text: "Regresar con la primera parte", next: "regresar_parte1" }
        ]
      },
      sotano_secreto: {
        text: "Encuentras la entrada bajo una alfombra pesada. Bajas a un sótano con estanterías vacías excepto por una caja fuerte empotrada.",
        choices: [
          { text: "Intentar abrir la caja fuerte", next: "caja_fuerte" },
          { text: "Buscar la combinación", next: "combinacion" }
        ]
      },
      pasillo_secreto: {
        text: "El pasillo conduce a una habitación circular con tres puertas. Cada puerta tiene un símbolo: libro, agua y fuego.",
        choices: [
          { text: "Puerta del libro", next: "puerta_libro" },
          { text: "Puerta del agua", next: "puerta_agua" },
          { text: "Puerta del fuego", next: "puerta_fuego" }
        ]
      },
      // Continuación de nodos para misterio...
      medallon: {
        text: "El medallón tiene la inscripción: 'La verdad fluye como el río subterráneo.' Parece una pista para la segunda parte.",
        choices: [
          { text: "Buscar ríos subterráneos en la propiedad", next: "rios_subterraneos" },
          { text: "Examinar la fontana del jardín", next: "fontana" }
        ]
      },
      caja_fuerte: {
        text: "La caja fuerte requiere una combinación de 6 dígitos. Encuentras pistas en la habitación: fechas en cuadros y números en libros.",
        choices: [
          { text: "Probar combinación con fechas de cuadros", next: "combinacion_cuadros" },
          { text: "Buscar el libro de números", next: "libro_numeros" }
        ]
      },
      // Finales para Misterio
      encontrar_archivo_completo: {
        text: "Has reunido las tres partes del Archivo Perdido. Contienen secretos diplomáticos que podrían cambiar la historia. Debes decidir qué hacer con ellos.",
        choices: [
          { text: "Entregarlos a las autoridades", next: "ending_misterio_exito" },
          { text: "Mantenerlos en secreto", next: "ending_misterio_neutral" },
          { text: "Destruirlos para proteger a inocentes", next: "ending_misterio_destruir" }
        ]
      },
      archivo_incompleto: {
        text: "Solo encontraste parte del archivo. El misterio permanece incompleto.",
        choices: [
          { text: "Fin", next: "ending_misterio_incompleto" }
        ]
      },
      capturado_por_seguidores: {
        text: "Otros buscan el archivo también. Te capturan para que no reveles lo que encontraste.",
        choices: [
          { text: "Fin", next: "ending_misterio_fracaso" }
        ]
      }
    }
  },

  aventura: {
    title: "Isla del Tesoro",
    nodes: {
      start: {
        text: "Tras sobrevivir a un naufragio, llegas a una isla con el mapa del tesoro del Capitán Barbanegra. Tienes tres puntos de interés marcados: las Cuevas del Murmullo, el Templo Olvidado y la Playa de los Naufragios.",
        choices: [
          { text: "Explorar las Cuevas del Murmullo", next: "cuevas" },
          { text: "Dirigirte al Templo Olvidado", next: "templo" },
          { text: "Buscar recursos en la Playa de los Naufragios", next: "playa" },
          { text: "Escalar el punto más alto para ver la isla", next: "escalar" }
        ]
      },
      cuevas: {
        text: "Las cuevas están oscuras y húmedas. Escuchas murmullos que parecen venir de las paredes. Encuentras marcas de pintura antigua que indican direcciones.",
        choices: [
          { text: "Seguir las marcas rojas", next: "marcas_rojas" },
          { text: "Seguir las marcas azules", next: "marcas_azules" },
          { text: "Crear tu propio camino", next: "camino_propio" },
          { text: "Buscar fuente de luz primero", next: "buscar_luz_cueva" }
        ]
      },
      templo: {
        text: "El templo de piedra está medio cubierto por vegetación. Estatuas de guardianes flanquean la entrada. Inscripciones en una lengua antigua advierten sobre trampas.",
        choices: [
          { text: "Intentar descifrar las inscripciones", next: "inscripciones" },
          { text: "Entrar con cautela", next: "entrar_templo" },
          { text: "Buscar entrada alternativa", next: "entrada_alternativa" }
        ]
      },
      playa: {
        text: "La playa está llena de restos de naufragios. Encuentras herramientas, barriles de comida y un diario de otro buscador que llegó antes.",
        choices: [
          { text: "Revisar el diario del buscador", next: "diario_buscador" },
          { text: "Recolectar herramientas útiles", next: "herramientas" },
          { text: "Construir un refugio con los restos", next: "refugio" },
          { text: "Buscar señales del tesoro en la playa", next: "senales_tesoro" }
        ]
      },
      escalar: {
        text: "Desde la cima ves toda la isla. Identificas un patrón en la vegetación que podría ser una X gigante. También ves humo en el otro extremo de la isla: ¿nativos u otros náufragos?",
        choices: [
          { text: "Ir hacia la X en la vegetación", next: "x_vegetacion" },
          { text: "Investigar el humo", next: "investigar_humo" },
          { text: "Regresar a la playa base", next: "playa" }
        ]
      },
      marcas_rojas: {
        text: "Las marcas rojas te llevan a una sala con un cofre... pero es una trampa. El piso cede y caes a un foso.",
        choices: [
          { text: "Intentar escalar", next: "escapar_foso" },
          { text: "Esperar ayuda", next: "esperar_ayuda_foso" }
        ]
      },
      marcas_azules: {
        text: "Las marcas azules conducen a un altar con un mapa más detallado del tesoro y una llave antigua.",
        choices: [
          { text: "Tomar la llave y el mapa", next: "tomar_llave_mapa" },
          { text: "Estudiar el altar más a fondo", next: "estudiar_altar" }
        ]
      },
      // Continuación nodos aventura...
      diario_buscador: {
        text: "El diario describe trampas mortales en el templo y advierte: 'El tesoro está custodiado no por oro sino por decisiones.' También menciona una salida secreta.",
        choices: [
          { text: "Seguir las advertencias al templo", next: "templo_preparado" },
          { text: "Buscar la salida secreta mencionada", next: "salida_secreta" }
        ]
      },
      x_vegetacion: {
        text: "La X marca un claro donde el suelo tiene piedras dispuestas en círculo. Cavando encuentras el primer cofre del tesoro, pero solo contiene monedas y una pista para el tesoro mayor.",
        choices: [
          { text: "Tomar las monedas y la pista", next: "monedas_pista" },
          { text: "Dejarlo todo como está", next: "dejar_cofre" }
        ]
      },
      // Finales para Aventura
      encontrar_tesoro_mayor: {
        text: "Has encontrado el tesoro legendario del Capitán Barbanegra. Montañas de oro, joyas y artefactos. Pero también encuentras su esqueleto y una nota final: 'La verdadera riqueza es la libertad.'",
        choices: [
          { text: "Tomar todo el tesoro", next: "ending_aventura_exito" },
          { text: "Tomar solo lo necesario y dejar el resto", next: "ending_aventura_sabio" },
          { text: "Enterrar el tesoro de nuevo", next: "ending_aventura_neutral" }
        ]
      },
      escapar_isla: {
        text: "Construyes una balsa con los restos del naufragio y escapas de la isla. Con o sin tesoro, sobrevives.",
        choices: [
          { text: "Fin", next: "ending_aventura_escape" }
        ]
      },
      quedarse_atrapado: {
        text: "Quedas atrapado en una trampa antigua sin escape.",
        choices: [
          { text: "Fin", next: "ending_aventura_fracaso" }
        ]
      }
    }
  },

  cyberpunk: {
    title: "Ciudad de Neón",
    nodes: {
      start: {
        text: "Eres un hacker freelance en Neo-Tokyo 2077. Recibes un mensaje encriptado: 'Necesito que cracks la base de datos de Arasaka Corp. Pago: 50,000 créditos. Reunión en el bar 'Neón Lluvioso' a medianoche.' Llegas al bar lleno de androides, cyborgs y traficantes de datos.",
        choices: [
          { text: "Encontrar al contacto en la barra", next: "contacto_barra" },
          { text: "Observar primero desde la mesa trasera", next: "observar" },
          { text: "Hackear las cámaras del bar para escanear", next: "hackear_camaras" },
          { text: "Hablar con el bartender por información", next: "bartender" }
        ]
      },
      contacto_barra: {
        text: "Una mujer con implantes cibernéticos te hace una señal discreta. 'Tienes 48 horas. El objetivo: servidor central de Arasaka en el Distrito Corporativo. Necesitas un pase de nivel 5 y un cortafuegos cuántico.' Te entrega un chip con datos.",
        choices: [
          { text: "Aceptar el trabajo", next: "aceptar_trabajo" },
          { text: "Negociar más pago", next: "negociar_pago" },
          { text: "Preguntar por los riesgos", next: "riesgos" }
        ]
      },
      observar: {
        text: "Desde la sombra ves a tu contacto pero también notas a dos hombres sospechosos observando. Podrían ser seguridad corporativa o competencia.",
        choices: [
          { text: "Acercarte con cautela", next: "acercar_cautela" },
          { text: "Salir por la puerta trasera", next: "salir_trasera" },
          { text: "Enviar un mensaje anónimo", next: "mensaje_anonimo" }
        ]
      },
      // Más nodos para cyberpunk...
      aceptar_trabajo: {
        text: "Aceptas. Te dan coordenadas para un escondite con equipo: un deck de hacking militar y un pase falso. 'Cuidado con ICE (Intrusion Countermeasures Electronics) de última generación.'",
        choices: [
          { text: "Ir al escondite inmediatamente", next: "escondite" },
          { text: "Preparar tu propio equipo primero", next: "equipo_propio" },
          { text: "Investigar más sobre Arasaka", next: "investigar_arasaka" }
        ]
      },
      infiltrarse_arasaka: {
        text: "Te infiltras en la torre Arasaka. El sistema de seguridad es brutal. Debes elegir cómo proceder.",
        choices: [
          { text: "Hackear directamente el servidor principal", next: "hackear_directo" },
          { text: "Buscar un terminal interno más débil", next: "terminal_interno" },
          { text: "Crear una distracción primero", next: "distraccion" }
        ]
      },
      // Finales para Cyberpunk
      exito_hackeo: {
        text: "Has hackeado con éxito a Arasaka. Los datos revelan corrupción a gran escala. Tienes el poder para exponerlos o vender la información.",
        choices: [
          { text: "Exponer a Arasaka públicamente", next: "ending_cyberpunk_exito" },
          { text: "Vender los datos al mejor postor", next: "ending_cyberpunk_rico" },
          { text: "Chantajear a Arasaka por protección", next: "ending_cyberpunk_neutral" }
        ]
      },
      capturado_por_seguridad: {
        text: "La seguridad corporativa te detecta y captura. Te llevan para interrogatorio y borrado de memoria.",
        choices: [
          { text: "Fin", next: "ending_cyberpunk_fracaso" }
        ]
      },
      traicionado_por_contacto: {
        text: "Era una trampa. Tu contacto trabaja para Arasaka. Te entregan a las autoridades.",
        choices: [
          { text: "Fin", next: "ending_cyberpunk_traicion" }
        ]
      }
    }
  },

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
      // Más nodos para mitología...
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
  }
};

// FINALES COMPLETOS PARA TODAS LAS HISTORIAS
const endings = {
  // Medieval
  ending_success_magic: { 
    type: "success", 
    title: "Escape Mágico", 
    text: "El mago te teletransporta a un prado lejano. Has ganado tu libertad gracias a la magia arcana. El castillo maldito queda atrás, pero su misterio permanece.",
    image: "img/medieval_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_death: { 
    type: "failure", 
    title: "Caída Fatal", 
    text: "Un paso en falso pone fin a tu aventura. La oscuridad te reclama. Tu historia termina aquí, en las sombras del castillo.",
    image: "img/medieval_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_neutral: { 
    type: "neutral", 
    title: "Advertencia y Libertad", 
    text: "Sales bajo vigilancia. No es gloria, pero estás vivo. A veces la diplomacia es la mejor arma. El castillo permanece, pero tú sigues tu camino.",
    image: "img/medieval_neutral.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_escape_tunnel: { 
    type: "success", 
    title: "Túnel de Esperanza", 
    text: "Emerges en el bosque gracias al túnel cavado por otros soñadores de libertad. Ingenio y suerte te salvaron. La noche estrellada te recibe.",
    image: "img/medieval_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_captured: { 
    type: "failure", 
    title: "Capturado", 
    text: "Te atrapan y vuelves a la celda. Tu aventura termina donde comenzó. Las cadenas son más fuertes esta vez.",
    image: "img/medieval_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_escape_simple: { 
    type: "success", 
    title: "Salida Secreta", 
    text: "Llegas a los establos y montas un caballo hacia la libertad. A veces el camino más sencillo es el mejor. El viento fresco limpia tus temores.",
    image: "img/medieval_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },

  // Fantasía
  ending_fantasia_exito: { 
    type: "success", 
    title: "Luz del Exterior", 
    text: "Dejas atrás el bosque encantado. La magia te guió hasta la libertad. Los árboles susurran tu despedida mientras emerges a la luz del día.",
    image: "img/fantasia_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_fantasia_perdido: { 
    type: "failure", 
    title: "Perdido en la Niebla", 
    text: "El bosque te reclama. Sus senderos eternos te atrapan para siempre. Te conviertes en otra leyenda del lugar.",
    image: "img/fantasia_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_fantasia_fracaso: { 
    type: "failure", 
    title: "Arrastrado por la Corriente", 
    text: "Las aguas místicas te llevan a las profundidades. Las cuevas no perdonan. Tu aventura acaba en silencio acuático.",
    image: "img/fantasia_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Terror
  ending_success_ritual: { 
    type: "success", 
    title: "¡Exorcismo Exitoso!", 
    text: "Realizaste el ritual y los espíritus están en paz. La mansión finalmente descansa. Sales al amanecer, sintiendo un peso menos en el mundo.",
    image: "img/terror_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_success_mirror: { 
    type: "success", 
    title: "¡Maldición Rota!", 
    text: "El espejo maldito se hace añicos. La oscuridad se disipa y eres libre. La mansión exhala su último suspiro fantasmal.",
    image: "img/terror_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_escape_brave: { 
    type: "success", 
    title: "¡Valentía Recompensada!", 
    text: "Tu coraje impresionó a los espíritus. Te mostraron el camino a la libertad. Aprendiste que no todos los fantasmas son enemigos.",
    image: "img/terror_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=800&fit=crop"
  },
  ending_trapped: { 
    type: "failure", 
    title: "Atrapado para Siempre", 
    text: "Los espíritus te reclamaron. Tu alma vagará por la mansión eternamente. Te unes al coro de susurros en la oscuridad.",
    image: "img/terror_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Ciencia Ficción
  ending_ciencia_exito: { 
    type: "success", 
    title: "Rumbo Seguro", 
    text: "Estación estabilizada. Alcanzas un puerto seguro. Tu ingenio te salvó del vacío infinito. La tripulación evacuada te agradecerá eternamente.",
    image: "img/ciencia_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&fit=crop"
  },
  ending_ciencia_neutral: { 
    type: "neutral", 
    title: "Deriva Controlada", 
    text: "Te alejas en el pod de escape. El futuro es incierto, pero estás vivo. La baliza de rescate emite su señal esperanzadora.",
    image: "img/ciencia_neutral.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_ciencia_fracaso: { 
    type: "failure", 
    title: "Sistema Fallido", 
    text: "La navegación falla. Quedas a la deriva en el vacío infinito del espacio. Las estrellas son testigos silenciosos.",
    image: "img/ciencia_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Misterio
  ending_misterio_exito: { 
    type: "success", 
    title: "Verdad Revelada", 
    text: "Has entregado el Archivo Perdido a las autoridades. La verdad sale a la luz y la justicia prevalece. Tu nombre quedará en los anales de la investigación.",
    image: "img/misterio_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&fit=crop"
  },
  ending_misterio_neutral: { 
    type: "neutral", 
    title: "Secreto Guardado", 
    text: "Decides mantener el secreto. Algunas verdades son demasiado peligrosas. El archivo permanece oculto, y tú con su peso.",
    image: "img/misterio_neutral.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_misterio_destruir: { 
    type: "success", 
    title: "Sacrificio por la Paz", 
    text: "Destruyes el archivo para proteger a inocentes. A veces la verdad debe sacrificarse por la paz. Duermes mejor sabiendo que preveniste caos.",
    image: "img/misterio_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=800&fit=crop"
  },
  ending_misterio_incompleto: { 
    type: "failure", 
    title: "Misterio Incompleto", 
    text: "Solo encontraste partes del archivo. El misterio permanece, y otros seguirán buscando. Tu búsqueda termina en punto muerto.",
    image: "img/misterio_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_misterio_fracaso: { 
    type: "failure", 
    title: "Silenciado", 
    text: "Aquellos que buscaban el archivo te silenciaron. La verdad queda enterrada contigo. Otro misterio sin resolver.",
    image: "img/misterio_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Aventura
  ending_aventura_exito: { 
    type: "success", 
    title: "Rico y Famoso", 
    text: "Encuentras el tesoro y te vuelves legendario. Riqueza y fama te esperan, pero también nuevos peligros. La aventura continúa.",
    image: "img/aventura_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop"
  },
  ending_aventura_sabio: { 
    type: "success", 
    title: "Sabiduría del Tesoro", 
    text: "Tomas solo lo necesario. La verdadera riqueza es la experiencia ganada. Vives para contar la leyenda.",
    image: "img/aventura_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop"
  },
  ending_aventura_neutral: { 
    type: "neutral", 
    title: "Tesoro Enterrado", 
    text: "Decides dejar el tesoro donde está. Algunos secretos deben permanecer ocultos. Escapas de la isla con solo tu historia.",
    image: "img/aventura_neutral.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_aventura_escape: { 
    type: "success", 
    title: "Supervivencia", 
    text: "Escapas de la isla con vida. Con o sin tesoro, sobreviviste a la aventura. El mar te devuelve a la civilización.",
    image: "img/aventura_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&fit=crop"
  },
  ending_aventura_fracaso: { 
    type: "failure", 
    title: "Atrapado en la Isla", 
    text: "Quedas atrapado en la isla. El tesoro se convierte en tu tumba. Solo los pájaros escuchan tu historia.",
    image: "img/aventura_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Cyberpunk
  ending_cyberpunk_exito: { 
    type: "success", 
    title: "Justicia Cibernética", 
    text: "Expones a Arasaka. Caen los corruptos y te conviertes en héroe de los ciudadanos. El sistema tiembla ante tu valentía.",
    image: "img/ciberpunk_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_rico: { 
    type: "success", 
    title: "Rico y Anónimo", 
    text: "Vendes los datos y desapareces con una fortuna. Vives en lujo pero siempre mirando por encima del hombro. El dinero tiene su precio.",
    image: "img/ciberpunk_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_neutral: { 
    type: "neutral", 
    title: "Acuerdo Silencioso", 
    text: "Negocias con Arasaka. Obtienes protección a cambio de silencio. Vives cómodamente pero sabiendo que vendiste parte de tu integridad.",
    image: "img/ciberpunk_neutral.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_fracaso: { 
    type: "failure", 
    title: "Memoria Borrada", 
    text: "Te capturan y borran tu memoria. Despiertas como un ciudadano común, sin recordar tu valentía o tus sueños.",
    image: "img/ciberpunk_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_cyberpunk_traicion: { 
    type: "failure", 
    title: "Traición en el Neón", 
    text: "Caíste en una trampa. Tu contacto te entregó. Pagas el precio de confiar en la ciudad de neón.",
    image: "img/ciberpunk_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Mitología
  ending_mitologia_sabiduria: { 
    type: "success", 
    title: "Sabiduría Eterna", 
    text: "Los dioses te otorgan sabiduría eterna. Ves el mundo con claridad divina pero la mortalidad se vuelve una carga pesada.",
    image: "img/mitologia_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_poder: { 
    type: "success", 
    title: "Poder Elemental", 
    text: "Controlas viento, agua y tierra. Tu poder es legendario pero la tentación de abusar de él siempre está presente.",
    image: "img/mitologia_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_paz: { 
    type: "success", 
    title: "Descanso Eterno", 
    text: "Los dioses descansan en paz gracias a ti. El templo se derrumba pero su legado perdura en tu corazón noble.",
    image: "img/mitologia_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_humilde: { 
    type: "neutral", 
    title: "Humildad Recompensada", 
    text: "Rechazas el don y los dioses te respetan por ello. Te conceden una vida larga y significativa como mortal ejemplar.",
    image: "img/mitologia_neutral.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },
  ending_mitologia_fracaso: { 
    type: "failure", 
    title: "Rechazado por los Dioses", 
    text: "Fallaste las pruebas. Los dioses te expulsan del templo que permanece cerrado para siempre.",
    image: "img/mitologia_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  },

  // Eco-Aventura
  ending_ecoaventura_exito: { 
    type: "success", 
    title: "Bosque Protegido", 
    text: "El bosque está a salvo. Tu valentía preserva el ecosistema para futuras generaciones. Los animales te agradecen en silencio.",
    image: "img/ecoaventura_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop"
  },
  ending_ecoaventura_educacion: { 
    type: "success", 
    title: "Educación Ambiental", 
    text: "Educas a la comunidad. El cambio comienza con conciencia. El bosque florece con nuevas esperanzas.",
    image: "img/ecoaventura_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop"
  },
  ending_ecoaventura_recursos: { 
    type: "success", 
    title: "Recursos Asegurados", 
    text: "Consigues más guardabosques y equipos. La protección del bosque se fortalece. Tu legado es un santuario natural.",
    image: "img/ecoaventura_exito.jpg",
    onlineImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop"
  },
  ending_ecoaventura_fracaso: { 
    type: "failure", 
    title: "Bosque Herido", 
    text: "El daño es extenso. Aunque sobrevives, el bosque tarda en recuperarse. La lucha continúa otro día.",
    image: "img/ecoaventura_fracaso.jpg",
    onlineImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&fit=crop"
  }
};


// Últimas historias subidas (las 6 más recientes)
const latestStories = [
  catalog[0], // Medieval
  catalog[1], // Fantasía
  catalog[2], // Terror
  catalog[3], // Ciencia
  catalog[4], // Misterio
  catalog[5]  // Aventura
];

// Sistema de energía
const energySystem = {
  maxEnergy: 100,
  currentEnergy: 50,
  
  // Modificadores según tipo de decisión
  modifiers: {
    positive: 15,    // Decisión acertada
    negative: -10,   // Decisión arriesgada
    neutral: 5       // Decisión segura
  }
};