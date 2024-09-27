let input = document.getElementById("inputbox")
let buttons = document.querySelectorAll("button")
let equalbtn = document.querySelector("#equalbtn")
console.log(buttons)

let string = "";
let arr = Array.from(buttons)
console.log(arr)

buttons.forEach((e) => {
    e.addEventListener("click", (() => {
        string = string + e.innerText
        input.value = string
        // console.log(e.innerText)
        console.log(input.value.slice(string.length - 2))
        // console.log(string.slice(0, string.length - 1))
        // console.log(string.slice(string.length - 1))
        if (e.innerText === "=") {
            let newstring = string.slice(0, string.length - 1)
            console.log(newstring)
            if (input.value.slice(string.length - 2) == "==") {
               console.log(input.value = "")
               string = "";
               input.value = string;
           }
            let result = eval(newstring)
            console.log(result)
            input.value = result;
            // console.log(string.slice(string.length, string.length-1))
        }
        // else if (e.innerText.slice(string.length - 1) == "%") () => {
        else if (e.innerText == "%") {
            let ns = string.slice(0, string.length - 1)
            let q = ns / 100;
            input.value = q;
        }
        else if (e.innerText === "Del") {
            console.log(string.slice(0, string.length - 4))
            let dele = string.slice(0, string.length - 4);
            input.value = dele
            string = input.value;
        } else if (e.innerText === "AC") {
            string = ""
            input.value = string
        }
        else if (e.innerText === "Del") {
            console.log(string.slice(string.length, string.length - 3))
            string = string.slice(-1)
            // input.value = string
        }
    }
    ))
})




