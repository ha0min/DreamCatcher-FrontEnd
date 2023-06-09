import {Button, Card, Col, Image, Row, Skeleton, Spin} from "antd";
import {ReloadOutlined} from "@ant-design/icons";
import {useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:5000';


const ImageGallery = ({data, showButtons, dreamId}) => {
    console.log(data)
    const [images, setImages] = useState(data.map(img => ({...img, isLoading: false})));

    const handleButtonClick = async (index) => {
        console.log('ImageGallery handleButtonClick: dreamId, index', dreamId, index)
        const newImages = [...images];
        newImages[index].isLoading = true;
        setImages(newImages);
        console.log('setLoading.')
        const response = await fetch(`${baseUrl}/recreate/${dreamId}/${index}`);
        const responseData = await response.json();

        console.log('responseData', responseData)
        const newUrl = responseData.new_url;
        newImages[index] = {...newImages[index], img: newUrl, isLoading: false};
        setImages(newImages);
        console.log('setNewUrl')
    }

    return (
        <div>
            <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
                {
                    images.map((item, index) => {
                        return (
                            <Col
                                key={index}
                                span={8}>
                                <GalleryItem
                                    description={item.text}
                                    url={item.img}
                                    showButton={showButtons}
                                    isLoading={item.isLoading}
                                    onButtonClick={() => handleButtonClick(index)}
                                />
                            </Col>

                        )
                    })
                }

            </Row>

        </div>
    )

}

const GalleryItem = ({url, description, showButton, onButtonClick, isLoading}) => {
    return (
        <Card
            bordered={true}
            cover={
               <Spin
                   tip={'Generating new image...'}
                   spinning={isLoading}
                   >
                    <Image
                        src={url}
                    />
               </Spin>
            }
            hoverable
            actions={showButton && [
                <Button key={'refresh'} type={'text'} icon={<ReloadOutlined/>} onClick={onButtonClick}/>
            ]}
        >
            <Card.Meta description={description}/>
        </Card>
    )
}

export default ImageGallery;