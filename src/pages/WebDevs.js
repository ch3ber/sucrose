import DB from '../../db.json';

import CreditsMenu from '../templates/CreditsMenu';
import DevCard from '../templates/DevCard';

import marc from '../assets/img/webDevs/Marc.webp';
import ch3ber from '../assets/img/webDevs/ch3ber.webp';
import pros from '../assets/img/webDevs/prospátheia.webp';

const WebDevs = async () => {
  const view = `
  <div id="container" class="container-web">
    <div class="users-div await-transitionBar">
      <div class="users">
        <ul class="users-list">

          ${
              await DB.devs.webdevs.map(dev => ( DevCard(dev.photo, dev.name, dev.bio, dev.github))).join('')
          }

        </ul>
      </div>
    </div>
  </div>

   ${CreditsMenu()}
   <div class="transitionBar left-transition"></div>
   `;
  return view;
};

export default WebDevs;
