import React from "react";
import EmojisContainer from "./components/EmojisContainer";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import emojis from "./json/emoji.json";

function App() {
 

  return (
    <div className="App">
     <Header/>  
     <SearchInput />
     <EmojisContainer data={emojis}/>
    </div>
  );
}

export default App;
