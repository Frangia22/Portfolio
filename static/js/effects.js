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
