import { React, useState, useEffect } from "react";

export default function PlayerInput(props) {
  const inputWord = props.playerOneWord;
  const [splittingWord, setSplittingWord] = useState(inputWord);

  const [hiddenString, setHiddenString] = useState([]);

  useEffect(() => {
    setSplittingWord(inputWord);
  }, [inputWord]);

  useEffect(() => {
    const words = splittingWord.split("");
    setHiddenString(words);
  }, [splittingWord]);

  return (
    <div>
      <div className="hidden-words">
        {hiddenString.map((data, i) => {
          return <p>{i % 2 === 0 ? data : "_"}</p>;
        })}
      </div>
      <div classname="message">
        {props.playerTwoWord === inputWord ? (
          <p>you win</p>
        ) : (
          <p>Find the word or die</p>
        )}
      </div>
    </div>
  );
}
