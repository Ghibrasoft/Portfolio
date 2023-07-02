import { motion } from "framer-motion";
import ProjectsCard from "../components/ProjectsCard";
import projectData from "../data/projectsData.json";
import { useInView } from "react-intersection-observer";

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    })

    return (
        <section id="projects" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:w-[90%] mt-12">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="w-fit text-3xl sm:text-5xl mb-3 pb-2 border-b-2 border-indigo-500">Projects</motion.h1>
                <motion.small
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500">// Check out some of my recent work</motion.small>
                {/* card container */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full h-[400px] grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5 overflow-y-auto"
                >
                    <ProjectsCard projectData={projectData} />
                </motion.div>
            </div>
        </section>
    )
}
