import '@/styles/globals.css'
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";

export default function App({Component, pageProps}) {
    const router = useRouter()
    const pageKey = router.asPath

    return (
        <AnimatePresence initial={false} mode={"wait"}>
            <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
    )
}
