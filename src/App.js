import {BrowserRouter,Routes,Route} from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route index element={<EmployeeList />}/>
   <Route path="/" element={<EmployeeList />}/>
   <Route path="/employeeList" element={<EmployeeList />}/>
   <Route path="/addEmployee" element={<AddEmployee />}/>
    <Route path="/modal/:id" element={<EmployeeList />}/>
  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
