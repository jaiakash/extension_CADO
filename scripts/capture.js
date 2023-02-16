import "../secrets.json";

function sendTextToOpenAI(text) {
  // Post the text to OpenAI API
  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0,
      max_tokens: 2048,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + SECRET_KEY,
    },
  }).then((response) => {
    response.json().then((data) => {
      alert(data.choices[0].text);
    });
  });
}

document.onclick = (e) => {
  // Change the colour of the clicked element
  e.target.style.backgroundColor = "red";

  // Get the text of the clicked element
  const text = e.target.innerHTML;
  // console.log("Clicked on: ", text);

  // Save the text to localStorage
  localStorage.setItem("Text", text);

  // Send the text to OpenAI
  sendTextToOpenAI(text);

  // Alert the user that the content has been saved
  // alert("Content has been saved!");
};
