//= require_tree .

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
	
}

$(document).ready(function() {
	setInterval(function() {
		
		visibleEncouragements = $(".encouragement:visible");
		if (visibleEncouragements.length >= 5) {
			encouragementToHide = visibleEncouragements[randomNumber(0, visibleEncouragements.length-1)];
			$(encouragementToHide).hide();
		}
		
		hiddenEncouragements = $(".encouragement:not(:visible)");
		randomEncouragement = hiddenEncouragements[randomNumber(0, hiddenEncouragements.length-1)];
		$(randomEncouragement)
			.css("top", randomNumber(100, $(window).height()-$(randomEncouragement).height()) + "px")
			.css("left", randomNumber(100, $(window).width()-$(randomEncouragement).width()) + "px")
			.css("color", "hsl(" + randomNumber(0, 360) + ", 100%, 75%)")
			.show();
			
	}, 2500);
});