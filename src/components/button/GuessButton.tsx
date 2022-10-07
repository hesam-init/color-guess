import React from "react";
import style from "./index.module.scss";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
  name: string;
}

const GuessButton = (props: ButtonProps) => {
  const { specialProp, ...rest } = props;
  return (
    <button className={style.guessButton} {...rest}>
      {props.name}
    </button>
  );
};

export default GuessButton;
