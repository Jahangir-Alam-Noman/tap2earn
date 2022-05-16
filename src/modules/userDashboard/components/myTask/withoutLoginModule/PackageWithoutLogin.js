import React from 'react'
import { Link } from 'react-router-dom'

function PackageWithoutLogin() {
  return (
    <div className="home-section">

        <Link className="item" to={`/user-dashboard/my-task/watch_video/no_package/video`}>
          <div className="wh-block default__hover">
            <div className="title-block line">
              <h3 className="my__task_bg">Watch Video</h3>
            </div>
            <div className="home-referralInfo">
              <div className="item" id="watch_video">
                {/* <span>Limit</span> */}
                <p className="v2 d-flex justify-content-between">
                  <span>Limit: </span>
                  <span> 00</span>
                </p>
              </div>
            </div>
          </div>
        </Link>

        <div className="item">
          <Link to={`/user-dashboard/my-task/banner/no_package/click`}>
          <div className="wh-block default__hover">
            <div className="title-block line">
              <h3 className="problem_solving_bg">Banner Ads</h3>
            </div>
            <div className="home-referralInfo">
              <div className="item">
                {/* <span>Limit</span> */}
                <p className="v2 d-flex justify-content-between">
                  <span>Limit :</span>
                  <span>00</span>
                </p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
  )
}

export default PackageWithoutLogin