let valorInicial = "";
let valorAnterior = "";
let suma = false;
let resta = false;
let multiplicacion = false;
let division = false;
const inicial = document.querySelector(".valorInicial")
const anterior = document.querySelector(".valorAnterior")
function agregarNumero(event) {
  const numero = event.target.dataset.numero;
  valorInicial += numero;
  inicial.textContent = valorInicial;
}

function limpiar(){
  valorInicial = "";
  valorAnterior = "";
  inicial.textContent = valorInicial;
  anterior.textContent = valorAnterior;
  suma = false;
  resta = false;
  multiplicacion = false;
  division = false;
}

function sumar(){
  valorAnterior = valorInicial;
  anterior.textContent = valorInicial;
  valorAnterior = Number(valorInicial);
  valorInicial = "";
  inicial.textContent = valorInicial;
  suma = true;
}

function restar(){
  valorAnterior = valorInicial;
  anterior.textContent = valorInicial;
  valorAnterior = Number(valorInicial);
  valorInicial = "";
  inicial.textContent = valorInicial;
  resta = true;
}

function multiplicar(){
  valorAnterior = valorInicial;
  anterior.textContent = valorInicial;
  valorAnterior = Number(valorInicial);
  valorInicial = "";
  inicial.textContent = valorInicial;
  multiplicacion = true;
}

function dividir(){
  valorAnterior = valorInicial;
  anterior.textContent = valorInicial;
  valorAnterior = Number(valorInicial);
  valorInicial = "";
  inicial.textContent = valorInicial;
  division = true;
}

function total(){
  if(suma === true){
    let numeroASumar = Number(valorInicial);
    const sumatoria = numeroASumar + valorAnterior;
    suma =false;
    const total = sumatoria.toString();
    valorInicial = "";
    inicial.textContent = valorInicial;
    anterior.textContent = total;
  }

  if(resta === true){
    let numeroASumar = Number(valorInicial);
    const sumatoria = valorAnterior - numeroASumar;
    resta =false;
    const total = sumatoria.toString();
    valorInicial = "";
    inicial.textContent = valorInicial;
    anterior.textContent = total;
  }

  if(multiplicacion === true){
    let numeroASumar = Number(valorInicial);
    const sumatoria = numeroASumar * valorAnterior;
    multiplicacion =false;
    const total = sumatoria.toString();
    valorInicial = "";
    inicial.textContent = valorInicial;
    anterior.textContent = total;
  }

  if(division === true){
    let numeroASumar = Number(valorInicial);
    const sumatoria = valorAnterior / numeroASumar;
    division =false;
    const total = sumatoria.toString();
    valorInicial = "";
    inicial.textContent = valorInicial;
    anterior.textContent = total;
  }
}
