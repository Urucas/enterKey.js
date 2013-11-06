/**
* @copyright Urucas
* @license   MIT License
* @version   Release: 1.0.0
* @link       http://urucas.com
* @developers Bruno Alassia, Pamela Prosperi
*/

Element.prototype.enterKey = function(callback) {

	if(!(this instanceof HTMLInputElement && this.getAttribute("type") == "text")) {
		return;
	}
	this.addEventListener("keyup", function(e){
		var keyCode = e.keyCode;
		if(keyCode == 13) {
			callback(this.value);
		}
	}, false);
}

NodeList.prototype.enterKey = function(callback) {
	for(var i=0;i<this.length;i++){
		if(this.item(i) instanceof Element) {
			this.item(i).enterKey(callback);
		}
	}	
};

// jQuery extension
try {
	jQuery.fn.enterKey = function(callback) {
		for(var i=0; i<this.length;i++) {
			var el = this[i];
			el.enterKey(callback);
		}
		return this;
	}
}catch(e) {}

