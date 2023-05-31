import {useRouter} from "next/router";
import PageContainerWrapper from "@/components/container";
import {
    ProCard,
    ProFormText,
    StepsForm,
    ProFrom,
    ProFormCheckbox,
    ProFormSelect,
    ProFormDigit,
    ProFormDateRangePicker, CheckCard, ProFormItem, ProFormGroup, ProFormList, ProFormTextArea
} from "@ant-design/pro-components";
import {Input, Typography} from "antd";
import {useRef, useState} from "react";

const EmojiCard = ({emoji, description, value}) => {
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

const Dream = () => {
    const router = useRouter();
    const {id} = router.query;
    console.log('dream id: ', id);

    return (
        <PageContainerWrapper title={"Dream"}>
            <div>
                <Form/>
            </div>
        </PageContainerWrapper>
    )
}

const StepsRender = (steps, dom) => {
    if (steps === 0) {
        return <Typography.Title level={1}>h1</Typography.Title>
    } else {
        return <div>test</div>
    }
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
                required={true}
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
                name="events"
                label={
                    <Typography.Title level={3}>
                        So, what happened in your dream?
                    </Typography.Title>
                }
                creatorButtonProps={{
                    creatorButtonText: "Add a new event in your dream"
                }}
                copyIconProps={{
                    tooltipText: 'copy this event',
                }}
                deleteIconProps={{
                    tooltipText: 'delete this event',
                }}
                itemRender={({listDom, action}, {record}) => {
                    return (
                        <ProCard
                            bordered
                            extra={action}
                            // title={'Event ' + record?.index}
                            style={{
                                marginBlockEnd: 8,
                            }}
                        >
                            {listDom}
                        </ProCard>
                    );
                }}
            >
                <Typography.Title level={4}>
                    The topic of the event
                </Typography.Title>

                <ProFormItem
                    name="topic"
                    style={{width: '100%'}}
                >
                    <CheckCard.Group>
                        <EmojiCard description={"Home"} emoji={"🏠"} value={"Home"}/>
                        <EmojiCard description={"School"} emoji={"🏫"} value={"School"}/>
                        <EmojiCard description={"Office"} emoji={"💼"} value={"Work"}/>
                        <EmojiCard description={"Beach"} emoji={"🏖️"} value={"Beach"}/>
                        <EmojiCard description={"Forest"} emoji={"🌳"} value={"Forest"}/>
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
                    name="characters"
                    label={
                        <Typography.Title level={4}>
                            Who was involved in the event?
                        </Typography.Title>
                    }
                    creatorButtonProps={{
                        creatorButtonText: "Add a new character in the event"
                    }}
                    copyIconProps={{
                        tooltipText: 'copy this character',
                    }}
                    deleteIconProps={{
                        tooltipText: 'delete this character',
                    }}
                >
                    <ProFormGroup key="group">
                        <ProFormText name="character" label="Character" placeholder={'J'}/>
                        <ProFormText name="relationship" label="relationship"/>
                    </ProFormGroup>
                </ProFormList>
            </ProFormList>
        </ProCard>
    )
}

const Form = () => {
    const onFinish = async (values) => {
        console.log(values);

    }
    return (
        <>
            <StepsForm
                onFinish={async (values) => {
                    console.log(values);
                    // await waitTime(1000);
                    // message.success('Submit finished!');
                }}
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