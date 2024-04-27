const girl = document.querySelector(".girl");
const lines = document.querySelector(".lines");
const text = document.querySelector(".text-container");
const button = document.querySelector(".right");

setTimeout(()=>{anim(lines)}, 400);
setTimeout(() => {anim(girl)}, 700);
setTimeout(()=>{anim(text)}, 1000);
setTimeout(()=>{anim(button)}, 1300);


function anim(elem) {
    elem.classList.remove("anim")
}