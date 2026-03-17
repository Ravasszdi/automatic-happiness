import {tablaFormazo} from "./tablaMegjelenito.js";


export function megjelenito(adat=[],szuloElem){
    szuloElem.innerHTML = tablaFormazo(adat);
}