import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/Language";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ThankYou from "./pages/ThankYou";
import { Suspense } from "react";
import { Loading } from "./components/Loading";
// import Presentation from "./pages/Presentation";

function App() {

  return (
    <BrowserRouter >
      <Suspense 
        fallback={<Loading />}>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/presentation" element={<Presentation />} /> */}
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/policy" element={<Policy />} />

            {/* redirect path does not exist */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </LanguageProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
