import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/hotel/user-login" element={<UserLoginPage />} />
            <Route path="/hotel/user-register" element={<RegisterPage />} />
            <Route path="/hotel/detail" element={<RoomDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
