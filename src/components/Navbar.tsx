import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillPhone, AiFillProfile } from "react-icons/ai";
import { useEffect, useState } from "react";
import DavidGhibradzeCV from "../assets/DavidGhibradzeCV.pdf";
import { motion } from "framer-motion";

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
        <nav className={`flex justify-between items-center fixed w-full h-12 shadow-lg z-10 ${lightMode ? "text-white bg-slate-800" : "text-black bg-white"}`}>
            {/* desktop navbar */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="h-full hidden sm:flex mr-20  ms-auto">
                {sectionIds.map((navId) => (
                    <motion.a
                        key={navId}
                        href={`#${navId}`}
                        onClick={() => handleNavClick(navId)}
                        className={`${activeNav === navId ? "bg-indigo-500 text-white" : ""} 
                        h-full flex items-center px-5 hover:bg-indigo-500 hover:text-white transition-colors`}
                    >
                        {navId.charAt(0).toUpperCase() + navId.slice(1)}
                    </motion.a>

                ))}

            </motion.div>

            {/* toggle light/datk mode */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="h-full flex items-center mr-20">
                <button
                    type="button"
                    onClick={() => setLightMode((prev) => !prev)}
                    className="p-1 hover:ring-1 hover:ring-gray-300 hover:rounded-md transition-all">
                    {lightMode ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
                </button>
            </motion.div>


            {/* hamburger menu */}
            <div
                onClick={() => setOpenNav((state) => !state)}
                className="sm:hidden z-10">
                {openNav ? <MdClose size={35} color="white" /> : <MdMenu size={35} />}
            </div>


            {/* mobile menu */}
            <div className={!openNav ? "hidden" : "bg-slate-800 text-white flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0"}>
                {
                    sectionIds.map((navId) => (
                        <a
                            key={navId}
                            href={`#${navId}`}
                            onClick={() => setOpenNav(false)}
                            className="relative py-5 text-3xl hover:text-indigo-500 transition-colors">
                            {navId.charAt(0).toUpperCase() + navId.slice(1)}
                            <span className="absolute -top-0 left-0 w-full h-full flex items-center justify-center text-[4rem] text-slate-500/30  opacity-0 hover:opacity-100 tracking-[3rem] hover:tracking-widest transition-all duration-200">
                                {navId.charAt(0).toUpperCase() + navId.slice(1)}
                            </span>
                        </a>
                    ))
                }
            </div>


            {/* social media side tabs */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden sm:flex flex-col fixed top-[35%] left-0 rounded-tr-3xl rounded-br-3xl z-10">
                <a
                    href={`tel:${+995555771784}`}
                    className="bg-green-500 rounded-tr-3xl flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        555 771 784
                        <AiFillPhone size={35} />
                    </p>
                </a>
                <a
                    href="mailto:ghibrasoft@gmail.com"
                    className="bg-yellow-500 flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        Gmail
                        <AiFillMail size={35} />
                    </p>
                </a>
                <a
                    href="https://www.linkedin.com/in/davidghibradze/"
                    className="bg-blue-500 flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        LinkedIn
                        <AiFillLinkedin size={35} />
                    </p>

                </a>
                <a
                    href="https://github.com/Ghibrasoft"
                    className="bg-gray-900 flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        Github
                        <AiFillGithub size={35} />
                    </p>
                </a>
                <a
                    href={DavidGhibradzeCV}
                    download
                    className="bg-indigo-500 rounded-br-3xl flex items-center justify-between py-1 px-1 w-40 h-14 -ml-28 hover:-ml-0 transition-all duration-300">
                    <p className="text-white w-full flex justify-between items-center">
                        Download CV
                        <AiFillProfile size={35} />
                    </p>
                </a>
            </motion.div>
        </nav >
    )
}
