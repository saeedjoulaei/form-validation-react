import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isaccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  const changeHandler = (e) => {
    if (e.target.name === "isaccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!Object.keys(errors).length) {
      notify("You signed up successfully", "success");
    } else {
      notify("Invalid data", "failed");
      setTouched({
        name: true,
        password: true,
        confirmpassword: true,
        email: true,
        isaccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Sign up</h2>

        <div className={styles.formField}>
          <label>name</label>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div className={styles.formField}>
          <label>password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmpassword && touched.confirmpassword
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="confirmpassword"
            value={data.confirmpassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmpassword && touched.confirmpassword && (
            <span>{errors.confirmpassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              type="checkbox"
              name="isaccepted"
              value={data.isaccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>

          {errors.isaccepted && touched.isaccepted && (
            <span>{errors.isaccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <a href="#">login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
