import React, { useEffect } from "react";

function Applixer() {
  let adStatusCallback = (status) => {
    console.log("Ad Status: " + status);
  };

  const options = {
    // Video Ad Options
    zoneId: 2050,
    accountId: 6033, // Required field for RMS
    gameId: 6879, // Required field for RMS
    adStatusCb: adStatusCallback,
  };

  useEffect(() => {
    let playBtn = document.getElementById("playButton");
    // console.log(playBtn);
    playBtn.addEventListener("click", () => {
      window.invokeApplixirVideoUnit(options);
    }); // Invoke Video ad);
  }, []);

  return (
    <>
      <div id="applixir_vanishing_div" hidden>
        <iframe id="applixir_parent" allow="autoplay"></iframe>
      </div>
      <button type="button" id="playButton">
        Watch Video
      </button>
    </>
  );
}

export default Applixer;
