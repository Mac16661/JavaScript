
// THIS IS THE RECOMANDED WAY OF CREATING THE OBJECTS.

var User = function(firstName,courseCount){ // Functional approach of defining objects
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function() { // property of object created outside of the object using protptype
    console.log(`your firstname is : ${this.firstName}`)// it can access the variables inside the object 
}

var hitesh = new User("hitesh",2);
hitesh.getCourseCount();
hitesh.getFirstname(); // calling the object created outside but if the property dosent exists , property was not inserted nicely than it will give undefine to counter that we  have an better way of writing it in line no 24;

//console.log(mac);

var sam = new User("sam",1);
sam.getCourseCount();
if(sam.hasOwnProperty("firstName")){ // hasOwnPropert will return either true or false
    sam.getFirstname;// if consition is true than it will call this method se of property dosent exists it will not show undefined.
}
//console.log(sam);


// ANOTHER WAY OF CREATING AN OBJECT 

// object prototyping ::
 
var User = {
    name : "",
    getUserName : function () {
        console.log(`User name is : ${this.name}`);
    }
};

// creating the object
var hitesh = Object.create(User);
console.log(hitesh);
hitesh.name = "macY";
hitesh.getUserName();

