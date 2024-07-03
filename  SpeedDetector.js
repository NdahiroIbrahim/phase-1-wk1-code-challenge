// speed detector solution

function speedDetector(speed){

    let demeritPoints =0;
    if(speed > 70){

        // calculating th number of demerit points
        // Math.floor rounds the number down to the nearest whole number

        demeritPoints = Math.floor((speed - 70)/5);

        // chcking if the driver has more than 12 points

        if(demeritPoints > 12){
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
       
    } else {
        return "Ok";
    }
}
console.log(speedDetector(80));
