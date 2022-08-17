const dotAnim = (setState) => {
  let count = 1;
  setInterval(() => {
    setState(".".repeat(count));
    count = count < 3 ? count + 1 : 1;
  }, 1000);
};
export default dotAnim;
