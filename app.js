import Timer, {durationInput, startButton, stopButton} from './modules/Timer.js'

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

let duration;
const time = new Timer(durationInput, startButton, stopButton, {
    onStart(totalDuration) {
        duration = totalDuration
        console.log('start')
    },
    onTick(timeRemaining ) {
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete() {
        console.log('complete')
    }
})
