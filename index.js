(async () => {
  const result = await fetch(
    "https://cors-anywhere.herokuapp.com/" +
      "https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/46.8625,103.8467"
  );
  const timer = (unix_timestamp) => {
    unix_timestamp = unix_timestamp + 1;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();

    return hours + ":" + minutes.substr(-2);
  };
  const faranheit = (temp) => {
    return (5 / 9) * (temp - 32);
  };
  const library = {
    temp: 20,
    status: "Cloudy",
  };
  const bata = await result.json();
  const xmain = document.getElementById("xmain");
  document.getElementById("temp").innerHTML =
    Math.trunc(faranheit(bata.currently.temperature)) + "°C";
  document.getElementById("status").innerHTML = bata.currently.summary;
  document.getElementById("hour").innerHTML = timer(bata.currently.time);
  document.getElementById("city_name").innerHTML = bata.timezone;
  document.getElementById("weekend").innerHTML = new Date()
    .toString()
    .slice(0, 16);
  const hour_index = timer(bata.currently.time).slice(0, 2);
  if (hour_index >= 4 && hour_index < 10) {
    xmain.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/4162156.png')";
  } else if (hour_index >= 10 && hour_index < 16) {
    xmain.style.backgroundImage =
      "url('https://cdna.artstation.com/p/assets/images/images/028/105/752/large/vinz-pascua-midday.jpg?1593501654')";
  } else if (hour_index >= 16 && hour_index < 18) {
    xmain.style.backgroundImage =
      "url('https://stringfixer.com/files/585741429.jpg')";
  } else if (hour_index >= 18 && hour_index < 22) {
    xmain.style.backgroundImage =
      "url('https://images.hdqwalls.com/download/firewatch-sd-2560x1440.jpg')";
  } else if (hour_index >= 22 || hour_index < 4) {
    xmain.style.backgroundImage = "url('https://i.redd.it/oor2svn052l61.png')";
  }
})();
