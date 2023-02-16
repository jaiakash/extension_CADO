document.onclick = (e) => {
  // Change the colour of the clicked element
  e.target.style.backgroundColor = "red";

  // Get the text of the clicked element
  const text = e.target.innerHTML;
  console.log("Clicked on: ", text);

  // Save the text to localStorage
  localStorage.setItem("Text", text);

  // Alert the user that the content has been saved
  // alert("Content has been saved!");
};
