let addcount = document.querySelector("#addcount");
let lowercount = document.querySelector("#lowercount");
let counterValue = document.querySelector("#counterValue");

// let counter = 50;

let counter = 0;

addcount.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
    let max = math.min(...50);
    
});

lowercount.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
    let min = math.min(...0);
});