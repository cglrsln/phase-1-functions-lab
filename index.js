function distanceFromHqInBlocks(street) {
  let headquarter = 42;
  if (street > headquarter) {
    return street - headquarter;
  } else {
    return headquarter - street;
  }
}
distanceFromHqInBlocks(42);


function distanceFromHqInFeet(street) {
  let headquarter = 42;
  if (street > headquarter) {
    return (street - headquarter) * 264;
  } else if (headquarter >= street) {
    return (headquarter - street) * 264;
  }
}
distanceFromHqInFeet(50);


function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
distanceTravelledInFeet(50, 43);


function calculatesFarePrice(start, destination){
    let traveledDistance = Math.abs(start - destination)* 264;
    if (traveledDistance < 400){
        return "Free Ride!";
    }else if (traveledDistance > 400 && traveledDistance <= 2000){
        return ` Your total is ${((traveledDistance - 400)*2)/100} dollars`;
    }else if (traveledDistance > 2500){
        return "cannot travel that far";
    }else if(traveledDistance > 2000 && traveledDistance <= 2500){
        return "Flat Rate: 30 dollars"
    }
}