// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


//Enable Dubugging
chrome.storage.sync.get('enableDebug', function (data) {
    if (data.enableDebug) {
        document.getElementById('enableDebug').checked = data.enableDebug;
        console.log('enableDebug is set to ' + data.enableDebug);
    } else {
        console.log('enableDebug is not set');

    }
});
//let enableDebug = document.getElementById('enableDebug');
document.getElementById('enableDebug').addEventListener("change", function () {
    var debugState = this.checked;
    chrome.storage.sync.set({
        enableDebug: debugState
    }, function () {
        //console.log('debug is set to ' + debugState);
    })
    //Test to read the data For dubug purposes
    chrome.storage.sync.get('enableDebug', function (data) {
        console.log('debug is set to ' + data.enableDebug);
    });

});


//previewCode
chrome.storage.sync.get('previewCode', function (data) {
    document.getElementById('previewCode').value = data.previewCode;
    console.log('previewCode is set to ' + data.previewCode);
});

document.getElementById('previewCode').addEventListener("change", function () {
    var previewCode = this.value;
    chrome.storage.sync.set({
        previewCode: previewCode
    }, function () {
        //console.log('debug is set to ' + debugState);
    })
    //Test to read the data For dubug purposes


});

//Debugdomain
chrome.storage.sync.get('debugDomain', function (data) {
    if (data.debugDomain) {
        document.getElementById('debugDomain').value = data.debugDomain;
        console.log('debugDomain is set to ' + data.debugDomain);
    } else {
        console.log('Debugdomain is not set');
    }
});
document.getElementById('debugDomain').addEventListener("change", function () {
    var debugDomain = this.value;
    console.log(debugDomain);
    chrome.storage.sync.set({
        debugDomain: debugDomain
    }, function () {
        console.log('debugDomain is set to ' + debugDomain);
    })
    //Test to read the data For dubug purposes

});


//PageTitle
chrome.storage.sync.get('documentTitle', function (data) {
    if (data.documentTitle) {
        document.getElementById('documentTitle').value = data.documentTitle;
        console.log('documentTitle is set to ' + data.documentTitle);
    } else {
        console.log('documentTitle is not set');
    }
});
document.getElementById('documentTitle').addEventListener("change", function () {
    var documentTitle = this.value;
    console.log(documentTitle);
    chrome.storage.sync.set({
        documentTitle: documentTitle
    }, function () {
        console.log('documentTitle is set to ' + documentTitle);
    })
    //Test to read the data For dubug purposes

});

//CustomURL
chrome.storage.sync.get('customUrl', function (data) {
    if (data.customUrl) {
        document.getElementById('customUrl').value = data.customUrl;
        console.log('customUrl is set to ' + data.customUrl);
    } else {
        console.log('customUrl is not set');
    }
});
document.getElementById('customUrl').addEventListener("change", function () {
    var customUrl = this.value;
    console.log(customUrl);
    chrome.storage.sync.set({
        customUrl: customUrl
    }, function () {
        console.log('customUrl is set to ' + customUrl);
    })

});

//EventCategory
chrome.storage.sync.get('eventCategory', function (data) {
    if (data.eventCategory) {
        document.getElementById('eventCategory').value = data.eventCategory;
        console.log('eventCategory is set to ' + data.eventCategory);
    } else {
        console.log('eventCategory is not set');
    }
});
document.getElementById('eventCategory').addEventListener("change", function () {
    var eventCategory = this.value;
    console.log(eventCategory);
    chrome.storage.sync.set({
        eventCategory: eventCategory
    }, function () {
        console.log('eventCategory is set to ' + eventCategory);
    })
    //Test to read the data For dubug purposes

});

//EventAction
chrome.storage.sync.get('eventAction', function (data) {
    if (data.eventAction) {
        document.getElementById('eventAction').value = data.eventAction;
        console.log('eventAction is set to ' + data.eventAction);
    } else {
        console.log('eventAction is not set');
    }
});
document.getElementById('eventAction').addEventListener("change", function () {
    var eventAction = this.value;
    console.log(eventAction);
    chrome.storage.sync.set({
        eventAction: eventAction
    }, function () {
        console.log('eventAction is set to ' + eventAction);
    })
    //Test to read the data For dubug purposes

});

//EventName
chrome.storage.sync.get('eventName', function (data) {
    if (data.eventName) {
        document.getElementById('eventName').value = data.eventName;
        console.log('eventName is set to ' + data.eventName);
    } else {
        console.log('eventName is not set');
    }
});
document.getElementById('eventName').addEventListener("change", function () {
    var eventName = this.value;
    console.log(eventName);
    chrome.storage.sync.set({
        eventName: eventName
    }, function () {
        console.log('eventName is set to ' + eventName);
    })
    //Test to read the data For dubug purposes

});


//EventValue
chrome.storage.sync.get('eventValue', function (data) {
    if (data.eventValue) {
        document.getElementById('eventValue').value = data.eventValue;
        console.log('eventValue is set to ' + data.eventValue);
    } else {
        console.log('eventValue is not set');
    }
});
document.getElementById('eventValue').addEventListener("change", function () {
    if(!isNaN(this.value)) {    
    var eventValue = this.value;
    console.log(eventValue);
    chrome.storage.sync.set({
        eventValue: eventValue
    }, function () {
        console.log('eventValue is set to ' + eventValue);
    })
    }
    else {
        document.getElementById('eventValue').value = null;
        alert("eventValue must be a number");
    }    

});
document.getElementById('tagmanagerDebugBTN').addEventListener("click", function () {
    openTab(event, 'tagmanagerDebugWrapper');

});
document.getElementById('pageviewSimulatorBTN').addEventListener("click", function () {
    openTab(event, 'pageviewSimulator');

});
document.getElementById('eventSimulatorBTN').addEventListener("click", function () {
    openTab(event, 'eventSimulator');
});

document.getElementById('sendEvent').addEventListener("click", function () {
    console.log("send event click");
    sendEvent();
});
document.getElementById('sendPageview').addEventListener("click", function () {
    console.log("send page click");
    sendPageview();

});
function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}


