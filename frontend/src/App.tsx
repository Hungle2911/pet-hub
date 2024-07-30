import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import OwnerPage from "./components/Dashboard/OwnerPage";
// import SitterPage from "./components/Dashboard/SitterPage";
// import OwnerProfile from "./components/Profiles/OwnerProfile";
// import SitterProfile from "./components/Profiles/SitterProfile";
// import UserInfoForm from './components/Profiles/UserInfoForm';
// import CatInfoForm from "./components/Profiles/CatInfoForm";
import "./App.css";
import Homepage from "./routes/HomePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/owner-page" element={<OwnerPage />} />
          <Route path="/sitter-page" element={<SitterPage />} />
          <Route path="/owner-profile" element={<UserInfoForm />} />
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/sitter-profile" element={<SitterProfile />} /> 
          <Route path="/Profiles" element={<UserInfoForm />} />
          <Route path="/Profiles" element={<CatInfoForm />} />*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
