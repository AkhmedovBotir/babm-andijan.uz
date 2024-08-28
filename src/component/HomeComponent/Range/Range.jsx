import React from 'react'
import "./style.css"
import { Card, Container } from 'react-bootstrap'
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import png from "../../../img/png.png"
export default function Range() {
    const about = [
        {
            icon: <SchoolIcon />,
            title: "Madaniyat va san’at yo‘nalishida 11 turdagi",
            num: 260784
        },
        {
            icon: <GroupsIcon />,
            title: "Madaniyat va san’at yo‘nalishida 11 turdagi",
            num: 9742
        },
        {
            icon: <LeaderboardIcon />,
            title: "Madaniyat va san’at yo‘nalishida 11 turdagi",
            num: 4
        },
        {
            icon: <LibraryBooksIcon />,
            title: "Madaniyat va san’at yo‘nalishida 11 turdagi",
            num: 9033
        }
    ]
    return (
        <Container>
            <div className="row range">
                <div className="col-8 range-left">
                    {
                        about.map((item, index) => (
                            <Card key={index} className="range-card p-2 px-3">
                                <div className="iconrange">
                                    {item.icon}
                                </div>
                                <div className="range-card-right p-3">
                                    <span className='font-title cl'>{item.num}</span>
                                    <span className='cc'>{item.title}</span>
                                </div>
                            </Card>
                        ))
                    }
                </div>
                <div className="col-4 range-right">
                    <img src={png} />
                </div>
            </div>
        </Container>
    )
}
