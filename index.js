const Hq = 42

function distanceFromHqInBlocks(streetNumber){
    console.log(streetNumber - Hq)
    let distance = streetNumber - Hq
    if(distance < 0){
        distance = distance * -1
    }
    return distance
}
function distanceFromHqInFeet(streetNumber){
    console.log(streetNumber - Hq)
    let distance = streetNumber - Hq  
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}
function distanceTravelledInFeet(streetNumber1, streetNumber2){
    console.log(streetNumber1 - streetNumber2)
    let distance = streetNumber1 - streetNumber2
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}
function calculatesFarePrice()
