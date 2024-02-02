import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomDetail from "./pages/RoomDetailPage";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/searchResultPage";
import PaymentPage from "./pages/PaymentPage";
import AgentRegisterPage from "./pages/AgentRegisterPage";
import AgentLoginPage from "./pages/AgentLoginPage";
import Homepage from "./pages/BookingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hotel/user-login" element={<UserLoginPage />} />
          <Route path="/hotel/user-register" element={<RegisterPage />} />
          <Route path="/hotel/detail" element={<RoomDetail />} />
          <Route path="/hotel/result" element={<SearchResultPage />} />
          <Route path="/hotel/payment" element={<PaymentPage />} />
          <Route path="/agent-register" element={<AgentRegisterPage />} />
          <Route path="/agent-login" element={<AgentLoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
