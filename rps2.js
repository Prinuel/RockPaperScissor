const  yourPick= document.querySelector('.yourPick');
const myPick = document.querySelector ('.mypick');
const result= document.querySelector('.result');
let userPick= document.querySelector('.userPick')
const textField= document.querySelector('#textfield');
const submit= document.querySelector('.submit');
const end= document.querySelector('.end');
const finalResult= document.querySelector('.final');

const options=  ['rock', 'paper', 'scissors'];
function random(){
    return Math.floor(Math.random() * options.length);
}
let botPick;
let myChoice;
let resetButton;
let botScore=parseInt(0);
let humanScore=parseInt(0);

counter=1;
  function playPlay(){
    if (counter<4){
        letsPlay();

    }
    else if(counter==4){
        letsPlay();
        gameOver();
    }
}
        
    

    function letsPlay(){
        myChoice='';
        botPick='';
        yourPick.textContent='';
        myPick.textContent='';
        result.textContent='';
        yourPick.style.background='orange';
        myPick.style.background='blue';
        result.style.background='yellow';
        playGame();
    }

    function playGame(){
        myChoice=userPick.value.toLowerCase();
        botPick=options[random()];
        yourPick.textContent='Hey Human you picked' + ' ' + myChoice;
        myPick.textContent='This great bot picked' + ' ' + botPick;
        checkResult();
    }

    function checkResult(){
        if( myChoice==botPick){
            result.textContent= `oh no it's a tie`;
            botScore+=parseInt(0);
            humanScore+=parseInt(0);
        
        }
        else if( myChoice=='rock' && botPick=='paper'){
            result.textContent='bottalicious sorry human';
            botScore+=parseInt(1);
            humanScore+=parseInt(0);
        }
            else if ( myChoice=='rock' && botPick=='scissors'){
            result.textContent='you are so smart wish i was human';
            botScore+=parseInt(0);
            humanScore+=parseInt(1);
            }
            else if( myChoice=='paper' && botPick=='rock'){
            result.textContent='you are so smart wish i was human';
            botScore+=parseInt(0);
            humanScore+=parseInt(1);
            }
            else if( myChoice=='scissors' && botPick=='rock'){
            result.textContent='bottalicious sorry human';
            botScore+=parseInt(1);
            humanScore+=parseInt(0);
            }
            else if( myChoice=='paper' && botPick=='scissors'){
            result.textContent='bottalicious sorry human';
            botScore+=parseInt(1);
            humanScore+=parseInt(0);
                }
            else if ( myChoice=='scissors' && botPick=='paper'){
            result.textContent='you are so smart wish i was human';
            botScore+=parseInt(0);
            humanScore+=parseInt(1);
                    }
            else {
                result.textContent='please check if you have the correct input';
                result.style.background='red';
                botScore+=parseInt(0);
                humanScore+=parseInt(0);
                counter=0; 
            }
            counter++;
            userPick.value='';       
    }  

    function gameOver(){
                submit.disabled=true;
                textField.disabled=true;
                end.style.background='red';
                end.textContent='Game Over !!!';
                resetButton= document.createElement('button');
                resetButton.textContent='Play Again';
                document.body.appendChild(resetButton);
                resetButton.addEventListener('click', resetGame);
                if(botScore>humanScore){
                    finalResult.textContent='bot wins overall' + ' ' + botScore + ' ' + 'out of 4 rounds';
                 }
                 else if (botScore<humanScore){
                     finalResult.textContent='human wins overall' + ' ' + humanScore + ' ' + 'out of 4 rounds';
                 }
                 else{
                     finalResult.textContent='it is a tie damn!!!'
                 }
                 finalResult.style.background='pink';
                 // botScore +=botScore;
                 console.log(botScore);
                 // humanScore +=humanScore;
                 console.log(humanScore);
            }

    function resetGame(){
        counter=1;
        submit.disabled=false;
        textField.disabled=false;
        // end.style.background='red';
        end.textContent='';
        yourPick.textContent='';
        myPick.textContent='';
        result.textContent='';
        resetButton.parentNode.removeChild(resetButton);
        
        
        
    }
 submit.addEventListener('click', playPlay);
        

