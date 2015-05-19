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

    // fetch local time to differ between nighttime or daytime for choice of music:
    var localtime = new Date();
    var hourofday = localtime.getHours();
    var minuteofhour = localtime.getMinutes();
    // compile hours+minutes to timestamp:
    var timetxt = hourofday + "." + minuteofhour;
    // convert timestamp to integer:
    var time = Number(timetxt);
    var daytime = "not yet defined";
    console.log("Hour of day: " + hourofday);
    console.log("Minute of hour: " + minuteofhour);
    console.log("=> Time as String: " + timetxt);
    console.log("=> Time as Integer: " + time);
    
    // define wether it’s daytime or nighttime and save in variable:
    if (time >= 0.00 && time <= 5.59) {
      daytime = "night";
      console.log("=> It’s Nighttime");
    } else if (time >= 6.00 && time <= 11.59) {
      daytime = "morning";
      console.log("=> It’s Morning");
    } else if (time >= 12.00 && time <= 17.59) {
      daytime = "afternoon";
      console.log("=> It’s Afternoon");
    } else if (time >= 18.00 && time <= 23.59) {
      daytime = "evening";
      console.log("=> It’s Evening");
    } else {
      console.log("I have no clue what daytime it is.");
    };
    // check content of "daytime" variable:
    console.log(daytime);
    

    // render coordinates as text into "output":
    output.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';
    
    // generate a daytime dependent stem constellation:
    if (daytime === "day") {
      console.log("It’s daytime, so I‘ll ...");
    }

  };

  // mandatory error function
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };
  
  // while loading phase, animation here later:
  output.innerHTML = "<p>Locating…</p>";

  // the actual API call:
  navigator.geolocation.getCurrentPosition(success, error);

}

geoFindMe();