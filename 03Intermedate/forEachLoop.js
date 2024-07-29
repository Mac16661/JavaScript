const myStates = ["Rajasthan","Delhi","Tamil Nadu","Assam",1945];
//FOR EACH LOOPS

myStates.forEach((i) => console.log(i)); // you dont have to write myStates[i] inside the console log.

// NOTE: FOR OF LOOP( USED IN ARRAY ):::

const names = ["youtube","facebook","instagram","netflix","amazon"];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

// NOTE: FOR IN LOOP( USED IN OBJECTS ) :::

for( const n in symbols){
    console.log(n);// it will give the key of the objects
    console.log(symbols[n]); // this syntax is used to access the value of the objects
    // we can also write it or print it like this:
    console.log(`Key is ${n} and value is : ${symbols[n]}`);
}

