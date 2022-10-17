import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/admin/Dashboard';
import BookDashboard from "./pages/book/admin/BookDashboard";
import ViewBooks from "./pages/book/admin/ViewBooks";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ViewUsers from "./pages/user/admin/ViewUsers";
import UserDashboard from "./pages/user/admin/UserDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Dashboard/>} />
          
          {/* Thaanish */}
          <Route path="/bookdash" element={<BookDashboard/>} />
          <Route path="/viewbook" element={<ViewBooks/>} />
          {/* Aathif */}
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/userdash" element={<UserDashboard/>} />
          <Route path="/viewuser" element={<ViewUsers/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
