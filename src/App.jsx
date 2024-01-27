import { Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";
import { About, Contact, Home, NotFound, Service } from "./routes";

export default function App() {
  return (
    <div className="bg-gray-100 ">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
