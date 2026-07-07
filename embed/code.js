const params = new URLSearchParams(location.search);

const title = params.get("t") ?? "";
const description = params.get("d") ?? "";
const color = params.get("c") ?? "5865F2";

document.getElementById("title").textContent = title;
document.getElementById("description").textContent = description;

document.getElementById("embed").style.borderLeft =
    `6px solid #${color}`;
