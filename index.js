const hq = 42
let distance = (43, 50, 34)
const feet = 264
let travel = (48, 60, 28)

function distanceFromHqInBlocks (distance){
    if (distance > hq)
        return distance - hq 
    else(distance < hq) 
        return hq - distance 
}

function distanceFromHqInFeet (feet) {
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(travel, distance) {
    let disttrav
    if (travel > distance){
        disttrav = travel - distance;
        return (disttrav * 264)
}
    {if (travel < distance)
        disttrav = distance - travel;
        return (disttrav * 264)
    }
}

function calculatesFarePrice (start, destination) {
    let ride = distanceTravelledInFeet(start, destination)
    let price
    if (ride <= 400){ 
        price = 0;
    } else if (ride > 400 && ride <= 2000) {
        price = (ride - 400) * .02;
    } else if (ride > 2000 && ride <= 2500) {
        price = 25;
    } else {
        price = 'cannot travel that far';
    }
    return price 
}

calculatesFarePrice (34, 32)
