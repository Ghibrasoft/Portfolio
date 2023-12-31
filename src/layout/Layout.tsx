import { ReactNode } from "react"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

type LayoutProps = {
    children: ReactNode;
    lightMode: boolean;
    setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
function Layout({ children, lightMode, setLightMode }: LayoutProps) {

    return (
        <motion.div
            key={lightMode ? "light" : "dark"}
            className={`flex flex-col min-h-screen ${lightMode ? "bg-white" : "bg-slate-800 text-white"} overflow-x-hidden`}>
            <header>
                <Navbar lightMode={lightMode} setLightMode={setLightMode} />
            </header>
            <main className="flex-1 px-4">
                {children}
            </main>
            <Footer />
        </motion.div>
    );
};

export default Layout;
