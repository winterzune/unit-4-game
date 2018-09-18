// load website before starting
$(document).ready(function() {

    

// Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "unit-4-game/assets/pokemon-theme-song.mp3");
 // song Buttons
    $(".start-song").on("click", function() {
    audioElement.play();
 });
    $(".pause-song").on("click", function() {
    audioElement.pause();
 });})


 // battle counters
 var attack = 0;
 var health = 0;
 var rivalAttack = 0;
 var rivalHealth = 0;


 //clicking on rivals functions


