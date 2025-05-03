const menuButton = document.querySelector('nav .md\\:hidden button');
const mobileMenu = document.querySelector('nav > div.md\\:hidden.mt-4');
if (menuButton && mobileMenu) {
  mobileMenu.classList.add('hidden');
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
} else {
  console.error("Could not find the mobile menu button or the mobile menu element. Check selectors.");
}
