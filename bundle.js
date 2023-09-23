const body = document.body;
const bgImg = document.querySelector("#bgimg");
const mode = document.querySelector('.modeswitch');
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const inputContainer = document.querySelector(".inputcontainer");
const taskContainer = document.querySelector(".taskcontainer");
const mobileTask = document.querySelector(".mobiletask");
const inputedTask = document.querySelectorAll(".inputedtask");
const inputInput = document.querySelector(".inputcontainer input");
const roundSpan = document.querySelectorAll(".round");
const roundImg = document.querySelector(".round img");


// const allItem = document.querySelector('.allitem');

// Check if the mode is stored in localStorage
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

function updateMode() {

    if (isDarkMode) {
        // Switch to light mode
        body.style.backgroundColor = "var(--VeryLightGray)";
        const newImageUrl = './images/bg-desktop-light.jpg';
        bgImg.src = newImageUrl;
        moon.style.display = 'inline';
        sun.style.display = 'none';
        inputContainer.style.backgroundColor = 'var(--VeryLightGray)';
        taskContainer.style.backgroundColor = 'var(--VeryLightGray)';
        mobileTask.style.backgroundColor = 'var(--VeryLightGray)';
        inputedTask.forEach((element) => {
            element.style.color = 'var(--VeryDarkGrayishBlue)';
        });
        inputInput.style.color = 'var(--VeryDarkGrayishBlue)';
        roundSpan.forEach((e) => {
            e.style.border = '2px solid var(--LightGrayishBlue)';
        })



    } else {
        // Switch to dark mode
        body.style.backgroundColor = "var(--VeryDarkBlue)";
        const newImageUrl = './images/bg-desktop-dark.jpg';
        bgImg.src = newImageUrl;
        moon.style.display = 'none';
        sun.style.display = 'inline';
        inputContainer.style.backgroundColor = 'var(--VeryDarkDesaturatedBlue)';
        taskContainer.style.backgroundColor = 'var(--VeryDarkDesaturatedBlue)';
        mobileTask.style.backgroundColor = 'var(--VeryDarkDesaturatedBlue)';
        inputedTask.forEach((element) => {
            element.style.color = 'var(--LightGrayishBlue)';
        });
        inputInput.style.color = 'var(--LightGrayishBlue)';
        roundSpan.forEach((e) => {
            e.style.border = '2px solid var(--VeryDarkGrayishBlue)';
        })
    }
}



// Initial mode setup
updateMode();

// Toggle the mode and save it to localStorage
function toggleMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    updateMode();
}

mode.addEventListener("click", toggleMode);


roundSpan.forEach((e) => {
    e.addEventListener("click", (event) => {
        event.target.style.background = 'var(--CheckBackground)';
        roundImg.style.display = 'inline';

    });
});


