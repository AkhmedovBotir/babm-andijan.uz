import React from 'react'
import "./style.css"
import { Row } from 'react-bootstrap'
import { AboutSidebar } from '../index'
export default function AboutHeader() {
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
            <h4 className="aboutheader-title text-center">“BARKAMOL AVLOD” BILAN YURT KELAJAGI SARI</h4>
            <p className='aboutheader-sub'>
              “Barkamol avlod” bolalar maktablari ish faoliyati davomida ming-minglab o‘quvchi yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida
              ko‘mak berib kelmoqda.
              Dastavval 2011-yilda “Barkamol avlod” markazlari
              O‘zbekiston Respublikasi vazirlar mahkamasining 2011-yil 28-fevraldagi Maktabdan tashqari ta’lim tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risidagi 50-sonli
              Qarori hamda 2011-yil 11-maydagi “Barkamol avlod” markazlari to‘g‘risidaginizom, 130-son qarorga ilova asosida tashkil etilgan. “Barkamol avlod” markazlari 3 ta yo‘nalishda (Badiiy ijodiyot, texnik ijodiyot hamdao‘lkashunoslik va ekalogiya) o‘z faoliyatni olib boradi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
