import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee,editEmployee}) => {
  const navigate = useNavigate()

  // const editEmployee = (e, id) => {
  //   e.preventDefault();
  //   navigate(`/editEmployee/${id}`);
  // }

  return (
    <tr key={employee.id}>
    <td  className="text-left px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-500">{employee.firstName}</div>
    </td>
    <td  className="text-left px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-500">{employee.lastName}</div>
    </td>
    <td  className="text-left px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-500">{employee.emailId}</div>
    </td>

    <td className="text-right font-medium text-sm px-6 py-4 whitespace-nowrap">
    <a
    href="/"
    onClick={(e, id)=> editEmployee(e, employee.id)}
    className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
    <a
    href="/"
    onClick={(e,id)=> deleteEmployee(e, employee.id)}
    className="text-indigo-600 hover:text-red-500">Delete</a>
    </td>
  </tr>
  )
}

export default Employee