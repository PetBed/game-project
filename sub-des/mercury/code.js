var g = document.getElementById("canvas-gravity")
var gtx = g.getContext("2d");

function gravitySimulation() {
        var going = 1
        var x = 30;
        var y = 30;
        var gravity = 3.7/10;
        var vol = 0;
        const update = setInterval(updateGravity, 30);
        
        function updateGravity() {
            if(going == 1) {
                gtx.strokeStyle = "red"
                gtx.fillRect(x, y, 30, 15);

                vol += gravity;
                console.log(g.width)
                y += vol;
                if (y > g.width) {

                }
            }
        }
}