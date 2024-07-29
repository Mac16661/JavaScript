// FILL AND FILTER METHOD IN ARRAY : -->>

    //starter number is inclusive 
    //ender number is exclusive

// fill(the number or char or anything you want to put in the array , the starter number , the ending number));

var testArray = [2,4,6,3,1,5,9,8];

console.log(testArray.fill("h",2,5));// here I want to fill the array with character "h" , and my starter number is 2, my ending number is 5. SO IT MEANS IT WILL START WITH INDEX NUMBER 3 BECAUSE STARTER IS INCLUSIVE IN MANNER AND END IN INDEX 4 BECAUSE IT IS EXCLUSIVE IN MANNER AND FILL EVERY ELEMENT IN BETWEEN STARTER AND ENDER WITH THE GIVEN CHARACTER.


const myNumbers = [24,34,55,32,65,87,12,87,22]

const result = myNumbers.filter( (num) => num == 55); // in this method you can  put any logical operator != ,>,<,>=,<= etc...
console.log(result);


// WE can store an expression from a varible
a=10
b = a!=10;
if(b){
    console.log("t");

}else{
    console.log("f");
}