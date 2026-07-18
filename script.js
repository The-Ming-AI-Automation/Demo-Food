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

```
document.body.classList.add(
    "dark-mode"
);

themeToggle.textContent =
    "☾";
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
```

);

/* =========================
LANGUAGE SELECTOR
========================= */

const languageButton =
document.getElementById(
"languageButton"
);

const languageMenu =
document.getElementById(
"languageMenu"
);

if (
languageButton &&
languageMenu
) {

```
languageButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        languageMenu.classList.toggle(
            "active"
        );

    }
);


const languageOptions =
    languageMenu.querySelectorAll(
        "[data-language]"
    );


languageOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {


                const language =
                    option.getAttribute(
                        "data-language"
                    );


                languageButton.textContent =
                    language.toUpperCase() +
                    " ▾";


                languageMenu.classList.remove(
                    "active"
                );


                changeLanguage(
                    language
                );

            }
        );

    }
);


document.addEventListener(
    "click",
    function () {

        languageMenu.classList.remove(
            "active"
        );

    }
);
```

}

/* =========================
LANGUAGE TRANSLATION
========================= */

function changeLanguage(
language
) {

```
const heroEyebrow =
    document.querySelector(
        ".hero .eyebrow"
    );


const heroTitle =
    document.querySelector(
        ".hero h1"
    );


const heroDescription =
    document.querySelector(
        ".hero-description"
    );


if (
    language === "en"
) {

    heroEyebrow.textContent =
        "AI-POWERED FOOD DISCOVERY";


    heroTitle.innerHTML =
        "Discover food<br><span>you'll love.</span>";


    heroDescription.textContent =
        "Find your next favourite meal with a little help from AI.";

}


if (
    language === "zh"
) {

    heroEyebrow.textContent =
        "AI 驱动的美食探索";


    heroTitle.innerHTML =
        "发现美食<br><span>找到你的最爱。</span>";


    heroDescription.textContent =
        "让 AI 帮助你找到下一道最喜欢的美食。";

}


if (
    language === "ms"
) {

    heroEyebrow.textContent =
        "AI 驱动的美食探索";


    heroTitle.innerHTML =
        "Temui makanan<br><span>yang anda sukai.</span>";


    heroDescription.textContent =
        "Cari hidangan kegemaran anda yang seterusnya dengan bantuan AI.";

}
```

}

/* =========================
AI FOOD DEMO
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
OPEN MODAL
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
CLOSE MODAL
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
CLICK OUTSIDE MODAL
========================= */

document
.querySelector(
".food-modal-overlay"
)
.addEventListener(
"click",
function () {

```
        foodModal.classList.remove(
            "active"
        );

    }
);
```

/* =========================
SUGGESTION BUTTONS
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


            const text =
                button.textContent
                    .replace(
                        /[^\w\s]/gi,
                        ""
                    )
                    .trim();


            foodInput.value =
                "I feel like eating " +
                text.toLowerCase();

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


    if (
        !userInput
    ) {

        foodInput.focus();


        foodInput.placeholder =
            "Tell Ming AI what you feel like eating first...";


        return;

    }


    /* HIDE OLD RESULT */

    foodResult.classList.remove(
        "active"
    );


    /* SHOW LOADING */

    foodLoading.classList.add(
        "active"
    );


    findFoodButton.disabled =
        true;


    findFoodButton.textContent =
        "Ming AI is thinking...";


    /* FAKE AI RESPONSE */

    setTimeout(
        function () {


            foodLoading.classList.remove(
                "active"
            );


            foodResult.classList.add(
                "active"
            );


            findFoodButton.disabled =
                false;


            findFoodButton.textContent =
                "Ask Ming AI ✨";


            resultTitle.textContent =
                "Spicy Tonkotsu Ramen";


            resultDescription.textContent =
                "A rich, warming bowl of ramen with a spicy kick. Perfect when you want something comforting, satisfying and full of flavour.";


        },
        1800
    );

}
```

);
