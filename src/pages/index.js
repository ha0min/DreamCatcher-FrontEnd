import {Inter} from 'next/font/google'
import Link from "next/link";
import Welcome from "@/pages/welcome";
import Dream from "@/pages/dream/[id]";
import {motion, useIsPresent} from "framer-motion";
// import '../styles/index.css'
const inter = Inter({subsets: ['latin']})

export default function Home() {
    const {isPresent} = useIsPresent();

    return (
        <div>
            <Welcome/>
            {/*<motion.div*/}
            {/*    initial={{ scaleX: 1 }}*/}
            {/*    animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}*/}
            {/*    exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}*/}
            {/*    style={{ originX: isPresent ? 0 : 1}}*/}
            {/*    className="privacy-screen"*/}
            {/*/>*/}
        </div>
    )
}
