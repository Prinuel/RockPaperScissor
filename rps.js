let userPick= document.querySelector('.userPick');
const submit= document.querySelector('.submit');
const yourPick= document.querySelector('.yourPick');
let botPick= document.querySelector('.botpick');
let result= document.querySelector('.result');
const myPick= document.querySelector('.mypick');

const options=['rock', 'paper', 'scissors'];


// result='';
function random(){
    return Math.floor(Math.random() * options.length);
}


function playGame(){
    botPick= options[random()];
    console.log(botPick);
    userPick=userPick.value;
    checkResult(); 
     
}

function checkResult(){
    yourPick.textContent='You picked:' + ' ' + userPick;
    myPick.textContent='I picked:'  + ' ' + botPick;
    if(userPick==botPick){
        result.textContent= `oh no it's a tie`;
    }
    else if(userPick=='rock' && botPick=='paper'){
        result.textContent='bottalicious sorry human';
     }
        else if (userPick=='rock' && botPick=='scissors'){
        result.textContent='you are so smart wish i was human';
        }
        else if(userPick=='paper' && botPick=='rock'){
        result.textContent='you are so smart wish i was human';
        }
        else if(userPick='scissors' && botPick=='rock'){
        result.textContent='bottalicious sorry human';
        }
        else if(userPick='paper' && botPick=='scissors'){
            result.textContent='bottalicious sorry human';
            }
        else if (userPick='scissors' && botPick=='paper'){
                result.textContent='you are so smart wish i was human';
                }
        else{
            result.textContent='please check if you have the correct input';
        }
}

submit.addEventListener('click', playGame);
