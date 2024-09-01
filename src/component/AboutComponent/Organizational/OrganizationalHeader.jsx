import React from 'react'
import { AboutSidebar } from '../index'
import img1 from "../../../img/tuzilma/tuzilma1.jpg"
import img2 from "../../../img/tuzilma/tuzilma2.jpg"
import img3 from "../../../img/tuzilma/tuzilma3.jpg"
export default function OrganizationalHeader() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <AboutSidebar />
                </div>
                <div className="col-8">
                    <div className="aboutheader">
                    </div>
                    <div className="aboutme pt-3">
                        <h4 className="aboutheader-title text-center">“BARKAMOL AVLOD” BOLALAR MAKTABLARINING TASHKILIY TUZULMASI</h4>
                        <p className='aboutheader-sub'>
                            “Barkamol avlod” bolalar maktablari ish faoliyati davomida ming-minglab o‘quvchi yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida
                            ko‘mak berib kelmoqda.
                            Dastavval 2011-yilda “Barkamol avlod” markazlari
                            O‘zbekiston Respublikasi vazirlar mahkamasining 2011-yil 28-fevraldagi Maktabdan tashqari ta’lim tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risidagi 50-sonli
                            Qarori hamda 2011-yil 11-maydagi “Barkamol avlod” markazlari to‘g‘risidaginizom, 130-son qarorga ilova asosida tashkil etilgan. “Barkamol avlod” markazlari 3 ta yo‘nalishda (Badiiy ijodiyot, texnik ijodiyot hamdao‘lkashunoslik va ekalogiya) o‘z faoliyatni olib boradi
                        </p>
                    </div>
                    <div className="org-img">
                        {
                            [img1, img2, img3].map((img) => (
                                <img src={img} alt="tuzilma" className='w-100' />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
