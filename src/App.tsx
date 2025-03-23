import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import About from "./pages/AboutUs/page";
import Contact from "./pages/Contact/page";
import Forms from "./pages/Forms/page";

const App: React.FC = () => {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forms" element={<Forms />}/>
      </Routes>
    </div>
  );
};

export default App;
