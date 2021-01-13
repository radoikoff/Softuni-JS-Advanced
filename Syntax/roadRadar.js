function radar(speed, area) {
    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            break;
    }

    const overLimit = speed - speedLimit;
    
    let status = '';
    if (overLimit > 0 && overLimit <= 20) {
        status = 'speeding';

    } else if (overLimit > 20 && overLimit <= 40) {
        status = 'excessive speeding';

    } else if (overLimit > 40) {
        status = 'reckless driving';
    }

    if (status) {
        return `The speed is ${overLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }else{
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    
}

console.log(radar(40, 'city'));
console.log(radar(21, 'residential'));
console.log(radar(120, 'interstate'));