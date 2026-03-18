export function justBeatIt(pos1,pos2){
    let pos1_c = converter(pos1[0]);
    let pos1_r = Number(pos1[1]);
    let pos2_c = converter(pos2[0]);
    let pos2_r = Number(pos2[1]);

    if(pos1_c===pos2_c){
        return true;
    }else if(pos1_r===pos2_r){
        return true;
    }else if(Math.abs(pos1_r-pos2_r)===Math.abs(pos1_c-pos2_c)){
        return true;
    }
    return false;
}

function converter(betu) {
    switch (betu) {
        case "a" : return 1;
        case "b" : return 2;
        case "c" : return 3;
        case "d" : return 4;
        case "e" : return 5;
        case "f" : return 6;
        case "g" : return 7;
        case "h" : return 8;
        default : return -1;
    }
}

export function sakkSzekcio() {
    const OK = document.getElementById("ok");
    const KI = document.getElementById("ki");
    const POS1 = document.getElementById("pozicio1");
    const POS2 = document.getElementById("pozicio2");
    OK.addEventListener("click",function () {
        if(justBeatIt(POS1.value,POS2.value)){
            KI.innerText="Nap Pali"
        }else{
            KI.innerText="Lever János"
        }
    })

}