import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-violet-950 hover:bg-violet-800 hover:border-violet-200 border-violet-400 border-solid shadow-2xl duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
