import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx"; // Make sure Login is imported
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
