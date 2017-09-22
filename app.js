// simple Node.js server 
 const http = require('http'); // ES 2015 syntax using const instead of var // http is a module in npm
 const fs = require('fs'); // to read a specific file when server starts 
 const hostname = '127.0.0.1'; // localhost
 const port = 3000;
 fs.readFile('index.html', (err, html)=>{
	 
	 if (err){
		 
		 throw err;
	 }
	 
	 const server = http.createServer((req, res) => {  // if no error we will start the server
	       res.statusCode= 200;
	       res.setHeader('Content-type', 'text/html');
	       res.write(html);
	       res.end();
	});

	 server.listen(port, hostname, () =>{
		 console.log('server started on port '+ port);
		 
	 });
 });
