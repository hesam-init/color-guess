import PlayAgainButton from "../button/PlayAgainButton";
import style from "./index.module.scss";

interface props {
  color: string;
  score: number;
  guess: boolean | undefined;
  playAgain: any;
  isDark: boolean;
}

const ColorBox = ({ color, guess, playAgain, score, isDark }: props) => {
  return (
    <div style={{ background: color }} className={style.colorBox}>
      {guess === false && (
        <div className={style.wrongBox}>
          <h1 style={{ color: isDark ? "white" : "black" }}>Wrong Answer</h1>
          <PlayAgainButton
            onClick={() => {
              playAgain();
            }}
          />
        </div>
      )}

      {guess === true && (
        <div className={style.scoreBox}>
          <h1 style={{ color: isDark ? "white" : "black" }}>Score : {score}</h1>
        </div>
      )}
    </div>
  );
};

export default ColorBox;
