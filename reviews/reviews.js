// VARIABLES SECTION

const reviews = [
    {
        name: "Noa Oneal",
        jobTitle: "Computer Systems Manager",
        imgSrc: "../assets/img/person1.png",
        description:
            "Single-origin coffee glossier mlkshk humblebrag, tilde seitan celiac cornhole kickstarter schlitz selvage. Migas intelligentsia readymade, next level messenger bag cronut iPhone.",
    },
    {
        name: "Alexander Dawson",
        jobTitle: "IT Coordinator",
        imgSrc: "../assets/img/person2.png",
        description:
            "Fanny pack normcore squid sartorial pickled microdosing. Iceland photo booth tbh PBR&B. Poke man bun locavore authentic subway tile succulents health goth roof party biodiesel pickled deep v blue bottle.",
    },
    {
        name: "Nawal Moses",
        jobTitle: "Senior Database Administrator",
        imgSrc: "../assets/img/person3.png",
        description:
            "Mumblecore next level hoodie hashtag mixtape freegan. Williamsburg mustache shaman crucifix keffiyeh, cardigan narwhal umami schlitz gluten-free waistcoat whatever gastropub.",
    },
    {
        name: "Jamie-Leigh Washington",
        jobTitle: "Application Developer",
        imgSrc: "../assets/img/person4.png",
        description:
            "+1 art party chia viral, authentic PBR&B whatever next level pour-over tote bag lomo plaid letterpress cred. Asymmetrical air plant migas taxidermy distillery adaptogen wayfarers iPhone direct trade.",
    },
    {
        name: "Conrad Freeman",
        jobTitle: ".NET Developer",
        imgSrc: "../assets/img/person5.png",
        description:
            "Mustache artisan pabst gastropub, master cleanse hammock tumblr deep v live-edge vape single-origin coffee iceland shaman. Tacos iceland godard health goth hell of crucifix put a bird on it.",
    },
    {
        name: "Niall Sutton",
        jobTitle: "Senior Programmer",
        imgSrc: "../assets/img/person6.png",
        description:
            "PBR&B organic tumblr jianbing iceland, hell of +1 VHS XOXO trust fund roof party. Distillery la croix migas XOXO craft beer organic lomo cardigan.",
    },
    {
        name: "Isla-Rae Snyder",
        jobTitle: "Software Developer",
        imgSrc: "../assets/img/person7.jpeg",
        description:
            "Four loko normcore irony authentic austin viral humblebrag yr fam. Cardigan pop-up vegan drinking vinegar roof party iPhone hell of wayfarers vice sriracha hammock subway tile.",
    },
    {
        name: "Eren Ray",
        jobTitle: "Front End Developer",
        imgSrc: "../assets/img/person8.jpg",
        description:
            "Pitchfork yuccie fam master cleanse selfies echo park kickstarter hell of disrupt helvetica coloring book plaid kinfolk authentic. Tumeric helvetica copper mug kombucha bespoke retro letterpress cronut swag fingerstache cornhole.",
    },
    {
        name: "Vishal Booth",
        jobTitle: "Web Developer",
        imgSrc: "../assets/img/person9.png",
        description:
            "Lo-fi ethical shaman chambray fixie freegan. Paleo skateboard YOLO forage palo santo, bushwick hashtag fanny pack adaptogen poke shaman vice retro readymade.",
    },
    {
        name: "Kaitlin Miranda",
        jobTitle: "IT Manager",
        imgSrc: "../assets/img/person10.jpeg",
        description:
            "Schlitz portland meh, jianbing kinfolk chicharrones woke stumptown. Raw denim 8-bit mixtape shoreditch, biodiesel glossier dreamcatcher cliche poutine typewriter lumbersexual meditation four dollar toast air plant.",
    },
];

let currentIndex = 0;
const imgElement = document.getElementsByClassName("reviews-profile-picture-image")[0]; // there's only one class named like this
const nameElement = document.getElementsByClassName("reviews-name")[0];
const jobTitleElement = document.getElementsByClassName("reviews-job-title")[0];
const descriptionElement = document.getElementsByClassName("reviews-description")[0];

// FUNCTION SECTION

/**
 * Sets the necessary properties to view a review.
 */
const setReview = () => {
    const { imgSrc, name, jobTitle, description } = reviews[currentIndex];

    imgElement.src = imgSrc;
    nameElement.innerHTML = name;
    jobTitleElement.innerHTML = jobTitle;
    descriptionElement.innerHTML = description;
};

// EVENT HANDLER SECTION

/**
 * Loads the previous URL in the history list.
 */
const goBack = () => {
    window.history.back();
};

/**
 * Goes to the next review.
 */
const next = () => {
    currentIndex++;

    if (currentIndex > reviews.length - 1) {
        currentIndex = 0;
    }

    setReview();
};

/**
 * Goes to the previous review.
 */
const previous = () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    }

    setReview();
};

/**
 * Goes to the random review.
 */
const randomize = () => {
    currentIndex = Math.floor(Math.random() * reviews.length);

    setReview();
};

// FUNCTIONALITY SECTION

setReview();
