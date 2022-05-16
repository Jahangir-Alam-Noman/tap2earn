import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import VideoServices from "../../../../components/api/VideoServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../../../utils/constants";
import BannerPackage from "./banner/BannerPackage";
const WatchBannerList = () => {
  // const {fluid} = ads();
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstTask: true,
      fsecondTask: false,
      thirdTask: false,
      time: new Date().toLocaleTimeString(),
      watchVideoIncome: 0,
      totalCapcha: 0,
      BannerPackage: true,
      batch: false,
      task_id:0,
      // task: false,
    }
  );

  let { name } = useParams();
  // console.log('location', name);

  let totalVideoTask = "";
  if (name === Constants.REGULAR_PACKAGE) {
    totalVideoTask = Constants.REGULAR;
  } else if (name === Constants.BRONZE_PACKAGE) {
    totalVideoTask = Constants.BRONZE;
  } else if (name === Constants.PLATINUM_PACKAGE) {
    totalVideoTask = Constants.PLATINUM;
  } else if (name === Constants.SILVER_PACKAGE) {
    totalVideoTask = Constants.SILVER;
  } else if (name === Constants.TITANIUM_PACKAGE) {
    totalVideoTask = Constants.TITANIUM;
  } else if (name === Constants.GOLD_PACKAGE) {
    totalVideoTask = Constants.GOLD;
  }

  const watchVideoIncome = async () => {
    let res = await VideoServices.incomeVideo();
    // console.log('res', res.data.data.video_watch_income);
    setstate({ watchVideoIncome: res.data.data.video_watch_income });
  };

  // const totalBannerWatched = async () => {
  //   let req1 = await VideoServices.count(1);
  //   console.log('req1.data.Captcha', req1.data.Captcha)
  //   let req2 = await VideoServices.count(2);
  //   let req3 = await VideoServices.count(3);
  //   let req4 = await VideoServices.count(4);
  //   setstate({
  //     totalCapcha:
  //       parseInt(req1?.data?.Captcha || 0) +
  //       parseInt(req2.data?.Captcha || 0) +
  //       parseInt(req3?.data?.Captcha || 0) +
  //       parseInt(req4?.data?.Captcha || 0),
  //   });
  // };
  // let date = ;
  // console.log('req', state.totalVideo);

  const timer = () => {
    let currentTime = new Date().toLocaleTimeString();
    setstate({ time: currentTime });
  };

  useEffect(() => {
    let interval = setInterval(timer, 1000);
    watchVideoIncome();
    // totalBannerWatched();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goTobatchOfTask = (id)=>{
    setstate({BannerPackage:false,batch:true,task_id:id})
  }
  const goBack = (id)=>{
    setstate({BannerPackage:true,batch:false,task_id:id})
  }
  return (
    <DashboardLayout>
      <div className="task__main__btn task__area">
        <div className="wrpper">
          <div className="timer">
            {/* <span className="progressTask">
              <span className="progressTask2"></span>
            </span> */}
            <div className="time">
              <p>Time:</p>
              <span className="mx-2">{state.time}</span>
            </div>
          </div>
          <div className="taskVideo__box">
            <div className="taskVideo__text">
              <div className="taskText">
                <h2>Total Banner Task</h2>
                <span>{totalVideoTask}</span>
              </div>
            </div>
            {/* <div className="taskVideo__text">
              <div className="taskText">
                <h2>Total Banner Clicked</h2>
                <span>{state.totalCapcha}</span>
              </div>
            </div> */}

            <div className="taskVideo__text">
              <div className="taskText">
                <h2>Watch Banner Income</h2>
                <span>{state.watchVideoIncome} tk</span>
              </div>
            </div>
          </div>
       
            <BannerPackage goTobatchOfTask={goTobatchOfTask} name={name} />
         
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WatchBannerList;
