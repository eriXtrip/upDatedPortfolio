const themeButton = document.getElementById('theme-button');
const themeIcon = document.querySelector('.change-theme-button');
const profile = document.querySelector('.Pic');

// Function to toggle between light and dark themes
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark-theme');
    
    // Check if the theme is dark
    const isDarkTheme = document.documentElement.classList.contains('dark-theme');

    // Change the src of the theme icon based on the theme
    if (isDarkTheme) {
        themeIcon.src = "https://img.icons8.com/ios/50/do-not-disturb-2.png";
        profile.src = "assets//428106222.jpg";
    } else {
        themeIcon.src = "https://img.icons8.com/ios/50/sun--v1.png";
        profile.src = "assets//1000070029.jpg";
    }
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Toggle between light and dark themes
    toggleTheme();
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button__proj").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#Proj", "_blank");
    });
    
    document.getElementById("education__link").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#Skill__Ed", "_blank");
    });
    
    document.getElementById("skills__link").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#Skill__Ed", "_blank");
    });
    
    document.getElementById("PersonalINF__link").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#PersonalInformation", "_blank");
    });
    
    document.getElementById("moreskill__link").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#otherSkill", "_blank");
    });
    
    document.getElementById("hobbies__link").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#hobbies", "_blank");
    });
    
    document.getElementById("relationship__link").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://erixtrip.github.io/upDatedPortfolio/index.html#relationship", "_blank");
    });


    document.getElementById("more").addEventListener("click", function(event) {
        event.preventDefault();

        var sideNav = document.getElementById("showSideNav");
        var more__button = document.getElementById("more__button");

        if (sideNav.style.display === "block") {
            sideNav.style.display = "none";
            more__button.style.transform = "none";
        } else {
            sideNav.style.display = "block";
            more__button.style.transform = "rotate(90deg)";
        }
    });

    var texts = [
        "A 2nd-year BSIT student from Bicol University. On a mission to conquer the coding universe, I'm dedicated to finishing my studies and mastering the art of Information Technology. <br>Let's tech it to the next level! 🚀💻 #BSITExplorer",
        "You'll often find me on the volleyball court or immersed in the latest TikTok trends.🏐📱<br> I believe in continuous learning and growth, Let's see where this journey takes me.<br>Let's share our love for volleyball and TikTok trends! 🏐📱",
        "I enjoy exploring new design trends on Pinterest and creating cover photos and posters.🎨 <br>I'm always looking for new opportunities to learn and grow, and I'm excited to see where my journey in the world of technology takes me.<br>Let's connect and share our design inspirations! 🎨✨"
    ];

    var small = document.querySelector(".small");
    
    function updateText() {
        var smallText = texts[Math.floor(Math.random() * texts.length)];
        small.innerHTML = "<p>" + smallText + "</p>";
    }

    updateText(); // Initial update

    setInterval(updateText, 3000); // Update every minute (60000 milliseconds)
});

