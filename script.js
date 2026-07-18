console.log("Ming AI Food script loaded");

/* =========================
DARK MODE
========================= */

const themeToggle = document.getElementById(
"themeToggle"
);

if (localStorage.getItem("theme") === "dark") {

```
document.body.classList.add(
    "dark-mode"
);

themeToggle.textContent = "☾";
```

}

themeToggle.addEventListener(
"click",
function () {

```
    document.body.classList.toggle(
        "dark-mode"
    );


    const isDarkMode =
        document.body.classList.contains(
            "dark-mode"
        );


    if (isDarkMode) {

        themeToggle.textContent = "☾";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeToggle.textContent = "☼";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

}
```

);

/* =========================
GET FOOD DEMO ELEMENTS
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
OPEN DEMO POPUP
========================= */

openFoodDemo.addEventListener(
"click",
function () {

```
    foodModal.classList.add(
        "active"
    );

}
```

);

/* =========================
CLOSE DEMO POPUP
========================= */

closeFoodDemo.addEventListener(
"click",
function () {

```
    foodModal.classList.remove(
        "active"
    );

}
```

);

/* =========================
CLICK OUTSIDE TO CLOSE
========================= */

foodModalOverlay.addEventListener(
"click",
function () {

```
    foodModal.classList.remove(
        "active"
    );

}
```

);

/* =========================
FOOD SUGGESTIONS
========================= */

const suggestionButtons =
document.querySelectorAll(
".suggestion-button"
);

suggestionButtons.forEach(
function (button) {

```
    button.addEventListener(
        "click",
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

        }
    );

}
```

);

/* =========================
FAKE AI RESPONSE
========================= */

findFoodButton.addEventListener(
"click",
function () {

```
    const userInput =
        foodInput.value.trim();


    if (userInput === "") {

        foodInput.focus();


        foodInput.placeholder =
            "Tell Ming AI what you feel like eating first...";


        return;

    }


    /* HIDE PREVIOUS RESULT */

    foodResult.classList.remove(
        "active"
    );


    /* SHOW FAKE LOADING */

    foodLoading.classList.add(
        "active"
    );


    findFoodButton.disabled =
        true;


    findFoodButton.textContent =
        "Ming AI is thinking...";


    /* FAKE AI THINKING TIME */

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

}
```

);
