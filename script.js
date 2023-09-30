let celciusInput=document.querySelector('#celcius > input')
let kelvinInput=document.querySelector('#kelvin > input')
let fahrenheitInput=document.querySelector('#fahrenheit > input')
let btn=document.querySelector('.button button')
function roundNumber(number){
    return Math.round(number*100)/100
}
celciusInput.addEventListener('input', function(){
    let cTemp= parseFloat(celciusInput.value)
    let kTemp= cTemp +273.15
    let fTemp= (cTemp*(9/5))+32
    fahrenheitInput.value=roundNumber(fTemp)
    kelvinInput.value=roundNumber(kTemp)
})
kelvinInput.addEventListener('input', function(){
    let kTemp= parseFloat(kelvinInput.value)
    let cTemp= kTemp - 273.15
    let fTemp= (kTemp-273.15)*(9/5)+32
   celciusInput.value=roundNumber(cTemp)
   fahrenheitInput.value=roundNumber(fTemp)
})
fahrenheitInput.addEventListener('input', function(){
    let fTemp= parseFloat(fahrenheitInput.value)
    let kTemp= (fTemp-32)*(5/9)+273.15
    let cTemp= (fTemp-32)*(5/9)
    celciusInput.value=roundNumber(cTemp)
    kelvinInput.value=roundNumber(kTemp)
})
btn.addEventListener('click', ()=>{
    celciusInput.value=""
    kelvinInput.value=""
    fahrenheitInput.value=""
})