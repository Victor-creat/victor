//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function carSpeed(speed){
   if(speed===80){
    console.log(`${speed} Points: 2`);
   } else if(speed <= 70){
    console.log(`${speed} OK`);
   } else {
     (speed>70)
      console.log('1 demerit point');
      console.log('12 demerit points');
   }
}
function carPoints(points){
    if(points>12) {
        console.log(`${points} "Your License has been suspended"`);
    }
}
   carSpeed(75);
   carPoints(10);

