let currentTime = 0;
let interval;
let time;
let min = 0,
    s = 0,
    ms = 0;
let affichage = document.querySelectorAll(".affichage");
class chrono {
    run() {
        ms += 1;
        if (ms == 10) {
            ms = 1;
            currentTime += 1;
            s += 1;
        }
        if (s == 60) {
            s = 1;
            min += 1;
        }
        affichage[0].textContent = min + "min";
        affichage[1].textContent = s + "s";
        affichage[2].textContent = ms + "ms";
        return currentTime;
    }
    start() {
        interval = window.setInterval(this.run, 100);
        return interval;
    }
    pause() {
        time = this.run();
        console.log(time);
        clearInterval(interval);
    }
    stop() {
        min = 0, s = 0, ms = 0;
        currentTime = 0;
        clearInterval(interval);
        affichage[0].textContent = "0min";
        affichage[1].textContent = "0s";
        affichage[2].textContent = "0ms";
    }
}
let chronometre = new chrono();
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
stop.disabled = true;
start.onclick = function () {
    document.querySelector(".container").style.backgroundColor = "green";
    chronometre.start();
    this.disabled = true;
    stop.disabled = false;
    pause.disabled = false;
};
pause.onclick = function () {
    document.querySelector(".container").style.backgroundColor = "orange";
    chronometre.pause();
    this.disabled = true;
    start.disabled = false;
};

stop.onclick = function () {
    document.querySelector(".container").style.backgroundColor = "red";
    chronometre.stop();
    this.disabled = true;
    start.disabled = false;
};