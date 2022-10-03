// Adding eventlistener to direct user interaction

let body = document.querySelector('body');
let about = document.querySelector('#about');

function getHint() {
	about.classList.toggle('helper');
}

body.addEventListener('click', getHint);

// Adding array of personal tools

let tools = [
	'HTML',
	'JAVASCRIPT',
	'CSS',
	'VSCODE',
	'COMMAND LINE',
	'GIT',
	'DEPLOYMENT',
];

for (let tool of tools) {
	let span = document.createElement('span');
	document.getElementById('tools').appendChild(span);
	span.innerText = ' ' + tool;

	console.log(tool);
}
