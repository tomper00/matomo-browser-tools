document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        var previewCode;
        enableDeb = "";
        chrome.storage.sync.get('enableDeb', function (data) {
            enableDeb = data.enableDeb;
            console.log('enableDeb in function is set to ' + data.enableDeb);

            chrome.storage.sync.get('previewCode', function (data) {
                previewCode = data.previewCode;
                console.log('previewCode is set to ' + data.previewCode);
            });
            //Get preview code

            console.log('enableDeb is set to ' + enableDeb);

            if (enableDeb == "true") {

                chrome.storage.sync.get('debugDomain', function (data) {
                    var domain = data.debugDomain;
                    console.log('debugDomain is set to ' + domain);
                    if (document.domain.search(domain) != -1 && document.domain.search(domain) != 0) {
                        console.log("domain: " + document.domain.search(domain));
                        //Add the dubug code to all internal links
                        var allLinks = document.querySelectorAll('[href]');
                        for (i = 0; i < allLinks.length; i++) {
                            if (allLinks[i].href.search(domain) != -1 &&
                                allLinks[i].href.search(".css") == -1 &&
                                allLinks[i].href.search(".js") == -1 &&
                                allLinks[i].href.search(".ico") == -1 &&
                                allLinks[i].href.search(".css") == -1 &&
                                allLinks[i].href.search(".pdf") == -1 &&
                                allLinks[i].href.search(".doc") == -1)
                                //If we already have an URL parameter then add code with &
                                if (allLinks[i].href.search("/?") != -1 && allLinks[i].href.search("/#") != -1)
                                    allLinks[i].href = allLinks[i].href + "&mtmPreviewMode=" + previewCode;
                                else
                                    allLinks[i].href = allLinks[i].href + "?mtmPreviewMode=" + previewCode;
                        }

                        console.log('debugDomain: ' + domain + " matches: " + document.domain + " Lets Go");

                    } else {
                        console.log('else debugDomain: ' + domain + " does not match: " + document.domain + " Lets Go");


                    }
                });
            } else {
                console.log("debug domain is off");
            }
        });
    }
};


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("request.pageAction: " + request.pageAction);
        if (request.pageAction == "sendEvent") {
            var script = document.createElement('script');
            script.innerHTML = 'var _paq = window._paq = window._paq || []; _paq.push(["trackEvent","' + request.eventCategory + '","' + request.eventAction + '","' + request.eventName + '","' + request.eventValue + '"]);';
            document.querySelector('body').appendChild(script);
        }
        if (request.pageAction == "sendPageview") {
            var script = document.createElement('script');
            script.innerHTML = 'var _paq = window._paq = window._paq || []; _paq.push(["setDocumentTitle","' + request.documentTitle + '"]);_paq.push(["setCustomUrl","' + request.customUrl + '"]); _paq.push(["trackPageView"]);';
            document.querySelector('body').appendChild(script);
        }
        sendResponse({
            response: "Pageview was sent!"
        });
    });
