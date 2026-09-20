
// SPLASH TEXT
async function loadSplash() {
	const response = await fetch("splash_texts.json");
	const texts = await response.json();

	const splash = document.getElementById("splash");
	const length = texts.length;
	let splash_index = 0;

	function animate() {
		const txt = texts[splash_index];
		splash_index = (splash_index + 1) % length;
		splash.textContent = "you are.. " + txt;
	}

	animate();
	setInterval(animate, 670);
}
loadSplash();