
let display        =document.querySelector('.display');
let numberButtons  =document.querySelectorAll('.numbers');
let symbols        =document.querySelectorAll('.symbols');
let multiBtn       =document.querySelector('.symbols_multi');
let equalBtn       =document.querySelector('.equals');
let deleteBtn      =document.querySelector('.delete');
let allClearBtn    =document.querySelector('.ac');
let previousOperand=document.querySelector('.previous-operand');
let currentOperand =document.querySelector('.current-operand');

let history=document.querySelector('.historydisplay');

//display numbers
for(let i=0;i<numberButtons.length;i++){
    numberButtons[i].addEventListener('click',event=>{
        if(isFinite (previousOperand.textContent)){
            previousOperand.textContent=""  
        }
       
        if(numberButtons[i].textContent=="."){
            //let expression=currentOperand.textContent;
            // Repeate this check for all the operators
            if(!currentOperand.textContent.includes('.')){
                currentOperand.textContent+=numberButtons[i].textContent;
            }

        }
        else {
            
            currentOperand.textContent+=numberButtons[i].textContent;
        }
         
    });
    
}

for(let i=0;i<symbols.length;i++){
    symbols[i].addEventListener('click',event=>{

        if(!currentOperand.textContent==""){
           
            previousOperand.textContent+=currentOperand.textContent;
            previousOperand.textContent+=symbols[i].textContent;
            currentOperand.textContent="";
        }  
        
    });
}

//when you click all clear button it removes the text content inside the display
allClearBtn.addEventListener('click',event=>{
    currentOperand.textContent="";
    previousOperand.textContent="";  
});

//multiplication operation
multiBtn.addEventListener('click',event=>{
    
    previousOperand.textContent+=currentOperand.textContent;
    if(!currentOperand.textContent==""){
        if(!previousOperand.textContent==""){
            previousOperand.textContent+="*";
            currentOperand.textContent="";
        }
    }
  
})

//function that evaluates the digit and return result
equalBtn.addEventListener('click',event=>{
    
    solve()
    displayhistory()
    previousOperand.textContent="";
    previousOperand.textContent=currentOperand.textContent;
    currentOperand.textContent="";
});

function solve(){
    previousOperand.textContent+=currentOperand.textContent;
    let expression=previousOperand.textContent;
    let solution=eval(expression);
    currentOperand.textContent=solution;

}
function displayhistory(){
    
    history.textContent+=(previousOperand.textContent+'='+currentOperand.textContent+'\n' ); 
}


    






