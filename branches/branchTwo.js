document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('button-three').addEventListener('click', () => {
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
            ],
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
            children: [],
          },
        ],
      })
    })
  },
  false
)
