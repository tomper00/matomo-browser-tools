//HTML TABS
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



function sendEvent() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            pageAction: "sendEvent",
            eventCategory: document.getElementById("eventCategory").value,
            eventAction: document.getElementById("eventAction").value,
            eventName: document.getElementById("eventName").value,
            eventValue: document.getElementById("eventValue").value
        }, function (response) {
            console.log(response);
        });
    });


}

function sendPageview() {
        chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            pageAction: "sendPageview",
            documentTitle: document.getElementById("documentTitle").value,
            customUrl: document.getElementById("customUrl").value
        }, function (response) {
            console.log(response);
        });
    });

}

