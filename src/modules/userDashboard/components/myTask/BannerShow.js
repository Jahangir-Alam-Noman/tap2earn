import React, { useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import VideoServices from "../../../../components/api/VideoServices";
import DashboardLayout from "../../../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../../../utils/constants";

function BannerShow() {
  let { name, task, batch } = useParams();
  console.log("name", name);

  let history = useHistory();
  // let browserHistory = ReactRouter.browserHistory;
  const atOptions = {
    key: "e3099ea8262fce438dd7a7227636a90f",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };
  useEffect(() => {
    taskCompleted();
    watchVideoIncome();
  }, []);

  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      banner: "",
      bannerID: "banner_id-0",
      task: 1,
      bannerTaskCompleted: 0,
      newButtons: [],
      taskss: false,
      // videoButton:"",

      // task: false,
    }
  );


  
  //
  const taskCompleted = async () => {
    let res = await VideoServices.count(task);
    console.log('resasdasdasdsadas', res.data);
    setstate({
      bannerTaskCompleted: res.data.Captcha || 0,

      banner: res.data.Captcha
        ? "banner_id-" + (parseInt(res?.data?.Captcha) + 1)
        : "banner_id-1",
    });
    // setstate({})
  };

  // console.log("first", state.banner);/
  const watchVideoIncome = async () => {
    let res = await VideoServices.incomeVideo();
    // console.log("res", res.data.data);
    setstate({ watchVideoIncome: res.data.data.video_watch_income });
  };
  const saveInDb = async (data) => {
    let res = await VideoServices.videoWatched(data);
    // console.log("res", res);
    taskCompleted();
    // watchVideoIncome();
  };
  let totalBannerTask = "";

  if (name === Constants.REGULAR_PACKAGE)
    totalBannerTask = Constants.BANNER_ADS_REGULAR;
  else if (name === Constants.BRONZE_PACKAGE)
    totalBannerTask = Constants.BANNER_ADS_BRONZE;
  else if (name === Constants.SILVER_PACKAGE)
    totalBannerTask = Constants.BANNER_ADS_SILVER;
  else if (name === Constants.GOLD_PACKAGE)
    totalBannerTask = Constants.BANNER_ADS_GOLD;
  else if (name === Constants.PLATINUM_PACKAGE)
    totalBannerTask = Constants.BANNER_ADS_PLATINUM;
  else if (name === Constants.TITANIUM_PACKAGE)
    totalBannerTask = Constants.BANNER_ADS_TITANIUM;

  // console.log('state.newButtonsdsdsd', state.newButtons)
  if (state.bannerTaskCompleted && !state.newButtons.length)
    if (batch === "batch-1") {
      for (let i = 1; i <= parseInt(state.bannerTaskCompleted); i++)
        state.newButtons.push(i);
    } else if (batch === "batch-2") {
      for (let i = 10; i <= parseInt(state.bannerTaskCompleted); i++)
        state.newButtons.push(i);
    } else if (batch === "batch-3") {
      for (let i = 20; i <= parseInt(state.bannerTaskCompleted); i++)
        state.newButtons.push(i);
    } else if (batch === "batch-4") {
      for (let i = 30; i <= parseInt(state.bannerTaskCompleted); i++)
        state.newButtons.push(i);
    }

  //SHOW BUTTONS IN THE PAGE
  let showAds = "";
  if (state.buttons) {
    showAds = state.buttons.map((button, index) => {
      // let count  = parseInt(state.videoButton.split("-")[2])+1;
      // console.log('count', count);
      // console.log('state.newButtons', state.newButtons);
      let bannerID = 0;
      let indexID = batch === "batch-1" ? 0 : 1;
      if (batch === "batch-2") bannerID = 10;
      else if (batch === "batch-3") bannerID = 20;
      else if (batch === "batch-4") bannerID = 30;

      return (
        <div className="video">
          <button
            type="button"
            id="playButton"
            className={
              state.newButtons &&
              state.newButtons[index + indexID] === bannerID + button
                ? "task_____btn opacity"
                : "task_____btn"
            }
            onClick={() =>
              setstate({ bannerID: `banner_id-${bannerID + button}` })
            }
          >
            Task {button}
          </button>
          <div
            id={`banner_id-${bannerID + button}`}
            style={{ width: "10rem" }}
          ></div>
        </div>
      );
    });
  }




  if (state.bannerID === state.banner) {
    let bannerId = document.getElementById(state.bannerID);
    console.log('bannerId', bannerId)
    let div = bannerId.getElementsByTagName("Div").length;

    let button = state.bannerID.split("-")[1];
    if (!bannerId.current) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
    
    
      
      script.type = "text/javascript";
      script.src = `//wombjingle.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
      // console.log('bann', bannerId);
      if (bannerId && !div) {
        let div = document.createElement("div");
        div.id = `banner-id-${button}`;
        bannerId.append(div);
        div.append(conf);
        div.append(script);

     
        let event = div.getElementsByTagName("iframe");
        // console.log("firstssssss", event[0].getElementsByTagName('img'));

        // if (!event[0]) {
        //   return <h1>Loading</h1>
        // }
        setTimeout(() => {
          if (event[0]) {
            // console.log('bannerID.length', state.bannerID.split("-")[1])
            // console.log("first", event[0]);
            let frame = event[0].contentWindow || event[0].contentDocument;
            console.log("frame", frame);
            let img = frame.document.getElementsByTagName("img")[0];
            img.style.width = "17rem";
            img.style.objectFit = "fill";
            frame.addEventListener(
              "click",
              () => {
                swal({
                  icon: "success",
                  text: "task completed",
                });

                setstate({ banner: `banner_id-${parseInt(button) + 1}` });
                saveInDb({
                  ads_type: Constants.BANNER_ADS_TYPE,
                  task_id: task,
                });

                setTimeout(() => {
                  event[0].parentNode.removeChild(event[0]);
                  let bannerTask = parseInt(state.bannerTaskCompleted) + 1;
                  console.log('bannerTask', bannerTask)
                  // taskCompleted();
                  let newButtons = state.newButtons.concat(bannerTask);

                  setstate({ newButtons: newButtons });

                  if (
                    bannerTask === 10 ||
                    bannerTask === 20 ||
                    bannerTask === 30 ||
                    bannerTask === 40
                  ) {
                    swal({
                      icon: "success",
                      text: "Batch completed",
                    });
                    window.location.reload();
                  }
                  // else{
                  //   window.location.reload();

                  // }
                }, 1000);
                // event.parentNode.removeChild(event[0]);
              },
              false
            );
          } else window.location.reload(true);
        }, 4000);
        // console.log("state.", state.bannerID);
      }
    }
  }

  return (
    <div>
      <DashboardLayout>
        <div className="taskVideo__box">
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Banner Task</h2>
              <span>{totalBannerTask}</span>
            </div>
          </div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Batch no</h2>
              <span>{batch.split("-")[1]}</span>
            </div>
          </div>

          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total Banner Clicked</h2>
              <span>{state.bannerTaskCompleted}</span>
            </div>
          </div>

          <div className="task__main__btn video__marge"></div>
        </div>

        {/* to={"/user-dashboard/my-task/banner/:name/:bannerPackage?/true"} */}
        <div className="d-flex banner__show" style={{ flexWrap: "wrap" }}>
          {showAds}
        </div>
        <div className="downBtn" style={{ textAlign: "end" }}>
          <button
            className="backButton my-3"
            onClick={() => history.goBack("hu")}
          >
            Next
          </button>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default BannerShow;
