import CreditsMenu from '../templates/CreditsMenu';
import DevCard from '../templates/DevCard';

import marc from '../assets/img/webDevs/Marc.webp';
import ch3ber from '../assets/img/webDevs/ch3ber.webp';
import pros from '../assets/img/webDevs/prospátheia.webp';

const WebDevs = () => {
  const view = `
<div id="container" class="container-web">
  <div class="users-div await-transitionBar">
    <div class="users">
      <ul class="users-list">
         
         ${DevCard(ch3ber, 'ch3ber', `
            Soy Eber Alejo un Frontend web developer y Freelancer originario de México,
            actualmente estoy estudiando la carrera de desarrollo web en la preparatoria.
            Soy un amante de la programación y de Linux 
         `, 'ch3ber')}

         ${DevCard(pros, 'pros', `
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
