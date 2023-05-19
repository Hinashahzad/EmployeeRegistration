

module.exports=(request, response) => {
    // Base URL is '/api/employees/'
    // One Employee id is 'api/employees/79153470-ea66-11ed-aad2-199c15ed7420'
    let baseURL = request.url.substring (0, request.url.lastIndexOf('/') + 1 );
    console.log(baseURL);
    // ['', 'api','employees', '79153470-ea66-11ed-aad2-199c15ed7420']
    let id = request.url.split('/')[3];
     // Regex to check the valid UUID
    const regexV4 = new RegExp (
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
    if(request.url==="/api/employees/")
    {
        //response.statusCode=200;
        response.writeHead(200, response.header );
        //response.setHeader('Content-Type', 'application/json')
        response.write(JSON.stringify(request.employees));
        response.end();
    }
    else if(regexV4.test(id) &&  baseURL === "/api/employees/" ){
        let filteredEmployee = request.employees.filter(employee=>{
            return employee.id == id;
        })
        console.log("Filtered Employee", filteredEmployee);
            if(filteredEmployee.length >0){
                //response.statusCode=200;
                //response.setHeader('Content-Type', 'application/json');
                response.writeHead(200, response.header );
                response.write(JSON.stringify(filteredEmployee));
                response.end();
            }
            else{
                //response.statusCode=404;
                //response.setHeader('Content-Type', 'application/json');
                response.writeHead(404, response.header );
                response.write(JSON.stringify({
                    title: "EMPLOYEE RECORD NOT FOUND ", 
                    message: "THERE IS NOT EMPLOYEE IN THE DATABASE"
                }))
                response.end();
            }
    }
    else if (!regexV4.test(id) && baseURL === "/api/employees/"){
            //response.statusCode =400;
            //response.setHeader('Content-Type', 'application/json');
            response.writeHead(400, response.header );
            response.write(JSON.stringify({
                title: "INVALID ID",
                message: "you have entered the invalid ID"
            }))
            response.end();
    }
    else {
        response.writeHead (404, response.header );
        response.end (
          JSON.stringify ({title: 'Not found', message: 'Route not found'})
        );
      }
}