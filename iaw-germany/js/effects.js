function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	var difference = to - element.scrollTop,
		perTick = difference / duration * 10;

	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		if (element.scrollTop === to) return;
		scrollTo(element, to, duration - 10);
	}, 10);
}

var header = document.getElementById('header'),
	nav = document.getElementsByClassName('nav')[0];

window.addEventListener('scroll', function() {
	if (window.scrollY % 10) {
		if (window.scrollY > 35)
			header.className = 'minimized';
		else
			header.className = '';
	}

	var blocks = document.getElementsByClassName('block'),
		wScroll = window.scrollY;

	for(var i = 0; i < blocks.length; i++){
		var thisBlock = blocks[i], // element
			topEdge = thisBlock.offsetTop - 75,
			bottomEdge = topEdge + thisBlock.clientHeight,
			allLinks = document.querySelectorAll('.nav-item > a');

		if (topEdge <= wScroll && bottomEdge >= wScroll) {
			var link = document.querySelector('.nav-item > a[href="' + '#' + thisBlock.getAttribute('id') + '"]');

			if (link === null)
				return;

			for (var j = 0; j < allLinks.length; j++) {
				allLinks[j].classList.remove('active');
			}

			link.classList.add('active');

		} else if (document.getElementById('aims').offsetTop > wScroll) {
			for (var j = 0; j < allLinks.length; j++) {
				allLinks[j].classList.remove('active');
			}
			allLinks[0].classList.add('active');
		}
	}

}, true);

nav.addEventListener('click', function(e) {
	if (e.target.tagName === 'A') {
		e.preventDefault();

		var href = e.target.getAttribute('href').slice(1),
			el = document.getElementById(href);

		scrollTo(document.body, el.offsetTop, 450);
	}
}, true);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJlZmZlY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikge1xyXG5cdGlmIChkdXJhdGlvbiA8PSAwKSByZXR1cm47XHJcblx0dmFyIGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wLFxyXG5cdFx0cGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcblx0XHRpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSByZXR1cm47XHJcblx0XHRzY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcblx0fSwgMTApO1xyXG59XHJcblxyXG52YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG5cdG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdicpWzBdO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG5cdGlmICh3aW5kb3cuc2Nyb2xsWSAlIDEwKSB7XHJcblx0XHRpZiAod2luZG93LnNjcm9sbFkgPiAzNSlcclxuXHRcdFx0aGVhZGVyLmNsYXNzTmFtZSA9ICdtaW5pbWl6ZWQnO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRoZWFkZXIuY2xhc3NOYW1lID0gJyc7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmxvY2snKSxcclxuXHRcdHdTY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKyl7XHJcblx0XHR2YXIgdGhpc0Jsb2NrID0gYmxvY2tzW2ldLCAvLyBlbGVtZW50XHJcblx0XHRcdHRvcEVkZ2UgPSB0aGlzQmxvY2sub2Zmc2V0VG9wIC0gNzUsXHJcblx0XHRcdGJvdHRvbUVkZ2UgPSB0b3BFZGdlICsgdGhpc0Jsb2NrLmNsaWVudEhlaWdodCxcclxuXHRcdFx0YWxsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0gPiBhJyk7XHJcblxyXG5cdFx0aWYgKHRvcEVkZ2UgPD0gd1Njcm9sbCAmJiBib3R0b21FZGdlID49IHdTY3JvbGwpIHtcclxuXHRcdFx0dmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWl0ZW0gPiBhW2hyZWY9XCInICsgJyMnICsgdGhpc0Jsb2NrLmdldEF0dHJpYnV0ZSgnaWQnKSArICdcIl0nKTtcclxuXHJcblx0XHRcdGlmIChsaW5rID09PSBudWxsKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYWxsTGlua3MubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRhbGxMaW5rc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhaW1zJykub2Zmc2V0VG9wID4gd1Njcm9sbCkge1xyXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGFsbExpbmtzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0YWxsTGlua3Nbal0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0YWxsTGlua3NbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSwgdHJ1ZSk7XHJcblxyXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0aWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHZhciBocmVmID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykuc2xpY2UoMSksXHJcblx0XHRcdGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XHJcblxyXG5cdFx0c2Nyb2xsVG8oZG9jdW1lbnQuYm9keSwgZWwub2Zmc2V0VG9wLCA0NTApO1xyXG5cdH1cclxufSwgdHJ1ZSk7XHJcbiJdLCJmaWxlIjoiZWZmZWN0cy5qcyJ9
