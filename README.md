Animal Characters
This is a simple web application that allows users to create and display animal characters. Users can enter the name and image URL for an animal character through a form, and the application will dynamically display the created characters in a container.

Usage
To use the Animal Characters application, follow these steps:

Clone or download the repository to your local machine.

Open the index.html file in a web browser.

The HTML file contains a form where users can enter the name and image URL for an animal character. Fill in the form fields and click the "Submit" button.

The submitted character will be dynamically displayed in the container below the form.

You can continue submitting more characters by entering their details in the form and clicking "Submit". Each new character will be added to the existing ones in the container.

HTML Structure
The HTML file (index.html) consists of the following elements:

<header>: Displays the heading "FLATACULTIES".

<div class="container">: Contains the form for creating animal characters.

<form id="character-form">: The form element where users can enter the name and image URL for a character.

<input type="text" id="name" name="name">: Text input field for entering the character's name.

<input type="text" id="URL" name="URL">: Text input field for entering the character's image URL.

<button type="submit">Submit</button>: Submit button for submitting the form.

<div class="container" id="cont">: The container element where the created characters will be displayed.

JavaScript Logic
The JavaScript code in index.js handles the form submission and dynamic display of the characters.

When the form is submitted, the form data (character name and image URL) is captured.

A new HTML element (<p>) is created for the character name, and the name value is assigned to its textContent property.

An HTML element (<img>) is created for the character image, and the image URL is assigned to its src attribute.

The character name element and image element are appended to the container (<div id="cont">) in the HTML.

Each new character is displayed below the previous ones, creating a list of animal characters.

Users can continue submitting new characters, and they will be added to the existing list in the container.

Character Assembly
This is a JavaScript function that assembles characters by fetching data from a provided URL and dynamically creating HTML elements. The function creates a character assembly based on the fetched data and adds interactive features such as displaying an image, vote count, and a reset button for each character.

Usage
To use the function, follow these steps:

Ensure that the server is running and serving the character data from the specified URL (http://localhost:3000/characters). Make sure the URL is accessible and returns the expected JSON data.

Include the JavaScript code in your project or script file.

The assembleCharacters() function is called when the DOM content is loaded (DOMContentLoaded event). This ensures that the function is executed when the HTML document is fully parsed.

The assembleCharacters() function performs a fetch request to the specified URL, expecting JSON data in response. It then processes the fetched data and creates the character assembly based on the provided data.

For each character in the fetched data, the function creates a paragraph element (<p>) and assigns the character's name to its textContent property.

The function appends the created paragraph element to a container element specified by the ID "cont". Make sure to have an HTML element with the "cont" ID in your HTML markup.

An event listener is added to each character element. When clicked, it performs the following actions:

Creates an image element (<img>) and assigns the character's image URL to its src attribute.
Appends the image element to the character element.
Creates an anchor element (<a>) and assigns the vote count text to its textContent property.
Appends the vote element to the image element.
Adds a click event listener to the reset button. When clicked, it increments the vote count and updates the displayed count.
The event listener is set to execute only once ({once: true}). This ensures that the event handler is removed after the first click.

The character assembly is created and displayed when the DOM content is loaded.

Animal Characters
This is a web application that allows users to create and display animal characters. Users can enter the name and image URL for an animal character through a form, and the application will dynamically display the created characters in a container. Users can also vote for their favorite characters.

Usage
To use the Animal Characters application, follow these steps:

Clone or download the repository to your local machine.

Open the index.html file in a web browser.

The HTML file contains a form where users can enter the name and image URL for an animal character. Fill in the form fields and click the "Submit" button.

The submitted character will be dynamically displayed in the container below the form, along with its name and image.

Each character will also have a vote button. Clicking the vote button will increase the vote count for that character.

Users can continue submitting more characters and voting for their favorites.

JSON Data
The characters in the application are sourced from a JSON file named characters.json. The JSON file contains an array of character objects, each having the following properties:

id: Unique identifier for the character.
name: Name of the character.
image: URL of the character's image.
votes: Number of votes received by the character.