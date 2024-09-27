console.log("script is running...");


let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgame = document.querySelector("#newgame-btn")
let resetbox = document.getElementsByClassName(".box")
let winmsg = document.querySelector(".win-msg")
let mainmsg = document.querySelector(".main-msg")

 let turno = true;

 
 
 const winpatterns = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
    ]
    
//  const resetgame   


 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("hello");
        if (turno) {
            box.innerText="O";
            turno = false;
        }
        else{
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
 });

 const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

 function showwinner(position2) {
    document.querySelector(".win-msg").innerHTML = `winner is ${position2}`
    mainmsg.classList.remove("hide");
    disableboxes()
 };

 

 const checkwinner = () => {
    for (const pattern of winpatterns) {
        // console.log(pattern[0],pattern[1],pattern[2])
    let position0 = boxes[pattern[0]].innerText ;
    let position1 = boxes[pattern[1]].innerText ;
    let position2 = boxes[pattern[2]].innerText

    if(position0 != "" && position1 != "" && position2 != ""){
        if(position0 === position1 && position1 === position2){
            console.log("winner is " + position2)
            showwinner(position2)
        


        }
    }
}}

resetbtn.addEventListener("click",()=>{
    resetgame();
 })
newgame.addEventListener("click",()=>{
    resetgame();
 })

const resetgame = ()=> {
        mainmsg.classList.add("hide");
        boxes.innerText="";
        turno = true;
        console.log("resetting")
        for(let box of boxes){
            box.disabled = false;
            box.innerText="";
        }
     
}
