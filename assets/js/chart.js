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
    plugins: {
      legend: {
        display: false,
      }
    },
  }
});

// js for multiline chart
// const xValuesLine = [100,200,300,400,500,600,700,800,900,1000,1100,1200];
const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric'
});

const xValuesLine = [
  formattedDate,
  formattedDate, 
  formattedDate, 
  formattedDate, 
  formattedDate,
  formattedDate,
];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValuesLine,
    datasets: [
        { 
            data: [860,1140,1060,1060,1070,3235],
            borderColor: "red",
            fill: false,
            
        }, 
        { 
            data: [1600,1700,1700,1900,2000,2232],
            borderColor: "green",
            fill: false,
            
        }, 
        { 
            data: [300,700,2000,5000,6000, 6239],
            borderColor: "blue",
            fill: false,
           
        },
        // { 
        //     data: [200,300,800,500,5800,4200,2100,1200,200,190],
        //     borderColor: "Yellow",
        //     fill: false
        // }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
          rotation: 90,
        },
      },
    },
  }
});
