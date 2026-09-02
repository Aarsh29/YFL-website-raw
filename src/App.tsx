import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Program } from "./pages/Program";
import { Testimonials } from "./pages/Testimonials";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { Consultation } from "./pages/Consultation";
import { JoinNow } from "./pages/JoinNow";
import { PrenatalYoga } from "./pages/PrenatalYoga";
import { GeneralYoga } from "./pages/GeneralYoga";
import { StrengthToning } from "./pages/StrengthToning";
import { PostnatalYoga } from "./pages/PostnatalYoga";
import { WeightLossYoga } from "./pages/WeightLossYoga";
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
          <Route path="program/prenatal-yoga" element={<PrenatalYoga />} />
          <Route path="program/general-yoga" element={<GeneralYoga />} />
          <Route path="program/strength-toning" element={<StrengthToning />} />
          <Route path="program/postnatal-yoga" element={<PostnatalYoga />} />
          <Route path="program/weight-loss-yoga" element={<WeightLossYoga />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>
        <Route path="/join-now" element={<JoinNow />} />
      </Routes>
    </Router>
  );
}

export default App;
