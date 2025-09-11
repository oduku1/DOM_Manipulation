
// Select and cache the <main> element
const mainEl = document.querySelector('main');
const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

// Set the background color using the CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add the flex-ctr class
mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById("top-menu")

topMenuEl.style.height = "100%";
topMenuEl.style.background = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")

menuLinks.forEach( menu => {
    const anchor = document.createElement("a");
    anchor.setAttribute("href",menu.href);
    anchor.textContent = menu.text
    topMenuEl.append(anchor)
});


