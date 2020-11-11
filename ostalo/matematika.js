if(localStorage.getItem("ubaceno")==undefined){
    localStorage.setItem("ubaceno",0);
    localStorage.setItem("broj_tacnih_odg",0);
    localStorage.setItem("tacnih_odg_sabiranje",0);
    localStorage.setItem("tacnih_odg_oduzimanje",0);
    localStorage.setItem("tacnih_odg_mnozenje",0);
    localStorage.setItem("tacnih_odg_deljenje",0);
}

let skor=document.querySelectorAll("input")[4];
let sab_skor=Number(localStorage.getItem("tacnih_odg_sabiranje"));
let oduz_skor=Number(localStorage.getItem("tacnih_odg_oduzimanje"));
let mnoz_skor=Number(localStorage.getItem("tacnih_odg_mnozenje"));
let delj_skor=Number(localStorage.getItem("tacnih_odg_deljenje"));

let sabiranje=document.querySelectorAll("input")[0];
let oduzimanje=document.querySelectorAll("input")[1];
let mnozenje=document.querySelectorAll("input")[2];
let deljenje=document.querySelectorAll("input")[3];

sabiranje.value=localStorage.getItem("tacnih_odg_sabiranje");
oduzimanje.value=localStorage.getItem("tacnih_odg_oduzimanje");
mnozenje.value=localStorage.getItem("tacnih_odg_mnozenje");
deljenje.value=localStorage.getItem("tacnih_odg_deljenje");

skor.value=sab_skor+oduz_skor+mnoz_skor+delj_skor;
function resetuj(){
    localStorage.setItem("broj_tacnih_odg",0);
    localStorage.setItem("tacnih_odg_sabiranje",0);
    localStorage.setItem("tacnih_odg_oduzimanje",0);
    localStorage.setItem("tacnih_odg_mnozenje",0);
    localStorage.setItem("tacnih_odg_deljenje",0);
    skor.value=0;
    sabiranje.value=0;
    oduzimanje.value=0;
    mnozenje.value=0;
    deljenje.value=0;
}
let btn_skor=document.querySelectorAll("button")[4];
btn_skor.onclick=resetuj;