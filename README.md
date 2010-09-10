jQuery FireEvent - Plugin for firing real DOM cross-browser events
================================

Usage
---------------------------------------
	//Emulate a middle click DOM event
	$('#el').fireEvent('click',{button:1});
	//or
	$.fireEvent(document.getElementById('el'),'click',{button:1});