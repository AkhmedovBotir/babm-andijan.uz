import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import "./style.css"
import img from "../../../img/book.png"
export default function HomeCard() {
    const card = [
        {
            title: 'Texnika konstruktorlik va modellashtirish',
            description: '17 turdagi to‘garak mavjud',
            image: img
        },
        {
            title: "Madaniyat va san’at",
            description: "Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud",
            image: img
        },
        {
            title: "Xorijiy tillar",
            description: "Xorijiy tillar yo‘nalishida 2 turdagi (ingliz va boshqa) to‘garak mavjud",
            image: img
        },
        {
            title: "Madaniyat va san’at",
            description: "Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud",
            image: img
        },
        {
            title: "Madaniyat va san’at",
            description: "Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud",
            image: img
        },
        {
            title: "Hunarmandchilik va qo'l mehnati",
            description: "Ushbu yo‘nalishda 14 turdagi to‘garak mavjud",
            image: img
        },
    ]
    return (
        <div className="home-card pt-3 pb-5">
            <Container className='py-5'>
                <h1 className='font-title'>To’garaklar</h1>
                <div className="py-3"></div>

                <Row>
                    <div className="col-4 h-100">
                        <Card className='card-home-one' style={{ width: '100%' }}>
                            <Card.Body>
                                <div className="card-titles row justify-content-center align-items-center">
                                    <div className="col-3">
                                        <img src={img} className='w-100' />
                                    </div>
                                    <div className="col-8">
                                        <Card.Title className='title-card m-0'>Oliy ta’lim
                                            muassasalari va
                                            maktabga tayyorlov</Card.Title>
                                    </div>
                                </div>
                                <Card.Text className='card-sub p-4'>
                                    Oliy ta’lim muassasalari
                                    va maktabga tayyorlov
                                    yo‘nalishida 8 turdagi <br />
                                    ✔ Ona tili va adabiyoti, <br />
                                    ✔ Biologiya va Kimyo <br />
                                    ✔ Fizika <br />
                                    ✔ Matematika <br />
                                    ✔ Tarix <br />
                                    ✔ Mental arifmetika <br />
                                    ✔ Logika o’yinli <br />
                                    ✔ Husnixat va o’qish <br />
                                    ✔ Tasviriy san’at <br />
                                    ✔ Teatr va raqs
                                    kabi  to‘garaklar
                                    mavjud
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <Row className='row-cards d-flex justify-content-evenly h-100 g-3'>
                            {
                                card.map(item => (
                                    <div className="col-4 h-card" key={item.title}>
                                        <Card className='card-home-two h-100' style={{ width: '100%' }}>
                                            <Card.Body className='d-flex flex-column justify-content-around h-100'>
                                                <div className="card-titles row justify-content-center align-items-center">
                                                    <div className="col-4">
                                                        <img src={item.image} className='w-100' />
                                                    </div>
                                                    <div className="col-7">
                                                        <Card.Title className='title-cards m-0'>
                                                            {item.title}
                                                        </Card.Title>
                                                    </div>
                                                </div>
                                                <Card.Text className='card-subs px-4'>
                                                    {item.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                            }
                            {/* <div className="col-5">
                                <Card className='card-home-one' style={{ width: '100%' }}>
                                    <Card.Body>
                                        <div className="card-titles row justify-content-center align-items-center">
                                            <div className="col-3">
                                                <img src={img} className='w-100' />
                                            </div>
                                            <div className="col-8">
                                                <Card.Title className='title-card m-0'>
                                                    Texnika
                                                    konstruktorlik
                                                    va modellashtirish
                                                </Card.Title>
                                            </div>
                                        </div>
                                        <Card.Text className='card-sub p-4'>
                                        17 turdagi to‘garak 
                                        mavjud
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div> */}
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
