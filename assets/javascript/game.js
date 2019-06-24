var randomNum;
var wins = 0;
var losses = 0;
var crystalNum;
var total = 0;

$(document).ready(function(){
    //display number that user should match
    var displayNum = $("#num").text(randomNum);

    //Create a variable to set equal to $("img")
    var crystalChosen = $("img");

    //generate a random number between 19 - 120
    function generateNum(){
        randomNum = Math.floor(Math.random() * (102)) + 19;
        console.log("Random number: ", randomNum);
    };
    
    //function to create a random number for the crystals
    function crystalNumber(){
        crystalNum = Math.floor(Math.random() * (12)) + 1;
        console.log("Crystal number: ", crystalNum);
        return crystalNum;
    };

    //function to set the random number to each crystal
    function setCrystalNumber(){
        crystalAmt = crystalNumber();
        
        //set an attribute for the image
        crystalChosen.attr("ammount", crystalAmt);

    };

    function updateStats(){
        $("#wins").text(wins);
        $("#losses").text(losses);
    };

    function resetGame(){
        updateStats();
        generateNum();
    };

    //on click function
    $("img").click(function(){
        setCrystalNumber();
        
        //display crystal amount based on which crystal was clicked
        //instead of using a bunch of if statements to determine which crystal was clicked I can use $(this) 
        
        console.log("this: ", $(this).attr("ammount"));
        var crystalScore = parseInt($(this).attr("ammount"));
        total += crystalScore;
        $("#totalScore").text(total);

        if(total === randomNum){
            //put this in a setTimeout so that it doesn't show up too soon
            alert("You win! Let's play again.");
            resetGame();
        }
    });

    generateNum();
   
});
