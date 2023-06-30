import { AiOutlineSend, AiOutlineClear } from "react-icons/ai"

export default function Contact() {
    const getFormUrl = import.meta.env.VITE_GETFORM_URL;
    const emailPattern: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return (
        <section id="contact" className="h-screen flex justify-center items-center mt-12">
            {/* container */}
            <div className="w-full sm:w-[550px] flex flex-col gap-5 mt-12">
                <h1 className="w-fit text-3xl sm:text-4xl border-b-2 border-indigo-500">Contact</h1>
                <small className="text-gray-500">// Write me a quick message </small>
                <form
                    action={getFormUrl}
                    method="POST"
                    className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        className="px-4 py-2 border rounded-md shadow outline-none focus:shadow-lg transition-shadow"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email..."
                        pattern={emailPattern.source}
                        className="px-4 py-2 border rounded-md shadow outline-none focus:shadow-lg transition-shadow"
                        required
                    />
                    <textarea
                        name="textarea"
                        rows={5}
                        placeholder="Message..."
                        className="px-4 py-2 border rounded-md shadow outline-none focus:shadow-lg transition-shadow"
                        required
                    />
                    <div className="flex gap-3 justify-end">
                        <button
                            type="submit"
                            className="flex items-center text-indigo-500 ring-1 ring-indigo-500 rounded-full px-5 py-2 active:bg-indigo-100 active:ring-offset-2 group transition-all"
                        >
                            Send
                            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                <AiOutlineSend size={25} />
                            </span>
                        </button>
                        <button
                            type="reset"
                            className="flex items-center text-red-500 ring-1 ring-red-500 rounded-full px-5 py-2 active:bg-red-100 active:ring-offset-2 group transition-all">
                            Clear
                            <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                                <AiOutlineClear size={25} />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
