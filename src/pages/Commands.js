import CommandsMenu from '../templates/CommandsMenu'
import {resolveCommands} from '../utils/resolveCommands';

const Commands = (commandsContent = null) => {
   const view = `
      <div class="commands">
         ${CommandsMenu()}
         <div class="commands__list await-transitionBar">
            ${resolveCommands(commandsContent)}
         </div>
      </div>
      <div class="transitionBar left-transition"></div>
   `;
   return view;
}

export default Commands;
