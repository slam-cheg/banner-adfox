const girl = document.querySelector(".girl");
const textMain = document.querySelector(".text_main");
const textRight = document.querySelector(".text-right");
const textSale = document.querySelector(".text_sale");
const textBg = document.querySelector(".right");

setTimeout(() => {anim(girl)}, 500);
setTimeout(() => {anim(textBg), 500})
setTimeout(()=>{anim(textMain)}, 800);
setTimeout(()=>{anim(textSale)}, 1100);
setTimeout(()=>{anim(textRight)}, 1400);


function anim(elem) {
    elem.classList.remove("anim")
}