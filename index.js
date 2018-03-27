const welcome = require('./welcome'); //including a module that is a file within your program
const http = require('http'); //including a core module example
const app = require('express'); //including third-party module example


http.createServer(function(request, response){

    if((request.url === "/" ) && (request.method ==="GET")){


    }


}).listen(3000);



