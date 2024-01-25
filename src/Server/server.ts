const http : any = require ( "http" )
const app : any = require ( "./app" )
const server :any = http.createServer( app )
server.listen( 7777, () => console.log( "server on 7777" ) )
