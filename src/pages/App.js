const App = () => {
   const view = `
      <div class="app">
         <div class="app__links">
            <a class="app__links--link button-shadow" href="#/commands">Comandos</a>
            <a class="app__links--link button-shadow" href="https://discord.com/api/oauth2/authorize?client_id=887706723232669717&scope=bot+applications.commands&permissions=8">Invita</a>
            <a class="app__links--link button-shadow" href="https://discord.gg/9DRPMaxDKX">Soporte</a>
            <a class="app__links--link button-shadow" href="https://paypal.me/Allergur123?country.x=ES&locale.x=es_E">Contribuir</a>
            <a class="app__links--credits button-shadow" href="#/credits">Creditos</a>
         </div>
         <p class="app__text">Adelante!</p>
      </div>
   `;
   return view;
}

export default App;
