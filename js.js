var i = 0;
var txt = "\"WE STAND UNITED TO FIGHT COVID.\"";
var speed = 110;

function typewriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
