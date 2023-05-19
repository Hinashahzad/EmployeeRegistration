module.exports = (request) => {
    return new Promise((resolve, reject) =>{
        try{
            let body="";
            request.on("data", (chunck)=>{
                body+=chunck;
            }) 
            request.on("end", ()=> {
                resolve(JSON.parse(body)); //Resolve the Promise
            })
        }
        catch(error){
            console.log(error);
            reject(error);
        }
    })
}