// student marks prompt and grade output

function studentGrade(){
    
    let input = prompt("Enter student marks (0-100):");

    //convert input to a number

    let marks = parseInt(input);

    //check if input is a number

    if(isNaN(marks)){
        alert("Please enter a number between 0 and 100");
        return;
    }

    // determining the grade based on the input

    let grade;
    if (marks > 79){
        grade = "A";
    } else if (marks >=60){
        grade = "B";
    } else if (marks >=50){
        grade = "C";
    } else if (marks >=40){
        grade = "D";
    } else if (marks >=0){
        grade = "E";
    }
}
studentGrade("54");