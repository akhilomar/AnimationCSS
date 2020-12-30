const button = document.getElementById('button');
const reset = document.getElementById('reset');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

button.onclick = async () => {
	removeMail();
	await sleep(500);
	canvas.classList.add('animate__animated', 'animate__zoomOut');
	await sleep(500);
	canvas.style.background = "inherit";
	canvas.width = canvas.width;
	canvas.classList.remove('animate__zoomOut');
	drawPlane();
	await sleep(800);
	canvas.classList.add('animate__animated', 'animate__fadeOutTopRight');
	button.classList.remove('button');
	button.classList.add('green');
	button.innerHTML = "&nbsp;";
	await sleep(700);
	button.classList.add('animate__animated', 'animate__faster', 'animate__zoomOut');
	await sleep(2000);
	reset.style.display = 'block';
};

reset.onclick = () => {
	canvas.style.background = "#354a5f";
	canvas.width = canvas.width;
	drawMail();
	canvas.classList.remove('animate__fadeOutTopRight');
	button.classList.remove('animate__zoomOut');
	button.classList.remove('green');
	button.classList.add('button');
	button.innerHTML = "SEND MAIL";
	reset.style.display = 'none';
}

function drawMail(){
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "#ecf0f1";
	context.moveTo(60,50);
	context.lineTo(60,100);
	context.lineTo(240,100);
	context.lineTo(240,50);
	context.lineTo(63,50);
	context.lineTo(150,80);
	context.lineTo(240,50);
	context.stroke();
	context.closePath();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeMail(){
	context.beginPath();
	context.lineWidth = 3;
	context.strokeStyle = "#354a5f";
	
	let x1 = 240, y1 = 50, x2 = 60, y2 = 50;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		x1 = x1 - 7.5;
		context.lineTo(x1,y1);
		context.moveTo(x2,y2);
		y2 = y2 + 2;
		context.lineTo(x2,y2);
		context.stroke();
	}
	
	x1 = 59, y1 = 100, x2 = 60, y2 = 50;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		x1 = x1 + 7.5;
		context.lineTo(x1,y1);
		context.moveTo(x2,y2);
		y2 = y2 + 1.25;
		x2 = x2 + 3.75;
		context.lineTo(x2,y2);
		context.stroke();
	}
	
	x1 = 150, y1 = 80, x2 = 240, y2 = 100;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		y1 = y1 - 1.25;
		x1 = x1 + 3.75;
		context.lineTo(x1,y1);
		context.moveTo(x2,y2);
		y2 = y2 - 2;
		context.lineTo(x2,y2);
		context.stroke();
	}
	context.closePath();
}

async function drawPlane(){
	context.beginPath();
	context.lineWidth = 2;
	context.strokeStyle = "#ecf0f1";
	
	let x1 = 240, y1 = 50, x2 = 240, y2 = 50;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		x1 = x1 - 7.5;
		y1 = y1 + 0.83;
		context.lineTo(x1,y1);
		context.moveTo(x2,y2);
		x2 = x2 - 5.83;
		y2 = y2 + 1.25;
		context.lineTo(x2,y2);
		context.stroke();
	}
	
	x1 = 52.5, y1 = 70.75, x2 = 94.25, y2 = 81.25;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		x1 = x1 + 1.67;
		y1 = y1 + 0.42;
		context.lineTo(x1,y1);
		context.moveTo(x2,y2);
		y2 = y2 + 0.83;
		context.lineTo(x2,y2);
		context.stroke();
	}
	
	x1 = 94.25, y1 = 81.25, x2 = 94.25, y2 = 102;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		x1 = x1 + 1.67;
		y1 = y1 + 0.42;
		context.lineTo(x1,y1);
		context.moveTo(x2,y2);
		x2 = x2 + 1.25;
		y2 = y2 - 0.5;
		context.lineTo(x2,y2);
		context.stroke();
	}
	
	x1 = 136, y1 = 91.75;
	for (let i=0; i<=24; i++){
		await sleep(5);
		context.moveTo(x1,y1);
		x1 = x1 + 4.33;
		y1 = y1 - 1.75;
		context.lineTo(x1,y1);
		context.stroke();
	}
}

drawMail();