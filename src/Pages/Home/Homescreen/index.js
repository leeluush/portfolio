import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyProtfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import { useTheme } from "../../Home/ThemeContext";



export default function Home() { 
  const { theme } = useTheme();

  return (
    <>
        <main
      className="main--container"
      style={{
        backgroundColor: theme.palette.background.container,
        color: theme.palette.text.primary,
      }}
    >

      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
        <Footer />
        </main>

    </>
  );
}