import React, {FC} from 'react';
import HeaderTop from "./HeaderTop";

const Content:FC = () => {
    return (
        <>
        <div className="personal-body">
            <HeaderTop />
            <div className="personal-content">
                <div className="c-title">
                    <h2>Личный кабинет</h2>
                </div>
                <div className="personal-info">
                    <div className="personal-title">Информация об аккаунте</div>
                    <div className="personal-block"></div>
                </div>
                <div className="personal-game">
                    <div className="personal-title">Игры</div>
                    <div className="personal-block"></div>
                </div>
                <div className="personal-products">
                    <div className="personal-title">Блюда за баллы</div>
                    <div className="personal-block"></div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Content;