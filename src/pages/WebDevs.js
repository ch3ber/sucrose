import CreditsMenu from '../templates/CreditsMenu';

import marc from '../assets/img/webDevs/Marc.webp';
import ch3ber from '../assets/img/webDevs/ch3ber.webp';
import marco from '../assets/img/webDevs/Marco Production.webp';
import pros from '../assets/img/webDevs/prospátheia.webp';
import alex from '../assets/img/webDevs/AlexDev.webp';

const WebDevs = () => {
  const view = `
  <div id="container" class="container-web">

  <div class="users-div">
    <div class="users">
      <ul class="users-list">
        <li class="user">
          <a href="https://elmarcz.github.io/portfolio">
            <img src="${ch3ber}" class="img-user" />
          </a>
          <div class="user-text">
            <div class="h1-creditos">
              <h1>ch3ber</h1>
            </div>
            <div class="p-creditos">
              <p>
                💻 Future Full Stack 💲 Cryptos 🔒 Security ☁️ Networking 🌐
                Cibersecurity lover 🌍Spain
              </p>
            </div>
          </div>
        </li>

        <li class="user">
          <a href="https://elmarcz.github.io/portfolio">
            <img src="${pros}" class="img-user" />
          </a>
          <div class="user-text">
            <div class="h1-creditos">
              <h1>prospátheia</h1>
            </div>
            <div class="p-creditos">
              <p>
                💻 Future Full Stack 💲 Cryptos 🔒 Security ☁️ Networking 🌐
                Cibersecurity lover 🌍Spain
              </p>
            </div>
          </div>
        </li>

        <li class="user">
        <a href="https://elmarcz.github.io/portfolio">
          <img src="${marco}" class="img-user" />
        </a>
        <div class="user-text">
          <div class="h1-creditos">
            <h1>Marco Production</h1>
          </div>
          <div class="p-creditos">
            <p>
              💻 Future Full Stack 💲 Cryptos 🔒 Security ☁️ Networking 🌐
              Cibersecurity lover 🌍Spain
            </p>
          </div>
        </div>
      </li>

      <li class="user">
      <a href="https://elmarcz.github.io/portfolio">
        <img src="${alex}" class="img-user" />
      </a>
      <div class="user-text">
        <div class="h1-creditos">
          <h1>AlexDev</h1>
        </div>
        <div class="p-creditos">
          <p>
            💻 Future Full Stack 💲 Cryptos 🔒 Security ☁️ Networking 🌐
            Cibersecurity lover 🌍Spain
          </p>
        </div>
      </div>
    </li>

    <li class="user">
    <a href="https://elmarcz.github.io/portfolio">
      <img src="${marc}" class="img-user" />
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
