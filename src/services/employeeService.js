import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

const employeeService = (employee) => {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
}

const getEmployees = () => {
        return axios.get(EMPLOYEE_API_BASE_URL)
}

const deleteEmployeeApi = (id) => {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
}

const getEmployeeId = (id) => {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
}

const updateEmployeeApi = (employee,id) => {
        return axios.put(EMPLOYEE_API_BASE_URL + "/"+ id, employee);
}

export {
        employeeService,
        getEmployees,
        deleteEmployeeApi,
        getEmployeeId,
        updateEmployeeApi
}