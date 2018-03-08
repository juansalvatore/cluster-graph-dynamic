document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('button-six').addEventListener('click', () => {
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
