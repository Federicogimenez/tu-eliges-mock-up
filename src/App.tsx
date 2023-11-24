import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThanksYou from "./pages/ThanksYou";

function App() {

  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks-you" element={<ThanksYou />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
