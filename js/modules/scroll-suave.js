// SCRIPS PARA SMOOTH SCROLL PARA OS LINKS INTERNOS
export default function initScrollSuave() {
   const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

   linksInternos.forEach(link => {
      link.addEventListener('click', scrollToSection);
   });

   function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
         block: 'start',
         behavior: 'smooth'
      });
   }
}
