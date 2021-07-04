export default function initAnimacaoScroll() {
   const sections = document.querySelectorAll('[data-anime="scroll"]');

   if (sections.length) {
      const windowsMetade = window.innerHeight * 0.6;

      function animaScroll() {
         sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - windowsMetade < 0;
            if (isSectionVisible) {
               section.classList.add('ativo');
            } else if (section.classList.contains('ativo')) {
               section.classList.remove('ativo');
            }
         });
      }

      animaScroll();

      window.addEventListener('scroll', animaScroll);
   }
}
