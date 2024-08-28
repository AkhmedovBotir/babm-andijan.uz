import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./style.css"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function FooterMenu() {
  return (
    <div className='footer mt-5 py-3 pt-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <div className='col-4'>
            <h4 className="footer-title py-3">BIZ HAQIMIZDA</h4>
            <p className='footer-sub'>
              O‘zbekiston Respublikasi Xalq ta’limi
              vazirligi huzuridagi <b>“Barkamol avlod”</b>
              respublika bolalar maktabi
            </p>
          </div>
          <div className="col-2">
            <h4 className="footer-title py-3">ALOQA</h4>
            <div className="ul">
              <div className="li"><EmailIcon /> <a href="mailto:respublika@exat.uz">respublika@exat.uz</a></div>
              <div className="li"><CallIcon /> <a href="tel:+998712171872">+998 71 217 18 72</a></div>
              <div className="li"><CallIcon /> <a href="tel:+998712171872">+998 71 217 18 71</a></div>
            </div>
          </div>
        </Row>
        <center className="footer-copy pt-3">© BABM |Barkamol avlod bolalar maktabi. Barcha huquqlar himoyalangan. Sayt ishlab chiqish: </center>
      </Container>
    </div>
  )
}
