import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  let provider = new GoogleAuthProvider();
  function login(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form className="form" onSubmit={login}>
      <button>
        <FcGoogle /> signIn with Google
      </button>
    </form>
  );
};

export default Login;
