const salutationContainer = window.document.getElementById('salutationContainer');
const infoConatiner = window.document.getElementById('infoContainer');

const functions = {
   infoButton : () => {
      if(salutationContainer.classList.contains('visible')) {
         salutationContainer.classList.remove('visible');
         infoConatiner.classList.add('visible');
      } else {
         return false;
      }
   },
   homeButton : () => {
      if(infoContainer.classList.contains('visible')) {
         infoConatiner.classList.remove('visible');
         salutationContainer.classList.add('visible');
      } else {
         return false;
      }
   }
};

window.document.body.querySelectorAll('[data-func]').forEach(element => {
   element.addEventListener('click', event => {
      const dataFunc = element.dataset.func;
      if (typeof(dataFunc) === 'string' && typeof(functions[dataFunc]) === 'function') {
         functions[dataFunc] ({
            element : element,
            event : event
         });
      };
   });
});