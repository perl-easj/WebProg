class ServerState {
    constructor() {
        this.stateA = 0;
        this.stateB = 0;
        this.stateC = 0;
    }
}

// This is the Web API
// /api/A :  Increment A
// /api/B :  Increment B
// /api/C :  Increment C
// /api/Reset :  Set all values to 0 (zero)
// /api/Get :  Get all values
class WebServiceAPI {
    constructor(prefix) {
        this.A = prefix + "/A";
        this.B = prefix + "/B";
        this.C = prefix + "/C";
        this.Reset = prefix + "/Reset";
        this.Get = prefix + "/Get";
    }
}

class RoutingHandler {
    static doRouting(url, wsAPI, aServerState) {
        // Routing
        if (url === wsAPI.A) {
            aServerState.stateA++;
        }
        if (url === wsAPI.B) {
            aServerState.stateB++;
        }
        if (url === wsAPI.C) {
            aServerState.stateC++;
        }
        if (url === wsAPI.Reset) {
            aServerState.stateA = 0;
            aServerState.stateB = 0;
            aServerState.stateC = 0;
        }
        else {
            // No action, includes "Get"
        }
    }
}

// Server setup
var http = require('http');
var theWsAPI = new WebServiceAPI("/api");
var theServerState = new ServerState();
var portNo = 1337;
var hostURL = '127.0.0.1';

http.createServer(function (req, res) {
    // Header setup
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Routing
    RoutingHandler.doRouting(req.url, theWsAPI, theServerState);

    // Send server state back to client
    res.end(JSON.stringify(theServerState)); 
}).listen(portNo, hostURL);
