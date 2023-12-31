import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThanksYou from "./pages/ThanksYou";
import Faqs from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Policy from "./pages/Policy";
import { LanguageProvider } from "./context/Language";

function App() {

  return (
    <BrowserRouter >
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks-you" element={<ThanksYou />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
