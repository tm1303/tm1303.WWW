var server=require('node-http-server');

server.onRequest=onRequest;


function onRequest(request){
//console.log(request);
}


server.deploy(
	{
		port:5000,
		root:'~/www/public/',
		log         : true
        //logFunction : serverLogging,
	}
);