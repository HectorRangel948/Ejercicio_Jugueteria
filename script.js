payasoPeso=112;
muniecaPeso=75;

payasosVendidos=27;
muniecasVendidas=14;

pesoPaquetePayasos=payasosVendidos*payasoPeso;
pesoPaqueteMunieca=muniecasVendidas*muniecaPeso;
totalDelPedido =(pesoPaquetePayasos + pesoPaqueteMunieca)/1000;

console.log("Peso total del paquete:"+totalDelPedido+ " kg");