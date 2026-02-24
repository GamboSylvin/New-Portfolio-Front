import PrimaryCTA from "../buttons/PrimaryCTA";
import SecondaryCTA from "../buttons/SecondaryCTA";
import NavBar from "../NavBar";
import NotificationBar from "../notificationUI/NotificationBar";
import heroImage from "../assets/heroImage.png";

function Hero() {
  return (
    <section className="hero min-h-screen bg-gray-100">
        <NavBar/>
        <div className="hero-content text-center flex items-center font-tiktok px-12">
            <aside className="flex-1 max-w-1/2 py-12">
                <NotificationBar notification="available for new projects"/>
                <div className="text-left">
                    <h1 className="text-6xl font-bold">Building digital</h1>
                    <span className="text-6xl font-bold bg-linear-to-bl from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">experiences that matter.</span>
                    <p className="py-6">Hey, I'm Sylvin. I’m an aspiring Software Engineer and Full-Stack Developer focused on crafting performant systems and intuitive user interfaces.</p>
                </div>
                <div className="flex mt-6 items-center gap-8">
                    <PrimaryCTA text="View My Work" onClick={()=>{document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });}}/>
                    <SecondaryCTA text="Contact Me"/>
                </div>
            </aside>
            <aside className="flex-1 max-w-1/2">
            <img src={heroImage} alt="home Image" />
            </aside>
        </div>
    </section>
  );
}

export default Hero;