import React, { useState } from "react";
import getDateToday from "../date";
import "./Home.css";

const Home = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [dumps, setDumps] = useState<string[]>([]);

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputVal !== "") resetInput();
  };

  const onSave = () => {
    console.log(getDateToday(), dumps);
  };

  const onEnter = () => {
    if (inputVal !== "") resetInput();
  };

  const onInputValChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.currentTarget.value);
  };

  const resetInput = () => {
    setDumps([...dumps, inputVal]);
    setInputVal("");
  };

  return (
    <>
      <div className="home">
        <p>What's on your mind? Lay it on me...</p>
        <div className="input-container">
          <input
            onChange={onInputValChange}
            onKeyDown={keyPress}
            value={inputVal}
          ></input>
          <div className="enter-button" onClick={onEnter}>
            {">"}
          </div>
        </div>
        <Dumps dumps={dumps} />
        <button className="save-button" onClick={onSave}>
          Archive these pesky thoughts...
        </button>
      </div>
    </>
  );
};

export default Home;

const Dumps = ({ dumps }: { dumps: string[] }) => {
  return (
    <ul className="dump-list">
      {dumps.map((dump, index) => {
        return <li key={`dump-${index}`}>{dump}</li>;
      })}
    </ul>
  );
};
