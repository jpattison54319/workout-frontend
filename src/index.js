import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Workout from "./pages/Workout";
import W1D1 from "./pages/Week1/Day1/Day1"
import W1D2 from "./pages/Week1/Day2/Day2"
import W1D4 from "./pages/Week1/Day4/Day4"
import W1D5 from "./pages/Week1/Day5/Day5"
import W1D6 from "./pages/Week1/Day6/Day6"
import W1D7 from "./pages/Week1/Day7/Day7"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="workout" element={<Workout />} />
          <Route path="w1d1" element={<W1D1 />} />
          <Route path="w1d2" element={<W1D2 />} />
          <Route path="w1d4" element={<W1D4 />} />
          <Route path="w1d5" element={<W1D5 />} />
          <Route path="w1d6" element={<W1D6 />} />
          <Route path="w1d7" element={<W1D7 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);