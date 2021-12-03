import DB from '../../db.json';

import DevCard from '../templates/DevCard';
import CreditsMenu from '../templates/CreditsMenu';

import got from '../assets/img/designers/4got.webp';
import nico from '../assets/img/designers/Nicohrz.webp';

const Designers = async () => {
   const view = `
   <div id="container" class="container-web">

   <div class="users-div await-transitionBar">
     <div class="users">
       <ul class="users-list">

         ${await DB.devs.designers.map(dev => ( DevCard(dev.photo, dev.name, dev.bio))).join('')}

       </ul>
     </div>
   </div>

   ${CreditsMenu()}
   <div class="transitionBar left-transition"></div>

 </div>
   `;
   return view;
}

export default Designers;
