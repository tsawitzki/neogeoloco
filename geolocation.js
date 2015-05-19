// GEOLOCATION via https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
// so wird abgefragt ob der Browser = navigator die API kennt
if ("geolocation" in navigator) {
  console.log("browser geolocation API is available");
} else {
  console.log("browser geolocation API is NOT available");
}




// passiert wenn der button geclickt wird:
function geoFindMe() {
  // hol dir das element mit der ID "out" und speicher es in der variable "output" als container fürs ergebnis
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation API is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var timestampunix = position.timestamp;

    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
    console.log("UNIX Time acc. to Geolocation: " + timestampunix);


    // get local time to differ between nighttime or daytime for choice of music
    var localtime = new Date();
    var hourofday = localtime.getHours();
    console.log("Hour of day: " + hourofday);
    // define wether it’s daytime or nighttime
    if (hourofday <= 22 && hourofday >= 8) {
      console.log("It’s Daytime");
    } else {
      console.log("It’s Nighttime");
    }



    // render coordinates as text
    output.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';

    // var img = new Image();
    // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
    // output.appendChild(img);


  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);

}