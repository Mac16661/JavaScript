// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Got the user");
//         // resolve({ user: "ed" });
//         reject(new Error('user not logged in '))
//     }, 2000);
// });

// promise.then(user => {
//     console.log(user);
// }).catch(err => console.log(err.message));


// TODO: better way of handlelling promisses

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ UserEmail: email });
        }, 3000)
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function getVideoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is new video ");
        }, 2000);
    });
}

// TODO: better way then in app js (promises is the better way of handeling async code)
// loginUser("Sub@gmail.com", "subhodip")
// .then((user) => {
//     console.log("user: ",user);
//     getUserVideos(user).then((videos) => {
//         console.log("Videos: ", videos);
//         getVideoDetails(videos[0])
//         .then((detail) => console.log("video 1 detail:  ",detail));
//     })
// });

//TODO: above code is running one by one like first we are fetching data from loginUser then getUserVidoes and then getVideoDetails (kind of syncronus code in inside promisses). TO get those data asynconously we can do this:
const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting stuff from youtube");
        resolve({videos: [1,2,3,4,5]});
    }, 2000);
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting user from facebook");
        resolve({user: "subho"});
    },2000);
})

// Promise.all([yt, fb]).then(result => console.log(result));  //it will not console log the result untile both comes back 


//TODO: but there is a even simpler approach: async/await
console.log("\n\n");
console.log("AsyncAwait method")

async function displayUser() {
    try{
    const logged = await loginUser("ed", 123423);
    console.log(logged.UserEmail);
    const videos = await getUserVideos(logged.UserEmail);
    console.log(videos);
    const detail = await getVideoDetails(videos[0]);
    console.log(detail);
    } catch (err) {
        console.log("could not get videos");
    }
}

displayUser();