
function SkillCard({ skill, Icon }: { skill: string; Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }) {
  return (
    <div className="skill-card flex flex-col items-center px-4 py-2 bg-gray-100 rounded-md">
      <Icon className="skill-icon w-6 h-6 mb-2 text-gray-500" />
      <div className="skill-name text-xs md:text-sm">{skill}</div>
    </div>
  );
}

export default SkillCard;