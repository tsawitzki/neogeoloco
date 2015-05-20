// GEOLOCATION via https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
// check if geolocation API is abailable:
if ("geolocation" in navigator) {
  console.log("OK: Browser geolocation API is available");
} else {
  console.log("WARNING: Browser geolocation API is NOT available");
}






// call this function to start:
function geoFindMe() {
  
  // define output areas in DOM
  var logo = document.getElementsByTagName("h1")[0];
  var headline = document.getElementsByTagName("h2")[0];
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
    
    // define wether it’s daytime or nighttime and create a stem combination and filenames accordingly:
    console.log("OK: Creating a stem combination according to time and Lon/Lat now ...");
    var stem_rtm = String();
    var stem_mld = String();
    if (time >= 0.00 && time <= 5.59) {
      daytime = "night";
      stem_rtm = "rtm60_"+Math.round(longitude)+".wav";
      stem_mld = "mld60_"+Math.round(latitude)+".wav";
    } else if (time >= 6.00 && time <= 11.59) {
      daytime = "morning";
      stem_rtm = "rtm120_"+Math.round(longitude)+".wav";
      stem_mld = "mld60_"+Math.round(latitude)+".wav";
    } else if (time >= 12.00 && time <= 17.59) {
      daytime = "afternoon";
      stem_rtm = "rtm120_"+Math.round(longitude)+".wav";
      stem_mld = "mld120_"+Math.round(latitude)+".wav";
    } else if (time >= 18.00 && time <= 23.59) {
      daytime = "evening";
      stem_rtm = "rtm60_"+Math.round(longitude)+".wav";
      stem_mld = "mld120_"+Math.round(latitude)+".wav";
    } else {
      console.log("WARNING: Error defining daytime and creating filename!");
    }
    console.log("=> It’s " + daytime + ", so loading these according to Lon/Lat now: " + stem_rtm + " + " + stem_mld);

    // creat new Howl.js objects for generated filenames and play them:
    var rtm = new Howl({
      urls: ["sound/"+stem_rtm],
      autoplay: false,
      loop: true,
      volume: 0.0,
      onend: function() {
        // 
      },
      onload: function () {
        console.log("OK: Rhythm stem loaded");
      }
    });
    var mld = new Howl({
      urls: ["sound/"+stem_mld],
      autoplay: false,
      loop: true,
      volume: 0.0,
      onend: function() {
        // 
      },
      onload: function () {
        console.log("OK: Melody stem loaded");
      }
    });
    
    
    // play it:
    rtm.play().fadeIn(0, 5000, function(){
        // play 2nd stem a little delayed:
        mld.play().fadeIn(0, 15000);
    });

    
    // render coordinates as text into "output":
    output.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';
    
  }

  // mandatory error function
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
  
  // while loading phase, animation here later:
  output.innerHTML = "<p>Getting your location ...</p>";

  // the actual API call:
  navigator.geolocation.getCurrentPosition(success, error);

}