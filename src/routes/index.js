import Commands from '../pages/Commands';
import Credits from '../pages/Credits';

import Header from '../templates/Header';

const router = async () => {
   const header = document.getElementById('header');
   const content = document.getElementById('content');

   switch (location.hash) {
      case '#/commands':
         content.innerHTML = '';
         header.innerHTML = await Header();
         content.innerHTML = await Commands();
         break;
      case '#/credits':
         content.innerHTML = '';
         header.innerHTML = await Header();
         content.innerHTML = await Credits();
         break;
      default:
         break;
   }
}

export default router;