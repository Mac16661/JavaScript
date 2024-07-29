//THE NORMAL FUNCTION
// function isEven(element) {
//     // if(element % 2 === 0){
//     //     return true
//     // }
//     //     return false;
//     //WE CAN WRITE THE ABOVE CODE LIKE THIS::
//     return element % 2 === 0;
// }
//console.log(isEven(3));

// THE ARROW FUNCTION

//var isEven = (element) => {return element % 2 === 0};

// THE CALL BACK FUNCTION

var res = [2,3,4,8].every((e) => {
    return e % 2 === 0;
})

//var res = [2,3,4].every((e) => e % 2 ===0);// if we dont want to return something then you have to remove the braces and write the code like this.

//var result = [2,4,6,8].every(isEven);// .every will go through each and every elements of the array like for loop and call the isEven function and in output it will give the combile result of the array. (means if all the elements pass the test it will give true otherwise false). WE CAN USE .every IN VARIOUS OTHER CASES.
console.log(res);
