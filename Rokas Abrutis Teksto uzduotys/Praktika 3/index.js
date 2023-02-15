let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function findPhrase(phrase) {
    text1 = text.replace(phrase, `<b>${phrase}</b>`)
    return text1;
}

document.querySelector(".root").innerHTML = findPhrase("tempor incididunt");