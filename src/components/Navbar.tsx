import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillPhone, AiFillProfile } from "react-icons/ai";
import { useEffect, useState } from "react";
import DavidGhibradzeCV from "../assets/DavidGhibradzeCV.pdf";

type NavbarProps = {
    lightMode: boolean;
    setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const sectionIds = ["home", "about", "experience", "projects", "contact"];

export default function Navbar({ lightMode, setLightMode }: NavbarProps) {
    const [activeNav, setActiveNav] = useState<string>("home");
    const [openNav, setOpenNav] = useState(false);

    // handling navbar buttons
    function handleNavClick(navItem: string) {
        setActiveNav(navItem);
        setOpenNav(false);
    }

    // handling setting active nav button when scrolling or refresh
    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;

            for (const sectionId of sectionIds) {
                const sectionElement = document.getElementById(sectionId);

                if (sectionElement) {
                    const { top, bottom } = sectionElement.getBoundingClientRect();

                    if (top <= 0 && bottom > viewportHeight / 2) {
                        setActiveNav(sectionId);
                        break;
                    }
                }
            }
        };
        window.location.href = "#home";
        setActiveNav("home");
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`flex justify-between items-center fixed w-full h-12 shadow-lg z-10 ${lightMode ? "text-white bg-slate-700" : "text-black bg-white"}`}>

            {/* desktop navbar */}
            <div className="h-full hidden sm:flex mr-20  ms-auto">
                {sectionIds.map((navId) => (
                    <a
                        key={navId}
                        href={`#${navId}`}
                        onClick={() => handleNavClick(navId)}
                        className={`${activeNav === navId ? "bg-indigo-500 text-white" : ""} 
                        h-full flex items-center px-5 hover:bg-indigo-500 hover:text-white transition-colors`}
                    >
                        {navId.charAt(0).toUpperCase() + navId.slice(1)}
                    </a>
                ))}

            </div>
            <div className="h-full flex items-center mr-20">
                <button
                    type="button"
                    onClick={() => setLightMode((prev) => !prev)}
                    className="p-1 hover:ring-1 hover:ring-gray-300 hover:rounded-md transition-all">
                    {lightMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
                </button>
            </div>


            {/* hamburger menu */}
            <div
                onClick={() => setOpenNav((state) => !state)}
                className="sm:hidden z-10">
                {openNav ? <MdClose size={35} color="white" /> : <MdMenu size={35} />}
            </div>


            {/* mobile menu */}
            <div className={!openNav ? "hidden" : "bg-gray-900 text-white flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0"}>
                <a href="#" className="py-5 text-3xl" onClick={() => setOpenNav(false)}>Home</a>
                <a href="#about" className="py-5 text-3xl" onClick={() => setOpenNav(false)}>About</a>
                <a href="#experience" className="py-5 text-3xl" onClick={() => setOpenNav(false)}>Experience</a>
                <a href="#projects" className="py-5 text-3xl" onClick={() => setOpenNav(false)}>Projects</a>
                <a href="#contact" className="py-5 text-3xl" onClick={() => setOpenNav(false)}>Contact</a>
            </div>


            {/* social media side tabs */}
            <div className="hidden sm:flex flex-col fixed top-[35%] left-0 rounded-tr-3xl rounded-br-3xl z-10">
                <a href={`tel:${+995555771784}`} className="bg-green-500 rounded-tr-3xl flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        555 771 784
                        <AiFillPhone size={35} />
                    </p>
                </a>
                <a href="mailto:ghibrasoft@gmail.com" className="bg-yellow-500 flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        Gmail
                        <AiFillMail size={35} />
                    </p>
                </a>
                <a href="https://www.linkedin.com/in/davidghibradze/" className="bg-blue-500 flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        LinkedIn
                        <AiFillLinkedin size={35} />
                    </p>

                </a>
                <a href="https://github.com/Ghibrasoft" className="bg-gray-900 flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        Github
                        <AiFillGithub size={35} />
                    </p>
                </a>
                <a href={DavidGhibradzeCV} download className="bg-indigo-500 rounded-br-3xl flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        Download CV
                        <AiFillProfile size={35} />
                    </p>
                </a>
            </div>
        </nav >
    )
}
