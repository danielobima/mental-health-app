/** A function to compare dates
 * @param {Date} date1
 * @param {Date} date2
 */
const CompareDate = (date1, date2) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export default CompareDate;
