
function TechNameNotif({ techName }: { techName: string }) {
  return (
    <div className="w-fit text-xs tech-name-notif bg-gray-100  text-gray-500 px-4 py-1.5 rounded">
      {techName}
    </div>
  );
}

export default TechNameNotif;