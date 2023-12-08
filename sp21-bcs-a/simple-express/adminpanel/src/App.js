import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import SortExample from "./screens/SortExample";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/sort-example" element={<SortExample />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* <SortExample /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
