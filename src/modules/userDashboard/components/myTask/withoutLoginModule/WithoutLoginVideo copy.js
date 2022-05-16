import React, { useReducer } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../../../../layouts/dashboardLayout/DashboardLayout";
import { fluid } from "../../../../../utils/ads";
// import VideoServices from '../../components/api/';

function WithoutLoginVideo() {
  let { name ,task} = useParams();
  // console.log('task', task);
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      buttons: [1,2,3,4,5,6,7,8],
      // videoButton:"",
      taskCompleted: 0,
      buttonId:"",
      videoButton:"video-id-1",
      newButtons:[],
      watchVideoIncome:0
      // task: false,
    }
  );

  console.log('state.buttonId', state.buttonId)
  console.log('state.videoButton', state.videoButton)
  

  let showVideo;
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
            className="task_____btn" onClick={()=>setstate({buttonId:`video-id-${button}`,videoButton:`video-id-${button}`})}
          >
            Video Task {button}
          </button>
          <div style={{margin:"10px"}}>
            <video id={`video-id-${button}`} preload="none" />
            <source src="" type="video/mp4" />
          </div>
          
        </div>
      );
    });
  }
  
  if(state.buttonId === state.videoButton){
    let fluidId = document.getElementById(state.videoButton);
    if(fluidId){
      let c = 0;
      // console.log('first', first);
      fluid(state.videoButton);
      // setTimeout(() => {
        
        fluidId.onended = function () {
          c =+1;
          console.log('c', c);
         
        
          
          let count  = parseInt(state.buttonId.split("-")[2])+1;
          setstate({buttonId:"video-id-"+count})
    
        };
      // }, 3000);
    }

  }
  // else{
  //   swal({
  //     icon: "error",
  //     text: "Complete previous task",
  //     timer: 2000,
  //   });
    
  // }
  return (
    <div>
      <DashboardLayout>
        <div className="taskVideo__box">
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Task</h2>
              <span>00</span>
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Earning</h2>
              <span>00 tk</span>
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Video Completed</h2>
              <span>00</span>
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
