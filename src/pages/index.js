import Image from 'next/image'
import {Inter} from 'next/font/google'
import {Button, Carousel, Col, Row, Space, Typography} from "antd";
// import '../styles/index.css'
const inter = Inter({subsets: ['latin']})

export default function Home() {
    const {v4: uuidv4} = require('uuid');

    const onButtonClick = () => {
        // generate a uuid
        const uuid = uuidv4();
        console.log('assignment id:', uuid);

        // redirect to /user/[uuid]
        window.location.href = `/dream/${uuid}`;
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

                }}
            >
                {/*<div*/}
                {/*    className="absolute before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"*/}
                {/*>*/}
                {/*</div>*/}
                <div
                    className="absolute animate-move-light dark:animate-move-dark before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
                >
                </div>
                <div style={{maxHeight: "10vh"}}>

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
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: "1em"}}>
                    <Button onClick={onButtonClick} type="default" style={{color: "#5596f7"}} size={"large"}>Get Started</Button>
                </div>
            </div>


        </div>
    )
}
