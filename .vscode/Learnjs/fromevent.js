
// Form Event :-

// Form focus Event
function focusme(){
    document.getElementById("Test").style.backgroundColor="red"
}

// Form Blur Event 
function blurme(){
    document.getElementById("Test").style.backgroundColor="orange"
}

//onchange Event

function changeme(){
    let x = document.getElementById("chnge").value
    document.getElementById("try").innerHTML = `You Select the city ${x}`
    document.getElementById("try").style.color="red"
    document.getElementById("try").style.fontSize="40px"
}


// Submit Event

function submitme(){
    alert("Your form is submitted succesfully")
}