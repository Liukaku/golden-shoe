import React, { useState } from "react";

const ContactForm = ({ blok }: any) => {
  const [emailStatus, updateStatus] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateStatus("Email Sent");
  };

  return (
    <div className="md:w-5/12 w-11/12 my-5 mx-auto">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        {blok.Form.map((option: any) => {
          console.log(option);
          return (
            <div key={option._uid}>
              <h1 className="robotoBold">{option.Title} :</h1>
              {option.Title === `Details` ? (
                <textarea
                  required
                  className="mt-2 w-full py-2 text-sm border border-black"
                ></textarea>
              ) : (
                <input
                  required={
                    option.Title === `Order No. (If applicable)` ? false : true
                  }
                  className={`mt-2 w-full py-2 text-sm border border-black`}
                  type={"textbox"}
                />
              )}
            </div>
          );
        })}
        <h1 className="robotoMedium">{emailStatus}</h1>
        <button
          type="submit"
          className="bg-black text-white robotoBold w-full py-3 my-3"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
