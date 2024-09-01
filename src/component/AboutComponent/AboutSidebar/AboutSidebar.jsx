import React from 'react'
import "./style.css"
import logo1 from "../../../img/info.png"
import logo2 from "../../../img/target.png"
import logo3 from "../../../img/diagram.png"
import logo4 from "../../../img/leader.png"
import { Link, NavLink } from 'react-router-dom'
import { Nav, } from 'react-bootstrap'
export default function AboutSidebar() {
    const sidebar = [
        {
            id: 1,
            logo: logo1,
            title: 'BABMA haqida',
            link: "/about"
        },
        {
            id: 2,
            logo: logo2,
            title: 'Maqsad va vazifalar',
            link: "/about/goals"
        },
        {
            id: 3,
            logo: logo3,
            title: 'Tashkiliy tuzilma',
            link: "/about/organizational"
        },
        {
            id: 4,
            logo: logo4,
            title: 'Xodimlar',
            link: "/about/staff"
        },
    ]
    return (
        <div className='about-sidebar'>
            <div className="p-3">
                <nav id='sidebar' className="py-5 my-5 d-flex flex-column">
                    {
                        sidebar.map(item => (
                            <NavLink to={item.link} key={item.id} className={`d-flex align-items-center my-2 p-3 sidebar-a ${({ isActive }) => isActive ? "actives" : ""}`}>
                                <img src={item.logo} alt={item.title} className='sidebar-menu-img' />
                                <h5 className='px-4 m-0'>{item.title}</h5>
                            </NavLink>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}
