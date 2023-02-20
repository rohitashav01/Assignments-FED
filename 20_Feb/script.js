
const submitButton = document.getElementById('btn');
const input = document.getElementsByClassName('require1','require2','require3');

for(let i=0; i<input.length;i++){
    input[i].addEventListener("change",(e) => {
        console.log(e.currentTarget.value)
        const value=e.currentTarget.value;
        submitButton.disabled= false;
        if (value === ""){
            submitButton.disabled=true;
        }
    });       
}

const inputs = document.getElementsByClassName('requires1','requires2','requires3');

for(let i=0; i<inputs.length;i++){
    inputs[i].addEventListener("change",(e) => {
        console.log(e.currentTarget.value)
        const value=e.currentTarget.value;
        submitButton.disabled= false;
        if (value === ""){
            submitButton.disabled=true;
        }
    });       
}
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
