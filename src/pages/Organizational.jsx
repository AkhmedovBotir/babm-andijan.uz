import React from 'react'
import { FooterMenu, NavbarMenu } from "../component"
import { OrganizationalHeader } from '../component/AboutComponent/'

export default function Organizational() {
    return (
        <div>
            <NavbarMenu />
            <OrganizationalHeader />
            <FooterMenu />
        </div>
    )
}
