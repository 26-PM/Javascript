function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve(200);
        },2000)
    });
}

// async function getAllData(){
//     await getData(1);
//     await getData(2)
// }
// getAllData();

// IIFE Immediately Invoked Function
(async function(){
    await getData(1);
    await getData(2)
})();