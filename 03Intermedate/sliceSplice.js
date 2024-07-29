//STARTER IS INCLUSIVE  &&  ENDER IS EXCLUSIVE

// Slice in array ::
// slice(starter value,ender value) it will print the values in between OR you can also pass the starter value by .slice(starter value) it will just eleminate the starting value and print rest of it

var users = ["Ted" , "Tim" , "Ton" , "Sam" , "Sor" , "Sod"];

console.log(users.slice(0,5));


// Splicing in array::

//splice(number to count from , counting number upto for deletion of those index elements, the value we wnat to put as many as you want);

users.splice(1,3,4,5);// 1 is my starter point , 3 is my count upto number, (4,5) are the values I want to put on that array in place of index no. 1-3 because it starts from 1 and go upto 3 and simuntaniously delete all those.
console.log(users);

