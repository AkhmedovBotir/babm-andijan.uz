import React from 'react'
import "./style.css"
import img from "../../../img/img.png"
export default function BodyHome() {
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: "center", width: "100%", height: "80vh", backgroundAttachment: "fixed" }} />
    )
}
