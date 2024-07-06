const inputBox = document.querySelector('.inputbox');
const searchbutton = document.getElementById('searchbutton');
const weatherimg = document.querySelector('.weaimg');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const windspeed = document.getElementById('windspeed');
const humidity = document.getElementById('humidity');


async function checkweather(city){
    const apikey = "3e4ec49c646a29ebfb4bdf6e888237c3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const weatherdata = await fetch(`${url}`).then(response => response.json());

    
    
    temperature.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)}°C`;
    description.innerHTML = `${weatherdata.weather[0].description}`;
    humidity.innerHTML = `${weatherdata.main.humidity}%`;
    windspeed.innerHTML = `${weatherdata.wind.speed}Km/H`;

    switch(weatherdata.weather[0].main){
        case 'Cloud':
            weatherimg.src = "/Images/cloud.png";
            break;
        case 'Clear':
            weatherimg.src = "/Images/clear.png";
            break;
        case 'Mist':
            weatherimg.src = "/Images/mist.png";
            break;
        case 'Rain':
            weatherimg.src = "/Images/rain.png";
            break;
        case 'Snow':
            weatherimg.src = "/Images/snow.png";
            break;


    }

    

}

searchbutton.addEventListener('click' , ()=>{
    checkweather(inputBox.value);
});
