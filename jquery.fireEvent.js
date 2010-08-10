(function($){
	
	$.fn.fireEvent = function(eventName,opt){
		console.debug(this);
		var el = this[0];
	
		//Inspired from: https://developer.mozilla.org/en/DOM/document.createEvent
		if(document.dispatchEvent) { // W3C
		    var oEvent = document.createEvent(fireEvent_p[eventName].ce);
		    fireEvent_p[eventName].initEvt(oEvent,el,opt);
		    el.dispatchEvent( oEvent );
		    }
		else if(document.fireEvent){ // IE
		    el.fireEvent(fireEvent_p[eventName].ie);
		}
		
		return this;
	};

var fireEvent_p = {
	'click':{
		ce:'MouseEvents',
		initEvt:function(evt, target){
			evt.initMouseEvent('click', true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, target);
		},
		ie:'onclick'
	},
	'keyup':{
		ce:'KeyboardEvent',
		initEvt:function(evt, target,opt){
			evt.initKeyEvent('keyup', true, true, window, 
                        false, false, false, false, 
                        opt.keyCode, opt.CharCode) 
		},
		ie:'onkeyup'
	},
	'blur':{
		ce:'HTMLEvents',
		initEvt:function(evt, target){
			evt.initEvent('blur', true, true); 
		},
		ie:'onblur'
	},
	'change':{
		ce:'HTMLEvents',
		initEvt:function(evt, target){
			evt.initEvent('change', true, true); 
		},
		ie:'onchange'
	}	
};

})(jQuery);