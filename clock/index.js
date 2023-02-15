function showTime() {
    let date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;

    document.querySelector(".container").innerHTML = time;

    setTimeout(showTime, 1000);
}

showTime();