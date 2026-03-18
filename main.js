import {megjelenito} from "./fuggvenyek.js";
import {ADAT} from "./adat.js";
import {rendezoGombok} from "./gombok.js";
import {sakkSzekcio} from "./sakkLepes.js";

const TABLAADATELEM = document.querySelector("article tbody");

megjelenito(ADAT,TABLAADATELEM);
rendezoGombok(ADAT,TABLAADATELEM);
sakkSzekcio();