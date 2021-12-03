import db from '../../db.json'
import CommandCard from '../templates/CommandCard';

export function resolveCommands(command) {

   const DEFAULT_CONTENT = '<p class="commands-descubre await-transitionBar">Descubre!</p>'

   switch (command) {
      case 'confesiones':
         return db.commands.confesiones.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'diversion':
         return db.commands.diversion.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case null:
         return DEFAULT_CONTENT;
   }
}
