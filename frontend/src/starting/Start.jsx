import React from "react";
import Choose from "./components/Choose";
import CreateAndSell from "./components/CreateAndSell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import Subscribe from "./components/Subscribe";
import "../starting/Start.css"
export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <CreateAndSell />
      <Choose />
      <Subscribe />
      <Footer />
    </div>
  );
}
