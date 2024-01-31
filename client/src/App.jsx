import "./App.css";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoomDetail from "./pages/RoomDetailPage";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

>>>>>>> 26c30e6 (feat: still working on search result page)
import UserLoginPage from "./pages/UserLoginPage";
import RegisterPage from "./pages/RegisterPage";
import SearchResultPage from "./pages/searchResultPage";

function App() {
<<<<<<< HEAD
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
=======
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/hotel/user-login" element={<UserLoginPage />} />
          <Route path="/hotel/user-register" element={<RegisterPage />} />
          <Route path="/hotel/result" element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
>>>>>>> 26c30e6 (feat: still working on search result page)
}

export default App;
