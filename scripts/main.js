let numeros = {
    su: 0,
    re: 0,
    di: 0,
    mu: 0,
};

const ingBtn = document.querySelector("#ing");
const sumarBtn = document.querySelector("#sumar");
const restarBtn = document.querySelector("#restar");
const dividirBtn = document.querySelector("#dividir");
const multiplicarBtn = document.querySelector("#multiplicar");

ingBtn.addEventListener("click", ingresarNum);
sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);
dividirBtn.addEventListener("click", dividir);
multiplicarBtn.addEventListener("click", multiplicar);

function ingresarNum(){
    num1 = parseInt(prompt('Ingrese un número'));
    num2 = parseInt(prompt('Ingrese otro número'));
}

function suma ()
{
    numeros.su = num1 + num2;
}
function sumar ()
{
    suma();
    let sum = document.getElementById("sm");
    let contSum = document.createTextNode(numeros.su);
    sum.appendChild(contSum);

}
console.log(numeros); 

function resta ()
{
    numeros.re = num1 - num2;
}
function restar ()
{
    resta();
    let res = document.getElementById("rs");
    let contRes = document.createTextNode(numeros.re);
    res.appendChild(contRes);
} 

function division () 
{
    if(num1 < num2){
        numeros.di = num2 / num1;
    }else if(num1 > num2){
        numeros.di = num1 / num2;
    }
}

function dividir (){
    division();
    let div = document.getElementById("dv");
    let contDiv = document.createTextNode(numeros.di);
    div.appendChild(contDiv);
}

function multi ()
{
    numeros.mu = num1 * num2;
}
function multiplicar ()
{
    multi();
    let mul = document.getElementById("ml");
    let contMul = document.createTextNode(numeros.mu);
    mul.appendChild(contMul);
} 


