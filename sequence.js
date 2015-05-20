// global text opacity animation speed
var txtanmo = 500;


function fadeItemIn(i) {
  $(i).animate({opacity: 1}, txtanmo, 'swing');
}

function fadeItemOut(i) {
  $(i).animate({opacity: 0}, txtanmo, 'swing');
}


function initSequence() {
  $('h1, p, #btn-start').animate({opacity: '0'}, txtanmo, 'swing', function() {
    $('h1').css('display', 'none');
    $('h2').html('[ Getting your location ]');
    $('p').html('Locating ...');
    fadeItemIn('h2');
    window.setTimeout(function(){fadeItemIn('p');}, 500);
    
    // do the geo stuff here, so I have all variables and infos ready, i can throw the errors just in case and all I have to do now is flow through the rest of the sequence, all output set, just launch the clips at the end of the animation cycle
    
    
  });
}