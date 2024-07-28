let ctx = document.getElementById("myChart");

let graphData = {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Real-Time Graph",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
};

let myChart = new Chart(ctx, graphData);

let sock = new WebSocket("ws://localhost:8000/ws/graph/");

sock.onmessage = (event) => {
  let data = JSON.parse(event.data);
  console.log(data);

  let newGraphData = graphData["data"].datasets[0].data;
  let newLabels = graphData["data"]["labels"]

  newLabels.shift();
  newGraphData.shift();

  newGraphData.push(data.value);
  newLabels.push(data.day);

  graphData["data"]["datasets"][0]["data"] = newGraphData;
  graphData["data"]["labels"] = newLabels;



  myChart.update()
};
