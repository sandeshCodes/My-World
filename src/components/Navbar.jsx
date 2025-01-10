import { useEffect, useRef, useState } from "react";
import { FaBars, FaBriefcase, FaEnvelope, FaHome, FaUser } from "react-icons/fa";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const navRef = useRef(null);
    function toggleNavbar(){
        setIsVisible(!isVisible);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

   return(
    <div>
        <button onClick={toggleNavbar} className="fixed top-10 left-10 transform -translate-y-1/2  text-white p-2 rounded-r focus:outline-none">
            <FaBars size={24}/>
        </button>
        <nav ref={navRef} className={`fixed top-0 left-0 h-full bg-custom-navy text-white flex flex-col items-center py-4 px-6 transition-transform duration-300 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
    }`}>
            <img src="/vite.svg" alt="SandeshHeka"/>
            <ul className="space-y-6 flex flex-col justify-center h-full">
                <li>
                <a href="#home" className="max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex justify-between gap-2">
                    <FaHome size={24} />
                 
                </a>
                </li>
                <li>
                    <a href="#about" className="max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex justify-between gap-2">
                        <FaUser size={24}/>
                    </a>
                </li>
                <li>
                    <a href="#work" className="max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex justify-between gap-2">
                        <FaBriefcase size={24}/>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex justify-between gap-2">
                        <FaEnvelope size={24}/>
                    </a>
                </li>
            </ul>
        </nav>
       
    </div>
   )
}
export default Navbar;
