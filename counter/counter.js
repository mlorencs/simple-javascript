// VARIABLES SECTION

let value = 0;
const counterValueElement = document.getElementsByClassName("counter-value")[0]; // there's only one class named like this

// FUNCTION SECTION

/**
 * Toggles between classes to represent the state of counter value.
 *
 * Red color - negative value.
 * White color - value is zero.
 * Green color - positive value.
 */
const toggleClassNames = () => {
    counterValueElement.classList.toggle("negative", value < 0);
    counterValueElement.classList.toggle("zero", value === 0);
    counterValueElement.classList.toggle("positive", value > 0);
};

// EVENT HANDLER SECTION

/**
 * Loads the previous URL in the history list.
 */
const goBack = () => {
    window.history.back();
};

/**
 * Decrease counter value.
 */
const decrease = () => {
    value--;

    toggleClassNames();

    counterValueElement.innerHTML = value;
};

/**
 * Reset counter value.
 */
const reset = () => {
    value = 0;

    toggleClassNames();

    counterValueElement.innerHTML = value;
};

/**
 * Increase counter value.
 */
const increase = () => {
    value++;

    toggleClassNames();

    counterValueElement.innerHTML = value;
};

// FUNCTIONALITY SECTION

toggleClassNames();

counterValueElement.innerHTML = value;
