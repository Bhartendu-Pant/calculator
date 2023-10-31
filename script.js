let input=document.getElementById('input');
let buttons=Array.from(document.getElementsByClassName('btn'));

let operator='';
let data=[];
//...... let previousInput = ''; 

buttons.map((button)=>{
    button.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;

        if(buttonText === "RESET"){
            input.innerHTML='';
            data=[];
            operator='';
           //,,,,  previousInput = '';
        }
        else if(buttonText === "DEL"){
            input.innerText=input.innerText.slice(0,-1);
        }
        else if(buttonText === "."){
           if(! input.innerText.includes(".")){
                input.innerText += buttonText;
           }
        }
        else if(buttonText === "="){
            data.push(input.innerText);
            let result = eval(data.join(' '));
            if (result % 1 === 0) {
                input.innerText = result;
              } else {
                input.innerText = result.toFixed(2);
              }
            
            data = [];
            operator = '';
          //......  previousInput = '';
        }
        else if(isNaN(parseInt(buttonText))){
            if(buttonText === "x"){
                operator = "*";
            }
            else
            operator = buttonText;
            data.push(input.innerText);
            data.push(operator);
             ///,,..... previousInput = input.innerText;
             input.innerText = '';
             
             
            
        }else{
           //..... previousInput += buttonText; 

            input.innerText += buttonText;
            
            
        }
    });
});