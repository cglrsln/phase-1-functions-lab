function distanceFromHqInBlocks(street) {
    let headquarter=42;
    if (street > headquarter) {

        return street - headquarter;  

    } else {

        return headquarter - street;
    }
}
distanceFromHqInBlocks(42);



function distanceFromHqInFeet(street) {
    let headquarter = 42;
    if (street > headquarter){
        return (street-headquarter)*264;
    } else if(headquarter >= street){
        return (headquarter - street)*264;
    }
}
distanceFromHqInFeet(50);


function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start)*264;
}

distanceTravelledInFeet(50,43);