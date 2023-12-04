import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThanksYou from "./pages/ThanksYou";
import Allied from "./pages/Allied";

function App() {

  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thanks-you" element={<ThanksYou />} />
          <Route path="/aliado" element={<Allied />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
