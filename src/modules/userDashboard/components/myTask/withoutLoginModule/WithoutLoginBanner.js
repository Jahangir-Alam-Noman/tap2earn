import React, { useEffect, useReducer } from "react";
import swal from "sweetalert";
import VideoServices from "../../../../../components/api/VideoServices";
import DashboardLayout from "../../../../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../../../../utils/constants";

function WithoutLoginBanner() {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      buttons: [1, 2, 3, 4, 5, 6, 7, 8],
      banner: "",
      bannerID: "banner_id-0",
      balance:0,
    }
  );

  const atOptions = {
    key: "e3099ea8262fce438dd7a7227636a90f",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  const watchVideoIncome = async () => {
    let res = await VideoServices.nonincome();
    console.log("resasdasdasdasd", res.data.watched_count);
    setstate({
      watchVideoIncome: res.data.watched_count,
      balance: res.data.watched_count * 0.1,
    });
  };

  useEffect(() => {
    watchVideoIncome();
  }, []);

  const saveInDb = async (data) => {
    let res = await VideoServices.nonPackage(data);
    // console.log("res", res);
    // taskCompleted();
    // watchVideoIncome();
  };
  let showAds = "";
  if (state.buttons) {
    showAds = state.buttons.map((button, index) => {
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
                bannerID: `banner_id-${button}`,
                banner: `banner_id-${button}`,
              })
            }
          >
            Task {button}
          </button>
          <div id={`banner_id-${button}`} style={{ width: "10rem" }}></div>
        </div>
      );
    });
  }

  if (state.bannerID === state.banner) {
    let bannerId = document.getElementById(state.bannerID);
    let div = bannerId.getElementsByTagName("Div").length;

    // console.log('bannerID.length', state.bannerID.split("-")[1])
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
        setTimeout(() => {
          if (event[0]) {
            console.log("first", event[0]);
            let frame = event[0].contentWindow || event[0].contentDocument;
            // console.log(
            //   "framesdds",
            //   frame.document.getElementsByTagName("img")[0]
            // );
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
                setTimeout(() => {
                  let data = { ads_type: Constants.BANNER_ADS_TYPE, task_id: 1 };
                  saveInDb(data);
                  watchVideoIncome();
                  event[0].parentNode.removeChild(event[0]);
                }, 3500);

                // event.parentNode.removeChild(event[0]);
              },
              false
            );
          }
        }, 3500);
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
              <span>08</span>
            </div>
          </div>

          <div className="task__main__btn video__marge"></div>
          <div className="taskVideo__text">
            <div className="taskText">
              <h2>Total income</h2>
              <span>{(state.balance).toFixed(1)} tk</span>
            </div>
          </div>
        </div>
        <div className="d-flex" style={{ flexWrap: "wrap" }}>
          {showAds}
        </div>
      </DashboardLayout>
    </div>
  );
}

export default WithoutLoginBanner;
