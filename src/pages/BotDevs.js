import DevCard from '../templates/DevCard';
import CreditsMenu from '../templates/CreditsMenu';

import allergur from '../assets/img/botDevs/Allergur.webp';
import polarsito from '../assets/img/botDevs/polarsito.webp';
import marc from '../assets/img/botDevs/Marc.webp';
import drgato from '../assets/img/botDevs/drgatoxd.webp';
import frank from '../assets/img/botDevs/Frank.webp';
import heart from '../assets/img/botDevs/Heart.webp';
import sus from '../assets/img/botDevs/Sus.webp';

const BotDevs = () => {
   const view = `
   <div id="container" class="container-web">
   <div class="users-div await-transitionBar">
     <div class="users">
       <ul class="users-list">

         ${DevCard(allergur, 'Allergur', `
            💻 Future Full Stack 💲 Cryptos 🔒 Security ☁️ Networking 🌐
            Cibersecurity lover 🌍Spain
         `)}

         ${DevCard(polarsito, 'Polarsito', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}

         ${DevCard(marc, 'Marc', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}

         ${DevCard(drgato, 'drgatoxd', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}

         ${DevCard(frank, 'Frank', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}

         ${DevCard(heart, 'Heart', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}
 
         ${DevCard(sus, 'Sus', `
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

export default BotDevs;
