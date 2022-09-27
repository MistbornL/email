import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Email } from "./pages/Email";
import { Register } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/email/:name" element={<Email />} />
    </Routes>
  );
}

export default App;
