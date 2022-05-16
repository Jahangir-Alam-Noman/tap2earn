import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AskQuesToggleCard from "./AskQuesToggleCard";
import { getAskQuesData } from "./_redux/action/AskQuesAction";

const AskQuestion = () => {
  const dispatch = useDispatch();

  const askQuesData = useSelector((state) => state.AskQuesReducer.askQuesData);

  useEffect(() => {
    dispatch(getAskQuesData());
  }, []);

  return (
    <section className="faqHome-body">
      <div className="faq-content">
        <div className="title">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="info">
          {typeof askQuesData !== "undefined" &&
            askQuesData !== null &&
            askQuesData.length > 0 &&
            askQuesData.map((item, index) => (
              <AskQuesToggleCard item={item} key={index +1} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AskQuestion;
