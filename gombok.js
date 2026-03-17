import {megjelenito} from "./fuggvenyek.js";

const NNOV = document.getElementById("nevn");
const NCSOK = document.getElementById("nevcs");
const GYNOV = document.getElementById("gyozn");
const GYCSOK = document.getElementById("gyozcs");



export function rendezoGombok(adat,szuloelem){
    NNOV.addEventListener("click",function () {
        adat.sort(function (a,b) {
            return a.nev < b.nev ? -1:1;
        })
        console.log(adat);
        megjelenito(adat,szuloelem);
    })
    NCSOK.addEventListener("click",function () {
        adat.sort(function (a,b) {
            return a.nev < b.nev ? 1:-1;
        })
        console.log(adat);
        megjelenito(adat,szuloelem);
    })
    GYNOV.addEventListener("click",function () {
        adat.sort(function (a,b) {
            return a.gyozelmek_szama - b.gyozelmek_szama;
        })
        console.log(adat);
        megjelenito(adat,szuloelem);
    })
    GYCSOK.addEventListener("click",function () {
        adat.sort(function (a,b) {
            return b.gyozelmek_szama - a.gyozelmek_szama;
        })
        console.log(adat);
        megjelenito(adat,szuloelem);
    })

}


