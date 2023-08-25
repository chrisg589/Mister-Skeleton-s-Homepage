document.getElementsByClassName("importanttext")[0].style.fontSize = "3.5vw";
document.getElementsByTagName("h2")[0].style.fontSize = "3vw";
document.getElementsByTagName("h3")[0].style.fontSize = "5vw";
document.getElementsByTagName("h5")[0].style.fontSize = "1vw";



document.querySelector('.die').onclick = function() {
    var image = document.getElementById('skellypicture1');
    image.style.width = '15px'
    var image = document.getElementById('skellypicture2');
    image.style.width = '15px'
    var image = document.getElementById('skellypicture3');
    image.style.width = '15px'
}

document.querySelector('.fatty').onclick = function() {
    var image = document.getElementById('skellypicture1');
    image.style.width = image.width+=40
    var image = document.getElementById('skellypicture2');
    image.style.width = image.width+=40
    var image = document.getElementById('skellypicture3');
    image.style.width = image.width+=40
}

function ClickeryHappening() {
}
function ClickeryHappening2() {
}
function ClickeryHappening3() {
}
