
// function url(link) {
//     let protocol = [];
//     let fileName = [];

//     let num = 0;

//     for(let i = 0; i < link.length; i++) {
//         if(link[i] != ":" && link[i] != "/") {
//             protocol[i] = link[i];
//     } else {
//         break;
//     }
// }

// let element = `Protokolas: ${protocol.join("")} <br>`;


// for(let i = 0; i < link.length; i++) {
//     if(link[i] + link[i - 1] + link[i - 2] == "php") {
//         for(let j = 0; j < link.length; j++) {
//             if(link[i - num] != ":" && link[i - num] != "/") {
//                 fileName.push(link[i - num])
//                 num++;
//             } else {
//                 break;
//             }
//         }
//     }
// }
// element += `Failo Pavadinimas: ${fileName.reverse().join("")}`;
// return element;
   
// }


// document.querySelector(".root").innerHTML = url("http://www.svetaine.lt/public_html/index.php");


function splitUrl(url) {
    urlArr = url.split(/[/:]+/);
    console.log(urlArr)

    element = `<h1>Protokolas: ${urlArr[0]}</h1>`
    element += `<h1>Domenas: ${urlArr[1]}</h1>`
    element += `<h1>Aplankas: ${urlArr[2]}</h1>`
    element += `<h1>failas: ${urlArr[3]}</h1>`


    return element;
}

document.querySelector(".root").innerHTML = splitUrl("http://www.svetaine.lt/public_html/index.php");