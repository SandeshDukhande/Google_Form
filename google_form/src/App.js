import "./App.css";
import FormHeader from "./components/FormHeader/FormHeader";
import Header from "./components/Header/Header";
import Template from "./components/Template/Template";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function resgisterUser(event) {
//     event.preventDefault();
//     const response = await fetch("https://localhost:3500/api/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//       }),
//     });

//     const data = await response.json();
//     console.log(data);
//   }

//   return (
//     <div>
//       <h1>Registration Page</h1>
//       <form action="" id="registration-form">
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Email Id"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormHeader />} />
          <Route path="/signup" exact element={<Signup/>} />
	        <Route path="/login" exact element={<Login/>} />
			    <Route path="/" element={<Navigate replace to="/Login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;