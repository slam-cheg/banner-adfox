const girl = document.querySelector(".girl");
const lines = document.querySelector(".lines");
const text = document.querySelector(".text-container");
const button = document.querySelector(".right");

setTimeout(() => {anim(girl)}, 200);
setTimeout(()=>{anim(lines)}, 500);
setTimeout(()=>{anim(text)}, 700);
setTimeout(()=>{anim(button)}, 900);


function anim(elem) {
    elem.classList.remove("anim")
}