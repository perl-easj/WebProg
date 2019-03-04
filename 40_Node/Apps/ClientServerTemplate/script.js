class WebServiceAPI {
    constructor(prefix) {
        this.A = prefix + "/A";
        this.B = prefix + "/B";
        this.C = prefix + "/C";
        this.Reset = prefix + "/Reset";
        this.Get = prefix + "/Get";
    }
}


class ClientUIManager {
    constructor(aUITextGenerator) {
        this.uiTextGenerator = aUITextGenerator;
    }
    
    // Sets up the event handlers for the three buttons in the UI.
    setupEventHandlers(aServerConnection, handlerA, handlerB, handlerC, handlerReset) {
        this.setupButtonOnClickHandler('#buttonA', () => 
        { 
            aServerConnection.executeA(handlerA); 
        });
        this.setupButtonOnClickHandler('#buttonB', () => 
        { 
            aServerConnection.executeB(handlerB); 
        });
        this.setupButtonOnClickHandler('#buttonC', () => 
        { 
            aServerConnection.executeC(handlerC); 
        });
        this.setupButtonOnClickHandler('#buttonReset', () => 
        { 
            aServerConnection.executeReset(handlerReset); 
        });
    }

    // Helper method for updating a specific text element.
    updateStatusText(selector, text) {
        var elem = document.querySelector(selector);
        elem.innerHTML = text;
    }

    // Helper method for setting up a specific onClick event handler.
    setupButtonOnClickHandler(selector, handler) {
        var button = document.querySelector(selector);
        button.onclick = handler;
    }
}

class ServerConnection {
    constructor(serverURL, wsAPI) {
        this.serverURL = serverURL;
        this.wsAPI = wsAPI;
    }

    // maps user actions to Web API
    executeA(handler) { this.executeCmd(this.wsAPI.A, handler); }
    executeB(handler) { this.executeCmd(this.wsAPI.B, handler); }
    executeC(handler) { this.executeCmd(this.wsAPI.C, handler); }
    executeReset(handler) { this.executeCmd(this.wsAPI.Reset, handler); }
    executeGet(handler) { this.executeCmd(this.wsAPI.Get, handler); }

    // Performs the actual execution of a Web API function
    // It is assumed that the response represents the
    // (possibly updated) state of the server. 
    async executeCmd(url, handler) {
        var fullURL = this.serverURL + url;
        var resp = await fetch(fullURL);
        var obj = await resp.json();
        handler(obj);
    }
}

class ClientLauncher {
    static launch(aServerURL, aWsAPI) {
        // Sets up server connection
        var theServerConnection = new ServerConnection(aServerURL, aWsAPI);     
        var theClientUIManager = new ClientUIManager();

        // Sets up handlers, which will be activated when a response
        // from invoking a Web API function is received.
        var handlerA = (obj) => { theClientUIManager.updateStatusText("#statusA", "A is now " + obj.stateA); };
        var handlerB = (obj) => { theClientUIManager.updateStatusText("#statusB", "B is now " + obj.stateB); };
        var handlerC = (obj) => { theClientUIManager.updateStatusText("#statusC", "C is now " + obj.stateC); };
        var handlerReset = (obj) => { 
            theClientUIManager.updateStatusText("#statusA", "A is now " + obj.stateA); 
            theClientUIManager.updateStatusText("#statusB", "B is now " + obj.stateB); 
            theClientUIManager.updateStatusText("#statusC", "C is now " + obj.stateC); 
        };

        // Tie handlers to UI events
        theClientUIManager.setupEventHandlers(theServerConnection, handlerA, handlerB, handlerC, handlerReset);
        theServerConnection.executeGet(handlerReset); // We can reuse handlerReset for this.
    }
}

var theWsAPI = new WebServiceAPI("/api");
var localServerURL = 'http://127.0.0.1:1337';
var azureServerURL = 'http://roleplayonazure.azurewebsites.net';

// Client setup
//
window.onload = function() {
    ClientLauncher.launch(azureServerURL, theWsAPI);
}
