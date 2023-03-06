"use strict";
window.addEventListener("load", onload);

let life = 3;
let point = 0;

function onload() {
    
    life =3;
    point = 0;

    document.querySelector("#haj_container1").addEventListener("mousedown", clickHaj);
    document.querySelector("#haj_container1").classList.add("haj_container");
    document.querySelector("#haj_container2").addEventListener("mousedown", clickHaj2);
    document.querySelector("#haj_container2").classList.add("haj_container2");

    document.querySelector("#fiske_container").addEventListener("mousedown", click);
    document.querySelector("#fiske_container").classList.add("fiske_container");
    document.querySelector("#fiske_container2").addEventListener("mousedown", clickFish);
    document.querySelector("#fiske_container2").classList.add("fiske_container_2");
    document.querySelector("#fiske_container3").classList.add("fiske_container_3");
    document.querySelector("#fiske_container3").addEventListener("mousedown", clickFish3);

    document.querySelector("#plastik_container").addEventListener("mousedown", clickFlaske);
    document.querySelector("#plastik_container").classList.add("plastik_container");
    document.querySelector("#plastik_container2").addEventListener("mousedown", clickFlaske2);
    document.querySelector("#plastik_container2").classList.add("plastik_container2");

    document.querySelector("#time_sprite").addEventListener("animationend", checkScore);


function checkScore (){
    if (point < 15) {
        gameOver();
    }
    else {
        levelComplete();
    }
}


function click(){
    console.log ("virker");
    let fisk = document.querySelector("#fiske_container");

    fisk.removeEventListener("mousedown", click);
    fisk.classList.add("paused");
    fisk.querySelector("img").classList.add("explode");
    fisk.addEventListener("animationend", fishGone);

    document.querySelector("#splash").currentTime = 0;
    document.querySelector("#splash").play();

    incrementPoint();
}

function incrementPoint(){
    point++
    document.querySelector("#point_counter").textContent=point;
    console.log(point);
}

function fishGone() {
    let fisk = document.querySelector("#fiske_container");
    fisk.removeEventListener("animationend", fishGone);
    fisk.querySelector("img").classList.remove("explode");
    fisk.classList.remove("fiske_container");
    fisk.offsetWidth;
    fisk.classList.add("fiske_container");
    fisk.classList.remove("paused");
    fisk.addEventListener("mousedown", click);

}

function clickFish(){
    console.log ("hell yeah");
    let fisk2 = document.querySelector("#fiske_container2");

    fisk2.removeEventListener("mousedown", clickFish);
    fisk2.classList.add("paused");
    fisk2.querySelector("img").classList.add("explode");
    fisk2.addEventListener("animationend", fishGone2 )

    document.querySelector("#splash").currentTime = 0;
    document.querySelector("#splash").play();

    incrementPoint();
}

function fishGone2 (){
    let fisk2 = document.querySelector("#fiske_container2");
    fisk2.removeEventListener("animationend", fishGone2);
    fisk2.querySelector("img").classList.remove("explode");
    fisk2.classList.remove("fiske_container_2");
    fisk2.offsetWidth;
    fisk2.classList.add("fiske_container_2");
    fisk2.classList.remove("paused");
    fisk2.addEventListener("mousedown", clickFish);
}



function clickFish3(){
    console.log ("hell yeah");
    let fisk3 = document.querySelector("#fiske_container3");

    fisk3.removeEventListener("mousedown", clickFish3);
    fisk3.classList.add("paused");
    fisk3.querySelector("img").classList.add("explode");
    fisk3.addEventListener("animationend", fishGone3 )

    document.querySelector("#splash").currentTime = 0;
    document.querySelector("#splash").play();

    incrementPoint();
}

function fishGone3 (){
    let fisk3 = document.querySelector("#fiske_container3");
    fisk3.removeEventListener("animationend", fishGone3);
    fisk3.querySelector("img").classList.remove("explode");
    fisk3.classList.remove("fiske_container_3");
    fisk3.offsetWidth;
    fisk3.classList.add("fiske_container_3");
    fisk3.classList.remove("paused");
    fisk3.addEventListener("mousedown", clickFish3);
}


function clickHaj(){
    console.log ("yay");
    let haj = document.querySelector("#haj_container1")
    
    haj.removeEventListener("mousedown", clickHaj);
    haj.classList.add("paused");
    haj.querySelector("img").classList.add("explode");
    haj.addEventListener("animationend", sharkGone);

    document.querySelector("#chew").currentTime = 0;
    document.querySelector("#chew").play();

    decrementLife();

}

function sharkGone (){
    let haj = document.querySelector("#haj_container1");
    haj.removeEventListener("animationend", sharkGone);
    haj.querySelector("img").classList.remove("explode");
    haj.classList.remove("haj_container");
    haj.offsetWidth;
    haj.classList.add("haj_container");
    haj.classList.remove("paused");
    haj.addEventListener("mousedown", clickHaj);
    
}

function clickHaj2(){
    console.log ("yay");
    let haj2 = document.querySelector("#haj_container2")
    
    haj2.removeEventListener("mousedown", clickHaj2);
    haj2.classList.add("paused");
    haj2.querySelector("img").classList.add("explode2");
    haj2.addEventListener("animationend", sharkGone2);

    document.querySelector("#chew").currentTime = 0;
    document.querySelector("#chew").play();

    decrementLife();
}

function sharkGone2 (){
    let haj2 = document.querySelector("#haj_container2");
    haj2.removeEventListener("animationend", sharkGone2);
    haj2.querySelector("img").classList.remove("explode2");
    haj2.classList.remove("haj_container2");
    haj2.offsetWidth;
    haj2.classList.add("haj_container2");
    haj2.classList.remove("paused");
    haj2.addEventListener("mousedown", clickHaj2);
    
}

function clickFlaske(){
    console.log ("yay");
    let flaske = document.querySelector("#plastik_container")
    
    flaske.removeEventListener("mousedown", clickFlaske);
    flaske.classList.add("paused");
    flaske.querySelector("img").classList.add("explode");
    flaske.addEventListener("animationend", flaskeGone);

    document.querySelector("#bottle").currentTime = 0;
    document.querySelector("#bottle").play();

    decrementLife();

}

function flaskeGone (){
    let flaske = document.querySelector("#plastik_container");
    flaske.removeEventListener("animationend", flaskeGone);
    flaske.querySelector("img").classList.remove("explode");
    flaske.classList.remove("plastik_container");
    flaske.offsetWidth;
    flaske.classList.add("plastik_container");
    flaske.classList.remove("paused");
    flaske.addEventListener("mousedown", clickFlaske,);
}

function clickFlaske2(){
    console.log ("yay");
    let flaske2 = document.querySelector("#plastik_container2")
    
    flaske2.removeEventListener("mousedown", clickFlaske2);
    flaske2.classList.add("paused");
    flaske2.querySelector("img").classList.add("explode");
    flaske2.addEventListener("animationend", flaskeGone2);

    document.querySelector("#bottle").currentTime = 0;
    document.querySelector("#bottle").play();

    decrementLife();

}

function flaskeGone2 (){
    let flaske2 = document.querySelector("#plastik_container2");
    flaske2.removeEventListener("animationend", flaskeGone2);
    flaske2.querySelector("img").classList.remove("explode");
    flaske2.classList.remove("plastik_container2");
    flaske2.offsetWidth;
    flaske2.classList.add("plastik_container2");
    flaske2.classList.remove("paused");
    flaske2.addEventListener("mousedown", clickFlaske2,);
}

let lifeCounter = "3";
console.log(lifeCounter);

function incrementLife () { 
}

function decrementLife () {
    document.querySelector("#life"+life).classList.add("explode");
    life--;
    if (life <= 0){
        gameOver();
    }
    console.log("decrement"); 
}
function gameOver () {
    document.querySelector("#game_over").classList.remove("hidden");
}

}