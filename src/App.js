import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";
import TemplateCountries from "./components/TemplateCountries";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <FetchData />
        <TemplateCountries />
      </div>
      <Footer />
    </div>
  );
}

export default App;
