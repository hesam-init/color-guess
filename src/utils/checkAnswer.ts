export const checkAnswer = (answer: string, guess: string) => {
  if (answer === guess) {
    return true;
  } else {
    return false;
  }
};
