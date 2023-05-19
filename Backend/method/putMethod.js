const writeToFile = require('../util/writeToFile');
const bodyParser = require('../util/bodyParser');
module.exports = async (request, response) => {
    let baseUrl = request.url.substring (0, request.url.lastIndexOf ('/') + 1);
    // ['', 'api','employees', '79153470-ea66-11ed-aad2-199c15ed7420']
    let id = request.url.split ('/')[3];  
    // Regex to check the valid UUID
    const regexV4 = new RegExp (
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );

    if(!regexV4.test(id)){
        response.writeHead (400, {'Content-Type': 'application/json'});
        response.end (
          JSON.stringify ({
            title: 'VALIDATION FAILED',
            message: 'UUID is not valid',
          }))
    }
    else if (baseUrl === "/api/employees/" && regexV4.test(id)){
        response.statusCode = 200;
        try {
            let updateEmployee = await bodyParser(request);
            const index = request.employees.findIndex((employee) => {
                return employee.id === id;
            })
                if(index === -1) {
                    response.statusCode= 404;
                    response.write(JSON.stringify({title:"Error message", message: "Employee not found"}));
                    response.end();
                }
                else{
                    //Access the index and update it 
                    request.employees[index] = { id,...updateEmployee };
                    writeToFile(request.employees);
                    response.writeHead(200, {'Content-Type':'application/json'}) ;
                    response.end(JSON.stringify(request.employees[index]));
                }
            response.end();
        }
        catch(error)
        {
            response.writeHead(400, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({message:"Not a Valid Body Request"}))
        }
    }
    else {
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({message:"Route not found"}))
    }
};