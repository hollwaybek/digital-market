import React from 'react'
import { useTranslation } from 'react-i18next';
import '../styles/secondsection.css'
import '../components/i18next';

const Secondsection = () => {
    const { t } = useTranslation();

    return (
        <div className='second-section'>
            <div className="largeBox">
                <div className="threeBigBox">
                    <img className="threeBigBoxImg" src="public/assets/img/cleanman.png" alt="Cleaning Man" />
                </div>
                <div className="threeBigBoxTwo">
                    <div className="threeTitleBox">
                        <p className="threeTitle">
                            {t('secondsection-h1')}
                        </p>
                    </div>
                    <p className="threeText">
                        {t('secondsection-p')}
                    </p>
                    <p className="threeTextTwo">
                        {t('secondsection-p2')}
                    </p>
                    <div className="threeButtonBox">
                        <a href="#contact" className="btn threeButton">{t('contact')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondsection
