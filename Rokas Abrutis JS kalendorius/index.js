

// stored all the weekdays so i can loop through them later
let weekDays = ["Pr", "A", "T", "K", "Pn", "Š", "S"]
let menesiai = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"]

function calendar(year, month) {
    
    // some logic if month and yaer are missing || year is missing || month is missing; displays todays year and month
    var today = new Date();
    var mm = String(today.getMonth());
    
    if (!month && !year) {
        year = today.getFullYear();
        month = menesiai[mm];
    } else if(typeof year === 'string') {
        month = year;
        year = today.getFullYear();
    } else if (!month) {
        month = menesiai[mm];
    } 

    // key = month names, values = [how many days there are in that month, on which week day the month starts - 1]
        let months = {
            Sausis: [31, 5],
            Vasaris: [year % 4 != 0 ? 28 : year % 100 == 0 && year % 400 != 0 ? 28 : 29, 1],
            Kovas: [31, 1],
            Balandis: [30, 4],
            Gegužė: [31, 6],
            Birželis: [30, 2],
            Liepa: [31, 4],
            Rugpjūtis: [31, 0],
            Rugsėjis: [30, 3],
            Spalis: [31, 5],
            Lapkritis: [30, 1],
            Gruodis: [31, 3],
        }

    // made a new variable so i dont have to change the main months object
    let monthStartPos = months[month][1];
    // logic on what weekday month should start
    if (year > 2022) {
        for (let i = 2023; i <= year; i++) {
            if (i % 4 == 0 && month != "Sausis" && month != "Vasaris" && i % 100 == 0 && i % 400 != 0) {
                monthStartPos += 1;
                monthStartPos > 6 ? monthStartPos = 0 : null;
            } else if (i % 4 == 0 && month != "Sausis" && month != "Vasaris") {
                monthStartPos += 2;
                monthStartPos == 7 ? monthStartPos = 0 : null;
                monthStartPos == 8 ? monthStartPos = 1 : null;
            } else if ((i - 1) % 4 == 0 && month == "Sausis" && (i - 1) % 100 == 0 && (i - 1) % 400 != 0 || (i - 1) % 4 == 0 && month == "Vasaris" && (i - 1) % 100 == 0 && (i - 1) % 400 != 0) {
                monthStartPos += 1;
                monthStartPos > 6 ? monthStartPos = 0 : null;
            } else if ((i - 1) % 4 == 0 && month == "Sausis" || (i - 1) % 4 == 0 && month == "Vasaris") {
                monthStartPos += 2;
                monthStartPos == 7 ? monthStartPos = 0 : null;
                monthStartPos == 8 ? monthStartPos = 1 : null;
            } else {
                monthStartPos += 1;
                monthStartPos > 6 ? monthStartPos = 0 : null;
            }
        }
    }
    // logic on what weekday month should start
    if (year < 2022) {
        for (let i = 2021; i >= year; i--) {
            if ((i + 1) % 4 == 0 && month != "Sausis" && month != "Vasaris" && (i + 1) % 100 == 0 && (i + 1) % 400 != 0) {
                monthStartPos = monthStartPos - 1;
                monthStartPos < 0 ? monthStartPos = 6 : null;
            } else if ((i + 1) % 4 == 0 && month != "Sausis" && month != "Vasaris") {
                monthStartPos -= 2;
                monthStartPos == -1 ? monthStartPos = 6 : null;
                monthStartPos == -2 ? monthStartPos = 5 : null;
            } else if (i % 4 == 0 && month == "Sausis" && i % 100 == 0 && i % 400 != 0 || i % 4 == 0 && month == "Vasaris" && i % 100 == 0 && i % 400 != 0) {
                monthStartPos = monthStartPos - 1;
                monthStartPos < 0 ? monthStartPos = 6 : null;
            } else if (i % 4 == 0 && month == "Sausis" || i % 4 == 0 && month == "Vasaris") {
                monthStartPos -= 2;
                monthStartPos == -1 ? monthStartPos = 6 : null;
                monthStartPos == -2 ? monthStartPos = 5 : null;
            } else {
                monthStartPos = monthStartPos - 1;
                monthStartPos < 0 ? monthStartPos = 6 : null;
            }
        }
    }

    // starting the table construction
    element = "";

    element += `<table>`
    element += `<tbody>`
    element += `<h2>${year} ${month}</h2>`

    // displaying all the weekdays
    for (let i = 0; i < weekDays.length; i++) {
        i != 6 ? element += `<th>${weekDays[i]}</th>` : element += `<th style="color: red;">${weekDays[i]}</th>`;
    }

    // how many rows should the calendar have
    let rows;
    if (months[month][1] > 5) {
        rows = 6;
    } else if (month == "Vasaris" && monthStartPos == 0 && months["Vasaris"][0] == 28) {
        rows = 4;
    } else {
        rows = 5;
    }
    // getting previous months days so that the program knows what to display before the first day of the month
    function previousMonth() {
        for (let i = 0; i < Object.entries(months).length; i++) {
            if (month == "Sausis") {
                return 31;
            }
            else if (Object.entries(months)[i][0] == month) {
                return Object.entries(months)[i - 1][1][0]
            }
        }
    }

    // made a new variable with months starting position so the program knows how many last months days to display
    let startOfMonth = monthStartPos;

    element += `</tr>`
    let day = 0;
    let day2 = 1
    for (let i = 0; i < rows; i++) {
        element += `<tr>`
        for (let k = 0; k < 7; k++) {
            if (startOfMonth != 0) {
                element += `<td><i>${previousMonth() - (startOfMonth - 1)}</i></td>`;
                startOfMonth -= 1;
            } else {
                if (day != months[month][0]) {
                    day += 1;
                    k != 6 ? element += `<td>${day}</td>` : element += `<td style="color: red;">${day}</td>`;
                } else {
                    k != 6 ? element += `<td><i>${day2}</i></td>` : element += `<td style="color: red;"><i>${day2}</i></td>`;
                    day2 += 1;
                }
            }
        }
        element += `</tr>`
    }

    element += `</table>`
    element += `</tbody>`

    return element;
}

document.querySelector(".root").innerHTML = calendar(7000, "Kovas");