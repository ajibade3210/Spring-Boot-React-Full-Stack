import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import { getEmployees, deleteEmployeeApi } from '../services/employeeService';
import Employee from './Employee';
import Modal from './Modal';

const EmployeeList = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [employees, setEmployees] = useState(null)

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      try{
        const res = await getEmployees()
        setEmployees(res.data)
      }catch(error) {
        console.log(error)
      }
      setLoading(false);
    }
    fetchData()
  },[modalOpen])

  // console.log(employees)

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    deleteEmployeeApi(id)
    .then((res)=> {
      if(employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        })
      }
    })

  }

  const editEmployee = (e, id) => {
    e.preventDefault();
    // navigate(`/editEmployee/${id}`);
    navigate(`/modal/${id}`);
    setModalOpen(!modalOpen)
  }

  return (
    <div className="container mx-auto my-8">
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <div className="h-12">
            <button
            onClick={()=> navigate("/addEmployee")}
             className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add Employee</button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">First Name</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email ID</th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
              </tr>
            </thead>
{!loading && (
            <tbody className="bg-white">
            {employees.map((employee)=>(
              <Employee
              editEmployee={editEmployee}
              employee={employee}
              deleteEmployee={deleteEmployee}
               key={employee.id}/>
            ))}
            </tbody>
)}
          </table>
        </div>

    </div>
  )
}

export default EmployeeList