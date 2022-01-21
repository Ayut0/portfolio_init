let projectCards = document.querySelectorAll(".project__card");

let index;
projectCards.forEach(projectCard =>{
    projectCard.addEventListener("click", ()=>{
        index = [].slice.call(projectCards).indexOf(projectCard);
        let behindCards = document.querySelectorAll(".project__behind-card")[index];

        let style = behindCards.currentStyle || document.defaultView.getComputedStyle(behindCards, '');
        if(style.display == "none"){
            behindCards.classList.add("show");
            behindCards.style.position = "absolute"
        }else{
            behindCards.classList.remove("show");
            behindCards.style.position = ""
        }
        
    })
})

// projectCards.forEach(function(target){
//     target.addEventListener("click",  function(e){
//         console.log(e.currentTarget);
//         let targetCard = e.currentTarget;
        
//         targetCard.firstElementChild.classList.add("show");
//     })
// })


// function showUp(){
    
//     behindCards.forEach(behindCard => {
//         console.log(this);
//         behindCard.classList.toggle("show");
//         this.stopPropagation();
//     })
// }

// function hide(){
//     this.classList.toggle("show");
// }


// projectCards.forEach(projectCard =>{
//     projectCard.addEventListener("mouseover", showUp);
// });

// behindCards.forEach(behindCard =>{
//     behindCard.addEventListener("click", hide);
// })



