
//initial state
const initialState = document.getElementById('wrong-entry');
const initialState2 = document.getElementById('correct-entry');
initialState.style.display = initialState2.style.display = 'none';


//generate the random number
function randomPinGenerator(){
    let max = 9998;
    let min = 1001;
    let result = Math.random() * (max - min) + min;
    let pin = Math.round(result);
    return pin;
}


//display the generated pin on screen
function pinDisplayer(){
    const pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = randomPinGenerator();
}


//show innerText
function digitDisplay(num){
    const digitDisplay = document.getElementById('digit-display');
    digitDisplay.value+=num;
}
digitDisplay.value='';


//backspace (<)
function backSpace(){
    var screen = document.getElementById('digit-display').value;
    var erase = screen.slice(0, screen.length - 1);
    document.getElementById('digit-display').value = erase;
}


//clean display (C)
function cleanDisplay(){
    document.getElementById('digit-display').value = '';
}


//submit button functionality and logics
const submitButton = document.getElementById('submit-pin');
let tryExists = document.getElementById('try-left').innerText;
let tryLeft = parseInt(tryExists);
submitButton.addEventListener('click',function(){

    const pinDisplay = document.getElementById('pin-display');
    const digitDisplay = document.getElementById('digit-display');
    // console.log(digitDisplay.value.length);
    if(pinDisplay.value.length<=0){
        alert('Pin is not generated');
        if(confirm('Want to Generate the Pin?')){
            pinDisplayer();
            
        }
    }
    else{
        const wrongState = document.getElementById('wrong-entry');
        const correctState = document.getElementById('correct-entry');
        const actionLeftText = document.getElementById('action-left-text');
    

        if(pinDisplay.value===digitDisplay.value){
            correctState.style.display='block';
            wrongState.style.display='none';
            actionLeftText.style.display='none';
            submitButton.style.display='none';
        }
         else{
            correctState.style.display='none';
            wrongState.style.display='block';
            tryLeft=tryLeft-1;
            actionLeftText.innerText = tryLeft +' try left' 
            if(tryLeft<=0){
                submitButton.style.display='none';
            }
        }
    }

})



