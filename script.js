
const payasoPeso=112;
const muniecaPeso=75;

let payasosVendidos=prompt("Cantidad de payasos vendidos");
let muniecasVendidas=prompt("Cantidad de muñecas vendidas");

function calcularPesoTotal(){

    var pesoPaquetePayasos = payasosVendidos*payasoPeso;

    var pesoPaqueteMunieca = muniecasVendidas*muniecaPeso;
    
    totalDelPedido =(pesoPaquetePayasos + pesoPaqueteMunieca)/1000;

    return totalDelPedido;

}

var resultado = calcularPesoTotal();

console.log("Peso total del paquete:"+resultado+ " kg");