
// Select and cache the <main> element
const mainEl = document.querySelector('main');
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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


const subMenu = document.getElementById('sub-menu');
subMenu.style.height = "100%";
subMenu.style.background = "var(--sub-menu-bg)";
subMenu.style.position = "absolute";  
subMenu.style.top = "0%";
subMenu.classList.add("flex-around");

const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") return;


  topMenuArray()
  topMenuLinks.forEach(link => {
    if (link !== event.target) link.classList.remove("active");
  });

  event.target.classList.toggle("active");

  subMenu.innerHTML = "";

  const linkObj = menuLinks.find(link => link.text === event.target.textContent);

  if (event.target.classList.contains("active") && linkObj.subLinks) {
    linkObj.subLinks.forEach(subLink => {
      const a = document.createElement("a");
      a.setAttribute("href", subLink.href);
      a.textContent = subLink.text;
      subMenu.appendChild(a);
    });
    subMenu.style.top = "100%";
  } else {
    subMenu.style.top = "0";
  }
});

 console.log(topMenuLinks)