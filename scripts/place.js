const temperature = 13;
const windSpeed = 19;

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return ((13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C");
    }
    else {
        return "N/A";
    }
}

const windChillElement = document.getElementById("windChill")
windChillElement.innerHTML = `<strong>Wind Chill: </strong>${calculateWindChill(temperature, windSpeed)}`;







