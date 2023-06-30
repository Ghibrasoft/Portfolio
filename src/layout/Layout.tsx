import { ReactNode } from "react"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
            <main className="flex-1 px-4">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
