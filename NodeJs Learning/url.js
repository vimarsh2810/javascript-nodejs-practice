var url = require('url')
var queryString = require('querystring')
var myUrl = new URL('http://localhost:8080/default.htm?id=62&name=Vimarsh')
console.log(queryString.parse(myUrl))