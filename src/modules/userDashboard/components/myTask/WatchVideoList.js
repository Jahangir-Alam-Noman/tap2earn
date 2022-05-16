import React, { useEffect, useReducer, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import VideoServices from "../../../../components/api/VideoServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";
import { fluid } from "../../../../utils/ads";
import Constants from "../../../../utils/constants";
const WatchVideoList = () => {
  // const {fluid} = ads();
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstTask: true,
      fsecondTask: false,
      thirdTask: false,
      time: new Date().toLocaleTimeString(),
      watchVideoIncome:0,
      totalVideo:0
      // task: false,
    }
  );

  let { name } = useParams();
  // console.log('location', name);

  let totalVideoTask = "";
  if (name === Constants.REGULAR_PACKAGE) {
    totalVideoTask = Constants.REGULAR_VIDEO_TASK;
  } else if (name === Constants.BRONZE_PACKAGE) {
    totalVideoTask = Constants.BRONZE_VIDEO_TASK;
  } else if (name === Constants.PLATINUM_PACKAGE) {
    totalVideoTask = Constants.PLATINUM_VIDEO_TASK;
  } else if (name === Constants.SILVER_PACKAGE) {
    totalVideoTask = Constants.SILVER_VIDEO_TASK;
  } else if (name === Constants.TITANIUM_PACKAGE) {
    totalVideoTask = Constants.TITANIUM_VIDEO_TASK;
  } else if (name === Constants.GOLD_PACKAGE) {
    totalVideoTask = Constants.GOLD_VIDEO_TASK;
  }

  const watchVideoIncome = async ()=>{
    let res = await VideoServices.incomeVideo();
    // console.log('res', res.data.data.video_watch_income);
    setstate({watchVideoIncome:res.data.data.video_watch_income})
  }
 
  const totalVideoWatched = async()=>{
    let req1 =  await VideoServices.count(1);
    let req2 =  await VideoServices.count(2);
    let req3 =  await VideoServices.count(3);
    let req4 =  await VideoServices.count(4);
    setstate({
      totalVideo: parseInt(req1?.data?.Adsterra || 0) + parseInt(req2.data?.Adsterra || 0) + parseInt(req3?.data?.Adsterra || 0) + parseInt(req4?.data?.Adsterra || 0)
    })
    
    
  }
  // let date = ;
  // console.log('req', state.totalVideo);
  // console.log("sadasdasdsa",state.time);
  let videoId1 = useRef();
  let videoId2 = useRef();

  if (videoId1.current && state.firstTask) {
    fluid("video-id1");
    videoId1.current.onended = function () {
      let fluidId = document.getElementById("fluid_video_wrapper_video-id1");
      // console.log('fluidId', fluidId);
      fluidId.className = "";
      setstate({ firstTask: false });
      swal({
        icon: "success",
        text: "First task completed",
        timer: 2000,
      });
      // console.log("videoId1 ended");
    };
  }

  const timer = () => {
    let currentTime = new Date().toLocaleTimeString();
    setstate({ time: currentTime });
  };

  if (state.secondTask) {
    if (state.firstTask) {
      swal({ icon: "error", text: "Complete first task", timer: 2000 });
    } else {
      fluid("video-id2");
      videoId2.current.onended = function () {
        setstate({ secondTask: false });
        swal({
          icon: "success",
          text: "Second task completed",
          timer: 2000,
        });
        // console.log("videoId1 ended");
      };
    }
  }

  useEffect(() => {
    let interval = setInterval(timer, 1000);
    watchVideoIncome();
    totalVideoWatched();

    return () => {
      clearInterval(interval);
    };
  }, []);

  

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
                <h2>Total Video Task</h2>
                <span>{totalVideoTask}</span>
              </div>
            </div>
            <div className="taskVideo__text">
              <div className="taskText">
                <h2>Total Video Watched</h2>
                <span>{state.totalVideo}</span>
              </div>
            </div>

            <div className="taskVideo__text">
              <div className="taskText">
                <h2>Watch Video Income</h2>
                <span>{state.watchVideoIncome} tk</span>
              </div>
            </div>
          </div>

          <div className="task__main__btn">
            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className="task__btn"
                // onClick={() => setstate({ firstTask: true })}
                to={`/user-dashboard/my-task/watch_video/${name}/video/${Constants.TASK_1}`}
              >
                1st task
              </Link>
            </div>

            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className="task__btn"
                // onClick={() => setstate({ firstTask: true })}
                to={`/user-dashboard/my-task/watch_video/${name}/video/${Constants.TASK_2}`}
              >
                2nd task
              </Link>
            </div>
            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className="task__btn"
                // onClick={() => setstate({ firstTask: true })}
                to={`/user-dashboard/my-task/watch_video/${name}/video/${Constants.TASK_3}`}
              >
                3rd task
              </Link>
            </div>
            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className="task__btn"
                // onClick={() => setstate({ firstTask: true })}
                to={`/user-dashboard/my-task/watch_video/${name}/video/${Constants.TASK_4}`}
              >
                4th task
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WatchVideoList;
