type PrimaryCTAProps = {
    text : string;
    onClick: () => void;
};

function PrimaryCTA({text, onClick}: PrimaryCTAProps) {
    return (
        <div className="w-fit">
            <button onClick={onClick} className="bg-gray-800 text-white px-6 py-3 rounded cursor-pointer hover:bg-gray-700 transition duration-300">
                {text}
            </button>
        </div>
    );
}

export default PrimaryCTA;