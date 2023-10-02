let string ="";
let buttons = document.querySelectorAll(".button");
let output = document.querySelector(".out");
let check = 0;
Array.from(buttons).forEach((button) =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML =="+" || e.target.innerHTML =="-" || e.target.innerHTML =="*" || e.target.innerHTML =="/"){
            check += 1;
        }
        else{
            check = 0;
        }
        if(e.target.innerHTML =="="){
            string = eval(string);
            output.innerHTML=string;
        }
        else if(e.target.innerHTML == "Clear"){
            string = "";
            output.innerHTML = string;
        }
        else if(e.target.innerHTML=="%"){
            string = eval(string);
            let a = parseInt(string);
            string = a / 100;
            output.innerHTML = string;
        }
        else if(e.target.innerHTML == "Del"){
            string = string.slice(0,-1);
            output.innerHTML = string;
        }
        else{
            if(check  <2){
                string = string + (e.target.innerHTML);
                output.innerHTML=string;
            }
            else{
                alert("Invalid entry");
            }
        }
            
    })
})