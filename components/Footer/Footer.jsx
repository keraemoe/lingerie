import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <div className={s.footer}>
                <div className={s.top}>
                    <img className={s.logo_icon} src="/footer_logo.png" alt="" />
                    <nav>
                        <ul>
                            <h1>Main</h1>
                            <li>Shop</li>
                            <li>Underwear</li>
                            <li>Bras</li>
                            <li>Fitting Room</li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <h1>Information</h1>
                            <li>Payments</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                            <li>Заключение покупки</li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <h1>Company</h1>
                            <li>О нас</li>
                            <li>Реквизиты</li>
                            <li>Контакты</li>
                        </ul>
                    </nav>
                    <div className={s.last}>
                        <h1>Join Our Mailing List</h1>
                        <div className={s.input}>
                            <input type="email" name="email" placeholder='Email' id="" />
                            <button>
                                <img src="/arrow-right.png" alt="" />
                            </button>
                        </div>
                        <p>By signing up you agree with our <span>Terms & Conditions</span> and <span>Privacy Policy.</span> <br />
                            To opt out, click Unsubscribe in our emails.
                        </p>
                    </div>
                </div>
                <hr />
                <div className={s.bottom}>
                    <div>
                        <span>©2021. Almerna</span>
                    </div>
                    <div className={s.icon_block}>
                        <a className={s.tag} href="">Terms & Condintions</a>
                        <a className={s.tag} href="">Privacy Policy</a>
                        <div className={s.icons}>
                            <a href=""><img src="/facebook.png" alt="" /></a>
                            <a href=""><img src="/instagram.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;