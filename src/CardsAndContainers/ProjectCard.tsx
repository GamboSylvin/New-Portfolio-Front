import ProjectCardCTA from "../buttons/ProjectCardCTA";
import CategoryNotif from "../notificationUI/CategoryNotif";
import TechNameNotif from "../notificationUI/TechNameNotif";
import type { Project } from "./ProjectList";

type ProjectCardProps = {
    imageUrl?: string;
    projectData: Project;
};

function ProjectCard({projectData}: ProjectCardProps) {
  return (
    <div className="w-xs relative h-100 project-card flex flex-col items-start rounded-lg overflow-hidden shadow">
        <CategoryNotif category={projectData.category}/>
        <div className="w-full h-48 overflow-hidden">
            <img src={projectData.imageUrl || ""} alt="project Image" className="w-full h-full object-cover"/>
        </div>
        <div className="p-4">
            <h2 className="text-lg font-medium mb-2">{projectData.name}</h2>
            <p className="text-sm text-gray-600 line-clamp-3 mb-8">{projectData.overview}</p>
            <div className="mb-4 flex gap-2">
                {projectData.technologies.map((tech, index) => (
                    <TechNameNotif key={index} techName={tech}/>
                ))}
            </div>
            <ProjectCardCTA url={projectData.link}/>
        </div>
    </div>
  );
}

export default ProjectCard;