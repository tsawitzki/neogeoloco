// GEOLOCATION via https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
// check if geolocation API is abailable:
if ("geolocation" in navigator) {
  console.log("OK: Browser geolocation API is available");
} else {
  console.log("WARNING: Browser geolocation API is NOT available");
}




// call this function to start:
function geoFindMe() {
  // get element with ID "out" and save it as variable "output" to have an element to render text-output into frontend
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Sorry, Geolocation API is not supported by this browser.</p>";
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
      var daytime = "day";
      console.log("=> It’s Daytime");
    } else {
      var daytime = "night";
      console.log("=> It’s Nighttime");
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