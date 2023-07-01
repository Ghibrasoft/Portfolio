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
        <div className={`flex flex-col min-h-screen ${lightMode ? "bg-white" : "bg-slate-700 text-white"}`}>
            <header>
                <Navbar lightMode={lightMode} setLightMode={setLightMode} />
            </header>
            <motion.main className="flex-1 px-4"
                initial={{ opacity: 0, y: 50 }}   // initial animation state
                animate={{ opacity: 1, y: 0 }}   // animation to apply when comp. enters the viewport
                exit={{ opacity: 0, y: -50 }}   // animation to apply when comp. exits the viewport
                transition={{ duration: 0.5 }}   // animation duration
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
