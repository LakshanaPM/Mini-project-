// Selecting DOM elements
const menus = document.querySelector('.nav ul');
const header = document.querySelector('header');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

// Toggle menu open
menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});

// Toggle menu close
closeBtn.addEventListener("click", () => {
    menus.classList.remove("display"); // FIX: Removed wrong class "closeBtn", should remove "display"
});

// Add sticky class on scroll
window.addEventListener('scroll', () => { // FIX: Added missing 'function' keyword
    if (document.documentElement.scrollTop > 20) {
        header.classList.add('sticky');
    } else {
        header.classList.remove("sticky");
    }
});

// Animate numbers
const countersEl = document.querySelectorAll(".numbers");
countersEl.forEach((counter) => {
    counter.textContent = 0;
    incrementCounter(counter); // FIX: Pass each counter as argument

    function incrementCounter(el) {
        let currentNum = +el.textContent;
        const dataCeil = +el.getAttribute("data-ceil"); // FIX: Removed dot before attribute name
        const increment = dataCeil / 25;
        currentNum = Math.ceil(currentNum+ increment);

        if (currentNum < dataCeil) {
            el.textContent = currentNum;
            setTimeout(() => incrementCounter(el), 50);
        } else {
            el.textContent = dataCeil;
        }
    }
});

