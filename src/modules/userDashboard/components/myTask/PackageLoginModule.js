import React from "react";
import { Link } from "react-router-dom";
import Constants from "../../../../utils/constants";


function PackageLoginModule({name}) {
    let linkName = name.split(" ")[0];
    console.log('name', name)
 
    let limit = 0
    let bannnerLimit = 0;
    if(name === "Regular Package"){
      // console.log('linkName', name);
     limit = Constants.REGULAR_VIDEO_TASK 

     bannnerLimit = (Constants.REGULAR_VIDEO_TASK + Constants.REGULAR) - Constants.REGULAR_VIDEO_TASK
    
    }else if(name === "Bronze package"){
     limit = Constants.BRONZE_VIDEO_TASK
     bannnerLimit = (Constants.BRONZE_VIDEO_TASK + Constants.BRONZE) - Constants.BRONZE_VIDEO_TASK
     

    }else if(name === "Silver package"){
      limit = Constants.SILVER_VIDEO_TASK
      bannnerLimit = (Constants.SILVER_VIDEO_TASK + Constants.SILVER) - Constants.SILVER_VIDEO_TASK

    }else if(name === "Gold Package"){
      limit = Constants.GOLD_VIDEO_TASK
      bannnerLimit = (Constants.GOLD_VIDEO_TASK + Constants.GOLD) - Constants.GOLD_VIDEO_TASK

    }else if(name === "Platinum Package"){
      limit = Constants.PLATINUM_VIDEO_TASK
      bannnerLimit = (Constants.PLATINUM_VIDEO_TASK + Constants.PLATINUM) - Constants.PLATINUM_VIDEO_TASK

    }else if(name === "Titanium Package"){
      limit = Constants.TITANIUM_VIDEO_TASK
      bannnerLimit = (Constants.TITANIUM_VIDEO_TASK + Constants.TITANIUM) - Constants.TITANIUM_VIDEO_TASK
    }

    console.log('limit', limit)
  return (
    <>

        <h3 className="text-center mt-3">Task of {name}</h3>
      <div className="home-section">

        <Link className="item" to={`/user-dashboard/my-task/watch_video/${linkName}`}>
          <div className="wh-block default__hover">
            <div className="title-block line">
              <h3 className="my__task_bg">Watch Video</h3>
            </div>
            <div className="home-referralInfo">
              <div className="item" id="watch_video">
                {/* <span>Limit</span> */}
                <p className="v2 d-flex justify-content-between">
                  <span>Limit :</span>
                  <span>{limit}</span>
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className="item">
          <Link to={`/user-dashboard/my-task/banner/${linkName}`}>
          <div className="wh-block default__hover">
            <div className="title-block line">
              <h3 className="problem_solving_bg">Banner Ads</h3>
            </div>
            <div className="home-referralInfo">
              <div className="item">
                {/* <span>Limit</span> */}
                <p className="v2 d-flex justify-content-between">
                  <span>Limit :</span>
                  <span>{bannnerLimit}</span>
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PackageLoginModule