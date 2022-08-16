import React from "react";

export default function EmojiItem(props) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        boxShadow: "2px 5px 5px gray",
        border: "2px solid gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20%",
        fontSize: "40px",
        margin: "20px"
      }}
    >
      {props.symbol}
    </div>
  );
}
