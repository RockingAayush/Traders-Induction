// JavaScript for the chart as a design element
const ctx = document.getElementById("myChart").getContext("2d");
const chart = new Chart(ctx, {
  type: "line", // Line chart for a more abstract look
  data: {
    labels: ["", "", "", "", "","",""], // Empty labels
    datasets: [{
      data: [15, 10, 25, 30, 20,25,30], // Random values for creative representation
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 3,
      fill: true,
      tension: 0.4 // Smooth curves for an abstract design
    }]
  },
  options: {
    elements: {
      point: {
        radius: 5, // Larger points for visual effect
        backgroundColor: "rgba(255, 99, 132, 1)"
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40
      }
    },
    animation: {
      duration: 2000, // Slow animation to draw attention
      easing: "easeInOutBounce"
    },
    plugins: {
      legend: {
        display: false // Hide legend for a cleaner design
      }
    }
  }
});

// Randomly animate the line chart for visual effect
setInterval(() => {
  chart.data.datasets[0].data = chart.data.datasets[0].data.map(() => Math.floor(Math.random() * 40));
  chart.update();
}, 2000);
