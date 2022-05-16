import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AskQuesToggleCard from '../askQuestion/AskQuesToggleCard';
import { getAskQuesData } from '../askQuestion/_redux/action/AskQuesAction';

const Faq = () => {

    const dispatch = useDispatch();

    const askQuesData = useSelector((state) => state.AskQuesReducer.askQuesData);

    useEffect(() => {
        dispatch(getAskQuesData())
    }, [])


    return (
        <section className="faqPage-body">
            <div className="faqPage-content">
                <div className="title">
                    <h1>
                        FAQ
                    </h1>
                    <p>We would like to provide answers to all questions about the work of our site. Here we have compiled a selection of the most frequently asked questions from our clients.</p>
                </div>
                <div className="info">
                    {
                        typeof askQuesData !== "undefined" && askQuesData !== null && askQuesData.length > 0 && askQuesData.map((item, index) => (
                            <AskQuesToggleCard item={item} id={index} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Faq;