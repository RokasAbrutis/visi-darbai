
function multChart(number) {

    element = "";
    element += "<table class='table'>"
    for (let i = 1; i <= 10; i++) {
        element += "<tr class='tr-element'>"
        for(let j = 1; j <= number; j++) {
            result = i * j;
            element += `<th class="th-element">${j} * ${i} = ${result}</th>`;
        }
        element += "</tr>";
    }
    
    element += "</table>";
    document.querySelector(".root").innerHTML = element;
}

multChart(10);