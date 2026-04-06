import GithubIcon from "../assets/github.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-200 py-4 px-12">
            <div className="flex justify-between items-center">
                <div className="copyright-container">
                    <h3 className="text-lg text-gray-200 font-bold mb-2">sylvin.dev</h3>
                    <p className="text-xs md:text-sm">&copy; 2026 Gambo Sylvin. All rights reserved.</p>
                </div>
                <div className="socials-container flex gap-6">
                    <a href="https://linkedin.com" className="text-gray-200 hover:text-gray-50">
                        <LinkedInIcon className="w-5 h-5"/>
                    </a>
                    <a href="https://github.com" className="text-gray-200 hover:text-gray-50">
                        <GithubIcon className="w-5 h-5"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;