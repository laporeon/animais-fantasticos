// INICIA A NAVEGAÇÃO ENTRE AS IMAGENS E SUAS RESPECTIVAS DESCRIÇÕES
function initTabNav() {
   const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
   const tabContent = document.querySelectorAll('[data-tab="content"] section');

   if (tabMenu.length && tabContent.length) {
      // DEIXA O PRIMEIRO ITEM DA LISTA DE ANIMAIS SEMPRE ATIVO QUANDO O SITE FOR RECARREGADO
      tabContent[0].classList.add('ativo');

      // ADICIONA A CLASSE ATIVO EM CADA SEÇÃO DE DESCRIÇÃO DA LISTA DE ANIMAIS AO CLICAR NA IMAGEM REFERENTE

      function activeTab(index) {
         tabContent.forEach(section => {
            section.classList.remove('ativo');
         });
         const direcao = tabContent[index].dataset.anime;
         tabContent[index].classList.add('ativo', direcao);
      }

      tabMenu.forEach((itemMenu, index) => {
         itemMenu.addEventListener('click', () => {
            activeTab(index);
         });
      });
   }
}

initTabNav();

// SCRIPTS PARA ACCORDION LIST DA SEÇÃO FAQ

function initAccordion() {
   const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
   accordionList[0].classList.add('ativo');
   accordionList[0].nextElementSibling.classList.add('ativo');

   if (accordionList.length) {
      accordionList.forEach(item => {
         item.addEventListener('click', activeAccordion);
      });

      function activeAccordion(event) {
         this.classList.toggle('ativo');
         this.nextElementSibling.classList.toggle('ativo');
      }
   }
}

initAccordion();

// SCRIPS PARA SMOOTH SCROLL PARA OS LINKS INTERNOS

function initScrollSuave() {
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

initScrollSuave();

// SCRIPS PARA ANIMAÇÃO AO SCROLL
function initAnimacaoScroll() {
   const sections = document.querySelectorAll('[data-anime="scroll"]');

   if (sections.length) {
      const windowsMetade = window.innerHeight * 0.6;

      function animaScroll() {
         sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - windowsMetade < 0;
            if (isSectionVisible) {
               section.classList.add('ativo');
            } else {
               section.classList.remove('ativo');
            }
         });
      }

      animaScroll();

      window.addEventListener('scroll', animaScroll);
   }
}

initAnimacaoScroll();
