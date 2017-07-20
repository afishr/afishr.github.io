var links = document.querySelectorAll('.nav-item > a');

for(var i = 0; i < links.length; i++) {
	links[i].setAttribute('href', '../' + links[i].getAttribute('href'));
}

window.addEventListener('scroll', function() {
	if (window.scrollY % 10) {
		if (window.scrollY > 35)
			header.className = 'minimized';
		else
			header.className = '';
	}
}, true);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZWFkZHJlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtID4gYScpO1xyXG5cclxuZm9yKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcblx0bGlua3NbaV0uc2V0QXR0cmlidXRlKCdocmVmJywgJy4uLycgKyBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuXHRpZiAod2luZG93LnNjcm9sbFkgJSAxMCkge1xyXG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMzUpXHJcblx0XHRcdGhlYWRlci5jbGFzc05hbWUgPSAnbWluaW1pemVkJztcclxuXHRcdGVsc2VcclxuXHRcdFx0aGVhZGVyLmNsYXNzTmFtZSA9ICcnO1xyXG5cdH1cclxufSwgdHJ1ZSk7XHJcbiJdLCJmaWxlIjoicmVhZGRyZXNzLmpzIn0=
