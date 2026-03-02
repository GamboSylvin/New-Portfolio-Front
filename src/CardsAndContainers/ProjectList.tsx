import ProjectCard from "./ProjectCard";

type Project = {
  name: string;
  overview: string;
  id?: number;
  link: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
};

type ProjectListProps = {
  projects: Project[];
};

function ProjectList({projects}: ProjectListProps) {
  return (
    <div className="project-list flex items-center justify-around">
        {projects.map((project) => (
          <ProjectCard key={project.id} projectData={project}/>
        ))}   
    </div>
  );
}

export default ProjectList;

export type { Project };