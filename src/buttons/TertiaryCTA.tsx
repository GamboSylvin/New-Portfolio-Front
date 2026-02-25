import type React from "react";

type TertiaryCTAProps = {
  text: string;
  url: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

function TertiaryCTA({text, url, Icon}: TertiaryCTAProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="inline-block px-6 py-2 rounded-full bg-fuchsia-50 text-xs text-fuchsia-500 hover:bg-fuchsia-100 transition-colors duration-200"
    >
        {text}
        {Icon && <Icon className="inline-block ml-2 w-4 h-4"/>}
    </a>
  );
}

export default TertiaryCTA;