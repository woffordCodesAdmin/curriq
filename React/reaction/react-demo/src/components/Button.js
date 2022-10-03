import React from "react";
export default function Button({ color, text }) {
  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: color, color: "white" }}
      >
        {text}
      </button>
    </>
  );
}
