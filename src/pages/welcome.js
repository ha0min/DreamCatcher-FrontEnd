import {v4 as uuidv4} from "uuid";
import {Button, Carousel, Col, Row, Typography} from "antd";
import {motion, useIsPresent} from "framer-motion";
import {useRouter} from "next/router";
import Link from "next/link";
import {useEffect} from "react";
import {PrivacyScreen} from "@/components/common";

export const Welcome = () => {
    const router = useRouter();
    const {v4: uuidv4} = require('uuid');
    const isPresent = useIsPresent();

    useEffect(() => {
        console.log('Welcome isPresent:', isPresent);
    }, [isPresent]);


    const onButtonClick = () => {
        // generate a uuid
        const uuid = uuidv4();
        console.log('assignment id:', uuid);

        // redirect to /user/[uuid]
        router.push(`/dream/${uuid}`);
    }

    return (
        <div
            style={{height: "100vh", overflow: "hidden"}}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center", /* 水平居中 */
                    alignItems: "center", /* 垂直居中 */
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden"

                }}
            >
                <div style={{overflow: "hidden", zIndex: -1}}>
                    <div
                        className="absolute animate-move-light dark:animate-move-dark before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
                    >
                    </div>
                </div>
                <div style={{maxHeight: "10vh"}}>

                    <TextCarousel/>
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                    <Button onClick={onButtonClick} type="default" style={{color: "#5596f7"}} size={"large"}>Get
                        Started</Button>
                </div>
                <p>
                    <Link href={"/test"}>
                        test
                    </Link>
                </p>
                <Link href={"/dream/test"}>
                    test dream
                </Link>
            </div>

            <PrivacyScreen isPresent={isPresent}/>
        </div>
    )
}

const TextCarousel = () => {
    return (
        <Row wrap={false} justify={"center"}>
            <Col span={8}>
                <Carousel style={{textAlign: 'end', paddingRight: '1%'}} dotPosition={"left"} dots={false}
                          autoplay={true}>
                    <div>
                        <Typography.Title level={1}>
                            Build
                        </Typography.Title>
                    </div>
                    <div>
                        <Typography.Title level={1}>
                            Retrive
                        </Typography.Title>
                    </div>
                    <div>
                        <Typography.Title level={1}>
                            Imagine
                        </Typography.Title>
                    </div>
                    <div>
                        <Typography.Title level={1}>
                            Catch
                        </Typography.Title>
                    </div>
                    <div>
                        <Typography.Title level={1}>
                            Dream
                        </Typography.Title>
                    </div>
                </Carousel>
            </Col>
            <Col span={10}>
                <Typography.Title level={1}>
                    Your Dream.
                </Typography.Title>
            </Col>
        </Row>
    )
}

export default Welcome;