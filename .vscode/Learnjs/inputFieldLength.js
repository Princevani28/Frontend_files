function nlength(){
   let x =  document.getElementById("name").value
// let y=0
y= x.length
document.getElementById("one").innerHTML = `The length of the string is ${y}`
}



// Add item count functuon
let i=0;

function increment(){
    i++;
    document.getElementById("num").innerHTML = `${i}`
}

function decrement(){
   
   if(i>0)
    {
      i--;
    }
    document.getElementById("num").innerHTML = `${i}`
    
}
