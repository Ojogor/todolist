# todolist
**Persitent Todo list Chrome Extension**


Working demonstration:
https://github.com/Ojogor/todolist/assets/98194481/4a836732-fb42-45c7-bc57-2ebae4b173cc








Chrome Extension - Todo List Manager
This project is a Chrome extension that provides a simple and convenient way to manage a todo list. The extension adds a popup interface where users can view, add, and remove items from their todo list. The todo list is stored using the chrome.storage.sync API, ensuring that the list remains synchronized across devices when the user is signed in to Chrome.

Features
Retrieve and Display Todo List: The extension retrieves the todo list from storage and dynamically displays it in the popup. Each item in the list is represented by a checkbox, the item's text content, and a remove button.

Add New Items: Users can add new items to the todo list by entering the text in the input field provided and clicking the add button. The new item is immediately added to the list and stored in the storage.

Remove Items: Each item in the todo list has a remove button associated with it. Clicking the remove button removes the corresponding item from the list and updates the storage accordingly.

Checkbox State: The extension preserves the state of the checkboxes for each todo item. Users can mark an item as completed by checking the checkbox, and the state will be saved.

Getting Started
To use the Chrome extension locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/your-repo.git
Open the Chrome browser and go to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top right corner.
Click on the "Load unpacked" button and select the cloned repository folder.
The extension should be loaded and visible in the extensions list.
Click on the extension icon to open the popup and start managing your todo list.
Technologies Used
The project utilizes the following technologies and APIs:

HTML: The popup interface is built using HTML to structure the elements.
CSS: CSS is used to style the popup and provide a visually appealing interface.
JavaScript: The core functionality of the extension is implemented using JavaScript.
Chrome Extension API: The chrome.storage.sync API is used to store and retrieve the todo list.
Contributing
Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, feel free to submit an issue or create a pull request. Please follow the guidelines provided in CONTRIBUTING.md when contributing.

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code according to the terms of this license.

Acknowledgments
We would like to express our gratitude to the open-source community for their contributions and the resources that made this project possible.
