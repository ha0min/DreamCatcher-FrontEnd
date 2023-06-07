import {Card, Col, Image, Row} from "antd";

const ImageGallery = ({data}) => {
    console.log(data)
    return (
        <div>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
                {
                    data.map((item, index) => {
                        return (
                            <Col
                                key={index}
                                span={8}>
                                <GalleryItem
                                    description={item.text}
                                    url={item.img}
                                />
                            </Col>

                        )
                    })
                }

            </Row>

        </div>
    )

}

const GalleryItem = ({url, description}) => {
    return (
        <Card
            bordered={true}
            cover={
                <Image
                    src={url}
                />
            }
            hoverable>
            <Card.Meta description={description}/>
        </Card>
    )
}

export default ImageGallery;