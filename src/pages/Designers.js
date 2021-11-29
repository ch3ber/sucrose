import CreditsMenu from '../templates/CreditsMenu';

import got from '../assets/img/designers/4got.webp';
import nico from '../assets/img/designers/Nicohrz.webp';

const Designers = () => {
   const view = `
   <div id="container" class="container-web">

   <div class="users-div">
     <div class="users">
       <ul class="users-list">
         <li class="user">
           <a href="https://elmarcz.github.io/portfolio">
             <img src="${got}" class="img-user" />
           </a>
           <div class="user-text">
             <div class="h1-creditos">
               <h1>4got</h1>
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
             <img src="${nico}" class="img-user" />
           </a>
           <div class="user-text">
             <div class="h1-creditos">
               <h1>Nicohrz</h1>
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
}

export default Designers;
