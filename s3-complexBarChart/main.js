var array = [44, 56, 12, 89, 53, 14, 42, 1001, 230, 57, 860, 44, 56, 12, 89, 53, 14, 42, 1001, 230, 57, 860]

var array = [
  {key: 'ABC', value: 44},
  {key: 'PQR', value: 56},
  {key: 'XYZ', value: 89},
  {key: 'RST', value: 12},
  {key: 'Nitin', value: 34},
  {key: 'Priyanka', value: 156},
  {key: 'ABC2', value: 44},
  {key: 'PQR2', value: 56},
  {key: 'XYZ2', value: 89},
  {key: 'RST2', value: 12},
  {key: 'Nitin2', value: 37},
  {key: 'Priyanka2', value: 156},
  {key: 'Ritu2', value: 84}
]

var w = 800
var h = 500

var margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 80
}

var width = w - margin.left - margin.right
var height = h - margin.top - margin.bottom

var svg = d3.select('body')
            .append('svg')
            .attr('id', 'chart')
            .attr('width', w)
            .attr('height', h)

var chart = svg.append('g')
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ' )')

var x = d3.scaleLinear()
        .domain([0, d3.max(array, function (d) {
          return d.value
        })])
        .range([0, width])

// refer: https://stackoverflow.com/questions/39695967/d3-js-ordinal-scale-version-3-to-version-4
var y = d3.scaleBand()
        .domain(array.map(function (entry) {
          return entry.key
        }))
    .rangeRound([0, height])

var linearColorScale = d3.scaleLinear()
                        .domain([0, array.length])
                        .range(['red', '#4285f2'])

var xAxis = d3.axisBottom()
              .scale(x)

var yAxis = d3.axisLeft()
              .scale(y)
// CREATE BARS
chart.selectAll('.bar')
    .data(array)
    .enter()
      .append('rect')
      // .attr('class', 'bar')
      // .attr('class', 'tryingToAddAnotherClass') // ISSUE: will overwrite the prev class, instead use class function
      .classed('bar', true) // Second arg required. if true it appends to class name else not
      .attr('y', function (d, i) {
        return y(d.key)
      })
      .attr('width', function (d, i) {
        return x(d.value)
      })
      .attr('height', function (d, i) {
        return y.bandwidth() - 1
      })
      .style('fill', function (d, i) {
        return linearColorScale(i)
      })

// SET LABEL ON EACH BAR
chart.selectAll('.bar-label')
  .data(array)
  .enter()
    .append('text')
    .classed('bar-label', true)
    .text(function (d, i) {
      return d.value
    })
    .attr('x', function (d, i) {
      return x(d.value)
    })
    .attr('dx', -4)
    .attr('y', function (d, i) {
      return y(d.key)
    })
    .attr('dy', function (d, i) {
      return y.bandwidth() / 1.5 + 2
    })

chart.append('g')
    .classed('X Axis', true)
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)

chart.append('g')
    .classed('Y Axis', true)
    .attr('transform', 'translate(0,' + 0 + ')')
    .call(yAxis)
