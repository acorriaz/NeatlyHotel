import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminCustomerBooking from "./pages/AdminCustomerBooking";
import NavBar from "./components/Navbar";
import AgentLogin from "./pages/AgentLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hotel/user-login" element={<UserLoginPage />} />
          <Route path="/hotel/user-register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
      <h1 class="text-4xl font-bold text-blue-500 flex items-center justify-center h-screen bg-orange-100 ">
        Good Day
      </h1>
      <AdminCustomerBooking />
      <AgentLogin />
    </>
  );
}

export default App;
