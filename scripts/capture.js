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
      var promptResult = data.choices[0].text;
      confirm("Prompt Result: " + promptResult);
      localStorage.setItem("Result", promptResult);
    });
  });
}

document.onclick = (e) => {
  // Change the colour of the clicked element
  e.target.style.backgroundColor = "red";

  // Get the text of the clicked element
  const text = e.target.innerHTML;
  const tag = e.target.tagName;
  const url = location.href;

  var isSaved = confirm("Save? \n" + text);
  if (!isSaved) {
    return;
  }

  // Save the text to localStorage
  localStorage.setItem("Prompt", text);
  localStorage.setItem("Tag", tag);
  localStorage.setItem("URL", url);

  // Send the text to OpenAI
  var chatGPTText = prompt("Do you want to send this to Chat GPT", text);
  if (chatGPTText == null || chatGPTText == "") {
    return;
  }
  sendTextToOpenAI(chatGPTText);
};
