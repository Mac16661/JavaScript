// this points towards the window object, global object , in case of node global empty object

//for all regular function calls this point towards to window objects

console.log(this);// in node it will give an empty object and on browser it will give window obj.

var user = {
    firstName : "Mac",
    courseCount: 4,
    getCourseCount: function(){ // this is an object function
        console.log("line 7",this);
        function sayHello(){
            console.log("hello");
            console.log("line 10",this);
        }
        sayHello(); // this is regular function call it will just return the window obj.
    },
}

user.getCourseCount();//this will give  th entire user object and this is an object function call