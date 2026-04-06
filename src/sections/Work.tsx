import TertiaryCTA from "../buttons/TertiaryCTA";
import RightArrow from "../assets/right-arrow.svg?react";
import ProjectList, { type Project } from "../CardsAndContainers/ProjectList";
import projectImage from "../assets/projectImage.png";
// import { useRouteLoaderData } from "react-router";


function Work() { 

  // let data =  useRouteLoaderData("dataRoot") as { projs: { content: Project[] }};
  // let projects = data.projs.content;
  let projects: Project[] = [
    {
      name: "Project One",
      overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://github.com/GamboSylvin/project-one",
      category: "Web Development",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: projectImage
    },
  ];
  return (
    <section id="work" className="work min-h-screen">
      <div className="container py-12 font-tiktok">
          <div className="container-header px-12 py-2 mb-6">
              <h2 className="text-3xl font-bold mb-2">Selected work</h2>
              <div className="flex flex-col md:flex-row items-start gap-3 md:gap-0 md:items-center justify-between mb-6">
                  <p className="text-gray-800 text-xs md:text-base">A collection of projects that showcase my passion for quality code and good design.</p>
                  <TertiaryCTA text="View GitHub" url="https://github.com/GamboSylvin" Icon={RightArrow}/>
              </div>
              <ProjectList projects={projects}/>
          </div>
      </div>
    </section>
  );
}

export default Work;