import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Constants from '../../../../../utils/constants';

function BannerPackage({name,goTobatchOfTask}) {
    const [state, setstate] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          buttons: [],
          banner: "",
          bannerID: "banner_id-0",
          task: 1,
          bannerTaskCompleted: 0,
          newButtons: [],
        }
      );

      if (name === Constants.BRONZE_PACKAGE && !state.buttons.length)
    for (let i = 1; i <= Constants.BANNER_ADS_BRONZE; i++)
      state.buttons.push(i);
  else if (name === Constants.REGULAR_PACKAGE && !state.buttons.length)
    for (let i = 1; i <= Constants.BANNER_ADS_REGULAR; i++)
      state.buttons.push(i);
  else if (name === Constants.PLATINUM_PACKAGE && !state.buttons.length)
    for (let i = 1; i <= Constants.BANNER_ADS_PLATINUM; i++)
      state.buttons.push(i);
  else if (name === Constants.SILVER_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.BANNER_ADS_SILVER; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.TITANIUM_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.BANNER_ADS_TITANIUM; i++) {
      state.buttons.push(i);
    }
  } else if (name === Constants.GOLD_PACKAGE && !state.buttons.length) {
    for (let i = 1; i <= Constants.BANNER_ADS_GOLD; i++) {
      state.buttons.push(i);
    }
  }

  const clickOnButton = (button)=>{
    setstate({ bannerID: `banner_id-${button}` })
    goTobatchOfTask(button)
  }
  let showAds = "";
  if (state.buttons) {
    showAds = state.buttons.map((button, index) => {
      // let count  = parseInt(state.videoButton.split("-")[2])+1;
      // console.log('count', count);
      // console.log('state.newButtons', state.newButtons);

      return (
        <div className="video">
          <Link to={`/user-dashboard/my-task/banner/${name}/batches/${button}`}
            type="button"
            id="playButton"
            className={
              state.newButtons && state.newButtons[index] === button
                ? "task_____btn opacity"
                : "task_____btn"
            }
            onClick={() => clickOnButton(button)}
          >
            Task {button}
          </Link>
          <div id={`banner_id-${button}`} style={{ width: "10rem" }}></div>
        </div>
      );
    });

}

  return (
    <div className='banner__package' style={{marginTop:"70px"}}>{showAds}</div>
  )
}

export default BannerPackage