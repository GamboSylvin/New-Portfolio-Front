import NavBar from "./navBar";

function Hero() {
  return (
    <div className="hero min-h-screen bg-gray-100">
        <NavBar/>
        <div className="hero-content text-center font-tiktok py-6">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Building digital</h1>
                <h1 className="text-5xl font-bold text-violet-500">experiences that matter.</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default Hero;