// Ejercicio 1

var orderDate = document.getElementById("order_date");
var deliveryDate = document.getElementById("delivery_date");
var deliveryFee = document.getElementById("delivery_fee");
var selectElement = document.getElementById("shipments");

var codeObj=document.querySelectorAll("code.javascript");
eval(codeObj[0].textContent)
eval(codeObj[1].textContent)

console.log(codeObj[1].textContent);
selectElement.addEventListener("change", function () {
  var selectedValue = selectElement.value;
  var fechaActual = new Date();
  var fechaFormateada = fechaActual.getFullYear() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getDate();

  if (selectedValue === "standard") {
    fechaActual.setDate(fechaActual.getDate() + shipments.standard.leadTime);
    deliveryFee.textContent = shipments.standard.fee.toFixed(2);
  } else if (selectedValue === "express") {
    fechaActual.setDate(fechaActual.getDate() + shipments.express.leadTime);
    deliveryFee.textContent = shipments.express.fee.toFixed(2);
  }

  var fechaEntregaFormateada = fechaActual.getFullYear() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getDate();
  orderDate.textContent = fechaFormateada;
  deliveryDate.textContent = fechaEntregaFormateada;
  
});

// Ejercicio 2

var productInputs = document.querySelectorAll("input[name='product']");
productInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    // Obtiene el valor del radio button seleccionado
    var telefonoSelecc = this.value;

    actualizarPhone(telefonoSelecc);
  });
});

function actualizarPhone(telefonoSelecc) {
  var productInfo = phones[telefonoSelecc];

  var price = Number(productInfo.price);

  document.getElementById("phone_name").innerHTML = productInfo.name;
  document.getElementById("phone_price").innerHTML = productInfo.currency + " " + price.toFixed(2);
  document.getElementById("phone_image").src = productInfo.imageUrl;
}

// Ejercicio 3

let cronometroOn = false;
let startTime;
let tiempoTransc = 0;

const startStopButton = document.getElementById("start_stop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", function () {
  if (cronometroOn) {
    // Detener el cronómetro
    cronometroOn = false;
    clearInterval(timer);
    startStopButton.textContent = "Iniciar";
  } else {
    // Iniciar el cronómetro o reanudarlo
    cronometroOn = true;
    startTime = Date.now() - tiempoTransc;
    timer = setInterval(actualizarTiempo, 10);
    startStopButton.textContent = "Parar";
  }
});

resetButton.addEventListener("click", function () {
  cronometroOn = false;
  clearInterval(timer);
  tiempoTransc = 0;
  actualizarPantalla(0);
  startStopButton.textContent = "Iniciar";
});

function actualizarTiempo() {
  const currentTime = Date.now();
  tiempoTransc = currentTime - startTime;
  actualizarPantalla(tiempoTransc);
}

function actualizarPantalla(time) {
  const hours = Math.floor(time / 3600000);
  time %= 3600000;
  const minutes = Math.floor(time / 60000);
  time %= 60000;
  const seconds = Math.floor(time / 1000);
  const milliseconds = time % 1000;
  const display = `${formatearHora(hours)}:${formatearHora(minutes)}:${formatearHora(seconds)} : ${formatearHora(milliseconds, 3)}`;
  document.getElementById("stopwatch").textContent = display;
}

function formatearHora(value, digits = 2) {
  return value.toString().padStart(digits, "0");
}
function reset() {
  cronometroOn = false;
  clearInterval(timer);
  tiempoTransc = 0;
  actualizarPantalla(0);
  document.getElementById("start_stop").textContent = "Iniciar";
}

let timer;

actualizarPantalla(0);
