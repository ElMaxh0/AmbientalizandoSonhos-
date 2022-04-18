import { rotate } from "./imersiveApp"
var x =0
var y =0
var posx =0
var posy =0
var limite =0
var rotx =0
var roty =0

window.addEventListener('mousemove', function(e) {
    if( rotate ==1 ){
        x = e.pageX;
        y = e.pageY;
        limite = 100
        var mouseposx = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var mouseposy = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        rotx = y*100/mouseposy;
        rotx = 180*rotx/100;
        rotx = rotx-90;
        rotx *= -1;
        roty = x*100/mouseposx;
        roty = 180*roty/100;
        roty = roty-90;
        document.getElementById("euhuofuwfuwofguwguwe").style.transform =  "translate(-50%,-50%) rotateX(0) rotateY("+(roty*limite/100)+"deg) translateZ(0)";
        console.log(rotx)
        console.log(roty)
    }
    })