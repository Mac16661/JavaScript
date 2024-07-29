var user = {
    firstName : "Subhodip",
    lastName : "Ghosh",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName) {
        this.courseList.push(courseName);// this kewWord is used to define the user so this statement means user.courseList.push();
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    info : function (){
        return `USERNAME is ${this.firstName} ${this.lastName} role ${this.role} loginCount is ${this.loginCount} is on facebook ${this.facebookSignedIn} and no of course persued ${this.courseList}`
    }
};

user.buyCourse("React js course");
user.buyCourse("Anguler js");
console.log(user.getCourseCount());

console.log(user.info()); // it return a string and string cannot be converted into table