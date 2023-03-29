import React from 'react';
import s from './Header.module.scss'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';


const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" >
                USD
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer">
                RUB
            </a>
        ),
        key: '1',
    },
];

const Header = () => {
    return (
        <>
            <div className={s.header_container}>
                <div className={s.top_header}>
                    <div className={s.left}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    EUR
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <h1>Germany</h1>
                    </div>
                    <div className={s.center}>
                        <h1>
                            Free shipping & free returns
                        </h1>
                    </div>
                    <div className={s.right}>
                        <h1>Support</h1>
                    </div>
                </div>
                <div className={s.header}>
                    <img className={s.search_left} src="/search.png" alt="" />
                    <Link href="/" className={s.logo}>
                        <img src="/logo.png" alt="" />
                        <img src="/main_logo.png" alt="" />
                    </Link>
                    <ul>
                        <li>NEW ARRIVALS</li>
                        <li>PLUS SIZE</li>
                        <li>LINGERIE</li>
                        <li>NIGHTWEAR</li>
                        <li>GIFTS</li>
                        <li>COLLECTIONS</li>
                    </ul>
                    <ul>
                        <img className={s.search} src="/search.png" alt="" />
                        <img src="/heart.png" alt="" />
                        <img className={s.user} src="/user.png" alt="" />
                        <Link href="/catalog">
                            <img src="/basket.png" alt="" />
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;