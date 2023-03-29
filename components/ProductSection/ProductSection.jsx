import React, { useState } from 'react';
import s from './ProductSection.module.scss'


const ProductSection = () => {
    const body = [
        {
            id: 1,
            img: '/card1.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            id: 2,
            img: '/card2.png',
            name: 'Stefi Push Up BH schwarz',
            price: '80,00€'
        },
        {
            id: 3,
            img: '/card3.png',
            name: 'Stefi Push Up BH schwarz',
            price: '100,00€'
        },
    ]

    const bra = [
        {
            id: 1,
            img: '/card3.png',
            name: 'Stefi Push Up BH schwarz',
            price: '234,00€'
        },
        {
            id: 2,
            img: '/card1.png',
            name: 'Stefi Push Up BH schwarz',
            price: '221,00€'
        },
        {
            id: 3,
            img: '/card2.png',
            name: 'Stefi Push Up BH schwarz',
            price: '115,00€'
        },
    ]

    const kimono = [
        {
            id: 3,
            img: '/card2.png',
            name: 'Stefi Push Up BH schwarz',
            price: '66,00€'
        },
        {
            id: 2,
            img: '/card1.png',
            name: 'Stefi Push Up BH schwarz',
            price: '144,00€'
        },
        {
            id: 1,
            img: '/card3.png',
            name: 'Stefi Push Up BH schwarz',
            price: '72,00€'
        },
    ]

    const kimono2 = [
        {
            id: 3,
            img: '/card1.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            id: 1,
            img: '/card2.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            id: 2,
            img: '/card3.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
    ]

    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className={s.product_container}>
                <h1>
                    Shop Our Trending
                    <br />
                    Products
                </h1>
                <div className={s.product_cards}>
                    <nav>
                        <ul>
                            <button onClick={() => changeTab(1)}>body</button>
                            <button onClick={() => changeTab(2)}>BRA</button>
                            <button onClick={() => changeTab(3)}>Kimono</button>
                            <button onClick={() => changeTab(4)}>Kimono</button>
                        </ul>
                    </nav>
                    <div className={s.cards}>
                        {activeTab === 1 && (
                            <>
                                {body.map((card) => (
                                    <div className={s.card}>
                                        <img src={card.img} alt="" />
                                        <div className={s.under_card}>
                                            <h1>{card.name}</h1>
                                            <p>{card.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {activeTab === 2 && (
                            <>
                                {bra.map((card) => (
                                    <div className={s.card}>
                                        <img src={card.img} alt="" />
                                        <div className={s.under_card}>
                                            <h1>{card.name}</h1>
                                            <p>{card.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {activeTab === 3 && (
                            <>
                                {kimono.map((card) => (
                                    <div className={s.card}>
                                        <img src={card.img} alt="" />
                                        <div className={s.under_card}>
                                            <h1>{card.name}</h1>
                                            <p>{card.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {activeTab === 4 && (
                            <>
                                {kimono2.map((card) => (
                                    <div className={s.card}>
                                        <img src={card.img} alt="" />
                                        <div className={s.under_card}>
                                            <h1>{card.name}</h1>
                                            <p>{card.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductSection;