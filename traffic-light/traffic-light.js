// VARIABLES SECTION

let timeout;
let interval = 0; // stop = 20 s; warning = 5 s; go = 10 s
const trafficLights = document.getElementsByClassName("light"); // 0 - stop light (red); 1 - warning light (orange); 2 - go light (green)

// FUNCTION SECTION

/**
 * This function loads the previous URL in the history list.
 */
const goBack = () => {
    window.history.back();
};

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

const controlTrafficLight = () => {
    const currentLightIndex = findLightIndex(currentLight);
    const previousLightIndex = findLightIndex(previousLight);
    const activeClass = `active-${previousLight}`;

    console.log("Hello console!");

    if (trafficLights[previousLightIndex].className.includes(activeClass)) {
        trafficLights[previousLightIndex].classList.remove(activeClass);
    }

    trafficLights[currentLightIndex].classList.add(`active-${currentLight}`);

    switch (currentLight) {
        case "warning":
            interval = 5000;

            timeout = setTimeout(() => {
                if (previousLight === "stop") {
                    currentLight = "go";
                } else {
                    currentLight = "stop";
                }

                previousLight = "warning";

                controlTrafficLight();
            }, interval);

            break;
        case "go":
            interval = 10000;

            timeout = setTimeout(() => {
                currentLight = "warning";
                previousLight = "go";

                controlTrafficLight();
            }, interval);

            break;
        default:
            interval = 20000;

            timeout = setTimeout(() => {
                currentLight = "warning";
                previousLight = "stop";

                controlTrafficLight();
            }, interval);
    }
};

let currentLight = getDefaultLight();
let previousLight = "stop";

timeout = setTimeout(() => {
    controlTrafficLight();
}, interval);
