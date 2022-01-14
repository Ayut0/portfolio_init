const pageNations = document.querySelectorAll(".header__ul li");

// console.log(pageNations);

pageNations.forEach(pageNation => {
    pageNation.addEventListener("click", e =>{
        e.preventDefault();
        const targetId = e.target.hash;
        // console.log(targetId);
        const target = document.querySelector(targetId);
        target.scrollIntoView({behavior: "smooth"});
    });
});

