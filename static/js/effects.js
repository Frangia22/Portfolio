// Efecto texto header
var message = "Francisco || Giachero";
var message2 = "Desarrollador Web FullStack";
var msgCount = 0;
var timer1;
var messagetitle = document.getElementById("messagetitle");
var messagetext = document.getElementById("messagetext");
// Mensaje uno
function textFuncTitle() {
   messagetitle.innerHTML = message.substring(0, msgCount);
   
   if (msgCount == message.length) {
      // Stop Timer
      clearInterval(timer1);
      
   } else {
      msgCount++;
   }
}
timer1 = setInterval("textFuncTitle()", 150); // Every 150 milliseconds
// Mensaje dos
function textFuncText() {
   messagetext.innerHTML = message2.substring(0, msgCount);
   
   if (msgCount == message2.length) {
      // Stop Timer
      clearInterval(timer1);
      
   } else {
      msgCount++;
   }
}
timer1 = setInterval("textFuncText()", 150); // Every 150 milliseconds
menubtn.addEventListener("click", () => {
	// eslint-disable-next-line no-undef
	nav.classList.toggle("desplegar");     
   changeIcon.classList.toggle('burger-cruz'); 
});
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const fecha = new Date();
const getHora = fecha.getHours();
const saludo = () => {
   if (getHora > 7 && getHora < 12) {
      return(`<b>Buenas dias!!</b>`);
   }else if (getHora > 12 && getHora < 21) {
      return(`<b>Buenas tardes!!</b>`);
   }else if (getHora > 21) {
      return(`<b>Buenas noches!!</b>`);
   }
}
const fechaHoy = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}, ${saludo()}`;
const banner = document.querySelector('#banner');
banner.innerHTML = fechaHoy;
