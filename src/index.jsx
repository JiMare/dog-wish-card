import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Create } from "./components/Create";
import { Get } from "./components/Get";
import { configuration } from "./configuration.js";
import { GetID } from "./components/GetID";
import { Wish } from "./components/Wish";

const App = () => {
  const [wishId, setWishId] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={<Create config={configuration} setWishId={setWishId} />}
        />
        <Route path="/get" element={<Get />} />
        <Route path="/id" element={<GetID wishId={wishId} />} />
        <Route path="/card/:id" element={<Wish />} />
      </Routes>
      {/*
      Tady bude tvůj Vánoční přáníčko :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
      - použij router (musíš si ho nainstalovat)
    */}
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
