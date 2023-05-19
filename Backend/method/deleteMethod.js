const writeToFile = require('../util/writeToFile');
module.exports=(request, response)=>{
    let baseURL = request.url.substring(0, request.url.lastIndexOf('/') + 1);
    let id = request.url.split('/')[3];
    // Regex to check the valid UUID
    const regexV4 = new RegExp (
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );

    if(baseURL==="/api/employees/" && regexV4.test(id)){
        const index = request.employees.findIndex((employee)=>{
            return employee.id ==id;
        })
            if(index === -1) {
                response.statusCode= 400;
                response.writeHead('Content-Type','application/json');
                response.end(JSON.stringify({title:"Error message", message: "Employee not found"}));
            }
            else{
                request.employees.splice(index, 1);
                writeToFile(request.employees);
                response.statusCode= 204; //For delete the request
                response.end(JSON.stringify(request.employees));
            }
    }
    else if (!regexV4.test(id)){
        response.statusCode= 400;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({
        message:"INVALID UUID code"
    }))
    }
    else{
        response.statusCode= 404;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({
            message:"Route not found",
        }))

    }
}
