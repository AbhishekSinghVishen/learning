var h3=document.querySelector("h3")
var val=document.querySelector("#val")
var count=0
var int =setInterval(function(){
    if (count===250){
        h3.style.opacity=1;
        clearInterval(int)
        console.log("hello world")
    }
    count++;
    val.style.width= count+'px'
},10)