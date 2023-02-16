# CADO Extension

## What is it?

CADO name comes from “CApturing information” and “DO something”.

## Features

### Capturing Information

- [x] Keyboard shortcut. (Ctrl + M)
- [x] On Click, the colour of HTML element changes to red.
- [x] On click, text of HTML element is stored.
- [x] After saving, alert the user that the content has been saved.

### Storage

- [x] On click, text of HTML element is stored in local storage.
- [ ] Saved data should be shown on popup.
- [x] The id of the captured element along with the source URL must be saved

### Display

- [x] After capturing the text from the element, display it to the user for confirmation
- [ ] Show a list of captured elements on the popover menu. 
- [ ] Add an option to show captures of the current website only
- [x] Show relevant metadata like the timestamp of capture and source URL

### Do something

- [x] Use the captured text as input and send it to OpenAI GPT3 API along with a relevant prompt.
- [x] Display the result from the GPT3 API and store the result in localstorage

## Screenshots

![Screenshot from 2023-02-16 18-39-16](https://user-images.githubusercontent.com/33419526/219373824-982ee5b3-5423-4d8f-ac70-a3672a15d1d3.png)
![Screenshot from 2023-02-16 18-39-06](https://user-images.githubusercontent.com/33419526/219373885-83d8b668-0228-43d8-a09e-8b75b5a7c3d3.png)
![Screenshot from 2023-02-16 23-37-23](https://user-images.githubusercontent.com/33419526/219451249-1585665b-efda-4092-806c-c21f5f38bbb5.png)

## Problems/Issues

- Since the project uses vanilla js, i could not find way to sore ```api-keys``` of OpenAI safely. The repo has imported secret key but that wont work in local. Use your own key in local.
![image](https://user-images.githubusercontent.com/33419526/219459741-6cb5eed9-2548-4df9-8460-8b646bad06f9.png)
Obviouly one way was to use boilerplate from https://github.com/lxieyang/chrome-extension-boilerplate-react

- The incomplete features are moslty related to popup menu. The initial features were done using the content script and over the time, i developed the features keeping content script architecture in mind. Later i realised i could have used popup menu before using the content script. So beacuse of limited time, I improved the existing features instead of revamping the whole work flow of project.

