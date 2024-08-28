import React from 'react'
import { Badge, Container } from 'react-bootstrap'
import img from "../../../img/odam.png"
import { Link } from 'react-router-dom'
import "./style.css"
export default function LifeComp() {
    return (
        <div className='py-3 my-5'>
            <div className="lifecomp">
                <Container>
                    <div className="life-comp py-3">
                        <div className="left-comp">
                            <img src={img} />
                        </div>
                        <div className="right-comp">
                            <h1 className="comp-title font-title text-white">BARKAMOL AVLOD bolalar maktablari</h1>
                            <p className="comp-sub text-white">
                                Ushbu bo‘limda “Barkamol avlod” bolalar maktablarining
                                hududiy bo‘limlarida amalga oshirilayotgan ishlar
                                bilan tanishasiz
                            </p>
                            <Badge variant="primary">
                                <Link to={"/press"} className='text-white p-3 fs-6 text-decoration-none'>Batafsil</Link>
                            </Badge>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
