function avgArraySum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum= sum+arr[i];
    }
    
    let avg=0;
    avg=sum/arr.length;
    return avg;
}
console.log(avgArraySum([10,20,30,40]));