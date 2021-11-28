import React, {FC} from 'react';

const Footer:FC = () => {
    return (
        <div className="footer">
            <div className="layout">
                <div className="footer-grid">
                    <div className="footer-grid__col">
                        <div className="footer-copyright">© 2021 Пиццерия Престо™ Все права защищены</div>
                    </div>
                    <div className="footer-grid__col">
                        <div className="footer-social">
                            <div className="footer-social__item">
                                <div className="footer-social-card">

                                </div>
                            </div>
                            <div className="footer-social__item">
                                <div className="footer-social-card">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;