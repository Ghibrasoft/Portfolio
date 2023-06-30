import ExperienceTable from "../components/ExperienceTable";

export default function Experience() {
    return (
        <section id="experience" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:w-[900px] mt-12">
                <h1 className="w-fit text-3xl sm:text-5xl mb-3 pb-2 border-b-2 border-indigo-500">Experience</h1>
                <small className="text-gray-500">// These are the technologies I've worked with</small>

                {/* tables */}
                <div className="overflow-x-auto overflow-y-auto h-[350px] mt-5 mb-32 sm:mb-0">
                    <ExperienceTable />
                </div>
            </div>
        </section>
    )
}
