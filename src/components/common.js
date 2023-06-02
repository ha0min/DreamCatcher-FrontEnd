import {CheckCard} from "@ant-design/pro-components";
import {motion} from "framer-motion";

export const EmojiCard = ({emoji, description, value}) => {
    return (
        <CheckCard
            title={
                <div
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '100px',
                        fontSize: '3em'
                    }}
                >
                    {emoji}
                </div>
            }
            description={<div style={{textAlign: 'center'}}>{description}</div>}
            value={value}
            style={{width: 120, height: 130, textAlign: 'center'}}
        />
    )
}

export const PrivacyScreen = ({isPresent}) => {
    return (
        <motion.div
            initial={{scaleX: 1}}
            animate={{scaleX: 0, transition: {duration: 0.5, ease: "circOut"}}}
            exit={{scaleX: 1, transition: {duration: 0.5, ease: "circIn"}}}
            style={{originX: isPresent ? 0 : 1}}
            className="privacy-screen"
        />
    )
}

export const DelayPopupDiv = ({children, delay, ...props}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0, transition: {delay: delay, duration: 0.8}}}
            exit={{opacity: 0, transition: {duration: 0.8}}}
            {...props}
        >
            {children}
        </motion.div>
    )
}
