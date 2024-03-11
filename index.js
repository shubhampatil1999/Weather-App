const apikey = "eb76e0ec0df7c499f3ddcc690aabcce9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn  = document.querySelector(".search button");
const weatherimg = document.querySelector(".weather-icon");

searchbtn.addEventListener("click", () =>{
    checkWaether(searchBox.value);
})

async function checkWaether(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }

    var data =await response.json();

    console.log(data);
    weatherInfo(data);

}

const weatherInfo = (data) =>{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    weatherimgupdt(data);
}

const weatherimgupdt = (data) => {
    if(data.weather[0].main == "Clouds"){
        weatherimg.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherimg.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherimg.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherimg.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherimg.src = "images/mist.png";
    }
    else{
        weatherimg.src = "images/clouds.png"
    }
    document.querySelector(".error").style.display = "none";
}