import React, { JSX } from "react";
import "@/shared/styles/index.scss";
import { Header } from "@/widgets/Header";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <div className="scaffold__section">
        <Header/>
        <main className="scaffold__content">
          <nav className="scaffold__nav"></nav>
          <div className="scaffold__main"></div>
          <aside className="scaffold__aside"></aside>
        </main>
      </div>
    </div>
  );
};

export default App;