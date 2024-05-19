import "./App.css";
import CreateNewForm from "./components/CreateForm/CreateNewForm";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id" element={<CreateNewForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
