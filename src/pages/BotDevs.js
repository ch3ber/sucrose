import DB from '../../db.json';

import DevCard from '../templates/DevCard';
import CreditsMenu from '../templates/CreditsMenu';

const BotDevs = async () => {
   const view = `
   <div id="container" class="container-web">
   <div class="users-div await-transitionBar">
     <div class="users">
       <ul class="users-list">

         ${await DB.devs.botdevs.map(dev => ( DevCard(dev.photo, dev.name, dev.bio, dev.github))).join('')}

       </ul>
     </div>
   </div>

   ${CreditsMenu()}
   <div class="transitionBar left-transition"></div>

 </div>
 
   `;
   return view;
}

export default BotDevs;
