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
    ProFormDateRangePicker, CheckCard, ProFormItem, ProFormGroup, ProFormList
} from "@ant-design/pro-components";
import {Typography} from "antd";

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

const Form = () => {
    return (
        <>
            <StepsForm
                onFinish={async (values) => {
                    console.log(values);
                    await waitTime(1000);
                    message.success('Submit finished!');
                }}
                formProps={{
                    validateMessages: {
                        required: 'These fields are required!',
                    },
                }}
            >
                <StepsForm.StepForm
                    name="base"
                    title="Fist step"
                >
                    <ProCard
                        style={{
                            minWidth: 800,
                            marginBlockEnd: 16,
                            maxWidth: '100%',
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
                </StepsForm.StepForm>

                <StepsForm.StepForm
                    name="topic"
                    title="Topic"
                >
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
                </StepsForm.StepForm>

                <StepsForm.StepForm name="checkbox" title="第二步骤">
                    <ProCard
                        style={{
                            minWidth: 800,
                            marginBlockEnd: 16,
                            maxWidth: '100%',
                        }}
                        // title={
                        //
                        // }
                        // tooltip={"Choose the emotion that best fit your dream."}
                        // headerBordered
                    >
                        <ProFormList
                            name="events"
                            label={
                                <Typography.Title level={2}>
                                    ✍️What happened in your dream?
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
                                        title={record?.name}
                                        style={{
                                            marginBlockEnd: 8,
                                        }}
                                    >
                                        {listDom}
                                    </ProCard>
                                );
                            }}
                        >
                            <ProFormGroup>
                                <ProFormText name="event" label="Event" placeholder={"What happened?"}/>
                                <ProFormText name="setting" label="Settings" placeholder={"Where? When? Why?"}/>
                            </ProFormGroup>
                            <ProFormList
                                name="characters"
                                label={
                                    <Typography.Title level={3}>
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
                                    <ProFormText name="character" label="Character"/>
                                    <ProFormText name="relationship" label="relationship"/>
                                </ProFormGroup>
                            </ProFormList>
                        </ProFormList>
                    </ProCard>
                </StepsForm.StepForm>
                <StepsForm.StepForm name="time" title="第三步骤">
                    <ProCard
                        style={{
                            marginBlockEnd: 16,
                            minWidth: 800,
                            maxWidth: '100%',
                        }}
                    >
                        <ProFormCheckbox.Group
                            name="checkbox"
                            label="部署单元"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            options={['部署单元1', '部署单元2', '部署单元3']}
                        />
                        <ProFormSelect
                            label="部署分组策略"
                            name="remark"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            width="md"
                            initialValue="1"
                            options={[
                                {
                                    value: '1',
                                    label: '策略一',
                                },
                                {value: '2', label: '策略二'},
                            ]}
                        />
                        <ProFormSelect
                            label="Pod 调度策略"
                            name="remark2"
                            width="md"
                            initialValue="2"
                            options={[
                                {
                                    value: '1',
                                    label: '策略一',
                                },
                                {value: '2', label: '策略二'},
                            ]}
                        />
                    </ProCard>
                </StepsForm.StepForm>
            </StepsForm>
        </>
    )
}

export default Dream;