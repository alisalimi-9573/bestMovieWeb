import React from "react";
import Header from "./component/header/Header";
import "swiper/css";
import Footer from "./component/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="container mx-auto border h-auto">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </main>
    </>
  );
}

export default App;
