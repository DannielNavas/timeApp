const $ = (selector) => document.querySelector(selector);
function getPositionUser(user) {
    try {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getDataAPI(position);
            },
            (error) => console.log(error)
        );
    } catch (error) {}
}

async function getDataAPI(position) {
    console.log(position);
    try {
        await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m`
        )
            .then((response) => response.json())
            .then((data) => pirntScreen(data));
    } catch (error) {
        console.log(error);
    }
}

function pirntScreen(response) {
    const tiempo = $("#time");
    tiempo.innerHTML = response.timezone;
}

getPositionUser();

//
