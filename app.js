var ip, mascara, or = 0, and = 0, subrede = 0, host = 1, hosts;

const Mask = document.getElementById("Mask"), Aip = document.getElementById("AIp"), botao = document.getElementById("botao");

const tela = document.getElementById("tela");

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

botao.addEventListener("click", (e)=>{
    e.preventDefault();

    ip = dec2bin(Aip);
    mascara = dec2bin(parseInt(Mask));

    for(var i = 0; i<9;i++){
        if(ip[i] == 1 || mascara[i] == 1){
            or[i] = 1;
        }else{
            or[i] = 0;
        }

        if(ip[i] == 1 && mascara[i] == 1){
            and[i] = 1;
        }else{
            and[i] = 0;
        }
    }

    for(var i = 0; i<9;i++){
        if(mascara[i] == 1){
            subrede[i]++;
        }
    }

    hosts = 32 - subrede;

    for(var i = 1; i<hosts;i++){
        host*= 2;
    }

    tela.innerHTML += `
        IP: ${Aip}     ${ip}
        MASCARA: ${Mask}       ${mascara}
        MASCARA WILD CARD:    
    `;
})