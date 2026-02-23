
function NavBar() {
  return (
    <>
        <nav className="bg-gray-50 text-gray-800">
            <div className="container font-tiktok border-b border-gray-200 flex items-center justify-between py-3 pl-6 pr-24">
                <div className="font-bold"><a href="./">sylvin.dev</a></div>
                <div className="flex items-center justify-between">
                    <a href="#work" className="hover:bg-gray-200 rounded px-3 py-2">work</a>
                    <a href="#skills" className="hover:bg-gray-200 rounded px-3 py-2">skills</a>
                    <a href="#blog" className="hover:bg-gray-200 rounded px-3 py-2">blog</a>
                    <a href="#contact" className="hover:bg-gray-200 rounded px-3 py-2">contact</a>
                </div>
            </div>
        </nav>
    </>
  );
}

export default NavBar;  