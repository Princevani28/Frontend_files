//Required field validation
function valid(){
   let x = document.getElementById("name").value
    if(x===""){
        document.getElementById("try").innerHTML = "please fill the Username"
        document.getElementById("try").style.color="red"
        return false  // return false  help to not submit the data until the field is empty. And it will 'return' is also written in the form tag in html
    }

    let pass = document.getElementById("pass").value
    let cpass = document.getElementById("cpass").value
    if(pass!==cpass){
        alert("Password and confirm password are not same")
    }

}