// load website before starting
$(document).ready(function() {

    

// Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/pokemon-theme-song.mp3");
 // song Buttons
    $(".start-song").on("click", function() {
    audioElement.play();
 });
    $(".pause-song").on("click", function() {
    audioElement.pause();
 });

 var attack = 0;
 var health = 10;
 var rivalAttack = 0;
 var rivalHealth = 10;
 
 health = "Your HP: " + health
 rivalHealth = "Rival HP: " + rivalHealth
 
 $("#health").html(health)
 $("#rivalHealth").html(rivalHealth)
 
 
$("#reset").on("click", function() {
    location.reload();
});
// pokemons

//when selection from previous page is made, store in var? so website remembers your choice of pokemon 
//when choice is made, send said pokemon to the empty img tag (#chosenPokemon)



 //clicking on rivals functions
//brock
 $("#brock").on("click", function() {
    $("#misty").hide();
    $("#gary").hide();
//create img tag that adds onix to the html(on #rivalPokemon)   
$("#rivalPokemon").html('<span id="rivalPokemon"><img src="/assets/images/onix.gif"></span>');
//so that the rival pokemon moves to the right side of the screen  
$("#rivalPokemon").animate({ top: "+=200px" }, "normal");       
 });

//gary
 $("#gary").on("click", function() {
    $("#misty").hide();
    $("#brock").hide();
 //create img tag that adds gengar to the html(on #rivalPokemon)   
 $("#chosenPokemon").html('<span id="rivalPokemon"><img src="/assets/images/gengar.gif"></span>');
 //so that the chosen pokemon moves to the right side of the screen  
 $("rivalPokemon").animate({ top: "+=200px" }, "normal");   
 });

//misty
 $("#misty").on("click", function() {
    $("#brock").hide();
    $("#gary").hide();
//create img tag that adds staryu to the html(on #rivalPokemon)   
    $("#chosenPokemon").html('<span id="rivalPokemon"><img src="/assets/images/starmie.gif"></span>');
 //so that the chosen pokemon moves to the right side of the screen  
 $("#rivalPokemon").animate({ top: "+=200px" }, "normal");   
 });


//pokemon choice
//PKM onscreen order: charmander, bulbasaur, squirtle

$("#chosenPokemon").on("click", function() {
$("#middlePokemon").hide();
$("#rivalPokemon").hide();
 //so the back of the pokemon is inserted into the html
$("#chosenPokemon").html('<span><img id="chosenPokemon" src="/assets/images/charback.gif"></span>');
 //so that said image moves to the left side of the game
 //$("#charmander.animate")({ top: "+=200px" }, "normal");

});

$("#rivalPokemon").on("click", function() {
    $("#rivalPokemon").hide();
    $("#middlePokemon").hide();
//so the back of the pokemon is inserted into the html
$("#chosenPokemon").html('<span id="chosenPokemon"><img src="/assets/images/squirtleback.gif"></span>');
//so that said image moves to the left side of the game
//$("squirtle").animate({ top: "+=200px" }, "normal");
});

 $("#middlePokemon").on("click", function() {
    $("#middlePokemon").hide();
    $("#rivalPokemon").hide(); 
//so the back of the pokemon is inserted into the html
$("#chosenPokemon").html('<span id="chosenPokemon"><img src="/assets/images/bulbaback.gif"></span>');
//so that said image moves to the left side of the game
//$("bulbasaur").animate({ top: "+=200px" }, "normal");
});       


 


//attack button
$("#attack").on("click", function() {

// battle counters
var attack = 0;
var health = 10;
var rivalAttack = 0;
var rivalHealth = 10;

health = "Your HP: " + health
rivalHealth = "Rival HP: " + rivalHealth

$("#health").html(health)
$("#rivalHealth").html(rivalHealth)


//array of options 
var attackOptions = ["You caused 5HP of damage","You caused 1HP of damage", "Critical Hit! You won!", "You lost 5HP",
"You lost 1HP", "Critical Hit! You lost!"]

//random number is generated to go through different options + alert of what happened
var random = Math.floor(Math.random() * attackOptions.length);

alert(attackOptions[random]);
console.log(random);



if (random === 0) {
    rivalHealth = rivalHealth - 5;
}


else if (random === 1) {
    rivalHealth = rivalHealth - 1;
}

else if (random === 2) {
    rivalHealth = rivalHealth - 10;
}

else if (random === 3) {
   Health = health - 5;
}

else if (random === 4) {
  Health = health - 1;
}

else if (random === 5) {
  Health = health - 10;
}

// loss or win

if (health === -1) {

  alert("You Lost!")

};

if (rivalHealth === -1) {
  alert("You Won!")
}

});
});