import {motion} from "framer-motion";
import {Carousel, Typography} from "antd";

export const LoadingModal = ({isModalShow, children}) => {
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {type: "spring", stiffness: 300, damping: 24}
        },
        closed: {opacity: 0, y: 20, transition: {duration: 0.2}}
    };

    return (
        <motion.div
            initial={false}
            animate={isModalShow ? "open" : "closed"}
        >
            <div className="overlay" style={{display: isModalShow ? "block" : "none"}}></div>

            <motion.div
                className="loading-box"
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{pointerEvents: isModalShow ? "auto" : "none"}}
            >
                <motion.div variants={itemVariants}>
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}