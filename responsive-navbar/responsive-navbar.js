// VARIABLES SECTION

let isNavigationOpen = false;
const relativeLinksContainerElement = document.getElementsByClassName(
    "relative-links-container",
)[0]; // there's only one class named like this

// EVENT HANDLER SECTION

/**
 * Loads the previous URL in the history list.
 */
const goBack = () => {
    window.history.back();
};

/**
 * Opens/closes navigation.
 */
const toggleNavigation = () => {
    isNavigationOpen = !isNavigationOpen;

    if (isNavigationOpen) {
        relativeLinksContainerElement.classList.add("active");
    } else {
        relativeLinksContainerElement.classList.remove("active");
    }
};
