import MenuIcon from "./assets/menu.svg?react";
import { useEffect, useRef, useState } from 'react';

function PhoneMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    console.log('PhoneMenu rendered, isOpen:', isOpen);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && 
                !menuRef.current.contains(event.target as Node)
                && buttonRef.current 
                && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                console.log('Clicked outside menu, closing menu', isOpen);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);


  return (
    <div className="md:hidden">
        <button ref={buttonRef} className="md:hidden" onClick={() => {setIsOpen(!isOpen); console.log('Menu button clicked, isOpen:', isOpen);}}>
            <MenuIcon className="w-6 h-6"/>
        </button>
        
        <div ref={menuRef} className={`absolute h-5/6 right-2 top-16 w-3/4 bg-gray-50/30 backdrop-blur-sm text-gray-800 flex flex-col items-center gap-4 py-4 rounded-lg transition duration-300 ${isOpen ? 'opacity-100 shadow' : 'opacity-0 pointer-events-none'}`}>
            <a href="#work" className="hover:bg-gray-200 rounded px-3 py-2">work</a>
            <a href="#skills" className="hover:bg-gray-200 rounded px-3 py-2">skills</a>
            <a href="#blog" className="hover:bg-gray-200 rounded px-3 py-2">blog</a>
            <a href="#contact" className="hover:bg-gray-200 rounded px-3 py-2">contact</a>
        </div>

    </div>

  );
}

export default PhoneMenu;