let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let question = document.querySelector(".question");
let reply = document.querySelector(".reply");
let heart = document.querySelector(".css-main");
let container = document.querySelector(".btn-container");

yesBtn.onclick = function(){
    question.style.display = "none";
    heart.style.display = "flex";
    
    setTimeout(function () {
        heart.style.display = "none";
        heart.style.animation = "none";

        reply.classList.add("show");
    }, 2000);
};

noBtn.onmouseover = function () {

    const moveRange = 300; 

    const randomX = (Math.random() - 0.5) * moveRange;
    const randomY = (Math.random() - 0.5) * moveRange;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
};

