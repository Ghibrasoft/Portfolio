import { TiArrowForward } from "react-icons/ti"


export default function Home() {
    return (
        <section id="home" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:h-auto sm:w-[550px] mt-12">
                <p className="text-indigo-700">Hi, my name is</p>
                <h1 className="text-5xl sm:text-7xl font-bold">David Ghibradze</h1>
                <p className="my-3">
                    I'm a Frontend developer specializing in building (and occasionally designing) exeptional digital experiences.
                    Curently I'm focused on building responsive web applications.
                    I'm also creating MERN web applications with RESTful APIs
                </p>

                <a href="#projects">
                    <button
                        type="button"
                        className="flex items-center text-indigo-500 ring-1 ring-indigo-500 rounded-full px-5 py-2 group active:bg-indigo-100 active:ring-offset-2 transition-all duration-300">
                        View Work
                        <span className="opacity-0 rotate-90 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300"><TiArrowForward size={25} /></span>
                    </button>
                </a>
            </div>
        </section>
    )
}
