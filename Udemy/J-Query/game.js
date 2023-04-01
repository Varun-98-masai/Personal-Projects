const gamePattern = [];

const buttonColours = ["red", "blue", "green", "yellow"];


const userClickedPattern = [];

$(".btn").click(function() {
    var userChoseColour = $(this).attr("id");

    userClickedPattern.push(userChoseColour);
})
function nextSequence(){
    var randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 4)
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    audio.play();
}

