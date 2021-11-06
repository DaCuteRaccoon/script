var d = new Date
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// For example, to get the month, we would do months.at(d.getMonth())
// Also months[d.getMonth()] would work, it's probably easier to read and debug

function refreshDate() {
  d = new Date
  console.log('Successfully refreshed date!')
}

var betterdates = {
  year: {
    string: String(d.getFullYear()),
    num: d.getFullYear(),
  },
  month: {
    string: months[d.getMonth()],
    num: d.getMonth(),
  },
  date: {
    string: String(d.getDate()),// Work on adding something like 1st, 2nd, 3rd, 4th, 5th, etc.
    num: d.getDate(),
  },
  day: {
    string: days[d.getDay()],
    num: d.getDay(),
  },
  hour: {
    string: String(d.getHours()),// Work on something like 3 AM, or merge with minutes and seconds and maybe even milliseconds to do 4:30:16:500 PM, for example...
    num: d.getHours(),
  },
  minute: {
    string: String(d.getMinutes()),// Work on merging with betterdates.hour
    num: d.getMinutes(),
  },
  second: {
    string: String(d.getSeconds()),// Work on merging with betterdates.hour
    num: d.getSeconds(),
  },
  millisecond: {
    string: String(d.getMilliseconds()),// Work on merging with betterdates.hour
    num: d.getMilliseconds,
  },
};
