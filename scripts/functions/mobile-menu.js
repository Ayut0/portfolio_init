class MobileMenu{
    constructor(){
        this.DOM = {};
        this.DOM.btn = document.querySelector(".mobile-menu__btn");
        // this.DOM.items = document.querySelectorAll(".mobile-menu__item");
        // console.log(this.DOM.item);
        this.DOM.container = document.querySelector("#global-container");
        this.eventType = this._getEventType();
        // this._closeMenu();
        // this._closeMenu2();
        this._addEvent();
    }

    _getEventType(){
        return window.ontouchstart ? "touchstart" : "click"
    }
    
    _toggle(){
        this.DOM.container.classList.toggle("menu-open");
    }

    // _closeMenu2(){
    //     this.DOM.container.classList.remove("menu-open")
    // }

    // _closeMenu(){
    //     this.DOM.items.forEach(item => {
    //          item.addEventListener(
    //            "click",
    //            _closeMenu2()
    //          );
    //     });
    // }
    
    _addEvent(){
        this.DOM.btn.addEventListener("click", this._toggle.bind(this));
    }
}

new MobileMenu();

const menu = document.querySelector("#global-container");
const items = document.querySelectorAll(".mobile-menu__item");

function closeMenu(){
    menu.classList.remove("menu-open");
}
items.forEach(item =>{
    item.addEventListener("click", closeMenu)
})

