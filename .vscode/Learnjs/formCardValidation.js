function username(){
    let x=document.getElementById("uname").value 
    let y= x.length
    let z = /^[a-zA-Z]+$/

    if ( x==""){
        document.getElementById("umsg").innerHTML = " "
        return true
    }
    else if (y<=3 || y > 20){
       document.getElementById("umsg").innerHTML = "Please check the length of name"
        document.getElementById("umsg").style.color="red"
        return false

    }
    else if(!(z.test(x))){
        document.getElementById("umsg").innerHTML = "Please dont fill number "
        return false
    }
    else{    
            document.getElementById("umsg").innerHTML = " "
            return true

    }
}

function password(){
    let a = document.getElementById("pass").value
    let y= a.length

    if(a==""){
        document.getElementById("pmsg").innerHTML= ""
    }
   else if(y<=3){
        document.getElementById("pmsg").innerHTML= "weak Password"
        document.getElementById("pmsg").style.color="red"

    }else if(y>3 && y<=6){
        document.getElementById("pmsg").innerHTML= "Average Password"
        document.getElementById("pmsg").style.color="orange"
    }
    else{
    document.getElementById("pmsg").innerHTML= "Strong Password"
    document.getElementById("pmsg").style.color="green"
    }
}


    
function valid(){
    function cpassword(){
    let pass = document.getElementById("pass").value
    let cpass= document.getElementById("cpass").value
    if(pass!==cpass){
        document.getElementById("cpmsg").innerHTML = "Password and confirm password are not match"
        document.getElementById("cmsg").style.color="red"
        return false;
    }
    
}

function email(){
    let email_check=document.getElementById("email").value
    if(email==""){
         document.getElementById("emsg").innerHTML = "Please fill the Email"
         document.getElementById("emsg").style.color="red"
         return false;
    }

}

function pnumber(){
    let phn_check = document.getElementById("pnumber").value
    if(phn_chek<=9 && phn_check>10){
         document.getElementById("pnmsg").innerHTML = "Please fill valid phone number"
         document.getElementById("pnmsg").style.color="red"
    }
    else{
        
    }
    
}
}


