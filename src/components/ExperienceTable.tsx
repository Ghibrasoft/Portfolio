export default function ExperienceTable() {
    return (
        <table className="table-auto mx-auto">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-t border-b border-r font-bold">Technologies</th>
                    <th className="py-2 px-4 border-t border-b border-r font-bold">Languages</th>
                    <th className="py-2 px-4 border-t border-b font-bold">Additional Skills</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* technologies */}
                    <td className="py-1 px-4 border-r align-top">
                        <ul className="list-inside divide-gray-300">
                            <li className="py-2">💻HTML | CSS | JavaScript | TypeScript</li>
                            <li className="py-2">⚛️ReactJS | Redux | Zustand</li>
                            <li className="py-2">🌐Next.js | Express.js</li>
                            <li className="py-2">🔧Sequelize ORM | Prisma ORM | PostgreSQL | MongoDB</li>
                            <li className="py-2">🎨Sass | Bootstrap 5 | Material UI | Ant Design | Tailwind CSS</li>
                            <li className="py-2">🔀Git | GitHub | RESTful APIs</li>
                        </ul>
                    </td>
                    {/* languages */}
                    <td className="py-1 px-4 border-r align-top">
                        <ul className="list-inside divide-gray-300 w-max">
                            <li className="py-2">🏡Georgian <small>(Native)</small></li>
                            <li className="py-2">🌍English (B1)</li>
                            <li className="py-2">🌐Russian (B1)</li>
                        </ul>
                    </td>
                    {/* additional skills */}
                    <td className="py-1 px-4 align-top">
                        <ul className="list-inside divide-gray-300">
                            <li className="py-2">✨Strong problem-solving and analytical abilities</li>
                            <li className="py-2">💬Excellent communication and collaboration skills</li>
                            <li className="py-2">🌱Quick learner with a growth mindset</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
