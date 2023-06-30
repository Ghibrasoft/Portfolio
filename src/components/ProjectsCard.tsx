type ProjectsDataProps = {
    id: number;
    name: string;
    imageUrl: string;
    github: string;
    demo?: string;
}[]

export default function ProjectsCard({ projectData }: { projectData: ProjectsDataProps }) {
    return (
        <>
            {
                projectData.map(({ id, name, github, demo, imageUrl }) => (
                    <div
                        key={id}
                        className="rounded-lg p-5 shadow-lg relative group z-0"
                    >
                        {/* frosted glass */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-white bg-opacity-30 backdrop-filter backdrop-blur-[3px] shadow-lg rounded-lg group-hover:opacity-0 -z-0 transition-opacity"></div>
                        <img
                            src={imageUrl}
                            alt="img"
                            className="w-full h-[70%] object-cover" />
                        <h1 className="text-2xl font-bold my-3">{name}</h1>

                        {/* buttons */}
                        <div className="flex justify-end gap-3 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                            <a href={github}>
                                <button
                                    type="button"
                                    className="ring-1 ring-gray-900 px-3 py-1 rounded-full hover:text-white hover:bg-gray-900 active:ring-offset-2 transition-all">
                                    &lt;Code/&gt;
                                </button>
                            </a>
                            {demo &&
                                <a href={demo}>
                                    <button
                                        type="button"
                                        className="ring-1 ring-green-500 px-3 py-1 rounded-full hover:text-white hover:bg-green-500 active:ring-offset-2 transition-all">
                                        Demo
                                    </button>
                                </a>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}
