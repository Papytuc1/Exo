class Chrono {
    constructor(){
        this.currentTime = 0;
        this.interval;
        this.time;
        this.min = 0;
        this.s = 0;
        this.ms = 0;
        this.affichage = document.querySelectorAll(".affichage");
    } 
    run() {
        this.ms ++;    
        if (this.ms == 10) {
            this.ms = 0;
            this.currentTime += 1;
            this.s += 1;
        }
        if (this.s == 60) {
            this.s = 0;
            this.min += 1;
        }
        this.affichage[0].textContent = this.min + "min";
        this.affichage[1].textContent = this.s + "s";
        this.affichage[2].textContent = this.ms + "ms";
        return this.currentTime;
    }
    start() {
        this.interval = setInterval(this.run.bind(this), 100);
        return this.interval;
    }
    pause() {
        this.time = this.run();
        clearInterval(this.interval);
    }
    stop() {
        this.min = 0, this.s = 0, this.ms = 0;
        this.currentTime = 0;
        clearInterval(this.interval);
        this.affichage[0].textContent = "0min";
        this.affichage[1].textContent = "0s";
        this.affichage[2].textContent = "0ms";
    }
}
let chronometre = new Chrono();
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