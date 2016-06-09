/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window */
	/*global */

	// http://www.createjs.com/docs/tweenjs/classes/Tween.html#method_removeTweens
	// http://learningthreejs.com/blog/2011/08/17/tweenjs-for-smooth-animation/


	win.addEventListener('load', function () {

		var coords = {
			x: 0,
			y: 0
		};

		var tween = new TWEEN.Tween(coords)
			.to({ x: 100, y: 100 }, 1000)
			.onUpdate(function() {
				console.log(this.x, this.y);
			})
			.start();

		requestAnimationFrame(animate);

		function animate(time) {
			requestAnimationFrame(animate);
			TWEEN.update(time);
		}

		tween.easing(TWEEN.Easing.Elastic.InOut);

	}, false);



}(window));