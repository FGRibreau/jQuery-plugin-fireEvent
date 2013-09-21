jQuery FireEvent - Plugin for firing real DOM cross-browser events [![Gittip](http://badgr.co/gittip/fgribreau.png)](https://www.gittip.com/fgribreau/)
================================

Usage
---------------------------------------
	//Emulate a middle click DOM event
	$('#el').fireEvent('click',{button:1});
	//or
	$.fireEvent(document.getElementById('el'),'click',{button:1});
