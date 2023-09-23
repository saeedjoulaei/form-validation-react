import React, { useEffect, useState } from "react";
import { validate } from "./validate";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isaccepted: false,
  });
  const changeHandler = (e) => {
    if (e.target.name === "isaccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data]);
  return (
    <div>
      <form>
        <h2>Sign up</h2>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>I accept terms of privacy policy</label>
          <input
            type="checkbox"
            name="isaccepted"
            value={data.isaccepted}
            onChange={changeHandler}
          />
        </div>
        <div>
          <a href="#">login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
