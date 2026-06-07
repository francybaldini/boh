/*tasto della tendina del mobile*/
const btn = document.querySelector(".menu");
const nav = document.querySelector(".menu-mobile");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/*per le immagini a scorrimento*/
const imgs = document.querySelectorAll(".galleria img");
let i = 0;

setInterval(() =>{
    imgs[i].classList.remove("active");
    i = (i+1) % imgs.length;
    imgs[i].classList.add("active");
}, 3000);