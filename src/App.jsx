import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/contact";
import Programs from "./pages/Programs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray w-full"> {/* Full width added */}
        {/* Navbar */}
        <Navbar /> {/* Use the Navbar component */}

        {/* Main Content */}
        <main className="flex w-full flex-col items-center justify-center flex-grow sm:p-6"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs" element={<Programs />} />
            {/* Additional Routes can go here */}
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
