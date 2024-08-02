import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import UserInfoForm from "./components/Profiles/UserInfoForm";
import Homepage from "./routes/HomePage"
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/userinfo" element={<UserInfoForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
