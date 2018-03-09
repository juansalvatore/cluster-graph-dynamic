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

      var groupOneColor = 'red'
      var groupTwoColor = 'blue'
      var groupThreeColor = 'pink'
      var groupFourColor = 'yellow'
      var groupFiveColor = 'violet'
      var groupSixColor = 'brown'
      var groupSevenColor = 'green'
      var groupEightColor = 'grey'

      cluster.draw({
        name: 'Academia de Dise\u0144o',
        // level: color de las lineas
        level: groupOneColor,
        // type: color de los puntos
        type: groupOneColor,
        children: [
          {
            name: 'Virtual Autogestivo',
            // level: color de las lineas
            level: groupOneColor,
            // type: color de los puntos
            type: groupOneColor,
            children: [
              {
                name: 'Habilidades Exponenciales',
                // level: color de las lineas
                level: groupOneColor,
                // type: color de los puntos
                type: groupOneColor,
                children: [
                  {
                    name: 'Gobierno Abierto',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                  {
                    name: 'Datos Abiertos',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                  {
                    name: 'Dise\u0144o Centrado en las Personas',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                  {
                    name: 'Evauacion y Monitoreo de Politicas Publicas',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                  {
                    name: 'Innovacion Publica',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                  {
                    name: 'Aspectos Basicos de Innovacion Publica',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                  {
                    name: 'Innovacion Civica',
                    // level: color de las lineas
                    level: groupOneColor,
                    // type: color de los puntos
                    type: groupOneColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Ciclo Taller',
            level: groupTwoColor,
            type: groupTwoColor,
            children: [
              {
                name: 'Estado Abierto',
                level: groupTwoColor,
                type: groupTwoColor,
                children: [
                  {
                    name:
                      'Participaci\u00f3n Ciudadana- Presupuestos participativos',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name:
                      'C\u00f3mo me incorporo al Plan de Acci\u00f3n Nacional de Gobierno Abierto',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Gobierno abierto subnacional',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupTwoColor,
                type: groupTwoColor,
                children: [
                  {
                    name: 'Uso de Evidencia',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Medir Impacto de la Innovaci\u00f3n',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                ],
              },
              {
                name: 'Organizaciones Agiles',
                level: groupTwoColor,
                type: groupTwoColor,
                children: [
                  {
                    name: 'Equipos para la acci\u00f3n',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Eventos de PE a PA',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupTwoColor,
                type: groupTwoColor,
                children: [
                  {
                    name: 'El paradigma de la evaluaci\u00f3n participativa',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Design Thinking',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Herramientas para gesti\u00f3n colaborativas',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Aprender mediante la evaluaci\u00f3n',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Skills Siglo XXI',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupTwoColor,
                type: groupTwoColor,
                children: [
                  {
                    name: 'Cs. Sociales en la Innovacion',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                  {
                    name: 'Prototipos para centrarse en el usuario',
                    level: groupTwoColor,
                    type: groupTwoColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Virtual Tutorado',
            level: groupThreeColor,
            type: groupThreeColor,
            children: [
              {
                name: 'Habilidades Exponenciales',
                level: groupThreeColor,
                type: groupThreeColor,
                children: [
                  {
                    name: 'Curso CLAD',
                    level: groupThreeColor,
                    type: groupThreeColor,
                  },
                  {
                    name: 'Innovacion Publica y Gobierno Abierto',
                    level: groupThreeColor,
                    type: groupThreeColor,
                  },
                  {
                    name: 'Evaluacion Agil',
                    level: groupThreeColor,
                    type: groupThreeColor,
                  },
                  {
                    name: 'Dise\u0144o Centrado en las Personas',
                    level: groupThreeColor,
                    type: groupThreeColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Charla Inspira',
            level: groupFourColor,
            type: groupFourColor,
            children: [
              {
                name: 'Organizaciones Agiles',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'La estrategia aplicada al dise\u0144o',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Contenidos Online',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Lean UX',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Armando equipos ganadores',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'El Prop\u00f3sito, acelerador de la innovaci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Componentes del discurso',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Diagnostico de necesidades y construcci\u00f3n de capacidades - como vincularlos',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Organizaciones exponenciales',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Liderar Equipos de Gobierno',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Intrapreneurship Publico',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Introducci\u00f3n a la Ciencia de Datos',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Visualizaci\u00f3n de datos: c\u00f3mo contar una historia con datos p\u00fablicos',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Presentando datos de forma efectiva',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'El Estado como consumidor de servicios de datos: qu\u00e9 APIs existen y puedo usar en el gobierno',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Datos Abiertos: La experiencia de Argentina en niveles sub-nacionales',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Evaluaci\u00f3n y Big Data',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Herramientas para an\u00e1lisis de datos',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Ciencia de datos aplicada a pol\u00edticas p\u00fablicas',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'An\u00e1lisis de datos en Transporte',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'An\u00e1lisis de datos en Econom\u00eda',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Datos Abiertos: La experiencia de Argentina en la Administraci\u00f3n P\u00fablica Nacional',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Aspectos legales del uso de datos en el estado',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Estado Abierto',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Del gobierno abierto al Estado abierto',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Gobierno abierto subnacional',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Gobierno abierto: la experiencia de Argentina',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Compras y contrataciones abiertas',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Ciudades del Futuro',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Construyendo Ciudades Exponenciales',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'La importancia de la arquitectura social',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Inteligencia Artificial',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Location Intelligence',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Programar como un nuevo lenguaje universal',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Buenas pr\u00e1cticas para el desarrollo de c\u00f3digo abierto',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Reproducible research tools and theory',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Servicios de datos en gobierno: el Estado como proveedor de servicios',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Econom\u00eda Digital',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Economia Colaborativa',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Planificaci\u00f3n Agil',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'El lienzo de pol\u00edticas p\u00fablicas',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Medir Impacto en Innovacion',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Pol\u00edticas P\u00fablicas y los Objetivos del desarrollo sostenible',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Politica Publica del siglo XXI',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Uso de evidencia en la gesti\u00f3n p\u00fablica',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: '\u017cDise\u0144o? de pol\u00edticas p\u00fablicas',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Vinculaci\u00f3n efectiva entre gobierno, academia y sociedad civil',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Planeamiento adaptativo',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Pol\u00edticas P\u00fablicas e Innovaci\u00f3n social: \u017cresolver desaf\u00edos o fomentar pasiones?',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Nuevas metodolog\u00edas de evaluaci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Dise\u0144o de equipos para la innovaci\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Innovacion Politica: nuevas formas de hacer politica',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Hack Burocracia',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Dise\u0144o - Ideacion',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Dise\u0144o - Definicion',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Casos Paises de Innovacion (Finlandia / Estonia / Corea / Chile / Portugal / Arg )',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Gobierno abierto para la inclusi\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Empresas innovadoras',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Impacto Social, aqu\u00ed y ahora',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Colaboracion Publico-Privada',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Innovaci\u00f3n Inclusiva',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Dise\u0144o - Inmersion',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Nuevas herramientas y recursos para la gesti\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Dise\u0144o - Prototipo',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Pensamiento de dise\u0144o y evaluaci\u00f3n: Mejor juntos',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Innovacion Abierta (Todos los casos trabajados)',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Innovaci\u00f3n y Genero',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Tecnolog\u00edas Disruptivas',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Blockchain',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Mocking Bot - Prototipos sin programar',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Agilidad / SCRUM',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Tecnologias Exponenciales',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'G\u00e9nero y tecnolog\u00eda',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Humanos 3.0 - Tecnolog\u00eda y Salud',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Tecnologia Exponencial e Impacto Social',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: '4ta Revolucion Industrial',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Sustentabilidad y resiliencia',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Smart Cities',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name: 'Registro fotografico',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Organizaciones \u00e1giles',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Dise\u0144ando el dise\u0144o para disee\u0144adores',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Complejidad / Incertidumbre (VICA)',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Fundamentos neuro de innovacion',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Empleos del futuro',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Big and Thick Data',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Niveles y tipografias',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Dise\u0144o de la empat\u00eda',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Skills SXXI',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Service Design',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Circular Design',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Narrativa visual en la gesti\u00f3n',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'C\u00f3mo hablar con tu dise\u0144ador',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Cs. Sociales en la Innovacion',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Netnography',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Econom\u00eda del Comportamiento',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Analisis e interpretaci\u00f3n de informaci\u00f3n cualitativa',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Aprender del error',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Futuro Interactivo: Industrias creativas',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
              {
                name: 'Organizaciones transparentes',
                level: groupFourColor,
                type: groupFourColor,
                children: [
                  {
                    name:
                      'Entre lo p\u00fablico y lo privado: iniciativas de GA',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Transparencia fiscal y presupuestaria',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Acceso a la informaci\u00f3n P\u00fablica: del decreto a la Ley',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name:
                      'Seguimiento del 3er Plan de Acci\u00f3n Nacional de Gobierno Abierto',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                  {
                    name: 'Argentina en el G20',
                    level: groupFourColor,
                    type: groupFourColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Entrenamientos a Escala',
            level: groupFiveColor,
            type: groupFiveColor,
            children: [
              {
                name: 'Habilidades Exponenciales',
                level: groupFiveColor,
                type: groupFiveColor,
                children: [
                  {
                    name: 'Encuentro de Comunidades Digitales',
                    level: groupFiveColor,
                    type: groupFiveColor,
                  },
                  {
                    name: 'Marat\u00f3n de Innovaci\u00f3n P\u00fablica',
                    level: groupFiveColor,
                    type: groupFiveColor,
                  },
                  {
                    name: 'GobCamp Modernizaci\u00f3n',
                    level: groupFiveColor,
                    type: groupFiveColor,
                  },
                  {
                    name: 'GobCamp Naci\u00f3n',
                    level: groupFiveColor,
                    type: groupFiveColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Curso Largo',
            level: groupSixColor,
            type: groupSixColor,
            children: [
              {
                name: 'Estado Abierto',
                level: groupSixColor,
                type: groupSixColor,
                children: [
                  {
                    name:
                      'Cocreaci\u00f3n de pol\u00edticas p\u00fablicas: \u017cc\u00f3mo incluir todas las voces al dise\u0144ar programas de acci\u00f3n?',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Introducci\u00f3n al gobierno abierto',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                ],
              },
              {
                name: 'Ciudades del Futuro',
                level: groupSixColor,
                type: groupSixColor,
                children: [
                  {
                    name: 'Iniciativas que transforman regiones',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'La importancia de la arquitectura social',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Smart Cities',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Ciudades Hiperconectadas',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupSixColor,
                type: groupSixColor,
                children: [
                  {
                    name: 'Metodolog\u00eda Teal',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Estrategias de comunicacion',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Impulsando el intraemprendimiento',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name:
                      'Test driven development + integraci\u00f3n continua + deployment continuo',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Introducci\u00f3n a las presentaciones de Gobierno ',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Skills del Siglo XXI',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Neurociencia y toma de decisiones',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Agilidad / SCRUM',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Desarrollo de Software con marcos de trabajo SCRUM',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'C\u00f3mo no aburrir contando algo aburrido',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name:
                      'C\u00f3mo pensar una marca para productos de Gobierno',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Operaciones y Desarrollo de Software con DEVOPS',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Patrones de dise\u0144o de software',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupSixColor,
                type: groupSixColor,
                children: [
                  {
                    name: 'Service Design',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupSixColor,
                type: groupSixColor,
                children: [
                  {
                    name: 'Uso de Evidencia',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Scraping y dise\u0144o de bases de datos',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Datos geogr\u00e1ficos con QGis (avanzado)',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Metodolog\u00edas de Evaluaci\u00f3n.',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Proceso evaluativo',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'El paradigma de la evaluaci\u00f3n participativa',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Evaluaci\u00f3n para diagnositcar',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Introducci\u00f3n a la miner\u00eda de datos',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name:
                      'Datos geogr\u00e1ficos con Postgres+Postgis (avanzado)',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Evaluaci\u00f3n y Tecnolog\u00eda',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'An\u00e1lisis de datos con python (avanzado)',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name: 'Dise\u0144o de Evaluacion',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                  {
                    name:
                      'Teor\u00eda y aplicaci\u00f3n de la apertura de datos en gobierno',
                    level: groupSixColor,
                    type: groupSixColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Programa Ejecutivo',
            level: groupSevenColor,
            type: groupSevenColor,
            children: [
              {
                name: 'Ciudades del Futuro',
                level: groupSevenColor,
                type: groupSevenColor,
                children: [
                  {
                    name: 'Ecosistema de Provincias Innovadoras',
                    level: groupSevenColor,
                    type: groupSevenColor,
                  },
                  {
                    name: 'Ecosistema de Ciudades Innovadoras',
                    level: groupSevenColor,
                    type: groupSevenColor,
                  },
                ],
              },
              {
                name: 'Organizaciones Agiles',
                level: groupSevenColor,
                type: groupSevenColor,
                children: [
                  {
                    name:
                      'Dise\u0144o \u00c1gil de Pol\u00edticas P\u00fablicas',
                    level: groupSevenColor,
                    type: groupSevenColor,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupSevenColor,
                type: groupSevenColor,
                children: [
                  {
                    name: 'Innovadores Emergentes',
                    level: groupSevenColor,
                    type: groupSevenColor,
                  },
                  {
                    name: 'Programas Ejecutivos',
                    level: groupSevenColor,
                    type: groupSevenColor,
                  },
                ],
              },
            ],
          },
          {
            name: 'Curso Corto',
            level: groupEightColor,
            type: groupEightColor,
            children: [
              {
                name: 'Organizaciones Agiles',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Agilidad / SCRUM',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Prototipado',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Estado Abierto',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Qu\u00e9 dice el presupuesto',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Gobierno abierto para el Desarrollo Sostenible',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Inteligencia Artificial',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Entidades interoperables',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Test driven development',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Datos y Evidencia',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name:
                      'Juegos y diversi\u00f3n en la facilitaci\u00f3n de metodolog\u00edas de M&E',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name:
                      'An\u00e1lisis de datos para pol\u00edticas p\u00fablicas',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Buenas pr\u00e1cticas para el trabajo con datos',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Evaluaci\u00f3n del desarrollo (Developmental)',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: '\u017cQu\u00e9 son las APIs y c\u00f3mo usarlas?',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name:
                      'Introducci\u00f3n a la programaci\u00f3n para no programadores',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Datos geogr\u00e1ficos con QGis (b\u00e1sico)',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Evaluaci\u00f3n abierta (sociedad civil)',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Introducci\u00f3n al an\u00e1lisis de datos.',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Apertura para nodos',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Aprender mediante la evaluaci\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Planificaci\u00f3n Agil',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Apoyos clave',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Equipos para la acci\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'La innovaci\u00f3n como recurso',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Definici\u00f3n de problemas',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name:
                      'Casos Paises de Innovacion (Finlandia / Estonia / Corea / Chile / Portugal / Arg )',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Inmersi\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Prototipos para centrarse en el usuario',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Innovaci\u00f3n para Construir Comunidad',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Ideaci\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Intrapreneurship Publico',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Tecnolog\u00edas Disruptivas',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Blockchain',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Organizaciones transparentes',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name:
                      'Acceso a la informaci\u00f3n y datos abiertos - Curso pr\u00e1ctico para periodistas',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name:
                      'MyE: C\u00f3mo generar indicadores para evaluar pol\u00edticas de gobierno abierto y promover el monitoreo ciudadano',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
              {
                name: 'Habilidades Exponenciales',
                level: groupEightColor,
                type: groupEightColor,
                children: [
                  {
                    name: 'Fundamentos neuro de innovacion',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name:
                      'El arte de elaborar buenas preguntas (el arte de encuestar)',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Visualizando la gesti\u00f3n',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Utilitzation-Focused Evaluation',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Skills SXXI',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Service Design',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Circular Design',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'El dise\u0144o en sus diferentes soportes',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Cs. Sociales en la Innovacion',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Netnography',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'C\u00f3mo generar comunidad y mantenerla',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'C\u00f3mo llevar a cabo un proyecto con UX',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Econom\u00eda del Comportamiento',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Como contar historias a traves de dise\u0144o',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Ser dise\u0144ador en Gobierno',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                  {
                    name: 'Drupal for dummies',
                    level: groupEightColor,
                    type: groupEightColor,
                  },
                ],
              },
            ],
          },
        ],
      })
    }
  )
})()
