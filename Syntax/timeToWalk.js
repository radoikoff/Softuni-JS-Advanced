function calculateTime(steps, span, speed) {

    const distance = (steps * span); //meters
    const numberOfRests = parseInt(distance / 500);
    let time = distance / (speed / 3.6); //sec
    time += numberOfRests * 60;

    const hours = parseInt(time / 3600);
    const minutes = parseInt((time % 3600)/60);
    const seconds =  Math.round((time % 60)%60);


    return `${hours.toFixed(0).padStart(2,'0')}:${minutes.toFixed(0).padStart(2,'0')}:${seconds.toFixed(0).padStart(2,'0')}`;

}

console.log(calculateTime(2564, 0.70, 5.5));