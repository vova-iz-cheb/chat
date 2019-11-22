export function formatDate(timestamp: Date): string {
  const d = new Date(timestamp);
  const date = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();
  const monthArr = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  const month = monthArr[d.getMonth()];
  const hours = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
  const minutes = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
  const seconds = d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds();
  return `${date} ${month} ${hours}:${minutes}:${seconds}`;
}