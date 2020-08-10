document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        var previewCode;
        //Get preview code
        chrome.storage.sync.get('previewCode', function (data) {
            previewCode = data.previewCode;
            console.log('previewCode is set to ' + data.previewCode);
        });



        chrome.storage.sync.get('debugDomain', function (data) {
            var domain = data.debugDomain;
            console.log('debugDomain is set to ' + domain);
            if (document.domain.search(domain) != -1) {
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
                console.log('debugDomain: ' + domain + " does not match: " + document.domain + " Lets Go");


            }
        });

    }
};
