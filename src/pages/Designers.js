import DevCard from '../templates/DevCard';
import CreditsMenu from '../templates/CreditsMenu';

import got from '../assets/img/designers/4got.webp';
import nico from '../assets/img/designers/Nicohrz.webp';

const Designers = () => {
   const view = `
   <div id="container" class="container-web">

   <div class="users-div await-transitionBar">
     <div class="users">
       <ul class="users-list">

         ${DevCard(got, '4got', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}

         ${DevCard(nico, 'Nicohrz', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}
         
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
