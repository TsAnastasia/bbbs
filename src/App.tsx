import React from "react";
import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.app__main}></main>
      <Footer />
    </div>
  );
}

export default App;
