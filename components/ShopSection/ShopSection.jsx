import React from 'react';
import s from "./ShopSection.module.scss"

const ShopSection = () => {
    const shops = [
        {
            img: '/shop1.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/shop2.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/shop3.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
    ]
    return (
        <>
            <div className={s.container}>
                <div className={s.shop}>
                    <h1>Shop Our  Products</h1>
                    <div className={s.products}>
                        {shops.map((shop) => (
                            <div>
                                <img src={shop.img} alt="" />
                                <div className={s.under_blcok}>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopSection;