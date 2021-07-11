export const durationInput = document.querySelector('.duration')
export const startButton = document.querySelector('.start')
export const stopButton = document.querySelector('.stop')

export default class Timer {
    constructor(duration, start, stop, callbacks) {
        this.durationInput = duration
        this.startButton = start
        this.stopButton = stop
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        //Adding event listeners to the buttons
        this.startButton.addEventListener('click', this.startTime)
        this.stopButton.addEventListener('click', this.stopTime)
    }

    startTime = () => {
        if(this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.interval = setInterval(this.tick, 20)
    }

    stopTime = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - .02
        if(this.onTick) { 
            this.onTick(this.timeRemaining)
        }
        if(this.timeRemaining <= 0) {
            console.log(this.timeRemaining)
            this.stopTime()
            if(this.onComplete) {
                this.onComplete()
            }
        }

    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        return this.durationInput.value = time.toFixed(2)
    }
}