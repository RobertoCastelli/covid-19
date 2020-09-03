import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";
import CountriesList from "./components/CountriesList";

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <FetchData />
        <CountriesList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
