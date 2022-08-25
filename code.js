var mercury = document.getElementById("mercury")
var venus = document.getElementById("venus")
var earth = document.getElementById("earth")
var mars = document.getElementById("mars")
var jupiter = document.getElementById("jupiter")
var saturn = document.getElementById("saturn")
var uranus = document.getElementById("uranus")
var neptune = document.getElementById("neptune")
var pluto = document.getElementById("pluto")
var mercuryDes = document.getElementById("mercury-des");
var venusDes = document.getElementById("venus-des");
var earthDes = document.getElementById("earth-des");
var marsDes = document.getElementById("mars-des");
var jupiterDes = document.getElementById("jupiter-des");
var saturnDes = document.getElementById("saturn-des");
var uranusDes = document.getElementById("uranus-des");
var neptuneDes = document.getElementById("neptune-des");
var plutoDes = document.getElementById("pluto-des");



const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto]
console.log(planets)

function positionPlanets() {
    var planetLeft = -50;
    for (i = 0; i < 9; i++) {
        var planet = planets[i]
        planet.style.left = planetLeft + "px";
        planet.style.transformOrigin = Math.abs(planetLeft)+100+"px";
        console.log(Math.abs(planetLeft)+100 + planetLeft)
        planetLeft += -50;
    }
}

function checkForHover() {
    function stopAnimation(pl, plDes){
        pl.style.animationPlayState = "paused";
        var position = pl.getBoundingClientRect();
        // var translate3dValue = "translate3d(" + position.left + "px," + position.top + "px, 0)" 
        // plDes.style.transform = translate3dValue;
        // console.log(translate3dValue)
        plDes.style.display = "block";
        var fragment = document.createDocumentFragment();
        fragment.appendChild(plDes);
        document.getElementById("planets").appendChild(fragment);
        var wl = pl.clientWidth;
        var hl = pl.clientHeight;
        var wd = plDes.clientWidth;
        var hd = plDes.clientHeight;
        var pt = plDes.style.paddingTop;
        plDes.style.left = (position.left+hl)+"px";
        plDes.style.top = (position.top-hd)+"px";
    }
    function startAnimation(pl, plDes){
        plDes.style.display = "none";
        pl.style.animationPlayState = "running";
    }
    mercury.onmouseover = () => {stopAnimation(mercury, mercuryDes)}
    venus.onmouseover = () => {stopAnimation(venus, venusDes)}
    earth.onmouseover = () => {stopAnimation(earth, earthDes)}
    mars.onmouseover = () => {stopAnimation(mars, marsDes)}
    jupiter.onmouseover = () => {stopAnimation(jupiter,jupiterDes)}
    saturn.onmouseover = () => {stopAnimation(saturn, saturnDes)}
    uranus.onmouseover = () => {stopAnimation(uranus, uranusDes)}
    neptune.onmouseover = () => {stopAnimation(neptune, neptuneDes)}
    pluto.onmouseover = () => {stopAnimation(pluto, plutoDes)}

    mercury.onmouseout = () => {startAnimation(mercury, mercuryDes)}
    venus.onmouseout = () => {startAnimation(venus, venusDes)}
    earth.onmouseout = () => {startAnimation(earth, earthDes)}
    mars.onmouseout = () => {startAnimation(mars, marsDes)}
    jupiter.onmouseout = () => {startAnimation(jupiter, jupiterDes)}
    saturn.onmouseout = () => {startAnimation(saturn, saturnDes)}
    uranus.onmouseout = () => {startAnimation(uranus, uranusDes)}
    neptune.onmouseout = () => {startAnimation(neptune, neptuneDes)}
    pluto.onmouseout = () => {startAnimation(pluto, plutoDes)}
}
checkForHover();
positionPlanets();