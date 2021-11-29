import CreditsMenu from '../templates/CreditsMenu';
import DevCard from '../templates/DevCard';

import marc from '../assets/img/webDevs/Marc.webp';
import ch3ber from '../assets/img/webDevs/ch3ber.webp';
import marco from '../assets/img/webDevs/Marco Production.webp';
import pros from '../assets/img/webDevs/prospátheia.webp';
import alex from '../assets/img/webDevs/AlexDev.webp';

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

         ${DevCard(marco, 'Marco', `
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
         `)}

         ${DevCard(alex, 'AlexDev', `
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

   ${CreditsMenu()}
   <div class="transitionBar left-transition"></div>

</div>
   `;
  return view;
};

export default WebDevs;

/*
<li class="user">
  <a href="https://elmarcz.github.io/portfolio">
    <img src="../assets/img/WebDev/Marc.webp" class="img" />
  </a>
  <div class="user-text">
    <div class="h1-creditos">
      <h1>爪卂尺匚</h1>
    </div>
    <div class="p-creditos">
      <p>
        💻 Future Full Stack 💲 Cryptos 🔒 Security ☁️ Networking 🌐
        Cibersecurity lover 🌍Spain
      </p>
    </div>
  </div>
</li>
*/
