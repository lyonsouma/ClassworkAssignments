let promise = new Promise((resolve , reject)=>{
    let grade = "A";
    if(grade === "A"){
        resolve("The parent buys bike for a Kid");
    }
    else{
        reject("The Parent doesn't buy bike for a kid");
    }
})

promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message)
});