import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import OurStory from "./pages/OurStory";
import FAQ from "./pages/FAQ";
import REviews from "./pages/REviews";
import Contact from "./pages/Contact";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ourstory":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/reviews":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/ourstory" element={<OurStory />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/reviews" element={<REviews />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App;
