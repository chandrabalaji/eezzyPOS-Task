import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/images/Group 1999.png";
import profile from "../Assets/images/User.png";
import { useDispatch } from "react-redux";
import { AddUserinfo } from "../features/user/loginSlice";



const Login = () => {
  const Dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    Dispatch(
      AddUserinfo({
        email: data.userEmail,
        Token: data.password,
      })
    );
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="logo">
          <img src={Logo} alt="" />
          <p>
            Providing affordable one-step payment solutions across the globe to
            support growing businesses
          </p>
        </div>
        <form className="userinfo" onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="login-input">
            <img src={profile} alt="" />
            <input
              type="text"
              className="block"
              placeholder="Email"
              {...register("userEmail", { required: "Email is required" })}
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
