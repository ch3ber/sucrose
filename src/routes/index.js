import Header from '../templates/Header';
import App from '../pages/App';
import Commands from '../pages/Commands';
import Credits from '../pages/Credits';
import WebDevs from '../pages/WebDevs';
import BotDevs from '../pages/BotDevs';
import Design from '../pages/Designers';

import { getRoute } from '../utils/getHas';
import { resolveRoutes } from '../utils/resolveRoutes';

const routes = {
   '/': App(),
   '/credits': Credits(),
   '/webdevs': WebDevs(),
   '/botdevs': BotDevs(),
   '/design': Design(),
   '/commands': Commands(),
   '/commands/confesiones': Commands('confesiones'),
   '/commands/diversion': Commands('diversion'),
   '/commands/economia': Commands('economia'),
   '/commands/informacion': Commands('informacion'),
   '/commands/juegos': Commands('juegos'),
   '/commands/moderacion': Commands('moderacion'),
   '/commands/musica': Commands('musica'),
   '/commands/otros': Commands('otros'),
   '/commands/roleplay': Commands('roleplay'),
}

const Error404 = () => '<p>Error 404</p>'

const router = async () => {
   const header = null || document.getElementById('header');
   const content = null || document.getElementById('content');

   let hash = getRoute();
   let route = resolveRoutes(hash);
   let render = routes[route] ? routes[route] : Error404()
   if (route == '/credits') {
      header.innerHTML = await Header('Creditos')
   } else {
      header.innerHTML = await Header()
   }
   content.innerHTML = await render;
}

export default router;
