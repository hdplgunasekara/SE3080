import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/admin/Dashboard';
import BookDashboard from "./pages/book/admin/BookDashboard";
import ViewBooks from "./pages/book/admin/ViewBooks";
//pasindu 
import ArticleList from "../src/pages/article/user/ArticleList";
import AddArticle from "../src/pages/article/user/AddArticle";
import ArticleSearch from "../src/pages/article/user/ArticleSearch";
import UserDashboard from "../src/pages/user/Dashboard";
import PublisherDashboard from "./pages/publisher/PublisherDashboard";
import ViewPublishers from "./pages/publisher/ViewPublishers";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Dashboard/>} />
          
          {/* Thaanish */}
        <Route path="/bookdash" element={<BookDashboard/>} />
        <Route path="/viewbook" element={<ViewBooks/>} />

          {/* Pasindu  */}      
        <Route exact path="/article/list" element={<ArticleList />} />
        <Route exact path="/article/add" element={<AddArticle />} />
        <Route exact path="/article/search/:id" element={<ArticleSearch />} />
        <Route exact path="/user" element={<UserDashboard />} />

        {/* Inuri */}
        <Route path="/publisherdash" element={<PublisherDashboard/>} />
        <Route path="/viewpublisher" element={<ViewPublishers/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
