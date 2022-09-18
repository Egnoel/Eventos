import "./App.css";
import LoginRegisterPage from "./pages/LoginRegisterPage.js";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./pages/ChatPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AddEventPage from "./pages/AddEventPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import EventPage from "./pages/EventPage/EventPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginRegisterPage />} />
        <Route path="chat" element={<Chatpage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="add" element={<AddEventPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="event" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
