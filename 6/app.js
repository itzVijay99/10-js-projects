const div=document.querySelector('div');
const res=document.querySelector('#result');



setInterval(()=>{
    const currentTime=Date.now();
const olympicTime=new Date(2026,6,22).getTime();

const diff=olympicTime-currentTime;

const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
const seconds=Math.floor((diff%(1000*60))/1000);

res.textContent=`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds until the Olympics!`;

},1000);