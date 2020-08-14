# matomo-browser-tools
A tool that help you with tag implementations for Matomo

# Features
## Add the TagManager preview code all urls of the site you work with (no more manual copy / paste / reload page)
The first version give you the ability to add the preview code from Matomo Tag Manager to all your internal links.
This means that if you are working with the site https://example.com we will revrite all the Links in that site so that we always try to add the Matomo TagManager previrew code.
As an example this means that the link https://example.com/about-us will look like this https://example.com/about-us?mtmPreviewMode=PUugUwJJ 
## Send fake pageviews
Send pageviews and edit the title + URL to send
## Send fake events
Send events and edit the Category, Action, Name and value to send


# Installation:
For now this is only avalible in development mode meaning you will have to download this package locally and unzip it.
Then put Chrome into Dev mode and upload the file as a local plugin. 

Open the Extension Management page by navigating to chrome://extensions.
The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
Enable Developer Mode by clicking the toggle switch next to Developer mode.
Click the LOAD UNPACKED button and select the extension directory (the file you downloaded).


Read here for more info about chrome development
https://developer.chrome.com/extensions/getstarted

As soon as I feel this plugin is a bit more stable and get some feedback from other I will try to publish it as an official plugin.

