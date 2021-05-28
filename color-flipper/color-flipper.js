// VARIABLES SECTION

let backgroundColor;
let hexCode = document.getElementsByClassName("background-color")[0]; // there's only one class named like this
let cssText;
const style = document.createElement("style");

// EVENT HANDLER SECTION

/**
 * Loads the previous URL in the history list.
 */
const goBack = () => {
    window.history.back();
};

/**
 * Changes the background color.
 *
 * This is a function, as well as an event handler.
 */
const changeBackgroundColor = () => {
    backgroundColor = generateRandomColor();
    hexCode.innerHTML = backgroundColor;
    hexCode.style.color = backgroundColor;
    cssText = `button:hover { background: #f7df1e; color: ${backgroundColor} }`;

    addStyle(cssText);

    document.body.style.backgroundColor = backgroundColor;
};

// FUNCTION SECTION

/**
 * Generates a random color.
 */
const generateRandomColor = () => {
    const characters = "0123456789ABCDEF"; // all the possible characters for creating a HEX color code
    let color = "#"; // HEX color code starts with a hashtag

    // HEX color code consists of 6 characters, excluding hashtag - #RRGGBB
    for (let index = 0; index < 6; index++) {
        color += characters[Math.floor(Math.random() * characters.length)]; // randomly picks a character from the characters string from 0 to 16
    }

    return color;
};

/**
 * Adds a new stylesheet.
 * @param cssText - styling to include into the new stylesheet
 */
const addStyle = (cssText) => {
    style.appendChild(document.createTextNode(cssText));
    document.getElementsByTagName("head")[0].appendChild(style);
};

// FUNCTIONALITY SECTION

changeBackgroundColor();
