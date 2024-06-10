function scrollToElement(elementSelector, instance = 0) {
      const elements = document.querySelectorAll(elementSelector);

      if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
      }
    }
console.log(scrollToElement);
    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");

    link1.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToElement('.header');
});
link2.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToElement('.header', 1);
});
link3.addEventListener('click', (event) => {
  event.preventDefault();
  scrollToElement('.column');
});