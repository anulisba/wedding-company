import React from "react";
import Landing from "./components/Landing/Landing";
import AboutUs from "./Components/About Us/AboutUs";
import LoveAcross from "./Components/LoveAcross/LoveAcross";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutUs />
      <LoveAcross />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
