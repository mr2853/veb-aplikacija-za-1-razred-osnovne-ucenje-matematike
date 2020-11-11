let max=10;
function randomBroj(max){
    return Math.floor(Math.random() * Math.floor(max));
}
let dobroJe=0;
let prviBroj=0;
let drugiBroj=0;
let rezultat=0;
while(dobroJe==0){
    prviBroj=randomBroj(max);
    drugiBroj=randomBroj(max);
    rezultat=prviBroj*drugiBroj;
    if(rezultat<101 && prviBroj!=0 && drugiBroj!=0 && prviBroj!=1 && drugiBroj!=1 && rezultat!=0 && rezultat!=1){
        dobroJe=1;
    }
}

let div=document.querySelectorAll("div")[0];
document.querySelectorAll("input")[0].value=prviBroj;
document.querySelectorAll("input")[2].value=drugiBroj;
document.querySelectorAll("input")[5].value=localStorage.getItem("tacnih_odg_mnozenje");
let p=document.querySelectorAll("p")[0];

let rez=document.querySelectorAll("input")[4];
let btn1=document.querySelectorAll("button")[0];
let btn2=document.querySelectorAll("button")[1];
btn1.disabled=true;

let provera1=0;
let provera2=0;
rez.oninput=function(){
    if(rez.value != ""){
        btn1.disabled=false;
    }
}
function proveri(){
    rez=document.querySelectorAll("input")[4].value;
    if(rezultat==rez){
        if(provera2==0){
            p.innerHTML="Tacno je :D";
            localStorage.setItem("tacnih_odg_mnozenje",Number(localStorage.getItem("tacnih_odg_mnozenje"))+1)
            provera2=1;
            p.style.backgroundColor="rgb(0, 189, 0)";
            setTimeout(location.reload.bind(location), 1500);
        }
    }
    else{
        if(provera1==0){
            p.innerHTML="Nije tacno !";
            p.style.backgroundColor="rgb(214, 0, 0)";
            localStorage.setItem("tacnih_odg_mnozenje",Number(localStorage.getItem("tacnih_odg_mnozenje"))-1)
            document.querySelectorAll("input")[5].value=localStorage.getItem("tacnih_odg_mnozenje");
            provera1=1;
        }
    }
}
function sledeciPrimer(){
    setTimeout(location.reload.bind(location), 250)
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      proveri();
    }
});

if(Number(localStorage.getItem("tacnih_odg_sabiranje"))<=5){
    btn2.disabled=true;
}
if(Number(localStorage.getItem("tacnih_odg_sabiranje"))>5){
    btn2.disabled=true;
}

btn1.onclick=proveri;

btn2.onclick=sledeciPrimer;