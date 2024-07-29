// console.log("start");

//This is an async function set timeout work as a async function
// setTimeout(() => {
//     console.log("We are in timeout");
// }, 5000);

// console.log("End");

console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('Now we have the data');
        callback({userEmail: email, passwords: password})
    }, 2000);
} 

function getUserVideos(email,callback) {
    setTimeout(() => {
        callback(["video1", "video2", "video3"]);
    },1000);
}

const user = loginUser("devedF@gmail.com", 12345, user => {
    console.log(user);
    getUserVideos(user.usesrEmail, vidoe => {
        console.log(vidoe);
    });
});

console.log("Finish");

//TODO: better way of handelling it is Promisses