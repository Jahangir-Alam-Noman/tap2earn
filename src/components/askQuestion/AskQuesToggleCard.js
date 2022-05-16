import React, { useState } from 'react';

const AskQuesToggleCard = ({ item, id }) => {

    const [collapse, setCollapse] = useState(false);

    return (

        <div className="faq-item" onClick={() => setCollapse(!collapse)}>
            <div className={collapse === true ? "faq-title open" : "faq-title"}>
                <h3>{item.title}</h3>
                <span></span>
            </div>
            <p className={collapse === true ? "ask_collapse_open" : "ask_collapse"}>{item.description}</p>

        </div>
    );
};

export default AskQuesToggleCard;