console.log("Ming AI Food script loaded");

document.addEventListener(
"DOMContentLoaded",
function () {

```
    /* =========================
       DARK MODE
    ========================= */


    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    const savedTheme =
        localStorage.getItem(
            "theme"
        );


    if (
        savedTheme === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.textContent =
            "☾";

    }


    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDarkMode =
                document.body.classList.contains(
                    "dark-mode"
                );


            if (
                isDarkMode
            ) {

                themeToggle.textContent =
                    "☾";


                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                themeToggle.textContent =
                    "☼";


                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );


    /* =========================
       GET MODAL ELEMENTS
    ========================= */


    const openFoodDemo =
        document.getElementById(
            "openFoodDemo"
        );


    const closeFoodDemo =
        document.getElementById(
            "closeFoodDemo"
        );


    const foodModal =
        document.getElementById(
            "foodModal"
        );


    const foodModalOverlay =
        document.querySelector(
            ".food-modal-overlay"
        );


    const foodInput =
        document.getElementById(
            "foodInput"
        );


    const findFoodButton =
        document.getElementById(
            "findFoodButton"
        );


    const foodLoading =
        document.getElementById(
            "foodLoading"
        );


    const foodResult =
        document.getElementById(
            "foodResult"
        );


    const resultTitle =
        document.getElementById(
            "resultTitle"
        );


    const resultDescription =
        document.getElementById(
            "resultDescription"
        );


    /* =========================
       OPEN POPUP
    ========================= */


    openFoodDemo.onclick =
        function () {

            foodModal.classList.add(
                "active"
            );

        };


    /* =========================
       CLOSE POPUP
    ========================= */


    closeFoodDemo.onclick =
        function () {

            foodModal.classList.remove(
                "active"
            );

        };


    /* =========================
       CLICK OUTSIDE
    ========================= */


    foodModalOverlay.onclick =
        function () {

            foodModal.classList.remove(
                "active"
            );

        };


    /* =========================
       SUGGESTION BUTTONS
    ========================= */


    const suggestionButtons =
        document.querySelectorAll(
            ".suggestion-button"
        );


    suggestionButtons.forEach(
        function (button) {

            button.onclick =
                function () {

                    const suggestion =
                        button.textContent
                            .replace(
                                /[^\w\s]/gi,
                                ""
                            )
                            .trim();


                    foodInput.value =
                        "I feel like eating " +
                        suggestion.toLowerCase();

                };

        }
    );


    /* =========================
       FAKE AI RESPONSE
    ========================= */


    findFoodButton.onclick =
        function () {


            const userInput =
                foodInput.value.trim();


            if (
                userInput === ""
            ) {

                foodInput.focus();

                return;

            }


            foodResult.classList.remove(
                "active"
            );


            foodLoading.classList.add(
                "active"
            );


            findFoodButton.disabled =
                true;


            findFoodButton.textContent =
                "Ming AI is thinking...";


            setTimeout(
                function () {


                    foodLoading.classList.remove(
                        "active"
                    );


                    foodResult.classList.add(
                        "active"
                    );


                    resultTitle.textContent =
                        "Spicy Tonkotsu Ramen";


                    resultDescription.textContent =
                        "A rich, warming bowl of ramen with a spicy kick. Perfect for when you want something comforting, flavourful and satisfying.";


                    findFoodButton.disabled =
                        false;


                    findFoodButton.textContent =
                        "Ask Ming AI ✨";


                },
                1800
            );

        };

}
```

);
