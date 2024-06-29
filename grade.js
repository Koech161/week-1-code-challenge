// Write ypur code here
function calculateGrade(){
    let marks = parseFloat(prompt('Input your marks (0-100):'));
    if(!isNaN(marks) && marks<0 &&marks>100 ){
         alert('invalid input, enter number(0-100)');
         return;
        }

let grade;
if(marks>79){
    grade= 'A';
}else if(marks>=60){
    grade='B';
}else if( marks>=50){
    grade='C';
}else if(marks>=40){
    grade='D';
}else {
    grade='E';
}    //console.log(`input marks: ${marks}`);
     //console.log(`Calculated grade: ${grade}`);
    alert(`The students grade for marks ${marks} is: ${grade}`);
} calculateGrade();