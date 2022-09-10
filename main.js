const bill = document.getElementById('bill-amount')
const numberOfPeople = document.getElementById('nop-amount')
const tipAmountValue = document.getElementById('tipAmountPerson')
const totalAmountValue = document.getElementById('totalAmountPerson')
const tipBtns = document.querySelectorAll('.tip')
const error = document.querySelector('.error')
const resetBtn = document.querySelector('.reset')
const custom = document.querySelector('.custom')

let tipValue = 0.1;
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

function handleClick(event){
    tipBtns.forEach(btn => {
        //clear active state
        btn.classList.remove('btn-active');

        //set active state 
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
            
        }
        setTimeout(() => {
            btn.classList.remove('btn-active')
        }, 2000);
    });
    
    
    sum(billValue, tipValue , peopleValue)
    

  
}

let customValue = 0.0;
custom.addEventListener('input' , setCustomValue)
function setCustomValue(){
    customValue = parseFloat(custom.value) / 100
    sum(billValue, customValue , peopleValue)
}


let billValue = 0.0;
bill.addEventListener('input' , setBillValue)
function setBillValue(){
    billValue = parseFloat(bill.value)
    sum(billValue, tipValue , peopleValue)
}

let peopleValue = 1;
numberOfPeople.addEventListener('input' , setPeopleValue)
function setPeopleValue(){
    peopleValue = parseFloat(numberOfPeople.value)
    sum(billValue, tipValue , peopleValue)


    if(peopleValue <= 0){
        error.classList.add('error-show')
    }
    setTimeout(() => {
        error.classList.remove('error-show')
    }, 4000);

}

function sum(x, y , z){

    let tipAmount = (x * y) / z
    let totalAmount = (x + (x*y)) / z
    
    tipAmountValue.innerHTML = "$" + tipAmount.toFixed(2) 
    totalAmountValue.innerHTML = "$" + totalAmount.toFixed(2) 
} 

resetBtn.addEventListener('click', reset)

function reset(){
    bill.value = 0.0
    setBillValue()
    numberOfPeople.value = 1
    setPeopleValue()
    tipBtns[1].click()
}

