let x = Math.floor(Math.random() * 11);
console.log(x);

function Try() {

    let inp = document.getElementById("get");
 

    if (x == inp.value) {
        alert("Qazandiniz!");
    }
    else if (x < inp.value) {
        alert("daha kicik bir reqem sinayin");
    }
    else if (x > inp.value) {
        alert("daha boyuk bir reqem yoxlayin");

    }
  
}
Try;





