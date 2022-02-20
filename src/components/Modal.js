import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { getEmployeeId, updateEmployeeApi } from '../services/employeeService';

function Modal({ setOpenModal }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName:"",
        lastName:"",
        emailId:"",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getEmployeeId(id);
                setEmployee(response.data);
            }catch(error) {
                console.log(error.message)
            }
        }
        fetchData();

    },[])

    const updateEmployee = (e) => {
        e.preventDefault();
        updateEmployeeApi(employee, id)
        .then((response) => {
            navigate("/employeeList");
            setOpenModal(false)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    const ggg = (e) => {
        e.preventDefault();
        console.log('AAAAAAAAAAA')
    }

  return (
      <div className="Modal">

    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="text-2xl text-center font-bold tracking-wider">
          <h1 >Update Employee</h1>
        </div>


        <div className="body">
        <div className="items-center justify-center h-14 w-full my-4">
                 <label className="block text-gray-600 text-sm text-left font-semibold" htmlFor="">First Name</label>
                 <input name="firstName" value={employee.firstName} onChange={(e)=>handleChange(e)} type="text" className="h-10 w-96 border mt-2 px-2 py-2" required/>
             </div>

             <div className="items-center justify-center h-14 w-full my-4">
                 <label className="block text-gray-600 text-sm text-left font-semibold" htmlFor="">Last Name</label>
                 <input name="lastName" value={employee.lastName} onChange={(e)=>handleChange(e)} type="text" className="h-10 w-96 border mt-2 px-2 py-2" required/>
             </div>

             <div className="items-center justify-center h-14 w-full my-4">
                 <label className="block text-gray-600 text-sm text-left font-semibold" htmlFor="">Email</label>
                 <input name="emailId" value={employee.emailId} onChange={(e)=>handleChange(e)} type="email" className="h-10 w-96 border mt-2 px-2 py-2" required/>
             </div>
        </div>



        <div className="footer">
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                    type="submit"
                    onClick={updateEmployee}
                    className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700">Update</button>
                    <button
                    type="button"
                    onClick={()=> navigate("/employeeList")}
                    className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700">Cancel</button>
            </div>
        </div>


      </div>
    </div>
      </div>
  );
}

export default Modal;