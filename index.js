
let val;
function calculate(){
    let a=amount.value;
    let t=type.value;
    let p=people.value;
     
    console.log(a);

    val=(a*0.01*t)/p;
    console.log(val);
    document.querySelector("#tip").innerText="$"+ val.toString()+ " each";
}

let amount=document.querySelector("#amount");
let type=document.querySelector("#type");
let people=document.querySelector("#people");
document.querySelector("#submit").addEventListener('click', calculate);