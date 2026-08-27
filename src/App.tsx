import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Program } from "./pages/Program";
import { Testimonials } from "./pages/Testimonials";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { JoinNow } from "./pages/JoinNow";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="program" element={<Program />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/join-now" element={<JoinNow />} />
      </Routes>
    </Router>
  );
}

export default App;
