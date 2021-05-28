// VARIABLES SECTION

let timeout;
let interval = 0; // stop = 20 s; warning = 5 s; go = 10 s
const trafficLights = document.getElementsByClassName("light"); // 0 - stop light (red); 1 - warning light (orange); 2 - go light (green)

// EVENT HANDLER SECTION

/**
 * Loads the previous URL in the history list.
 */
const goBack = () => {
    window.history.back();
};

// FUNCTION SECTION

/**
 * Returns currently active traffic light as the default traffic light.
 * @param trafficLights - consists of 3 lights - stop light (red), warning light (orange) and go light (green).
 */
const getDefaultLight = () => {
    for (let index = 0; index < trafficLights.length; index++) {
        if (trafficLights[index].className.includes("active-stop")) {
            return "stop";
        } else if (trafficLights[index].className.includes("active-warning")) {
            return "warning";
        } else if (trafficLights[index].className.includes("active-go")) {
            return "go";
        }
    }
};

/**
 * Returns light index.
 * @param light - traffic light
 */
const findLightIndex = (light) => {
    for (let index = 0; index < trafficLights.length; index++) {
        if (trafficLights[index].className.includes(light)) {
            return index;
        }
    }
};

/**
 * Chnages traffic light's signals.
 *
 * Traffic light functionality can be found here.
 */
const controlTrafficLight = () => {
    const currentLightIndex = findLightIndex(currentLight);
    const previousLightIndex = findLightIndex(previousLight);
    const activeClass = `active-${previousLight}`;

    // Check if previous light is active
    // If previous light is active, remove the active class
    if (trafficLights[previousLightIndex].className.includes(activeClass)) {
        trafficLights[previousLightIndex].classList.remove(activeClass);
    }

    trafficLights[currentLightIndex].classList.add(`active-${currentLight}`); // make current light active

    switch (currentLight) {
        case "warning":
            interval = 5000; // warning light (orange) duration is 5 seconds

            timeout = setTimeout(() => {
                // Check if previous light is stop
                // If previous light is stop, then the next light will be the go light (green)
                // If previous light is go, then the next light will be the stop light (red)
                if (previousLight === "stop") {
                    currentLight = "go";
                } else {
                    currentLight = "stop";
                }

                previousLight = "warning"; // current light becomes previous light

                controlTrafficLight();
            }, interval);

            break;
        case "go":
            interval = 10000; // go light (green) duration is 10 seconds

            timeout = setTimeout(() => {
                currentLight = "warning"; // next light will be the warning light (orange)
                previousLight = "go"; // current light becomes previous light

                controlTrafficLight();
            }, interval);

            break;
        default:
            interval = 20000; // stop light (red) duration is 20 seconds

            timeout = setTimeout(() => {
                currentLight = "warning"; // next light will be the warning light (orange)
                previousLight = "stop"; // current light becomes previous light

                controlTrafficLight();
            }, interval);
    }
};

// FUNCTIONALITY SECTION

let currentLight = getDefaultLight();
let previousLight = "stop";

timeout = setTimeout(() => {
    controlTrafficLight();
}, interval);
