import { AiFillMessage } from "react-icons/ai";

export default function About() {
    return (
        <section id="about" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:w-[550px] mt-12">
                <h1 className="w-fit text-3xl sm:text-5xl  border-b-2 border-indigo-500">About</h1>
                <p className="my-3">
                    I'm passionate about pursuing opportunities to gain practical experience as a Junior React Developer.
                    Eager to contribute to dynamic teams and work on challenging projects. If you're seeking a motivated
                    and dedicated developer, let's connect and explore how I can contribute to your organization's success.
                </p>

                <a href="#contact">
                    <button
                        type="button"
                        className="flex items-center gap-1 text-indigo-500 ring-1 ring-indigo-500 rounded-full px-5 py-2 group active:bg-indigo-100 active:ring-offset-2 transition-all">
                        Let's talk
                        <span className="opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"><AiFillMessage size={25} /></span>
                    </button>
                </a>
            </div>
        </section>
    )
}
