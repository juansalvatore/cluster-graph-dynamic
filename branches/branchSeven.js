document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.getElementById('button-eight').addEventListener('click', () => {
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
            children: [],
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
            children: [],
          },
        ],
      })
    })
  },
  false
)
