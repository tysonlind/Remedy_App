let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#toggle");

//Check if darkmode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
    // add class dark-theme to body
    document.body.classList.add("dark-theme");
    // update darkMode in local storage
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    // add class dark-theme to body
    document.body.classList.remove("dark-theme");
    // update darkMode in local storage
    localStorage.setItem("darkMode", null);
}

//have browser check last local storage theme save and render that for the client
if (darkMode === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    console.log(darkMode);
    if(darkMode !== "enabled"){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
