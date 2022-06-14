// `distanceFromHqInBlocks`: Returns the number of blocks from Scuber's headquarters to the pickup location. 
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
  }
  // - `distanceFromHqInFeet`: Returns the number of feet from Scuber's headquarters to the pickup location. Use your `distanceFromHqInBlocks` function to help return the correct value here.
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    
  }
  
  // `distanceTravelledInFeet`: Calculates the number of feet a passenger travels given a starting block and an ending block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
    
  }
  // - `calculatesFarePrice`: Given the same starting and ending block as the previous test (_hint hint_), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
  // Finally, Scuber does not allow any rides over 2500 feet — the function returns`'cannot travel that far'` if a ride over 2500 feet is requested.
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400){
      return 0;
    }else if (distanceInFeet > 400 && distanceInFeet < 2000){
      return 0.02*(distanceInFeet - 400)
    }else if (distanceInFeet > 2000 && distanceInFeet < 2500){
      return 25;
    }else {
      return "cannot travel that far";
    }
  
    
}