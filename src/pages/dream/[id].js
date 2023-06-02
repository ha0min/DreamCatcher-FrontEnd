import {useRouter} from "next/router";
import PageContainerWrapper from "@/components/container";
import {
    ProCard,
    ProFormText,
    StepsForm,
    ProFormDateRangePicker, CheckCard, ProFormItem, ProFormGroup, ProFormList, ProFormTextArea
} from "@ant-design/pro-components";
import {Carousel, Col, Input, Row, Spin, Typography} from "antd";
import {useRef, useState} from "react";
import {useDreamForm} from "@/utils/http";
import {wait} from "next/dist/build/output/log";
import {motion, useIsPresent} from "framer-motion";
import Link from "next/link";
import {EmojiCard, PrivacyScreen} from "@/components/common";
import {LoadingModal} from "@/components/loading-modal";


const Dream = () => {
    const router = useRouter();
    const {id} = router.query;
    console.log('dream id: ', id);

    const {isMutating, error, data, reset, dreamFormTrigger} = useDreamForm();
    const [isLoading, setIsLoading] = useState(false);
    const isPresent = useIsPresent();


    const onFormFinish = async (formData) => {
        formData.dream_id = id;
        console.log('post data: ', formData);

        await dreamFormTrigger({formData})
            .then((res) => {
                console.log(res);
                router.push('/questions/' + id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>

            <PageContainerWrapper title={"Dream"}>
                <DreamForm onFormFinish={onFormFinish}/>
            </PageContainerWrapper>
            <LoadingModal isModalShow={isMutating}>
                <Loading />
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
                  waitForAnimate={true}
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

const EmotionStepForm = () => {
    const [customizeEmotion, setCustomizeEmotion] = useState(null);
    const inputRef = useRef(null);
    return (

        <ProCard
            style={{
                minWidth: 800,
                marginBlockEnd: 16,
            }}
            title={
                <div>
                    <Typography.Title level={2}>
                        👋 let{"'"}s build your dream step by step.
                    </Typography.Title>
                    <Typography.Title level={3}>
                        First, what emotion best fit your dream?
                    </Typography.Title>
                </div>
            }
        >
            <ProFormItem
                name="dream-emotion"
                rules={[{required: true}]}
            >
                <CheckCard.Group>
                    <EmojiCard description={"Sad"} emoji={"😭"} value={"Sad"}/>
                    <EmojiCard description={"Fear"} emoji={"😱"} value={"Fear"}/>
                    <EmojiCard description={"Neutral"} emoji={"😐"} value={"Neutral"}/>
                    <EmojiCard description={"Boring"} emoji={"😒"} value={"Boring"}/>
                    <EmojiCard description={"Joyful"} emoji={"😀"} value={"Joyful"}/>
                    <EmojiCard description={"Melancholic"} emoji={"😞"} value={"Melancholic"}/>
                    <EmojiCard description={"Anxious"} emoji={"😰"} value={"Anxious"}/>
                    <EmojiCard description={"Enthusiastic"} emoji={"😃"} value={"Enthusiastic"}/>
                    <EmojiCard description={"Surprised"} emoji={"😮"} value={"Surprised"}/>
                    <EmojiCard description={"Delicious"} emoji={"🤤"} value={"Delicious"}/>
                    <EmojiCard description={"Arousing"} emoji={"🥵"} value={"Arousing"}/>
                    <EmojiCard description={"Tranquil"} emoji={"😌"} value={"Tranquil"}/>
                    <EmojiCard description={"Disgusted"} emoji={"🤢"} value={"Disgusted"}/>
                    <EmojiCard description={"Intrigued"} emoji={"🤔"} value={"Intrigued"}/>
                    <EmojiCard description={"Empathetic"} emoji={"🥺"} value={"Empathetic"}/>
                    <EmojiCard description={"Confused"} emoji={"😕"} value={"Confused"}/>
                    <EmojiCard description={"Bored"} emoji={"😒"} value={"Bored"}/>
                    <EmojiCard description={"Angry"} emoji={"😡"} value={"Angry"}/>
                    <EmojiCard description={"Content"} emoji={"😊"} value={"Content"}/>
                    <EmojiCard description={"Embarrassed"} emoji={"😳"} value={"Embarrassed"}/>
                    <EmojiCard description={"Lonely"} emoji={"😔"} value={"Lonely"}/>
                    <EmojiCard description={"Nostalgic"} emoji={"🥰"} value={"Nostalgic"}/>
                    <EmojiCard description={"Overwhelmed"} emoji={"😵"} value={"Overwhelmed"}/>

                    <CheckCard
                        title={
                            <div
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: '100px',
                                    fontSize: '3em'
                                }}
                            >
                                🌟
                            </div>
                        }
                        description={
                            <Input
                                ref={inputRef}
                                name={'dream-emotion'}
                                placeholder={'customize'}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setCustomizeEmotion(e.target.value)
                                }}
                            />
                        }
                        value={customizeEmotion}
                        style={{width: 120, height: 130, textAlign: 'center'}}
                    />
                </CheckCard.Group>

            </ProFormItem>
        </ProCard>
    )
}


const TopicStepForm = () => {
    return (
        <ProCard
            style={{
                minWidth: 800,
                marginBlockEnd: 16,
                maxWidth: '100%',
            }}
            title={
                <div>
                    <Typography.Title level={2}>
                        😎Got it.
                    </Typography.Title>
                    <Typography.Title level={3}>
                        What is your dream mainly about?
                    </Typography.Title>
                </div>
            }
        >
            <ProFormItem
                name="checkbox-group"
            >
                <CheckCard.Group rules={[{required: true}]}>
                    <EmojiCard description={"Sad"} emoji={"😭"} value={"Sad"}/>
                    <EmojiCard description={"Fear"} emoji={"😱"} value={"Fear"}/>
                    <EmojiCard description={"Neutral"} emoji={"😐"} value={"Neutral"}/>
                    <EmojiCard description={"Boring"} emoji={"😒"} value={"Boring"}/>
                    <EmojiCard description={"Joyful"} emoji={"😀"} value={"Joyful"}/>
                    <EmojiCard description={"Melancholic"} emoji={"😞"} value={"Melancholic"}/>
                    <EmojiCard description={"Anxious"} emoji={"😰"} value={"Anxious"}/>
                    <EmojiCard description={"Enthusiastic"} emoji={"😃"} value={"Enthusiastic"}/>
                    <EmojiCard description={"Surprised"} emoji={"😮"} value={"Surprised"}/>
                    <EmojiCard description={"Tranquil"} emoji={"😌"} value={"Tranquil"}/>
                    <EmojiCard description={"Disgusted"} emoji={"🤢"} value={"Disgusted"}/>
                    <EmojiCard description={"Intrigued"} emoji={"🤔"} value={"Intrigued"}/>
                    <EmojiCard description={"Empathetic"} emoji={"🥺"} value={"Empathetic"}/>
                    <EmojiCard description={"Confused"} emoji={"😕"} value={"Confused"}/>
                    <EmojiCard description={"Bored"} emoji={"😒"} value={"Bored"}/>
                    <EmojiCard description={"Angry"} emoji={"😡"} value={"Angry"}/>
                    <EmojiCard description={"Content"} emoji={"😊"} value={"Content"}/>
                    <EmojiCard description={"Embarrassed"} emoji={"😳"} value={"Embarrassed"}/>
                    <EmojiCard description={"Lonely"} emoji={"😔"} value={"Lonely"}/>
                    <EmojiCard description={"Nostalgic"} emoji={"🥰"} value={"Nostalgic"}/>
                    <EmojiCard description={"Overwhelmed"} emoji={"😵"} value={"Overwhelmed"}/>

                </CheckCard.Group>

            </ProFormItem>
        </ProCard>
    )
}

const EventStepForm = () => {
    const [customizeSetting, setCustomizeSetting] = useState('')
    return (
        <ProCard
            style={{
                minWidth: 900,
                marginBlockEnd: 16,
                maxWidth: '100%',
            }}
            title={
                <div>
                    <Typography.Title level={2}>
                        😎Got it.
                    </Typography.Title>
                </div>
            }
        >
            <ProFormList
                name="fragments"
                label={
                    <Typography.Title level={3}>
                        So, what can you recall?
                    </Typography.Title>
                }
                creatorButtonProps={{
                    creatorButtonText: "Add a new fragment of your dream"
                }}
                copyIconProps={{
                    tooltipText: 'copy this Fragment',
                }}
                deleteIconProps={{
                    tooltipText: 'delete this Fragment',
                }}
                itemRender={({listDom, action}, {record}) => {
                    return (
                        <ProCard
                            bordered
                            extra={action}
                            title={
                                <Typography.Title level={4}>
                                    Fragment
                                </Typography.Title>
                            }
                            style={{
                                marginBlockEnd: 8,
                            }}
                        >
                            {listDom}
                        </ProCard>
                    );
                }}
            >
                <Typography.Title level={5}>
                    What is the setting of this fragment?
                </Typography.Title>

                <ProFormItem
                    name="setting"
                    style={{width: '100%'}}
                    rules={[{required: true}]}
                >
                    <CheckCard.Group>
                        <EmojiCard description={"Home"} emoji={"🏠"} value={"Home"}/>
                        <EmojiCard description={"School"} emoji={"🏫"} value={"School"}/>
                        <EmojiCard description={"Office"} emoji={"💼"} value={"Work"}/>
                        <EmojiCard description={"Beach"} emoji={"🏖️"} value={"Beach"}/>
                        <EmojiCard description={"Garden"} emoji={"🌷"} value={"Garden"}/>
                        <EmojiCard description={"Space"} emoji={"🌌"} value={"Space"}/>
                        <EmojiCard description={"Mall"} emoji={"🛍"} value={"Mall"}/>
                        <EmojiCard description={"City"} emoji={"🏙️"} value={"City"}/>
                        <EmojiCard description={"Mountain"} emoji={"🏔️"} value={"Mountain"}/>
                        <EmojiCard description={"Desert"} emoji={"🏜️"} value={"Desert"}/>
                        <EmojiCard description={"Unknown"} emoji={"🌫"} value={"Unknown"}/>
                        <CheckCard
                            title={
                                <div
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '100px',
                                        fontSize: '3em'
                                    }}
                                >
                                    🌟
                                </div>
                            }
                            description={
                                <Input
                                    placeholder={'customize'}
                                    onChange={(e) => {
                                        setCustomizeSetting(e.target.value)
                                    }}
                                />
                            }
                            value={customizeSetting}
                            style={{width: 120, height: 130, textAlign: 'center'}}
                        />
                    </CheckCard.Group>
                </ProFormItem>

                <ProFormList
                    name="events"
                    label={
                        <Typography.Title level={5}>
                            Who was involved in this fragment?
                        </Typography.Title>
                    }
                    creatorButtonProps={{
                        creatorButtonText: "Add a new character in this fragment"
                    }}
                    copyIconProps={{
                        tooltipText: 'Copy this character',
                    }}
                    deleteIconProps={{
                        tooltipText: 'Delete this character',
                    }}
                >
                    <ProFormGroup key="group">
                        <ProFormText width={"xs"} name="character" label="Character" placeholder={'Jennie'}
                                     rules={[{required: true}]}/>
                        <ProFormText name="relationship" label="Relationship" placeholder={'My friend'}/>
                        <ProFormText
                            width={"md"}
                            name="description"
                            label="Description"
                            placeholder={'went to beach with me'}
                            rules={[{required: true}]}
                        />
                    </ProFormGroup>
                </ProFormList>
            </ProFormList>
        </ProCard>
    )
}

const DreamForm = ({onFormFinish}) => {
    return (
        <>
            <StepsForm
                onFinish={onFormFinish}
                formProps={{
                    validateMessages: {
                        required: 'These fields are required!',
                    },
                }}
            >
                <StepsForm.StepForm
                    name="emotion-form"
                    title="Fist step"
                >
                    <EmotionStepForm/>
                </StepsForm.StepForm>

                <StepsForm.StepForm name="event-form" title="Event">
                    <EventStepForm/>
                </StepsForm.StepForm>

            </StepsForm>
        </>
    )
}

export default Dream;