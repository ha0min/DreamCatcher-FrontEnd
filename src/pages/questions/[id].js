import {useIsPresent} from "framer-motion";
import {useDreamForm, useQuestions} from "@/utils/http";
import PageContainerWrapper from "@/components/container";
import {Button, Card, Carousel, Progress, Skeleton, Typography} from "antd";
import {LoadingModal} from "@/components/loading-modal";
import {PrivacyScreen} from "@/components/common";
import {ProFormItem, ProFormTextArea,ProForm, StepsForm} from "@ant-design/pro-components";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const baseUrl = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

const QuestionsPage = () => {
    const isPresent = useIsPresent();
    const router = useRouter();
    const {id} = router.query;
    const [isModalShow, setIsModalShow] = useState(false);
    const [questionsData, setQuestionsData] = useState({questions: null, isLoading: true, isError: null});
    const {isMutating, error, data, reset, questionsTrigger} = useQuestions();


    useEffect(() => {
        // 在组件装载后立即显示 Modal，这样可以保证动画效果
        setIsModalShow(true);

        // 设置一个定时器，在 4 秒后关闭 Modal
        const timerId = setTimeout(() => {
            setIsModalShow(false);
            const fetchData = async () => {
                console.log('router.isReady', router.isReady)
                const dreamId = router.query.id;
                console.log('dreamId', dreamId)
                if (router.isReady) {
                    setQuestionsData({...questionsData, isLoading: true});
                    try {
                        const response = await fetch(`${baseUrl}/questions/${dreamId}`);
                        const data = await response.json();
                        setQuestionsData({questions: data, isLoading: false, isError: null});
                    } catch (error) {
                        setQuestionsData({...questionsData, isLoading: false, isError: error});
                    }
                }
            };

            fetchData();
        }, 3000);

        // 清除定时器，防止内存泄漏
        return () => clearTimeout(timerId);
    }, []);

    const onFormFinish = async (formData) => {
        formData.dream_id = id;
        console.log('post data: ', formData);

        await questionsTrigger({formData})
            .then((res) => {
                console.log(res);
                // router.push('/text/' + id);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    if (questionsData.isError) {
        return <div>failed to load</div>
    }


    return (
        <div>
            <PageContainerWrapper>
                <Skeleton loading={questionsData.isLoading} active>
                    <QuestionsForm onFormFinish={onFormFinish} questions={questionsData.questions}/>
                </Skeleton>
            </PageContainerWrapper>

            <LoadingModal isModalShow={isModalShow}>
                <div>
                    <Typography.Title level={1} style={{color: "#f5f5f5"}}>
                        🤩 Answer questions to refine dream analysis!
                    </Typography.Title>
                </div>
            </LoadingModal>

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

const QuestionsForm = ({onFormFinish, questions}) => {
    const data = questions

    const [current, setCurrent] = useState(0);
    return (
        <div>
            <StepsForm
                onFinish={onFormFinish}
                submitter={{
                    render: (props) => {
                        if (props.step == 0) {
                            return (
                                <Button type="primary" onClick={() => props.onSubmit?.()}>
                                    NEXT {'>'}
                                </Button>
                            );
                        }

                        if (props.step !== data.length - 1) {
                            return [
                                <Button key="goToPrev" onClick={() => props.onPre?.()}>
                                    {'<'} Previous
                                </Button>,
                                <Button
                                    type="primary"
                                    key="goToNext"
                                    onClick={() => props.onSubmit?.()}
                                >
                                    NEXT {'>'}
                                </Button>,
                            ]
                        }


                        return [
                            <Button key="goToOne" onClick={() => props.onPre?.()}>
                                {'<'} Previous
                            </Button>,
                            <Button
                                type="primary"
                                key="submit"
                                onClick={() => props.onSubmit?.()}
                            >
                                Submit
                            </Button>,
                        ];

                    }
                }}
                onCurrentChange={(current) => {
                    setCurrent(current)
                }
                }
                stepsRender={(steps, doms) => {
                    return (
                        <Progress percent={((current + 1) / steps.length) * 100} showInfo={false}/>
                    )
                }}
                formProps={{
                    validateMessages: {
                        required: 'These fields are required!',
                    },
                }}
            >
                    {data.map((question, index) => {
                        return (
                            <StepsForm.StepForm name={'1' + question.question_id} key={index} title={"1"}
                                                style={{width: "80vw"}}
                            >
                                <QuestionStep key={index} question={question}/>
                            </StepsForm.StepForm>

                        )
                    })}
            </StepsForm>
        </div>
    )
}

const QuestionStep = ({question}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Card style={{
                width: "90%",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                padding: "0 20%",
                marginBottom: "1em"
            }}>
                <Typography.Title level={2} className={"gradient-text"}>
                    {question.question}
                </Typography.Title>
            </Card>
            <Card
                style={{
                    width: "90%",
                    marginBottom: "2em"
                }}
            >
                <ProFormItem
                    name={question.question_id}
                    style={{
                        marginBottom: "0"
                    }}
                >
                    <ProFormTextArea
                        placeholder={"Answer here"}
                        autoSize={true}
                        allowClear
                        bordered={false}
                    />

                </ProFormItem>
            </Card>

        </div>
    )
}

export default QuestionsPage;