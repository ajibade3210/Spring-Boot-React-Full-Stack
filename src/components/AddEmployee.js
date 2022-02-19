import React, { useState } from 'react'
import employeeService from '../services/employeeService';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        employeeService(employee).then((res)=>{
            console.log(res)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" htmlFor="">First Name</label>
                <input name="firstName" value={employee.firstName} onChange={(e)=>handleChange(e)} type="text" className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" htmlFor="">Last Name</label>
                <input name="lastName" value={employee.lastName} onChange={(e)=>handleChange(e)} type="text" className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>

            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" htmlFor="">Email</label>
                <input name="emailId" value={employee.emailId} onChange={(e)=>handleChange(e)} type="email" className="h-10 w-96 border mt-2 px-2 py-2" />
            </div>

            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700">Save</button>
                <button className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700">Clear</button>
         </div>
        </div>
    </div>
  )
}

export default AddEmployee