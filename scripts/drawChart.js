import {swapiGet} from './index.js';


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);



async function drawChart() {
    const response = await swapiGet("vehicles/");
    const vehiclesArray = response.results
    console.log(vehiclesArray)

    const dataArray = []

    dataArray.push(["Veículos", "Nome"])
    vehiclesArray.forEach(vehicle => {
        dataArray.push(vehicle.name, vehicle.passengers)
    });

    console.log(dataArray)

    const data = google.visualization.arrayToDataTable([dataArray]);
    
    const options = {
      title: 'My Daily Activities'
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }

