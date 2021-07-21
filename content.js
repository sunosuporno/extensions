window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.innerHTML = "Dark Mode";
    document.querySelector("#container").prepend(button)

    button.addEventListener('click', () => enableDarkMode())
}

function enableDarkMode(){
    document.getElementsByTagName("ytd-app")[0].style.backgroundColor = "white";
}