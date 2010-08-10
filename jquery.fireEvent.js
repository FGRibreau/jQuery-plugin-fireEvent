/*
	jQuery.fireEvent v0.1
*/
 (function($, undefined) {

	$.fireEvent = function(el, eventName, opt) {
		if (el === undefined)
			return false;

		var evt;

		if (el.ownerDocument && el.ownerDocument.createEvent) {
			evt = el.ownerDocument.createEvent(evts[eventName].w3c);
		} else {
			evt = document.createEvent(evts[eventName].w3c);
		}

		evts[eventName].initEvt(evt, el, opt);

		if (document.dispatchEvent) {// W3C
			el.dispatchEvent(evt);
		}
		else if (document.fireEvent) {// IE
			el.fireEvent(evts[eventName].ie, evt);
		}
	};

	$.fn.fireEvent = function(eventName, opt) {
		if (this.length == 0)
			return this;

		$.fireEvent.call({},this[0], eventName, opt);

		return this;
	};

	/* -- Event cross-browser implementation -- */
	var evts = {
		'click': {
			ie: 'onclick',
			w3c: 'MouseEvents',
			initEvt: function(evt, target, opt) {
				var _def = $.extend({
						type: 'click',
						canBubble: true,
						cancelable: true,
						view: window,
						detail: 1,
						screenX: 1,
						screenY: 1,
						clientX: 1,
						clientY: 1,
						ctrlKey: false,
						altKey: false,
						shiftKey: false,
						metaKey: false,
						button: 0,
						relatedTarget: target}, opt);

				evt.initMouseEvent(_def.type,
				_def.canBubble, _def.cancelable, _def.view, _def.detail,
				_def.screenX, _def.screenY, _def.clientX, _def.clientY,
				_def.ctrlKey, _def.altKey, _def.shiftKey, _def.metaKey, _def.button, _def.relatedTarget);
			}
		},

		'dblclick': {
			ie: 'ondblclick',
			w3c: 'MouseEvents',
			initEvt: function(evt, target, opt) {
				evts['click'].initEvt(evt, target, $.extend({type: 'dblclick'}, opt));
			}
		},

		'keyup': {
			ie: 'onkeyup',
			w3c: 'KeyboardEvent',
			initEvt: function(evt, target, opt) {
				var _def = $.extend({keyCode: null, CharCode: null}, opt);

				evt.initKeyEvent('keyup', true, true, window, false, false, false, false, _def.keyCode, _def.CharCode)
			}

		},
		'blur': {
			ie: 'onblur',
			w3c: 'HTMLEvents',
			initEvt: function(evt, target, opt) {
				evt.initEvent('blur', true, true);
			}

		},
		'change': {
			ie: 'onchange',
			w3c: 'HTMLEvents',
			initEvt: function(evt, target, opt) {
				evt.initEvent('change', true, true);
			}
		}
	};

})(jQuery);