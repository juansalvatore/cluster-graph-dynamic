document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('button-seven').addEventListener('click', () => {
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
        .levelGap(250)
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
