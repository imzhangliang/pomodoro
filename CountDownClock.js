//const Clock = require('./Clock');
import Clock from './Clock.js';


class CountDownClock {
    #clock = null;
    #interval = 500;
    #startTimestamp = null;
    #startStatus = false;
    #intervalHandle = null;
    #showBoardCallback = null;
    #timeoutCallback = null;
    #setMinutes = null;
    #setSeconds = null;
    constructor(minutes, seconds = 0) {
        this.reset(minutes, seconds);
    }

    getSetMinutes() {
        return this.#setMinutes || 0;
    }

    setShowBoardDom(showBoardCb) {
        this.#showBoardCallback = showBoardCb;
        this.refreshShowBoard();
    }

    setTimeoutCallback(cb) {
        this.#timeoutCallback = cb;
    }
    
    refreshShowBoard() {
        if (this.#showBoardCallback) {
            this.#showBoardCallback(this.#clock.getDigitClockString());
        }
    }

    getClock() {
        return this.#clock;
    }

    reset(minutes, seconds = 0) {
        minutes = parseInt(minutes)
        seconds = parseInt(seconds)
        this.stop();
        this.#clock = new Clock(minutes, seconds);
        this.#setMinutes = minutes;
        this.#setSeconds = seconds;
        this.refreshShowBoard();
    }

    start() {
        if (this.#startStatus) {
            return ;
        }

        if (this.#clock.getSeconds() === 0) {
            return ;
        }

        this.#startStatus = true;

        const clockStartTime = this.#clock.getSeconds();
        this.#startTimestamp = +new Date();
        //this.#clock.setTime();
        this.#intervalHandle = setInterval(() => {
            const elapsedSeconds = Math.floor((+new Date() - this.#startTimestamp)/1000);
            let seconds = clockStartTime - elapsedSeconds;
            if (seconds < 0) {
                seconds = 0;
            }
            this.#clock.setTime(seconds);
            this.refreshShowBoard();
            if (seconds == 0) {
                this.timeout();
            }

        }, this.#interval);
    }

    timeout() {
        this.stop();
        if (this.#timeoutCallback) {
            this.#timeoutCallback();
        }
    }

    stop() {
        if (!this.#startStatus) {
            return ;
        }
        this.#startStatus = false;
        clearInterval(this.#intervalHandle);
        this.#intervalHandle = null;
    }
}


//module.exports = CountDownClock;
export default CountDownClock;

