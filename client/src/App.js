import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/admin/Dashboard';
import BookDashboard from "./pages/book/admin/BookDashboard";
import ViewBooks from "./pages/book/admin/ViewBooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Dashboard/>} />
          
          {/* Thaanish */}
          <Route path="/bookdash" element={<BookDashboard/>} />
          <Route path="/viewbook" element={<ViewBooks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
