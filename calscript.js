//This function clear all the values
function clearscreen(){
    document.getElementById("result").value="";
}

//This function display values
function display(value){
    document.getElementById("result").value+=value;
}

function displaydot(){
    if(!document.getElementById("result").value.includes("."))
        document.getElementById("result").value+=".";
}

//This function evaluates the expression and returns result
function calculate(){
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}
