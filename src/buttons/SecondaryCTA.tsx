
function SecondaryCTA({text}: {text: string}) {
    return (
            <button className="md:w-fit w-full bg-transparent border border-gray-800 text-gray-800 px-6 py-3 rounded cursor-pointer hover:bg-gray-50 transition duration-300">
                {text}
            </button>
    );
}

export default SecondaryCTA;