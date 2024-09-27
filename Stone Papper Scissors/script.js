console.log("code is running...")

let btn = document.querySelectorAll(".img-btn")

let comscore = document.querySelector("#computerscore");
let userscore = document.querySelector("#userscore");
let draw = document.querySelector(".draw");

let c = 0;
let u = 0;
// let com = comscore.innerHTML = c;
// let use = userscore.innerHTML = u;
// console.log(Math.floor((Math.random() * 3)+1))


btn.forEach((e) => {
    let Stone = "Stone";
    let Paper = "Paper";
    let Scissor = "Scissors";
    console.log(e)
    e.addEventListener("click", () => {
        draw.style.display = "none";
    let com = Math.floor((Math.random() * 3)+1)
        console.log(e.value)
        console.log(com)
        if (e.value === Stone && com !== 1) {
            if (com == 3) {
                console.log("winner is User")
                // userscore.innerHTML =  ++;
                u++
                userscore.innerText = u;
            }
            else{
                console.log("winner is computer")
                // comscore.innerHTML =  ++ 
                c++;
                comscore.innerText = c;
            }
        } else if (e.value === Paper && com !== 2) {
            if (com == 1) {
                console.log("winner is User")
                // userscore.innerHTML = u + 1
                u++
                userscore.innerText = u;
            }else{
                console.log("winner is computer")
                // comscore.innerHTML = c + 1
                c++;
                comscore.innerText = c;
            }
        } else if (e.value === Scissor && com !== 3) {
            if (com == 2) {
                console.log("winner is User")
                // userscore.innerHTML = u + 1
                u++
                userscore.innerText = u;
            }else{
                console.log("winner is computer")
                // comscore.innerHTML = c + 1
                c++;
                comscore.innerText = c;
            }
        } else{
            draw.style.display = "block";
            console.log("draw")
        }
        


    })
});

console.log("code is proper runnig")