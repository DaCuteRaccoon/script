(function() {
	var x = document.body.getElementsByTagName("*");
	for(i = 0; i < x.length; i++) {
		x[i].setAttribute("onmouseover", "this.innerHTML = 'hax'");
	}
}());
