import ProjectCard from "./ProjectCard";

type Project = {
  name: string;
  description: string;
  id: number;
  link: string;
  category: string;
  technologies: string[];
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
