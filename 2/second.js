let par=document.querySelector(".parent");
let bd=document.querySelector("body");
par.addEventListener("click",(e)=>{
    bd.style.backgroundColor=e.target.id;


})