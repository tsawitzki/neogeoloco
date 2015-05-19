// HOWLER TEST

// Stems setup
var stem1 = new Howl({
  urls: ['./sound/stem_ahh.wav'],
  autoplay: false,
  loop: true,
  volume: 1.0,
  onend: function() {
    console.log("played stem 1");
  },
  onload: function () {
    console.log("stem 1 loaded");
  }
});

var stem2 = new Howl({
  urls: ['./sound/stem_cha.wav'],
  autoplay: false,
  loop: true,
  volume: 1.0,
  onend: function() {
    console.log("played stem 2");
  },
  onload: function () {
    console.log("stem 2 loaded");
  }
});

var stem3 = new Howl({
  urls: ['./sound/stem_tck.wav'],
  autoplay: false,
  loop: true,
  volume: 1.0,
  onend: function() {
    console.log("played stem 3");
  },
  onload: function () {
    console.log("stem 3 loaded");
  }
});



// Button geo based

var joker = "...";

$('#stemplay').on('click' function() {
    stem.play();
});




// Button primitive logic
$('#stem1play').on('click', function(){
    stem1.play();
});
$('#stem2play').on('click', function(){
    stem2.play();
});

$('#stem3play').on('click', function(){
    stem3.play();
});