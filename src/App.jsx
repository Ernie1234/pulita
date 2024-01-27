import { Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";
import { About, Contact, Home, NotFound } from "./routes";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
