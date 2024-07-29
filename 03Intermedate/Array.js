var countries = ["India","USA","Japan","Russia"];

var states = new Array("Rajasthan","Delhi","Mumbai","Assam")

//console.log(states); to access all the array elemants

console.log(states[2]); //Like 0,1,2,3..

console.log(states.length);//it will give length of the array.

states[0] = "Punjab";//changing the specific array.
console.log(states);

var user = ["hitesh","hitesh@gmail.com",3,34,true];//javaScript will not comaplain about this datastructure but thsi is a very bad practice.

console.log(user);

user.pop()//get rid of the last value
console.log(user);

user.unshift("NEW VALUE");//it will add the value in the parenthesis in the array but it is quite expensive to shift all the value.
console.log(user);
user.shift()//it will remove the value from the front
console.log(user);

console.log(user.indexOf("hitesh"));//it find the index where the element matches. And if u put something which is not there in the array it will give "-1"
console.log(user);

console.log(Array.from("hitesh"));//this can conver any thing ,"any thing" into array and string is one of many thing.


//READ DOCUMENTATION