import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rickey from "./pages/Rickey";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";


// import Page2 from "./pages/Page2";
// import NotFound from "./pages/NotFound";
// import ScrollToTop from "./helpers/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Rickey" element={<Rickey />} />
        <Route path="Layout" element={<Layout />} />
        <Route path="Blogs" element={<Blogs />} />
        
        {/*<Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
