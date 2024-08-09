import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Homepage from "./routes/HomePage";
import SignUpForm from "./routes/SignUpForm";
import SearchSitterPage from "./routes/SearchSitterPage";
import SitterBooking from "./routes/SitterBooking";
import SitterProfileEdit from "./routes/SitterProfileEdit";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/search" element={<SearchSitterPage />} />
          <Route path="/sitter-profile/:sitterId" element={<SitterBooking />} />
          <Route path="/sitter-profile/edit" element={<SitterProfileEdit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
