
function SkillDefCard({ skill, description, icon }: { skill: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="skill-def-card flex-1 flex-col items-start px-4 py-6 bg-gray-100 rounded-md">
      <div className="flex gap-3 mb-3 items-center">
        <div>{icon}</div>
        <div className="skill-name text-lg font-semibold">{skill}</div>
      </div>
      <div className="skill-description text-xs md:text-sm text-gray-600">{description}</div>
    </div>
  );
}

export default SkillDefCard;