import fluidPlayer from "fluid-player";

export const fluid = (id)=>{
    fluidPlayer(id, {
        layoutControls: {
          controlBar: {
            autoHideTimeout: 3,
            animated: true,
            autoHide: true,
          },
          htmlOnPauseBlock: {
            html: null,
            height: null,
            width: null,
          },
          autoPlay: false,
          mute: true,
          allowTheatre: false,
          playPauseAnimation: false,
          playbackRateEnabled: false,
          allowDownload: false,
          playButtonShowing: true,
          fillToContainer: false,
          posterImage: "",
        },
        vastOptions: {
          allowVPAID: true,
          adList: [
            {
              roll: "preRoll",
              vastTag:
                "https://www.videosprofitnetwork.com/watch.xml?key=4f5b4c53dabbefb47e624b823802b5dc",
              adText: "",
            },
          ],
          adCTAText: false,
          adCTATextPosition: "",
        },
      });
}