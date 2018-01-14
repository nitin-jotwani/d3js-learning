var array = [44, 56, 12, 89, 53, 14, 42, 1001, 230, 57, 860, 44, 56, 12, 89, 53, 14, 42, 1001, 230, 57, 860]

var w = 800
var h = 500

var margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
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
        .domain([0, d3.max(array)])
        .range([0, width])

// AUTO ASSIGNS HEIGHT OF EACH BAR DEPENDING UPON NO OF BARS AND SVG HEIGHT
var y = d3.scaleLinear()
        .domain([0, array.length])
        .range([0, height])

// CREATE BARS
chart.selectAll('.bar')
    .data(array)
    .enter()
      .append('rect')
      // .attr('class', 'bar')
      // .attr('class', 'tryingToAddAnotherClass') // ISSUE: will overwrite the prev class, instead use class function
      .classed('bar', true) // Second arg required. if true it appends to class name else not
      .attr('y', function (d, i) {
        return y(i)
      })
      .attr('width', function (d, i) {
        return x(d)
      })
      .attr('height', function (d, i) {
        return y(1) - 1
        /*
          y(0) will give the y position of first bar, i.e. y=0
          So y(1) will give the position of second bar, and hence we come to know the height of first bar
          y(1) = 22
          but to maintain space between all bars we subtract 1px
        */
      })

// SET LABEL ON EACH BAR
chart.selectAll('.bar-label')
  .data(array)
  .enter()
    .append('text')
    .classed('bar-label', true)
    .text(function (d, i) {
      return d
    })
    .attr('x', function (d, i) {
      return x(d)
    })
    .attr('dx', -4)
    .attr('y', function (d, i) {
      return y(i)
    })
    .attr('dy', function (d, i) {
      return y(1) / 1.5 + 2
    })
