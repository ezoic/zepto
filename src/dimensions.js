;(function($, undefined){
  
	$.fn.outerHeight = function(includeMargins) {
		if (this.length == 0) {return;}
		if (!includeMargins) {
			return this[0].offsetHeight;
		}
		var height = this[0].offsetHeight;
		var style = getComputedStyle(this[0]);
		height += parseInt(style.marginTop) + parseInt(style.marginBottom);
		return height;
	}
	$.fn.outerWidth = function(includeMargins) {
		if (this.length == 0) {return;}
		if(!includeMargins) {
			return this[0].offsetWidth;
		}
		var width = this[0].offsetWidth;
		var style = getComputedStyle(this[0]);

		width += parseInt(style.marginLeft) + parseInt(style.marginRight);
		return width;
	}
  
  })(Zepto)
  