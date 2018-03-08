document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('button-nine').addEventListener('click', () => {
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
            children: [],
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
    })
  },
  false
)
