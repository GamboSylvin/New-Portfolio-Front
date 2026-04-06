import SkillCard from "../CardsAndContainers/SkillCard";
import FrontendIcon from "../assets/frontend.svg?react";
import BackendIcon from "../assets/backend.svg?react";
import SkillDefCard from "../CardsAndContainers/SkillDefCard";

function Skills() {
  return (
    <section className="skills min-h-screen py-12 px-12 bg-gray-50" id="skills">
        <h2 className="text-3xl text-center font-bold mb-2">Technical Skills</h2>
        <p className="text-center text-xs md:text-base text-gray-800 mb-12">A showcase of my technical expertise and proficiency in various programming languages, frameworks, and tools.</p>
        <div className="skillCard-container flex justify-around flex-wrap mb-18">
            <SkillCard skill="Frontend" Icon={FrontendIcon} />
            <SkillCard skill="Backend" Icon={BackendIcon} />
        </div>
        <div className="skillDefCard-container flex flex-col md:flex-row justify-around gap-6">
            <SkillDefCard skill="Frontend Development" description="Proficient in building responsive and interactive user interfaces using modern frontend frameworks like React and Vue.js." icon={<div className="w-2 h-2 rounded-full bg-blue-500 shadow shadow-blue-500" />} />
            <SkillDefCard skill="Backend Development" description="Experienced in developing robust server-side applications using Node.js, Express, and RESTful APIs." icon={<div className="w-2 h-2 rounded-full bg-green-500 shadow shadow-green-500" />} />
            <SkillDefCard skill="Database Management" description="Skilled in designing and managing databases using SQL and NoSQL technologies like MySQL and MongoDB." icon={<div className="w-2 h-2 rounded-full bg-yellow-500 shadow shadow-yellow-500" />} />
        </div>
    </section>
  );
}   

export default Skills;