import {justBeatIt} from "./sakkLepes.js";

const TESZTESETEK = [
    {
        pos1:"a1",
        pos2:"c1",
        vart:true,
        szoveg:"egy oszlopban nem működik"
    },
    {
        pos1:"a1",
        pos2:"a5",
        vart:true,
        szoveg:"egy sorban nem működik"
    },
    {
        pos1:"a1",
        pos2:"b5",
        vart:false,
        szoveg:"nem ütik egymást"
    },
    {
        pos1:"a1",
        pos2:"c3",
        vart:true,
        szoveg:"átló nem működik"
    },
    {
        pos1:"c3",
        pos2:"a1",
        vart:true,
        szoveg:"átló nem működik"
    },
    {
        pos1:"d1",
        pos2:"a4",
        vart:true,
        szoveg:"átló nem működik"
    },
    {
        pos1:"a4",
        pos2:"d1",
        vart:true,
        szoveg:"átló nem működik"
    },
    {
        pos1:"x1",
        pos2:"z1",
        vart:true,
        szoveg:"valami ami amieika nem működik"
    },
]

export function justBeatItTeszt(){
    for (let i = 0; i < TESZTESETEK.length; i++) {
        console.assert(justBeatIt(TESZTESETEK.pos1, TESZTESETEK.pos2) === TESZTESETEK.vart,
            TESZTESETEK.szoveg
        )
    }
}