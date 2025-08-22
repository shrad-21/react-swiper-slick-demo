import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/CommonComponents/Banner/Banner"
import Navbar from "./Components/CommonComponents/Navbar/Navbar";
import Footer from "./Components/CommonComponents/Footer/Footer";

import ArticleList from "./Components/ModuleWise/ArticleList/ArticleList";
import ContactInfo from "./Components/ModuleWise/TopBar/TopBar";
import ArticleGallery from "./Components/ModuleWise/ArticleGallery/ArticleGallery";
import ConnectUs from "./Components/ModuleWise/ConnectUs/ConnectUs";
import Services from "./Components/ModuleWise/Services/Services";
import Testimonials from "./Components/ModuleWise/Testimonials/Testimonials";
import ArticleDetail from "./Components/ModuleWise/ArticleDetail/ArticleDetail";

import "./App.css";

function App() {
  return (

    <>
    <Router>
      <ContactInfo />
      <Navbar />
      

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
            <Banner />
            <Services />
              <ArticleList />
              <Testimonials />
              <ArticleGallery />
              <ConnectUs />
            </>
          }
        />

        {/* Article Detail Page*/}
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
