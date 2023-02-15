

// Parašyti  funkciją, kuri atsitiktinai sugeneruotu slaptažodį.

// Funkcijoje turi būti slaptažodžio ilgio ir sudėtingumo pasirinkimas.

// Sudėtingumas priklauso nuo to, kokie simboliai naudojami slaptažodyje:

// lygis 1: "1234567890"

// lygis 2: "1234567890abcefghijklmnopqrstuvwxyz"

// lygis 3: "1234567890abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Pasinaudojant funkcija sugeneruoti slaptažodį ir jį išvesti.

let lygis1 = "1234567890";
let lygis2 = "1234567890abcefghijklmnopqrstuvwxyz";
let lygis3 = "1234567890abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function passwordMaker(ilgis, sunkumas) {
    let passwordArr = [];
    for(let i = 0; i < ilgis; i++) {
        if(sunkumas == 1) {
            passwordArr.push(lygis1[Math.floor(Math.random() * (lygis1.length))])
        } else if(sunkumas == 2){
            passwordArr.push(lygis2[Math.floor(Math.random() * (lygis2.length))])
        } else if (sunkumas == 3) {
            passwordArr.push(lygis3[Math.floor(Math.random() * (lygis3.length))])
        }
    }

    return passwordArr.join("");

}

document.querySelector(".root").innerHTML = passwordMaker(20, 3);