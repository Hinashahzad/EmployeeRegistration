const fs= require("fs");
const path = require("path");
module.exports = (employeeEntry) => {
    try{
        fs.writeFileSync(path.join(__dirname, "..", "data", "Employee.json"), 
        JSON.stringify(employeeEntry),
        "utf-8");
    }catch(error){
        console.log(" ERROR: While writing the file content");
    }
}