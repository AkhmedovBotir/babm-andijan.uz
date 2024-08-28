import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Badge, Card, Container } from "react-bootstrap";
import img from "../../../img/togarak.png"
import "./style.css"
function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
  };

  const slider = [
    {
      img: img,
      title: 'Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!',
      badge: 'Matbuot hizmati',
      time: '17:34 | 16-Sentabr, 2022',
    },
    {
      img: img,
      title: 'Matbuot hizmati uchun yangi maqsadlar',
      badge: 'Matbuot hizmati',
      time: '12:14 | 15-Sentabr, 2022',
    },
    {
      img: img,
      title: 'Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!',
      badge: 'Matbuot hizmati',
      time: '17:34 | 16-Sentabr, 2022',
    },
    {
      img: img,
      title: 'Matbuot hizmati uchun yangi maqsadlar',
      badge: 'Matbuot hizmati',
      time: '12:14 | 15-Sentabr, 2022',
    },
    {
      img: img,
      title: 'Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!',
      badge: 'Matbuot hizmati',
      time: '17:34 | 16-Sentabr, 2022',
    },
    {
      img: img,
      title: 'Matbuot hizmati uchun yangi maqsadlar',
      badge: 'Matbuot hizmati',
      time: '12:14 | 15-Sentabr, 2022',
    },
  ]
  return (
    <div className="news-bg py-5 pb-3">
      <Container>
        <h1 class="font-title">Yangiliklar</h1>
        <div className="slider-container m-5">
          <Slider {...settings} className="card-new">
            {
              slider.map(item => {
                return (
                  <Card className="card-card">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Badge bg="dark" className="mb-2">{item.badge}</Badge>
                      <Card.Title className="cardtitle mx-0">{item.title}</Card.Title>
                      <Card.Subtitle className="cardsub py-3 px-0 mx-0">{item.time}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default AutoPlay;
