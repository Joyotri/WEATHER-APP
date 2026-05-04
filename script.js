const apiKey = "0c80b2b56f1943ada19100744230103";

async function getWeather() {
  const city = document.getElementById("inputCity").value || "Kolkata";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      alert("Location not found!");
      return;
    }

    document.getElementById("city").innerText =
      data.location.name + ", " + data.location.country;

    document.getElementById("temp").innerText =
      data.current.temp_c + "°C";

    document.getElementById("feels").innerText =
      "Feels like " + data.current.feelslike_c + "°C";

    document.getElementById("icon").src =
      "https:" + data.current.condition.icon;

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

window.onload = getWeather;