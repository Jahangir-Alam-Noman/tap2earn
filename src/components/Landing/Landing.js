import React, { useReducer, useRef } from "react";
import { Link } from "react-router-dom";
import left from "../../assets/img/mainLayout/left-arrow.svg";
import banner1 from "../../assets/img/mainLayout/main1.svg";
import banner2 from "../../assets/img/mainLayout/main2.svg";
import right from "../../assets/img/mainLayout/right-arrow.svg";

const Landing = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      slide1: true,
      slide2: false,
    }
  );

  let landing2 = useRef();

  const onClick = () => {
    //  let span = document.getElementById();
    //  console.log(`object`, span) // corresponding DOM node
    //  span.className = "landing-body-2";

    setTimeout(() => {
      setState({ slide1: false, slide2: true });
    }, 500);
  };

  //  console.log(`state.slide1`, state.slide1)
  //  console.log(`state.slide2`, state.slide2)

  let activeSlide = "";
  if (state.slide1) {
    activeSlide = (
      <section className="landing-body">
        <div className="landing">
          <div className="texts">
            <h3>BETTER WAY TO INVEST</h3>
            <p>
              You can get upto 15% money return on your investment in 1-3 months
              (withdrawable at any time through Binance).
            </p>
            <div className="mainInfo-form">
              <button type="submit">
                <Link to="/register">
                  <span>Start Investing</span>
                </Link>{" "}
              </button>
            </div>
          </div>
          <div className="images">
            <img src={banner1} alt="image1" />
          </div>
        </div>
        <div className="slider">
          <div className="slider-img">
            <img src={left} alt="left" />
          </div>
          <div className="slider__dot">
            <span className="number">01</span>
            <div className="slider__line">
              <span className="slider__active"></span>
            </div>
            <span className="number notActive">02</span>
          </div>
          <div className="slider-img" onClick={onClick}>
            <img src={right} alt="right" />
          </div>
        </div>
      </section>
    );
  } else if (state.slide2) {
    activeSlide = (
      <section className="landing-body" ref={landing2}>
        <div className="landing">
          <div className="texts">
            <h3>EARN UP TO 380BDT DAILY</h3>
            <p>
              Complete the tasks that you are required to complete on a daily
              basis to earn money.
            </p>
            <div className="mainInfo-form">
              <button type="submit">
                <Link to="/register">
                  <span>Start Earning</span>
                </Link>{" "}
              </button>
            </div>
          </div>
          <div className="images">
            <img src={banner2} alt="image1" />
          </div>
        </div>
        <div className="slider">
          <div
            className="slider-img"
            onClick={() => setState({ slide1: true, slide2: false })}
          >
            <img src={left} alt="left" />
          </div>
          <div className="slider__dot">
            <span className="number notActive">01</span>
            <div className="slider__line">
              <span className="slider__activeLeft"></span>
            </div>
            <span className="number">02</span>
          </div>
          <div className="slider-img">
            <img src={right} alt="right" />
          </div>
        </div>
      </section>
    );
  }

  return <>{activeSlide}</>;
};

export default Landing;
