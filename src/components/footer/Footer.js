import React, { useReducer, useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      taskCompleted: 0,

      time: new Date().toLocaleTimeString(),
      watchVideoIncome: 0,
    }
  );

  const atOptions = {
    key: "e3099ea8262fce438dd7a7227636a90f",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  let bannerRef = useRef();
 

//   useEffect(() => {
//       console.log('bannerRef', bannerRef)
//     if (bannerRef) {
//         if (bannerRef.current) {
//           const conf = document.createElement("script");
//           const script = document.createElement("script");
//           script.type = "text/javascript";
//           script.src = `//wombjingle.com/${atOptions.key}/invoke.js`;
//           conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
//           // console.log('bann', bannerId);
//         //   if (bannerRef) {
//             let div = document.createElement("div");
//             console.log('bannerRefcurent', bannerRef.current)
//             bannerRef.current.append(div);
//             div.append(conf);
//             div.append(script);
// setTimeout(() => {
//   var head = document.getElementsByTagName('head')[0]
//   var scripts = head.getElementsByTagName('script');
//   console.log('scriptsss', scripts)
//   if(scripts.length > 0){

//     console.log("scripts.", scripts);
//     for(let i=1; i<=scripts.length;i++)  console.log('scripts[i].parentNode', scripts[i].remove())
//   }else{
//     console.log('no')
//   }
  
// }, 10000);
           
//           }
//         // }
//       }
//   }, []);
  return (
    <footer className="footer-content">
      <section className="section1">
        <div className="logo">
          <Link to="index">Tap2Earn</Link>
        </div>
        <nav className="navFooter-content">
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/investments">Investment packages</Link>
            </li>
            <li>
              <Link to="/packages">Subcription packages</Link>
            </li>
            <li>
              <Link to="/referral-program">Referral program</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section2">
        <div className="s-block">
          <div className="link-soc">
            <Link className="ico02" to="#" target="_blank"></Link>
            <Link className="ico03" to="#" target="_blank"></Link>
            <Link className="ico04" to="#" target="_blank"></Link>
            <Link className="ico05" to="#" target="_blank"></Link>
          </div>
          <div className="copy">
            Copyright © 2021 Tap@Earn
            <Link to="en/client-agreement.html">Client agreement</Link>
          </div>
        </div>
        <div className="s-block">
          <p>
            If you have any questions about the service or have suggestions,
            write to us
          </p>
        </div>
        <div className="s-block">
          <Link to="#" target="_blank">
            Telegram Tap@Earn
          </Link>
          <p>
            Join our telegram channel there is a lot of useful information on
            investments
          </p>
        </div>
      </section>

      <div className="video" ref={bannerRef}></div>
    </footer>
  );
};

export default Footer;
