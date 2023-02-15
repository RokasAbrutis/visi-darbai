
// tile = how many tiles you want the chess board to have || width of a pixel

function chess(tiles) {

const root = document.querySelector(".root");
const table = document.createElement("table");
root.append(table)

for(let i = 1; i <= tiles; i++) {
    var tr = document.createElement("tr");
    if(i % 2 != 0) {
        tr.className = "row1";
    } else {
        tr.className = "row2";
    }
    for(let j = 1; j <= tiles; j++) {
        var td = document.createElement("td");
        if(j % 2 != 0 && tr.className == "row1") {
            td.className = "black";
        } else if (j % 2 == 0 && tr.className == "row2") {
            td.className = "black";
        }else {
            td.className ="white";
        }
        tr.append(td);
    }
    table.append(tr);
}


}

chess(8);