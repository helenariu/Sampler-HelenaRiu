document.getElementById("playagain").onmouseover = cambiarcolorplayagain;
document.getElementById("playagain").onmouseout = cambiarcolorplayagainout;
document.getElementById("play").onmouseout = canviarbotoplayout;


document.getElementById("botorosa").onmouseover = fergranbotorosa;
document.getElementById("botorosa").onmouseout = fergranbotorosaout;
document.getElementById("botonegre").onmouseover = fergranbotonegre;
document.getElementById("botonegre").onmouseout = fergranbotonegreout;
document.getElementById("botovermell").onmouseover = fergranbotovermell;
document.getElementById("botovermell").onmouseout = fergranbotovermellout;
document.getElementById("botorosa").onclick = canviarcolorrosa;
document.getElementById("botonegre").onclick = canviarcolornegre;
document.getElementById("botovermell").onclick = canviarcolorvermell;


document.getElementById("trompeta").onmouseover = animaciomousein;
document.getElementById("trompeta").onmouseout = animaciomouseout;
document.getElementById("tambor").onmouseover = animaciomousein1;
document.getElementById("tambor").onmouseout = animaciomouseout1;
document.getElementById("guitarra").onmouseover = animaciomousein2;
document.getElementById("guitarra").onmouseout = animaciomouseout2;
document.getElementById("piano").onmouseover = animaciomousein3;
document.getElementById("piano").onmouseout = animaciomouseout3;
document.getElementById("saxofon").onmouseover = animaciomousein4;
document.getElementById("saxofon").onmouseout = animaciomouseout4;
document.getElementById("maracas").onmouseover = animaciomousein5;
document.getElementById("maracas").onmouseout = animaciomouseout5;

document.getElementById("play").onmouseover = canviarbotoplay;



document.getElementById("trompeta").onclick = raTrompeta;
document.getElementById("tambor").onclick = raTambor;
document.getElementById("piano").onclick = raPiano;
document.getElementById("saxofon").onclick = raSaxofon;
document.getElementById("guitarra").onclick = raGuitarra;
document.getElementById("maracas").onclick = raMaracas;







function raTrompeta() {
    document.getElementById("audiotrompeta").play();

}

function raTambor() {
    document.getElementById("audiotambor").play();

}

function raPiano() {
    document.getElementById("audiopiano").play();

}

function raSaxofon() {
    document.getElementById("audiosaxofon").play();

}

function raGuitarra() {
    document.getElementById("audioguitarra").play();

}

function raMaracas() {
    document.getElementById("audiomaracas").play();

}

function canviarbotoplay() {

    document.getElementById("play").src = "img/botoplay2.png";

}




function reprodueixvideo() {

    let random3 = Math.floor(Math.random() * 3);
    
    document.getElementById("botoplay").style.display = "none";
    document.getElementById("textvideo").style.display = "none";
    document.getElementById("botonscanviarcolor").style.display = "none";

    document.getElementById("botonsinstumentsfila1").style.display = "flex";
    document.getElementById("botonsinstumentsfila2").style.display = "flex";
    
    document.getElementById("volum").style.display = "flex"; 

    document.getElementById("text").style.display = "none";
    document.getElementById("playagain").style.display = "flex";
    

    document.getElementById("musica" + random3).style.display = "block";
    document.getElementById("musica" + random3).play();
   
}






function canviarcolorrosa() {
    gsap.to("body", {
        duration: 2,
        backgroundColor: "#990066",
    });

}



function canviarcolornegre() {
              gsap.to("body", {
        duration: 2,
        backgroundColor: "black",

    });

}

function canviarcolorvermell() {
    gsap.to("body", {
        duration: 2,
        backgroundColor: "#9c262c",

    });

}


function animaciomousein() {
    gsap.to("#trompeta", {
        duration: 2,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "white",

    });
}


function animaciomouseout() {
    gsap.to("#trompeta", {
        duration: 2,
        stagger: 0.5,
        scale: 1,
        backgroundColor: "black",

    });
}

function animaciomousein1() {
    gsap.to("#tambor", {
        duration: 2,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "white",

    });
}

function animaciomouseout1() {
    gsap.to("#tambor", {
        duration: 2,
        stagger: 0.5,
        scale: 1,
        backgroundColor: "black",

    });
}

function animaciomousein2() {
    gsap.to("#guitarra", {
        duration: 2,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "white",

    });
}

function animaciomouseout2() {
    gsap.to("#guitarra", {
        duration: 2,
        stagger: 0.5,
        backgroundColor: "black",

    });
}

function animaciomousein3() {
    gsap.to("#piano", {
        duration: 2,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "white",

    });
}

function animaciomouseout3() {
    gsap.to("#piano", {
        duration: 2,
        scale: 1,
        stagger: 0.5,
        backgroundColor: "black",

    });
}

function animaciomousein4() {
    gsap.to("#saxofon", {
        duration: 2,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "white",

    });
}

function animaciomouseout4() {
    gsap.to("#saxofon", {
        duration: 2,
        stagger: 0.5,
        scale: 1,
        backgroundColor: "black",

    });
}

function animaciomousein5() {
    gsap.to("#maracas", {
        duration: 2,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "white",

    });
}

function animaciomouseout5() {
    gsap.to("#maracas", {
        duration: 2,
        stagger: 0.5,
        scale: 1,
        backgroundColor: "black",

    });
}

function cambiarcolorplayagain() {
    gsap.to("#playagain", {
        duration: 0.5,
        scale: 1.1,
        stagger: 0.5,
        backgroundColor: "#9c262c",

    });

}
function cambiarcolorplayagainout() {
    gsap.to("#playagain", {
        duration: 0.5,
        scale: 1,
        stagger: 0.5,
        backgroundColor: "black",

    });

}

function canviarbotoplayout() {

    document.getElementById("play").src = "img/botoplay.png";

}

function fergranbotorosa() {
    gsap.to("#botorosa", {
        duration: 1,
        scale: 1.3,
        stagger: 0.5, 
    });

}


function fergranbotorosaout() {
    gsap.to("#botorosa", {
        duration: 1,
        scale: 1,
        stagger: 0.5, 
    });

}
function fergranbotonegre() {
    gsap.to("#botonegre", {
        duration: 1,
        scale: 1.3,
        stagger: 0.5, 
    });

}


function fergranbotonegreout() {
    gsap.to("#botonegre", {
        duration: 1,
        scale: 1,
        stagger: 0.5, 
    });

}
function fergranbotovermell() {
    gsap.to("#botovermell", {
        duration: 1,
        scale: 1.3,
        stagger: 0.5, 
    });

}


function fergranbotovermellout() {
    gsap.to("#botovermell", {
        duration: 1,
        scale: 1,
        stagger: 0.5, 
    });

}
