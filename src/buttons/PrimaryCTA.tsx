type PrimaryCTAProps = {
    text : string;
    onClick: () => void;
};

function PrimaryCTA({text, onClick}: PrimaryCTAProps) {
    return (
            <button onClick={onClick} className="md:w-fit w-full bg-gray-800 text-white px-6 py-3 rounded cursor-pointer hover:bg-gray-700 transition duration-300">
                {text}
            </button>
    );
}

export default PrimaryCTA;