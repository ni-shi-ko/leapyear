function leapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2021;
if (leapYear(checkYear)) {
  console.log(checkYear + "年はうるう年です");
} else {
  console.log(checkYear + "年はうるう年ではありません");
}