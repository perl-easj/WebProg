class ServerState {
    constructor() {
        this.stateA = 0;
        this.stateB = 0;
        this.stateC = 0;
    }
}

class RoutingHandler {
    static doRouting(url, aServerState) {
        // Routing
        if (url === "/A") {
            aServerState.stateA++;
        }
        if (url === "/B") {
            aServerState.stateB++;
        }
        if (url === "/C") {
            aServerState.stateC++;
        }
        else {
            // No action
        }
    }
}

// Server setup
var http = require('http');
var theServerState = new ServerState();
var portNo = 1337;
var hostURL = '127.0.0.1';

http.createServer(function (req, res) {
    // Header setup
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Routing
    RoutingHandler.doRouting(req.url, theServerState);

    // Send server state back to client
    res.end(JSON.stringify(theServerState)); 
}).listen(portNo, hostURL);
