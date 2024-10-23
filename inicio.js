/*CONTENIDO GENERAL*/

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
  })
  
  window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
      }, 1000);
  })
  
  
  const loader = document.getElementById("loaderPagina");
  const showLoader = () => {
   loader.classList.add("show_loader");
  }
  const hideLoader = () => {
    loader.classList.remove("show_loader");
  }

/*CONTENIDO GENERAL*/

/*CONTENIDO INDIVIDUAL DE LA PÁGINA*/

let obtenerProximaFecha = () => {
  let ahora = new Date();
  let siguienteSabado = new Date();
  
  siguienteSabado.setUTCDate(ahora.getUTCDate() + (6 - ahora.getUTCDay() + 7) % 7);
  siguienteSabado.setUTCHours(22, 0, 0, 0);

  return siguienteSabado.getTime();
};

let msfecha = obtenerProximaFecha();

let parrafoDias = document.querySelector("#dias");
let parrafoXdias = document.querySelector("#xdias");
let parrafoHoras = document.querySelector("#horas");
let parrafoXhoras = document.querySelector("#xhoras");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoXminutos = document.querySelector("#xminutos");
let parrafoSegundos = document.querySelector("#segundos");
let parrafoXsegundos = document.querySelector("#xsegundos");
let Linea = document.querySelector("#linea");
let CuentaAtras = document.querySelector("#cuenta-atras");

let intervalo = setInterval(() => {
  let hoy = new Date().getTime();
  let distancia = msfecha - hoy;

  let mspordia = 1000 * 60 * 60 * 24;
  let msporhora = 1000 * 60 * 60;
  let msporminuto = 1000 * 60;
  let msporsegundo = 1000;

  let dias = Math.floor(distancia / mspordia);
  let horas = Math.floor((distancia % mspordia) / msporhora);
  let minutos = Math.floor((distancia % msporhora) / msporminuto);
  let segundos = Math.floor((distancia % msporminuto) / msporsegundo);

  parrafoDias.innerText = dias;
  parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
  parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
  parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

  parrafoXdias.innerHTML = dias === 1 ? "<p class='chico'>Día </p>" : "<p class='chico'>Días</p>";
  parrafoXhoras.innerHTML = horas === 1 ? "<p class='chico'>Hora </p>" : "<p class='chico'>Horas</p>";
  parrafoXminutos.innerHTML = minutos === 1 ? "<p class='chico'>Minuto </p>" : "<p class='chico'>Minutos</p>";
  parrafoXsegundos.innerHTML = segundos === 1 ? "<p class='chico'>Segundo </p>" : "<p class='chico'>Segundos</p>";

  if (distancia < 0) {
      clearInterval(intervalo);
      Linea.innerHTML = "<a class='vivo' href='https://www.youtube.com/@RadioKamikazeok' target='_blank'>¡¡EN VIVO!!</a>";
      CuentaAtras.innerHTML = "";

      setTimeout(() => {
          msfecha = obtenerProximaFecha();
          intervalo = setInterval();
      }, 7200000);
  }
}, 1000);

/*CONTENIDO INDIVIDUAL DE LA PÁGINA*/