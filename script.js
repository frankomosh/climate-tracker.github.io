const wrapper = document.querySelector(".wrapper"),
    inputPart = document.querySelector(".input-part"),
    infoTxt = inputPart.querySelector(".info-txt"),
    inputField = inputPart.querySelector("input"),
    locationBtn = inputPart.querySelector("button"),
    weatherPart = wrapper.querySelector(".weather-part"),
    wIcon = weatherPart.querySelector("img"),
    arrowBack = wrapper.querySelector("header i");

let api;
inputField.addEventListener("keyup", e => {
    //if user pressed Enter btn and input value is not empty
    if (e.key == "Enter" && inputField.value != "") {
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) { // if browser supports geolocation API
        //geolocation.getCurrentPosition method is used to get the current position of the device
        //it takes three parameters: success, error and options. If everything is right then sucess
        //callback function will call else error callback function will call. 
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        alert("Your browser not support geolocation api");
    }
});
function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=094b3c61c39ce8237f2e4b22266e472b`;
    fetchData();
}

function onSuccess(position) {
    const { latitude, longitude } = position.coords; //getting lat and long of the user devices from coords obj
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=094b3c61c39ce8237f2e4b22266e472b`;
    fetchData();
}
