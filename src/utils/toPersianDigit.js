const numbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianDigit(text) {
  return text.toString().replace(/[0-9]/g, (w) => numbers[+w]);
}
