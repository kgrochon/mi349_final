const header = document.querySelector('.nav_menu');
const header_links = document.querySelector('.nav_menu a');
const light_container = document.querySelector('.light_container');
const light = document.querySelector('.light');
const button = document.querySelector('.button')
var r = document.querySelector(':root');



// Correct light source width as window changes size

window.onload = function() {
    var width = window.innerWidth - 100;
    r.style.setProperty('--lighthouse_rot_left', width + 'px');
}

window.onresize = function() {
    var width = window.innerWidth - 100;
    r.style.setProperty('--lighthouse_rot_left', width + 'px');
}

button.addEventListener('click', function(){
    r.style.setProperty('--button_color', '--neutral');

});
  