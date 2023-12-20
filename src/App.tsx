import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThanksYou from "./pages/ThanksYou";
import Faqs from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Legals from "./pages/Legals";
// import Allied from "./pages/Allied";

function App() {

  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks-you" element={<ThanksYou />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/legals" element={<Legals />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
