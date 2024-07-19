import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Faqs from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Policy from "./pages/Policy";
import { LanguageProvider } from "./context/Language";
import Presentation from "./pages/Presentation";

function App() {

  return (
    <BrowserRouter >
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" >
              <Route path="/presentation" element={<Presentation />}/>
              <Route path="/presentation/1" element={<Presentation comercial={1} />} />
              <Route path="/presentation/2" element={<Presentation comercial={2} />} />
              <Route path="/presentation/3" element={<Presentation comercial={3} />} />
            </Route>
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/policy" element={<Policy />} />
          
          {/* redirect path does not exist */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
