// Settings
var rings = 11;

// Throttle Resize-triggered Events
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { 
            uniqueId = "Don't call this twice without a uniqueId"; 
        }
		if (timers[uniqueId]) { 
            clearTimeout (timers[uniqueId]);
        }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// Position the iframes
function positionz() {
    $('iframe').offset({ top: 0, left: 0 });
}
     
// Build the shapes
function recursion(times) {
    var iframeSrc = 'http://w4lls.co/';
    //var iframeSrc = 'placeholder.html';
    
    for (var i = 0; i < times; i++) {
        $('#concentric-container').append('<div style="clip-path: url(&#34;#circle&#34;)" class="scroll-wrapper concentric inception circle-' + i + '"><iframe src="' + iframeSrc + '"></iframe></div>');
    }
}

// Launch!!!
$(document).ready(function() {
    recursion(rings);
    positionz();
    $(window).resize(function() {
        waitForFinalEvent(function(){
            positionz();
        }, 100, 'screenz resize');
    });
});