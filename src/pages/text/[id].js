// pages/index.js
import {motion, useIsPresent} from 'framer-motion';
import {DelayPopupDiv, PrivacyScreen} from "@/components/common";
import {useQuestions, useText} from "@/utils/http";
import {LoadingModal} from "@/components/loading-modal";
import {useEffect, useState} from "react";
import {Button, Card, Carousel, Input, Progress, Skeleton, Typography} from "antd";
import PageContainerWrapper from "@/components/container";
import {StepsForm, ProForm, ProFormItem, ProFormTextArea} from "@ant-design/pro-components";
import {useRouter} from "next/router";

export default function Home() {
    const [isModalShow, setIsModalShow] = useState(false);
    const [textData, setTextData] = useState({text: null, isLoading: true, isError: null});
    const router = useRouter();
    const isPresent = useIsPresent();

    const {id} = router.query;
    // const id = 'test';
    const {textTrigger, isMutating} = useText(id);


    useEffect(() => {
        // 在组件装载后立即显示 Modal，这样可以保证动画效果
        setIsModalShow(true);

        // 设置一个定时器，在 4 秒后关闭 Modal
        const timerId = setTimeout(() => {
            setIsModalShow(false);
            const fetchData = async () => {
                console.log('router.isReady', router.isReady)
                const dreamId = router.query.id;
                // const dreamId = 'test';
                console.log('dreamId', dreamId)
                if (router.isReady) {
                    setTextData({...textData, isLoading: true});
                    try {
                        const response = await fetch(`http://127.0.0.1:5000/text/${dreamId}`);
                        const data = await response.json();
                        setTextData({text: data, isLoading: false, isError: null});
                    } catch (error) {
                        setTextData({...textData, isLoading: false, isError: error});
                    }
                }
            };

            fetchData();
        }, 2000);

        // 清除定时器，防止内存泄漏
        return () => clearTimeout(timerId);
    }, []);

    if (textData.isError) {
        return <div>failed to load</div>
    }

    const onFormFinish = async (formData) => {
        console.log('text post click')
        formData.dream_id = id;
        console.log('post data: ', formData);

        await textTrigger({formData})
            .then((res) => {
                console.log(res);
                // router.push('/questions/' + id);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <PageContainerWrapper>
                <Skeleton loading={textData.isLoading} active>
                    <DelayPopupDiv delay={0.5}>
                        <Typography.Title level={1}>
                            🥸 Your dream is generated!
                        </Typography.Title>
                    </DelayPopupDiv>
                    <TextForm onFormFinish={onFormFinish} text={textData.text}/>
                </Skeleton>
            </PageContainerWrapper>

            <LoadingModal isModalShow={isMutating}>
                <Loading/>
            </LoadingModal>
            <PrivacyScreen isPresent={isPresent}/>
        </div>
    )
}

const Loading = () => {
    return (
        <Carousel dotPosition={"left"}
                  dots={false}
                  autoplaySpeed={3500}
                  autoplay={true}>
            <div>
                <Typography.Title level={1} style={{color: "#f5f5f5"}}>
                    🧠 Scanning your dream...
                </Typography.Title>
            </div>
            <div>
                <Typography.Title level={1} style={{color: "#f5f5f5"}}>
                    🧪 Analyzing your dream fragments...
                </Typography.Title>
            </div>
            <div>
                <Typography.Title level={1} style={{color: "#f5f5f5"}}>
                    🌌 Reconstructing your dream scene...
                </Typography.Title>
            </div>
            <div>
                <Typography.Title level={1} style={{color: "#f5f5f5"}}>
                    🌠 Capturing the essence of your desires...
                </Typography.Title>
            </div>
            <div>
                <Typography.Title level={1} style={{color: "#f5f5f5"}}>
                    🌙 Unleashing infinite possibilities...
                </Typography.Title>
            </div>
        </Carousel>
    )
}

const TextForm = ({onFormFinish, text}) => {
    const data = text;

    return (
        <div>
            <ProForm
                onFinish={onFormFinish}
                submitter={
                    {
                        searchConfig: {
                            resetText: 'Reset',
                            submitText: 'Submit',
                        },
                    }}

            >
                {data.map((text, index) => {
                    return (
                        <DelayPopupDiv key={index} delay={1.3 + 0.2 * index}>
                            <TextFormItem index={index} text={text}/>
                        </DelayPopupDiv>
                    )
                })}
            </ProForm>
        </div>
    )
}

const TextFormItem = ({index, text}) => {
    return (
        // <ProFormItem
        //     name={'item'+index}
        //     label={
        //         <Typography.Title level={3}>
        //             Scene {index + 1}
        //         </Typography.Title>
        //     }
        // >
        //     <Input.TextArea key={index} rows={4} value={text.text}/>
        // </ProFormItem>
        //
        <ProFormTextArea
            name={index}
            label={
                <Typography.Title level={3}>
                    Scene {index + 1}
                </Typography.Title>
            }
            key={index}
            initialValue={text.text}
        >

        </ProFormTextArea>
    )
}