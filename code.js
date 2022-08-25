var mecury = document.getElementById("mecury")
var venus = document.getElementById("venus")
var earth = document.getElementById("earth")
var mars = document.getElementById("mars")
var jupiter = document.getElementById("jupiter")
var saturn = document.getElementById("saturn")
var uranus = document.getElementById("uranus")
var neptune = document.getElementById("neptune")
var pluto = document.getElementById("pluto")

const planets = [mecury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto]
//console.log(planets)

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
positionPlanets();