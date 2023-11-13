const getTodayDate = () => {
  const initDate = new Date();
  let yyyy = initDate.getFullYear();
  let mm = initDate.getMonth() + 1;
  mm = mm < 10 ? "0" + mm : mm;
  let dd = initDate.getDate();
  dd = dd < 10 ? "0" + dd : dd;
  return `${yyyy}-${mm}-${dd}`;
};

export { getTodayDate };
