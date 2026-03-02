import TertiaryCTA from "../buttons/TertiaryCTA";
import RightArrow from "../assets/right-arrow.svg?react";
import ProjectList, { type Project } from "../CardsAndContainers/ProjectList";
// import projectImage from "../assets/projectImage.png";
import { useRouteLoaderData } from "react-router";


function Work() { 

  let data =  useRouteLoaderData("dataRoot") as { content: Project[] };
  let projects = data.content;

  return (
    <section id="work" className="work min-h-screen bg-gray-50">
      <div className="container py-12 font-tiktok">
          <div className="container-header px-12 py-2 mb-6">
              <h2 className="text-3xl font-bold mb-2">Selected work</h2>
              <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-800">A collection of projects that showcase my passion for quality code and good design.</p>
                  <TertiaryCTA text="View GitHub" url="https://github.com/GamboSylvin" Icon={RightArrow}/>
              </div>
              <ProjectList projects={projects}/>
          </div>
      </div>
    </section>
  );
}

export default Work;