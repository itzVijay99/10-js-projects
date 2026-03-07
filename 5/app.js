const div=document.querySelector('.time');



function updateTime(){
    const time=new Date();
    div.textContent=time.toLocaleTimeString('en-US', { hour12: true });
}
updateTime();
setInterval(updateTime,1000);


