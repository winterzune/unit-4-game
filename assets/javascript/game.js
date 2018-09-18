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
 });


 // battle counters
 var attack = 0;
 var health = 10;
 var rivalAttack = 0;
 var rivalHealth = 10;

// pokemons

//when selection from previous page is made, store in var? so website remembers your choice of pokemon 
//when choice is made, send said pokemon to the empty img tag (#chosenPokemon)




//var charmander = $('<img/>');

               //myImage.attr('width', 300);
               //myImage.attr('height', 300);
               //myImage.attr('class', "groupMediaPhoto");
               //myImage.attr('src', /assets/images/charback.gif);



 //clicking on rivals functions
//brock
 $("#brock").on("click", function() {
    $("#misty").hide();
    $("#gary").hide();
//create img tag that adds onix to the html(on #rivalPokemon)   
    
 });
//gary
 $("#gary").on("click", function() {
    $("#misty").hide();
    $("#brock").hide();
 //create img tag that adds eevee to the html(on #rivalPokemon)   
 });
//misty
 $("#misty").on("click", function() {
    $("#brock").hide();
    $("#gary").hide();
 //create img tag that adds staryu to the html(on #rivalPokemon)      
 });


//pokemon choice


$("#charmander").on("click", function() {
 $("#squirtle").hide();
 $("#bulbasaur").hide();

});
$("#squirtle").on("click", function() {
    $("#charmander").hide();
    $("#bulbasaur").hide();
});
 $("#bulbasaur").on("click", function() {
    $("#squirtle").hide();
    $("#charmander").hide(); 
});       
 //when attack button is pressed
 //random number is generated to go through different options + alert of what happened
//array of options 

//attack button
//var attackOptions {
   //attack1: "You caused 5HP of damage";
   //attack2: "You caused 1HP of damage";
  // attack3: "Critical Hit! You won!";}

//when defense button is pressed
//random number is generated to go through different options + alert of what happened
//array of options   
//defense button
//var counterAttack {
    //counter1: "You lost 5HP";
   // counter2: "You lost 1HP";
    //counter3: "Critical Hit! You lost!";

//if randobtn == attack1 {
    //rivalHealth -5//
//}

//if randobtn == attack2 {
    //rivalHealth -1//
//}

//if randobtn == attack3 {
    //rivalHealth -10
//}

//if randobtn == counter1 {
   // Health -5
//}

//if randobtn == counter2 {
  //  Health -1
//}

//if randobtn == counter3 {
  //  Health -10
//}



// loss or win

//if (health == -1) {

  //  alert("You Lost!")

//};

//if (rivalHealth == -1) {
  //  alert("You Won!")
//}



})

//gotta add play again button
//gotta add give up button
//add visible counters