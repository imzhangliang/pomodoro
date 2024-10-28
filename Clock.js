
class Clock {
    #seconds = 0;

    constructor(minutes, seconds = 0) {
        this.setTimeMinutes(minutes, seconds);
    }

    setTime(seconds) {
        this.#seconds = seconds;
        // console.log('setTime', seconds);

    }

    setTimeMinutes(minutes, seconds = 0) {
        this.setTime(60 * minutes + seconds);
    }

    getSeconds() {
        return this.#seconds;
    }

    getDigitClockString() {
        //console.log('this.#seconds', this.#seconds);
        const minutes = Math.floor(this.#seconds / 60);
        const seconds = this.#seconds % 60;
        const minutesStr = String(minutes).padStart(2, '0');
        const secondsStr = String(seconds).padStart(2, '0');
        
        //console.log(`return ${minutesStr} ${secondsStr}`);


        return `${minutesStr}:${secondsStr}`;
    }

}

//module.exports = Clock;
export default Clock;
