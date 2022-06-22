import React from "react";

interface ParaBlok {
  content: Array<ParaObj>;
  type: string;
}

interface ParaObj {
  text: string;
  type: string;
}

export const TextBox = ({ blok }: any) => {
  return (
    <div className="">
      {blok.TextBox.content.map((content: ParaBlok) => {
        return (
          <div
            className={`w-8/12 text-md mx-auto mt-5 ${
              content.type === "heading" ? `robotoBold text-2xl` : ``
            }`}
          >
            {content.content[0].text}
          </div>
        );
      })}
    </div>
  );
};

export default TextBox;
