import "./App.css";
import LoginRegisterPage from "./pages/LoginRegisterPage.js";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AddEventPage from "./pages/AddEventPage";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginRegisterPage />} />
        <Route path="chat" element={<Chatpage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="add" element={<AddEventPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
