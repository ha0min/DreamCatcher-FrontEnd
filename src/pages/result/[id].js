import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useIsPresent} from "framer-motion";
import PageContainerWrapper from "@/components/container";
import {Button, Card, Carousel, Col, Image, Row, Skeleton, Typography} from "antd";
import {DelayPopupDiv, PrivacyScreen} from "@/components/common";
import {LoadingModal} from "@/components/loading-modal";
import ImageGallery from "@/components/image-gallery";
import {useName} from "@/utils/http";
import {ProForm, ProFormText} from "@ant-design/pro-components";

export default function Home() {
    const [isModalShow, setIsModalShow] = useState(false);
    const [isDialogShow, setIsDialogShow] = useState(false);
    const [imgData, setImgData] = useState({img: null, isLoading: true, isError: null});
    const router = useRouter();
    const isPresent = useIsPresent();

    const {id} = router.query;
    // const id = 'test';
    const {data, nameTrigger} = useName(id);

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
                    setImgData({...imgData, isLoading: true});
                    try {
                        const response = await fetch(`http://127.0.0.1:5000/img/${dreamId}`);
                        const data = await response.json();
                        setImgData({img: data, isLoading: false, isError: null});
                    } catch (error) {
                        setImgData({...imgData, isLoading: false, isError: error});
                    }
                }
            };

            fetchData();
        }, 1000);

        // 清除定时器，防止内存泄漏
        return () => clearTimeout(timerId);
    }, []);

    if (imgData.isError) {
        return <div>failed to load</div>
    }

    const onFormFinish = async (formData) => {
        formData.dream_id = id;
        console.log('post data: ', formData);

        await nameTrigger({formData})
            .then((res) => {
                console.log(res);
                router.push('/gallery');
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <PageContainerWrapper>
                <Skeleton loading={isModalShow || imgData.isLoading} active>
                    <DelayPopupDiv delay={0.5}>
                        <Typography.Title level={1}>
                            🎉 Your dream is here!
                        </Typography.Title>
                    </DelayPopupDiv>
                    <DelayPopupDiv delay={1.5}>

                        <ImageGallery data={imgData.img}/>

                        <Button
                            type={'primary'}
                            onClick={() => setIsDialogShow(true)}
                        >
                            Share your dream
                        </Button>
                    </DelayPopupDiv>
                </Skeleton>
            </PageContainerWrapper>

            <LoadingModal isModalShow={isDialogShow}>
                <div
                    style={{
                        width: '700px'
                    }}
                >
                    <Row justify={'end'}>
                        <Col>
                            <Button
                                shape={'circle'}
                                type={'default'}
                                onClick={() => setIsDialogShow(false)}
                            >
                                X
                            </Button>
                        </Col>
                    </Row>
                    <SubmitForm onFinish={onFormFinish}/>
                </div>

            </LoadingModal>
            <PrivacyScreen isPresent={isPresent}/>
        </div>
    )
}

const SubmitForm = ({onFinish}) => {

    return (
        <ProForm
            onFinish={onFinish}
            submitter={{
                searchConfig: {
                    resetText: 'Reset',
                    submitText: 'Submit',
                },
            }}
        >
            <Typography.Title level={3} style={{color: "#f5f5f5"}}>
                🎊 Share your dream to our community
            </Typography.Title>

            <ProFormText
                name={'name'}
                width={'md'}
                placeholder={'Name your dream'}
                label={''}
            />
        </ProForm>
    )
}