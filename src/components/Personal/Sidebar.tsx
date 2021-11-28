import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Sidebar:FC = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-body">
                <div className="sidebar-head">
                    <Link to="/" className="sidebar-logo">Клан Престо</Link>
                </div>

                <div className="sidebar-game">
                    <div className="sidebar-title">Игры</div>
                    <div className="sidebar-game-list">
                        <div className="sidebar-game-list__item">Мнемокарточки</div>
                        <div className="sidebar-game-list__item">Шарики</div>
                        <div className="sidebar-game-list__item">Беги! Беги!</div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <div className="sidebar-menu__link">
                        <Link to="">Блюда за баллы</Link>
                    </div>
                    <div className="sidebar-menu__link">
                        <Link to="">Призы розыгрыша</Link>
                    </div>
                    <div className="sidebar-menu__link">
                        <Link to="">Рейтинг</Link>
                    </div>
                </div>
                <div className="sidebar-banner">
                    <div className="sidebar-banner__img"></div>
                </div>
            </div>


            <div className="sidebar-footer">
                <div className="sidebar-menu">
                    <div className="sidebar-menu__link">
                        <Link to="">Политика конфиденциальности</Link>
                    </div>
                    <div className="sidebar-menu__link">
                        <Link to="">Соглашение</Link>
                    </div>
                </div>
                <div className="sidebar-note">
                    С полными правилами акции вы можете ознакомиться в положении акции по ссылке.
                </div>
            </div>
        </div>
    );
};

export default Sidebar;