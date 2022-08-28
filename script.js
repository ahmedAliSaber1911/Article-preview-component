const share = document.querySelector(".share");
share.addEventListener('click', ()=>{
    let shareBlock = document.querySelector(".shareClick");
    shareBlock.style.visibility = "visible";
    document.querySelector(".share").style.backgroundColor = "hsl(217, 19%, 35%)"
        
})