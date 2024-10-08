import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techskill from "./pages/Techskill/Techskill";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav/>
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <Techskill/>
      <Projects/>
      <WorkExp/>
      <Contact/>
      </div>
      <div className="footer pb-3 ms-3">
        <Tada>
        <h4 className="text-center">
          😍 KS &copy; Portfolio
        </h4>
        </Tada>
      </div>
      </div>
      <ScrollToTop smooth 
      color="#f29f67"
      style={{backgroundColor:"#1e1e2c", borderRadius:"80px"}}/>
    </>
  );
}

export default App;
