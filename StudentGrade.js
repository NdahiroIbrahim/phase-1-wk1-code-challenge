const prompt = require('prompt-sync')();

function studentGrader(){
    const marks = parseInt(prompt('Enter your Mark: '));
    if (marks<=100 && marks>79){
        console.log('A')
    }else if (marks<=79 && marks>=60){
        console.log('B')
    }else if(marks<=59 && marks>49){
        console.log('C')
    }else if (marks<=49 && marks>=40){
        console.log('D')
    }else if( marks>40){
        console.log('E')
    }else if (marks<0 || marks>100 ){
        console.log("invalid mark")
    }
    console.log(`Mark: ${marks}`);
}
studentGrader();