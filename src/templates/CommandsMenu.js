const CommandsMenu = () => {
   const view = `
      <nav class="commands-menu">
         <ul class="commands-menu__container">
            <li class="button-shadow"><a href="#/commands/actividades">Actividades</a></li>
            <li class="button-shadow"><a href="#/commands/confesiones">Confesiones</a></li>
            <li class="button-shadow"><a href="#/commands/diversion">Diversión</a></li>
            <li class="button-shadow"><a href="#/commands/econonmia">Econonmía</a></li>
            <li class="button-shadow"><a href="#/commands/informacion">Información</a></li>
            <li class="button-shadow"><a href="#/commands/moderacion">Moderación</a></li>
            <li class="button-shadow"><a href="#/commands/musica">Música</a></li>
            <li class="button-shadow"><a href="#/commands/otros">Otros</a></li>
            <li class="button-shadow"><a href="#/commands/roleplay">Roleplay</a></li>
         </ul>
     </nav>
   `;
   return view;
}

export default CommandsMenu;
