import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LessonPage from "./pages/LessonPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
