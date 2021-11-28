import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div className="header">
            <div className="layout">
                <div className="header-grid">
                    <div className="header-grid__left">
                        <div className="header-logo">Престо</div>
                    </div>
                    <div className="header-grid__right">
                        <Link to="/personal" className="header-login">
                            <span className="header-login__icon"></span>
                            <span className="header-login__link">Войти</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;