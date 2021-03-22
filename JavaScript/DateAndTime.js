// creates a Date object for the current date and time when no argument is passed

let currentDateTime = new Date();
console.log(currentDateTime);

// to extract day of the month according to local time
console.log(currentDateTime.getDate());

// to extract day of the week according to local time
console.log(currentDateTime.getDay());

// to extract year of specified date according to local time
console.log(currentDateTime.getFullYear());

// to extract month(Jan: 0, Dec: 11) from specified date according to local time
console.log(currentDateTime.getMonth());

// to extract hours (0 to 23) from specified date according to local time
console.log(currentDateTime.getHours());

// to extract minutes (0 to 59) from specified date according to local time
console.log(currentDateTime.getMinutes());

// to extract seconds (0 to 59) from specified date according to local time
console.log(currentDateTime.getSeconds());

// to extract milliseconds (0 to 59) from specified date according to local time
console.log(currentDateTime.getMilliseconds());

// to extract the number of milliseconds between midnight of January 1, 1970 and the specified date
console.log(currentDateTime.getTime());

// to get difference between UTC and local time in minutes
console.log(currentDateTime.getTimezoneOffset());

// returns the number of milliseconds since 1970/01/01
console.log(Date.now());

let timeElapsed = Date.now();
let today = new Date(timeElapsed);

// to get today's date as a string in human readable format
console.log(today.toDateString());

// to get current time as a string  in human readable format
console.log(today.toTimeString());

// to get Date object as a Stringin the ISO standard
console.log(today.toISOString());

// to get the date as string in a locality-sensitive format
console.log(today.toLocaleDateString());

// to get time as string in a locality-sensitive format
console.log(today.toLocaleTimeString());