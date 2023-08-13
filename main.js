const date = document.querySelector(".title")
let timerId
date.onmouseover = function(){
     timerId = setTimeout(()=>{
        date.innerText = "04 - 02 - 2024"
    },100)
    
}
date.onmouseout = function(){
    clearTimeout(timerId)
        date.innerText = "Sắp ra mắt"
}