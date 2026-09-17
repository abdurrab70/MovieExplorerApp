import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { MovieListing } from "./pages/MovieListing";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
        <Navbar />
        <Routes>
          {/* initial vabe home page a jabe*/}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Home Page Route */}
          <Route path="/home" element={<Home />} />

          {/* Movie Listing Route */}
          <Route path="/movies" element={<MovieListing />} />

          {/* onno kono page a gele auto home page a niya jabe */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
