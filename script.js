let homem = document.getElementById("homem");
let mulher = document.getElementById("mulher");
let crianca = document.getElementById("crianca");
let opcao =document.getElementById("opcao");
let  car = document.getElementById("car");
let cer = document.getElementById("cer");
let ref = document.getElementById("ref");
let agu =document.getElementById("agu");
let carn=document.getElementById("carn");
let cerv=document.getElementById("cerv");
let refr=document.getElementById("refr");
let aguaA=document.getElementById("aguaA")
//vamos aos calculos [0]=festa e [1]= churras
let carne = [0.7, 0.4];
let cerveja = [1.5, 1.0];
let refrigerante = [ 1.0, 0.6];
let agua = [1.0, 0.5]
function calc(){
    let h = homem.value;
    let m = (mulher.value*0.8);
    let c = (crianca.value)*0.5;
    let opc= opcao.value
    function total(){
    if (opc == "festa") return [((carne[0]*h)+ (carne[0]*m)+(carne[0]*c)) ,((cerveja[0]*h)+ (cerveja[0]*m)+(cerveja[0]*0)), ((refrigerante[0]*h)+ (refrigerante[0]*m)+(refrigerante[0]*c)), ((agua[0]*h)+ (agua[0]*m)+(agua[0]*c))];
    else return [((carne[1]*h)+ (carne[1]*m)+(carne[1]*c)) ,((cerveja[1]*h)+ (cerveja[1]*m)+(cerveja[1]*0)), ((refrigerante[1]*h)+ (refrigerante[1]*m)+(refrigerante[1]*c)), ((agua[1]*h)+ (agua[1]*m)+(agua[1]*c))];}   
    console.log(total()[0])
    car.innerHTML =total()[0].toLocaleString('pt-BR') + " kg de carne.";
    cer.innerHTML =total()[1].toLocaleString('pt-BR') + " litros de cerveja.";
    ref.innerHTML =total()[2].toLocaleString('pt-BR') + " litros de refrigerante.";
    agu.innerHTML =total()[3].toLocaleString('pt-BR') + " litros de água.";
    carn.innerHTML="Lembrando que consideramos a soma de qualquer tipo de carne.";
    cerv.innerHTML=Math.ceil(total()[1]/0.350) + " latas ou " + Math.ceil(total()[1]/0.473) + " latões de cerveja.";
    refr.innerHTML=Math.ceil(total()[2]/0.350) + " latas ou " + Math.ceil(total()[2]/2) + " garrafas de 2l de refrigerante.";
    aguaA.innerHTML=Math.ceil(total()[3]/0.5) + " garrafas de 500ml de água.";
}

