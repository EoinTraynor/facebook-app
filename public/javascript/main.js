// runs when document has loaded
function init() {
	console.log("Ready");
	// Canvas Element
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");

	// Get profile image source
	var profileSrc = new Image();
	profileSrc.src = document.getElementById('profile').getAttribute('src');
	profileSrc.setAttribute('crossOrigin', 'anonymous');

	// draw image to canvas
	ctx.drawImage(profileSrc, 0, 0);

	// Eventlistener for option change
	var opt = document.getElementById('option');
	opt.addEventListener('change', function() {
		var optionSelected = opt.options[opt.selectedIndex].text;
		// Add layer to canvas
		draw(ctx, optionSelected, profileSrc);
	}, false);

	// Download Image
	document.getElementById('download').addEventListener('click', function() {
		downloadCanvas(this, canvas, 'test.png');
	}, false);

}

function downloadCanvas(link, canvasId, filename) {
	console.log(link, canvasId, filename);
	window.open(canvasId.toDataURL("image/png"));
    // link.href = document.getElementById(canvasId).toDataURL();
    // link.download = filename;
}

function draw(ctx, option, profileImage) {
	var color;

	// new option = redraw the profile picture on canvas
	ctx.drawImage(profileImage, 0, 0);

	// Check selection
	// change color depending on option
	if (option == "Fine Gale") {
		color = 'rgba(68, 80, 183, 0.5)';
	}
	else if (option == "Fianna Fail") {
		color = 'rgba(64, 179, 79, 0.5)';
	}
	else if (option == "Sinn Fein") {
		color = 'rgba(4, 96, 89, 0.5)';
	}
	else if (option == "Independant") {
		color = 'rgba(248, 176, 24, 0.5)';
	}
	else if (option == "Labour Party") {
		color = 'rgba(238, 58, 70, 0.5)';
	}
	else if (option == "AAA-PBP") {
		color = 'rgba(241, 90, 36, 0.5)';
	}
	else if (option == "Social Democrats") {
		color = 'rgba(118, 47, 138, 0.5)';
	}
	else if (option == "Green Party") {
		color = 'rgba(189, 216, 110, 0.5)';
	}
	else if (option == "Renua") {
		color = 'rgba(98, 202, 231, 0.5)';
	}

	// add transparent banner
	ctx.beginPath();
	ctx.rect(0, 610, canvas.width, canvas.height);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();

	// add party text
	ctx.font = '40pt Arial';
	ctx.strokeStyle = '#f2f2f2';
	ctx.fillStyle = '#f2f2f2';
	ctx.fillText(option, 35, 680);

	// add party text
	ctx.font = '40pt Arial';
	ctx.strokeStyle = '#f2f2f2';
	ctx.fillStyle = '#f2f2f2';
	ctx.fillText("#Vote", 500, 680);
}
