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
import Purchase from "./pages/Purchase";
import { InteractiveProposal } from "./pages/InteractiveProposal";
import { InteractivePresentation } from "./pages/InteractivePresentation";
import { Activate } from "./pages/Activate";


function App() {
  return (
    <BrowserRouter >
      <Suspense 
        fallback={<Loading />}>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/presentation" element={<Presentation />}/>
            <Route path="/presentation/1" element={<Presentation comercial={1} />} />
            <Route path="/presentation/2" element={<Presentation comercial={2} />} />
            <Route path="/presentation/3" element={<Presentation comercial={3} />} />
            
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/activate" element={<Activate />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/policy" element={<Policy />} />

            <Route path="/interactive-presentation" element={<InteractivePresentation  />}/>
            
            <Route path="/interactive-proposal/hhf" element={<InteractiveProposal allyPresentation={"https://view.genially.com/6759c28e5a67056c1931c2af"} />}/>
            <Route path="/interactive-proposal/mundo-now" element={<InteractiveProposal allyPresentation={"https://view.genially.com/678ae02fd076684df51515ba"} />}/>
            <Route path="/interactive-proposal/sigo-seguros" element={<InteractiveProposal allyPresentation={"https://view.genially.com/6792b570c9d92e6d80724fe4"} />}/>
            <Route path="/interactive-proposal/investor-deck" element={<InteractiveProposal allyPresentation={"https://view.genially.com/67ad11a23d76658c2f21f19d"} />}/>
            <Route path="/interactive-proposal/sqp" element={<InteractiveProposal allyPresentation={"https://view.genially.com/67ba4d3a1332b6b4ce8bfe6a"} />}/>
            <Route path="/interactive-proposal/catholic-charities" element={<InteractiveProposal allyPresentation={"https://view.genially.com/67bf55a065b8d7bf02dbe5d4"} />}/>

            {/* redirect path does not exist */}
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </LanguageProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
