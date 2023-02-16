console.log("capture.js loaded");
document.onclick = (e) => {
  e.target.style.backgroundColor = "red";
  console.log(e.target.innerHTML);
};
