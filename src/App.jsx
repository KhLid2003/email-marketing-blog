import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Services from "./pages/Services";
import About from "./pages/About";
import ArticleDetail from "./pages/ArticleDetail";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./admin/pages/AdminDashboard";
import CreatePost from "./admin/pages/CreatePost";
import EditPost from "./admin/pages/EditPost";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/article/:title" element={<ArticleDetail />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/posts/new" element={<CreatePost />} />
            <Route path="/admin/posts/edit/:id" element={<EditPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}