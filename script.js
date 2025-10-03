let box=document.querySelector(".container");
let adviceId=document.querySelector(".advice-id");
let adviceText=document.querySelector(".advice-text");
const advice =fetch("https://api.adviceslip.com/advice");
advice.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
    adviceId.innerHTML=data.slip.id;
    adviceText.innerHTML=`"${data.slip.advice}"`;
}).catch((error)=>{
    console.log("error");
});