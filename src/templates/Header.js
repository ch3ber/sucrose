import SucroseLogo from '../assets/img/surcrose-img__green.png';
const Header = (title = 'Sucrose.') => {
   const view = `
      <a href="/app.html">
         <img class="surcrose_logo" src="${SucroseLogo}" alt="sucrose logo" />
         <h1 class="title">${title}</h1>
      </a>
    </header>
   `;
   return view;
}

export default Header;
