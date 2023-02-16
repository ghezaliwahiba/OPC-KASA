import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Erreur from "./pages/Erreur/Erreur";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Logement from "./pages/Logements/Logements";
import Footer from "./components/Footer/Footer"
import reportWebVitals from "./reportWebVitals";

// Import de react router pour...
import { BrowserRouter, Routes, Route, } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<BrowserRouter>
<main>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Apropos" element={<Apropos />} />
  <Route path="/data/:id"  element={<Logement />} />
  <Route path="/Erreur" element={<Erreur />} /> 
   
</Routes>
<Footer />
</main>
</BrowserRouter>
  </React.StrictMode>
 
);
reportWebVitals();