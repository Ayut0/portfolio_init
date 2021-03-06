window.document.addEventListener("DOMContentLoaded", ()=> {
    let words = document.querySelectorAll(".word");
    let wordArray = [];
    let currentWord = 0;

    words[currentWord].style.opacity = 0;
    for(let i = 0; i < words.length; i++){
        splitLetters(words[i]);
    }

    function changeWord(){
        let cw = wordArray[currentWord]; //cw: current word
        let nw = (currentWord == words.length-1)? wordArray[0] : wordArray[currentWord + 1];
        //nw: next word

        for(let i = 0; i < cw.length ; i++){
            animateLetterOut(cw, i);
        }

        for(let i = 0; i < nw.length; i++){
            nw[i].className = "letter behind";
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }
        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i){
        setTimeout(() => {
            cw[i].className = "letter out";
        }, i * 90);
    }

    function animateLetterIn(nw, i){
        setTimeout(() => {
            nw[i].className = "letter in";
        }, (i * 90) + 350);
    }

    function splitLetters(word){
        let content = word.innerHTML;
        word.innerHTML = '';
        let letters = [];

        for(let i = 0; i < content.length; i++){
            let letter = document.createElement("span");
            letter.className = "letter";
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }

    changeWord();
    setInterval(changeWord, 4000);

});

