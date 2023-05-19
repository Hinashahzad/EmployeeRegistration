/**
 * 1. Create HTTP 
 * 2. Create PORT
 * 3. Create the Server
 * 4. server.listen(PORT)
 * 5. Server has taken request and response (process the request)
 * and send the response
 *
 */
const express = require("express");
const app = express();
const cors= require("cors");  
app.use(cors());
//1. Creating HTTP
const http = require("http");
//Want to Listen the Server on other Port
//2. Create PORT
require("dotenv").config(); 
//If PORT PORT=5000 is busy then it will listen on 5001
const PORT = 5001;
let Employee= require('./data/Employee.json');
const getMethod=require('./method/getMethod');
const putMethod = require('./method/putMethod');
const postMethod=require('./method/postMethod');
const deleteMethod = require('./method/deleteMethod');
//3. Create the Server
const server = http.createServer((request, response) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
        //"Access-Control-Max-Age": 2592000, // 30 days
        "Cache-Control": "no-cache"
        /** add other headers as per requirement */
      };
    request.employees = Employee;
    response.header = headers;
switch(request.method){
    case "GET":
        getMethod(request, response);
        break;
    case "POST":
        postMethod(request, response);
        break;
    case "PUT":
        putMethod(request, response);
        break;
    case "DELETE":
        deleteMethod(request, response);
        break;
    default:
        //response.header("Access-Control-Allow-Origin", "*");
        response.writeHead(400, response.header );
        response.end();

}
});

server.listen(PORT, ()=>{
    console.log("Server is Listening on PORT:",PORT);
})
