import React, { useState } from 'react';

const WatchVideoCard = ({ item }) => {

    const [openVideo, setOpenVideo] = useState(false);

    const handleClose = () => {
        setOpenVideo(false);
    }

    return (
        <React.Fragment>
            {/* <div className="main_content watch_video_item" onClick={() => setOpenVideo(true)}>
                <div className="hover_content">
                    <div className="hover_content_inner">
                        <h4>{item.title}</h4>
                        <button className="btn default-btn mt-5">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" className="svg-inline--fa fa-tags fa-w-20 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path>
                            </svg>  Watch Now
                        </button>
                    </div>
                </div>
                <img src={item.banner} alt="Video Thumbnail" />
            </div>

            <SimpleModel
                show={openVideo}
                size="lg"
                handleClose={handleClose}
            >
                {/* <video width="100%" controls>
                    <source src={`https://www.youtube.com/watch?v=vSc8z7DvBSA`} type="video/mp4" />
                    Your browser does not support HTML video.
                </video> */}
                {/* <iframe width="100%" height="400" title="w" src="https://www.youtube.com/embed/tgbNymZ7vqY" /> */}

                <script type='text/javascript' src='//pl16934682.trustedcpmrevenue.com/60/36/2c/60362c6c8181ab3245562a6f6675de60.js'></script>

                
        </React.Fragment>
    );
};

export default WatchVideoCard;