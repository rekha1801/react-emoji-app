import React, { useState } from "react";
import emojis from "../json/emoji.json";
import EmojisContainer from "./EmojisContainer";

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  function handleSearch(event) {
    setSearchText(event.target.value);
    const newData = emojis.filter(
      (emoji) =>
        emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
        emoji.keywords.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(newData);
  }

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <input
        onChange={handleSearch}
        value={searchText}
        placeholder={"Search Text"}
        type="text"
        name="search"
        style={{
          fontSize: "20px",
          borderRadius: "10px",
          width: "30%",
          textAlign: "center",
        }}
      />

      {data ? (
        <EmojisContainer data={data} />
      ) : (
        <EmojisContainer data={emojis} />
      )}
    </div>
  );
}
