import { TiArrowForward } from "react-icons/ti"
import MyName from "../layout/animations/MyName";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home() {
    const myName = "David".split("");
    const mySurname = "Ghibradze".split("");
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });


    return (
        <section id="home" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:h-auto sm:w-[550px] mt-12">
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-indigo-700">Hi, my name is</motion.p>
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-5xl sm:text-7xl font-bold">
                    {myName.map((letter, index) => (<MyName key={index}>{letter === " " ? "\u00A0" : letter}</MyName>))}
                </motion.h1>
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-5xl sm:text-7xl font-bold">
                    {mySurname.map((letter, index) => (<MyName key={index}>{letter === " " ? "\u00A0" : letter}</MyName>))}
                </motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="my-3">
                    I'm a <span className="text-indigo-500">Frontend</span> developer specializing in building (and occasionally designing) exeptional digital experiences.
                    Curently I'm focused on building responsive web applications.
                    I'm also creating <span className="text-indigo-500">MERN</span> web applications with <span className="text-indigo-500">RESTful APIs</span>
                </motion.p>

                <a href="#projects">
                    <motion.button
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        type="button"
                        className="flex items-center text-indigo-500 ring-1 ring-indigo-500 rounded-full px-5 py-2 group active:bg-indigo-100 active:ring-offset-2 transition-all duration-300">
                        View Work
                        <span className="opacity-0 rotate-90 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"><TiArrowForward size={25} /></span>
                    </motion.button>
                </a>
            </div>
        </section>
    )
}
