import React from 'react'
import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import '../components/i18next';
import i18n from '../components/i18next';

const Navbar = () => {
    const { t } = useTranslation();
    const changeLanguage = (uz) => {
        i18n.changeLanguage(uz)
    }


    return (
        <div className="header">
            <div className='navbar'>
                <div className='navbar__left'>
                    <img src="public/assets/icons/logo.png" alt="" />
                </div>
                <div className='navbar___right'>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#services">{t('services')}</a></li>
                            <li><a href="#about-us">{t('about')}</a></li>
                            <li><a href="#location">{t('location')}</a></li>
                            <li><a href="#contact">{t('contact')}</a></li>
                        </ul>
                    </nav>
                    <div className="language">
                        <button onClick={() => changeLanguage('uz')}>
                            <img className='language_uzb' src="public/assets/icons/uzb.jpg" alt="uzb" />
                        </button>
                        <button onClick={() => changeLanguage('ru')}>
                            <img className="language_rus" src="public/assets/icons/rus.png" alt="rus" />
                        </button>

                    </div>
                </div>

            </div>
            <section className="header-section">
                <div className="section-left">
                    <div className="header_texts">
                        <h1 className="title">{t('header_h1')}</h1>
                        <h1 className="text">{t('header_h3')}</h1>
                        <a href="#contact" className="postext">{t('contact_withus')}</a>
                    </div>
                    <div className="pos-btn">
                        <h1 className="postext">33 014 40 40</h1>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Navbar



