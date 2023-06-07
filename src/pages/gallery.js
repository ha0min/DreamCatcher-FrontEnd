import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useIsPresent} from "framer-motion";
import PageContainerWrapper from "@/components/container";
import {Button, Card, Col, Modal, Row, Skeleton, Typography} from "antd";
import {DelayPopupDiv, PrivacyScreen} from "@/components/common";
import ImageGallery from "@/components/image-gallery";
import {EyeOutlined} from "@ant-design/icons";
import {LoadingModal} from "@/components/loading-modal";

export default function Home() {
    const [isModalShow, setIsModalShow] = useState(false);
    const [isDialogShow, setIsDialogShow] = useState(false);
    const [listData, setListData] = useState({data: null, isLoading: true, isError: null});
    const router = useRouter();
    const isPresent = useIsPresent();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [imgData, setImgData] = useState({img: null, isLoading: true, isError: null});


    const handleClick = async (dreamId, name) => {
        console.log('handleClick')
        setId(dreamId);
        setName(name);
        setIsDialogShow(true);

        console.log('dreamId', dreamId)
        setImgData({...imgData, isLoading: true});
        try {
            const response = await fetch(`http://127.0.0.1:5000/img/${dreamId}`);
            const data = await response.json();
            setImgData({img: data, isLoading: false, isError: null});
        } catch (error) {
            setImgData({...imgData, isLoading: false, isError: error});
        }

    }

    useEffect(() => {
        // 在组件装载后立即显示 Modal，这样可以保证动画效果
        setIsModalShow(true);

        // 设置一个定时器，在 4 秒后关闭 Modal
        const timerId = setTimeout(() => {
            setIsModalShow(false);
            const fetchData = async () => {
                console.log('router.isReady', router.isReady)
                // const dreamId = router.query.id;
                const dreamId = 'test';
                console.log('dreamId', dreamId)
                if (router.isReady) {
                    setListData({...listData, isLoading: true});
                    try {
                        const response = await fetch(`http://127.0.0.1:5000/finished`);
                        const json = await response.json();
                        const data = json.finished;
                        setListData({data: data, isLoading: false, isError: null});
                    } catch (error) {
                        setListData({...listData, isLoading: false, isError: error});
                    }
                }
            };

            fetchData();
        }, 2000);

        // 清除定时器，防止内存泄漏
        return () => clearTimeout(timerId);
    }, []);

    if (listData.isError) {
        return <div>failed to load</div>
    }

    return (
        <div>
            <PageContainerWrapper>
                <Skeleton loading={isModalShow || listData.isLoading} active>
                    <DelayPopupDiv delay={0.5}>
                        <Typography.Title level={1}>
                            🙌 Welcome to Dream Gallery!
                        </Typography.Title>
                    </DelayPopupDiv>
                    <DelayPopupDiv delay={1.2}>
                        <DreamGallery data={listData.data} onClick={handleClick}/>
                    </DelayPopupDiv>
                </Skeleton>
            </PageContainerWrapper>

            <Modal
                open={isDialogShow}
                footer={null}
                closable={false}
                width={900}
            >
                <Skeleton
                    loading={imgData.isLoading}
                >
                    <Row justify={'end'}>
                        <Col>
                            <Button
                                shape={'circle'}
                                type={'default'}
                                onClick={() => {
                                    setIsDialogShow(false);
                                    setId('');
                                }}
                            >
                                X
                            </Button>
                        </Col>
                    </Row>
                    <Typography.Title level={3}>{name}</Typography.Title>
                    <ImageGallery data={imgData.img}/>
                </Skeleton>
            </Modal>

            <LoadingModal isModalShow={isModalShow}>
                <Typography.Title level={1} style={{color:'#f5f5f5'}} >🥰 Check out other{"'"}s dreams!</Typography.Title>
            </LoadingModal>

            <PrivacyScreen isPresent={isPresent}/>
        </div>
    )
}

const DreamGallery = ({data, onClick}) => {
    console.log(data)
    return (
        <div>
            <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
                {
                    data.map((item, index) => {
                        return (
                            <Col
                                key={index}
                                span={8}>
                                <DreamGalleryItem
                                    name={item.name}
                                    id={item.dream_id}
                                    summary={item.summary}
                                    onClick={onClick}
                                />
                            </Col>

                        )
                    })
                }

            </Row>

        </div>
    )

}

const DreamGalleryItem = ({name, summary, id, onClick}) => {
    return (
        <Card
            title={name}
            hoverable
            actions={
                [<Button
                    key={'view'}
                    onClick={() => onClick(id, name)}
                    icon={<EyeOutlined/>}
                    type={"text"}
                />]
            }
        >
            <Card.Meta description={summary}/>
        </Card>
    )
}