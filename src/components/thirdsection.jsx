import React from 'react'
import '../styles/thirdsection.css'
import { useTranslation } from 'react-i18next';
import '../components/i18next';

const Thirdsection = () => {
    const { t } = useTranslation();
    return (
        <div id='#about' className='thirdsection'>
            <div className="thirdtheme">
                <div className="fourTitlebox">
                    <p className="fourTitle">{t('about')}</p>
                </div>
            </div>
            <div className="fourLargebox">
                <div className="fourTextbox">
                    <p className="foutOnetext">Качественно и быстро</p>
                    <p className="fourTwotext">
                        В клининговой службе мы ставим удовлетворение наших клиентов
                        превыше всего. Именно поэтому мы стремимся предоставлять свои
                        услуги с улыбкой и доброжелательным отношением. Мы понимаем,
                        что каждый клиент уникален, и уделяем время тому, чтобы
                        выслушать ваши потребности и предпочтения. Наша цель —
                        предоставлять услуги личной уборки, которые каждый раз
                        превосходят ваши ожидания.
                    </p>
                    <div className="sdvigbutton">
                        <a href="#contact" className="btn fourButton">Свяжитесь с нами</a>
                    </div>
                </div>
                <div className="fourImgbox">
                    <img className="fourImg" src="" alt="Домохозяйка" />
                </div>
            </div>
        </div>
    )
}

export default Thirdsection
