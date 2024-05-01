document.addEventListener("DOMContentLoaded", function (event) {
    // Dark theme
    var prevActiveTheme = localStorage.getItem("theme-color");
    document.documentElement.setAttribute("data-theme", prevActiveTheme ? prevActiveTheme : "dark");
    var themeToggle = document.getElementsByClassName('theme-color-toggle')[0];
    themeToggle.onclick = function () {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var switchToTheme = currentTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme-color", switchToTheme)
        document.documentElement.setAttribute("data-theme", switchToTheme);
    }

    // AOs
    AOS.init({
        once: true,
        offset: 10,
        duration: 600,
        easing: 'cubic-bezier(0.42, 0, 0.12, 1.28)'
    });

    // Smooth scroll
    document.querySelectorAll('.header .nav .nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            });
        });
    });

    // Mobile menu
    var mobileMenuToggle = document.getElementsByClassName('mobile-menu-toggle')[0];
    mobileMenuToggle.onclick = function () {
        document.querySelector(".nav-links").classList.toggle('active');
    }

    // Experiences
    document.querySelector(".companies-list").addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.tagName === 'LI') {
           window.innerWidth > 992 ? document.querySelector(".selector").style.top = e.target.offsetTop + 'px' : null;
            document.querySelector("li.active").classList.remove('active')
            e.target.classList.add('active');
            var targetTab = e.target.getAttribute('data-tab');
            if (targetTab) {
                document.querySelector(".content.active").classList.remove('active')
                document.getElementById(targetTab).classList.add('active')
            }
        }
    });
})
