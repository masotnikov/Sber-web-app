import React, { JSX } from "react";
import "@/shared/styles/index.scss";
import { Header } from "@/widgets/Header";
import { AppRouter } from "@/app/providers/router";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <div className="scaffold__section">
        <Header/>
        <main className="scaffold__content">
          <Navbar/>
          <div className="scaffold__main">
            <AppRouter/>
          </div>
          <aside className="scaffold__aside"></aside>
        </main>
      </div>
    </div>
  );
};

export default App;