angular.module('classPulse.responses', [])

.controller('ResponsesController', function($scope, $rootScope) {
  var data = {};

  var margin = {top: 20, right: 30, bottom: 30, left: 40},
      width = 500 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  var y = d3.scale.linear()
    .range([height, 0]);

  var x = d3.scale.ordinal()
    // .domain([0, $scope.$parent.quiz.answers.keys().length - 1])
    .domain([$scope.$parent.quiz.answers.map(function(v, i) {
      return i + 1;
    })])
    .rangeRoundBands([0, width], .1);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  $rootScope.socket.on('newStudentResponse', function() {
    data = processResponses($scope.$parent.responses);
    console.log(data);
    updateY.call(null, y);

  });

  function processResponses(responses) {
    var map = {};
    responses.forEach(function(r) {
      ( map[r.answer] && map[r.answer.value]++ ) || ( map[r.answer] = {name: r.answer, value: 1} );
    });
    return map;
  }

  function updateY() {
    y.domain([0, Object.keys(data).length]);
  }

  $rootScope.socket.on('newQuiz', function(q) {


    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

    chart.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.rangeBand());
  });


});
