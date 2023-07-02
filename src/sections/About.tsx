import { motion } from "framer-motion";
import { AiFillMessage } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <section id="about" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:w-[550px] mt-12">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="w-fit text-3xl sm:text-5xl border-b-2 border-indigo-500"
                >
                    About
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="my-3"
                >
                    I'm passionate about pursuing opportunities to gain practical experience as a Junior{" "}
                    <span className="text-indigo-500">React</span> Developer. Eager to contribute to dynamic teams and work on
                    challenging projects. If you're seeking a motivated and dedicated developer, let's connect and explore how I
                    can contribute to your organization's success.
                </motion.p>

                <a href="#contact">
                    <motion.button
                        type="button"
                        className="flex items-center gap-1 text-indigo-500 ring-1 ring-indigo-500 rounded-full px-5 py-2 group active:bg-indigo-100 active:ring-offset-2 transition-all"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Let's talk
                        <span className="opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <AiFillMessage size={25} />
                        </span>
                    </motion.button>
                </a>
            </div>
        </section>
    );
}
