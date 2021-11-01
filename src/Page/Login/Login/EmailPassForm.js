import React from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const EmailPassForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
      console.log("login");
    } else {
      registerNewUser(email, password);
      console.log("new user");
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  return (
    <div className="mx-5">
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary my-3">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                onBlur={handleNameChange}
                className="form-control"
                id="inputName"
                placeholder="Your Name"
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onBlur={handlePasswordChange}
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
       <div className="d-flex align-items-center justify-content-center mb-3"> <button type="submit" className="btn btn-primary text-center">
          {isLogin ? "Login" : "Register"}
        </button></div>
      </form>
    </div>
  );
};

export default EmailPassForm;
