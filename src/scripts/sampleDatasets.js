const processorCanvas = document.getElementById("processorGraph").getContext('2d'),
      memoryCanvas = document.getElementById("memoryGraph").getContext('2d'),
      processorChart = new Chart(processorCanvas, {
          type: 'line',
          data: {
              labels: ['20:00', '21:00', '22:00', '23:00', 'Oct 27', '1:00'],
              datasets: [{
                    label: 'Max Utilization',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    borderColor: "rgba(255, 0, 0, 1)",
                    borderWidth: 1
                },{
                    
                    label: 'Average Utilization',
                    data: [8, 9, 1, 2, 1, 0],
                    backgroundColor: "rgba(52, 152, 219, 0.5)",
                    borderColor: "rgba(52, 152, 219, 1)",
                    borderWidth: 1
                }]
          },
          options: {
              responsive: true,
              interaction: {
                mode: 'index',
                intersect: false,
              },
              scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Utilization (%)'
                    }
                  }
              }
          }
      }),
      memoryChart = new Chart(memoryCanvas, {
        type: 'line',
        data: {
            labels: ['20:00', '21:00', '22:00', '23:00', 'Oct 27', '1:00'],
            datasets: [{
                label: 'Allocated Memory',
                data: [12, 22, 22, 22, 22, 23],
                backgroundColor: "rgba(77, 157, 179, 0.5)",
                borderColor: "rgba(77, 157, 179, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Megabytes'
                    }
                }
            }
        }
    });