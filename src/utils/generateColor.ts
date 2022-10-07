const generateNumber = () => {
  const number = Math.round(Math.random() * 255) + 1;
  return number;
};

export const generateColor = () => {
  const colorList = new Array(3).fill(0).map(() => generateNumber());
  const colorCode = `rgb(${colorList.join(",")})`;
  return colorCode;
};
