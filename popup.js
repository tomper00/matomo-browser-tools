// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';



//Enable Dubugging
   chrome.storage.sync.get('enableDebug', function (data) {
       if(data.enableDebug) {
        document.getElementById('enableDebug').checked = data.enableDebug;
        console.log('enableDebug is set to ' + data.enableDebug);
        }
       else {
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
       if(data.debugDomain) {
        document.getElementById('debugDomain').value = data.debugDomain;
        console.log('debugDomain is set to ' + data.debugDomain);
        }
       else {
        console.log('Debugdomain is not set');
           
       }
    });

document.getElementById('debugDomain').addEventListener("change", function () {
    var debugDomain = this.value;
    console.log(debugDomain);
    chrome.storage.sync.set({
        debugDomain: debugDomain
    }, function () {
        console.log('debug is set to ' + debugDomain);
    })
    //Test to read the data For dubug purposes
 

});
