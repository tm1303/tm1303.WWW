var server=require('node-http-server');

server.deploy(
	{
		port:5005,
		root:'./public'
	}
);