export default () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weekList = new Array(
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토"
  );
  const week = weekList[now.getDay()];
  const time = now.getTime();

  const dateInfo = {
    month,
    date,
    week,
    time
  }
  return dateInfo
}
