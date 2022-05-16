import axios from "axios";
import React, { useReducer, useState } from "react";
// import { useDispatch } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import swal from "sweetalert";
// import { handleLoginInput, loginAction } from "./_redux/Action/AuthAction";
// import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
import eye from '../../assets/img/eye.png';
import { useAuth } from "../../context/auth";
import { getIntendedUrl, getToken } from "../../utils/auth";
import Constants from "../../utils/constants";
import AuthServices from "../api/AuthServices";

const Login = () => {
  // const dispatch = useDispatch();
  let { setCurrentUser, setToken, authenticated } = useAuth();
  // console.log(`authenticated`, authenticated)

  const initAuth = () => {
    const access_token = getToken();
    // console.log('asdddddddd',access_token);
    return getToken()
      ? axios.get("/profile/view", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
      : Promise.resolve(null);
  };

  const [_error, _setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  if (authenticated) {
    // console.log(`authenticated>>>>>>>`, authenticated)
    history.push("/user-dashboard/index");
  }

  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      phone: "",
      password: "",
      passwordShow:true
    }
  );

  
  const inputChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    setstate({ [name]: value });
  };
  const inputSubmit = async (e) => {
    e.preventDefault();
    const inputData = {
      phone: state.phone,
      email: state.email,
      password: state.password,
    };
    // console.log(inputData);

    const res = await AuthServices.login(inputData);
    // console.log(`res,dadada`, res.data.status);
    if (res.data.status === Constants.ERROR) {
      swal({
        icon: "error",
        text: `${res.data.message}`,
        timer: 2000,
      });
    } else {
      setToken(res.data.token);
      initAuth().then((user) => {
        setCurrentUser(user);
        // setInitializ(false);
      });
      // setCurrentUser(res);
      // console.log(getIntendedUrl());
      history.push(getIntendedUrl());
      swal({
        icon: "success",
        text: "Login Success",
        timer: 2000,
      });
      //   console.log(`res`, res)
    }
  };

  return (
    <section className="authPage-content">
      <div className="authLink-page">
        <NavLink className="active" to="login">
          Login
        </NavLink>
        <NavLink to="register">Sign Up</NavLink>
      </div>

      <form
        className="login-form"
        autoComplete="off"
        autoSave="off"
        onSubmit={inputSubmit}
      >
        <div className="authForm-content">
          <div className="authForm-field">
            <label>Phone number</label>
            <input
              type="number"
              name="phone"
              required=""
              autoComplete="phone"
              autoFocus=""
              placeholder="Your phone"
              value={state.phone}
              onChange={inputChange}
            />
          </div>
          <div className="authForm-field">
            <label>Password</label>
            <input
              id="password"
              type={state.passwordShow ? "password" : "text"}
              className="form-control"
              placeholder="Your password in the system"
              name="password"
              onChange={inputChange}
              autoComplete="current-password"
              value={state.password}
        
            />
            <img className="eye" src={eye} onClick={()=>setstate({passwordShow:!state.passwordShow})} alt="eye"/>
          </div>
          {/* <div className="authForm-link"> */}
          {/* <Link to="/password-reset">Forgot your password?</Link>
          </div> */}
          <button type="submit">
            <span>Login</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
