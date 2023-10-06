document.getElementById("btn").onclick = function(){

    let x;
    let y;
    x = document.getElementById("name").value;
    y = document.getElementById("Email").value;
        
       document.getElementById('l2').innerHTML = x;
       document.getElementById('l3').innerHTML = y;
}