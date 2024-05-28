var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var randomChosenColour;
var level=0;
function nextSequence()
{
    userClickedPattern=[];
    var randomNumber = Math.floor(Math.random() * 3);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    $("h1").text("level "+level);
    level=level + 1;

}

$(".btn").click(function(e){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userChosenColour);
});
function playSound(name){
    var audio = new Audio('./sounds/'+name+'.mp3');
    audio.play();

}
function animatePress(name){
    $("#"+name).addClass("pressed");
    setTimeout(function() {
        $("#"+name).removeClass("pressed");
    }, 100);      
}

$(document).keypress(function(event){
    if (level == 0){
        nextSequence();
    }
    });
function checkAnswer(userChosenColour)
{
    if(gamePattern[userClickedPattern.length - 1]==userClickedPattern[userClickedPattern.length - 1])
       {
        if (userClickedPattern.length === gamePattern.length){
        playSound(userChosenColour);
        setTimeout(
            function() 
            {
                nextSequence();
            }, 1000);
       } }

    else
    {
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        gameOver();
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        
    }
        
}
    
function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200); 
}

function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    randomChosenColour=0;
}
 