import React, { useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/images/Group 1999.png";
import profile from "../Assets/images/User.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../Redux/loginAuth/Actions";
import { usertoken } from "../APIs/RESTapi";

const Login = () => {
  const Dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    usertoken(data);

    // Dispatch(LoginAction(userdetails));
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="logo">
          <img src={Logo} alt="" />
          <p className="text-sm mb-2 mt-2">
            Providing affordable one-step payment solutions across the globe to
            support growing businesses
          </p>
        </div>
        <form className="userinfo" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-lg font-medium">Login</h1>
          <div className="login-input">
            <img src={profile} alt="" />
            <input
              type="text"
              className="block"
              placeholder="Email"
              {...register("username", { required: "Email is required" })}
            />
            <p className="alert">{errors.userEmail?.message}</p>
          </div>
          <div className="login-input">
            <FaLock />
            <input
              type="password"
              className="block"
              placeholder="Password or pin"
              {...register("password", {
                required: "Password or Pin is required",
              })}
            />
            <p className="alert">{errors.password?.message}</p>
          </div>
          <div className="check">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
