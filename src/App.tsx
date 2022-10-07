import { TinyColor } from "@ctrl/tinycolor";
import { useEffect, useState } from "react";
import "./assets/style/app.scss";
import ColorBox from "./components/box/ColorBox";
import GuessButton from "./components/button/GuessButton";
import { checkAnswer } from "./utils/checkAnswer";
import { generateColor } from "./utils/generateColor";

const App = () => {
  const [answer, setAnswer] = useState<string>("");
  const [guess, setGuess] = useState<boolean>(true);
  const [answerList, setAnswerList] = useState<string[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setAnswer(generateColor());
  }, []);

  useEffect(() => {
    const colorList = new Array(2).fill(0).map(() => generateColor());
    setAnswerList([answer, ...colorList].sort(() => Math.random() - 0.5));
  }, [answer]);

  const resetGame = () => {
    setAnswer(generateColor());
    setButtonDisabled(false);
    setGuess(true);
    setScore(0);
  };

  return (
    <div className="app">
      <div className="box">
        <ColorBox
          score={score}
          color={answer}
          guess={guess}
          playAgain={resetGame}
          isDark={new TinyColor(answer).isDark()}
        />
        <div className="answersBox">
          {answerList?.map((color) => {
            return (
              <GuessButton
                onClick={() => {
                  // setAnswer(generateColor());
                  if (checkAnswer(color, answer)) {
                    setAnswer(generateColor());
                    setScore(score + 1);
                  } else {
                    setGuess(false);
                    setButtonDisabled(true);
                  }
                }}
                key={color}
                name={color}
                disabled={buttonDisabled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
