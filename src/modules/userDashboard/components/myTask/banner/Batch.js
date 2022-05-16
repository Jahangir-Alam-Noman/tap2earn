import React, { useEffect, useReducer } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import VideoServices from "../../../../../components/api/VideoServices";
import DashboardLayout from "../../../../../layouts/dashboardLayout/DashboardLayout";
import Constants from "../../../../../utils/constants";

function Batch() {
  let { name, task_id } = useParams();
  let history = useHistory();
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      taskCompleted: 0,

      time: new Date().toLocaleTimeString(),
      watchVideoIncome: 0,
    }
  );

  const taskCompleted = async () => {
    let res = await VideoServices.count(task_id);

    setstate({ taskCompleted: res?.data?.Captcha || 0 });
  };

  const watchVideoIncome = async () => {
    let res = await VideoServices.incomeVideo();
    // console.log('res', res.data.data.video_watch_income);
    setstate({ watchVideoIncome: res.data.data.video_watch_income });
  };

  const timer = () => {
    let currentTime = new Date().toLocaleTimeString();
    setstate({ time: currentTime });
  };

  useEffect(() => {
    let interval = setInterval(timer, 1000);
    watchVideoIncome();
    taskCompleted();

    // totalBannerWatched();

    return () => {
      clearInterval(interval);
    };
  }, []);
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

  // console.log("state.", state.taskCompleted);
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

          <div className="task__main__btn">
            <button className="backButton" onClick={() => history.goBack()}>
              Back to previous Page
            </button>
            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className={
                  state.taskCompleted >= 10 ? "task__btn opacity" : "task__btn "
                }
                to={
                  state.taskCompleted <= 10
                    ? `/user-dashboard/my-task/banner/${name}/${task_id}/batch-1`
                    : `/user-dashboard/my-task/banner/${name}/batches/${task_id}`
                }
              >
                1st Batch
              </Link>
            </div>

            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className={
                  state.taskCompleted >= 10 && state.taskCompleted >= 20
                    ? "task__btn opacity"
                    : "task__btn"
                }
                to={
                  state.taskCompleted >= 10 && state.taskCompleted <= 20
                    ? `/user-dashboard/my-task/banner/${name}/${task_id}/batch-2`
                    : `/user-dashboard/my-task/banner/${name}/batches/${task_id}`
                }
              >
                2nd Batch
              </Link>
            </div>
            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className={
                  state.taskCompleted >= 20 && state.taskCompleted >= 30
                    ? "task__btn opacity"
                    : "task__btn"
                }
                // onClick={() => setstate({ firstTask: true })}
                to={
                  state.taskCompleted >= 20 && state.taskCompleted <= 30
                    ? `/user-dashboard/my-task/banner/${name}/${task_id}/batch-3`
                    : `/user-dashboard/my-task/banner/${name}/batches/${task_id}`
                }
              >
                3rd Batch
              </Link>
            </div>
            <div className="my-3">
              <Link
                type="button"
                id="playButton"
                className={
                  state.taskCompleted > 39 ? "task__btn opacity" : "task__btn"
                }
                // onClick={() => setstate({ firstTask: true })}
                to={
                  state.taskCompleted >= 30 && state.taskCompleted < 40
                    ? `/user-dashboard/my-task/banner/${name}/${task_id}/batch-4`
                    : `/user-dashboard/my-task/banner/${name}/batches/${task_id}`
                }
              >
                4th Batch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Batch;
