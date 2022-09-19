let userPick= document.querySelector('.userPick');
const submit= document.querySelector('.submit');
const yourPick= document.querySelector('.yourPick');
let botPick= document.querySelector('.botpick');
let result= document.querySelector('.result');
const myPick= document.querySelector('.mypick');
const textField= document.querySelector('#textfield');

    const options=['rock', 'paper', 'scissors'];


    // function refresh(){
    //     userPick='';
    //     botPick=='';
    //     yourPick.textContent='';
    //     myPick.textContent='';
    //     result.textContent='';
        
    // }

    let counted=1;
    function random(){
        return Math.floor(Math.random() * options.length);
    }
    function ropas(){
        while (counted<4){
            playGame();
        }

    }
       
        
        function playGame(){

            userPick='';
            botPick='';

            
            botPick= options[random()];
            console.log(botPick);
            userPick=userPick.value;
            console.log(userPick);
            checkResult();
           
          
            // otherRounds();
            
            // userPick.value='';

            
            // if (submit.clicked>=5){

            // otherRounds();}
            
        }
    result.style.background='yellow';
    yourPick.style.background='orange';
    myPick.style.background='blue';


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
            // refresh();
            textField.value='';
            counted++;
        
    }
   




    function otherRounds(){
    
        submit.disabled=true;
        textField.disabled=true;
        yourPick.textContent='';
        myPick.textContent='';
        result.textContent='game over';
        result.style.background='red';
        resetButton=document.createElement('button');
        reset.textContent='Start Over';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', startAgain);


    }

    function startAgain(){
        
    }



    submit.addEventListener('click', ropas);
