// API url & key

// https://api.openweathermap.org/data/3.0/onecall?lat=18.476223&lon=-77.893890&units=metric&exclude=minutely,alerts&appid=42aab93f919a0108de29c04395767465

// API call set to Montego Bay, Jamaica
let queryUrl = 'https://api.openweathermap.org/data/3.0/onecall?';
let lat = 'lat=18.476223&';
let lon = 'lon=-77.893890&';
let apiOptions = 'units=metric&exclude=minutely,alerts&';
let apiKey = 'appid=42aab93f919a0108de29c04395767465';
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
	.then((response) => response.json())
	.then((data) => {
		// console.log(data);
		// weather main data
		let main = data.current.weather[0].main;
		let description = data.current.weather[0].description;
		// use Math.round to make number whole numbers otherwise will have decimal point
		let temp = Math.round(data.current.temp);
		let pressure = data.current.pressure;
		let humidity = data.current.humidity;
		let name = 'Montego Bay';
		// console.log(main);

		document.getElementById('wrapper-description').innerHTML = description;
		document.getElementById('wrapper-temp').innerHTML = temp + '˚C';
		document.getElementById('wrapper-pressure').innerHTML = pressure;
		document.getElementById('wrapper-humidity').innerHTML = humidity + '˚C';
		document.getElementById('wrapper-name').innerHTML = name;

		// weather hourly data variables
		let hourNow = data.hourly[0].temp;
		let hourOne = data.hourly[1].temp;
		let hourTwo = data.hourly[2].temp;
		let hourThree = data.hourly[3].temp;
		let hourFour = data.hourly[4].temp;
		let hourFive = data.hourly[5].temp;
		// place hourly data variables into the wrapper element with id wrapper
		document.getElementById('wrapper-hour-now').innerHTML = hourNow + '˚C';
		document.getElementById('wrapper-hourOne').innerHTML = hourOne + '˚C';
		document.getElementById('wrapper-hourTwo').innerHTML = hourTwo + '˚C';
		document.getElementById('wrapper-hourThree').innerHTML = hourThree + '˚C';
		document.getElementById('wrapper-hourFour').innerHTML = hourFour + '˚C';
		document.getElementById('wrapper-hourFive').innerHTML = hourFive + '˚C';
		// console.log(hourThree);
		// time for each hour in the wrapper element
		let timeNow = new Date().getHours();
		let timeOne = timeNow + 1;
		let timeTwo = timeOne + 1;
		let timeThree = timeTwo + 1;
		let timeFour = timeThree + 1;
		let timeFive = timeFour + 1;
		// place time data variables into the wrapper element with id wrapper
		document.getElementById('wrapper-time-one').innerHTML = timeOne;
		document.getElementById('wrapper-time-two').innerHTML = timeTwo;
		document.getElementById('wrapper-time-three').innerHTML = timeThree;
		document.getElementById('wrapper-time-four').innerHTML = timeFour;
		document.getElementById('wrapper-time-five').innerHTML = timeFive;

		// weather temp data variables
		let tomorrowTemp = Math.round(data.daily[0].temp.day);
		let datTemp = Math.round(data.daily[1].temp.day);
		let tomorrowMain = data.daily[0].weather[0].main;
		let datTempMain = data.daily[1].weather[0].main;
		// place weather data variables into the wrapper element with id
		document.getElementById('wrapper-forecast-temp-today').innerHTML =
			temp + '˚C';
		document.getElementById('wrapper-forecast-temp-tomorrow').innerHTML =
			tomorrowTemp + '˚C';
		document.getElementById('wrapper-forecast-temp-DAT').innerHTML =
			datTemp + '˚C';

		// icons
		let iconBaseUrl = 'http://openweathermap.org/img/wn/';
		let iconFormat = '.png';

		// today
		let iconCodeToday = data.current.weather[0].icon;
		let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
		document.getElementById('wrapper-icon-today').src = iconFullyUrlToday;

		// console.log(datTemp);

		// tomorrow
		let iconCodeTomorrow = data.daily[0].weather[0].icon;
		let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
		document.getElementById('wrapper-icon-tomorrow').src = iconFullyUrlTomorrow;

		// DAT
		let iconCodeDAT = data.daily[1].weather[0].icon;
		let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
		document.getElementById('wrapper-icon-DAT').src = iconFullyUrlDAT;

		// icons hourly

		// hour now
		let iconHourNow = data.hourly[0].weather[0].icon;
		let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
		document.getElementById('wrapper-icon-hour-now').src = iconFullyUrlHourNow;

		// hourOne
		let iconHourOne = data.hourly[0].weather[0].icon;
		let iconFullyUrlHourOne = iconBaseUrl + iconHourOne + iconFormat;
		document.getElementById('wrapper-icon-hourOne').src = iconFullyUrlHourOne;

		// hourtwo
		let iconHourTwo = data.hourly[0].weather[0].icon;
		let iconFullyUrlHourTwo = iconBaseUrl + iconHourTwo + iconFormat;
		document.getElementById('wrapper-icon-hourTwo').src = iconFullyUrlHourTwo;

		// hourThree
		let iconHourThree = data.hourly[0].weather[0].icon;
		let iconFullyUrlHourThree = iconBaseUrl + iconHourThree + iconFormat;
		document.getElementById('wrapper-icon-hourThree').src =
			iconFullyUrlHourThree;

		// hourFour
		let iconHourFour = data.hourly[0].weather[0].icon;
		let iconFullyUrlHourFour = iconBaseUrl + iconHourFour + iconFormat;
		document.getElementById('wrapper-icon-hourFour').src = iconFullyUrlHourFour;

		// hourFive
		let iconHourFive = data.hourly[0].weather[0].icon;
		let iconFullyUrlHourFive = iconBaseUrl + iconHourFive + iconFormat;
		document.getElementById('wrapper-icon-hourFive').src = iconFullyUrlHourFive;

		// main = 'lightning storm';

		// backgrounds using switch
		switch (main) {
			case 'sunny':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/sunny.gif)';
				break;
			case 'heavy rain':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(/assets/weather-animations/heavy-rain.gif)';
				break;
			case 'clear':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/clear.gif)';
				break;
			case 'lightning storm':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/lightning-storm.gif)';
				break;
			case 'rain':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/rain.gif)';
				break;
			case 'thunderstorm':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/thunderstorm.gif)';
				break;
			case 'clouds':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/clouds.gif)';
				break;
			case 'broken clouds':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/broken-clouds.gif)';
				break;
			case 'fog':
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/fog.gif)';
				break;
			default:
				document.getElementById('wrapper-bg').style.backgroundImage =
					'url(assets/weather-animations/clear.gif)';
				break;
		}
	});
