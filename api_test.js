const fetch = require("node-fetch");

fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0')
    .then(res => res.json())
    .then((data) => {
        var str = JSON.stringify(data);
        console.log(str);
        var parJSON = JSON.parse(str);
        console.log('Parsed Objects: ', parJSON.results)
        console.log('Sunrise: ', parJSON.results.sunrise);
        console.log('Sunset: ', parJSON.results.sunset);
}).catch(error => console.error(error));