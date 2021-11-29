import App from '../pages/App';
import Commands from '../pages/Commands';
import Credits from '../pages/Credits';
import WebDevs from '../pages/WebDevs';
import BotDevs from '../pages/BotDevs';
import Design from '../pages/Designers';

import Header from '../templates/Header';

const router = async () => {
   const header = document.getElementById('header');
   const content = document.getElementById('content');

   switch (location.hash) {
      case '#/commands':
         header.innerHTML = await Header('Comandos');
         content.innerHTML = await Commands();
         break;
      case '#/credits':
         header.innerHTML = await Header('Creditos');
         content.innerHTML = await Credits();
         break;
      case '#/webdevs':
         header.innerHTML = await Header('Web Devs');
         content.innerHTML = await WebDevs();
         break;
      case '#/botdevs':
         header.innerHTML = await Header('Bot Devs');
         content.innerHTML = await BotDevs();
         break;
      case '#/design':
         header.innerHTML = await Header('Diseñadores');
         content.innerHTML = await Design();
         break;
      default:
         header.innerHTML = await Header();
         content.innerHTML = await App();
   }
}

export default router;
