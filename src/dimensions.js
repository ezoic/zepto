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
	$.fn.height = function(val) {
		if (this.length == 0) {return;}
		if (val===undefined) {
			return parseFloat(getComputedStyle(this[0], null).height.replace("px", ""));
		}
		if (typeof val === "function") val = val();

		this.each(function(){
			if (typeof val === "string") this.style.height = val;
			else this.style.height = val + "px";
		});
	}
	$.fn.width = function(val) {
		if (this.length == 0) {return;}
		if (val===undefined) {
			return parseFloat(getComputedStyle(this[0], null).width.replace("px", ""));
		}
		if (typeof val === "function") val = val();

		this.each(function(){
			if (typeof val === "string") this.style.width = val;
			else this.style.width = val + "px";
		});
	}
  
  })(Zepto)
  