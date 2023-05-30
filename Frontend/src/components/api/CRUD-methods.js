import api from './Employee';

export const retreiveEmployees = async () => {
    const response =  await api.get('employees/');
    //const response = await axios.get(`/api/employees/`)
    return response.data;
  }

export const addEmployees = async (request) =>{
  const response = await api.post("employees/", request);
  return response.data;
}

export const updateEmployees = async (contact, updateEmployee)=>{
  return await api.put(`employees/${updateEmployee.id}`, contact);
  
}
export const deleteEmployee = async (id) =>{
  await api.delete(`employees/${id}`);
}