let celciusI = document.querySelector('#celcius > input');
let fehrenhite = document.querySelector('.fehrenhite > input');
let kelvin = document.querySelector('.kelvin > input');

let button = document.querySelector('.button button');

function roundnumber(number){
    return Math.round(number*100)/100;
}
celciusI.addEventListener('input',function(){
    let ctemp = parseFloat(celciusI.value);
    let ftemp = (ctemp*(9/5))+32;
    let ktemp = ctemp + 273.15;

    fehrenhite.value = roundnumber(ftemp);
    kelvin.value = roundnumber(ktemp);
})

fehrenhite.addEventListener('input',function(){
    let ftemp = parseFloat(fehrenhite.value);
    let ctemp = (ftemp-32)*5/9;
    let ktemp = ctemp + 273.15;

    celciusI.value = roundnumber(ctemp);
    kelvin.value = roundnumber(ktemp);
})

kelvin.addEventListener('input',function(){
    let ktemp = parseFloat(kelvin.value);
    let ctemp = ktemp - 273.15;
    let ftemp = (ctemp*(9/5))+32;

    fehrenhite.value = roundnumber(ftemp);
    celciusI.value = roundnumber(ctemp);
})

button.addEventListener('click',()=>{
    celciusI.value="";
    fehrenhite.value="";
    kelvin.value = "";
})