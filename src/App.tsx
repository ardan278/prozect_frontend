import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import About from "./pages/AboutUs/page";
import Contact from "./pages/Contact/page";
import Forms from "./pages/Forms/page";
import Reg_form from "./pages/Forms/Reg_form";
import Inst_form from "./pages/Forms/Inst_form";
import Part_form from "./pages/Forms/Part_req_form";
import Serv_form from "./pages/Forms/Serv_form";
import PrivacyPolicy from "./components/privacyPolicy";
import TermsOfService from "./components/termsOfService";
import Admin from "./pages/Admin/page";
import Services from "./pages/Services/page";
import EventCalendar from "./pages/EventCalendar/page";

const App: React.FC = () => {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms/registration" element={<Reg_form />} />
        <Route path="/forms/installation" element={<Inst_form />} />
        <Route path="/forms/parts" element={<Part_form />} />
        <Route path="/forms/service" element={<Serv_form />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services/spareParts" element={<Part_form />} />
        <Route path="/services/newSales" element={<Inst_form />} />
        <Route path="/services/Service" element={<Serv_form />} />
        <Route path="/services/Modernization" element={<Inst_form />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event-calendar" element={<EventCalendar />} />
      </Routes>
    </div>
  );
};

export default App;
