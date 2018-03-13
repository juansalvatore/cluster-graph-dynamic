;(function() {
  d3.json(
    'https://rawgit.com/annaghi/d3.chart.layout.hierarchy/master/example/data/flare.json',
    function(error, json) {
      var cluster = d3
        .select('#vis')
        .append('svg')

        .chart('cluster.radial')

        //.diameter(500)
        .radius(function(d) {
          if (d.size) return Math.log(d.size)
          else return 3
        })
        .levelGap(220)
        .zoomable([0.1, 3])
        .collapsible(4)
        .duration(200)

      var groupOneColor = 'LightCoral'
      var groupTwoColor = 'LightBlue'
      var groupThreeColor = 'pink'
      var groupFourColor = 'yellow'
      var groupFiveColor = 'violet'
      var groupSixColor = 'Moccasin'
      var groupSevenColor = 'LightGreen'
      var groupEightColor = 'LightGrey'

      var colorA = '#8bd7f9'
      var colorB = '#c1adc9'
      var colorC = '#f99dd3'
      var colorD = '#d8c3bc'
      var colorE = '#fcc88d'
      var colorF = '#80cea4'
      var colorG = '#f7a3a6'
      var colorH = '#97bad8'

      cluster.draw({
        name: 'Academia de Dise\u0144o',
        // level: color de las lineas
        level: groupOneColor,
        // type: color de los puntos
        type: groupOneColor,
        color: colorA,

        children: [
          {
            name: 'Virtual Autogestivo',
            // level: color de las lineas
            level: groupOneColor,
            // type: color de los puntos
            type: groupOneColor,
            menu: true,
            color: colorA,
            children: [
              {
                name: 'Habilidades Exponenciales',
                // level: color de las lineas
                level: groupOneColor,
                // type: color de los puntos
                type: groupOneColor,
                color: colorA,
                children: [
                  {
                    name: 'Gobierno Abierto',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                  {
                    name: 'Datos Abiertos',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                  {
                    name: 'Dise\u0144o Centrado en las Personas',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                  {
                    name: 'Evauacion y Monitoreo de Politicas Publicas',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                  {
                    name: 'Aspectos Basicos de Innovacion Publica',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                  {
                    name: 'Innovacion Publica',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                  {
                    name: 'Innovacion Civica',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                    color: colorA,
                  },
                ],
              },
            ],
          },
          {
            name: 'Ciclo Taller',
            level: groupTwoColor,
            type: groupTwoColor,
            menu: true,
            color: colorB,
            children: [
              {
                name: 'Estado Abierto',
                level: groupTwoColor,
                type: groupTwoColor,
                color: colorB,
                children: [
                  {
                    name:
                      'Participaci\u00f3n Ciudadana- Presupuestos participativos',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name:
                      'C\u00f3mo me incorporo al Plan de Acci\u00f3n Nacional de Gobierno Abierto',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Gobierno abierto subnacional',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupTwoColor,
                type: groupTwoColor,
                color: colorB,
                children: [
                  {
                    name: 'Uso de Evidencia',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Medir Impacto de la Innovaci\u00f3n',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                ],
              },
              {
                name: 'Organizaciones Agiles',
                level: groupTwoColor,
                type: groupTwoColor,
                color: colorB,
                children: [
                  {
                    name: 'Equipos para la acci\u00f3n',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Eventos de PE a PA',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupTwoColor,
                type: groupTwoColor,
                color: colorB,
                children: [
                  {
                    name: 'Design Thinking',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Herramientas para gesti\u00f3n colaborativas',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Aprender mediante la evaluaci\u00f3n',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'El paradigma de la evaluaci\u00f3n participativa ',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Skills Siglo XXI',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupTwoColor,
                type: groupTwoColor,
                color: colorB,
                children: [
                  {
                    name: 'Cs. Sociales en la Innovacion',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                  {
                    name: 'Prototipos para centrarse en el usuario',
                    level: groupTwoColor,
                    type: groupTwoColor,
                    color: colorB,
                  },
                ],
              },
            ],
          },
          {
            name: 'Virtual Tutorado',
            level: groupThreeColor,
            type: groupThreeColor,
            color: colorC,
            menu: true,
            children: [
              {
                name: 'Habilidades Exponenciales',
                level: groupThreeColor,
                type: groupThreeColor,
                color: colorC,
                children: [
                  {
                    name: 'Curso CLAD',
                    level: groupThreeColor,
                    type: groupThreeColor,
                    color: colorC,
                  },
                  {
                    name: 'Innovacion Publica y Gobierno Abierto',
                    level: groupThreeColor,
                    type: groupThreeColor,
                    color: colorC,
                  },
                  {
                    name: 'Evaluacion Agil',
                    level: groupThreeColor,
                    type: groupThreeColor,
                    color: colorC,
                  },
                  {
                    name: 'Dise\u0144o Centrado en las Personas',
                    level: groupThreeColor,
                    type: groupThreeColor,
                    color: colorC,
                  },
                ],
              },
            ],
          },
          {
            name: 'Charla Inspira',
            level: groupFourColor,
            type: groupFourColor,
            menu: true,
            color: colorD,
            children: [
              {
                name: 'Organizaciones Agiles',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'La estrategia aplicada al dise\u0144o',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Contenidos Online',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Lean UX',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Armando equipos ganadores',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'El Prop\u00f3sito, acelerador de la innovaci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Componentes del discurso',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Diagnostico de necesidades y construcci\u00f3n de capacidades - como vincularlos',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Organizaciones exponenciales',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Liderar Equipos de Gobierno',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Intrapreneurship Publico',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Gestion Transparente',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Transparencia fiscal y presupuestaria',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Acceso a la informaci\u00f3n P\u00fablica: del decreto a la Ley',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Seguimiento del 3er Plan de Acci\u00f3n Nacional de Gobierno Abierto',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Evaluaci\u00f3n y Big Data ',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Introducci\u00f3n a la Ciencia de Datos',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Visualizaci\u00f3n de datos: c\u00f3mo contar una historia con datos p\u00fablicos',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Presentando datos de forma efectiva',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'El Estado como consumidor de servicios de datos: qu\u00e9 APIs existen y puedo usar en el gobierno',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Datos Abiertos: La experiencia de Argentina en niveles sub-nacionales',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Herramientas para an\u00e1lisis de datos',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Ciencia de datos aplicada a pol\u00edticas p\u00fablicas',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'An\u00e1lisis de datos en Transporte',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'An\u00e1lisis de datos en Econom\u00eda',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Datos Abiertos: La experiencia de Argentina en la Administraci\u00f3n P\u00fablica Nacional',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Aspectos legales del uso de datos en el estado',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Estado Abierto',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Del gobierno abierto al Estado abierto',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Compras y contrataciones abiertas',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Gobierno abierto subnacional',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Gobierno abierto: la experiencia de Argentina ',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Ciudades del Futuro',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Construyendo Ciudades Exponenciales',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'La importancia de la arquitectura social',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Inteligencia Artificial',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Location Intelligence',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Programar como un nuevo lenguaje universal',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Buenas pr\u00e1cticas para el desarrollo de c\u00f3digo abierto',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Reproducible research tools and theory',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Servicios de datos en gobierno: el Estado como proveedor de servicios',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Econom\u00eda Digital',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Economia Colaborativa',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Blockchain',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Planificaci\u00f3n Agil',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'El lienzo de pol\u00edticas p\u00fablicas',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Medir Impacto en Innovacion',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Pol\u00edticas P\u00fablicas y los Objetivos del desarrollo sostenible',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Politica Publica del siglo XXI',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Uso de evidencia en la gesti\u00f3n p\u00fablica',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: '\u017cDise\u0144o? de pol\u00edticas p\u00fablicas',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Vinculaci\u00f3n efectiva entre gobierno, academia y sociedad civil',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Planeamiento adaptativo',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Pol\u00edticas P\u00fablicas e Innovaci\u00f3n social: \u017cresolver desaf\u00edos o fomentar pasiones?',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Nuevas metodolog\u00edas de evaluaci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o de equipos para la innovaci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Innovacion Politica: nuevas formas de hacer politica',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Hack Burocracia',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o - Ideacion',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o - Definicion',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Casos Paises de Innovacion (Finlandia / Estonia / Corea / Chile / Portugal / Arg )',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Gobierno abierto para la inclusi\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Empresas innovadoras',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Impacto Social, aqu\u00ed y ahora',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Colaboracion Publico-Privada',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Innovaci\u00f3n Inclusiva',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o - Inmersion',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o - Prototipo',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o y uso de Evidencia en Acci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Nuevas herramientas y recursos para la gesti\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Innovacion Abierta (Todos los casos trabajados)',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Innovaci\u00f3n y Genero',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Tecnolog\u00edas Disruptivas',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Mocking Bot - Prototipos sin programar',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Agilidad / SCRUM',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Tecnologias Exponenciales',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'G\u00e9nero y tecnolog\u00eda',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Humanos 3.0 - Tecnolog\u00eda y Salud',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Tecnologia Exponencial e Impacto Social',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: '4ta Revolucion Industrial',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Sustentabilidad y resiliencia',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Smart Cities',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name: 'Registro fotografico',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Organizaciones \u00e1giles',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Complejidad / Incertidumbre (VICA)',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Fundamentos neuro de innovacion',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Empleos del futuro',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Big and Thick Data',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Niveles y tipografias',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Narrativa visual en la gesti\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Dise\u0144ando el dise\u0144o para disee\u0144adores',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Skills SXXI',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Service Design',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Circular Design',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Dise\u0144o de la empat\u00eda ',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'C\u00f3mo hablar con tu dise\u0144ador',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Cs. Sociales en la Innovacion',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Netnography',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Econom\u00eda del Comportamiento',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name:
                      'Analisis e interpretaci\u00f3n de informaci\u00f3n cualitativa',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Aprender del error',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Futuro Interactivo: Industrias creativas',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
              {
                name: 'Organizaciones transparentes',
                level: groupFourColor,
                type: groupFourColor,
                color: colorD,
                children: [
                  {
                    name:
                      'Entre lo p\u00fablico y lo privado: iniciativas de GA',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                  {
                    name: 'Argentina en el G20',
                    level: groupFourColor,
                    type: groupFourColor,
                    color: colorD,
                  },
                ],
              },
            ],
          },
          {
            name: 'Entrenamientos a Escala',
            level: groupFiveColor,
            type: groupFiveColor,
            menu: true,
            color: colorE,
            children: [
              {
                name: 'Entrenamiento general',
                level: groupFiveColor,
                type: groupFiveColor,
                color: colorE,
                children: [
                  {
                    name: 'Encuentro de Comunidades Digitales',
                    level: groupFiveColor,
                    type: groupFiveColor,
                    color: colorE,
                  },
                  {
                    name: 'Marat\u00f3n de Innovaci\u00f3n P\u00fablica',
                    level: groupFiveColor,
                    type: groupFiveColor,
                    color: colorE,
                  },
                  {
                    name: 'GobCamp Modernizaci\u00f3n',
                    level: groupFiveColor,
                    type: groupFiveColor,
                    color: colorE,
                  },
                  {
                    name: 'GobCamp Naci\u00f3n',
                    level: groupFiveColor,
                    type: groupFiveColor,
                    color: colorE,
                  },
                ],
              },
            ],
          },
          {
            name: 'Curso Largo',
            level: groupSixColor,
            type: groupSixColor,
            menu: true,
            color: colorF,
            children: [
              {
                name: 'Estado Abierto',
                level: groupSixColor,
                type: groupSixColor,
                color: colorF,
                children: [
                  {
                    name:
                      'Cocreaci\u00f3n de pol\u00edticas p\u00fablicas: \u017cc\u00f3mo incluir todas las voces al dise\u0144ar programas de acci\u00f3n?',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Introducci\u00f3n al gobierno abierto',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                ],
              },
              {
                name: 'Ciudades del Futuro',
                level: groupSixColor,
                type: groupSixColor,
                color: colorF,
                children: [
                  {
                    name: 'Iniciativas que transforman regiones',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'La importancia de la arquitectura social',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Smart Cities',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Ciudades Hiperconectadas',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupSixColor,
                type: groupSixColor,
                color: colorF,
                children: [
                  {
                    name: 'Metodolog\u00eda Teal',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Estrategias de comunicacion',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Impulsando el intraemprendimiento',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name:
                      'Test driven development + integraci\u00f3n continua + deployment continuo',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Skills del Siglo XXI',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Neurociencia y toma de decisiones',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name:
                      'Introducci\u00f3n a las presentaciones de Gobierno\n',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Agilidad / SCRUM',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Desarrollo de Software con marcos de trabajo SCRUM',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'C\u00f3mo no aburrir contando algo aburrido',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name:
                      'C\u00f3mo pensar una marca para productos de Gobierno',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Operaciones y Desarrollo de Software con DEVOPS',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Patrones de dise\u0144o de software',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupSixColor,
                type: groupSixColor,
                color: colorF,
                children: [
                  {
                    name: 'Service Design',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupSixColor,
                type: groupSixColor,
                color: colorF,
                children: [
                  {
                    name: 'Uso de Evidencia',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Scraping y dise\u0144o de bases de datos',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'El paradigma de la evaluaci\u00f3n participativa ',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Metodolog\u00edas de Evaluaci\u00f3n.',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Proceso evaluativo',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Evaluaci\u00f3n para diagnositcar',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Introducci\u00f3n a la miner\u00eda de datos',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name:
                      'Datos geogr\u00e1ficos con Postgres+Postgis (avanzado)',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Evaluaci\u00f3n y Tecnolog\u00eda',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'An\u00e1lisis de datos con python (avanzado)',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Datos geogr\u00e1ficos con QGis (avanzado)',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name: 'Dise\u0144o de Evaluacion',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                  {
                    name:
                      'Teor\u00eda y aplicaci\u00f3n de la apertura de datos en gobierno',
                    level: groupSixColor,
                    type: groupSixColor,
                    color: colorF,
                  },
                ],
              },
            ],
          },
          {
            name: 'Programa Ejecutivo',
            level: groupSevenColor,
            type: groupSevenColor,
            menu: true,
            color: colorG,
            children: [
              {
                name: 'Ciudades del Futuro',
                level: groupSevenColor,
                type: groupSevenColor,
                color: colorG,
                children: [
                  {
                    name: 'Ecosistema de Provincias Innovadoras',
                    level: groupSevenColor,
                    type: groupSevenColor,
                    color: colorG,
                  },
                  {
                    name: 'Ecosistema de Ciudades Innovadoras',
                    level: groupSevenColor,
                    type: groupSevenColor,
                    color: colorG,
                  },
                ],
              },
              {
                name: 'Organizaciones Agiles',
                level: groupSevenColor,
                type: groupSevenColor,
                color: colorG,
                children: [
                  {
                    name:
                      'Dise\u0144o \u00c1gil de Pol\u00edticas P\u00fablicas',
                    level: groupSevenColor,
                    type: groupSevenColor,
                    color: colorG,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupSevenColor,
                type: groupSevenColor,
                color: colorG,
                children: [
                  {
                    name: 'Innovadores Emergentes',
                    level: groupSevenColor,
                    type: groupSevenColor,
                    color: colorG,
                  },
                ],
              },
            ],
          },
          {
            name: 'Curso Corto',
            level: groupEightColor,
            type: groupEightColor,
            menu: true,
            color: colorH,
            children: [
              {
                name: 'Organizaciones Agiles',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Agilidad / SCRUM',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Prototipado',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Gestion Transparente',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name:
                      'Acceso a la informaci\u00f3n y datos abiertos - Curso pr\u00e1ctico para periodistas',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Estado Abierto',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Qu\u00e9 dice el presupuesto',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Gobierno abierto para el Desarrollo Sostenible',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Inteligencia Artificial',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Entidades interoperables',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Test driven development',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name:
                      'Juegos y diversi\u00f3n en la facilitaci\u00f3n de metodolog\u00edas de M&E',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name:
                      'An\u00e1lisis de datos para pol\u00edticas p\u00fablicas',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Buenas pr\u00e1cticas para el trabajo con datos',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Evaluaci\u00f3n del desarrollo  (Developmental)',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: '\u017cQu\u00e9 son las APIs y c\u00f3mo usarlas? ',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name:
                      'Introducci\u00f3n a la programaci\u00f3n para no programadores',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Datos geogr\u00e1ficos con QGis (b\u00e1sico)',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Evaluaci\u00f3n abierta (sociedad civil)',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Introducci\u00f3n al an\u00e1lisis de datos.',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Apertura para nodos',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Aprender mediante la evaluaci\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Planificaci\u00f3n Agil',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Apoyos clave',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Equipos para la acci\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Definici\u00f3n de problemas',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name:
                      'Casos Paises de Innovacion (Finlandia / Estonia / Corea / Chile / Portugal / Arg )',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Inmersi\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Prototipos para centrarse en el usuario',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Innovaci\u00f3n para Construir Comunidad',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Ideaci\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Intrapreneurship Publico',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Tecnolog\u00edas Disruptivas',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Blockchain',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Organizaciones transparentes',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name:
                      'MyE: C\u00f3mo generar indicadores para evaluar pol\u00edticas de gobierno abierto y promover el monitoreo ciudadano',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupEightColor,
                type: groupEightColor,
                color: colorH,
                children: [
                  {
                    name: 'Fundamentos neuro de innovacion',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name:
                      'El arte de elaborar buenas preguntas (el arte de encuestar)',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Visualizando la gesti\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Utilitzation-Focused Evaluation',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Skills SXXI',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Service Design',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Circular Design',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'El dise\u0144o en sus diferentes soportes',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Cs. Sociales en la Innovacion',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Netnography',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Ser dise\u0144ador  en Gobierno',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'C\u00f3mo generar comunidad y mantenerla ',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'C\u00f3mo llevar a cabo un proyecto con UX',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Econom\u00eda del Comportamiento',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Como contar historias a traves de dise\u0144o',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                  {
                    name: 'Drupal for dummies',
                    level: groupEightColor,
                    type: groupEightColor,
                    color: colorH,
                  },
                ],
              },
            ],
          },
        ],
      })

      // create buttons
      var buttonContainer = d3.select('#form-container')
      var buttonsData = d3.selectAll('path.true')
      // console.log('data', buttonsData[0]) // consultar

      buttonContainer
        .selectAll('button')
        .data(buttonsData[0])
        .enter()
        .append('button')
        .attr('id', function(d) {
          return d.__data__.target.level
        })
        .attr('class', 'button')
        .attr('type', 'button')
        .text(function(d) {
          return d.__data__.target.name
        })
        .on('click', function(d) {
          var branch = d.className.baseVal.split(' ')[1]
          var buttonClicked = this.getAttribute('id')

          d3
            .selectAll('button')
            .transition()
            .attr('class', 'button')

          d3
            .selectAll('button#' + buttonClicked)
            .transition()
            .attr('class', 'button expand')

          d3
            .selectAll('path')
            .transition()
            .style('opacity', 0.1)

          d3
            .selectAll('text')
            .transition()
            .style('opacity', 0.1)
            .style('font-weight', 100)

          d3
            .selectAll('circle')
            .filter(function(d) {
              if (this.className.baseVal != branch) {
                return d
              }
            })
            .transition()
            .style('opacity', 0.1)

          // d3.selectAll('circle').style('opacity', 0.1)

          d3.select(this).style('opacity', 1)

          let selectedBranch = $('.' + branch)
          d3
            .selectAll(selectedBranch)
            .transition()
            .style('opacity', 1)
            .style('font-weight', 700)
          // document.body.style.cursor = 'pointer'
        })

      buttonContainer
        .append('button')
        .attr('id', 'button-one')
        .attr('class', 'button expand')
        .attr('type', 'button')
        .text('Ver todo')
        .on('click', function(d) {
          var buttonClicked = this.getAttribute('id')

          d3
            .selectAll('button')
            .transition()
            .attr('class', 'button')

          d3
            .selectAll('button#' + buttonClicked)
            .transition()
            .attr('class', 'button expand')

          d3
            .selectAll('path')
            .transition()
            .style('opacity', 1)
          d3
            .selectAll('text')
            .transition()
            .style('opacity', 1)
            .style('font-weight', 100)

          d3
            .selectAll('circle')
            .transition()
            .style('opacity', 1)
        })
      // first node style

      // zoom
      // d3
      //   .select('.zoomController')
      //   .attr(
      //     'transform',
      //     'translate(439.3176992196805,785.1565570938741) scale(0.3961174054624845)'
      //   )
    }
  )
})()
