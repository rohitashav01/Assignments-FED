/*
const submitButton = document.getElementById('submitB');
const input = document.getElementsByClassName('require');

if (input === ''){
    submitButton.disabled=true;
}
else{
    for(let i=0; i<input.length;i++){
        input[i].addEventListener("keyup",(e) => {
            const value=e.currentTarget.value;
            submitButton.disabled= false;
            //if (value === ""){
                //submitButton.disabled=true;
            //}
        });
    }
       
}
*/

/*

let inputs = document.getElementsByClassName('require'); // Enter your class name for a required field, this should also be reflected within your form fields.
let btn =  document.getElementById('submitB');
let isValid = true;
for (var i = 0; i < inputs.length; i++){
let changedInput = inputs[i];
if (changedInput.value.trim() === "" || changedInput.value === null){
isValid = false;
break;
}
}
btn.disabled = !isValid;
*/
function showTable() {
    $('.popup').hide();
    localStorage.setItem('hide', 'true'); //store state in localStorage
}

$(document).ready(function(){
    var hide = localStorage.getItem('hide');
    if(hide === 'true'){
         
    }
});

