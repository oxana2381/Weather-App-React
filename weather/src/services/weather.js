const API_KEY = '45372c6e989f73ed0d4e2057938044ae';

export function getWeatherByCity(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${API_KEY}`).then(rsp => rsp.json())
}

export function getForecast(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`).then(rsp => rsp.json())
}