import TopRightArrow from '../assets/top-right-arrow.svg?react';

function ProjectCardCTA({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" className="text-xs font-medium px-4 py-2 bg-transparent text-gray-800 rounded-full hover:bg-gray-100 transition duration-300">
      View Project
      <TopRightArrow className="inline-block ml-2 w-3.5 h-3.5"/>
    </a>

  );
}

export default ProjectCardCTA;