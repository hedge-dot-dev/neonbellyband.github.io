// Neon Belly — small no-build-step touches.

// "Last updated" stamp. Fills every element with id="last-updated" or id="footer-updated" on the page.
(function () {
  var opts = { year: "numeric", month: "short", day: "numeric" };
  var stamp = new Date().toLocaleDateString(undefined, opts);
  ["last-updated", "footer-updated"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = stamp;
  });
})();

// ---------------------------------------------------------------
// Bilingual content.
//
// English stays as the source markup and default language. Spanish is
// applied on demand so the static pages do not need to be duplicated.
// ---------------------------------------------------------------
(function () {
  var K_LANG = "neonbelly-lang";
  var SPANISH = "es";

  var TEXT = {
    langToSpanish: "Español",
    langToEnglish: "English",
    switchToSpanish: "Ver el sitio en español",
    switchToEnglish: "Switch back to English",
    showToday: "HOY TOCAMOS",
    daysAway: function (days) { return "FALTAN " + days + " " + (days === 1 ? "DÍA" : "DÍAS"); },
    emptyShows: "Por ahora no hay fechas anunciadas",
    bookNow: "Contrátanos",
    themeLabel: "Cambiar el estilo visual del sitio",
    themeTitle: "Cambiar el look",
    themeNote: "Elige una portada.",
    close: "Cerrar",
    prevPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente"
  };

  var PAGES = {
    home: {
      title: "Neon Belly | Banda de covers alt-rock y grunge de los 90 y 2000",
      html: [
        [".tagline-main", '<span class="mixtape-band-callout">Tu Banda Rock Playlist</span><span class="tagline-support">tocando favoritas del público de</span>'],
        [".tagline-location", 'en Nashville y Franklin <span class="location-tail"><img class="tn-flag" src="images/optimized/tennessee-flag-96.png?v=1" width="96" height="58" alt="Tennessee" title="Tennessee"> y alrededores</span>']
      ],
      text: [
        [".stamp-row-plain:first-child", "himnos de"],
        [".genre-and", "y"],
        [".stamp-row-plain:last-child", "de los 90 y 2000"],
        [".follow-sticker", "Síguenos"],
        [".btn.book", "Contrátanos"],
        [".block-section:nth-of-type(1) .section-title", "Fechas"],
        [".block-section:nth-of-type(1) .section-sub", "Dónde vernos próximamente."],
        [".show-price", "¡Entrada gratis!"],
        [".show-date-text", "Sáb, 3 oct 2026 · 8:00 PM – 11:00 PM"],
        [".block-section:nth-of-type(2) .section-title", "La Banda"],
        [".block-section:nth-of-type(3) .section-title", "Del Blog"],
        [".block-section:nth-of-type(3) .section-sub", "Crónicas de shows y noticias de la banda."],
        [".post-teaser:nth-of-type(1) .post-teaser-date", "9 de agosto de 2026"],
        [".post-teaser:nth-of-type(1) .post-teaser-title", "Kimbro's, de punta a punta"],
        [".post-teaser:nth-of-type(1) .post-teaser-excerpt", "Hay lugares a los que entras y de una vez sientes que tienes que ganártelos. Kimbro's es uno de esos lugares."],
        [".post-teaser:nth-of-type(1) .post-teaser-more", "Lee la crónica »"],
        [".post-teaser:nth-of-type(2) .post-teaser-date", "12 de julio de 2026"],
        [".post-teaser:nth-of-type(2) .post-teaser-title", "Noche de debut en The Pond"],
        [".post-teaser:nth-of-type(2) .post-teaser-excerpt", "Toda banda tiene un solo primer show. El nuestro fue el 11 de julio en The Pond, y todavía nos sorprende cómo salió."],
        [".post-teaser:nth-of-type(2) .post-teaser-more", "Lee la crónica »"]
      ],
      htmlMore: [
        [".shows-secondary", '<a href="shows.html">&raquo; Ver todas las fechas, incluso las anteriores</a>'],
        [".block-section:nth-of-type(3) > p:last-child", '<a href="blog.html">&raquo; Lee todas las notas</a>']
      ]
    },
    fans: {
      title: "Neon Belly | Fans",
      titleText: [[".hero-title-sm", "Fans"]],
      text: [
        [".home-hero-copy .tagline", "Para quienes mantienen viva la música en vivo."],
        [".fan-kicker", "Para la gente que aparece"],
        [".fan-letter .section-title", "Gracias"],
        [".fan-letter p:nth-of-type(2)", "Todas las bandas dicen que aman al público, y probablemente todas lo dicen en serio. Pero para nosotros es difícil explicar lo que se siente cuando la gente decide regalar una parte de su noche a una sala con música en vivo. Podrías estar en cualquier otro lugar. Podrías estar en casa, pasando la pantalla, viendo algo, esperando que la semana por fin afloje. En cambio, entras a un bar, te paras cerca de los amplificadores y ayudas a que el cuarto cobre vida."],
        [".fan-letter p:nth-of-type(3)", "Eso importa. Nos importa a nosotros. Les importa a los locales que todavía abren espacio para guitarras fuertes y baterías reales. Les importa a los bartenders, a la gente de sonido, a los amigos que arrastran a otros amigos, y a cada persona que todavía cree que una canción pega distinto cuando está pasando a tres metros de ti."],
        [".fan-letter p:nth-of-type(4)", "Tocamos la música que vivía en tu carro, tu morral, tu primer apartamento, tus CDs quemados y esas carpetas que cuidabas como un tesoro. Las canciones que encontrabas en Napster o LimeWire, mal nombradas, bajando lento, ordenadas con paciencia, y que decidías que valían lo suficiente como para grabarlas en un disco. Después manejabas con ellas, ventanas abajo, sin mucho plan y sin mucha preocupación, solo con una lista de canciones que sentías tuyas."],
        [".fan-letter p:nth-of-type(5)", "Ese es el sentimiento que buscamos. No la nostalgia como disfraz, ni una copia perfecta de museo. Queremos agarrar la chispa de esas canciones favoritas: el primer riff que hace que todo el mundo levante la mirada, el coro que la sala ya se sabe, la parte pesada que todavía te baja los hombros y te mueve la cabeza antes de pensarlo."],
        [".fan-social-copy .section-title", "Redes Sociales, Por Qué Ayudan"],
        [".fan-social-copy p", "La música en vivo también se mueve por números. Cada follow, cada vez que compartes algo, cada comentario y cada video nos da algo real para mostrarle al próximo local: la gente está pendiente, y vale la pena abrir espacio para noches como esta."],
        [".fan-action:nth-of-type(1) .section-title", "Propinas"],
        [".fan-venmo-copy", "Si quieres aportar algo para ❤️, cuerdas, baquetas, equipo, glow sticks y la próxima noche ruidosa, esto va directo a la banda."],
        [".fan-venmo-link", "Apoya a Neon Belly en Venmo"],
        [".fan-action:nth-of-type(2) .section-title", "Merch"],
        [".fan-action:nth-of-type(2) .fan-disabled", "Camisas pronto"],
        [".fan-photos .section-title", "Desde La Sala"],
        [".fan-photos .section-sub", "Fotos de shows, amigos y noches que vale la pena recordar."]
      ],
      html: [
        [".fan-letter p:nth-of-type(6)", 'Así que si has aplaudido, gritado, cantado con nosotros, le has contado a un amigo, nos has seguido, publicado un video, pedido una canción, comprado una camisa, dejado una propina para la banda o simplemente te has quedado sonriendo mientras descubrimos en qué nos estamos convirtiendo... <span class="fan-closing"><span class="fan-thank-you">¡GRACIAS!</span> <span class="fan-closing-line">Tú no eres algo extra en esto; <span class="fan-sentence">¡<span class="fan-you">TÚ</span> eres la razón por la que tocamos <span class="fan-your">tus</span> canciones!</span></span></span>'],
        [".fan-merch-copy", 'Mandamos a hacer unas 40 franelas al principio, y ya se fueron. Estamos trabajando en un rediseño y vamos a imprimir más pronto. La idea es venderlas en $20, y nos ayuda saber qué tallas y modelos está buscando la gente. Escríbenos a <a href="mailto:neonbellyTN@gmail.com">neonbellyTN@gmail.com</a>; haremos lo posible por acomodarte y avisarte cuando lleguen. Si ya sabes que quieres una, puedes enviarnos por <a href="https://account.venmo.com/u/neonbelly_band" target="_blank" rel="noopener">Venmo</a> y dejar una nota con tu talla o estilo preferido. Y si te gustaría otro tipo de merch, también dinos. Las franelas son cool, pero tal vez tú tienes una mejor idea ;)']
      ]
    },
    shows: {
      title: "Neon Belly | Fechas",
      titleText: [[".hero-title-sm", "Fechas"]],
      text: [
        [".home-hero-copy .tagline", "Próximas fechas y lugares donde hemos tocado."],
        [".block-section:nth-of-type(1) .section-title", "Próximas Fechas"],
        [".show-price", "¡Entrada gratis!"],
        [".show-date-text", "Sáb, 3 oct 2026 · 8:00 PM – 11:00 PM"],
        [".block-section:nth-of-type(2) .section-title", "Fechas Anteriores"],
        [".block-section:nth-of-type(2) .section-sub", "Flyers de los shows que ya hicimos."],
        [".poster-card:nth-of-type(1) .show-venue", "En vivo en Kimbro's"],
        [".poster-card:nth-of-type(1) .show-date", "8 de agosto de 2026 · Franklin, TN"],
        [".poster-card:nth-of-type(1) .read-recap", "Lee la crónica »"],
        [".poster-card:nth-of-type(2) .show-venue", "En vivo en The Pond"],
        [".poster-card:nth-of-type(2) .show-date", "11 de julio de 2026 · Franklin, TN"],
        [".poster-card:nth-of-type(2) .read-recap", "Lee la crónica »"]
      ],
      html: [
        [".shows-secondary", '¿Quieres a Neon Belly en tu bar, local o evento privado? <a href="booking.html">Ver cómo contratarnos &raquo;</a>']
      ]
    },
    about: {
      title: "Neon Belly | La Banda",
      titleText: [[".hero-title-sm", "La Banda"]],
      text: [
        [".home-hero-copy .tagline", "Cinco personas de Franklin, Tennessee, y los discos que nos criaron."],
        [".block-section:nth-of-type(1) .section-title", "Quiénes Somos"],
        [".block-section:nth-of-type(1) p:nth-of-type(1)", "Neon Belly es una banda de cinco integrantes de Franklin, Tennessee. No venimos de los mismos lugares, ni de los mismos trabajos, ni siquiera del mismo rincón musical. Terminamos en la misma sala por una sola cosa que teníamos en común: el rock con el que crecimos."],
        [".block-section:nth-of-type(1) p:nth-of-type(2)", "Eso significa los 90 y los 2000. Grunge, alt rock, punk y todo lo más pesado que vino con eso. Las canciones que sonaban en la radio, en cada CD quemado y en cada viaje largo. Las tocamos con fuerza, bien apretadas y como si todavía importaran, porque para nosotros sí importan."],
        [".block-section:nth-of-type(1) p:nth-of-type(3)", "Los cinco estamos en la banda desde 2026. Es una banda joven, con una lista larga de canciones detrás, y apenas estamos arrancando."],
        [".block-section:nth-of-type(2) .section-title", "La Banda"],
        [".block-section:nth-of-type(2) .section-sub", "Toca cualquier perfil para conocerlo mejor."],
        [".block-section:nth-of-type(3) .section-title", "Lo Que Ofrecemos"],
        [".block-section:nth-of-type(3) p:nth-of-type(1)", "Un set armado con las canciones que la gente de verdad quiere escuchar, no rarezas que nadie conoce. Espera Nirvana, Sublime, Foo Fighters, Alice in Chains, Green Day, Weezer, Stone Temple Pilots, Megadeth, 3 Doors Down y bastante más. Hemos tocado desde sets de dos horas hasta noches de cuatro horas, y nos sentimos cómodos llenando una sala por el tiempo que haga falta."]
      ],
      html: [
        [".block-section:nth-of-type(3) p:nth-of-type(2)", '¿Quieres a Neon Belly en tu bar, local o evento privado? <a href="booking.html">Aquí está la información para contratarnos</a>.']
      ]
    },
    booking: {
      title: "Neon Belly | Contrataciones",
      titleText: [[".hero-title-sm", "Contrataciones"]],
      text: [
        [".home-hero-copy .tagline", "Bares, locales, fiestas privadas y eventos. Alt-rock y grunge de los 90/2000, en vivo."],
        [".col-side .section-title", "Hablemos"],
        [".col-side .btn.book", "Consultar fecha"],
        [".col-main .section-title", "Contrata a Neon Belly"],
        [".col-main p:nth-of-type(1)", "Neon Belly toca covers de alt-rock y grunge de los 90 y 2000. Riffs pesados, himnos para cantar y sets ajustados. Hemos tocado desde sets de 2 horas hasta noches de 4 horas, y normalmente nos movemos por Franklin y Brentwood, incluyendo Spring Hill, Thompson's Station, Cool Springs, Murfreesboro y Leiper's Fork."],
        [".infotable tr:nth-child(1) .label", "Base:"],
        [".infotable tr:nth-child(2) .label", "Integrantes:"],
        [".infotable tr:nth-child(2) td:nth-child(2)", "5 integrantes (voz, dos guitarras, bajo, batería)"],
        [".infotable tr:nth-child(3) .label", "Duración:"],
        [".infotable tr:nth-child(3) td:nth-child(2)", "Desde un set de 2 horas hasta una noche de 4 horas"],
        [".infotable tr:nth-child(4) .label", "Zona:"],
        [".infotable tr:nth-child(4) td:nth-child(2)", "Franklin y Brentwood, además de Spring Hill, Thompson's Station, Cool Springs, Murfreesboro y Leiper's Fork"],
        [".infotable tr:nth-child(5) .label", "Email:"]
      ]
    },
    blog: {
      title: "Neon Belly | Blog",
      text: [
        [".home-hero-copy .tagline", "Crónicas de shows, merch nuevo, canciones que entran al setlist y lo que vaya pasando."],
        ["#kimbros-2026-08-08 h2", "Kimbro's, de punta a punta"],
        ["#kimbros-2026-08-08 .blog-meta", "Publicado el 9 de agosto de 2026 por Neon Belly"],
        ["#kimbros-2026-08-08 p:nth-of-type(1)", "Hay lugares a los que entras y de una vez sientes que tienes que ganártelos. Kimbro's es uno de esos lugares, y para Hedge era más que eso: tocar en ese escenario fue un sueño muy concreto durante años, desde mucho antes de que Neon Belly existiera para hacerlo realidad."],
        ["#kimbros-2026-08-08 p:nth-of-type(2)", "Si has pasado tiempo en Franklin, ya conoces el Pickin' Parlor. Queda a dos cuadras de Main, en el viejo Antique District: parte tienda de barrio de antes, parte casa victoriana, abierto desde 2005. Una noche bluegrass, la siguiente honky tonk, luego blues. Mucha música ha pasado por ahí. Ver nuestro nombre en ese calendario significó algo para nosotros antes de conectar un solo cable."],
        ["#kimbros-2026-08-08 p:nth-of-type(3)", "Después el lugar se llenó. Hasta el fondo, y así se quedó."],
        ["#kimbros-2026-08-08 p:nth-of-type(4)", "Tocamos rock de los 90 y 2000 toda la noche, y el público cantó mucho más de lo que esperábamos. Hay un momento exacto en que una sala deja de ser gente que salió por casualidad y se convierte en gente que vino por esto. Lo sentimos caer en algún punto del segundo set. Después de eso, todo fluyó."],
        ["#kimbros-2026-08-08 p:nth-of-type(5)", "Gracias al equipo de Kimbro's por cuidarnos, y a todos los que se quedaron hasta la última canción y pidieron una más."],
        ["#kimbros-2026-08-08 figcaption:nth-of-type(1)", "Flyer del show"],
        ["#kimbros-2026-08-08 figure:nth-of-type(2) figcaption", "Segundo set"],
        ["#the-pond-2026-07-11 h2", "Noche de debut en The Pond"],
        ["#the-pond-2026-07-11 .blog-meta", "Publicado el 12 de julio de 2026 por Neon Belly"],
        ["#the-pond-2026-07-11 p:nth-of-type(1)", "Toda banda tiene un solo primer show. El nuestro fue el 11 de julio en The Pond, y todavía nos sorprende cómo salió."],
        ["#the-pond-2026-07-11 p:nth-of-type(2)", "The Pond ha sido el bar sin pretensiones de Franklin desde 2005. Techo bajo, más de mil manijas de grifo colgando sobre la cabeza y un público de habituales que te dice exactamente lo que piensa. Caben noventa personas. Vimos cómo se llenó, y cómo siguió llenándose, hasta que no quedaba dónde pararse."],
        ["#the-pond-2026-07-11 p:nth-of-type(3)", "Nadie en ese lugar nos había escuchado tocar ni una nota. Igual aparecieron. Eso no es poca cosa para una banda sin historia que mostrar."],
        ["#the-pond-2026-07-11 p:nth-of-type(4)", "Tres horas, para mayores de 21, y un set sacado directo de lo que nos crió. Nirvana, Sublime, Foo Fighters, Alice in Chains, Green Day, Weezer, Megadeth, Stone Temple Pilots, 3 Doors Down y bastante más. Algunas partes salieron afiladas. Otras se sostuvieron con cinta, nervio y ganas. Todo sonó duro, y no cambiaríamos ni un segundo."],
        ["#the-pond-2026-07-11 p:nth-of-type(5)", "Gracias a The Pond por darle una noche de sábado a una banda recién nacida, y a todos los que se arriesgaron por un nombre que nunca habían visto."],
        ["#the-pond-2026-07-11 figure:nth-of-type(1) figcaption", "Flyer del show"],
        ["#the-pond-2026-07-11 figure:nth-of-type(2) figcaption", "La banda completa, después del último tema"]
      ],
      html: [
        ["#kimbros-2026-08-08 .post-venue-link", 'Tocamos en <a href="https://www.legendarykimbros.com/" target="_blank" rel="noopener">The Legendary Kimbro\'s Pickin\' Parlor</a>, 214 S Margin St, Franklin TN &middot; <a href="https://www.instagram.com/legendarykimbros/" target="_blank" rel="noopener">@legendarykimbros</a>'],
        ["#the-pond-2026-07-11 .post-venue-link", 'Tocamos en <a href="https://thepondinfranklin.com/" target="_blank" rel="noopener">The Pond</a>, 595 Hillsboro Rd #321, Franklin TN &middot; <a href="https://www.instagram.com/pondinfranklin/" target="_blank" rel="noopener">@pondinfranklin</a>']
      ]
    },
    vocals: {
      title: "Hedge | Neon Belly",
      text: [
        [".home-hero-copy .tagline", "Voz Principal"],
        ["h3.section-title", "Covers Favoritos"],
        [".col-main .section-title", "Sobre Hedge"],
        [".col-main p:nth-of-type(1)", "De niño, a Hedge le daba tanto pánico hablar frente a la clase que simplemente se negaba. La música siempre estuvo cerca: su abuelo tocaba y cantaba todo el tiempo. Pero le tomó décadas y conocer a su esposa para encontrar la confianza de intentar karaoke."],
        [".col-main p:nth-of-type(2)", "Una noche, un grupo grande de amigos lo arrastró a un karaoke y lo presionó para que se lanzara. Nadie en ese lugar lo había escuchado cantar una nota. Aceptó con una condición: si tenían \"What I Got\" de Sublime, la cantaba. La tenían. Se aclaró la garganta, dio una presentación divertida mientras su esposa bailaba, y los aplausos del público fueron la primera probada de lo que se convertiría en una década cantando."],
        [".col-main figcaption", "Primera noche de karaoke, cantando \"What I Got\" de Sublime"],
        [".col-main p:nth-of-type(3)", "Le encanta salir de detrás de la pantalla, mostrarse vulnerable y tratar de conectar con la gente. Es adictivo. Esa misma fuerza hizo inolvidable su concierto favorito: un viaje de secundaria para ver a Bush, con Veruca Salt abriendo, convenciendo a uno de los papás de prestar la tarjeta para cuatro boletos de Ticketmaster y manejar dos horas, con todo el público cantando cada palabra."],
        [".col-main p:nth-of-type(4)", "Un segundo lugar muy cercano viene de la mezcla que trajo Bonnaroo. Kings of Leon y Stevie Wonder fueron épicos, y Jay-Z cerrando la noche justo después fue una experiencia de una vez en la vida, con una energía de público que él nunca va a olvidar."]
      ]
    },
    "guitar-lead": {
      title: "Jhonatan (Cucu) Aguilar | Neon Belly",
      text: [
        [".home-hero-copy .tagline", "Guitarra"],
        ["h3.section-title", "Covers Favoritos"],
        [".col-main .section-title", "Sobre Jhonatan"],
        [".col-main p:nth-of-type(1)", "Nacido y criado en Maracaibo, Venezuela, Jhonatan empezó su camino con la guitarra a los 11 años, encendido por los riffs de Guitar Hero y la electricidad cruda de Slash. Esa chispa prendió una llama que no ha parado de crecer en los diecisiete años desde entonces. En algún punto, Avenged Sevenfold le reordenó el ADN musical, y Synyster Gates se volvió una guía para su forma de tocar."],
        [".col-main p:nth-of-type(2)", "Para él, la música no es solo una pasión: es una parte viva de quien es. Aprecia todo el espectro del sonido, pero el corazón se le va hacia el metal, el hard rock y el metalcore, con esa fuerza pesada y sin filtro. Fuera del escenario, él lleva esa misma energía a todo: salir a la aventura, entrenar, viajar, tomarse una cerveza fría y compartir con su familia."],
        [".col-main p:nth-of-type(3)", "En tarima trae una energía brutal, imposible de esconder. Se alimenta del público; no hay nada que disfrute más que mirar a la gente, conectar con cada persona y asegurarse de que todos la estén pasando increíble. Le encanta socializar y rodearse de buena vibra, gente divertida y corazón genuino."],
        [".col-main p:nth-of-type(4)", "Entrar a Neon Belly se siente como llegar justo al lugar que estaba buscando. Subirse a tocar con sus hermanos, enchufar la guitarra y soltar el alma en cada riff es un sueño hecho realidad. Se siente profundamente agradecido, orgulloso y emocionado de darle todo a la gente, presentación tras presentación."]
      ]
    },
    "guitar-rhythm": {
      title: "Brett Holden | Neon Belly",
      text: [
        [".home-hero-copy .tagline", "Guitarra"],
        ["h3.section-title", "Covers Favoritos"],
        [".col-main .section-title", "Sobre Brett"],
        [".col-main p:nth-of-type(1)", "Brett creció rodeado de la música que muy rápido terminó tomando control de su vida. Desde Metallica hasta Michael Jackson, todo lo atrapó desde la primera vez que lo escuchó de niño. Agarró la guitarra a los 14 y empezó a sacar riffs de bandas que la mayoría de los muchachos de su edad ni conocía, con una necesidad de descubrir música nueva que nunca se le ha quitado."],
        [".col-main p:nth-of-type(2)", "Brett le mete cuerpo y actitud al sonido de las guitarras de Neon Belly de una forma que no se puede copiar. Casi siempre se recuesta en la sección rítmica, pero también tiene sus momentos de brillo con solos rápidos y llamativos. En vivo lo vas a ver sacudiendo la cabeza con todos los clásicos de rock."]
      ]
    },
    bass: {
      title: "Chris Lee | Neon Belly",
      text: [
        [".home-hero-copy .tagline", "Bajo"],
        ["h3.section-title", "Covers Favoritos"],
        [".col-main .section-title", "Sobre Chris"],
        [".col-main p:nth-of-type(1)", "Chris creció sobre una patineta y con una dieta constante de punk rock, y la música se fue poniendo más pesada mientras él crecía. Con el tiempo, ese impulso lo llevó a una banda hardcore, y luego el escenario quedó en silencio durante una larga etapa mientras la carrera y la familia tomaban el volante."],
        [".col-main p:nth-of-type(2)", "La música siempre fue una fuerza que lo movía, y ese llamado nunca se fue. Ahora volvió al frente tocando bajo con Neon Belly, sosteniendo la base grave de las canciones que creció gritando. Desde Weezer hasta Alice in Chains, disfruta más cuando el set se va hacia el lado pesado."]
      ]
    },
    drums: {
      title: "Nate | Neon Belly",
      text: [
        [".home-hero-copy .tagline", "Batería"],
        ["h3.section-title", "Covers Favoritos"],
        [".col-main .section-title", "Sobre Nate"],
        [".col-main p:nth-of-type(1)", "Movido por una energía de alto voltaje y un sentido profundo del groove, Nate es el pulso atronador detrás de Neon Belly. Sentado en la batería con treinta y cinco años de historia tocando, mezcla una energía en vivo fuerte y expresiva con un compromiso firme con una base apretada e inmovible. Criado con mucha percusión sinfónica en su juventud y afinado por años tocando en la escena musical de Nashville, Nate toma influencia de bestias como Dave Grohl, Chad Sexton y Zac Farro, trayendo el empuje crudo que hace falta para tocar himnos de Foo Fighters, Paramore, Toadies y más."],
        [".col-main figcaption", "Metido en el pocket, a mitad del set"],
        [".col-main p:nth-of-type(2)", "Fuera de la batería, Nate funciona como la brújula estratégica de Neon Belly. Usa su amplia experiencia en el circuito musical de Middle Tennessee para afinar el show en vivo, los setlists y la estrategia de locales de la banda. Para Nate no se trata solo de tocar las notas; se trata de entregar un show de rock pulido y de alto voltaje que deje cada sala vibrando mucho después del último golpe."]
      ]
    }
  };

  function readLang() {
    try { return localStorage.getItem(K_LANG) === SPANISH ? SPANISH : "en"; }
    catch (e) { return "en"; }
  }

  function writeLang(lang) {
    try { localStorage.setItem(K_LANG, lang); } catch (e) {}
  }

  function pageKey() {
    var path = window.location.pathname;
    var file = (path.split("/").pop() || "index.html").replace(".html", "");
    if (!file) file = "index";
    if (path.indexOf("/members/") !== -1) return file;
    return file === "index" ? "home" : file;
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = value;
    });
  }

  function setHtml(selector, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.innerHTML = value;
    });
  }

  function setTitleText(selector, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = value;
      el.setAttribute("data-text", value);
    });
  }

  function setAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.setAttribute(attr, value);
    });
  }

  function translateRoles() {
    var roles = { Vocals: "Voz", Guitar: "Guitarra", Bass: "Bajo", Drums: "Batería" };
    document.querySelectorAll(".member-role").forEach(function (el) {
      var translated = roles[el.textContent.trim()];
      if (translated) el.textContent = translated;
    });
  }

  function translateFooterStamp() {
    document.querySelectorAll("footer p").forEach(function (p) {
      Array.prototype.slice.call(p.childNodes).forEach(function (node) {
        if (node.nodeType === 3 && node.nodeValue.indexOf("Last updated:") !== -1) {
          node.nodeValue = node.nodeValue.replace("Last updated:", "Actualizado:");
        }
      });
    });
  }

  function updateButton(btn) {
    var spanish = readLang() === SPANISH;
    btn.textContent = spanish ? TEXT.langToEnglish : TEXT.langToSpanish;
    btn.setAttribute("aria-label", spanish ? TEXT.switchToEnglish : TEXT.switchToSpanish);
    btn.title = spanish ? TEXT.switchToEnglish : TEXT.switchToSpanish;
  }

  function applySpanish() {
    document.documentElement.lang = "es-VE";
    document.documentElement.setAttribute("data-lang", "es");

    setText('.main-nav a[href$="index.html"]', "Inicio");
    setText('.main-nav a[href$="shows.html"]', "Fechas");
    setText('.main-nav a[href$="fans.html"]', "Fans");
    setText('.main-nav a[href$="blog.html"]', "Blog");
    setText('.main-nav a[href$="about.html"]', "La Banda");
    setText('.main-nav a[href$="booking.html"]', "Contratar");
    setAttr(".nav-brand", "aria-label", "Inicio de Neon Belly");
    setAttr(".home-hero-photo", "alt", "Neon Belly tocando en vivo frente a una sala llena");
    setAttr(".home-hero-logo", "aria-label", "Logo de Neon Belly");
    setAttr(".band-photo-frame", "aria-label", "Neon Belly, la banda completa, en The Pond");
    setAttr(".band-photo", "alt", "Neon Belly, la banda completa, en The Pond");
    setText(".member-nav-label", "La Banda");
    setText(".theme-note", TEXT.themeNote);
    setAttr(".theme-toggle", "aria-label", TEXT.themeLabel);
    setAttr(".theme-toggle", "title", TEXT.themeTitle);
    translateRoles();
    translateFooterStamp();

    document.querySelectorAll(".show-countdown").forEach(function (badge) {
      var row = badge.closest(".show-row");
      var raw = row && row.getAttribute("data-show-date");
      var match = raw && raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (!match) return;
      var now = new Date();
      var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      var showDate = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
      var days = Math.round((showDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));
      badge.textContent = days === 0 ? TEXT.showToday : TEXT.daysAway(days);
    });

    var page = PAGES[pageKey()];
    if (!page) return;
    if (page.title) document.title = page.title;
    (page.titleText || []).forEach(function (pair) { setTitleText(pair[0], pair[1]); });
    (page.text || []).forEach(function (pair) { setText(pair[0], pair[1]); });
    (page.html || []).forEach(function (pair) { setHtml(pair[0], pair[1]); });
    (page.htmlMore || []).forEach(function (pair) { setHtml(pair[0], pair[1]); });

    setAttr(".lightbox-close", "aria-label", TEXT.close);
    setAttr(".lightbox-prev", "aria-label", TEXT.prevPhoto);
    setAttr(".lightbox-next", "aria-label", TEXT.nextPhoto);
  }

  function buildToggle() {
    var nav = document.querySelector(".nav-row .main-nav");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-toggle";
    updateButton(btn);
    btn.addEventListener("click", function () {
      var next = readLang() === SPANISH ? "en" : SPANISH;
      writeLang(next);
      if (next === "en") {
        window.location.reload();
        return;
      }
      updateButton(btn);
      applySpanish();
    });

    if (nav) nav.appendChild(btn);
    else document.body.appendChild(btn);
  }

  function text(key) {
    return readLang() === SPANISH && TEXT[key] ? TEXT[key] : null;
  }

  window.NB_LANG = {
    current: readLang,
    text: text,
    showDateText: function (raw, fallback) {
      if (readLang() !== SPANISH) return fallback;
      if (raw === "2026-10-03") return "Sáb, 3 oct 2026 · 8:00 PM – 11:00 PM";
      return fallback;
    },
    daysAway: function (days) {
      return readLang() === SPANISH ? TEXT.daysAway(days) : days + " " + (days === 1 ? "DAY" : "DAYS") + " AWAY";
    },
    showToday: function () {
      return readLang() === SPANISH ? TEXT.showToday : "SHOW TODAY";
    }
  };

  buildToggle();
  if (readLang() === SPANISH) applySpanish();
})();

// ---------------------------------------------------------------
// Real TV static in the hero.
//
// CSS noise (SVG turbulence) reads as soft blobs, not broadcast snow.
// Actual static is per-pixel random luminance, so we paint it: a small
// canvas (cheap) of pure random gray pixels, upscaled with pixelated
// rendering to keep the speckle crisp. Redrawn ~20fps and occasionally
// disturbed by a brighter horizontal roll band, like a detuned set.
// ---------------------------------------------------------------
(function () {
  var heroes = document.querySelectorAll(".hero");
  if (!heroes.length) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Still paint one frame so it isn't a dead flat panel, but don't animate.
    heroes.forEach(function (hero) { mount(hero, false); });
    return;
  }
  heroes.forEach(function (hero) { mount(hero, true); });

  function mount(hero, animate) {
    var canvas = document.createElement("canvas");
    canvas.className = "static-canvas";
    hero.insertBefore(canvas, hero.firstChild);
    hero.classList.add("static-on");

    // Scanline pass goes last in the DOM so it paints over the headline.
    var lines = document.createElement("div");
    lines.className = "crt-lines";
    hero.appendChild(lines);

    // Sigil sits behind the headline (both z-index 1, headline later in the
    // DOM), so the type reads over the shape.
    var sigilWrap = document.createElement("div");
    sigilWrap.className = "hero-sigil-wrap";
    sigilWrap.innerHTML = '<div class="hero-sigil"></div>';
    hero.insertBefore(sigilWrap, canvas.nextSibling);

    // Centre it on the wordmark rather than on the hero box: hero padding
    // differs per page, so a fixed offset leaves the triangle sitting low.
    function placeSigil() {
      var title = hero.querySelector(".hero-title");
      if (!title) return;
      var h = hero.getBoundingClientRect();
      var t = title.getBoundingClientRect();

      // Size to the hero and to the wordmark, whichever is tighter: the hero
      // clips overflow, so an oversized triangle loses its top bar.
      var size = Math.min(340, h.height - 26, Math.max(190, t.width * 1.35));
      if (size < 120) { sigilWrap.style.display = ""; return; }

      // Keep it centred on the wordmark, but pull it back inside the hero if
      // that would push the top edge out of frame.
      var centre = (t.top - h.top) + t.height / 2;
      var min = size / 2 + 10;
      var max = h.height - size / 2 - 10;
      if (max > min) centre = Math.min(Math.max(centre, min), max);

      sigilWrap.style.width = size + "px";
      sigilWrap.style.height = size + "px";
      sigilWrap.style.top = centre + "px";
    }
    placeSigil();
    window.addEventListener("resize", placeSigil);
    // fonts land after first paint and change the title box, so re-measure
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(placeSigil);
    }

    // Tube glow / corner falloff sits above everything.
    var glow = document.createElement("div");
    glow.className = "tv-glow";
    hero.appendChild(glow);

    var ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    var w, h, image, buf;
    var visible = true;
    var pageVisible = document.visibilityState !== "hidden";

    // The canvas is upscaled to fill the hero, so its internal resolution has
    // to track the hero's aspect ratio — a fixed-size buffer gets stretched
    // wider than tall and the snow smears into horizontal streaks.
    // PX is the on-screen size of one noise pixel. On phones, coarser snow
    // and a slower redraw preserve the effect without burning battery.
    function mobileHero() {
      return window.matchMedia && window.matchMedia("(max-width: 700px)").matches;
    }

    function pixelSize() {
      return mobileHero() ? 8 : 3;
    }

    function frameMs() {
      return mobileHero() ? 240 : 50;
    }

    function resize() {
      var rect = hero.getBoundingClientRect();
      var px = pixelSize();
      var nw = Math.max(8, Math.round(rect.width / px));
      var nh = Math.max(8, Math.round(rect.height / px));
      if (nw === w && nh === h) return;
      w = canvas.width = nw;
      h = canvas.height = nh;
      image = ctx.createImageData(w, h);
      buf = image.data;
    }

    resize();

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        frame();
      }, 150);
    });

    // Every pixel is independent. Correlating neighbours horizontally (run
    // lengths) or biasing whole rows both read as stretched horizontal
    // lines rather than snow, so neither is used here.
    function frame() {
      for (var i = 0, n = w * h; i < n; i++) {
        var v = (Math.random() * 255) | 0;
        var p = i << 2;
        buf[p] = v;
        buf[p + 1] = v;
        buf[p + 2] = v;
        // Sparse hot pixels carry the sparkle; the rest stay faint so the
        // snow reads as texture behind the type, not a curtain over it.
        buf[p + 3] = v > 215 ? 155 : 60;
      }
      ctx.putImageData(image, 0, 0);
    }

    frame();
    if (!animate || mobileHero()) return;

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        visible = !!(entries[0] && entries[0].isIntersecting);
      });
      observer.observe(hero);
    }

    document.addEventListener("visibilitychange", function () {
      pageVisible = document.visibilityState !== "hidden";
    });

    // Desktop runs ~20fps; phones run ~4fps with fewer pixels. Use a timer
    // instead of waking on every requestAnimationFrame; the canvas only wakes
    // when it is time to draw.
    (function loop() {
      window.setTimeout(function () {
        if (visible && pageVisible) {
          frame();
        }
        loop();
      }, frameMs());
    })();
  }
})();

// ---------------------------------------------------------------
// Next-show countdown.
//
// The first .show-row in each .shows-list is treated as the next show.
// Add data-show-date="YYYY-MM-DD" to that row and this drops a date badge
// into its .details text. Rows whose date has passed are removed from the
// list, so the next upcoming row (or the booking CTA) takes over.
// ---------------------------------------------------------------
(function () {
  var DAY = 24 * 60 * 60 * 1000;
  var lists = document.querySelectorAll(".shows-list");
  if (!lists.length) return;

  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  function daysUntil(row) {
    var raw = row.getAttribute("data-show-date");
    var match = raw && raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;
    var showDate = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    return Math.round((showDate.getTime() - today.getTime()) / DAY);
  }

  lists.forEach(function (list) {
    list.querySelectorAll(".show-row").forEach(function (r) {
      var d = daysUntil(r);
      if (d !== null && d < 0) r.remove();
    });

    var row = list.querySelector(".show-row");
    if (!row) return;

    var raw = row.getAttribute("data-show-date");
    var days = daysUntil(row);
    if (days === null) return;

    var details = row.querySelector(".details");
    if (!details || details.querySelector(".show-countdown")) return;

    var dateText = document.createElement("span");
    dateText.className = "show-date-text";
    while (details.firstChild) {
      dateText.appendChild(details.firstChild);
    }
    if (window.NB_LANG && window.NB_LANG.showDateText) {
      dateText.textContent = window.NB_LANG.showDateText(raw, dateText.textContent);
    }

    var badge = document.createElement("span");
    badge.className = "show-countdown";
    badge.textContent = days === 0
      ? (window.NB_LANG ? window.NB_LANG.showToday() : "SHOW TODAY")
      : (window.NB_LANG ? window.NB_LANG.daysAway(days) : days + " " + (days === 1 ? "DAY" : "DAYS") + " AWAY");
    details.appendChild(badge);
    details.appendChild(dateText);
  });
})();

// ---------------------------------------------------------------
// Empty shows list -> booking call to action.
//
// Any .shows-list[data-empty-cta] that holds no .show-row gets the CTA
// instead, so adding a real show is just pasting a .show-row into the
// container and the CTA disappears on its own. The secondary "see booking
// info" line is hidden while the CTA is up so the ask is not made twice.
// ---------------------------------------------------------------
(function () {
  var lists = document.querySelectorAll(".shows-list[data-empty-cta]");
  if (!lists.length) return;

  lists.forEach(function (list) {
    if (list.querySelector(".show-row")) return;

    var href = list.getAttribute("data-booking-href") || "booking.html";

    var box = document.createElement("div");
    box.className = "shows-empty";
    box.innerHTML =
      '<span class="shows-empty-head">' + ((window.NB_LANG && window.NB_LANG.text("emptyShows")) || "No shows on the books right now") + '</span>' +
      '<a class="btn book" href="' + href + '">' + ((window.NB_LANG && window.NB_LANG.text("bookNow")) || "Book Us Now") + '</a>';
    list.appendChild(box);

    var section = list.closest("section");
    if (section) {
      var secondary = section.querySelector(".shows-secondary");
      if (secondary) secondary.style.display = "none";
    }
  });
})();

// ---------------------------------------------------------------
// Sleeve switcher.
//
// A small record in the corner opens a grid of "sleeve" tiles. Each tile
// is an abstract composition built from its own theme's colours: a nod to
// the record the palette came from, never a reproduction of the artwork.
// Picking one sets the palette plus the display and title faces chosen to
// suit that cover, and the choice persists across pages and visits.
// ---------------------------------------------------------------
(function () {
  var K_THEME = "neonbelly-theme";
  var K_FONT  = "neonbelly-font";
  var K_TITLE = "neonbelly-title";
  var K_SESSION = "neonbelly-session-theme";
  var DEFAULT_ID = "utero";

  var SETS = [
    { id: "foo",            name: "Foo",           font: "oswald",      title: "yellowtail" },
    { id: "dirt",           name: "Dirt",          font: "stencilbold", title: "wetpaint" },
    { id: "core",           name: "Core",          font: "teko",        title: "archivo" },
    { id: "mellon",         name: "Mellon Collie", font: "josefin",     title: "yellowtail" },
    { id: "masterofreality", name: "Master of Reality", font: "teko",   title: "puddles" },
    { id: "badmotorfinger", name: "Badmotor",      font: "barlow",      title: "distressed" },
    { id: "utero",          name: "In Utero",      font: "typewriter",  title: "" },
    { id: "rustinpeace",    name: "Rust in Peace", font: "stencilbold", title: "burned" },
    { id: "evilempire",     name: "Evil Empire",   font: "barlow",      title: "spray" },
    { id: "poison",         name: "Open Up",       font: "teko",        title: "lacquer" },
    { id: "powerage",       name: "Powerage",      font: "stencilbold", title: "distressed" },
    { id: "gish",           name: "Gish",          font: "josefin",     title: "vinyl" }
  ];

  function attr(name, val) {
    if (val) document.documentElement.setAttribute(name, val);
    else document.documentElement.removeAttribute(name);
  }

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function sstore(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  function sread(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }

  function applySet(set) {
    attr("data-theme", set.id);
    attr("data-font", set.font);
    attr("data-title", set.title);
    store(K_THEME, set.id);
    store(K_FONT, set.font);
    store(K_TITLE, set.title);
  }

  // no chooser for the faces any more, so they always come from the set
  function find(id) {
    for (var i = 0; i < SETS.length; i++) {
      if (SETS[i].id === id) return SETS[i];
    }
    return null;
  }

  // An explicit pick (from the switcher) persists across visits via
  // localStorage. Absent that, a random sleeve is chosen once per browser
  // session (sessionStorage) so it stays put across pages but reshuffles
  // on the next fresh visit instead of always opening on In Utero.
  function randomSet() {
    return SETS[Math.floor(Math.random() * SETS.length)];
  }

  var current = find(read(K_THEME));
  if (!current) {
    current = find(sread(K_SESSION));
    if (!current) {
      current = randomSet();
      sstore(K_SESSION, current.id);
    }
  }
  current = current || find(DEFAULT_ID) || SETS[0];
  attr("data-theme", current.id);
  attr("data-font", current.font);
  attr("data-title", current.title);
  try { localStorage.removeItem("neonbelly-effect"); } catch (e) {}
  document.documentElement.removeAttribute("data-effect");

  function build() {
    var btn = document.createElement("button");
    btn.className = "theme-toggle";
    btn.setAttribute("aria-label", (window.NB_LANG && window.NB_LANG.text("themeLabel")) || "Change the site's colour scheme");
    btn.title = (window.NB_LANG && window.NB_LANG.text("themeTitle")) || "Change the look";
    
    var panel = document.createElement("div");
    panel.className = "theme-panel";
    panel.innerHTML = '<p class="theme-note">' + ((window.NB_LANG && window.NB_LANG.text("themeNote")) || "Pick a sleeve.") + '</p>';

    var grid = document.createElement("div");
    grid.className = "sleeve-grid";

    SETS.forEach(function (set) {
      var tile = document.createElement("button");
      tile.className = "sleeve sv-" + set.id + (set.id === current.id ? " active" : "");
      tile.title = set.name;
      tile.setAttribute("aria-label", set.name);
      tile.innerHTML = "<span>" + set.name + "</span>";
      tile.addEventListener("click", function () {
        applySet(set);
        grid.querySelectorAll(".sleeve").forEach(function (x) {
          x.classList.remove("active");
        });
        tile.classList.add("active");
      });
      grid.appendChild(tile);
    });

    panel.appendChild(grid);

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      panel.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (!panel.contains(e.target)) panel.classList.remove("open");
    });

    // sit it in the nav alongside the other items; fall back to the corner
    // if a page ever lacks the nav
    var nav = document.querySelector(".nav-row .main-nav");
    if (nav) nav.appendChild(btn);
    else {
      btn.classList.add("theme-toggle-floating");
      document.body.appendChild(btn);
    }
    document.body.appendChild(panel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();

// ---------------------------------------------------------------
// EPK page renderer.
//
// Reads js/epk-data.js (only loaded on epk/index.html) and builds the
// video, artist-tag, highlight, photo, and download sections from it.
// Runs before the gallery lightbox module below so photos it inserts
// are already in the DOM when the lightbox scans for images.
// Adding a video/artist/highlight/photo/download later only means
// editing the EPK_DATA object — nothing here needs to change.
// ---------------------------------------------------------------
(function () {
  if (typeof EPK_DATA === "undefined") return;

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  // -- videos: click-to-load so no iframe (or its tracking/JS payload)
  // loads until a visitor asks for it. Every video renders the same
  // size in one row instead of one enlarged "featured" clip next to
  // smaller ones, so a 2-clip EPK doesn't end up visually mismatched. --
  function videoFacade(videoId, title) {
    var wrap = el("div", "video-embed");
    var thumb = el("button", "epk-video-facade");
    thumb.type = "button";
    thumb.style.backgroundImage = 'url("https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg")';
    thumb.setAttribute("aria-label", "Play video on YouTube: " + title);
    thumb.appendChild(el("span", "epk-video-facade-icon"));
    thumb.appendChild(el("span", "epk-video-facade-badge", "▶ YouTube"));
    thumb.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
      iframe.title = title;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      wrap.innerHTML = "";
      wrap.appendChild(iframe);
    }, { once: true });
    wrap.appendChild(thumb);
    return wrap;
  }

  var videoMount = document.getElementById("epk-videos");
  if (videoMount) {
    var vids = EPK_DATA.videos || [];
    if (vids.length) {
      vids.forEach(function (v) {
        var card = el("div", "epk-video-card");
        card.appendChild(videoFacade(v.id, v.title));
        card.appendChild(el("span", "epk-video-title", v.title));
        videoMount.appendChild(card);
      });
    } else {
      videoMount.appendChild(el("p", "epk-technical-note", "More live video coming soon."));
    }
  }

  // -- The Sound: artist tags --
  var tagMount = document.getElementById("epk-artist-tags");
  if (tagMount) {
    (EPK_DATA.artists || []).forEach(function (name) {
      tagMount.appendChild(el("span", "epk-tag", name));
    });
  }

  // -- Live highlights: featured ones (the most persuasive facts) get a
  // bigger callout above the plain grid, instead of every fact reading
  // at the same visual weight --
  var hlFeaturedMount = document.getElementById("epk-highlights-featured");
  var hlMount = document.getElementById("epk-highlights");
  if (hlFeaturedMount || hlMount) {
    (EPK_DATA.highlights || []).forEach(function (h) {
      if (h.featured && hlFeaturedMount) {
        var featured = el("div", "epk-highlight-featured-card");
        featured.appendChild(el("span", "epk-highlight-featured-value", h.value));
        featured.appendChild(el("span", "epk-highlight-featured-label", h.label));
        hlFeaturedMount.appendChild(featured);
      } else if (hlMount) {
        var card = el("div", "epk-highlight-card");
        card.appendChild(el("span", "epk-highlight-value", h.value));
        card.appendChild(el("span", "epk-highlight-label", h.label));
        hlMount.appendChild(card);
      }
    });
  }

  // -- Venue quotes --
  var quoteMount = document.getElementById("epk-quotes");
  if (quoteMount) {
    (EPK_DATA.quotes || []).forEach(function (q) {
      var fig = el("figure", "epk-quote");
      var bq = el("blockquote", "epk-quote-text");
      bq.textContent = "“" + q.text + "”";
      fig.appendChild(bq);
      var cap = el("figcaption", "epk-quote-source");
      if (q.href) {
        var a = document.createElement("a");
        a.href = q.href;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = q.source;
        cap.appendChild(a);
      } else {
        cap.textContent = q.source;
      }
      fig.appendChild(cap);
      quoteMount.appendChild(fig);
    });
  }

  // -- Live photos (same markup as the Fans page gallery, so the
  // existing lightbox picks these up with no extra selector needed) --
  var photoMount = document.getElementById("epk-photo-grid");
  if (photoMount) {
    (EPK_DATA.photos || []).forEach(function (p) {
      var card = el("a", "fan-photo-card");
      card.href = p.src;
      card.target = "_blank";
      card.rel = "noopener";
      var img = document.createElement("img");
      img.src = p.src;
      img.alt = p.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      card.appendChild(img);
      photoMount.appendChild(card);
    });
  }

  // -- One-page booking sheet (color / black & white, each with a
  // preview thumbnail so a promoter can pick before downloading) --
  var onesheetMount = document.getElementById("epk-onesheets");
  if (onesheetMount) {
    (EPK_DATA.onesheets || []).forEach(function (o) {
      var card = el("div", "epk-onesheet-card");
      var a = document.createElement("a");
      a.href = o.thumb;
      a.target = "_blank";
      a.rel = "noopener";
      a.className = "epk-onesheet-thumb";
      var img = document.createElement("img");
      img.src = o.thumb;
      img.alt = "Preview of the " + o.label + " one-page booking sheet";
      img.loading = "lazy";
      img.decoding = "async";
      a.appendChild(img);
      card.appendChild(a);

      var text = el("span", "epk-onesheet-meta");
      text.appendChild(el("span", "epk-download-label", o.label));
      text.appendChild(el("span", "epk-download-note", o.note));
      card.appendChild(text);

      var dl = document.createElement("a");
      dl.className = "btn";
      dl.href = o.href;
      dl.download = "";
      dl.textContent = "Download PDF";
      card.appendChild(dl);

      onesheetMount.appendChild(card);
    });
  }

  // -- Promotional downloads --
  var dlMount = document.getElementById("epk-downloads");
  if (dlMount) {
    (EPK_DATA.downloads || []).forEach(function (d) {
      var card = el("div", "epk-download-card" + (d.available ? "" : " fan-disabled"));
      var text = el("span");
      text.appendChild(el("span", "epk-download-label", d.label));
      text.appendChild(el("span", "epk-download-note", d.available ? d.note : "Coming soon"));
      card.appendChild(text);
      if (d.available) {
        var a = document.createElement("a");
        a.className = "btn";
        a.href = d.href;
        a.download = "";
        a.textContent = "Download";
        card.appendChild(a);
      } else {
        var disabled = el("span", "btn", "Coming Soon");
        disabled.setAttribute("aria-disabled", "true");
        card.appendChild(disabled);
      }
      dlMount.appendChild(card);
    });
  }

  // -- Technical / stage info --
  var techMount = document.getElementById("epk-technical");
  if (techMount) {
    var table = document.createElement("table");
    (EPK_DATA.technical || []).forEach(function (row) {
      var tr = document.createElement("tr");
      tr.appendChild(el("td", "label", row.label));
      tr.appendChild(el("td", "", row.value));
      table.appendChild(tr);
    });
    techMount.appendChild(table);
  }
})();

// ---------------------------------------------------------------
// Gallery lightbox.
//
// Every real photo inside a .post-gallery (posters and snapshots alike —
// the still-empty PHOTO placeholders aren't real <img> tags, so they're
// naturally skipped) opens full-size on click. The photos across the
// whole page are one flat, DOM-ordered list, so next/prev just walks that
// list: run off the end of one blog post's photos and > carries straight
// into the next post's. The title bar names whichever post the photo is
// from.
// ---------------------------------------------------------------
(function () {
  var imgs = Array.prototype.slice.call(document.querySelectorAll(".post-gallery img, .fan-photo-card img"));
  if (!imgs.length) return;

  function titleFor(img) {
    var post = img.closest("article.blog-post");
    if (post) {
      var h = post.querySelector("h2");
      if (h) return h.textContent.trim();
    }
    // page h1s carry .hero-title-sm uniquely; plain .hero-title also
    // matches the nav wordmark (and genre-tag stamps), which sits earlier
    // in the DOM and would otherwise win the title for every subpage.
    var pageTitle = document.querySelector(".hero-title-sm");
    if (pageTitle) return pageTitle.textContent.trim();
    var hero = document.querySelector(".hero-title");
    if (hero) return hero.textContent.trim();
    return document.title;
  }

  var items = imgs.map(function (img) {
    return { img: img, src: img.getAttribute("data-full-src") || img.currentSrc || img.src, alt: img.alt || "", title: titleFor(img) };
  });

  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="' + ((window.NB_LANG && window.NB_LANG.text("close")) || "Close") + '">&times;</button>' +
    '<button type="button" class="lightbox-prev" aria-label="' + ((window.NB_LANG && window.NB_LANG.text("prevPhoto")) || "Previous photo") + '">&lsaquo;</button>' +
    '<figure class="lightbox-figure">' +
      '<figcaption class="lightbox-title"></figcaption>' +
      '<img class="lightbox-img" alt="">' +
    "</figure>" +
    '<button type="button" class="lightbox-next" aria-label="' + ((window.NB_LANG && window.NB_LANG.text("nextPhoto")) || "Next photo") + '">&rsaquo;</button>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector(".lightbox-img");
  var titleEl = overlay.querySelector(".lightbox-title");
  var idx = 0;

  function show(i) {
    idx = (i + items.length) % items.length;
    var it = items[idx];
    imgEl.src = it.src;
    imgEl.alt = it.alt;
    titleEl.textContent = titleFor(it.img) || it.title;
  }

  function open(i) {
    show(i);
    overlay.classList.add("open");
    document.body.classList.add("lightbox-lock");
  }

  function close() {
    overlay.classList.remove("open");
    document.body.classList.remove("lightbox-lock");
    imgEl.src = "";
  }

  imgs.forEach(function (img, i) {
    img.addEventListener("click", function (e) {
      // fan photos are wrapped in <a href target="_blank"> (a plain-link
      // fallback for no-JS); the lightbox takes over the click instead
      var link = img.closest("a");
      if (link) e.preventDefault();
      open(i);
    });
  });

  overlay.querySelector(".lightbox-prev").addEventListener("click", function () { show(idx - 1); });
  overlay.querySelector(".lightbox-next").addEventListener("click", function () { show(idx + 1); });
  overlay.querySelector(".lightbox-close").addEventListener("click", close);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(idx - 1);
    else if (e.key === "ArrowRight") show(idx + 1);
  });
})();
