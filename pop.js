document.addEventListener('DOMContentLoaded', function(){
	getCurrentTab();
});

function getTabUrl(tabInfo) {
	document.getElementById("url").value = tabInfo.url;
}

function getInfoForTab(tabs) {
	if (tabs.length > 0) {
		var gettingInfo = browser.tabs.get(tabs[0].id);
		gettingInfo.then(getTabUrl);
	}
}

function getCurrentTab() {
	var querying = browser.tabs.query({currentWindow: true, active: true});
	querying.then(getInfoForTab);
}
