const form = document.querySelector("form");
const input = document.querySelector("#usrName");
const rootTxt = document.querySelector("#rootTxt");
const Btn = document.querySelector("#flirtBtn");

Btn.addEventListener("click", (e)=>{

  let data = input.value;
  if(data.toLowerCase ()== 'alisha' ){
    rootTxt.innerText = "You Bhoot why are you here :)"
  }
  else{
    rootTxt.innerHTML = "Yu toh naam bhi pyaara tera"+ "<br/>"+
  "Kaho toh baat karlye"+ "<br/>"+
  "Yu muskurana mat" +"<br/>"+
  "Mujhse sitaroo ki ginti mat karwa";

  }
  
  e.preventDefault;

});