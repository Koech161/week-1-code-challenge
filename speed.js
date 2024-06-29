//Write your code here
function speedCheck(speed){
    const speedLimit= 70;
    const kmPerDemerit= 5;
    const maxDemerit=12;
    if(speed<70){
        return 'Ok';
    }else {
        const excessSpeed= (speed-speedLimit);
        const demeritPoints=math.floor(excessSpeed / kmPerDemerit);
        if(demeritPoints>maxDemerit){
            return 'License suspended.';
        }else{
            return (`Demerit pionts:${demeritPoints}`);
        }
    }
}
function main(){
    let speed =parseFloat(prompt('input car speed in(km/hr):'));
    if(!isNaN(speed)){
       let result=speedCheck(speed);
       alert(result);
    }else{
        alert('Invalid input');
    }
}main();