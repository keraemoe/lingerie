import React from 'react';
import s from './Quiz.module.scss'

const Quiz = () => {
    return (
        <>
            <div className={s.quiz}>
                <img src="/quiz.png" alt="" />
                <div className={s.under_quiz}>
                    <div className={s.under}>
                        <img src="/present.png" alt="" />
                        <div className={s.tags}>
                            <h1>Complimentary Gift Wrapping</h1>
                            <p>Free Luxury Gift Wrap on orders over £400</p>
                            <span>More info</span>
                        </div>
                    </div>
                    <div className={s.under}>
                        <img src="/present.png" alt="" />
                        <div className={s.tags}>
                            <h1>PAY LATER WITH KLARNA</h1>
                            <p>No interest. No Fees. No credit agreement.</p>
                            <span>Payments</span>
                        </div>
                    </div>
                    <div className={s.under}>
                        <img src="/present.png" alt="" />
                        <div className={s.tags}>
                            <h1>WORLDWIDE SHIPPING</h1>
                            <p>International courier shipping</p>
                            <span>Shipping Info</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;