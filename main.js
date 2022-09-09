const billAmount = document.getElementById('bill-amount')
const tipAmount = document.querySelector('.select-tip')




console.log(tipAmount);

billAmount.addEventListener('input' , print)
tipAmount.addEventListener('click' , e)

function e() {
    console.log(tipAmount.value);
}