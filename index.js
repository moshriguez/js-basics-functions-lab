let blocks
function distanceFromHqInBlocks(street) {
    blocks = Math.abs(42 - street);
    return blocks
}

function distanceFromHqInFeet(street) {
    let distanceInFeet = distanceFromHqInBlocks(street) * 264;
    return distanceInFeet
}

let distanceTravelledInFeet = (street1, street2) => {
    return Math.abs(street1 - street2) * 264
}

let calculatesFarePrice = (start, destination) => {
    let distance = distanceTravelledInFeet(start, destination);
    let price;
    if (distance <= 400) {
        price = 0;
    } else if (distance > 400 && distance <= 2000) {
        price = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        price = 25;
    } else {
        price = 'cannot travel that far'
    }
    return price;
}