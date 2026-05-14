let boxes=document.querySelectorAll(".box")
boxes[0].onclick=function(){
    boxes[0].style.backgroundColor="red";
}
boxes[1].onclick=function(){
    boxes[1].style.backgroundColor="blue";
}
boxes[2].onclick=function(){
    boxes[2].style.backgroundColor="green";
}
boxes[3].onclick=function(){
    boxes[3].style.backgroundColor="yellow";
}

document.getElementById("greetbtn").onclick=function(){
    let name=document.getElementById("username").value;
    document.querySelector("h1").innerHTML="Hello, " + name;
}