import React, { useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import swal from "sweetalert";
import VideoServices from "../../../../components/api/VideoServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../../../utils/constants";
// import VideoServices from '../../components/api/';

function VideoShow() {
  let { name ,task} = useParams();
  // console.log('task', task);
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      buttons: [],
      // videoButton:"",
      taskCompleted: 0,
      buttonId:"",
      videoButton:"video-id-0",
      newButtons:[],
      watchVideoIncome:0
      // task: false,
    }
  );
  // console.log('location', name);

  let history = useHistory();

  const taskCompleted = async()=>{
    let res = await VideoServices.count(task)
    // console.log('resasdasdasdsadas', res);
    setstate({taskCompleted:res.data.Adsterra || 0,buttonId: res.data.Adsterra ? "video-id-"+(parseInt(res?.data?.Adsterra)+1) :"video-id-1"})
    // setstate({})

  }

  const watchVideoIncome = async ()=>{
    let res = await VideoServices.incomeVideo();
    // console.log('res', res.data.data.video_watch_income);
    setstate({watchVideoIncome:res.data.data.video_watch_income})
  }
 

  // console.log('buttonId', state.buttonId);


const saveInDb = async (data)=>{

  let res = await VideoServices.videoWatched(data);
  // console.log('res', res)
  taskCompleted();
  watchVideoIncome();

}
  useEffect(() => {
    taskCompleted();
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
        // let times;

        // times = event.target.getCurrentTime();
        time2++;
        //  document.getElementById("progressBar").value = time2;
        //  document.getElementById("progress").style.width=(time2/3)+"%";
        if (time2 === 200) {
          let fluidId = document.getElementById(state.videoButton);
          console.log("fluidId", fluidId);
          event.target.stopVideo();
          
          saveInDb({ads_type:Constants.ADS_TYPE,task_id:task});
          swal({
            icon: "success",
            text: "task completed",
          });
          
          let videoTask = parseInt(state.taskCompleted)+1;
          // console.log('fvideoTaskirst', videoTask);
          let newButtons = state.newButtons.concat(videoTask);
          setstate({newButtons : newButtons})
          let count  = parseInt(state.buttonId.split("-")[2])+1;
          setstate({buttonId:"video-id-"+count})
          fluidId.style.display = "none";
          
        }
      }, 100);
    } else {
      // not playing
      clearInterval(myTimer);
    }
  }


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

  if(state.taskCompleted && !state.newButtons.length) for(let i = 1; i<=parseInt(state.taskCompleted); i++) state.newButtons.push(i);
  

  let showVideo;
  if (name === Constants.BRONZE_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.BRONZE; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.REGULAR_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.REGULAR; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.PLATINUM_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.PLATINUM; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.SILVER_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.SILVER; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.TITANIUM_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.TITANIUM; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.GOLD_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.GOLD; i++) {
      state.buttons.push(i);
    }
  }

  if (state.buttons) {
    showVideo = state.buttons.map((button,index) => {
      // let count  = parseInt(state.videoButton.split("-")[2])+1;
      // console.log('count', count);
      // console.log('state.newButtons', state.newButtons); 
      
      return (
        <div className="video">
          <button
            type="button"
            id="playButton"
            className={state.newButtons && state.newButtons[index] === button ? "task_____btn opacity" :"task_____btn"}
                    onClick={() => setstate({videoButton:`video-id-${button}` })}
          >
            Video Task {button}
          </button>
          <div style={{margin:"10px"}}>
          <div id={`video-id-${button}`} style={{ display: "none" }}>
            {/* <ReactPlayer onEnded={handleDuration} url="https://youtu.be/MoHod_jODXE" controls width="480px" height="280px"/> */}
            <YouTube
              videoId="VvuFhw1vU6M"
              opts={opts}
              // onReady={onReady}
              // onEnd={onEnded}
              onStateChange={onPlayerStateChange}
            />
          </div>
          </div>
          
        </div>
      );
    });
  }
  
  if(state.buttonId === state.videoButton){
    let fluidId = document.getElementById(state.videoButton);
    fluidId.style.display = "block";
  }
  return (
    <div>
      <DashboardLayout>
        <div className="taskVideo__box">
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Task</h2>
              <span>{totalVideoTask}</span>
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Earning</h2>
              <span>{state.watchVideoIncome}tk</span>
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Completed</h2>
              <span>{state.taskCompleted}</span>
            </div>
          </div>
        </div>

        <div className="task__main__btn video__marge">
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            {showVideo}
          </div>
        </div>

        <div className="downBtn" style={{textAlign:"end"}}>
        <button className="backButton my-3" onClick={()=>history.goBack()}>
       Next
         </button>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default VideoShow;
