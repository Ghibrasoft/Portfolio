import ProjectsCard from "../components/ProjectsCard";
import projectData from "../data/projectsData.json";

export default function Projects() {

    return (
        <section id="projects" className="h-screen flex justify-center items-center">
            {/* container */}
            <div className="w-full sm:w-[90%] mt-12">
                <h1 className="w-fit text-3xl sm:text-5xl mb-3 pb-2 border-b-2 border-indigo-500">Projects</h1>
                <small className="text-gray-500">// Check out some of my recent work</small>
                {/* card container */}
                <div className="w-full h-[500px] grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5 overflow-y-auto">
                    <ProjectsCard projectData={projectData} />
                </div>
            </div>
        </section>
    )
}
