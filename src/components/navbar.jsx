import React from 'react'
import '../styles/navbar.css'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import '../components/i18next';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <img src="public/assets/icons/logo.png" alt="" />
            </div>
            <div className='navbar___right'>
                <div className='navbar__buttons'>
                    <button>{t('services')}</button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar