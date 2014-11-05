// If you don't want to change the default options you can
// also supply the constructor with a selector string.
var svg = new Walkway({
	selector: '#matt',
	duration: '5000',
  	easing: function (t) {
    	return t * t;
  }
});

svg.draw(function () {
  console.log('Animation finished');
});