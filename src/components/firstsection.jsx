import React from 'react';
import '../styles/firstsection.css';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FirstSection = () => {
    const { t } = useTranslation();
    const slideStyle = {
        width: '255px',
        height: '287px',
        marginRight: '30px'
      };

    return (
        <div id='services' className='first__section'>
            <div className="container">
                <div className="mainOne-box">
                    <h1 id='services' className="mainOne-link">{t('services')}</h1>
                    <h3 className="mainOne-text">{t('firstSec-service')}</h3>
                    <p className='mainOne-title'>{t('firstSec-service2')}</p>
                </div>
            </div>
            <div className='swiper_cards'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide id='SwiperSlide' style={slideStyle}>
                        <div className="incard">
                            <img className='card_img' src="public/assets/img/first.png" alt="" />
                            <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                        </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/second.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                    </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/third.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                    </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/fourth.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                    </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/fifth.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>
                    </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/sixth.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                    </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/seventh.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                    </div></SwiperSlide>
                    <SwiperSlide id='SwiperSlide'><div className="incard">
                        <img className='card_img' src="public/assets/img/eight.png" alt="" />
                        <div className="card-text"><p className="card-subtitle"> <b className="card-title">{t('firstcard-title')}</b>{t('firstcard-subtitle')}</p></div>

                    </div></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default FirstSection;
