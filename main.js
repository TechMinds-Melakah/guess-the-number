let btn = document.getElementById('btn');
let output = document.getElementById("outputText");
let guessCount = document.getElementById("guessCount");

let number = [Math.floor(Math.random()*100)];
var attempts = 0;
var totalAttempts = 9;

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
     
    if (input == number){
        output.innerHTML = `You guessed right, your number was ${number}`;
    }
    else{     
        attempts +=1;
        attemptsLeft = totalAttempts--;   
        if(attempts==10){
            guessCount.innerHTML = "Game Over! You Lost, You are out of trials";
            
            setTimeout("location.reload(true);",1500);
        }else{
            guessCount.innerHTML = `Previous Guesses: ${attempts} <br> Guesses Remaining: ${attemptsLeft}`;
        }
        if(input < number){
            output.innerHTML = "Too low, Try again";
        };
        if(input > number){
            output.innerHTML = "Too High, Try again";
        } 
    }
   
   
   
  
})