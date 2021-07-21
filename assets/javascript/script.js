var currentSearch = $('#searchTerm');
var searchButton = $('#searchBtn');
var recentSearches = $('#searchHistory');
var currentWeatherCity = $('#currentCity');
var cityForecast = $('#forecast');

searchButton.onClick = searchSubHandler;


function searchSubHandler(event) {
    event.preventDefault();
    let search = currentSearch.value.trim();
    console.log(search);
    //getWeather(search);
};


function getWeather (search) {
    // const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + '&appid=' + apiKey;
    const apiKey = "7e265aa18fe4cc94b7554c10023cca4a";

    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`

    fetch(apiURL)
        .then(function (response) {
        if(response.ok) {
            response.json().then(function (data) {
                console.log(data);
        });

        };
    
    });
};


