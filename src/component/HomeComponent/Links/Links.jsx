import React from 'react'
import { Badge, Card, Container } from 'react-bootstrap'
import Slider from 'react-slick';
import img from "../../../img/gerb.png"
import "./style.css"
export default function Links() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
    };
    const slider = [
        {
            img,
            title: 'Yoshlar ishlari agentligining rasmiy veb-sayti',
            linkTitle: 'www.yoshlar.gov.uz',
            link: 'https://yoshlar.gov.uz',
        },
        {
            img,
            title: "O'zbekiston Respublikasi Prezidentining veb-sayti",
            linkTitle: 'www.president.uz',
            link: 'https://president.uz',
        },
        {
            img,
            title: 'Qonunchilik Palatasi Senatining rasmiy veb-sayti',
            linkTitle: 'www.senat.uz',
            link: 'https://senat.uz',
        },
        {
            img,
            title: 'Yagona elektron hizmatlari rasmiy veb-sayti',
            linkTitle: 'www.gov.uz',
            link: 'https://gov.uz',
        },
        {
            img,
            title: 'O`zbekiston Respublikasi Markaziy Banki',
            linkTitle: 'www.cbu.uz',
            link: 'https://cbu.uz/',
        },
        {
            img,
            title: 'Tashqi ishlar vazirligining rasmiy veb-sayti',
            linkTitle: 'www.mfa.uz',
            link: 'https://mfa.uz',
        },
    ]
    return (
        <div className="links">
            <Container className='py-5'>
                <h1 class="font-title py-3"><center>Foydali havolalar</center></h1>
                <Slider {...settings} className="card-link">
                    {
                        slider.map(item => {
                            return (
                                <Card className="linkcard">
                                    <div className="d-flex justify-content-center cardlink">
                                        <Card.Img variant="top" className='imglink' src={item.img} />
                                    </div>
                                    <Card.Body className='cardlinkbody'>
                                        <a href={item.link}>{item.linkTitle}</a>
                                        <Card.Title className="link-sub mx-0">{item.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Slider>
            </Container>
        </div>
    )
}
