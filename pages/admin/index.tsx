import React from "react";
import { useRef } from "react";
import { logIn } from "../../firebase/db";

export const index = () => {
  const emailEl = useRef<HTMLInputElement>(null);
  const passEl = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (emailEl.current !== null && passEl.current !== null) {
      console.log(emailEl.current.value);
      console.log(passEl.current.value);
      logIn(emailEl.current.value, passEl.current.value)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <input type="text" ref={emailEl}></input>
        <input type="password" name="" id="" ref={passEl} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default index;
