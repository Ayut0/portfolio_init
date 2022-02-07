window.addEventListener("DOMContentLoaded", ()=>{
    const scrollTrigger = document.querySelectorAll(".project__container");

    if(scrollTrigger.length){
        scrollFadeIn(scrollTrigger)
    }

    function scrollFadeIn(trigger){
        window.addEventListener("scroll", ()=>{
            for(let i = 0; i <trigger.length; i++){
                let position = trigger[i].getBoundingClientRect().top;
                let scroll = window.pageYOffset || document.documentElement.scrollTop;
                let offset = position + scroll;
                windowHeight = window.innerHeight;

                if(scroll > offset - windowHeight + 200){
                    trigger[i].classList.add("is-active");
                }
            }
        })
    }

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

})


