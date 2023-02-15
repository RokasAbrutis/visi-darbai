let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function idk(text) {
    textArr = text.split(" ")
    // Išvesti visus žodžius kurie prasideda raide "u"
    let uArr = [];
    let mArr = [];
    let sqArr =[];
    let dArr = [];
    let fullDArr = [];
    for(let i = 0; i < textArr.length; i++) {
        if(textArr[i][0] == "u" || textArr[i][0] ==='U') {
            uArr.push(textArr[i]);
        } else if(textArr[i][0] == "m" || textArr[i][0] ==='M') {
            mArr.push(textArr[i]);
        } else if(textArr[i][0] == "s" || textArr[i][0] == "S" || textArr[i][0] ==='q' || textArr[i][0] ==='Q') {
            sqArr.push(textArr[i]);
        } else if(textArr[i][0] == "d" || textArr[i][0] ==='D') {
            dArr.push(textArr[i]);
        }
        if(textArr[i][0] ==='d' || textArr[i][0] ==='D'){
            fullDArr[i] = `<b>${textArr[i]}</b>`;
            console.log("working")
        } else {
            fullDArr.push(textArr[i]);
        }
    }

    console.log(dArr)

    let element = `<h1>Išvesti visus žodžius kurie prasideda raide "u"</h1>`;
    element += `<p>${uArr.join(" ")}</p>`
    element += `<h1>Išvesti visus žodžius kurie prasideda raide "m"</h1>`
    element += `<p>${mArr.join(" ")}</p>`
    element += `<h1>Išvesti visus žodžius kurie prasideda raide "s" arba raide "q"</h1>`
    element += `<p>${sqArr.join(" ")}</p>`
    element += `<h1>Išvesti visą tekstą, kuriame būtu paryškinti (<b></b>) visi žodžiai prasidedantys raide "d".</h1>`
    element += `<p>${fullDArr.join(" ")}</p>`
    element += `<h1>Išvesti tokių žodžių skaičių (kiek tokių žodžių yra).</h1>`
    element += `<p>${dArr.length}</p>`

    return element;

}

document.querySelector(".root").innerHTML = idk(text);