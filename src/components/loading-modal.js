import {motion} from "framer-motion";
import {Carousel, Typography} from "antd";

export const LoadingModal = ({isModalShow}) => {
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
                    <Carousel dotPosition={"left"}
                              dots={false}
                              autoplaySpeed={3500}
                              waitForAnimate={true}
                              autoplay={true}>
                        <div>
                            <Typography.Title level={1} style={{color:"#f5f5f5"}}>
                                🧠 Scanning your dream...
                            </Typography.Title>
                        </div>
                        <div>
                            <Typography.Title level={1} style={{color:"#f5f5f5"}}>
                                🧪 Analyzing your dream fragments...
                            </Typography.Title>
                        </div>
                        <div>
                            <Typography.Title level={1} style={{color:"#f5f5f5"}}>
                                🌌 Reconstructing your dream scene...
                            </Typography.Title>
                        </div>
                        <div>
                            <Typography.Title level={1} style={{color:"#f5f5f5"}}>
                                🌠 Capturing the essence of your desires...
                            </Typography.Title>
                        </div>
                        <div>
                            <Typography.Title level={1} style={{color:"#f5f5f5"}}>
                                🌙 Unleashing infinite possibilities...
                            </Typography.Title>
                        </div>
                    </Carousel>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}