import React, { useReducer, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
import eye from '../../assets/img/eye.png';
import Constants from "../../utils/constants";
import AuthServices from "../api/AuthServices";

const Registration = () => {
  const location = useLocation();
  const history = useHistory();
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      binance_id: "",
      phone: "",
      country: "",
      referred_by: location.search.split("ref=")[1]
        ? location.search.split("ref=")[1]
        : "",

      errors: { name: "", password: "", phone: "", country: "" },
      error:false,
      passwordShow:true,
      passwordShowConfirm:true
    }
  );
  


  //    console.log(`state.referred_by`, state.referred_by)

  const inputChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    setstate({ [name]: value });
  };

  const validation = (value) => {
    //  if()
    let data = {};

    if (
      !value.name ||
      !value.password ||
      value.password.lenght < 8 ||
      !value.phone ||
      !value.country
    ) {
      // state.error.push("")
      setstate({
        error:true,
        errors: {
          name: !value.name ? "Name can not be empty" : "",
          password:
            value.password.lenght < 8
              ? "Password needed to be 8 charecter"
              : "",
          phone: !value.phone ? "Phone can not be empty" : "",
          country: !value.country ? "Country can not be empty" : "",
        },
      });
      return false;
    }
    return value
    // console.log("data", value);
  };

  console.log("state.error", state.errors);
  const inputSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      name: state.name,
      email: state.email,
      password: state.password,
      password_confirmation: state.password_confirmation,
      binance_id: state.binance_id,
      phone: state.phone,
      referred_by: state.referred_by,
      country: state.country,
    };

    let data = validation(inputData);
    // console.log("dasdasd",data);

    if(!data){
      swal({
        icon: "error",
        text: "Fill up all the required fields",
        timer: 2000,
      });
    }
    else{

      const res = await AuthServices.Register(inputData);
      // console.log(`res`, res.errors.phone);
      if (res.status == Constants.SUCCESS) {
        history.push("/login");
        swal({
          icon: "success",
          text: "Registration Success",
          timer: 2000,
        });
        // console.log(`res`, res)
      }else if(res?.errors?.phone){
        swal({
          icon: "error",
          text: res.errors.phone[0],
          timer: 2000,
        });
      } else {
        swal({
          icon: "error",
          text: res.message,
          timer: 2000,
        });
      }
    }
  };
  return (
    <section className="authPage-content">
      <div className="authLink-page">
        <NavLink to="login">Login</NavLink>
        <NavLink className="active" to="register.html">
          Sign Up
        </NavLink>
      </div>

      <form onSubmit={inputSubmit}>
        {/* <input type="hidden" name="_token" value="87pC4flEI9cFNQ6CmFAKme8KeB9KhUh4cneAIice" /> */}
        <input type="hidden" name="ref" value="" />
        <div className="authForm-content">
          <div className="authForm-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={inputChange}
              value={state.first_name}
              placeholder="Your username"
            />
            <label className="error">{state.errors.name? "Name can not be empty":""}</label>
          </div>

          <div className="authForm-field">
            <label>Email(optional)</label>
            <input
              name="email"
              type="email"
              onChange={inputChange}
              value={state.email}
              placeholder="Your email"
            />
            {/* <label className="error">Email can not be empty</label> */}
          </div>
          <div className="authForm-field">
            <label>Password</label>
            <input
               type={state.passwordShow ? "password" : "text"}
              name="password"
              onChange={inputChange}
              value={state.password}
              placeholder="Your password"
            />
             <img className="eye" src={eye} onClick={()=>setstate({passwordShow:!state.passwordShow})} alt="eye"/>
            <label className="error">{state.errors.password ? "Password needed to be 8 charecter":""}</label>
          </div>
          <div className="authForm-field">
            <label>Password confirmation</label>
            <input
               type={state.passwordShowConfirm ? "password" : "text"}
              name="password_confirmation"
              onChange={inputChange}
              value={state.password_confirmation}
              placeholder="Repeat password"
              required=""
            />
             <img className="eye" src={eye} onClick={()=>setstate({passwordShowConfirm:!state.passwordShowConfirm})} alt="eye"/>
          </div>
          <div className="authForm-field">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              onChange={inputChange}
              value={state.phone}
              placeholder="Your phone"
            />
            <label className="error">{state.errors.phone? "Phone can not be empty":""}</label>
          </div>
          <div className="authForm-field">
            <label>Reffered Id</label>
            <input
              type="text"
              name="binance_id"
              onChange={inputChange}
              value={state.referred_by}
              placeholder="Reffered Id"
            />
          </div>

          <div className="authForm-field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              onChange={inputChange}
              value={state.country}
              placeholder="Your country"
            />
            <label className="error">{state.errors.country?"Country can not be empty":""}</label>
          </div>
          <div className="authForm-field">
            <label>Binance_id(optional)</label>
            <input
              type="text"
              name="binance_id"
              onChange={inputChange}
              value={state.binance_id}
              placeholder="Your binance_id"
            />
          </div>
          <button type="submit">
            <span>Create an account</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
