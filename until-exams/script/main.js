'use strict';

// Global variables
var atc_val = false,
	flag = true,
	hour = new Date().getHours(),
	chromeAndroidColors = {
		light: '#bcf2ff',
		dark: '#10141c'
	};

function display() {
	var daysOutput = document.getElementById('d'),
		hoursOutput = document.getElementById('h'),
		minutesOutput = document.getElementById('m'),
		secondsOutput = document.getElementById('s'),
		container = document.getElementById('container');

	var then = new Date(2017, 7, 23, 0, 0, 0), //23/08/2017 00:00
		oneDay = 1000 * 3600 * 24;

		then -= 120 * 60 * 1000; // Timezone Offset

	setInterval(function() {
		var now = new Date,
			diff = new Date(then - now),
			days = (diff / oneDay) % 1 >= 0.91666 ?
			Math.ceil(diff / oneDay) :
			Math.floor(diff / oneDay); // 'cause of loss of accuracy. So actually one day in JS is not 1 but 0.91666 ¯\_(ツ)_/¯

		daysOutput.innerHTML = days;
		hoursOutput.innerHTML = diff.getHours() >= 10 ? diff.getHours() : '0' + diff.getHours();
		minutesOutput.innerHTML = diff.getMinutes() >= 10 ? diff.getMinutes() : '0' + diff.getMinutes();
		secondsOutput.innerHTML = diff.getSeconds() >= 10 ? diff.getSeconds() : '0' + diff.getSeconds();

		container.style.opacity = 1;

		if (now.getHours() === 0) {
			hour = 0;
		}

		if (hour < now.getHours()) {
			flag = true;
			hour = now.getHours();
		}

		if (atc_val && flag && ((now.getHours() >= 21 && now.getHours() <= 23) || (now.getHours() >= 0 && now.getHours() <= 7))) {
			switchTheme('dark');
			flag = false;
		} else if (atc_val && flag && (now.getHours() > 7 && now.getHours() < 21)) {
			switchTheme('light');
			flag = false;
		}
	}, 999);
}

function switchTheme(theme) {
	var body = document.body,
		themeColor = document.querySelector('meta[name=theme-color]'),
		color = theme || 'light';
	flag = true;
	if (!theme) {
		if (body.classList.contains('light')) {
			body.className = 'dark';
			themeColor.setAttribute('content', chromeAndroidColors['dark']);
		} else if (body.classList.contains('dark')) {
			body.className = 'light';
			themeColor.setAttribute('content', chromeAndroidColors['light']);
		}
	} else {
		body.className = color;
		themeColor.setAttribute('content', chromeAndroidColors[color]);
	}
}

function activateButton() {
	if (!atc_val) {
		atc_val = true;
		atc.className = 'active';
		ct.setAttribute('disabled', 'disabled');
		localStorage.setItem('autoState', '1');
	} else {
		atc_val = false;
		atc.className = '';
		ct.removeAttribute('disabled');
		localStorage.setItem('autoState', '0');
	}
}



(function() {
	display();
// Theme changing button
	var ct = document.getElementById('ct');
	ct.addEventListener('click', function() {
		switchTheme();
	}, true);

	var atc = document.getElementById('atc');
	atc.addEventListener('click', activateButton, true);

	if ( Number(localStorage.getItem('autoState')) )  {
		activateButton();
	}

}());
