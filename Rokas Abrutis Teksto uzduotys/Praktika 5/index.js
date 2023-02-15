
function splitEmail(email) {
    let element = `<h1>El. pastas: ${email}</h1>`
    let arr = email.split("");
    let newArr = [];
    for(let i = 0; i < email.length; i++) {
        if(arr[0] != "@") {
            newArr.push(arr[0])
            arr.splice(0, 1);
        } else {
            arr.splice(0, 1);
            break;
        }
    }
    element += `<h1>Vartotojas: ${newArr.join("")}</h1>`;
    element += `<h1>Domenas: ${arr.join("")}</h1>`;
    return element;
}

document.querySelector(".root").innerHTML = splitEmail("jonas.jonaitis@mail.lt");