const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const numbercount = document.querySelector(".number");
const resetBtn = document.querySelector(".reset")
let BtnValue = 0;
let decrease=function () {
    BtnValue--
    numbercount.innerHTML=BtnValue
}
minusBtn.addEventListener("click",decrease)
let increase=function () {
    BtnValue++
    numbercount.innerHTML=BtnValue
}
plusBtn.addEventListener("click", increase)







let other=function () {
    BtnValue = 0
    numbercount.innerHTML=BtnValue
}
resetBtn.addEventListener("click",other)
