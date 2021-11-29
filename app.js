var http = require('http');

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
   var url = req.url;
   var dateVal = new Date();
   if(url ==='/'){
    res.write(`<h1>Home Page</h1>
    <ul>
    <li><a href="/Monday">Monday</a></li>
    <li><a href="/Tuesday">Tuesday</a></li>
    <li><a href="/Wednesday">Wednesday</a></li>
    <li><a href="/Thursday">Thursday</a></li>
    <li><a href="/Friday">Friday</a></li>
    <li><a href="/Saturday">Saturday</a></li>
    <li><a href="/Sunday">Sunday</a></li>
    </ul>`);
    res.end();
   }
 else if(url ==='/Monday'){
    res.write('<h1>You clicked Monday and current time is <h1>'+dateVal.toISOString()); //write a response
    res.end(); 
 }else if(url ==='/Tuesday'){
    res.write('<h1>You clicked Tuesday and current time is <h1>'+dateVal.toISOString()); //write a response
    res.end(); 
 }else if(url ==='/Wednesday'){
    res.write('<h1>You clicked Wednesday and current time is <h1>'+dateVal.toISOString()); //write a response
    res.end(); 
 }
 else if(url ==='/Thursday'){
    res.write('<h1>You clicked Thursday and current time is <h1>'+dateVal.toISOString()); //write a response
    res.end(); 
 }else if(url ==='/Friday'){
    res.write('<h1>You clicked Friday and current time is <h1>'+dateVal.toISOString()); //write a response
    res.end(); 
 }else if(url ==='/Saturday'){
    res.write('<h1>You clicked Saturday and current time is <h1>'+dateVal.toISOString()); //write a response
    res.end(); 
 }
 else if(url ==='/Sunday'){
   res.write('<h1>You clicked Sunday and current time is <h1>'+dateVal.toISOString()); //write a response
   res.end(); 
}
 else{
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
