const bodyParser = require('../util/bodyParser');
const writeToFile = require('../util/writeToFile');
//It will be async because it is taking the promise from bodyParser
module.exports= async (request, response) => {
    if(request.url === "/api/employees/"){
        let newEmployee = await bodyParser(request);
        console.log(newEmployee);
        request.employees.push(newEmployee);
        writeToFile(request.employees);
        response.writeHead(200, response.header);
        response.end(JSON.stringify(request.employees));
    }
    else{
        response.writeHead(404, response.header);
        response.end(JSON.stringify({"message": "Route Not Found"}));
    }
}