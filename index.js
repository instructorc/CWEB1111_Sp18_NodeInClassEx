const welcome = require('./welcome'); //including a module that is a file within your program
const http = require('http'); //including a core module example
const app = require('express'); //including third-party module example
const data = require('./top_2018_movies');


const PORT = 3000;

let server = http.createServer(function(request, response){

    if((request.url === "/" ) && (request.method ==="GET")){ //Creating a route
            response.statusCode = 500;
            response.write("<h1> This is the index page</h1>");
            response.end();

    }else 
    if(request.url === "/chris"  && request.method ==="GET"){
        response.statusCode = 200;
       
        response.write("<h2> These are all the movies</h2>");
        data.forEach(x => response.write(x.movie + "\n"));
        response.end();

    }else{
        console.log("invalid route");
        response.end("404 page, you requested a page that doesn't exist");
    }


});

server.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
});



