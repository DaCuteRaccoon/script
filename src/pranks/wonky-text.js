(function() {
	var x = document.body.getElementsByTagName("*");
	for(i = 0; i < x.length; i++) {
		var y = Math.floor((Math.random() * 10) + 1);
		x[i].style.transform = "rotate(" + y + "deg)"
	}
}());
