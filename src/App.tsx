import Hero from "./sections/Hero";
import Work from "./sections/Work";

function App(){
    return (
        <div className="text-gray-800" id="dataRoot">
            <Hero/>
            <Work/>
        </div>
    );
}

export default App;