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

// Efecto subtitulos
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 1000;
var subtitle = document.getElementById("subtitle");
var delay = subtitle.innerHTML.length * speed + speed;

// type affect to header
typeEffect(subtitle, speed);

// 2
function typeEffect1(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 1000;
var subtitle = document.getElementById("subtitle1");
var delay = subtitle.innerHTML.length * speed + speed;

// type affect to header
typeEffect1(subtitle, speed);

// 3
function typeEffect2(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 1000;
var subtitle = document.getElementById("subtitle2");
var delay = subtitle.innerHTML.length * speed + speed;

// type affect to header
typeEffect1(subtitle, speed);

// 4
function typeEffect3(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 1000;
var subtitle = document.getElementById("subtitle3");
var delay = subtitle.innerHTML.length * speed + speed;

// type affect to header
typeEffect1(subtitle, speed);
