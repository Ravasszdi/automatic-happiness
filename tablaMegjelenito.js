function tablaElem(adat={"nev":"","nemzetiseg":"","gyozelmek_szama":""}){
    return `
        <tr>
            <td>${adat.nev}</td>
            <td>${adat.nemzetiseg}</td>
            <td>${adat.gyozelmek_szama}</td>
        </tr>`
}


export function tablaFormazo(adat=[]){
    let inner = "";
    for (let i = 0; i < adat.length; i++) {
        inner += tablaElem(adat[i]);
    }
    return inner
}