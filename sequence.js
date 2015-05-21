// global text opacity animation speed
var txtanmo = 500;


function fadeItemIn(i) {
  $(i).animate({opacity: 1}, txtanmo, 'swing');
}

function fadeItemOut(i) {
  $(i).animate({opacity: 0}, txtanmo, 'swing');
}




if ("geolocation" in navigator) {
  console.log("OK: Browser geolocation API is available");
} else {
  console.log("WARNING: Browser geolocation API is NOT available");
}





// geoFindMe();


var home_faded_out = false;

function fadeInLoadscreen() {
  if (home_faded_out === true) {
    console.log('all faded');
  }
}

function fadeHomeOut() {
  $('h1').fadeTo(txtanmo, 0);
  $('p').delay(200).fadeTo(txtanmo, 0);
  $('button').delay(400).fadeTo(txtanmo, 0, function(){
    $('h1').remove();
    $('#stage').prepend('<h2></h2>');    
    intro_out = true;
    fadeInLoadscreen();
  });
    

}

fadeHomeOut();











// do the geo stuff here, so I have all variables and infos ready, i can throw the errors just in case and all I have to do now is flow through the rest of the sequence, all output set, just launch the clips at the end of the animation cycle

// render coordinates

// stems howl init via vars

// play it

