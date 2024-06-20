
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./signinpages/Login";
import Signup from "./signinpages/Signup";
import Landingpage from "./signinpages/Landingpage";
import { useState } from "react";

function App() {
  const [users,setusers]=useState([
    {
      name:"Dhaya",
      password:"123"
    }
  ])

  return (<>
 
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users}/>}></Route>
          <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path="/Landingpage" element={<Landingpage/>}></Route>
        </Routes>
        </BrowserRouter>

  </>);
}

export default App;
