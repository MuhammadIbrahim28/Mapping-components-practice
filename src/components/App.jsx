import React from "react";
import emojipedia from "../emojipedia";
import Entery from "./Entery";

function CreateEntery(emojiTerm) {
  return (
    <Entery
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(CreateEntery)}</dl>
    </div>
  );
}
export default App;
