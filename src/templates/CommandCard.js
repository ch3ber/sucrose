const CommandCard = (id, name, description) => {
   const view = `
      <div class="command-card">
         <h2 class="command-card__name">${name}</h2>
         <p class="command-card__text">${description}</p>
      </div>
   `;
   return view;
}

export default CommandCard;
