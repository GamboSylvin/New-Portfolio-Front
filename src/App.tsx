import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

function App(){
    return (
        <div className="text-gray-800">
            <Hero/>
            <Skills/>
            <Work/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;