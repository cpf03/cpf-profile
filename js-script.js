document.addEventListener("DOMContentLoaded", function () {

    function setupToggle(buttonId, containerId) {
        const button = document.getElementById(buttonId);
        const container = document.getElementById(containerId);

        if (button && container) {
            button.addEventListener("click", function () {
                if (container.style.display === "none" || container.style.display === "") {
                    container.style.display = "block";
                    button.textContent = "Hide Photos";
                } else {
                    container.style.display = "none";
                    button.textContent = "Show Photos";
                }
            });
        }
    }

    setupToggle("showImageButton1", "imageContainer1");
    setupToggle("showImageButton2", "imageContainer2");
});
