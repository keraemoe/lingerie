import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import s from './Catalog.module.scss'

const { Header, Content, Footer } = Layout;

const Catalog = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout className="layout">
                <Content
                    style={{
                        padding: '0 50px',
                        height: '100vh',
                        backgroundColor: 'white'

                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
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
                    </div>
                </Content>
            </Layout>
        </>
    );
};

export default Catalog;