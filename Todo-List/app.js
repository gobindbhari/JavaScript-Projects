console.log("code is running")

let inputtext = document.getElementById("inputtext")
let addbtn = document.getElementById("addbtn")
let listview  = document.getElementById("listview");
console.log(listview)



const addfunct = ()=>{
    if(inputtext.value === ""){
        alert("Please enter some text")
    }else{
        let save = inputtext.value;
        let litext = document.createElement("li");
        let genid = Math.floor(Math.random()*100000)
        litext.id = genid
        console.log(genid)
        litext.innerText = save;
        listview.prepend(litext);
        console.log(save);
        inputtext.value = "";
        let span = document.createElement("span")
        litext.append(span);
        
       
        let editbtn = document.createElement("button")
        editbtn.innerText = "Edit";
        editbtn.id = genid
        span.append(editbtn)
        editbtn.addEventListener("click",()=>{
            let ei = document.getElementById(editbtn.id)
            let eili = ei.firstChild
            inputtext.value = eili.nodeValue;
            console.log(eili.nodeValue)
            let bi = document.getElementById(editbtn.id)
            bi.remove()
        })
        
        let delbtn = document.createElement("button")
        delbtn.innerText = "Delete";
        delbtn.id = genid;
        span.append(delbtn)
        delbtn.addEventListener("click", ()=>{
            let bi = document.getElementById(delbtn.id)
            bi.remove()
        })
        
    
    }
}


addbtn.addEventListener("click", addfunct)

inputtext.addEventListener("change", addfunct)
        

