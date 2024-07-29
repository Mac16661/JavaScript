const myStates = ["Rajasthan","Delhi","Assam",1948,"Tamil Nadu","West Bengal"];

// for loop

// for(let i= 0; i < myStates.length ; i++){
//     if(typeof myStates[i] !== "string") continue;
//     console.log(myStates[i]);
// }

// while loop

let i = 0;

// while(i < myStates.length){
//     console.log(myStates[i]);
//     i++;
// }

do{
    console.log(myStates[i]);
    i++;
}while(i < myStates.length);