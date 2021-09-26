
// incremental summition
// let sum = 0;
// for(let i = 1; i<=6; i++){
//     sum = sum + i;
// }
// console.log(sum);

//decremental summition
// let sum = 0;
// for(let i = 6; i >=1;i--){
//      sum = sum + i;
// }
// console.log(sum);

//function r maddhome summition
function sum(i){
    if(i == 1){
        return 1;
    }
    return  i + sum(i-1) ;
}
             // i + sum(i -1);
//  6 + 5 + 4 +3 + 2 +sum(1)

console.log(sum(6));
