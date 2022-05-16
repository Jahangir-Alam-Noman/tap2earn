import axios from 'axios';
import React, { useReducer } from 'react';
import swal from 'sweetalert';
import style from '../../../../assets/css/withdraw.module.css';
const Message = () => {


    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            objection:""
        }
      );
      

    const sendMessage = async()=>{
        console.log(`hi`, state.message)
        let url = '/objection';
        const res = await axios.post(url,{objection:state.objection}).then(respose=>{
            return respose.data;
        }).catch(error=>{
            return error;
        })
        // console.log(`res`, res.message)

        if (res.message === "Objection Posted Successfully") {
            swal({
              icon: "success",
              text: "Objection Posted Successfully",
              timer: 2000
            });
         setState({ objection:""})
          }else{
            swal({
              icon: "error",
              text: "Unsuccessful",
              timer: 2000
            });
        
          }
        return res;
    }
    
    return (
        <React.Fragment>
            <div className="page-title">
                <h2>Message</h2>
            </div>

            <div className="home-section">

                <div className="item items">
                    <div className="wh-block default__hover">
                        <div className="title-block line">
                            <h3 className="investment_earn_bg">Send messasge to Admin</h3>
                        </div>
                        <div className="home-referralInfo home-referralInfoss">
                            <div className="item items">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className={`${style.inputField}`}>
                                            <input type="text" className={`${style.inputMessage}`} value={state.objection} onChange={(e)=>setState({objection:e.target.value})} name="objection" placeholder='Write message'/> 
                                            <button value="Send" name='submit' className={`${style.buttonInput}`} onClick={sendMessage}> Send</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Message;