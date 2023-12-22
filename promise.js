let promise=new Promise((resolve,reject)=>{
    console.log("Promise!");
    resolve("Done!");
})
promise.then((res)=>{
    console.log(res);
})

// promise=new Promise((resolve,reject)=>{
//     console.log("Promise!");
//     reject("Done!");
// })
// promise

// pending
// resolved
// rejected