import { ReactNode } from "react";
import { motion } from "framer-motion";


type TextSpanProps = {
    children: ReactNode
}

export default function MyName({ children }: TextSpanProps) {
    const hoverAnimation = {
        transform: [
            "scale3d(1, 1, 1)",
            "scale3d(1.4, .55, 1)",
            "scale3d(.75, 1.25, 1)",
            "scale3d(1.25, .85, 1)",
            "scale3d(.9, 1.05, 1)",
            "scale3d(1, 1, 1)",
        ],
    };
    return (
        <motion.span
            whileHover={hoverAnimation}
            className="inline-block hover:text-indigo-500"
        >
            {children}
        </motion.span>
    )
}