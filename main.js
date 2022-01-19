const projectCards = document.querySelectorAll(".project__card");
const behindCards = document.querySelectorAll(".project__behind-card");


function showUp(){
    
    behindCards.forEach(behindCard => {
        behindCard.classList.add("show");
    })

    this.style.display = "none";
}

function hide(){
    this.classList.remove("show");
    
}


projectCards.forEach(projectCard =>{
    projectCard.addEventListener("click", showUp);
});

behindCards.forEach(behindCard =>{
    behindCard.addEventListener("click", hide);
})



