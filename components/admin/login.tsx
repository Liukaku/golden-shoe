import Router from "next/router";
import React, { FormEventHandler, useContext, useState } from "react";
import { useRef } from "react";
import { logIn } from "../../firebase/db";
import { CTX } from "../util/ctx";

const Login = ({ blok }: any) => {
  const [logInErr, updateLogInErr] = useState<boolean | null>(null);
  const [loginAuth, updateAuth] = useContext(CTX);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current !== null && passRef.current !== null) {
      console.log(emailRef.current.value);
      console.log(passRef.current.value);
      logIn(emailRef.current.value, passRef.current.value)
        .then((res: any) => {
          console.log(res);
          updateAuth({ accessToken: res.user.accessToken });
          Router.push("/admin/newproduct");
        })
        .catch((err) => {
          console.log(err);
          updateLogInErr(true);
        });
    }
  };

  return (
    <div className="w-8/12 mx-auto text-center mt-32">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
        className="w-4/12 mx-auto text-center bg-zinc-100 py-5 px-5"
      >
        <h1 className="text-3xl robotoBlack">Admin Login</h1>
        <p className="w-full text-left">Email:</p>
        <input
          ref={emailRef}
          type="text"
          className="mt-2 w-full py-2 text-sm border border-black"
        ></input>
        <p className="w-full text-left mt-2">Password:</p>
        <input
          ref={passRef}
          type="password"
          className="mt-2 w-full py-2 text-sm border border-black"
        ></input>
        <button
          type="submit"
          className="my-2 bg-black w-full text-white robotoBold py-2"
        >
          Submit
        </button>
      </form>
      {logInErr ? <p>There has been an error logging you in</p> : ""}
    </div>
  );
};

export default Login;
