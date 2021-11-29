import CreditsMenu from '../templates/CreditsMenu';

const Credits = () => {
   const view = `
      ${CreditsMenu()}
     <div class="transitionBar left-transition"></div>
   `;
   return view;
}

export default Credits;
