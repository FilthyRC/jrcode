import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Portfolio from "./routes/portfolio/portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/jrcode/" element={<Home />} />
        <Route path="jrcode/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
