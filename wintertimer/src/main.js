function getTimeRemaining(a) {
    let t = Date.parse(a) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function initializeClock(a, b) {
    let c = document.getElementById(a);
    let d = c.querySelector(".days");
    let e = c.querySelector(".hours");
    let f = c.querySelector(".minutes");
    let g = c.querySelector(".seconds");

    function updateClock() {
        let t = getTimeRemaining(b);
        if (t.total <= 0) {
            document.getElementById("timer").className = "hidden";
            document.getElementById("deadline-message").className = "visible";
            clearInterval(h);
            return true
        }
        d.innerHTML = t.days;
        e.innerHTML = ("0" + t.hours).slice(-2);
        f.innerHTML = ("0" + t.minutes).slice(-2);
        g.innerHTML = ("0" + t.seconds).slice(-2)
    }
    updateClock();
    let h = setInterval(updateClock, 1000)
}
let deadline = '2024-01-01';
initializeClock('timer', deadline);

document.getElementById('current_year').innerHTML = new Date().getFullYear();