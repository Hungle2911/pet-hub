import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import "./App.css";
import Homepage from "./routes/HomePage";
import SignUpForm from "./routes/SignUpForm";
import SearchSitterPage from "./routes/SearchSitterPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/search" element={<SearchSitterPage />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/sitter-page" element={<SitterPage />} />
          <Route path="/owner-profile" element={<OwnerProfile />} />
          <Route path="/sitter-profile" element={<SitterProfile />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
