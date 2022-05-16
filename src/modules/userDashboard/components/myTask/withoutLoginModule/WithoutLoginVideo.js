import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import swal from "sweetalert";
import VideoServices from "../../../../../components/api/VideoServices";
import DashboardLayout from "../../../../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../../../../utils/constants";

function WithoutLoginVideo() {
  let { name, task } = useParams();
  console.log("task", task);
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      buttons: [1, 2, 3, 4, 5, 6, 7, 8],
      videoIDs: ["VvuFhw1vU6M", "zn-g6FlAI80"],
      // videoButton:"",
      taskCompleted: 0,
      buttonId: "",
      videoButton: "video-id-1",
      newButtons: [],
      watchVideoIncome: 0,
      balance:0
      // task: false,
    }
  );

  // console.log("state.buttonId", state.buttonId);
  // console.log("state.videoButton", state.videoButton);

  const watchVideoIncome = async () => {
    let res = await VideoServices.nonincome();
    // console.log("resasdasdasdasd", res.data.watched_count);
    setstate({ watchVideoIncome: res.data.watched_count,balance:(res.data.watched_count * 0.1) });
  };

  useEffect(() => {
    watchVideoIncome();
  }, []);

  const opts = {
    height: "190",
    width: "220",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  var time2 = 0;
  let myTimer;

  function onPlayerStateChange(event) {
    console.log("event.data", event.data);
    if (event.data === 1) {
      // playing
      myTimer = setInterval(function () {
        time2++;
        if (time2 === 290) {
          let fluidId = document.getElementById(state.videoButton);
          // console.log("fluidId", fluidId);
          event.target.stopVideo();
          let data = { ads_type: Constants.ADS_TYPE, task_id: 1 };
          saveInDb(data);
          swal({
            icon: "success",
            text: `Task Completed`,
            timer: 2000,
          });
          watchVideoIncome();
          fluidId.style.display = "none";
          fluidId.style.visibility = "hidden"

        //   let iframes = document.querySelectorAll('iframe');
        //   for (var i = 0; i < iframes.length; i++) {
        //     iframes[i].parentNode.removeChild(iframes[i]);
        // }
        //   console.log('iframes', iframes)
        }
      }, 100);
    } else {
      // not playing
      clearInterval(myTimer);
    }
  }

  const saveInDb = async (data) => {
    let res = await VideoServices.nonPackage(data);
    // console.log("res", res);
    // taskCompleted();
    // watchVideoIncome();
  };
  let showVideo;
  if (state.buttons) {
    showVideo = state.buttons.map((button, index) => {
      // let count  = parseInt(state.videoButton.split("-")[2])+1;
      // console.log('count', count);
      // console.log('state.newButtons', state.newButtons);

      return (
        <div className="video">
          <button
            type="button"
            id="playButton"
            className="task_____btn"
            onClick={() =>
              setstate({
                buttonId: `video-id-${button}`,
                videoButton: `video-id-${button}`,
              })
            }
          >
            Video Task {button}
          </button>

          <div id={`video-id-${button}`} style={{ display: "none" }}>
            {/* <ReactPlayer onEnded={handleDuration} url="https://youtu.be/MoHod_jODXE" controls width="480px" height="280px"/> */}
            <YouTube
              videoId="VvuFhw1vU6M"
              opts={opts}
              onStateChange={onPlayerStateChange}
            />
          </div>
        </div>
      );
    });
  }

  if (state.buttonId === state.videoButton) {
    let fluidId = document.getElementById(state.videoButton);
    // console.log("fluidId", fluidId);
    fluidId.style.display = "block";
  }

  return (
    <div>
      <DashboardLayout>
        <div className="taskVideo__box">
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Task</h2>
              <span>08</span>
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Earning</h2>
              <span>{(state.balance).toFixed(1)} tk</span>
              
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Wathched</h2>
         
              <span>{state.watchVideoIncome} </span>
            </div>
          </div>
        </div>

        <div className="task__main__btn video__marge">
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            {showVideo}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default WithoutLoginVideo;
