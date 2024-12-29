import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gradient-to-b from-darkest-purple to-dark-purple min-h-screen">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36">
        <NavBar />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
