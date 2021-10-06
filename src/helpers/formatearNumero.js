export const formatearNumero = (num) => {
  let formattedNum = num;
  formattedNum = formattedNum
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  formattedNum = formattedNum.split("").reverse().join("").replace(/^[.]/, "");
  return formattedNum;
};
