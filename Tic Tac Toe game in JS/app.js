console.log("code is runninng...")

let boxes = document.querySelectorAll(".box")
let mainmsg = document.querySelector(".main-msg")
let winmsg = document.querySelector(".win-msg")

let turn = true;

const winpatterns=[
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8]
]


const showwinner= ()=>{
    for (const win of winpatterns) {
        // console.log(boxes.win[0].innerText,win[1],win[2])
        let pos0 = boxes[win[0]].innerText ;
        let pos1 = boxes[win[1]].innerText ;
        let pos2 = boxes[win[2]].innerText ;

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0 === pos1 && pos1 === pos2){
                console.log("winner is "+ pos2)
                boxes.forEach((box)=>{
                    box.disabled=true
                    winner(pos2);
                })
                    
                }
            }
        }
    }


function winner(pos2){
    mainmsg.classList.remove("hide")
    winmsg.innerText="Winner is "+ pos2
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log(box)
        if(turn){
            box.innerText="O"
            turn =  false;
        }
        else{
            box.innerText="X"
            turn = true;
        }
        box.disabled=true;
        showwinner();
        // console.log()
    })
})

