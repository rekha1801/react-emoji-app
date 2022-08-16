import React from "react";
import EmojiItem from "./EmojiItem";

export default function EmojisContainer({data}) {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {data.map((emoji, index) => {
        return <EmojiItem key = {index} symbol={emoji.symbol} />;
      })}
    </div>
  );
}
