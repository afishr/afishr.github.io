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
	nav = document.getElementsByClassName('nav')[0],
	arrow = document.getElementById('arrow');

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

arrow.addEventListener('click', function(e) {
	e.preventDefault();
	var el = document.getElementById('aims');
	scrollTo(document.body, el.offsetTop, 300)
}, true);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbikge1xyXG5cdGlmIChkdXJhdGlvbiA8PSAwKSByZXR1cm47XHJcblx0dmFyIGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wLFxyXG5cdFx0cGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcblx0XHRpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSByZXR1cm47XHJcblx0XHRzY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcblx0fSwgMTApO1xyXG59XHJcblxyXG52YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLFxyXG5cdG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdicpWzBdLFxyXG5cdGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93Jyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcblx0aWYgKHdpbmRvdy5zY3JvbGxZICUgMTApIHtcclxuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDM1KVxyXG5cdFx0XHRoZWFkZXIuY2xhc3NOYW1lID0gJ21pbmltaXplZCc7XHJcblx0XHRlbHNlXHJcblx0XHRcdGhlYWRlci5jbGFzc05hbWUgPSAnJztcclxuXHR9XHJcblxyXG5cdHZhciBibG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibG9jaycpLFxyXG5cdFx0d1Njcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKXtcclxuXHRcdHZhciB0aGlzQmxvY2sgPSBibG9ja3NbaV0sIC8vIGVsZW1lbnRcclxuXHRcdFx0dG9wRWRnZSA9IHRoaXNCbG9jay5vZmZzZXRUb3AgLSA3NSxcclxuXHRcdFx0Ym90dG9tRWRnZSA9IHRvcEVkZ2UgKyB0aGlzQmxvY2suY2xpZW50SGVpZ2h0LFxyXG5cdFx0XHRhbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbSA+IGEnKTtcclxuXHJcblx0XHRpZiAodG9wRWRnZSA8PSB3U2Nyb2xsICYmIGJvdHRvbUVkZ2UgPj0gd1Njcm9sbCkge1xyXG5cdFx0XHR2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaXRlbSA+IGFbaHJlZj1cIicgKyAnIycgKyB0aGlzQmxvY2suZ2V0QXR0cmlidXRlKCdpZCcpICsgJ1wiXScpO1xyXG5cclxuXHRcdFx0aWYgKGxpbmsgPT09IG51bGwpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBhbGxMaW5rcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGFsbExpbmtzW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FpbXMnKS5vZmZzZXRUb3AgPiB3U2Nyb2xsKSB7XHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYWxsTGlua3MubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRhbGxMaW5rc1tqXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhbGxMaW5rc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59LCB0cnVlKTtcclxuXHJcbm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0dmFyIGhyZWYgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zbGljZSgxKSxcclxuXHRcdFx0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcclxuXHJcblx0XHRzY3JvbGxUbyhkb2N1bWVudC5ib2R5LCBlbC5vZmZzZXRUb3AsIDQ1MCk7XHJcblx0fVxyXG59LCB0cnVlKTtcclxuXHJcbmFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWltcycpO1xyXG5cdHNjcm9sbFRvKGRvY3VtZW50LmJvZHksIGVsLm9mZnNldFRvcCwgMzAwKVxyXG59LCB0cnVlKTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
