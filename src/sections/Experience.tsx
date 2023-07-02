import { motion } from "framer-motion";
import ExperienceTable from "../components/ExperienceTable";
import { useInView } from "react-intersection-observer";


export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <section id="experience" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:w-[900px] mt-12">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="w-fit text-3xl sm:text-5xl mb-3 pb-2 border-b-2 border-indigo-500">Experience</motion.h1>
                <motion.small
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-gray-500">// These are the technologies I've worked with</motion.small>

                {/* tables */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="overflow-x-auto overflow-y-auto h-[350px] mt-5 mb-32 sm:mb-0">
                    <ExperienceTable />
                </motion.div>
            </div>
        </section>
    )
}
