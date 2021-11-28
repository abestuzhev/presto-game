import React, {FC} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ImgGiftIphone from "./../img/img-gift-iphone13.png";
import ImgGiftWatch from "./../img/img-gift-watch.png";
import ImgGiftHonor from "./../img/img-gift-honor.png";
import ImgGiftAirpods from "./../img/img-gift-airpods.png";
import ImgPerson from "./../img/banner-person.png";

import {Link} from "react-router-dom";

const Home:FC = () => {
    const gifts = [
        {
            id: 1,
            title: "Смартфон Apple iPhone 13",
            property: "128 Гб",
            img: ImgGiftIphone,
            class: "gift-card gift-card--top"
        },
        {
            id: 2,
            title: "Смарт-часы Apple Watch SE",
            property: "40 мм",
            img: ImgGiftWatch,
            class: "gift-card gift-card--bottom"
        },
        {
            id: 3,
            title: "Смартфон Honor 30S",
            property: "128 Гб",
            img: ImgGiftHonor,
            class: "gift-card gift-card--top"
        },
        {
            id: 4,
            title: "Наушники Apple AirPods Pro ",
            property: "2",
            img: ImgGiftAirpods,
            class: "gift-card gift-card--bottom"
        }

    ]
    return (
        <>
            <Header/>
            <div className="home">
                <div className="home-banner">
                    <div className="home-banner-layout">
                        <div className="home-banner-body">
                            <div className="home-banner__title">Розыгрыш Клан Престо</div>
                        </div>
                        <div className="home-banner-img">
                            <img src={ImgPerson} alt=""/>
                        </div>
                    </div>

                </div>
                <div className="layout">
                    <div className="home-block">
                        <div className="home-gift">
                            <div className="c-title">
                                <h2>Призы</h2>
                            </div>
                            <div className="gift-list">
                                {
                                    gifts.map(product => {
                                        return (
                                            <div className="gift-list__item">
                                                <div className={product.class}>
                                                    <div className="gift-card__img">
                                                        <img src={product.img} alt=""/>
                                                    </div>
                                                    <div className="gift-card__body">
                                                        <div className="gift-card__title">{product.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="home-block">
                        <div className="home-rules">
                            <div className="c-title">
                                <h2>Как принять участие?</h2>
                            </div>
                            <div className="rules-list">
                                <div className="rules-list__item">
                                    <div className="rules-card">
                                        <div className="rules-card__num">1</div>
                                        <div className="rules-card__body">
                                            <div className="rules-card__text c-text-medium">
                                                Сделайте заказ в нашей службе доставки на сумму от 1500 ₽
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rules-list__item">
                                    <div className="rules-card">
                                        <div className="rules-card__num">2</div>
                                        <div className="rules-card__body">
                                            <div className="rules-card__text">
                                                Зарегистрируйте номер купона в личном кабинете
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rules-list__item">
                                    <div className="rules-card">
                                        <div className="rules-card__num">3</div>
                                        <div className="rules-card__body">
                                            <div className="rules-card__text">
                                                Играйте в игры Клана и получайте блюда за баллы
                                                и собирайте еще купоны!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rules-note">
                                <div className="rules-note__text">
                                    Обязательное условие! Не пропустите подведение итогов, которое будет проходить 29 февраля 2022 года в онлан-режиме в группе вКонтакте.  С более подробными условиями акции можно ознакомиться в нашем «Положении акции»
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-block">
                        <div className="home-ready">
                            <div className="ready">
                                <div className="ready-img">

                                </div>
                                <div className="ready-body">
                                    <div className="ready-title">
                                        <div className="c-title">
                                            <h2>Начнем?</h2>
                                        </div>
                                    </div>
                                    <div className="ready-text c-text-medium">
                                        Авторизуйтесь, чтобы начать играть.
                                        На старте дарим 300 бонусов.
                                    </div>
                                    <div className="c-btn-layout">
                                        <Link to="/person" className="c-btn medium">Начать игру</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;