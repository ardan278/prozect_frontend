import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import About from "./pages/AboutUs/page";
import Contact from "./pages/Contact/page";
import Forms from "./pages/Forms/page";
import Reg_form from "./pages/Forms/Reg_form";
import Inst_form from "./pages/Forms/Inst_form";
import Part_form from "./pages/Forms/Part_req_form";
import Serv_form from "./pages/Forms/Serv_form";

const App: React.FC = () => {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forms" element={<Forms />}/>
        <Route path="/forms/registration" element={<Reg_form />}/>
        <Route path="/forms/installation" element={<Inst_form />}/>
        <Route path="/forms/parts" element={<Part_form />}/>
        <Route path="/forms/service" element={<Serv_form />}/>
      </Routes>
    </div>
  );
};

export default App;
