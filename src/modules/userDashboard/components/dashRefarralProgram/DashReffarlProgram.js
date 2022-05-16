import React, { useEffect, useReducer } from 'react';
import AuthServices from '../../../../components/api/AuthServices';
import { useAuth } from '../../../../context/auth';

const DashReffarlProgram = () => {
    const [state, setState] = useReducer((state, newState)=>({...state,...newState}),{
        value: '',
        copied: false,
        ref_profit:0,
        referrals:0

    })

    const {currentUser} = useAuth();
    const uid = currentUser.data.data.uid

    const getRefer = async () => {
        let res = await AuthServices.user();
        console.log(`resgetMyCurrentInvest`, res.data);
        setState({ ref_profit: res.data.referral_balance , referrals: res.data.count_referred_user});
      };
    
      useEffect(() => {
        getRefer();

      }, []);

    const copyFunction = ()=>{
        var copyText = document.getElementById("important-message");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        setState({
            value:copyText.value,
            copied: true
        })
    }
    return (
        <React.Fragment>
            <div className="page-title">
                <h2>Referral Program</h2>
            </div>
            <div className="content">
                <div className="account-refInfo">
                    <div className="item">
                        <div className="wh-block">
                            <div className="title-block line">
                                <h3 className="ico02">Referrals info</h3>
                                <div className="ref-status ">Offline </div>
                            </div>
                            <div className="refData">
                                <div className="item">
                                    <span>Total profit</span>
                                    <p>$ {state.ref_profit}</p>
                                </div>
                                <div className="item">
                                    <span>Referrals</span>
                                    <p className="v2">{ state.referrals}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="green-ref-block">
                            <div className="copy-refLink-title">
                                <h3>This is your referral link</h3>
                                <p>Share it with people and attract them to get bonuses</p>
                            </div>
                            <div className="copy-refLink">
                                <input className="important-message" id="important-message" type="text" value={`https://tap2earn.net/register?ref=${uid}`} />
                                <p>{`https://tap2earn.net/register?ref=${uid}`}</p>
                                <button id="btnCopyAdress"
                                onClick={copyFunction}
                                    // onClick={() => setState({
                                    //     value: `http://localhost:3000/register?ref=${uid}`,
                                    //     copied: true
                                    // })}
                                ><span>{state.copied === false ? "Copy" : "Address Copied"}</span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wh-block">
                    <div className="title-block">
                        <h3 className="no-ico">Referral statistic</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashReffarlProgram;