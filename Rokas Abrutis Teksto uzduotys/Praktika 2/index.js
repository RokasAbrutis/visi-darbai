function toDate(str) {
    splitStr = str.split("");
    let newArray = [];
    for(let i = 0; i < splitStr.length; i++) {
       i % 2 == 0 && i != 0 ? newArray.push(":") : null;
       newArray.push(splitStr[i]);
    }
    return newArray.join("");
}

document.querySelector(".root").innerHTML = toDate("082307")