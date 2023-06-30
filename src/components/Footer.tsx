import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillPhone, AiFillProfile } from "react-icons/ai";
import DavidGhibradzeCV from "../assets/DavidGhibradzeCV.pdf";


export default function Footer() {
    return (
        <footer className={`flex justify-between items-center h-12 border-t shadow-lg fixed bottom-0 w-full text-white border-gray-300 bg-slate-700`}>
            {/* container */}
            <div className="sm:hidden flex gap-1">
                <a
                    href={`tel:${+995555771784}`}
                    className="text-green-500 flex items-center gap-1 w-fit"
                >
                    <AiFillPhone size={35} className="transform -scale-x-100" />
                </a>

                <a
                    href={"mailto:ghibrasoft@gmail.com"}
                    className="text-yellow-500 flex items-center gap-1 w-fit"
                >
                    <AiFillMail size={35} />
                </a>

                <a
                    href={"https://www.linkedin.com/in/davidghibradze/"}
                    className="text-blue-500 w-fit flex items-center gap-1"
                >
                    <AiFillLinkedin size={35} />
                </a>

                <a
                    href={"https://github.com/Ghibrasoft"}
                    className="text-gray-900 w-fit flex items-center gap-1"
                >
                    <AiFillGithub size={35} />
                </a>

                <a
                    href={DavidGhibradzeCV}
                    download
                    className="text-indigo-500 flex items-center gap-1 w-fit"
                >
                    <AiFillProfile size={35} />
                </a>
            </div>
            <small className="mr-1 sm:ms-auto">&copy; Created by Ghibrasoft.</small>
        </footer>
    )
}
