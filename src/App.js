import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pengaturan from "./pages/Pengaturan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pengaturan" element={<Pengaturan />}/>
    </Routes>
  );
}

export default App;
