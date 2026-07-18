document.addEventListener("DOMContentLoaded", function () {

```
/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.textContent = "☾";

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
    );

}


/* =========================
   LANGUAGE DROPDOWN
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


                    localStorage.setItem(
                        "language",
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

}


/* =========================
   LANGUAGE TRANSLATION
========================= */

function changeLanguage(
    language
) {


    const translations = {


        /* =====================
           ENGLISH
        ===================== */

        en: {

            navDiscover:
                "Discover",

            navTrending:
                "Trending",

            navHow:
                "How it works",

            tryDemo:
                "Try the demo ↗",

            heroEyebrow:
                "AI-POWERED FOOD DISCOVERY",

            heroTitle:
                "Discover food<br><span>you'll love.</span>",

            heroDescription:
                "Find your next favourite meal with a little help from AI.",

            startDiscovering:
                "Start discovering ↗",

            trendingLabel:
                "TRENDING NOW",

            trendingTitle:
                "What people are craving",

            seeAll:
                "See all →",

            japanese:
                "Japanese",

            ramenTitle:
                "Rich Tonkotsu Ramen",

            sushiTitle:
                "Fresh Sushi",

            matchaTitle:
                "Premium Matcha",

            howLabel:
                "HOW IT WORKS",

            howTitle:
                "Your next favourite meal<br>is closer than you think.",

            readyLabel:
                "READY TO EXPLORE?",

            demoTitle:
                "Let AI help you<br>find something delicious.",

            modalBrand:
                "MING AI FOOD",

            modalTitle:
                "What are you<br>craving today?",

            modalDescription:
                "Tell Ming AI what you're in the mood for. There are no wrong answers.",

            warm:
                "🍜 Something warm",

            spicy:
                "🌶️ Something spicy",

            indulgent:
                "🍔 Something indulgent",

            healthy:
                "🥗 Something healthy",

            foodPlaceholder:
                "Example: I'm tired, it's raining and I want something warm and comforting...",

            askMingAI:
                "Ask Ming AI ✨",

            loadingText:
                "Ming AI is thinking about food...",

            recommendationLabel:
                "MING AI RECOMMENDS",

            resultDescription:
                "A rich, warming bowl of ramen with a spicy kick.",

            warmReason:
                "✓ Warm",

            comfortingReason:
                "✓ Comforting",

            flavourReason:
                "✓ Full of flavour",

            nearbyButton:
                "📍 Find this near me",

            footerDescription:
                "Discover something delicious."

        },


        /* =====================
           CHINESE
        ===================== */

        zh: {

            navDiscover:
                "探索",

            navTrending:
                "热门",

            navHow:
                "运作方式",

            tryDemo:
                "试用演示 ↗",

            heroEyebrow:
                "AI 驱动的美食探索",

            heroTitle:
                "发现美食<br><span>找到你的最爱。</span>",

            heroDescription:
                "让 AI 帮助你找到下一道最喜欢的美食。",

            startDiscovering:
                "开始探索 ↗",

            trendingLabel:
                "当前热门",

            trendingTitle:
                "大家正在想吃什么",

            seeAll:
                "查看全部 →",

            japanese:
                "日本料理",

            ramenTitle:
                "浓郁豚骨拉面",

            sushiTitle:
                "新鲜寿司",

            matchaTitle:
                "高级抹茶",

            howLabel:
                "运作方式",

            howTitle:
                "你的下一顿最爱美食<br>比你想象的更近。",

            readyLabel:
                "准备好探索了吗？",

            demoTitle:
                "让 AI 帮助你<br>找到美味的食物。",

            modalBrand:
                "MING AI 美食",

            modalTitle:
                "今天<br>想吃什么？",

            modalDescription:
                "告诉 Ming AI 你现在想吃什么。没有错误的答案。",

            warm:
                "🍜 温暖的食物",

            spicy:
                "🌶️ 辣味美食",

            indulgent:
                "🍔 丰盛享受",

            healthy:
                "🥗 健康美食",

            foodPlaceholder:
                "例如：我累了，外面正在下雨，我想吃一些温暖又舒适的食物...",

            askMingAI:
                "询问 Ming AI ✨",

            loadingText:
                "Ming AI 正在思考美食...",

            recommendationLabel:
                "MING AI 推荐",

            resultDescription:
                "一碗浓郁温暖、带有辛辣风味的豚骨拉面。",

            warmReason:
                "✓ 温暖",

            comfortingReason:
                "✓ 舒适",

            flavourReason:
                "✓ 充满风味",

            nearbyButton:
                "📍 查找附近美食",

            footerDescription:
                "发现美味的食物。"

        },


        /* =====================
           MALAY
        ===================== */

        ms: {

            navDiscover:
                "Terokai",

            navTrending:
                "Trending",

            navHow:
                "Cara ia berfungsi",

            tryDemo:
                "Cuba demo ↗",

            heroEyebrow:
                "PENEMUAN MAKANAN BERKUASA AI",

            heroTitle:
                "Temui makanan<br><span>yang anda akan suka.</span>",

            heroDescription:
                "Cari hidangan kegemaran anda yang seterusnya dengan bantuan AI.",

            startDiscovering:
                "Mula meneroka ↗",

            trendingLabel:
                "SEDANG TRENDING",

            trendingTitle:
                "Apa yang orang sedang mengidam",

            seeAll:
                "Lihat semua →",

            japanese:
                "Jepun",

            ramenTitle:
                "Ramen Tonkotsu yang Kaya",

            sushiTitle:
                "Sushi Segar",

            matchaTitle:
                "Matcha Premium",

            howLabel:
                "CARA IA BERFUNGSI",

            howTitle:
                "Hidangan kegemaran anda seterusnya<br>lebih dekat daripada yang anda sangka.",

            readyLabel:
                "SEDIA UNTUK MENEROKA?",

            demoTitle:
                "Biarkan AI membantu anda<br>mencari sesuatu yang lazat.",

            modalBrand:
                "MING AI FOOD",

            modalTitle:
                "Apa yang anda<br>teringin hari ini?",

            modalDescription:
                "Beritahu Ming AI apa yang anda sedang teringin. Tiada jawapan yang salah.",

            warm:
                "🍜 Sesuatu yang panas",

            spicy:
                "🌶️ Sesuatu yang pedas",

            indulgent:
                "🍔 Sesuatu yang mengenyangkan",

            healthy:
                "🥗 Sesuatu yang sihat",

            foodPlaceholder:
                "Contoh: Saya penat, hujan sedang turun dan saya mahu sesuatu yang panas dan menenangkan...",

            askMingAI:
                "Tanya Ming AI ✨",

            loadingText:
                "Ming AI sedang memikirkan makanan...",

            recommendationLabel:
                "MING AI MENCADANGKAN",

            resultDescription:
                "Semangkuk ramen tonkotsu yang kaya, panas dan mempunyai rasa pedas.",

            warmReason:
                "✓ Panas",

            comfortingReason:
                "✓ Menenangkan",

            flavourReason:
                "✓ Penuh dengan rasa",

            nearbyButton:
                "📍 Cari makanan berdekatan",

            footerDescription:
                "Temui sesuatu yang lazat."

        }

    };


    const selectedLanguage =
        translations[language];


    if (
        !selectedLanguage
    ) {

        return;

    }


    /* =========================
       TRANSLATE NORMAL TEXT
    ========================= */

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(
            function (element) {


                const key =
                    element.getAttribute(
                        "data-i18n"
                    );


                if (
                    selectedLanguage[key]
                ) {

                    element.innerHTML =
                        selectedLanguage[key];

                }

            }
        );


    /* =========================
       TRANSLATE PLACEHOLDERS
    ========================= */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(
            function (element) {


                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );


                if (
                    selectedLanguage[key]
                ) {

                    element.placeholder =
                        selectedLanguage[key];

                }

            }
        );

}


/* =========================
   LOAD SAVED LANGUAGE
========================= */

const savedLanguage =
    localStorage.getItem(
        "language"
    );


if (
    savedLanguage
) {

    changeLanguage(
        savedLanguage
    );


    if (
        languageButton
    ) {

        languageButton.textContent =
            savedLanguage.toUpperCase() +
            " ▾";

    }

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

if (
    openFoodDemo &&
    foodModal
) {

    openFoodDemo.addEventListener(
        "click",
        function () {

            foodModal.classList.add(
                "active"
            );

        }
    );

}


/* =========================
   CLOSE MODAL
========================= */

if (
    closeFoodDemo &&
    foodModal
) {

    closeFoodDemo.addEventListener(
        "click",
        function () {

            foodModal.classList.remove(
                "active"
            );

        }
    );

}


/* =========================
   CLICK OUTSIDE MODAL
========================= */

const modalOverlay =
    document.querySelector(
        ".food-modal-overlay"
    );


if (
    modalOverlay &&
    foodModal
) {

    modalOverlay.addEventListener(
        "click",
        function () {

            foodModal.classList.remove(
                "active"
            );

        }
    );

}


/* =========================
   SUGGESTION BUTTONS
========================= */

const suggestionButtons =
    document.querySelectorAll(
        ".suggestion-button"
    );


suggestionButtons.forEach(
    function (button) {


        button.addEventListener(
            "click",
            function () {


                if (
                    !foodInput
                ) {

                    return;

                }


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
);


/* =========================
   FAKE AI RESPONSE
========================= */

if (
    findFoodButton &&
    foodInput &&
    foodLoading &&
    foodResult &&
    resultTitle &&
    resultDescription
) {


    findFoodButton.addEventListener(
        "click",
        function () {


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
    );

}
```

});
