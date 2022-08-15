var xValues = ["7/1","7/10","7/25","7/28"];
var yValues = [300,500,800,500];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "#fdc816",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues,
      fill:true,
        }],
    options :{
        chartArea: {
            backgroundColor: 'rgba(251, 85, 85, 0.4)'
        }
        
    }
  },

});

$(function() {
    $('.chart').easyPieChart({
      size: 160,
      barColor: "#fdc816",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#818181",
      lineCap: "circle",
      animate: 2000,
    });
  });