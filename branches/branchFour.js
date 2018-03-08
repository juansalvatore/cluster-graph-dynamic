document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('button-five').addEventListener('click', () => {
      var cluster = d3
        .select('#vis')
        .select('svg')
        .html('')
        .chart('cluster.radial')

        //.diameter(500)
        .radius(function(d) {
          if (d.size) return Math.log(d.size)
          else return 3
        })
        .levelGap(210)
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
      var groupEightColor = '#ccc'

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
            children: [],
          },
          {
            name: 'Ciclo Taller',
            level: groupTwoColor,
            type: groupTwoColor,
            children: [],
          },
          {
            name: 'Virtual Tutorado',
            level: groupThreeColor,
            type: groupThreeColor,
            children: [],
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
            children: [],
          },
          {
            name: 'Curso Largo',
            level: groupSixColor,
            type: groupSixColor,
            children: [],
          },
          {
            name: 'Programa Ejecutivo',
            level: groupSevenColor,
            type: groupSevenColor,
            children: [],
          },
          {
            name: 'Curso Corto',
            level: groupEightColor,
            type: groupEightColor,
            children: [],
          },
        ],
      })
    })
  },
  false
)
