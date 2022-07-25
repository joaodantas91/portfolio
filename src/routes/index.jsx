import Home from "../pages/Home";
import Techs from "../pages/Techs";
import Projects from "../pages/Projects";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export function RoutesComponent() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.path}>
        <Route exact path="/" element={<Home />} />

        <Route path="/techs" element={<Techs />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </AnimatePresence>
  );
}
