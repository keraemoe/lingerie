import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Dropdown, Space } from 'antd';
import Link from 'next/link';
import s from './Catalog.module.scss'
import { DownOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Catalog = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" >
                    White
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Black
                </a>
            ),
            key: '1',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Blue
                </a>
            ),
            key: '2',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Red
                </a>
            ),
            key: '3',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Green
                </a>
            ),
            key: '4',
        },
    ];

    const cards = [
        {
            img: '/catalog_tovar1.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar2.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar3.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar4.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar5.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar6.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar7.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar8.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar9.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar10.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar11.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
        {
            img: '/catalog_tovar12.png',
            name: 'Stefi Push Up BH schwarz',
            price: '69,00€'
        },
    ]
    return (
        <>
            <Layout className="layout">
                <Content
                    style={{
                        backgroundColor: 'white',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                            padding: '0 100px',
                        }}
                    >
                        <Breadcrumb.Item>
                            <Link href="/">
                                Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Catalog</Breadcrumb.Item>
                        <Breadcrumb.Item>Lingerie</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className={s.content}
                        style={{
                            background: colorBgContainer,
                        }}
                    >
                        <h1>Bras</h1>
                        <p>You're spoiled for choice with our wide range of bras, <br /> meticulously made to fit, flatter and fascinate. </p>
                        <div className={s.catalog}>
                            <div className={s.catalog_change}>
                                <div className={s.left}>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Color
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Size
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Price
                                                <DownOutlined />
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </div>
                                <div className={s.right}>
                                    fsdfds
                                </div>
                            </div>
                            <div className={s.catalog_cards}>
                                {cards.map((card) => (
                                    <div className={s.card}>
                                        <img src={card.img} alt="" />
                                        <h1>{card.name}</h1>
                                        <p>{card.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </>
    );
};

export default Catalog;