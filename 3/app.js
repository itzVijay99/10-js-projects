const form=document.querySelector("form");


let h2=document.querySelector("h2");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let boy=document.getElementById("boy");
    let girl=document.getElementById("girl");

    let l1=boy.value.length;
    let l2=girl.value.length;

    let res=Math.pow(l1+l2,3)%101;
    h2.innerText=`result: ${res}%`;
    form.reset();

});