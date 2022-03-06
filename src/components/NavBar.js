import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-800">

        <div className="h-16 px-8 flex items-center">
        <a
        href="/"
        onClick={()=> navigate("/employeeList")}
        >
          <p className="text-white font-bold">Employee Management Systems</p>
        </a>
        </div>
    </div>
  )
}

export default NavBar