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
function distanceTravelledInFeet(streetNumber){
    console.log(streetNumber1 - streetnumber2)
    let distance = streetNumber1 - streetNumber2
    if(distance < 0){
        distance = distance * -1
    }
    return distance * 264
}
