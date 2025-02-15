(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Press to know why I do",
    "Your smile",
    "Your laugh",
    "Your lips",
    "Your humor",
    "Your eyes",
    "Your confidence",
    "You’re pretty",
    "You’re beautiful",
    "You’re gorgeous",
    "You’re funny",
    "You’re smart",
    "You’re strong",
    "You’re passionate",
    "You’re honest",
    "Your voice",
    "Your support",
    "Your love",
    "Your big heart",
    "You’re my baby",
    "Your warmth",
    "You’re my comfort",
    "Your patience with me",
    "Your hugs",
    "You’re caring",
    "You’re gentle",
    "You’re my motivation",
    "Your soul",
    "You believe in me",
    "You’re intelligent",
    "You’re so sweet",
    "You’re trustworthy",
    "You’re understanding",
    "Your dedication",
    "Your compliments",
    "Your little jokes",
    "You’re charming",
    "Your grace",
    "Your effort",
    "Your kisses",
    "Your cute ass smile",
    "Your elegance",
    "You’re cute",
    "Your scent",
    "Your affection",
    "You’re perfect",
    "Your kindness",
    "Your spontaneity",
    "Your playfulness",
    "Your cute little habits",
    "Your cuddles",
    "Our late-night talks",
    "Your cute voice",
    "Your ambition",
    "Your softness",
    "Your resilience",
    "Your excitement when you talk about things you love",
    "Your ability to make me feel safe",
    "Your loyalty",
    "Your hands",
    "Your energy",
    "Your beautiful mind",
    "Your curiosity",
    "Your adorable reactions",
    "Your texts",
    "Your sneezing",
    "Your ability to brighten my day",
    "You're heartwarming",
    "Your beautiful chaos",
    "Your love for the little things",
    "Your stpidity sometimes",
    "Our goofy moments",
    "Your soft giggles",
    "Your determination",
    "Your love for me",
    "Your presence in my life",
    "Your existence",
    "Your snoring",
    "Your ability to make me laugh",
    "Your ability to make me feel loved",
    "Seen",
    "Heard",
    "Your cute smile",
    "Your beautiful eyes",
    "Your pretty hair",
    "Your love for my food",
    "You make me laugh",
    "You make me happy",
    "You make me feel special",
    "Your bullying",
    "You're my home",
    "Your reaction when you eat my food makes me so happy",
    "You're so fucking cute",
    "You're my star",
    "You're the most important person b hayete",
    "Your stubbornness",
    "Your cute little face",
    "The way you hold my hand when we're in the car",
    "The way you hold my hand when we sleep",
    "You love me",
    "The way you look at me with love in your eyes",
    "The way you make even the worst days better",
    "The fact that I can’t imagine my life without you",
    "You're my forever"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}