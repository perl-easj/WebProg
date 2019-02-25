
class ClientUIManager {
    constructor(aUITextGenerator) {
        this.uiTextGenerator = aUITextGenerator;
    }
    
    // Sets up the event handlers for the three buttons in the UI.
    setupEventHandlers(aServerConnection, handlerA, handlerB, handlerC) {
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
    constructor(serverURL) {
        this.serverURL = serverURL;
    }

    // maps user actions to Web API
    executeA(handler) { this.executeCmd("/A", handler); }
    executeB(handler) { this.executeCmd("/B", handler); }
    executeC(handler) { this.executeCmd("/C", handler); }
    executeInit(handler) { this.executeCmd("/init", handler); }

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
    static launch() {
        // Sets up server connection
        var theServerConnection = new ServerConnection('http://127.0.0.1:1337');
        var theClientUIManager = new ClientUIManager();

        // Sets up handlers, which will be activated when a response
        // from invoking a Web API function is received.
        var handlerA = (obj) => { theClientUIManager.updateStatusText("#statusA", "A is now " + obj.stateA); };
        var handlerB = (obj) => { theClientUIManager.updateStatusText("#statusB", "B is now " + obj.stateB); };
        var handlerC = (obj) => { theClientUIManager.updateStatusText("#statusC", "C is now " + obj.stateC); };
        var handlerInit = (obj) => { 
            theClientUIManager.updateStatusText("#statusA", "A is now " + obj.stateA); 
            theClientUIManager.updateStatusText("#statusB", "B is now " + obj.stateB); 
            theClientUIManager.updateStatusText("#statusC", "C is now " + obj.stateC); 
        };

        // Tie handlers to UI events
        theClientUIManager.setupEventHandlers(theServerConnection, handlerA, handlerB, handlerC);
        theServerConnection.executeInit(handlerInit);
    }
}


// Client setup
//
window.onload = function() {
    ClientLauncher.launch();
}
