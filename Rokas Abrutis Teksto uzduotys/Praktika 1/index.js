
let text = "lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem odit laborum amet repudiandae tenetur blanditiis reprehenderit consectetur, suscipit totam nihil sequi, velit culpa earum architecto. Blanditiis corporis sit optio odio rerum reprehenderit, mollitia repellat soluta voluptate iusto fugiat qui beatae deleniti exercitationem quidem, numquam illum nemo, consequuntur non itaque!"

function upperCase() {
    text1 = text.toUpperCase();
    return text1;
}

function lowerCase() {
    text1 = text.toLowerCase();
    return text1;
}

function firstLetterUpperCase() {
    let text1 = "";
    for(let i = 0; i < text.length; i++) {
        i == 0 ? text1 += text[i].toUpperCase() : text1 += text[i];
    }
    return text1;
}

function firstLetterOfWord() {
    words = text.split(" ");
    return words.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();        
      });
      
}



document.querySelector(".root").innerHTML += "<h1>tekstą padaro didžiosiomis raidėmis:</h1>";
document.querySelector(".root").innerHTML += upperCase();
document.querySelector(".root").innerHTML += "<h1>tekstą padaro mažosiomis raidėmis</h1>";
document.querySelector(".root").innerHTML += lowerCase();
document.querySelector(".root").innerHTML += "<h1>teksto pirmąją raidę padaro didžiąja</h1>";
document.querySelector(".root").innerHTML += firstLetterUpperCase();
document.querySelector(".root").innerHTML += "<h1>visų žodžių pirmąsias raides padaro didžiosiomis.</h1>";
document.querySelector(".root").innerHTML += firstLetterOfWord().join(" ");