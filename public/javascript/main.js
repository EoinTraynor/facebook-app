function init() {
	console.log("Ready");

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	var profileSrc = new Image();
	profileSrc.src = document.getElementById('profile').getAttribute('src');

	ctx.drawImage(profileSrc, 0, 0);

	var opt = document.getElementById('option');
	opt.addEventListener('change', function() {
		var optionSelected = opt.options[opt.selectedIndex].text;
		// Add layer to canvas
		draw(ctx, optionSelected);
	}, false);

	// Download Image
	document.getElementById('download').addEventListener('click', function() {
		downloadCanvas(this, 'canvas', 'test.png');
	}, false);

}

function readSelect() {

}

function downloadCanvas(link, canvasId, filename) {
	console.log(link, canvasId, filename);
	window.open(canvas.toDataURL("image/png"));
    // link.href = document.getElementById(canvasId).toDataURL();
    // link.download = filename;
}

function draw(ctx, option) {
	var color;

	// Check selection
	if (option == "Fine Gale") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Fianna Fail") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Sinn Fein") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Independant") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Labour Party") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "AAA-PBP") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Social Democrats") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Green Party") {
		color = 'rgba(255, 0, 0, 0.5)';
	}
	else if (option == "Renua") {
		color = 'rgba(255, 0, 0, 0.5)';
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
