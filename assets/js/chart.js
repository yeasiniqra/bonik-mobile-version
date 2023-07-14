// js for line chart
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [55, 49, 44, 24, 50];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    // title: {
    //   display: true,
    //   text: "Sales Bar Graph"
    // }
  }
});

// js for multiline chart
const xValuesLine = [100,200,300,400,500,600,700,800,900,1000,1100,1200];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValuesLine,
    datasets: [
        { 
            data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
            borderColor: "red",
            fill: false
        }, 
        { 
            data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
            borderColor: "green",
            fill: false
        }, 
        { 
            data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
            borderColor: "blue",
            fill: false
        },
        // { 
        //     data: [200,300,800,500,5800,4200,2100,1200,200,190],
        //     borderColor: "Yellow",
        //     fill: false
        // }
    ]
  },
  options: {
    legend: {display: false},
    // title: {
    //     display: true,
    //     text: "Sales Line Graph"
    //   }
  }
});