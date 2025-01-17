import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Faqs from "./pages/Faqs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Policy from "./pages/Policy";
import { LanguageProvider } from "./context/Language";
import Presentation from "./pages/Presentation";
import Purchase from "./pages/Purchase";
import { InteractivePresentation } from "./pages/InteractivePresentation";
import { InteractiveProposal } from "./pages/InteractiveProposal";

function App() {

  return (
    <BrowserRouter >
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/presentation" element={<Presentation />}/>
          <Route path="/presentation/1" element={<Presentation comercial={1} />} />
          <Route path="/presentation/2" element={<Presentation comercial={2} />} />
          <Route path="/presentation/3" element={<Presentation comercial={3} />} />
          <Route path="/presentation/4" element={<Presentation comercial={4} />} />
          
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/policy" element={<Policy />} />

          <Route path="/interactive-presentation" element={<InteractivePresentation />} />

          <Route path="/interactive-proposal/kiss" element={<InteractiveProposal allyPresentation={"https://view.genially.com/6752f3f1bad4c548693920c8"} />}/>
          <Route path="/interactive-proposal/cityplace" element={<InteractiveProposal allyPresentation={"https://view.genially.com/674f02e8c7db94c9977d1e87"} />}/>
          <Route path="/interactive-proposal/wahoos" element={<InteractiveProposal allyPresentation={"https://view.genially.com/6751e4278688f0d281e50497"} />}/>
          <Route path="/interactive-proposal/sunshine" element={<InteractiveProposal allyPresentation={"https://view.genially.com/677ff8e674058c30eed41935"} />}/>
          <Route path="/interactive-proposal/panther" element={<InteractiveProposal allyPresentation={"https://view.genially.com/6786d0cb99007f0abc335f5e"} />}/>
          
          {/* redirect path does not exist */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
