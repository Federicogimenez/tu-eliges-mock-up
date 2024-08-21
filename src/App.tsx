import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Loading } from "./components/Loading";
import { LanguageProvider } from "./context/Language";
import Faqs from "./pages/Faqs";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Presentation from "./pages/Presentation";
import TermsAndConditions from "./pages/TermsAndConditions";
import ThankYou from "./pages/ThankYou";


function App() {
  return (
    <BrowserRouter >
      <Suspense 
        fallback={<Loading />}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
