function check(){
    let a = document.getElementById("pass").value
    let y= a.length

    if(y<=3){
        document.getElementById("msg").innerHTML= "weak Password"
        document.getElementById("msg").style.color="red"

    }else if(y>3 && y<=6){
        document.getElementById("msg").innerHTML= "Average Password"
        document.getElementById("msg").style.color="orange"
    }
    else{
    document.getElementById("msg").innerHTML= "Strong Password"
    document.getElementById("msg").style.color="green"
    }

}
