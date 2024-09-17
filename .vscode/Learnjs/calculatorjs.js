// All clear function
function ac(){
    document.getElementById("input1").value = ""
}

// Clear function
function clearme(){
    const y = document.getElementById("input1")
    y.value = y.value.slice(0,-1)
}

// Get and Show function
const show = (data)=>{
    const x = document.getElementById("input1")
    x.value += data
}

// Operation function
const calculation =()=>{
const x = document.getElementById("input1")
try{
    x.value=eval(x.value)
}catch(err){
    x.value='Error'
}
}