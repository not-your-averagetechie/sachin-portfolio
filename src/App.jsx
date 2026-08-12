import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Marquee,
  Navbar,
  Projects,
  Services,
  Stats,
  Teaching,
  Tech,
  StarsCanvas,
} from "./components";
import CanvasGuard from "./components/ui/CanvasGuard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" style={{ overflowX: "clip" }}>
        <Navbar />
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Teaching />
        <Tech />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <CanvasGuard>
            <StarsCanvas />
          </CanvasGuard>
        </div>
        <Analytics />
      </div>
    </BrowserRouter>
  );
};

export default App;
