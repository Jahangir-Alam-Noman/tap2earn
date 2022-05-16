import { useEffect } from "react";

function Adstrerra() {
  useEffect(() => {
    try {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;

      // s.src = "https://wombjingle.com/e899f66a4f079a96e1b6bdcafad3871c/invoke.js";
      // s.src = "//wombjingle.com/60/36/2c/60362c6c8181ab3245562a6f6675de60.js";
      s.innerHTML =
        `document.write(
          "<scr" +
            'ipt type="text/javascript" src="http' +
            (window.location.protocol === "https:" ? "s" : "") +
            '://wombjingle.com/e899f66a4f079a96e1b6bdcafad3871c/invoke.js"></scr' +
            "ipt>"
        );` +
        `atOptions ={ key: "e3099ea8262fce438dd7a7227636a90f",
         format: "iframe",
         height: 60,
         width: 468,
         params: {},}`;

      console.log("script :>> ", s);
      // console.log("docu :>> ", document);
      document.body.appendChild(s);

      return () => {
        document.body.removeChild(s);
      };
    } catch (err) {
      console.log("err :>> ", err);
    }
  }, []);
}

export default Adstrerra;
