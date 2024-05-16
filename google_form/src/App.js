import "./App.css";
import Header from "./components/Header/Header";
import Template from "./components/Template/Template";
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
  return (
    <div>
      <Header />
      <Template />
    </div>
  );
}

export default App;
